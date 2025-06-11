# Playwright

## Ejecutar los test e2e

```bash
pnpm exec playwright test
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
