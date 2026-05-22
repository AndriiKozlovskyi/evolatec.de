<template>
  <div>
    <HeroSection
      background-image="/seo/local.webp"
      badge="Local SEO Agency"
      title="Local SEO: Get Found in Your Region on Google"
      description="We help businesses become locally visible on Google. Reach more regional customers, better Google Maps rankings and more enquiries from your area."
      primaryCTA="Free SEO Consultation"
      secondaryCTA="View Pricing"
      :stats="localStats"
    />

    <TrustSection :companies="trustCompanies" />

    <!-- Stats Cards -->
    <section data-nav-label="Why Local" data-nav-icon="location_on" class="py-section-padding bg-surface">
      <div class="max-w-container-max mx-auto px-gutter">
        <div class="text-center max-w-2xl mx-auto mb-stack-lg">
          <h2 class="font-display text-3xl sm:text-4xl md:text-5xl font-black leading-tight">Why Local SEO Matters</h2>
          <p class="text-body-lg text-on-surface-variant mt-4">Customers search locally — make sure they find you.</p>
        </div>
        <div class="max-w-4xl mx-auto grid md:grid-cols-3 gap-gutter">
          <div class="glass-card border border-black/10 p-10 text-center rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105 group">
            <span class="material-symbols-outlined text-[3.5rem] mb-4 text-primary group-hover:scale-110 transition-transform duration-300">phone</span>
            <div class="font-display text-[3rem] font-black text-primary mb-3">80%</div>
            <p class="font-body-md text-on-surface-variant">of local search queries lead to a contact being made.</p>
          </div>
          <div class="glass-card border border-black/10 p-10 text-center rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105 group">
            <span class="material-symbols-outlined text-[3.5rem] mb-4 text-primary group-hover:scale-110 transition-transform duration-300">location_on</span>
            <div class="font-display text-[2rem] font-black text-primary mb-3">Google Maps</div>
            <p class="font-body-md text-on-surface-variant">is crucial for local visibility and winning new customers.</p>
          </div>
          <div class="glass-card border border-black/10 p-10 text-center rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105 group">
            <span class="material-symbols-outlined text-[3.5rem] mb-4 text-primary group-hover:scale-110 transition-transform duration-300">verified_user</span>
            <div class="font-display text-[2rem] font-black text-primary mb-3">More Trust</div>
            <p class="font-body-md text-on-surface-variant">through local rankings and positive customer reviews.</p>
          </div>
        </div>
      </div>
    </section>

    <BenefitsSection
      title="Benefits of Local SEO for Your Business"
      :benefits="benefits"
    />

    <ProcessSection
      title="How Our Local SEO Works"
      :steps="processSteps"
    />

    <FeaturesSection
      title="Our Local SEO Services"
      :features="features"
      image-url="/web-development/seo.webp"
    />

    <PricingSection
      title="Local SEO Pricing"
      subtitle="Transparent pricing for professional local SEO optimisation."
      :pricing-plans="localPricingPlans"
    />

    <SEOSection
      title="Local SEO for All Industries"
      :features="industries"
    />

    <FAQSection title="Frequently Asked Questions about Local SEO" :faqs="localFaqs" />

    <CTASection
      title="Win More Local Customers"
      description="Become visible in your region on Google and win more enquiries."
      primary-cta="Start Local SEO"
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
      '@id': 'https://evolatec.de/en/local-seo/#webpage',
      url: 'https://evolatec.de/en/local-seo',
      name: 'Local SEO Agency – Get Found Locally on Google | EvolaTec',
      description: 'Professional local SEO agency for more regional visibility on Google and Google Maps. Local SEO from €400.',
      isPartOf: { '@id': 'https://evolatec.de/#website' },
      about: { '@id': 'https://evolatec.de/#organization' },
      inLanguage: 'en-US',
    },
    {
      '@type': 'Service',
      '@id': 'https://evolatec.de/en/local-seo/#service',
      name: 'Local SEO',
      description: 'Professional local SEO for more regional visibility on Google and Google Maps.',
      url: 'https://evolatec.de/en/local-seo',
      provider: { '@id': 'https://evolatec.de/#organization' },
      areaServed: { '@type': 'Country', name: 'Germany' },
      offers: { '@type': 'Offer', priceSpecification: { '@type': 'PriceSpecification', minPrice: '400', priceCurrency: 'EUR' } },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        { '@type': 'Question', name: 'What is local SEO?', acceptedAnswer: { '@type': 'Answer', text: 'Local SEO optimises businesses for local search queries and Google Maps. The goal is to ensure you get found in your region on Google.' } },
        { '@type': 'Question', name: 'How long does local SEO take?', acceptedAnswer: { '@type': 'Answer', text: 'First improvements are often visible within a few weeks. Sustainable results develop over several months.' } },
        { '@type': 'Question', name: 'How much does local SEO cost?', acceptedAnswer: { '@type': 'Answer', text: 'Local SEO starts from €400. Monthly management from €300. Exact costs depend on your industry and region.' } },
        { '@type': 'Question', name: 'Is Google Maps important?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, many local customers search directly via Google Maps. Good Google Business optimisation is essential.' } },
        { '@type': 'Question', name: 'Do you have experience in my industry?', acceptedAnswer: { '@type': 'Answer', text: 'We work with many local businesses: doctors, tradespeople, restaurants, retail and service providers. We are happy to discuss your industry.' } },
      ],
    },
  ],
};

