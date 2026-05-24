<template>
  <div>
    <HeroSection
      background-image="/seo/hero.webp"
      badge="Professional SEO Agency"
      title="Professional SEO Agency: More Visibility & More Customers from Google"
      description="Modern search engine optimisation for businesses that want to be found better on Google. More rankings, more traffic and more enquiries."
      primaryCTA="Free SEO Consultation"
      secondaryCTA="View SEO Pricing"
      :stats="seoStats"
    />

    <TrustSection :companies="trustCompanies" />

    <ServicesSection
      title="Our SEO Services"
      subtitle="Choose the SEO service that matches your goals."
      variant="centered"
      :services="seoServiceLinks"
    />

    <FeaturesSection
      title="What good SEO does for your business"
      :features="features"
      image-url="/web-development/seo.webp"
    />

    <BenefitsSection
      title="Why Professional SEO Is Essential"
      :benefits="benefits"
    />

    <ProcessSection
      title="How Our SEO Optimisation Works"
      :steps="processSteps"
    />

    <PricingSection
      title="SEO Pricing"
      subtitle="Transparent pricing for professional search engine optimisation."
      :pricing-plans="seoPricingPlans"
    />

    <SEOSection
      title="SEO-Friendly Optimisation"
      :features="seoChecklist"
    />

    <FAQSection title="Frequently Asked Questions about SEO" :faqs="seoFaqs" />

    <CTASection
      title="More Customers through Professional SEO"
      description="Get your website visible on Google and sustainably attract new customers."
      primary-cta="Free SEO Consultation"
      secondary-cta="View SEO Pricing"
    />
  </div>
</template>

<script setup lang="ts">
const { hreflangLinks } = useLanguageSwitcher();

const schemaMarkup = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://evolatec.de/en/seo/#webpage',
      url: 'https://evolatec.de/en/seo',
      name: 'Professional SEO Agency – More Visibility on Google | EvolaTec',
      description: 'Professional search engine optimisation for businesses. More Google rankings, organic traffic and customer enquiries. SEO audit from €100.',
      isPartOf: { '@id': 'https://evolatec.de/#website' },
      about: { '@id': 'https://evolatec.de/#organization' },
      inLanguage: 'en-US',
    },
    {
      '@type': 'Service',
      '@id': 'https://evolatec.de/en/seo/#service',
      name: 'SEO Agency',
      description: 'Professional search engine optimisation for more Google rankings, organic traffic and customer enquiries.',
      url: 'https://evolatec.de/en/seo',
      provider: { '@id': 'https://evolatec.de/#organization' },
      areaServed: { '@type': 'Country', name: 'Germany' },
      offers: { '@type': 'Offer', priceSpecification: { '@type': 'PriceSpecification', minPrice: '100', priceCurrency: 'EUR' } },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        { '@type': 'Question', name: 'How long does SEO take to show first results?', acceptedAnswer: { '@type': 'Answer', text: 'First improvements in Google rankings are typically visible after 2–3 months. Search engine optimisation is a long-term process: continuous work on technology, content and backlinks builds a competitive advantage that paid advertising cannot replace.' } },
        { '@type': 'Question', name: 'How much does professional SEO cost?', acceptedAnswer: { '@type': 'Answer', text: 'An SEO audit starts from €100, SEO optimisation from €300 and ongoing SEO management from €300/month. Exact costs depend on scope and your goals. In a free initial consultation we put together a transparent offer.' } },
        { '@type': 'Question', name: 'What is the difference between SEO and Google Ads?', acceptedAnswer: { '@type': 'Answer', text: 'SEO delivers organic, unpaid rankings on Google and provides the cheapest long-term traffic. Google Ads bring visitors immediately but cost money for every click. In practice both channels complement each other – ads deliver fast results while SEO builds stable visibility over months.' } },
        { '@type': 'Question', name: 'What are the most important SEO ranking factors?', acceptedAnswer: { '@type': 'Answer', text: 'The most important factors are high-quality content, a clean technical foundation (page speed, mobile optimisation, Core Web Vitals), a clear site structure, topic-relevant keywords and trustworthy backlinks.' } },
        { '@type': 'Question', name: 'What is included in the SEO audit?', acceptedAnswer: { '@type': 'Answer', text: 'Our SEO audit covers a technical analysis, an on-page check, a keyword and competitor analysis and a review of your backlink profile. You receive a prioritised action plan with concrete recommendations.' } },
        { '@type': 'Question', name: 'Do you optimise international and multilingual websites?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, we offer multilingual and international SEO strategies with hreflang implementation and country-specific content. This way you rank in every target market with the right language version.' } },
        { '@type': 'Question', name: 'Can I cancel SEO management on a monthly basis?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, our SEO management contracts are flexibly cancellable. You only pay for the services you actually use and retain full cost control.' } },
      ],
    },
  ],
};

