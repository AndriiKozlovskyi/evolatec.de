<template>
  <div>
    <HeroSection
      background-image="/seo/link.webp"
      badge="Professional Link Building Agency"
      title="Link Building & Backlink Building: More Authority for Your Website"
      description="High-quality backlinks are among the most important Google ranking factors. We help businesses build strong SEO authority and achieve better rankings."
      primaryCTA="Start Link Building"
      secondaryCTA="View Pricing"
      :stats="linkBuildingStats"
    />

    <BenefitsSection
      title="Why Professional Link Building Is Essential"
      :benefits="benefits"
    />

    <FeaturesSection
      title="Our Link Building Services"
      :features="features"
      image-url="/web-development/seo.webp"
    />

    <ProcessSection
      title="How Our Link Building Works"
      :steps="processSteps"
    />

    <SEOSection
      title="Backlinks We Build"
      :features="backlinksTypes"
    />

    <PricingSection
      title="Link Building Pricing"
      subtitle="Transparent pricing for professional backlink building."
      :pricing-plans="linkBuildingPricingPlans"
    />

    <FAQSection title="Frequently Asked Questions about Link Building" :faqs="linkBuildingFaqs" />

    <CTASection
      title="Strengthen Your SEO Authority"
      description="Professional backlink building for better rankings and more visibility on Google."
      primary-cta="Start Link Building"
      secondary-cta="Free Consultation"
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
      '@id': 'https://evolatec.de/en/seo-link-building/#webpage',
      url: 'https://evolatec.de/en/seo-link-building',
      name: 'Link Building Agency – Build Backlinks & SEO Authority | EvolaTec',
      description: 'Professional link building for better Google rankings. High-quality backlinks, outreach and SEO authority. Link building from €100.',
      isPartOf: { '@id': 'https://evolatec.de/#website' },
      about: { '@id': 'https://evolatec.de/#organization' },
      inLanguage: 'en-US',
    },
    {
      '@type': 'Service',
      '@id': 'https://evolatec.de/en/seo-link-building/#service',
      name: 'Link Building',
      description: 'High-quality backlinks and outreach for more domain authority and better Google rankings.',
      url: 'https://evolatec.de/en/seo-link-building',
      provider: { '@id': 'https://evolatec.de/#organization' },
      areaServed: { '@type': 'Country', name: 'Germany' },
      offers: { '@type': 'Offer', priceSpecification: { '@type': 'PriceSpecification', minPrice: '100', priceCurrency: 'EUR' } },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        { '@type': 'Question', name: 'Why are backlinks important?', acceptedAnswer: { '@type': 'Answer', text: 'Backlinks strengthen the authority of your website and improve rankings on Google. They are among the strongest ranking factors.' } },
        { '@type': 'Question', name: 'How long does link building take?', acceptedAnswer: { '@type': 'Answer', text: 'Link building is a long-term process. First improvements are often visible after a few weeks; sustainable results develop over months.' } },
        { '@type': 'Question', name: 'How much does professional link building cost?', acceptedAnswer: { '@type': 'Answer', text: 'Link building starts from €100. Monthly management from €700/month. Exact costs depend on your industry and goals.' } },
        { '@type': 'Question', name: 'Do you use safe SEO methods?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, we rely on sustainable and Google-compliant link building strategies. We avoid manipulative tactics and toxic links.' } },
        { '@type': 'Question', name: 'Are toxic links removed?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, we analyse your link profile for toxic links and initiate disavow requests where necessary to remove harmful backlinks.' } },
      ],
    },
  ],
};

useHead({
  title: 'Link Building Agency – Build Backlinks & SEO Authority | EvolaTec',
  htmlAttrs: { lang: 'en' },
  meta: [
    {
      name: 'description',
      content: 'Professional link building for better Google rankings. High-quality backlinks, outreach and SEO authority. Link building from €100.',
    },
    {
      name: 'keywords',
      content: 'link building, backlink building, SEO authority, off-page SEO, backlinks, link building agency',
    },
    { property: 'og:title', content: 'Link Building Agency | EvolaTec' },
    { property: 'og:description', content: 'Professional backlink building for better Google rankings and more SEO authority.' },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://evolatec.de/en/seo-link-building' },
    { property: 'og:locale', content: 'en_US' },
    { property: 'og:locale:alternate', content: 'de_DE' },
  ],
  link: [
    { rel: 'canonical', href: 'https://evolatec.de/en/seo-link-building' },
    ...hreflangLinks.value,
  ],
  script: [{ type: 'application/ld+json', innerHTML: JSON.stringify(schemaMarkup) }],
});

