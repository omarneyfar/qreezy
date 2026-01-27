# Qreezy Vitrine Website — AI Agent FULL BUILD SPEC
Framework: Next.js 15 (App Router)
Type: Static Marketing Website
Status: Single Source of Truth

---

## 0. CORE RULES (MUST FOLLOW)

- This website is **NOT** the product platform
- No authentication
- No dashboards
- No business logic
- No pricing display
- Goal = explain + convert (Devis)

The system **must be extensible** to add new solution pages later **without refactoring**.

---

## 1. BRAND & DESIGN SYSTEM

### Color Palette (MANDATORY)
- Primary: **#EF6F60**
- Background: **#FFFFFF**
- Text Primary: #1F2937 (dark gray)
- Text Secondary: #6B7280
- Border / Divider: #E5E7EB

❌ Do NOT introduce random colors  
✅ Shades of the primary color are allowed (opacity / light tint)

---

### Typography
- Font: Inter (or similar modern sans-serif)
- Headings: font-semibold / font-bold
- Body: font-regular
- Large spacing, breathable layout

---

### Design Style
- Minimal
- Clean
- Business-friendly
- Modern SaaS
- Mobile-first
- Rounded corners (8–12px)
- Soft shadows only when needed

---

## 2. GLOBAL LAYOUT COMPONENTS

### 2.1 Root Layout
**File:** `app/layout.tsx`

Must include:
- `<Header />`
- `<main />`
- `<Footer />`

---

### 2.2 Header Component
**Component:** `Header.tsx`

Includes:
- Logo (left)
- Navigation (right)

Navigation items:
- Home
- Digital Menu
- Qreezy Fidelity
- How It Works
- Devis
- Contact

CTA button:
- "Request a Quote" (Primary color)

Behavior:
- Sticky on scroll
- Mobile hamburger menu
- Active link highlight using primary color

---

### 2.3 Footer Component
**Component:** `Footer.tsx`

Includes:
- Logo
- Short tagline
- Links:
  - Privacy Policy
  - Terms of Service
- Copyright

Style:
- Light background
- Small text
- Clean separation

---

## 3. REUSABLE UI COMPONENTS (IMPORTANT)

These components MUST be reusable for future solution pages.

### 3.1 Section Wrapper
`<Section />`
- Handles padding, max-width, spacing

---

### 3.2 Section Header
`<SectionHeader />`
Props:
- title
- subtitle (optional)

---

### 3.3 Feature Card
`<FeatureCard />`
Props:
- icon
- title
- description

Used across:
- Features
- Benefits
- Tools overview

---

### 3.4 CTA Block
`<CTA />`
Props:
- title
- description
- buttonText
- buttonLink

Primary color background

---

### 3.5 Client Card
`<ClientCard />`
Props:
- clientName
- usageDescription

---

## 4. PAGE-BY-PAGE STRUCTURE & COMPONENTS

---

## HOME PAGE (`/`)

### Sections (IN ORDER)

1. Hero Section
Components:
- Section
- Headline (H1)
- Subtitle
- Primary CTA button
- Secondary CTA link

Design:
- White background
- Primary color accent
- Large spacing

---

2. Problem Section
Components:
- SectionHeader
- 4 FeatureCards (pain points)

Icons: outline, simple

---

3. Solutions Overview Section
Components:
- SectionHeader
- 2 FeatureCards (each solution)

⚠️ Must be coded to accept **any number** of cards later

---

4. Clients Section
Components:
- SectionHeader
- ClientCard x2

---

5. Final CTA
Components:
- CTA block

---

## DIGITAL MENU PAGE (`/digital-menu`)

### Sections

1. Intro
- SectionHeader

2. Features
- FeatureCard grid (responsive)

3. Benefits
- Two-column layout
- Business / Customer

4. Use Cases
- FeatureCard list

5. Client Example
- ClientCard

6. CTA
- CTA block

---

## QREEZY FIDELITY PAGE (`/qreezy-fidelity`)

### Sections

1. Intro
- SectionHeader

2. How It Works
- Step list (1–4)
- Must be dynamic array

3. Features
- FeatureCard grid

4. Benefits
- Bullet list

5. Client Example
- ClientCard

6. CTA
- CTA block

---

## HOW IT WORKS PAGE (`/how-it-works`)

### Sections

1. Steps Section
- Ordered list (4 steps)
- Icons optional

Minimal design

---

## DEVIS PAGE (`/devis`)

### Sections

1. Intro
- SectionHeader

2. Quote Form
Component: `<QuoteForm />`

Fields:
- Business name
- Business type
- City / Country
- Full name
- Email
- Phone (optional)
- Checkbox group (solutions)
- Message

Design:
- Clean form
- Primary color submit button
- Success message state

---

## ABOUT PAGE (`/about`)

### Sections

1. Mission
- Text block

2. Values
- FeatureCard grid

---

## CONTACT PAGE (`/contact`)

### Sections

1. Contact Info
- Email
- Phone / WhatsApp

2. CTA
- CTA to Devis

---

## LEGAL PAGES

- `/privacy-policy`
- `/terms-of-service`

Simple text pages using:
- Section
- Typography components

---

## 5. EXTENSIBILITY RULE (VERY IMPORTANT)

The website must be structured so that:
- New solution pages can be added by:
  - Creating a new route
  - Reusing existing components
- No layout or style refactor needed
- Navigation can accept new items easily

❌ Do NOT hardcode solution count  
✅ Use arrays / config objects

---

## 6. SEO & PERFORMANCE

- Use semantic HTML
- One H1 per page
- Meta title & description per page
- Optimized images
- Static rendering

---

## 7. ACCESSIBILITY

- Buttons accessible
- Contrast compliant
- Keyboard navigation supported

---

## 8. WHAT NOT TO DO

- No animations overload
- No dark mode
- No gradients outside primary color
- No feature invention

---

## 9. FINAL HANDOFF NOTE TO AI AGENT

You must:
- Follow this document strictly
- Use the defined color palette
- Build reusable components
- Prepare the system for future expansion
- Keep the website simple and professional

This website is a **foundation**, not a final product showcase.

© Qreezy
