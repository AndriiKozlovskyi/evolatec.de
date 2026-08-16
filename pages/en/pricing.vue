<template>
  <div>
    <HeroSection
      background-image="/landing/advertising.webp"
      badge="Transparent Pricing"
      title="Website Development Costs & Pricing"
      description="Transparent pricing for landing pages, business websites and online shops. Professional web development with no hidden costs."
      primaryCTA="Get a Free Quote"
      secondaryCTA="View Pricing"
      :stats="heroStats"
    />

    <!-- Intro Section -->
    <section class="py-8 md:py-section-padding bg-surface-container-low">
      <div class="max-w-container-max mx-auto px-gutter">
        <div class="max-w-3xl mx-auto text-center space-y-3 md:space-y-stack-md">
          <h2 class="font-display text-3xl sm:text-4xl md:text-5xl text-on-surface leading-tight">How much does it cost to have a website built?</h2>
          <p class="text-sm sm:text-body-md md:text-body-lg text-on-surface-variant leading-relaxed">
            The cost of a website depends on scope, features and design. A simple landing page is more affordable than a complex online shop.
          </p>
          <p class="text-sm sm:text-body-md md:text-body-lg text-on-surface-variant leading-relaxed">
            At EvolaTec you get transparent fixed prices and modern websites optimised for results.
          </p>
        </div>
      </div>
    </section>

    <!-- Pricing Overview Table -->
    <section class="py-8 md:py-section-padding bg-white">
      <div class="max-w-container-max mx-auto px-gutter">
        <div class="text-center mb-6 md:mb-stack-lg">
          <span class="text-label-md uppercase font-bold text-primary tracking-widest mb-2 block text-xs">Pricing</span>
          <h2 class="font-display text-3xl sm:text-4xl md:text-5xl text-on-surface mb-2 md:mb-4 leading-tight">Website Pricing Overview</h2>
          <p class="text-on-surface-variant text-sm sm:text-lg max-w-2xl mx-auto">Transparent pricing for professional websites.</p>
        </div>

        <div class="overflow-x-auto rounded-lg">
          <table class="w-full text-sm sm:text-base">
            <thead>
              <tr class="border-b-2 border-primary/20 bg-surface">
                <th class="text-left p-2 sm:p-4 font-bold text-on-surface text-xs sm:text-base">Service</th>
                <th class="text-left p-2 sm:p-4 font-bold text-on-surface text-xs sm:text-base">Price</th>
                <th class="text-left p-2 sm:p-4 font-bold text-on-surface text-xs sm:text-base">Delivery</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, index) in pricingTable" :key="index" class="border-b border-surface-container hover:bg-surface transition-colors duration-200">
                <td class="p-2 sm:p-4 text-on-surface font-medium text-xs sm:text-base">{{ item.service }}</td>
                <td class="p-2 sm:p-4 text-primary font-bold text-sm sm:text-lg">{{ item.price }}</td>
                <td class="p-2 sm:p-4 text-on-surface-variant text-xs sm:text-base">{{ item.delivery }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <FeaturesSection
      title="What Affects the Cost of a Website?"
      :features="priceFactors"
      image-url="/web-development-cost/features.webp"
      image-alt="Factors that influence website costs – design, features and SEO"
    />

    <!-- Landing Page Section -->
    <section class="py-8 md:py-section-padding bg-white">
      <div class="max-w-container-max mx-auto px-gutter">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-stack-lg items-center">
          <div>
            <h2 class="font-display text-3xl sm:text-4xl md:text-5xl text-on-surface mb-4 md:mb-stack-md leading-tight">Landing Page – Pricing</h2>
            <p class="text-sm sm:text-body-md md:text-body-lg text-on-surface-variant mb-4 md:mb-6 leading-relaxed">
              Landing pages are perfect for advertising, local services and fast lead generation.
            </p>
            <div class="space-y-3 md:space-y-4 mb-6 md:mb-8">
              <div v-for="feature in landingFeatures" :key="feature" class="flex items-start gap-3 group">
                <span translate="no" class="notranslate material-symbols-outlined text-primary text-lg md:text-xl flex-shrink-0">check_circle</span>
                <span class="text-sm sm:text-body-md text-on-surface">{{ feature }}</span>
              </div>
            </div>
            <NuxtLink to="/en/contact" class="inline-block">
              <BaseButton variant="primary" size="md">More about Landing Pages</BaseButton>
            </NuxtLink>
          </div>
          <div class="bg-gradient-to-br from-primary-container to-primary rounded-xl md:rounded-2xl p-6 sm:p-8 md:p-12 text-on-primary shadow-xl">
            <p class="text-on-primary-container text-xs font-bold uppercase tracking-widest mb-2">Landing Page</p>
            <p class="text-3xl sm:text-4xl md:text-5xl font-black mb-3 md:mb-4 leading-tight">from €500</p>
            <p class="text-on-primary-container text-sm md:text-base mb-4 md:mb-6">Delivery from 3 days</p>
            <NuxtLink to="/en/contact" class="block w-full">
              <BaseButton variant="secondary" size="md" class="w-full">Send Enquiry</BaseButton>
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- Website Section -->
    <section class="py-8 md:py-section-padding bg-surface-container-low">
      <div class="max-w-container-max mx-auto px-gutter">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-stack-lg items-center">
          <div class="bg-gradient-to-br from-primary-container to-primary rounded-xl md:rounded-2xl p-6 sm:p-8 md:p-12 text-on-primary shadow-xl order-2 md:order-1">
            <p class="text-on-primary-container text-xs font-bold uppercase tracking-widest mb-2">Business Website</p>
            <p class="text-3xl sm:text-4xl md:text-5xl font-black mb-3 md:mb-4 leading-tight">from €1,500</p>
            <p class="text-on-primary-container text-sm md:text-base mb-4 md:mb-6">Delivery from 7 days</p>
            <NuxtLink to="/en/contact" class="block w-full">
              <BaseButton variant="secondary" size="md" class="w-full">Send Enquiry</BaseButton>
            </NuxtLink>
          </div>
          <div class="order-1 md:order-2">
            <h2 class="font-display text-3xl sm:text-4xl md:text-5xl text-on-surface mb-4 md:mb-stack-md leading-tight">Business Website – Pricing</h2>
            <p class="text-sm sm:text-body-md md:text-body-lg text-on-surface-variant mb-4 md:mb-6 leading-relaxed">
              Professional business websites for local companies, agencies and service providers.
            </p>
            <div class="space-y-3 md:space-y-4 mb-6 md:mb-8">
              <div v-for="feature in websiteFeatures" :key="feature" class="flex items-start gap-3 group">
                <span translate="no" class="notranslate material-symbols-outlined text-primary text-lg md:text-xl flex-shrink-0">check_circle</span>
                <span class="text-sm sm:text-body-md text-on-surface">{{ feature }}</span>
              </div>
            </div>
            <NuxtLink to="/en/contact" class="inline-block">
              <BaseButton variant="primary" size="md">More about Business Websites</BaseButton>
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- E-Commerce Section -->
    <section class="py-8 md:py-section-padding bg-white">
      <div class="max-w-container-max mx-auto px-gutter">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-stack-lg items-center">
          <div>
            <h2 class="font-display text-3xl sm:text-4xl md:text-5xl text-on-surface mb-4 md:mb-stack-md leading-tight">Online Shop – Pricing</h2>
            <p class="text-sm sm:text-body-md md:text-body-lg text-on-surface-variant mb-4 md:mb-6 leading-relaxed">
              Modern e-commerce solutions and Shopify shops for businesses and brands.
            </p>
            <div class="space-y-3 md:space-y-4 mb-6 md:mb-8">
              <div v-for="feature in ecommerceFeatures" :key="feature" class="flex items-start gap-3 group">
                <span translate="no" class="notranslate material-symbols-outlined text-primary text-lg md:text-xl flex-shrink-0">check_circle</span>
                <span class="text-sm sm:text-body-md text-on-surface">{{ feature }}</span>
              </div>
            </div>
            <NuxtLink to="/en/contact" class="inline-block">
              <BaseButton variant="primary" size="md">More about Online Shops</BaseButton>
            </NuxtLink>
          </div>
          <div class="bg-gradient-to-br from-primary-container to-primary rounded-xl md:rounded-2xl p-6 sm:p-8 md:p-12 text-on-primary shadow-xl">
            <p class="text-on-primary-container text-xs font-bold uppercase tracking-widest mb-2">Online Shop</p>
            <p class="text-3xl sm:text-4xl md:text-5xl font-black mb-3 md:mb-4 leading-tight">from €3,000</p>
            <p class="text-on-primary-container text-sm md:text-base mb-4 md:mb-6">Delivery from 14 days</p>
            <NuxtLink to="/en/contact" class="block w-full">
              <BaseButton variant="secondary" size="md" class="w-full">Send Enquiry</BaseButton>
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <BenefitsSection title="Why EvolaTec?" :benefits="whyUs" />

    <FAQSection title="Frequently Asked Questions about Website Pricing" :faqs="faqs" />

    <CTASection
      title="Get Your Website Built Professionally"
      description="Modern websites, landing pages and online shops with transparent pricing."
      primary-cta="Free Consultation"
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
      '@type': 'CollectionPage',
      '@id': 'https://evolatec.de/en/pricing/#webpage',
      url: 'https://evolatec.de/en/pricing',
      name: 'Website Costs & Pricing | EvolaTec Web Agency',
      description: 'Transparent pricing for landing pages, business websites and online shops. Professional web development with no hidden costs.',
      isPartOf: { '@id': 'https://evolatec.de/#website' },
      about: { '@id': 'https://evolatec.de/#organization' },
      inLanguage: 'en-US',
    },
    {
      '@type': 'ItemList',
      '@id': 'https://evolatec.de/en/pricing/#pricelist',
      name: 'Website Pricing EvolaTec',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Landing Page', description: 'from €500 – Delivery from 3 days' },
        { '@type': 'ListItem', position: 2, name: 'Business Website', description: 'from €1,500 – Delivery from 7 days' },
        { '@type': 'ListItem', position: 3, name: 'Online Shop', description: 'from €3,000 – Delivery from 14 days' },
        { '@type': 'ListItem', position: 4, name: 'Premium E-Commerce', description: 'from €6,000 – Delivery from 30 days' },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        { '@type': 'Question', name: 'How much does a professional website cost?', acceptedAnswer: { '@type': 'Answer', text: 'Professional business websites start from €1,500, depending on scope and features.' } },
        { '@type': 'Question', name: 'How much does a landing page cost?', acceptedAnswer: { '@type': 'Answer', text: 'Landing pages start from €500 and are ideal for advertising, campaigns and fast lead generation.' } },
        { '@type': 'Question', name: 'How much does an online shop cost?', acceptedAnswer: { '@type': 'Answer', text: 'Online shops start from €3,000. Premium e-commerce solutions with advanced features from €6,000.' } },
        { '@type': 'Question', name: 'Are there fixed prices?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, we offer transparent fixed-price quotes. You know from the start what your website will cost — no surprise additional costs.' } },
        { '@type': 'Question', name: 'Is SEO included?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, basic SEO is included in all projects. This covers technical optimisation, fast load times, mobile optimisation and clean meta data.' } },
        { '@type': 'Question', name: 'Is maintenance and support included?', acceptedAnswer: { '@type': 'Answer', text: 'The basics are included in the price. For regular maintenance, updates and extended support we offer flexible packages.' } },
      ],
    },
  ],
};

