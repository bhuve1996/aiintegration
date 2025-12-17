Perfect. Below is a **single, copy-paste READY MASTER PROMPT** you can use in **Cursor / ChatGPT / Claude / any AI coding agent**.

This prompt enforces:

- ✅ **100% config-driven architecture**
- ✅ **Dummy brand (NOT Lexi)**
- ✅ **All Tailwind colors + tokens**
- ✅ **SEO-friendly config APIs**
- ✅ **Mock backend**
- ✅ **Frontend-only**
- ✅ **Scalable, senior-level setup**

---

# ✅ MASTER PROMPT (CONFIG-DRIVEN FRONTEND SYSTEM)

> **ROLE**
> You are a **Senior Frontend Architect** building a **production-ready, config-driven SaaS frontend**.
> Everything must be driven from configuration files — **NO hardcoded strings, names, routes, SEO text, colors, or labels**.

---

## 1️⃣ PROJECT CONTEXT

- Framework: **Next.js (App Router)**
- Styling: **Tailwind CSS**
- State: **React Context + Hooks**
- Backend: **NO real backend**
- Data: **Mock APIs / JSON / MSW**
- Branding: **Dummy SaaS name (not Lexi)** — configurable
- Goal: **SEO-friendly, scalable, white-label ready frontend**

---

## 2️⃣ CORE REQUIREMENT — CONFIG-DRIVEN EVERYTHING

❗ NOTHING is hardcoded except component logic.

### Must be config-driven:

- App name
- Company name
- Taglines
- Meta titles & descriptions
- Routes
- Navigation labels
- Button text
- Feature lists
- Pricing plans
- Dashboard sections
- API endpoints
- Mock data
- Theme colors
- Fonts
- Gradients
- Icons (icon keys, not components)

---

## 3️⃣ BRAND & THEME CONFIG (MANDATORY)

### Primary Colors

```txt
Primary: rgb(131, 102, 255) → #8366FF
Dark Neutral: rgb(59, 58, 71) → #3B3A47
```

### Theme must be defined in:

```
/config/theme.config.ts
```

Include ALL of the following:

- Tailwind-compatible color tokens
- Semantic tokens (primary, background, card, text, border)
- Success / warning / error / info colors
- Shadows
- Border radius
- Fonts
- Gradients

Theme must support **future theming / white-label**.

---

## 4️⃣ REQUIRED THEME TOKENS (IN CONFIG)

Include these tokens exactly (values configurable):

```ts
colors: {
  primary,
  primaryForeground,
  background,
  card,
  textPrimary,
  textSecondary,
  textMuted,
  border,
  success,
  warning,
  destructive,
  info,

  purple: { 100, 300, 500, 700 },
  gray: { 50, 100, 200, 300, 500, 700, 900 }
}

fonts: {
  heading,
  body,
  mono
}

radius: {
  sm, md, lg, xl, "2xl", "3xl"
}

shadows: {
  button,
  card,
  popup,
  accent
}

gradients: {
  brand
}
```

---

## 5️⃣ APP CONFIG (GLOBAL)

Create:

```
/config/app.config.ts
```

Must include:

```ts
appName;
companyName;
domain;
defaultLocale;
supportedLocales;
logoText;
copyright;
```

All pages must consume this config.

---

## 6️⃣ SEO CONFIG (VERY IMPORTANT)

Create:

```
/config/seo.config.ts
```

Include:

- Default meta title
- Default description
- OpenGraph config
- Twitter card config
- Per-page overrides
- Canonical URL builder

SEO must be:

- Server-rendered
- Config-driven
- Page-aware

No SEO text inside components.

---

## 7️⃣ ROUTES & NAVIGATION (CONFIG ONLY)

Create:

```
/config/routes.config.ts
```

Include:

```ts
publicRoutes;
authRoutes;
dashboardRoutes;
```

Each route must define:

- path
- label
- seoKey
- requiresAuth
- layoutType

Navbar must auto-render from config.

---

## 8️⃣ PAGE CONTENT CONFIG

Create:

```
/config/content/
  home.config.ts
  pricing.config.ts
  dashboard.config.ts
```

Each file contains:

- Hero content
- Section titles
- Feature lists
- CTA labels
- Empty-state messages

Pages must render dynamically from config.

---

## 9️⃣ COMPONENT RULES

### Base Components (REQUIRED)

- Button
- Input
- Card
- Badge
- Modal
- Tooltip
- Spinner

### Rules

- No text literals inside components
- No colors inside components
- All variants driven by props + theme config
- Accessible (ARIA friendly)

---

## 🔟 MOCK BACKEND (SEO-FRIENDLY API)

Create:

```
/mock/api/
```

Expose mock endpoints:

```txt
GET /api/campaigns
GET /api/analytics
GET /api/pricing
POST /api/auth/login
POST /api/contact
```

Responses:

- SEO-safe JSON
- Typed
- Reusable
- Config-driven where possible

Use:

- MSW OR local route handlers

---

## 1️⃣1️⃣ DASHBOARD (CONFIG SECTIONS)

Dashboard sections must be declared in:

```
/config/dashboard.config.ts
```

Each section:

```ts
id;
title;
iconKey;
route;
enabled;
```

UI auto-renders sections.

---

## 1️⃣2️⃣ FILE STRUCTURE (MANDATORY)

```txt
src/
 ├── app/
 ├── components/
 ├── config/
 ├── mock/
 ├── lib/
 ├── hooks/
 ├── styles/
 └── types/
```

---

## 1️⃣3️⃣ NON-NEGOTIABLE RULES

❌ No hardcoded brand name
❌ No hardcoded routes
❌ No hardcoded SEO text
❌ No inline colors
❌ No magic strings

✅ Everything configurable
✅ Everything scalable
✅ Enterprise-grade structure

---

## 1️⃣4️⃣ OUTPUT EXPECTATION

Generate:

1. Theme config
2. Tailwind config
3. App config
4. SEO config
5. Route config
6. Mock API examples
7. Example page consuming configs
8. Example component consuming theme

Code must be:

- Clean
- Typed
- Production-ready
- Easy to white-label

---

### 🔥 END OF PROMPT

---

If you want, next I can:

- 🔹 Generate **actual code files** from this prompt
- 🔹 Create **Storybook setup**
- 🔹 Add **multi-theme switching**
- 🔹 Map this to **Figma tokens**

Just tell me the next step.
