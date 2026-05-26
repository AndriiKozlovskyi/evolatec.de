<template>
  <div>
    <HeroSection
      background-image="/ads/hero.webp"
      badge="Professional Google Ads & SEA Agency"
      title="Google Ads Agency: Advertising that Delivers Clicks & Customers"
      description="EvolaTec develops high-performance Google Ads campaigns that generate qualified visitors, more enquiries and measurable growth."
      primaryCTA="Start Google Ads"
      secondaryCTA="View Pricing"
      :stats="adsStats"
    />

    <IntroSection
      heading="Why Google Ads Matter for Businesses"
      :paragraphs="introParagraphs"
      image="/landing/advertising.webp"
      image-alt="Google Ads Campaigns EvolaTec"
      :badge="introBadge"
    />

    <ServicesSection title="Our Google Ads Services" variant="centered" :services="adsServices" />

    <BenefitsSection title="Benefits of Professional Google Ads Campaigns" :benefits="adsBenefits" />

    <ProcessSection title="Our Google Ads Process" :steps="adsProcess" />

    <DarkCardsSection
      title="Google Advertising for Different Goals"
      :cards="campaignTypes"
    />

    <IntroSection
      data-nav-label="Why us"
      data-nav-icon="stars"
      heading="Why Choose EvolaTec as Your Google Ads Agency?"
      :paragraphs="whyEvolaTecParagraphs"
      image="/landing/leads.webp"
      image-alt="Google Ads Performance Marketing EvolaTec"
      :badge="whyEvolaTecBadge"
      :usps="whyEvolaTec"
    />

    <!-- Pricing Table Section -->
    <section class="py-section-padding bg-surface-container-low">
      <div class="max-w-container-max mx-auto px-gutter">
        <h2 class="font-headline-lg text-headline-lg text-primary text-center mb-4">
          Google Ads Management Pricing
        </h2>
        <p class="text-center font-body-lg text-on-surface-variant mb-stack-lg">
          Transparent pricing for Google advertising, SEA management and performance marketing.
        </p>

        <div class="max-w-2xl mx-auto overflow-x-auto">
          <table class="w-full">
            <thead>
              <tr class="border-b-2 border-primary">
                <th class="text-left py-4 px-6 font-headline-md text-primary">Service</th>
                <th class="text-right py-4 px-6 font-headline-md text-primary">Price</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="item in pricingItems"
                :key="item.name"
                class="border-b border-outline-variant/20 hover:bg-surface transition-colors"
              >
                <td class="py-4 px-6 font-body-md text-on-surface">{{ item.name }}</td>
                <td class="py-4 px-6 font-body-md text-primary font-bold text-right">{{ item.price }}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="text-center mt-10">
          <a href="/en/website-cost-calculator">
            <BaseButton variant="outline" size="md">View All Pricing</BaseButton>
          </a>
        </div>
      </div>
    </section>

    <FAQSection title="Frequently Asked Questions about Google Ads" :faqs="adsFaqs" />

    <RelatedServicesSection
      eyebrow="Website & Development"
      title="Google Ads Only Work with the Right Landing Page"
      :services="relatedServices"
    />

    <CTASection
      title="More Customers through Professional Google Advertising"
      description="EvolaTec develops Google Ads campaigns that create visibility, generate leads and help businesses grow."
      primary-cta="Start Google Ads"
      secondary-cta="View Pricing"
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
      '@id': 'https://evolatec.de/en/google-ads-management/#webpage',
      url: 'https://evolatec.de/en/google-ads-management',
      name: 'Google Ads Agency – Professional Google Advertising | EvolaTec',
      description: 'Professional Google Ads campaigns by EvolaTec. Search, Display & Shopping Ads for more clicks, leads and measurable results.',
      isPartOf: { '@id': 'https://evolatec.de/#website' },
      about: { '@id': 'https://evolatec.de/#organization' },
      inLanguage: 'en-US',
    },
    {
      '@type': 'Service',
      '@id': 'https://evolatec.de/en/google-ads-management/#service',
      name: 'Google Ads Management',
      description: 'Professional Google Ads campaigns for more visibility, clicks and measurable results.',
      url: 'https://evolatec.de/en/google-ads-management',
      provider: { '@id': 'https://evolatec.de/#organization' },
      areaServed: { '@type': 'Country', name: 'Germany' },
      offers: { '@type': 'Offer', priceSpecification: { '@type': 'PriceSpecification', minPrice: '400', priceCurrency: 'EUR' } },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        { '@type': 'Question', name: 'What does a Google Ads agency do?', acceptedAnswer: { '@type': 'Answer', text: 'A Google Ads agency creates, optimises and manages advertising campaigns on Google.' } },
        { '@type': 'Question', name: 'How quickly do Google Ads work?', acceptedAnswer: { '@type': 'Answer', text: 'Google advertising can generate first visitors and leads within just a few days.' } },
        { '@type': 'Question', name: 'How much do Google Ads campaigns cost?', acceptedAnswer: { '@type': 'Answer', text: 'Management starts from €400 per month. The advertising budget is set separately.' } },
        { '@type': 'Question', name: 'Which businesses are suited for Google Ads?', acceptedAnswer: { '@type': 'Answer', text: 'Local businesses, service providers, online shops, start-ups and B2B companies.' } },
      ],
    },
  ],
};