useHead({
  title: 'Website Costs & Pricing | EvolaTec Web Agency',
  htmlAttrs: { lang: 'en' },
  meta: [
    {
      name: 'description',
      content: 'How much does a professional website cost? Transparent pricing for business websites, landing pages and online shops. Compare costs now.',
    },
    {
      name: 'keywords',
      content: 'website cost, website pricing, web design prices, web agency pricing, website development cost',
    },
    { property: 'og:title', content: 'Website Costs & Pricing | EvolaTec' },
    { property: 'og:description', content: 'Transparent pricing for professional websites, landing pages and online shops.' },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://evolatec.de/en/pricing' },
    { property: 'og:locale', content: 'en_US' },
    { property: 'og:locale:alternate', content: 'de_DE' },
  ],
  link: [
    { rel: 'canonical', href: 'https://evolatec.de/en/pricing' },
    ...hreflangLinks.value,
  ],
  script: [{ type: 'application/ld+json', innerHTML: JSON.stringify(schemaMarkup) }],
});

const heroStats = [
  { value: 'from €500', label: 'Landing Page', icon: 'trending_up' },
  { value: 'from €1,500', label: 'Website', icon: 'language' },
  { value: 'from €3,000', label: 'Online Shop', icon: 'shopping_bag' },
  { value: 'No', label: 'Hidden Costs', icon: 'verified' },
];