useHead({
  title: 'Professional SEO Agency – More Visibility on Google | EvolaTec',
  htmlAttrs: { lang: 'en' },
  meta: [
    {
      name: 'description',
      content: 'Professional search engine optimisation for businesses. More Google rankings, organic traffic and customer enquiries. SEO optimisation from €300.',
    },
    {
      name: 'keywords',
      content: 'SEO agency, search engine optimisation, Google ranking, SEO optimisation, SEO consulting, local SEO, technical SEO',
    },
    { property: 'og:title', content: 'Professional SEO Agency | EvolaTec' },
    { property: 'og:description', content: 'More visibility on Google through professional search engine optimisation.' },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://evolatec.de/en/seo' },
    { property: 'og:locale', content: 'en_US' },
    { property: 'og:locale:alternate', content: 'de_DE' },
  ],
  link: [
    { rel: 'canonical', href: 'https://evolatec.de/en/seo' },
    ...hreflangLinks.value,
  ],
  script: [{ type: 'application/ld+json', innerHTML: JSON.stringify(schemaMarkup) }],
});

const seoStats = [
  { value: 'TOP', label: 'Organic Traffic', icon: 'trending_up' },
  { value: 'Top Rankings', label: 'On Google', icon: 'grade' },
  { value: '+Leads', label: 'Without Ads', icon: 'people' },
  { value: 'Visible', label: 'To Customers', icon: 'visibility' },
];

const trustCompanies = ['GOOGLE PARTNER', 'SEO CERTIFIED', 'DIGITAL LEADERS', 'GROWTH FOCUSED'];

const benefits = [
  {
    icon: 'search_insights',
    title: 'More Visibility on Google',
    description: 'Better rankings for relevant searches put your business in front of customers exactly when they are looking.',
    bg: 'bg-gradient-to-br from-blue-600 to-blue-800',
    image: '/main/seo.webp',
  },
  {
    icon: 'trending_up',
    title: 'Sustainably More Visitors',
    description: 'SEO delivers long-term low-cost organic traffic without permanent advertising spend.',
    bg: 'bg-gradient-to-br from-emerald-600 to-teal-800',
    image: '/web-development/seo.webp',
  },
  {
    icon: 'person_add',
    title: 'More Qualified Enquiries',
    description: 'People are already searching for your service — SEO makes sure they find you.',
    bg: 'bg-gradient-to-br from-purple-600 to-indigo-800',
    image: '/landing/seo.webp',
  },
];

const processSteps = [
  {
    icon: 'search',
    title: 'SEO Analysis',
    description: 'Technical analysis, competitor analysis and keyword research for your industry.',
  },
  {
    icon: 'map',
    title: 'SEO Strategy',
    description: 'Clear SEO plan with priorities, goals and a realistic timeline.',
  },
  {
    icon: 'edit_document',
    title: 'On-Page Optimisation',
    description: 'Optimisation of page structure, content, headings and internal linking.',
  },
  {
    icon: 'engineering',
    title: 'Technical SEO',
    description: 'Load times, Core Web Vitals, indexing and technical bug fixing.',
  },
  {
    icon: 'monitoring',
    title: 'Monitoring & Growth',
    description: 'Ongoing ranking monitoring, monthly reports and continuous improvement.',
  },
];

const features = [
  {
    icon: 'visibility',
    title: 'Top Google Rankings',
    description: 'Your website appears on page 1 for relevant search terms in your industry.',
  },
  {
    icon: 'trending_up',
    title: 'More Organic Traffic',
    description: 'Steadily growing visitor numbers without ongoing advertising costs.',
  },
  {
    icon: 'verified_user',
    title: 'More Trust & Authority',
    description: 'Good Google rankings strengthen the trust of potential customers.',
  },
  {
    icon: 'analytics',
    title: 'Measurable Results',
    description: 'Clear reports on rankings, traffic and leads show SEO progress.',
  },
];

