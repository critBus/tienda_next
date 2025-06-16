# Playwright

## Ejecutar los test e2e

```bash
pnpm exec playwright test
pnpm exec playwright test --project="chromium"
```

## Estructura

```
proyecto-nextjs/
├── src/                          # Código fuente de Next.js
│   ├── app/
│   ├── components/
│   └── ...
├── tests/                        # 🎯 DIRECTORIO PRINCIPAL DE PLAYWRIGHT
│   ├── e2e/                      # Tests end-to-end
│   │   ├── auth/                 # Tests agrupados por funcionalidad
│   │   │   ├── login.spec.ts
│   │   │   ├── register.spec.ts
│   │   │   └── password-reset.spec.ts
│   │   ├── dashboard/
│   │   │   ├── user-dashboard.spec.ts
│   │   │   └── admin-dashboard.spec.ts
│   │   ├── products/
│   │   │   ├── product-list.spec.ts
│   │   │   ├── product-detail.spec.ts
│   │   │   └── product-search.spec.ts
│   │   └── checkout/
│   │       ├── shopping-cart.spec.ts
│   │       └── payment-flow.spec.ts
│   ├── pages/                    # 📋 PAGE OBJECT MODEL
│   │   ├── base/
│   │   │   └── base.page.ts      # Clase base común
│   │   ├── auth/
│   │   │   ├── login.page.ts
│   │   │   ├── register.page.ts
│   │   │   └── password-reset.page.ts
│   │   ├── dashboard/
│   │   │   ├── user-dashboard.page.ts
│   │   │   └── admin-dashboard.page.ts
│   │   ├── products/
│   │   │   ├── product-list.page.ts
│   │   │   ├── product-detail.page.ts
│   │   │   └── product-search.page.ts
│   │   ├── checkout/
│   │   │   ├── shopping-cart.page.ts
│   │   │   └── payment.page.ts
│   │   └── shared/               # Componentes compartidos
│   │       ├── header.component.ts
│   │       ├── footer.component.ts
│   │       ├── navigation.component.ts
│   │       └── modal.component.ts
│   ├── fixtures/                 # 🗃️ DATOS DE PRUEBA
│   │   ├── users/
│   │   │   ├── test-users.json
│   │   │   └── user-data.ts
│   │   ├── products/
│   │   │   ├── test-products.json
│   │   │   └── product-data.ts
│   │   └── api/
│   │       ├── api-responses.json
│   │       └── mock-data.ts
│   ├── utils/                    # 🛠️ UTILIDADES
│   │   ├── auth/
│   │   │   ├── auth-helper.ts
│   │   │   └── token-manager.ts
│   │   ├── database/
│   │   │   ├── db-helper.ts
│   │   │   └── seed-data.ts
│   │   ├── api/
│   │   │   ├── api-client.ts
│   │   │   └── mock-server.ts
│   │   ├── test-data/
│   │   │   ├── data-generator.ts
│   │   │   └── faker-helper.ts
│   │   └── common/
│   │       ├── date-helper.ts
│   │       ├── string-helper.ts
│   │       └── wait-helper.ts
│   ├── config/                   # ⚙️ CONFIGURACIÓN
│   │   ├── environments/
│   │   │   ├── dev.config.ts
│   │   │   ├── staging.config.ts
│   │   │   └── prod.config.ts
│   │   ├── browsers/
│   │   │   ├── chrome.config.ts
│   │   │   ├── firefox.config.ts
│   │   │   └── webkit.config.ts
│   │   └── test-data/
│   │       ├── urls.config.ts
│   │       └── timeouts.config.ts
│   ├── reports/                  # 📊 REPORTES (auto-generados)
│   │   ├── html-report/
│   │   ├── junit-results/
│   │   └── screenshots/
│   └── downloads/               # 📥 ARCHIVOS DESCARGADOS (auto-generados)
├── playwright.config.ts         # Configuración principal
├── .env.test                    # Variables de entorno para tests
└── package.json
```

## **Organización por Responsabilidades**

