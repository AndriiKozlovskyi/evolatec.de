# i18n Translation — Step-by-Step TODO

## How the English pages work

Each English page lives in `pages/en/` as a separate `.vue` file.  
Nuxt auto-routes them to `/en/<filename>`.

**Pattern for every English page:**

1. Copy the German page as the base
2. Translate all visible strings (headings, body copy, CTAs, meta)
3. Change all internal links from `/de-slug` → `/en/en-slug`
4. Call `useLanguageSwitcher()` and spread `hreflangLinks` into `useHead`
5. Set `htmlAttrs: { lang: 'en' }` in `useHead`
6. Set canonical to `https://evolatec.de/en/<slug>`
7. Update schema.org `inLanguage` to `'en-US'` and all `url` fields
8. Add `hreflangLinks` to the **German** source page's `useHead` (mirrors step 4)

---

## Route Map (DE ↔ EN)

| German page file | German URL | English page file | English URL |
|---|---|---|---|
| `pages/index.vue` | `/` | `pages/en/index.vue` ✅ | `/en` |
| `pages/firmenwebsite.vue` | `/firmenwebsite` | `pages/en/business-website.vue` | `/en/business-website` |
| `pages/firmenwebsite-erstellen-lassen.vue` | `/firmenwebsite-erstellen-lassen` | `pages/en/business-website-design.vue` | `/en/business-website-design` |
| `pages/landingpage-erstellen-lassen.vue` | `/landingpage-erstellen-lassen` | `pages/en/landing-page-design.vue` | `/en/landing-page-design` |
| `pages/online-shop-erstellen-lassen.vue` | `/online-shop-erstellen-lassen` | `pages/en/online-shop-development.vue` | `/en/online-shop-development` |
| `pages/webdesign.vue` | `/webdesign` | `pages/en/web-design.vue` | `/en/web-design` |
| `pages/ui-ux-design.vue` | `/ui-ux-design` | `pages/en/ui-ux-design.vue` | `/en/ui-ux-design` |
| `pages/design-branding.vue` | `/design-branding` | `pages/en/design-branding.vue` | `/en/design-branding` |
| `pages/webseiten-texte-schreiben-lassen.vue` | `/webseiten-texte-schreiben-lassen` | `pages/en/website-copywriting.vue` | `/en/website-copywriting` |
| `pages/web-development.vue` | `/web-development` | `pages/en/web-development.vue` | `/en/web-development` |
| `pages/seo.vue` | `/seo` | `pages/en/seo.vue` | `/en/seo` |
| `pages/seo-optimieren-lassen.vue` | `/seo-optimieren-lassen` | `pages/en/seo-optimization.vue` | `/en/seo-optimization` |
| `pages/seo-audit.vue` | `/seo-audit` | `pages/en/seo-audit.vue` | `/en/seo-audit` |
| `pages/local-seo.vue` | `/local-seo` | `pages/en/local-seo.vue` | `/en/local-seo` |
| `pages/seo-linkbuilding.vue` | `/seo-linkbuilding` | `pages/en/seo-link-building.vue` | `/en/seo-link-building` |
| `pages/online-marketing.vue` | `/online-marketing` | `pages/en/online-marketing.vue` | `/en/online-marketing` |
| `pages/marketing-google-ads.vue` | `/marketing-google-ads` | `pages/en/google-ads-management.vue` | `/en/google-ads-management` |
| `pages/marketing-social-media.vue` | `/marketing-social-media` | `pages/en/social-media-marketing.vue` | `/en/social-media-marketing` |
| `pages/preise.vue` | `/preise` | `pages/en/pricing.vue` | `/en/pricing` |
| `pages/webseite-kosten-kalkulator.vue` | `/webseite-kosten-kalkulator` | `pages/en/website-cost-calculator.vue` | `/en/website-cost-calculator` |
| `pages/kontakt.vue` | `/kontakt` | `pages/en/contact.vue` | `/en/contact` |
| `pages/datenschutz.vue` | `/datenschutz` | `pages/en/privacy-policy.vue` | `/en/privacy-policy` |
| `pages/impressum.vue` | `/impressum` | `pages/en/legal-notice.vue` | `/en/legal-notice` |

