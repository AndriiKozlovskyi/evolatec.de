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
      url: `${BASE}/logo.webp`,
      contentUrl: `${BASE}/logo.webp`,
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
    telephone: '+491756200862',
    email: 'team@evolatec.de',
    areaServed: { '@type': 'Country', name: 'Germany' },
    knowsLanguage: ['German', 'English'],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+491756200862',
      contactType: 'sales',
      email: 'team@evolatec.de',
      availableLanguage: ['German', 'English'],
    },
    foundingDate: '2024',
    founder: {
      '@type': 'Person',
      name: 'Maksym Streltsov',
    },
    sameAs: [
      'https://www.linkedin.com/company/121004478',
      'https://maps.app.goo.gl/FJK4FwbshzvdbYxWA',
    ],
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
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${BASE}/?s={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
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