- **e2e/**: Tests agrupados por funcionalidad
- **pages/**: Page Objects con POM
- **fixtures/**: Datos de prueba centralizados
- **utils/**: Helpers y utilidades
- **config/**: Configuraciones por ambiente

## **Nomenclatura Consistente**

- Tests: `{funcionalidad}.spec.ts`
- Pages: `{pagina}.page.ts`
- Components: `{componente}.component.ts`
- Helpers: `{proposito}-helper.ts`

## urls.config.ts

Centralizar las direcciones de las rutas en los tests 

```typescript
// tests/config/urls.config.ts
export const ROUTES = {
  AUTH: {
    LOGIN: "/auth/login",
    REGISTER: "/auth/register",
  },
  DASHBOARD: "/dashboard",
  PRODUCTS: {
    LIST: "/products",
    DETAIL: (id: string) => `/products/${id}`,
  },
} as const;

// En tus tests
import { ROUTES } from "../../config/urls.config";

test("login test", async ({ page }) => {
  await page.goto(ROUTES.AUTH.LOGIN);
  // Playwright usa baseURL + "/auth/login" automáticamente
});
```

# **Estructura Utiles**

```bash
/src
  /lib
    /shared      # Métodos compartidos (front/back)
    /client      # Métodos solo para frontend
    /server      # Métodos solo para backend
  /app
    /api         # API Routes (backend)
    /components  # Componentes cliente o servidor
```

# Estructura componentes

```
src/
├── app/                          # App Router de Next.js 13+
│   ├── (auth)/                   # Grupos de rutas
│   │   ├── login/
│   │   │   ├── page.tsx
│   │   │   └── _components/       # Componentes específicos de login
│   │   │       ├── LoginForm.tsx
│   │   │       └── LoginHeader.tsx
│   │   └── register/
│   │       ├── page.tsx
│   │       └── _components/
│   │           └── RegisterForm.tsx
├── components/                   # Componentes compartidos
│   ├── ui/                       # Componentes base reutilizables
│   │   ├── Button.tsx
│   │   ├── Input.tsx
│   │   ├── Modal.tsx
│   │   ├── Card.tsx
│   │   └── index.ts              # Barrel exports
│   ├── layout/                   # Componentes de layout
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── Sidebar.tsx
│   │   └── Navigation.tsx
│   ├── forms/                    # Componentes de formularios compartidos
│   │   ├── ContactForm.tsx
│   │   ├── SearchBar.tsx
│   │   └── ValidationMessage.tsx
│   ├── feature/                  # Componentes de características específicas
│   |   ├── profile/
│   |   |   └── UserProfile.tsx       # Usado en múltiples páginas
│   |   └── product/
│   |       └── ProductCard.tsx       # Usado en múltiples páginas
│   ├── providers/                   # Componentes provider
│   │   ├── Providers.tsx
│   │   └── Providers2.tsx
│   └── shared/              # Componentes reutilizados en varias páginas
│       ├── SearchBar.jsx
        └── Pagination.jsx
```

# Estilos css

1- Si un componente pose ciertos estilos solo para el, ponerlos al mismo nivel con su mismo nombre 

```
src/
├── components/                   
│   ├── ui/                       
│   │   ├── Button.tsx
│   │   ├── Button.css
│   └── shared/              
│       ├── Pagination.css
        └── Pagination.jsx
```



Gestión de Esquemas Zod en Next.js - Estrategia Completa

# 🎯 Desafío Específico de Zod

Los esquemas Zod tienen una naturaleza especial porque:

- Se usan en **frontend** (validación de formularios)
- Se usan en **backend** (validación de API routes)
- Se **comparten** entre múltiples dominios
- Requieren **composición** y **reutilización**

## 📁 Estructura Recomendada

```
src/
├── app/
│   ├── (auth)/
│   │   ├── login/
│   │   │   ├── page.tsx
│   │   │   ├── _components/
│   │   │   │   └── LoginForm.tsx      # Usa schemas/auth/login.ts
│   │   │   └── _schemas/              # Esquemas específicos de login
│   │   │       ├── login-form.ts      # Solo para formulario UI
│   │   │       └── login-client.ts    # Validaciones específicas cliente
│   │   ├── register/
│   │   │   ├── page.tsx
│   │   │   ├── _components/
│   │   │   └── _schemas/
│   │   │       ├── register-form.ts
│   │   │       └── register-steps.ts
│   │   └── _schemas/                  # Esquemas compartidos en auth
│   │       ├── auth-shared.ts         # Campos comunes (email, password)
│   │       └── validation-rules.ts    # Reglas específicas de auth
│   ├── dashboard/
│   │   ├── page.tsx
│   │   ├── _components/
│   │   ├── _schemas/                  # Esquemas compartidos en dashboard
│   │   │   ├── dashboard-shared.ts
│   │   │   └── user-preferences.ts
│   │   ├── profile/
│   │   │   ├── page.tsx
│   │   │   └── _schemas/
│   │   │       ├── profile-form.ts
│   │   │       └── avatar-upload.ts
│   │   └── settings/
│   │       ├── page.tsx
│   │       └── _schemas/
│   │           └── settings-form.ts
│   └── api/                          # API Routes
│       ├── auth/
│       │   ├── login/
│       │   │   └── route.ts          # Usa schemas/api/auth.ts
│       │   └── register/
│       │       └── route.ts
│       └── dashboard/
│           ├── profile/
│           │   └── route.ts
│           └── settings/
│               └── route.ts
├── schemas/                      # 🎯 ESQUEMAS CENTRALIZADOS
│    ├── api/                      # Para API Routes (entrada/salida)
│    │   ├── auth.ts               # Esquemas para /api/auth/*
│    │   ├── dashboard.ts          # Esquemas para /api/dashboard/*
│    │   ├── user.ts               # Esquemas para /api/user/*
│    │   └── common.ts             # Respuestas comunes (error, success)
│    ├── shared/                   # Esquemas base y compartidos
│    │   ├── base.ts               # Tipos primitivos y validaciones base
│    │   ├── user.ts               # Modelo de usuario completo
│    │   ├── auth.ts               # Campos de autenticación comunes
│    │   ├── validation.ts         # Reglas de validación reutilizables
│    │   └── types.ts              # TypeScript types derivados
│    ├── forms/                    # Esquemas específicos para formularios
│    │   ├── auth-forms.ts         # Login, register, reset password
│    │   ├── profile-forms.ts      # Formularios de perfil
│    │   └── dashboard-forms.ts    # Formularios del dashboard
│    └── database/                 # Esquemas para base de datos (si usas ORM)
│        ├── user.ts
│        ├── auth.ts
│        └── dashboard.ts
└── types/                           # TypeScript types generados
    ├── api.ts                       # Types para API
    ├── forms.ts                     # Types para formularios
    └── database.ts                  # Types para DB
```

## 🎨 Estrategia por Niveles

### **Nivel 1: Esquemas Base (`schemas/shared/`)**

```typescript
// schemas/shared/base.ts
import { z } from 'zod'

export const emailSchema = z.string().email('Email inválido')
export const passwordSchema = z.string().min(8, 'Mínimo 8 caracteres')
export const phoneSchema = z.string().regex(/^\+?[1-9]\d{1,14}$/, 'Teléfono inválido')

// Validaciones comunes
export const requiredString = z.string().min(1, 'Campo requerido')
export const optionalString = z.string().optional()
export const dateSchema = z.string().datetime()
```

### **Nivel 2: Esquemas de Dominio (`schemas/shared/`)**

```typescript
// lib/schemas/shared/auth.ts
import { emailSchema, passwordSchema } from './base'

export const loginCredentialsSchema = z.object({
  email: emailSchema,
  password: passwordSchema,
})

export const registerDataSchema = z.object({
  email: emailSchema,
  password: passwordSchema,
  confirmPassword: passwordSchema,
  firstName: z.string().min(2, 'Mínimo 2 caracteres'),
  lastName: z.string().min(2, 'Mínimo 2 caracteres'),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Las contraseñas no coinciden",
  path: ["confirmPassword"],
})

export const userSchema = z.object({
  id: z.string(),
  email: emailSchema,
  firstName: z.string(),
  lastName: z.string(),
  role: z.enum(['user', 'admin']),
  createdAt: z.string().datetime(),
  updatedAt: z.string().datetime(),
})
```

### **Nivel 3: Esquemas de API (`schemas/api/`)**

```typescript
// schemas/api/auth.ts
import { loginCredentialsSchema, registerDataSchema, userSchema } from '../shared/auth'

// Request schemas
export const loginRequestSchema = loginCredentialsSchema
export const registerRequestSchema = registerDataSchema.omit({ confirmPassword: true })

// Response schemas
export const loginResponseSchema = z.object({
  user: userSchema,
  token: z.string(),
  refreshToken: z.string(),
})

export const authErrorResponseSchema = z.object({
  error: z.string(),
  code: z.enum(['INVALID_CREDENTIALS', 'USER_EXISTS', 'VALIDATION_ERROR']),
  details: z.record(z.string()).optional(),
})

// Common API responses
export const successResponseSchema = z.object({
  success: z.literal(true),
  message: z.string().optional(),
})

export const errorResponseSchema = z.object({
  success: z.literal(false),
  error: z.string(),
  code: z.string().optional(),
})
```

### **Nivel 4: Esquemas de Formularios (`schemas/forms/`)**

```typescript
// schemas/forms/auth-forms.ts
import { loginCredentialsSchema, registerDataSchema } from '../shared/auth'

// Formularios con validaciones específicas de UI
export const loginFormSchema = loginCredentialsSchema.extend({
  rememberMe: z.boolean().default(false),
})

export const registerFormSchema = registerDataSchema.extend({
  acceptTerms: z.boolean().refine(val => val === true, {
    message: 'Debes aceptar los términos y condiciones'
  }),
  newsletter: z.boolean().default(false),
})

// Formularios multi-step
export const registerStep1Schema = registerDataSchema.pick({
  email: true,
  password: true,
  confirmPassword: true,
})

export const registerStep2Schema = registerDataSchema.pick({
  firstName: true,
  lastName: true,
})
```

### **Nivel 5: Esquemas Específicos (`app/*/\_schemas/`)**

```typescript
// app/(auth)/login/_schemas/login-form.ts
import { loginFormSchema } from '@/schemas/forms/auth-forms'