useHead({
  title: 'Local SEO Agency – Get Found Locally on Google | EvolaTec',
  htmlAttrs: { lang: 'en' },
  meta: [
    {
      name: 'description',
      content: 'Professional local SEO agency for more regional visibility on Google and Google Maps. Local SEO from €400.',
    },
    {
      name: 'keywords',
      content: 'local SEO, local search engine optimisation, Google Maps optimisation, Google Business, regional SEO, local SEO agency',
    },
    { property: 'og:title', content: 'Local SEO Agency | EvolaTec' },
    { property: 'og:description', content: 'More regional visibility on Google and Google Maps through professional local SEO.' },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://evolatec.de/en/local-seo' },
    { property: 'og:locale', content: 'en_US' },
    { property: 'og:locale:alternate', content: 'de_DE' },
  ],
  link: [
    { rel: 'canonical', href: 'https://evolatec.de/en/local-seo' },
    ...hreflangLinks.value,
  ],
  script: [{ type: 'application/ld+json', innerHTML: JSON.stringify(schemaMarkup) }],
});

const localStats = [
  { value: '+80%', label: 'Contact Rate', icon: 'phone' },
  { value: 'Google Maps', label: 'Optimised', icon: 'location_on' },
  { value: 'Regional', label: 'Visibility', icon: 'public' },
  { value: 'More Customers', label: 'Locally', icon: 'trending_up' },
];

const trustCompanies = ['GOOGLE MAPS', 'LOCAL SEARCH', 'REGIONAL SEO', 'GOOGLE BUSINESS'];

const benefits = [
  {
    icon: 'location_on',
    title: 'Google Maps Presence',
    description: 'Optimisation of your Google Business profile to achieve better placements in Google Maps and local search.',
    bg: 'bg-gradient-to-br from-blue-600 to-blue-800',
    image: '/main/seo.webp',
  },
  {
    icon: 'people',
    title: 'More Regional Customers',
    description: 'Visibility in local search queries brings qualified customers directly from your area.',
    bg: 'bg-gradient-to-br from-emerald-600 to-teal-800',
    image: '/landing/seo.webp',
  },
  {
    icon: 'star',
    title: 'Reviews & Trust',
    description: 'Strategic review management strengthens your local profile and the trust of potential customers.',
    bg: 'bg-gradient-to-br from-amber-500 to-orange-600',
    image: '/web-development/seo.webp',
  },
];

const processSteps = [
  {
    icon: 'search',
    title: 'Local Analysis',
    description: 'Analysis of your local visibility, competitors and keyword opportunities in the region.',
  },
  {
    icon: 'storefront',
    title: 'Google Business Setup',
    description: 'Complete optimisation of your Google Business profile for maximum visibility.',
  },
  {
    icon: 'edit_document',
    title: 'Keyword Optimisation',
    description: 'Optimisation for regional search terms and local search intent of your target audience.',
  },
  {
    icon: 'article',
    title: 'Content & Structure',
    description: 'Creation of regionally optimised content, location pages and structured data.',
  },
  {
    icon: 'trending_up',
    title: 'Ranking Growth',
    description: 'Ongoing monitoring, reporting and optimisation for more local visibility.',
  },
];

const features = [
  {
    icon: 'location_on',
    title: 'Google Maps Optimisation',
    description: 'Professional optimisation of your Google Business profile for better local rankings.',
  },
  {
    icon: 'engineering',
    title: 'Technical Local SEO',
    description: 'Structured data, local landing pages and technical optimisation.',
  },
  {
    icon: 'star',
    title: 'Review Management',
    description: 'Strategies for better Google reviews and more trust.',
  },
  {
    icon: 'analytics',
    title: 'Local SEO Reporting',
    description: 'Monitoring of local rankings, visibility and customer enquiries.',
  },
];

const localPricingPlans = [
  {
    tier: 'Google Business Optimisation',
    price: 'from €400',
    features: ['Profile Optimisation', 'Photos & Description', 'Category & Attributes', 'First Rankings'],
    buttonText: 'Optimise Profile',
    isHighlighted: false,
  },
  {
    tier: 'Basic Local SEO',
    price: 'from €500',
    features: ['Maps + Website', 'Local Keywords', 'Structure & Content', 'Implementation Plan'],
    buttonText: 'Start Project',
    isHighlighted: true,
  },
  {
    tier: 'Monthly Local SEO Management',
    price: 'from €300/month',
    features: ['Ongoing Optimisation', 'Ranking Monitoring', 'Review Management', 'Monthly Reports'],
    buttonText: 'Book Management',
    isHighlighted: false,
  },
];

const industries = [
  'Restaurants & Cafés',
  'Doctors & Clinics',
  'Tradespeople & Construction',
  'Property Companies',
  'Local Service Providers',
  'Gyms & Coaches',
  'Law Firms & Consultants',
  'Retail & Shops',
];

const localFaqs = [
  {
    question: 'What is local SEO?',
    answer: 'Local SEO optimises businesses for local search queries and Google Maps. The goal is to ensure you get found in your region on Google.',
  },
  {
    question: 'How long does local SEO take?',
    answer: 'First improvements are often visible within a few weeks. Sustainable results develop over several months.',
  },
  {
    question: 'How much does local SEO cost?',
    answer: 'Local SEO starts from €400. Monthly management from €300. Exact costs depend on your industry and region.',
  },
  {
    question: 'Is Google Maps important?',
    answer: 'Yes, many local customers search directly via Google Maps. Good Google Business optimisation is essential.',
  },
  {
    question: 'Do you have experience in my industry?',
    answer: 'We work with many local businesses: doctors, tradespeople, restaurants, retail and service providers. We are happy to discuss your industry.',
  },
];
</script>