const linkBuildingStats = [
  { value: 'Domain Authority', label: 'Building', icon: 'trending_up' },
  { value: 'High Quality', label: 'Backlinks', icon: 'verified' },
  { value: 'Sustainable', label: 'SEO Growth', icon: 'schedule' },
  { value: 'Expertise', label: 'Off-Page SEO', icon: 'star' },
];

const benefits = [
  {
    icon: 'verified',
    title: 'More Domain Authority',
    description: 'High-quality backlinks from relevant and trustworthy websites permanently strengthen the authority of your domain.',
    bg: 'bg-gradient-to-br from-emerald-600 to-teal-800',
    image: '/web-development/seo.webp',
  },
  {
    icon: 'trending_up',
    title: 'Better Google Rankings',
    description: 'Backlinks are among the strongest ranking factors. More authority means better positions on Google.',
    bg: 'bg-gradient-to-br from-blue-600 to-blue-800',
    image: '/main/seo.webp',
  },
  {
    icon: 'schedule',
    title: 'Long-Term Effect',
    description: 'Good backlinks have a lasting positive impact and continuously deliver more organic traffic.',
    bg: 'bg-gradient-to-br from-amber-500 to-orange-600',
    image: '/landing/seo.webp',
  },
];

const processSteps = [
  {
    icon: 'assessment',
    title: 'Backlink Analysis',
    description: 'Analysis of your current backlink structure, competitors and opportunities.',
  },
  {
    icon: 'map',
    title: 'Strategy Development',
    description: 'Creation of an individual link building strategy suited to your industry.',
  },
  {
    icon: 'people',
    title: 'Outreach',
    description: 'Building relationships with relevant websites, media and partners.',
  },
  {
    icon: 'link',
    title: 'Link Building',
    description: 'Building high-quality, thematically relevant backlinks.',
  },
  {
    icon: 'monitoring',
    title: 'Monitoring',
    description: 'Ongoing monitoring of the link profile and further optimisation.',
  },
];

const features = [
  {
    icon: 'map',
    title: 'Link Building Strategy',
    description: 'Development of a sustainable off-page SEO strategy for your industry and goals.',
  },
  {
    icon: 'people',
    title: 'Outreach & Partnerships',
    description: 'Building relationships with suitable websites, blogs and media in your niche.',
  },
  {
    icon: 'edit_document',
    title: 'Guest Articles & Content Links',
    description: 'Content-based link building through high-quality guest posts and articles.',
  },
  {
    icon: 'visibility',
    title: 'Link Monitoring',
    description: 'Ongoing monitoring and optimisation of your link profile and link quality.',
  },
];

const backlinksTypes = [
  'Editorial backlinks from specialist media',
  'Industry directories & portals',
  'Guest articles & content marketing links',
  'Content-based links',
  'Local backlinks for local SEO',
  'Thematically relevant niche links',
  'International backlinks',
  'Authority links from strong domains',
];

const linkBuildingPricingPlans = [
  {
    tier: 'Backlink Analysis',
    price: 'from €100',
    features: [
      'Backlink Audit',
      'Competitor Check',
      'Issue Identification',
      'Strategy Recommendations',
    ],
    buttonText: 'Request Analysis',
    isHighlighted: false,
  },
  {
    tier: 'Basic Link Building',
    price: 'from €500',
    features: [
      'Everything in Backlink Analysis',
      'Link Building Strategy',
      'First Backlinks',
      'Outreach & Building',
    ],
    buttonText: 'Start Project',
    isHighlighted: true,
  },
  {
    tier: 'Monthly Link Building Management',
    price: 'from €700/month',
    features: [
      'Ongoing Link Building',
      'Monthly New Backlinks',
      'Link Monitoring',
      'Competitor Analysis',
    ],
    buttonText: 'Book Management',
    isHighlighted: false,
  },
];

const linkBuildingFaqs = [
  {
    question: 'Why are backlinks important?',
    answer: 'Backlinks strengthen the authority of your website and improve rankings on Google. They are among the strongest ranking factors.',
  },
  {
    question: 'How long does link building take?',
    answer: 'Link building is a long-term process. First improvements are often visible after a few weeks; sustainable results develop over months.',
  },
  {
    question: 'How much does professional link building cost?',
    answer: 'Link building starts from €100. Monthly management from €700/month. Exact costs depend on your industry and goals.',
  },
  {
    question: 'Do you use safe SEO methods?',
    answer: 'Yes, we rely on sustainable and Google-compliant link building strategies. We avoid manipulative tactics and toxic links.',
  },
  {
    question: 'Are toxic links removed?',
    answer: 'Yes, we analyse your link profile for toxic links and initiate disavow requests where necessary to remove harmful backlinks.',
  },
];
</script>