// Extensiones específicas solo para esta página
export const loginPageFormSchema = loginFormSchema.extend({
  redirectTo: z.string().optional(),
  loginAttempts: z.number().default(0),
})

// Validaciones condicionales específicas
export const loginWithBiometricsSchema = loginFormSchema.extend({
  useBiometrics: z.boolean(),
  biometricToken: z.string().optional(),
}).refine((data) => {
  if (data.useBiometrics) {
    return !!data.biometricToken
  }
  return true
}, {
  message: 'Token biométrico requerido',
  path: ['biometricToken']
})
```

## 🔧 Patrones de Uso

### **1. En API Routes**

```typescript
// app/api/auth/login/route.ts
import { loginRequestSchema, loginResponseSchema } from '@/schemas/api/auth'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // Validar entrada
    const validatedData = loginRequestSchema.parse(body)

    // Lógica de autenticación...
    const result = await authenticateUser(validatedData)

    // Validar salida (opcional pero recomendado)
    const response = loginResponseSchema.parse(result)

    return NextResponse.json(response)
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Datos inválidos', details: error.errors },
        { status: 400 }
      )
    }
    return NextResponse.json(
      { error: 'Error interno del servidor' },
      { status: 500 }
    )
  }
}
```

### **2. En Formularios React**

```typescript
// app/(auth)/login/_components/LoginForm.tsx
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { loginFormSchema } from '@/schemas/forms/auth-forms'
import type { z } from 'zod'

