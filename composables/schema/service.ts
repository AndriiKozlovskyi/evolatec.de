const BASE = 'https://evolatec.de'

export interface ServiceSchemaOptions {
  /** Full @id URI, e.g. 'https://evolatec.de/seo/#service' */
  id: string
  name: string
  description: string
  url: string
  serviceType?: string
  minPrice?: string | number
  currency?: string
}

/** Per-page Service entity */
export function serviceSchema({
  id,
  name,
  description,
  url,
  serviceType,
  minPrice,
  currency = 'EUR',
}: ServiceSchemaOptions) {
  return {
    '@type': 'Service',
    '@id': id,
    name,
    description,
    url,
    provider: { '@id': `${BASE}/#organization` },
    ...(serviceType ? { serviceType } : {}),
    areaServed: { '@type': 'Country', name: 'Germany' },
    ...(minPrice !== undefined
      ? {
          offers: {
            '@type': 'Offer',
            priceSpecification: {
              '@type': 'PriceSpecification',
              minPrice: String(minPrice),
              priceCurrency: currency,
            },
          },
        }
      : {}),
  }
}

export interface BreadcrumbItem {
  name: string
  url: string
}

/**
 * BreadcrumbList — always start with Home.
 *
 * Example:
 *   breadcrumbSchema([
 *     { name: 'Home', url: 'https://evolatec.de' },
 *     { name: 'SEO', url: 'https://evolatec.de/seo' },
 *     { name: 'SEO Audit', url: 'https://evolatec.de/seo-audit' },
 *   ])
 */
export function breadcrumbSchema(items: BreadcrumbItem[]) {
  const lastUrl = items.at(-1)?.url ?? BASE
  return {
    '@type': 'BreadcrumbList',
    '@id': `${lastUrl}#breadcrumb`,
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  }
}

export interface FAQ {
  question: string
  answer: string
}

/** FAQPage — pass the same array used to render the FAQ component */
export function faqSchema(faqs: FAQ[]) {
  return {
    '@type': 'FAQPage',
    mainEntity: faqs.map(({ question, answer }) => ({
      '@type': 'Question',
      name: question,
      acceptedAnswer: { '@type': 'Answer', text: answer },
    })),
  }
}
