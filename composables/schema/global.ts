const BASE = 'https://evolatec.de'

/** Stable Organization + ProfessionalService entity — include on EVERY page */
export function organizationSchema() {
  return {
    '@type': ['Organization', 'ProfessionalService'],
    '@id': `${BASE}/#organization`,
    name: 'EvolaTec',
    url: BASE,
    logo: {
      '@type': 'ImageObject',
      '@id': `${BASE}/#logo`,
      url: `${BASE}/logo.png`,
      contentUrl: `${BASE}/logo.png`,
    },
    image: { '@id': `${BASE}/#logo` },
    description:
      'EvolaTec ist eine professionelle Webagentur für Website-Erstellung, SEO-Optimierung und Online Marketing in Deutschland.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Desenißstraße 14',
      addressLocality: 'Hamburg',
      postalCode: '22083',
      addressCountry: 'DE',
    },
    telephone: '+49 175 6200862',
    email: 'team@evolatec.de',
    areaServed: { '@type': 'Country', name: 'Germany' },
    knowsLanguage: ['German', 'English'],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+49 175 6200862',
      contactType: 'sales',
      email: 'team@evolatec.de',
      availableLanguage: ['German', 'English'],
    },
    founder: {
      '@type': 'Person',
      name: 'Maksym Streltsov',
    },
    // Add sameAs when social profiles are live:
    // sameAs: ['https://linkedin.com/company/evolatec', 'https://facebook.com/evolatec'],
  }
}

/** Stable WebSite entity — include on EVERY page */
export function websiteSchema() {
  return {
    '@type': 'WebSite',
    '@id': `${BASE}/#website`,
    name: 'EvolaTec',
    url: BASE,
    description:
      'Professionelle Webagentur für Website-Erstellung, SEO-Optimierung und Online Marketing',
    publisher: { '@id': `${BASE}/#organization` },
    inLanguage: ['de-DE', 'en-US'],
  }
}

export interface PageSchemaOptions {
  url: string
  name: string
  description: string
  lang?: string
}

/** Per-page WebPage entity — customize url/name/description per page */
export function pageSchema({ url, name, description, lang = 'de-DE' }: PageSchemaOptions) {
  return {
    '@type': 'WebPage',
    '@id': `${url}#webpage`,
    url,
    name,
    description,
    isPartOf: { '@id': `${BASE}/#website` },
    about: { '@id': `${BASE}/#organization` },
    inLanguage: lang,
  }
}

export interface ServiceListItem {
  name: string
  description: string
  url: string
  minPrice: string | number
}

/** Home-page ItemList of services */
export function serviceListSchema(items: ServiceListItem[]) {
  return {
    '@type': 'ItemList',
    name: 'EvolaTec Leistungen',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      item: {
        '@type': 'Service',
        name: item.name,
        description: item.description,
        url: item.url,
        provider: { '@id': `${BASE}/#organization` },
        offers: {
          '@type': 'Offer',
          priceSpecification: {
            '@type': 'PriceSpecification',
            minPrice: String(item.minPrice),
            priceCurrency: 'EUR',
          },
        },
      },
    })),
  }
}

/**
 * Wraps multiple schema entities into a valid JSON-LD @graph document.
 * Pass null/undefined to skip optional entities conditionally.
 *
 * Usage:
 *   buildSchema(organizationSchema(), websiteSchema(), pageSchema({...}), faqSchema(faqs))
 */
export function buildSchema(...entities: (object | null | undefined)[]) {
  return {
    '@context': 'https://schema.org',
    '@graph': entities.filter(Boolean),
  }
}