---

## Progress Checklist

### ✅ Done
- [x] `composables/useLanguageSwitcher.ts` — DE↔EN route map + hreflang helper
- [x] `locales/de.json` — German shared translation strings
- [x] `locales/en.json` — English shared translation strings
- [x] `pages/en/index.vue` — English homepage (`/en`)
- [x] `pages/index.vue` — hreflang links added
- [x] `components/layout/TopNavBar.vue` — DE/EN language switcher added

---

### Step 1 — High-priority service pages (most traffic)

- [ ] **`pages/en/business-website-design.vue`** (`/en/business-website-design`)
  - Source: `pages/firmenwebsite-erstellen-lassen.vue`
  - Add hreflang to German source page
  - Key terms: "business website design", "professional website development"

- [ ] **`pages/en/landing-page-design.vue`** (`/en/landing-page-design`)
  - Source: `pages/landingpage-erstellen-lassen.vue`
  - Add hreflang to German source page
  - Key terms: "landing page design", "conversion-focused landing pages"

- [ ] **`pages/en/online-shop-development.vue`** (`/en/online-shop-development`)
  - Source: `pages/online-shop-erstellen-lassen.vue`
  - Add hreflang to German source page
  - Key terms: "online shop development", "Shopify development", "e-commerce"

- [ ] **`pages/en/seo-optimization.vue`** (`/en/seo-optimization`)
  - Source: `pages/seo-optimieren-lassen.vue`
  - Add hreflang to German source page
  - Key terms: "SEO optimization service", "search engine optimization"

- [ ] **`pages/en/google-ads-management.vue`** (`/en/google-ads-management`)
  - Source: `pages/marketing-google-ads.vue`
  - Add hreflang to German source page
  - Key terms: "Google Ads management", "PPC advertising"

---

### Step 2 — Overview / hub pages

- [ ] **`pages/en/business-website.vue`** (`/en/business-website`)
  - Source: `pages/firmenwebsite.vue`
  - Key terms: "business website", "company website"

- [ ] **`pages/en/web-design.vue`** (`/en/web-design`)
  - Source: `pages/webdesign.vue`
  - Key terms: "web design", "website design agency"

- [ ] **`pages/en/web-development.vue`** (`/en/web-development`)
  - Source: `pages/web-development.vue`
  - Key terms: "web development", "frontend development"

- [ ] **`pages/en/seo.vue`** (`/en/seo`)
  - Source: `pages/seo.vue`
  - Key terms: "SEO services", "search engine optimization agency"

- [ ] **`pages/en/online-marketing.vue`** (`/en/online-marketing`)
  - Source: `pages/online-marketing.vue`
  - Key terms: "online marketing", "digital marketing agency"

---

### Step 3 — Specialist service pages

- [ ] **`pages/en/seo-audit.vue`** (`/en/seo-audit`)
  - Source: `pages/seo-audit.vue`
  - Key terms: "SEO audit", "website SEO analysis"

- [ ] **`pages/en/local-seo.vue`** (`/en/local-seo`)
  - Source: `pages/local-seo.vue`
  - Key terms: "local SEO", "local search optimization"

- [ ] **`pages/en/seo-link-building.vue`** (`/en/seo-link-building`)
  - Source: `pages/seo-linkbuilding.vue`
  - Key terms: "link building", "backlink strategy"

- [ ] **`pages/en/ui-ux-design.vue`** (`/en/ui-ux-design`)
  - Source: `pages/ui-ux-design.vue`
  - Key terms: "UI UX design", "user interface design"

- [ ] **`pages/en/design-branding.vue`** (`/en/design-branding`)
  - Source: `pages/design-branding.vue`
  - Key terms: "branding", "corporate design", "brand identity"

