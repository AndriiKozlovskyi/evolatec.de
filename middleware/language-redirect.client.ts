const LANG_KEY = 'preferred-language'

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
  {} as Record<string, string>,
)

function norm(path: string) {
  return path.length > 1 && path.endsWith('/') ? path.slice(0, -1) : path
}

export default defineNuxtRouteMiddleware((to) => {
  if (!import.meta.client) return

  const saved = localStorage.getItem(LANG_KEY) as 'de' | 'en' | null
  if (!saved) return

  const path = norm(to.path)
  const isEnglish = path.startsWith('/en')

  if (saved === 'en' && !isEnglish) {
    const target = deToEn[path] ?? '/en'
    if (target !== path) return navigateTo(target)
  } else if (saved === 'de' && isEnglish) {
    const target = enToDe[path] ?? '/'
    if (target !== path) return navigateTo(target)
  }
})
