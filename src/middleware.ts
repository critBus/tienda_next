import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// 1. IMPORTACIONES DE NEXT-INTL
import createIntlMiddleware from "next-intl/middleware";
// Asumo que tu archivo de routing está en 'i18n/routing.ts'
// y que exporta un objeto con locales, defaultLocale, etc.
// ¡Asegúrate de que la ruta de importación sea correcta!
import { routing } from "./i18n/routing";

// 2. IMPORTACIONES DE NEXT-AUTH
import NextAuth from "next-auth";
import authConfig from "@/auth/config";
//import authConfig from "./auth.config";
// import { auth } from "@/auth/auth";
// ¡Asegúrate de que la ruta a tus constantes de rutas sea correcta!
import {
  AUTH_ROUTES,
  DEFAULT_LOGIN_REDIRECT,
  PROTECTED_ROUTES,
  LOGIN_URL,
} from "@/auth/routes";

// 3. INICIALIZACIÓN DE LOS MIDDLEWARES
const { auth } = NextAuth(authConfig);

const intlMiddleware = createIntlMiddleware(routing);

// ======================================================================
// EL ORQUESTADOR PRINCIPAL
// ======================================================================
export default async function middleware(request: NextRequest) {
  // const { auth } = NextAuth(authConfig);
  const { pathname } = request.nextUrl;

  // Paso 1: Determinar la ruta semántica (sin el prefijo de idioma)
  // Esto es CLAVE para que la lógica de auth no dependa del idioma.
  let semanticPathname = pathname;
  for (const locale of routing.locales) {
    if (pathname.startsWith(`/${locale}/`)) {
      semanticPathname = pathname.substring(`/${locale}`.length);
      break;
    } else if (pathname === `/${locale}`) {
      semanticPathname = "/";
      break;
    }
  }

  // Paso 2: Ejecutar la lógica de autenticación SOLO si es necesario
  const isProtectedRoute = PROTECTED_ROUTES.some((route) =>
    semanticPathname.startsWith(route)
  );
  const isAuthRoute = AUTH_ROUTES.some((route) =>
    semanticPathname.startsWith(route)
  );

  if (isProtectedRoute || isAuthRoute) {
    try {
      const session = await auth();
      const isLoggedIn = !!session;

      // Lógica para rutas protegidas
      if (isProtectedRoute && !isLoggedIn) {
        let callbackUrl = request.nextUrl.pathname;
        if (request.nextUrl.search) {
          callbackUrl += request.nextUrl.search;
        }
        const encodedCallbackUrl = encodeURIComponent(callbackUrl);

        // Redirige a la página de login, manteniendo el locale si existe
        const loginUrlWithLocale = pathname.startsWith(`/${routing.locales[0]}`)
          ? `/${pathname.split("/")[1]}${LOGIN_URL}`
          : LOGIN_URL;

        return NextResponse.redirect(
          new URL(
            `${loginUrlWithLocale}?callbackUrl=${encodedCallbackUrl}`,
            request.url
          )
        );
      }

      // Lógica para rutas de autenticación
      if (isAuthRoute && isLoggedIn) {
        // Redirige al destino por defecto, manteniendo el locale
        const redirectUrlWithLocale = pathname.startsWith(
          `/${routing.locales[0]}`
        )
          ? `/${pathname.split("/")[1]}${DEFAULT_LOGIN_REDIRECT}`
          : DEFAULT_LOGIN_REDIRECT;

        return NextResponse.redirect(
          new URL(redirectUrlWithLocale, request.url)
        );
      }
    } catch (error) {
      // Esto puede pasar si la base de datos de sesión no está disponible, etc.
      console.error("Error en el middleware de autenticación:", error);
      // Decide qué hacer en caso de error. Podrías redirigir a una página de error.
      // Por ahora, lo dejamos pasar al middleware de intl.
    }
  }

  // Paso 3: Si la lógica de auth no redirigió, SIEMPRE se ejecuta el middleware de intl.
  // Esto maneja los prefijos de idioma para TODAS las rutas (públicas y protegidas autorizadas).
  return intlMiddleware(request);
}

// 4. CONFIGURACIÓN DEL MATCHER
// Usamos el matcher de tu ejemplo de next-intl, que es excelente.
// Se asegura de que el middleware se ejecute en todas las rutas de páginas,
// pero ignora archivos estáticos y rutas de API.
export const config = {
  matcher: [
    // Habilitar un matcher opcional para que puedas usar la UI de `Bypass`
    // '/((?!api|_next/static|_next/image|favicon.ico).*)'

    // El que tú tenías:
    "/((?!api|trpc|_next|_vercel|.*\\..*).*)",
  ],
};