const pricingTable = [
  { service: 'Landing Page / One-Pager', price: 'from €500', delivery: 'from 3 days' },
  { service: 'Business Website', price: 'from €1,500', delivery: 'from 7 days' },
  { service: 'Online Shop', price: 'from €3,000', delivery: 'from 14 days' },
  { service: 'Premium E-Commerce', price: 'from €6,000', delivery: 'from 30 days' },
];

const priceFactors = [
  {
    icon: 'pages',
    title: 'Number of Pages',
    description: 'More subpages mean more development effort.',
  },
  {
    icon: 'design_services',
    title: 'Custom Design',
    description: 'Bespoke designs require more time.',
  },
  {
    icon: 'extension',
    title: 'Features',
    description: 'Shops, booking systems, multilingual support or integrations increase the effort.',
  },
  {
    icon: 'search_insights',
    title: 'SEO & Marketing',
    description: 'Advanced SEO optimisation and advertising systems affect the price.',
  },
];

const landingFeatures = [
  'From €500',
  'Delivery from 3 days',
  'SEO-ready',
  'Responsive Design',
];

const websiteFeatures = [
  'From €1,500',
  'From 7 days',
  'SEO optimised',
  'Modern web design',
];

const ecommerceFeatures = [
  'From €3,000',
  'From 14 days',
  'Product management',
  'Payment systems integrated',
];