type LoginFormData = z.infer<typeof loginFormSchema>

export function LoginForm() {
  const form = useForm<LoginFormData>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: '',
      password: '',
      rememberMe: false,
    },
  })

  const onSubmit = async (data: LoginFormData) => {
    // El dato ya está validado por Zod
    const response = await fetch('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
    // ...
  }

  return (
    <form onSubmit={form.handleSubmit(onSubmit)}>
      {/* Formulario */}
    </form>
  )
}
```

### **3. Server Actions**

```typescript
// app/(auth)/login/actions.ts
'use server'
import { loginRequestSchema } from '@/schemas/api/auth'
import { revalidatePath } from 'next/cache'

export async function loginAction(formData: FormData) {
  try {
    const data = {
      email: formData.get('email'),
      password: formData.get('password'),
    }

    const validatedData = loginRequestSchema.parse(data)

    // Lógica de autenticación...
    const result = await authenticateUser(validatedData)

    revalidatePath('/dashboard')
    return { success: true, data: result }
  } catch (error) {
    if (error instanceof z.ZodError) {
      return { success: false, error: 'Datos inválidos', details: error.errors }
    }
    return { success: false, error: 'Error de autenticación' }
  }
}
```

## 🎯 Reglas de Decisión

### **¿Dónde poner cada esquema?**

| Caso de Uso                    | Ubicación                              | Ejemplo                                    |
| ------------------------------ | -------------------------------------- | ------------------------------------------ |
| **Validación primitiva**       | `schemas/shared/base.ts`               | `emailSchema`, `passwordSchema`            |
| **Modelo de entidad**          | `schemas/shared/[entity].ts`           | `userSchema`, `productSchema`              |
| **API Request/Response**       | `schemas/api/[domain].ts`              | `loginRequestSchema`, `userResponseSchema` |
| **Formulario compartido**      | `schemas/forms/[domain]-forms.ts`      | `loginFormSchema`, `profileFormSchema`     |
| **Formulario específico**      | `app/[route]/_schemas/[form].ts`       | `loginPageFormSchema`                      |
| **Validación de página única** | `app/[route]/_schemas/[validation].ts` | `resetPasswordTokenSchema`                 |

### **¿Cuándo compartir vs mantener local?**

✅ **Compartir cuando:**

- Se usa en API route + formulario
- Se usa en múltiples páginas
- Es un modelo de datos central
- Tiene lógica de validación compleja

✅ **Mantener local cuando:**

- Solo se usa en una página específica
- Tiene validaciones muy específicas del contexto
- Es temporal o experimental

## 🚀 Ventajas de Esta Estructura

### **1. Composición y Reutilización**

```typescript
// Reutilizar validaciones base
const userBaseSchema = z.object({
  email: emailSchema,
  firstName: requiredString,
  lastName: requiredString,
})