useHead({
  title: 'Google Ads Agency – Professional Google Advertising | EvolaTec',
  htmlAttrs: { lang: 'en' },
  meta: [
    { name: 'description', content: 'Professional Google Ads campaigns by EvolaTec. Search, Display & Shopping Ads for more clicks, leads and measurable results.' },
    { name: 'keywords', content: 'Google Ads agency, Google advertising, PPC agency, Google AdWords management, performance marketing, Google Ads campaigns' },
    { property: 'og:title', content: 'Google Ads Agency | EvolaTec' },
    { property: 'og:description', content: 'Professional Google Ads campaigns for more visibility and measurable results.' },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://evolatec.de/en/google-ads-management' },
    { property: 'og:locale', content: 'en_US' },
    { property: 'og:locale:alternate', content: 'de_DE' },
  ],
  link: [
    { rel: 'canonical', href: 'https://evolatec.de/en/google-ads-management' },
    ...hreflangLinks.value,
  ],
  script: [{ type: 'application/ld+json', innerHTML: JSON.stringify(schemaMarkup) }],
});

const introParagraphs = [
  'Google Ads is one of the most effective methods to gain instant visibility and reach new customers in a targeted way.',
  'Businesses can appear precisely when potential customers are actively searching for services, products or solutions.',
  'As a Google Ads agency, EvolaTec develops data-driven campaigns that increase reach, generate leads and grow revenue. Learn more about our <a href="/en/online-marketing" class="text-primary font-semibold hover:underline">online marketing services</a>.',
];

const introBadge = {
  icon: 'campaign',
  title: 'Instantly visible',
  subtitle: 'on Google',
  iconBg: 'bg-gradient-to-br from-blue-500 to-indigo-600',
};

const whyEvolaTecParagraphs = [
  'Successful Google advertising is about more than just ads.',
  'What matters is strategy, user experience, landing pages and continuous optimisation.',
  'EvolaTec combines Google Ads, <a href="/en/seo" class="text-primary font-semibold hover:underline">SEO</a>, conversion optimisation and modern web design into high-performance marketing systems.',
];

const whyEvolaTecBadge = {
  icon: 'ads_click',
  title: '+340% ROI',
  subtitle: 'from campaigns',
  iconBg: 'bg-gradient-to-br from-orange-500 to-red-500',
};

const adsStats = [
  { value: 'Instant', label: 'Visibility', icon: 'visibility' },
  { value: 'More Leads', label: 'Generated', icon: 'person_add' },
  { value: 'Performance', label: 'Focused', icon: 'ads_click' },
  { value: 'Measurable', label: 'Results', icon: 'analytics' },
];

const adsServices = [
  {
    title: 'Google Search Ads',
    description: 'Visibility for relevant searches with high-converting ads.',
    icon: 'ads_click',
    iconBg: 'bg-blue-100',
    iconColor: 'text-blue-600',
    borderColor: 'border-blue-500',
  },
  {
    title: 'Display Advertising',
    description: 'Banner campaigns to increase brand awareness and reach.',
    icon: 'image',
    iconBg: 'bg-emerald-100',
    iconColor: 'text-emerald-600',
    borderColor: 'border-emerald-500',
  },
  {
    title: 'Google Shopping Ads',
    description: 'Performance campaigns for online shops and e-commerce projects.',
    icon: 'shopping_cart',
    iconBg: 'bg-orange-100',
    iconColor: 'text-orange-600',
    borderColor: 'border-orange-500',
  },
  {
    title: 'Remarketing Campaigns',
    description: 'Win back visitors with targeted retargeting ads.',
    icon: 'refresh',
    iconBg: 'bg-purple-100',
    iconColor: 'text-purple-600',
    borderColor: 'border-purple-500',
  },
  {
    title: 'Conversion Optimisation',
    description: 'Optimisation of ads, landing pages and user journeys.',
    icon: 'conversion_path',
    iconBg: 'bg-rose-100',
    iconColor: 'text-rose-600',
    borderColor: 'border-rose-500',
  },
  {
    title: 'Google Ads Consulting',
    description: 'Strategic consulting for businesses and performance campaigns.',
    icon: 'support_agent',
    iconBg: 'bg-teal-100',
    iconColor: 'text-teal-600',
    borderColor: 'border-teal-500',
  },
];