- [ ] **`pages/en/website-copywriting.vue`** (`/en/website-copywriting`)
  - Source: `pages/webseiten-texte-schreiben-lassen.vue`
  - Key terms: "website copywriting", "content writing service"

- [ ] **`pages/en/social-media-marketing.vue`** (`/en/social-media-marketing`)
  - Source: `pages/marketing-social-media.vue`
  - Key terms: "social media marketing", "social media management"

---

### Step 4 — Utility pages

- [ ] **`pages/en/pricing.vue`** (`/en/pricing`)
  - Source: `pages/preise.vue`
  - Key terms: "web design pricing", "website development cost"

- [ ] **`pages/en/website-cost-calculator.vue`** (`/en/website-cost-calculator`)
  - Source: `pages/webseite-kosten-kalkulator.vue`
  - Key terms: "website cost calculator", "web development pricing"

- [ ] **`pages/en/contact.vue`** (`/en/contact`)
  - Source: `pages/kontakt.vue`
  - Update form labels and placeholder texts to English
  - Keep phone/email/address as-is

---

### Step 5 — Legal pages

- [ ] **`pages/en/privacy-policy.vue`** (`/en/privacy-policy`)
  - Source: `pages/datenschutz.vue`
  - Note: Full legal translation — consider professional review

- [ ] **`pages/en/legal-notice.vue`** (`/en/legal-notice`)
  - Source: `pages/impressum.vue`
  - Note: German Impressum is required by law; keep original in place, EN version is supplementary

---

## Per-page useHead template

Copy this into every new English page and fill in the blanks:

```typescript
const { hreflangLinks } = useLanguageSwitcher()

useHead({
  title: 'PAGE TITLE EN – EvolaTec',
  htmlAttrs: { lang: 'en' },
  meta: [
    { name: 'description', content: 'META DESCRIPTION EN (150–160 chars)' },
    { name: 'keywords', content: 'keyword1, keyword2, keyword3' },
    { property: 'og:title', content: 'PAGE TITLE EN – EvolaTec' },
    { property: 'og:description', content: 'OG DESCRIPTION EN' },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://evolatec.de/en/EN-SLUG' },
    { property: 'og:locale', content: 'en_US' },
    { property: 'og:locale:alternate', content: 'de_DE' },
  ],
  link: [
    { rel: 'canonical', href: 'https://evolatec.de/en/EN-SLUG' },
    ...hreflangLinks.value,
  ],
  script: [{ type: 'application/ld+json', innerHTML: JSON.stringify(schemaMarkup) }],
})
```

Add to the **German source page** (mirror step):

```typescript
const { hreflangLinks } = useLanguageSwitcher()
// In useHead → link array:
// ...hreflangLinks.value
```

---

## SEO checklist per English page

- [ ] English `<title>` — primary keyword near the front, under 60 chars
- [ ] English `meta description` — 150–160 chars, includes CTA
- [ ] `htmlAttrs: { lang: 'en' }` set
- [ ] `canonical` pointing to `/en/en-slug`
- [ ] hreflang `de`, `en`, `x-default` (via `hreflangLinks`)
- [ ] `og:locale` = `en_US`, `og:locale:alternate` = `de_DE`
- [ ] Schema.org `inLanguage: 'en-US'` + English `name`/`description`
- [ ] All internal links use English `/en/*` paths
- [ ] Image `alt` attributes translated
- [ ] German source page updated with hreflang links

---

## Footer & shared components (do last)

- [ ] `components/layout/Footer.vue` — make service links and labels language-aware (use `currentLang` from `useLanguageSwitcher` to swap `/kontakt` ↔ `/en/contact`, etc.)
- [ ] `components/sections/CTASection.vue` — verify props pass through correctly for English pages
- [ ] `components/sections/HeroSection.vue` — verify props pass through correctly
- [ ] `components/sections/FAQSection.vue` — verify props pass through correctly
- [ ] `components/sections/ProcessSection.vue` — verify props pass through correctly
