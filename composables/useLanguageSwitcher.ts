const LANG_KEY = 'preferred-language'

/** Strip trailing slash for map lookup (root `/` is kept as-is). */
function norm(path: string) {
  return path.length > 1 && path.endsWith('/') ? path.slice(0, -1) : path
}

/**
 * Maps each German route to its English counterpart and vice versa.
 * All paths are WITHOUT trailing slashes.
 * Update this map whenever a new EN page is created under pages/en/.
 */
const deToEn: Record<string, string> = {
  '/': '/en',
  '/blog': '/en/blog',
  '/firmenwebsite': '/en/business-website',
  '/firmenwebsite-erstellen-lassen': '/en/business-website-design',
  '/landingpage-erstellen-lassen': '/en/landing-page-design',
  '/online-shop-erstellen-lassen': '/en/online-shop-development',
  '/webdesign': '/en/web-design',
  '/ui-ux-design': '/en/ui-ux-design',
  '/design-branding': '/en/design-branding',
  '/webseiten-texte-schreiben-lassen': '/en/website-copywriting',
  '/web-development': '/en/web-development',
  '/seo': '/en/seo',
  '/seo-optimieren-lassen': '/en/seo-optimization',
  '/seo-audit': '/en/seo-audit',
  '/local-seo': '/en/local-seo',
  '/seo-linkbuilding': '/en/seo-link-building',
  '/ai-optimierung': '/en/ai-optimization',
  '/online-marketing': '/en/online-marketing',
  '/marketing-google-ads': '/en/google-ads-management',
  '/marketing-social-media': '/en/social-media-marketing',
  '/preise': '/en/pricing',
  '/webseite-kosten-kalkulator': '/en/website-cost-calculator',
  '/kontakt': '/en/contact',
  '/datenschutz': '/en/privacy-policy',
  '/impressum': '/en/legal-notice',
}

const enToDe: Record<string, string> = Object.entries(deToEn).reduce(
  (acc, [de, en]) => ({ ...acc, [en]: de }),
  {} as Record<string, string>
)

export function useLanguageSwitcher() {
  const route = useRoute()

  const isEnglish = computed(() => route.path.startsWith('/en'))
  const currentLang = computed(() => (isEnglish.value ? 'en' : 'de'))

  const deHref = computed(() => {
    const p = norm(route.path)
    if (p.startsWith('/en/blog/')) return p.replace('/en/blog/', '/blog/')
    return isEnglish.value ? (enToDe[p] ?? '/') : p
  })

  const enHref = computed(() => {
    const p = norm(route.path)
    if (p.startsWith('/blog/')) return p.replace('/blog/', '/en/blog/')
    return isEnglish.value ? p : (deToEn[p] ?? '/en')
  })

  /** The canonical URL of the current page on evolatec.de */
  const canonicalUrl = computed(() => `https://evolatec.de${norm(route.path)}`)

  /** hreflang link tags for useHead — add to every page */
  const hreflangLinks = computed(() => [
    { rel: 'alternate', hreflang: 'de', href: `https://evolatec.de${deHref.value}` },
    { rel: 'alternate', hreflang: 'en', href: `https://evolatec.de${enHref.value}` },
    { rel: 'alternate', hreflang: 'x-default', href: `https://evolatec.de${deHref.value}` },
  ])

  /** Call on language link click to persist the user's choice */
  function savePreference(lang: 'de' | 'en') {
    if (import.meta.client) localStorage.setItem(LANG_KEY, lang)
  }

  /**
   * Call once on mount (homepage only).
   * If the user has a saved preference that differs from the current language,
   * redirect them to the equivalent page in their preferred language.
   */
  function redirectToPreferred() {
    if (!import.meta.client) return
    const saved = localStorage.getItem(LANG_KEY) as 'de' | 'en' | null
    if (!saved) return
    if (saved === 'en' && !isEnglish.value) {
      const target = deToEn[norm(route.path)] ?? '/en'
      navigateTo(target)
    } else if (saved === 'de' && isEnglish.value) {
      const target = enToDe[norm(route.path)] ?? '/'
      navigateTo(target)
    }
  }

  return { currentLang, isEnglish, deHref, enHref, canonicalUrl, hreflangLinks, savePreference, redirectToPreferred }
}