const adsBenefits = [
  {
    title: 'Instant Visibility',
    description: 'Your ads appear immediately for relevant searches.',
    icon: 'visibility',
    bg: 'bg-gradient-to-br from-blue-600 to-blue-800',
    image: '/landing/leads.webp',
  },
  {
    title: 'Qualified Leads',
    description: 'Targeted advertising reaches potential customers.',
    icon: 'person_add',
    bg: 'bg-gradient-to-br from-orange-500 to-amber-600',
    image: '/ads/benefit.webp',
  },
  {
    title: 'Measurable Results',
    description: 'Clicks, leads and conversions are precisely trackable.',
    icon: 'analytics',
    bg: 'bg-gradient-to-br from-emerald-600 to-teal-800',
    image: '/web-development-cost/price.webp',
  },
  {
    title: 'Scalable Growth',
    description: 'Successful campaigns can be continuously scaled.',
    icon: 'stacked_line_chart',
    bg: 'bg-gradient-to-br from-purple-600 to-indigo-800',
    image: '/web-development-cost/tech.webp',
  },
];

const adsProcess = [
  {
    title: 'Analysis & Strategy',
    description: 'Analysis of your industry, target audience and competitors.',
    icon: 'analytics',
  },
  {
    title: 'Keyword Research',
    description: 'Selection of relevant search terms with high potential.',
    icon: 'search',
  },
  {
    title: 'Campaign Creation',
    description: 'Creating professional ads, audiences and landing pages.',
    icon: 'campaign',
  },
  {
    title: 'Optimisation & Scaling',
    description: 'Continuous improvement for better performance and lower costs.',
    icon: 'tune',
  },
];

const campaignTypes = [
  { title: 'Lead Generation', description: 'More enquiries for service providers and businesses.', icon: 'person_add' },
  { title: 'E-Commerce Advertising', description: 'Google Shopping and performance campaigns for online shops.', icon: 'shopping_cart' },
  { title: 'Local Advertising', description: 'Google Ads for local businesses and regional visibility.', icon: 'location_on' },
  { title: 'Brand Campaigns', description: 'Building brand awareness and digital reach.', icon: 'campaign' },
];

const whyEvolaTec = [
  {
    title: 'Performance Focus',
    description: 'Targeted campaigns focused on results.',
    icon: 'ads_click',
    iconBg: 'bg-blue-100',
    iconColor: 'text-blue-600',
    borderColor: 'border-blue-500',
  },
  {
    title: 'Technical Expertise',
    description: 'Combination of marketing, SEO and development.',
    icon: 'code',
    iconBg: 'bg-emerald-100',
    iconColor: 'text-emerald-600',
    borderColor: 'border-emerald-500',
  },
  {
    title: 'Scalable Campaigns',
    description: 'Systems built for long-term growth.',
    icon: 'stacked_line_chart',
    iconBg: 'bg-purple-100',
    iconColor: 'text-purple-600',
    borderColor: 'border-purple-500',
  },
];

const pricingItems = [
  { name: 'Google Ads Consulting', price: 'from €90/hour' },
  { name: 'Google Ads Management', price: 'from €400/month' },
  { name: 'Creatives & Graphics', price: 'from €150' },
  { name: 'Monthly Reporting', price: 'from €100/month' },
  { name: 'Landing Page', price: 'from €500' },
  { name: 'SEO Optimisation', price: 'from €300' },
];

const adsFaqs = [
  {
    question: 'What does a Google Ads agency do?',
    answer:
      'A Google Ads agency plans, launches and optimises advertising campaigns on Google – Search, Display, Shopping and YouTube. This includes keyword research, ad copy, conversion tracking and ongoing optimisation. The goal is to generate as many qualified clicks, leads or sales as possible with your budget.',
  },
  {
    question: 'How quickly do Google Ads work?',
    answer:
      'Google advertising can generate first visitors and leads within just a few days. Unlike SEO, Google Ads provide immediate visibility. Campaigns are then continuously optimised based on performance data.',
  },
  {
    question: 'How much do Google Ads campaigns cost?',
    answer:
      'Our Google Ads management starts from €400/month for agency services. The advertising budget (click costs) is set separately and paid directly to Google. The budget amount depends on industry, competition and goals – we provide a recommendation before campaign launch.',
  },
  {
    question: 'What is the difference between Google Ads and SEO?',
    answer:
      'Google Ads are paid advertisements that appear immediately above organic search results – you pay per click. SEO delivers organic rankings without click costs but takes months. In practice both channels complement each other: ads deliver fast leads, SEO builds stable visibility long-term.',
  },
  {
    question: 'Which businesses are suited for Google Ads?',
    answer:
      'Google Ads work for nearly every industry where potential customers actively search for solutions: local service providers, online shops, B2B companies, start-ups and service businesses. Particularly effective when your offering solves a concrete problem and click prices fit your order value.',
  },
];

const relatedServices = [
  { icon: 'article', title: 'Landing Page Design', description: 'High-converting landing pages purpose-built for Google Ads traffic — lower CPA, more leads.', price: 'from €500', href: '/en/landing-page-design' },
  { icon: 'language', title: 'Business Website', description: 'A fast, professional business website that turns your ad clicks into real enquiries.', price: 'from €1,500', href: '/en/business-website-design' },
  { icon: 'shopping_bag', title: 'Online Shop', description: 'E-commerce with Google Shopping integration — built for performance and maximum ROAS.', price: 'from €3,000', href: '/en/online-shop-development' },
];
</script>