// Extender para diferentes contextos
const createUserSchema = userBaseSchema.extend({
  password: passwordSchema,
})

const updateUserSchema = userBaseSchema.partial().extend({
  id: z.string(),
})
```

### **2. Type Safety Completo**

```typescript
// schemas/shared/types.ts
import { z } from 'zod'
import { userSchema, loginFormSchema } from './auth'

export type User = z.infer<typeof userSchema>
export type LoginFormData = z.infer<typeof loginFormSchema>

// Exportar todos los types
export * from './auth'
export * from './forms'
```

### **3. Validación Consistente**

```typescript
// Misma validación en frontend y backend
import { registerRequestSchema } from '@/schemas/api/auth'

// En API route
const userData = registerRequestSchema.parse(body)

// En formulario React Hook Form
const form = useForm({
  resolver: zodResolver(registerRequestSchema)
})
```

## 🔄 Migración Gradual

### **Fase 1: Establece la base**

1. Crea `lib/schemas/shared/base.ts` con validaciones primitivas
2. Migra esquemas más usados a `lib/schemas/shared/`

### **Fase 2: Organiza por dominio**

1. Agrupa esquemas relacionados en archivos por dominio
2. Crea esquemas específicos de API en `lib/schemas/api/`

### **Fase 3: Optimiza formularios**

1. Crea esquemas específicos para formularios
2. Mueve validaciones específicas a `_schemas/` locales

### **Fase 4: Refinamiento**

1. Identifica patrones de duplicación
2. Extrae validaciones comunes
3. Optimiza imports y exports

## 📚 Ejemplos Prácticos Adicionales

### **Dashboard con múltiples formularios**

```typescript
// schemas/shared/dashboard.ts
export const userPreferencesSchema = z.object({
  theme: z.enum(['light', 'dark']),
  language: z.enum(['es', 'en']),
  notifications: z.boolean(),
})

export const profileUpdateSchema = z.object({
  firstName: requiredString,
  lastName: requiredString,
  bio: z.string().max(500).optional(),
  avatar: z.string().url().optional(),
})

// app/dashboard/_schemas/dashboard-shared.ts
export const dashboardConfigSchema = userPreferencesSchema.extend({
  layout: z.enum(['grid', 'list']),
  itemsPerPage: z.number().min(10).max(100),
})
```

Esta estructura te permitirá mantener tus esquemas organizados, reutilizables y escalables mientras sigues el principio de proximidad donde sea apropiado.