const seoServiceLinks = [
  {
    title: 'SEO Strategy',
    description: 'Long-term SEO strategies for sustainable growth.',
    icon: 'trending_up',
    iconBg: 'bg-blue-100',
    iconBgHover: 'bg-blue-600',
    iconColor: 'text-blue-600',
    href: '/en/contact',
  },
  {
    title: 'SEO Optimisation',
    description: 'Technical optimisation for speed and performance.',
    icon: 'speed',
    iconBg: 'bg-orange-100',
    iconBgHover: 'bg-orange-600',
    iconColor: 'text-orange-600',
    href: '/en/seo-optimization',
  },
  {
    title: 'Local SEO',
    description: 'More local visibility and regional customers.',
    icon: 'location_on',
    iconBg: 'bg-emerald-100',
    iconBgHover: 'bg-emerald-600',
    iconColor: 'text-emerald-600',
    href: '/en/local-seo',
  },
  {
    title: 'SEO Audit & Analysis',
    description: 'Professional audits and technical SEO analysis.',
    icon: 'assessment',
    iconBg: 'bg-purple-100',
    iconBgHover: 'bg-purple-600',
    iconColor: 'text-purple-600',
    href: '/en/seo-audit',
  },
  {
    title: 'Link Building',
    description: 'High-quality backlinks for more authority and better rankings.',
    icon: 'link',
    iconBg: 'bg-rose-100',
    iconBgHover: 'bg-rose-600',
    iconColor: 'text-rose-600',
    href: '/en/seo-link-building',
  },
];

const seoPricingPlans = [
  {
    tier: 'SEO Audit',
    price: 'from €100',
    features: [
      'Technical Analysis',
      'Competitor Analysis',
      'Keyword Research',
      'Detailed Report',
    ],
    buttonText: 'Request Audit',
    isHighlighted: false,
  },
  {
    tier: 'Basic SEO',
    price: 'from €300',
    features: [
      'Everything in SEO Audit',
      'On-Page Optimisation',
      'Technical Fixes',
      'Content Optimisation',
    ],
    buttonText: 'Choose Package',
    isHighlighted: true,
  },
  {
    tier: 'Monthly Management',
    price: 'from €300/month',
    features: [
      'Continuous Optimisation',
      'Content Updates',
      'Monthly Reports',
      'Support & Consulting',
    ],
    buttonText: 'Book Consultation',
    isHighlighted: false,
  },
];

const seoChecklist = [
  'Keyword research & competitor analysis',
  'Technical SEO & Core Web Vitals',
  'On-page optimisation & content strategy',
  'Google Search Console & Analytics integration',
  'Structured data (Schema.org markup)',
  'Local SEO & Google Maps optimisation',
  'Link building & domain authority',
  'Monthly reports & ranking monitoring',
];

const seoFaqs = [
  {
    question: 'How long does SEO take to show first results?',
    answer:
      'First improvements in Google rankings are typically visible after 2–3 months. Search engine optimisation is a long-term process: continuous work on technology, content and backlinks builds a competitive advantage that paid advertising cannot replace.',
  },
  {
    question: 'How much does professional SEO cost?',
    answer:
      'An SEO audit starts from €100, SEO optimisation from €300 and ongoing SEO management from €300/month. Exact costs depend on scope and your goals. In a free initial consultation we put together a transparent offer.',
  },
  {
    question: 'What is the difference between SEO and Google Ads?',
    answer:
      'SEO delivers organic, unpaid rankings on Google and provides the cheapest long-term traffic. Google Ads bring visitors immediately but cost money for every click. In practice both channels complement each other – ads deliver fast results while SEO builds stable visibility over months.',
  },
  {
    question: 'What are the most important SEO ranking factors?',
    answer:
      'The most important factors are high-quality content, a clean technical foundation (page speed, mobile optimisation, Core Web Vitals), a clear site structure, topic-relevant keywords and trustworthy backlinks. We optimise every area as part of our SEO management and prioritise the actions with the biggest ranking impact.',
  },
  {
    question: 'What is included in the SEO audit?',
    answer:
      'Our SEO audit covers a technical analysis, an on-page check, a keyword and competitor analysis and a review of your backlink profile. You receive a prioritised action plan with concrete recommendations that you can implement yourself or have us execute.',
  },
  {
    question: 'Do you optimise international and multilingual websites?',
    answer:
      'Yes, we offer multilingual and international SEO strategies with hreflang implementation and country-specific content. This way you rank in every target market with the right language version and avoid duplicate content issues.',
  },
  {
    question: 'Can I cancel SEO management on a monthly basis?',
    answer:
      'Yes, our SEO management contracts are flexibly cancellable. You only pay for the services you actually use and retain full cost control.',
  },
];
</script>