const whyUs = [
  {
    icon: 'verified_user',
    title: 'Transparent Pricing',
    description: 'Clear quotes with no hidden costs.',
    bg: 'bg-gradient-to-br from-emerald-600 to-teal-800',
    image: '/web-development-cost/price.webp',
  },
  {
    icon: 'trending_up',
    title: 'Results Focused',
    description: 'Websites that win customers and increase revenue.',
    bg: 'bg-gradient-to-br from-blue-600 to-blue-800',
    image: '/landing/leads.webp',
  },
  {
    icon: 'rocket_launch',
    title: 'Modern Technologies',
    description: 'Fast, SEO-optimised and responsive websites.',
    bg: 'bg-gradient-to-br from-purple-600 to-indigo-800',
    image: '/web-development-cost/tech.webp',
  },
];

const faqs = [
  {
    question: 'How much does a professional website cost?',
    answer:
      'Professional business websites at EvolaTec start from €1,500 including design, development and basic SEO. Exact costs depend on scope, page count and features – use our pricing calculator for a quick estimate.',
  },
  {
    question: 'How much does a landing page cost?',
    answer:
      'A professional landing page starts from €500 and is ideal for ad campaigns and lead generation. Landing page copywriting can be added separately from €250.',
  },
  {
    question: 'How much does an online shop cost?',
    answer:
      'Online shops start from €3,000 as a basic shop. Premium E-Commerce with extended features from €6,000. Additional ongoing operating costs apply depending on the platform: hosting or platform fees and payment provider fees.',
  },
  {
    question: 'How much does SEO cost at EvolaTec?',
    answer:
      'An SEO audit starts from €100, SEO optimisation from €300 and ongoing SEO management from €300/month. Local SEO starts from €400, link building from €100 and SEO copy from €150. Exact costs depend on scope and your goals.',
  },
  {
    question: 'How much does online marketing (Google Ads, Meta Ads) cost?',
    answer:
      'Our Google Ads management starts from €400/month, Meta Ads (Facebook/Instagram) from €300/month. The advertising budget for the ads themselves is set separately and paid directly to Google or Meta.',
  },
  {
    question: 'Are there fixed prices or are costs billed hourly?',
    answer:
      'We work with transparent fixed-price quotes. You know from the start what your project will cost – no surprise additional costs during development. We bill hourly only for consulting or smaller special tasks (from €90/hour).',
  },
  {
    question: 'Is SEO included with websites?',
    answer:
      'Yes, basic SEO is included in all web projects: clean code structure, fast loading times, mobile optimisation and correct meta data. For deeper SEO strategies such as keyword research, content optimisation and link building we offer additional SEO packages.',
  },
  {
    question: 'Is maintenance and support included after launch?',
    answer:
      'Many of our web development packages include a support phase after launch. For long-term maintenance, updates and performance monitoring we offer flexible maintenance packages on request.',
  },
];
</script>
