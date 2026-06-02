<template>
  <div>
    <HeroSection
      background-image="/ecommerce/hero.webp"
      badge="E-Commerce Excellence"
      title="Online Shop Development – Your Professional E-Commerce Store"
      description="We develop e-commerce platforms with the precision of modern architecture. Scalable, secure and optimised for maximum conversion."
      primaryCTA="Get a Free Consultation"
      secondaryCTA="View Pricing"
      :stats="heroStats"
    />

    <TrustSection :companies="trustCompanies" />

    <!-- Intro — 2-col -->
    <section data-nav-label="Intro" data-nav-icon="storefront" class="relative py-section-padding bg-surface overflow-hidden">
      <div class="absolute top-20 -right-32 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[120px] pointer-events-none"></div>
      <div class="absolute bottom-0 -left-32 w-[400px] h-[400px] rounded-full bg-primary-container/20 blur-[100px] pointer-events-none"></div>
      <div class="relative max-w-container-max mx-auto px-gutter">
        <div class="grid lg:grid-cols-[1.15fr_1fr] gap-stack-lg items-center">
          <div>
            <span class="inline-flex items-center gap-2 rounded-full bg-primary/8 border border-primary/15 px-4 py-2 text-sm font-medium text-primary mb-6">
              <span class="material-symbols-outlined text-[18px]">shopping_cart</span>
              Professional Online Shop
            </span>
            <h2 class="font-headline-xl text-headline-xl text-primary mb-8 leading-[1.1]">
              Get Your
              <span class="relative inline-block">
                <span class="relative z-10">Online Shop</span>
                <span class="absolute -bottom-1 left-0 right-0 h-3 bg-primary/15 rounded-sm -z-0"></span>
              </span>
              Professionally Built
            </h2>
            <div class="space-y-5 mb-10">
              <div v-for="(point, i) in introPoints" :key="i" class="flex gap-4 items-start">
                <div class="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span class="material-symbols-outlined text-primary text-[18px]">{{ point.icon }}</span>
                </div>
                <p class="font-body-lg text-on-surface-variant flex-1 pt-1">{{ point.text }}</p>
              </div>
            </div>
            <div class="grid grid-cols-3 gap-6 pt-8 border-t border-outline-variant/30 text-center">
              <div v-for="stat in introStats" :key="stat.label">
                <div class="font-display text-3xl text-primary font-black leading-none">{{ stat.value }}</div>
                <div class="text-[0.7rem] uppercase tracking-widest text-on-surface-variant font-bold mt-2">{{ stat.label }}</div>
              </div>
            </div>
          </div>
          <div class="relative hidden lg:block">
            <div class="relative aspect-square max-w-md mx-auto">
              <div class="absolute inset-6 rounded-[2rem] bg-gradient-to-br from-primary/85 via-primary-container to-primary/60 ambient-shadow"></div>
              <div class="absolute top-0 right-8 w-20 h-20 rounded-2xl bg-white shadow-xl flex items-center justify-center rotate-[8deg]">
                <span class="material-symbols-outlined text-primary text-[40px]">storefront</span>
              </div>
              <div class="absolute top-20 left-0 bg-white rounded-2xl p-5 shadow-xl rotate-[-5deg]">
                <div class="text-[0.65rem] uppercase tracking-widest font-bold text-on-surface-variant mb-3">Fixed Price</div>
                <div class="font-display text-4xl font-black leading-none text-primary">from €3,000</div>
                <div class="text-xs text-on-surface-variant mt-1">Transparent</div>
              </div>
              <div class="absolute top-44 right-0 bg-white rounded-2xl p-5 shadow-xl rotate-[5deg]">
                <div class="text-[0.65rem] uppercase tracking-widest font-bold text-on-surface-variant mb-2">Delivery</div>
                <div class="font-display text-4xl font-black leading-none text-primary">from 14<span class="text-lg text-on-surface-variant">d</span></div>
                <div class="text-xs text-on-surface-variant mt-1">Live fast</div>
              </div>
              <div class="absolute bottom-6 left-6 bg-white rounded-2xl p-5 shadow-xl rotate-[-3deg]">
                <div class="text-[0.65rem] uppercase tracking-widest font-bold text-on-surface-variant mb-3">Payment Methods</div>
                <div class="flex flex-col gap-1.5 w-32">
                  <div class="h-2 rounded-sm bg-primary w-full"></div>
                  <div class="h-2 rounded-sm bg-primary/30 w-3/4"></div>
                  <div class="h-2 rounded-sm bg-primary/30 w-5/6"></div>
                </div>
              </div>
              <div class="absolute bottom-16 right-0 bg-white rounded-full px-4 py-2 shadow-xl rotate-[6deg] flex items-center gap-2">
                <span class="relative flex w-2 h-2">
                  <span class="absolute inline-flex w-full h-full rounded-full bg-emerald-500 opacity-75 animate-ping"></span>
                  <span class="relative inline-flex w-2 h-2 rounded-full bg-emerald-500"></span>
                </span>
                <span class="text-xs font-bold text-on-surface uppercase tracking-wider">Live Shop</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <ServicesSection
      title="Our E-Commerce Services"
      subtitle="Professional online shop development for businesses, brands and digital merchants."
      variant="centered"
      :services="ecommerceServices"
    />

    <FeaturesSection
      title="Engineering excellence in e-commerce."
      :features="features"
      image-url="/ecommerce/features.webp"
    />

    <ExpertiseCardsSection
      eyebrow="E-Commerce from One Source"
      eyebrow-icon="verified"
      title="Online Shop Development — from Concept to First Sale"
      :blocks="expertiseBlocks"
    />

    <PricingSection
      title="Online Shop Pricing"
      subtitle="Transparent pricing with no hidden costs. Online shop development from €3,000."
      :pricing-plans="pricingPlans"
    />

    <BenefitsSection title="Why Choose EvolaTec for Your Online Shop?" :benefits="benefits" />

    <FAQSection title="Frequently Asked Questions about Online Shop Development" :faqs="faqs" />

    <CTASection
      title="Get Your Professional Online Shop Built Today"
      description="EvolaTec develops professional online shops and e-commerce platforms for businesses of all sizes — fast, secure and conversion-optimised."
      primary-cta="Get a Free Consultation"
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
      '@id': 'https://evolatec.de/en/online-shop-development/#webpage',
      url: 'https://evolatec.de/en/online-shop-development',
      name: 'Online Shop Development – E-Commerce & Web Shop | EvolaTec',
      description: 'Professional online shops and e-commerce platforms from €3,000. Shopify and custom shops with SEO optimisation and high conversion rates.',
      isPartOf: { '@id': 'https://evolatec.de/#website' },
      about: { '@id': 'https://evolatec.de/#organization' },
      inLanguage: 'en-US',
    },
    {
      '@type': 'Service',
      '@id': 'https://evolatec.de/en/online-shop-development/#service',
      name: 'Online Shop Development',
      description: 'Professional e-commerce shops for businesses — Shopify and custom solutions with SEO and conversion optimisation.',
      url: 'https://evolatec.de/en/online-shop-development',
      provider: { '@id': 'https://evolatec.de/#organization' },
      areaServed: { '@type': 'Country', name: 'Germany' },
      offers: { '@type': 'Offer', priceSpecification: { '@type': 'PriceSpecification', minPrice: '3000', priceCurrency: 'EUR' } },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        { '@type': 'Question', name: 'How much does it cost to build an online shop?', acceptedAnswer: { '@type': 'Answer', text: 'Professional online shop development at EvolaTec starts from €3,000 for a starter shop. Premium solutions with extended features and integrations start from €6,000.' } },
        { '@type': 'Question', name: 'What ongoing costs are there after the shop is built?', acceptedAnswer: { '@type': 'Answer', text: 'In addition to the one-off development cost, there are monthly operating costs depending on the platform: a Shopify plan, hosting, payment provider fees and optional maintenance.' } },
        { '@type': 'Question', name: 'How long does it take to develop an online shop?', acceptedAnswer: { '@type': 'Answer', text: 'A professional online shop can be live in as little as 14 working days at EvolaTec. More complex custom solutions typically take 6–12 weeks.' } },
        { '@type': 'Question', name: 'Which shop platform is right for my business?', acceptedAnswer: { '@type': 'Answer', text: 'Shopify is ideal for quick start and easy management. Custom solutions built with Nuxt and Storyblok are recommended for complex processes and high scalability.' } },
        { '@type': 'Question', name: 'Do you support SEO optimisation of the shop?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, every shop we develop is SEO-optimised from the ground up — with technical structure, PageSpeed optimisation, Schema.org markup and a clean URL architecture.' } },
        { '@type': 'Question', name: 'Is my online shop secure?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Every shop we develop is delivered with SSL encryption, secure payment providers (Stripe, PayPal, Klarna) and GDPR-compliant data processing.' } },
        { '@type': 'Question', name: 'Does EvolaTec offer maintenance and support after launch?', acceptedAnswer: { '@type': 'Answer', text: '30 days of free support after launch are included. Beyond that, we offer maintenance packages with monthly support, updates and performance monitoring.' } },
      ],
    },
  ],
};

useHead({
  title: 'Online Shop Development – E-Commerce & Web Shop | EvolaTec',
  htmlAttrs: { lang: 'en' },
  meta: [
    {
      name: 'description',
      content: 'Professional online shop development from €3,000. Shopify and custom e-commerce solutions with SEO optimisation and high conversion rates.',
    },
    {
      name: 'keywords',
      content: 'online shop development, e-commerce development, Shopify development, custom shop development, e-commerce agency',
    },
    { property: 'og:title', content: 'Online Shop Development – E-Commerce | EvolaTec' },
    { property: 'og:description', content: 'Professional e-commerce solutions and online shops for businesses.' },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://evolatec.de/en/online-shop-development' },
    { property: 'og:locale', content: 'en_US' },
    { property: 'og:locale:alternate', content: 'de_DE' },
  ],
  link: [
    { rel: 'canonical', href: 'https://evolatec.de/en/online-shop-development' },
    ...hreflangLinks.value,
  ],
  script: [{ type: 'application/ld+json', innerHTML: JSON.stringify(schemaMarkup) }],
});

const heroStats = [
  { value: 'from €3,000', label: 'Fixed Price', icon: 'price_check' },
  { value: 'from 14d', label: 'Delivery', icon: 'rocket_launch' },
  { value: 'SSL', label: 'Secure', icon: 'shield' },
  { value: '30 Days', label: 'Support', icon: 'support_agent' },
];

const trustCompanies = ['E-COMMERCE', 'SHOPIFY', 'CUSTOM SHOP'];

const introPoints = [
  {
    icon: 'storefront',
    text: 'EvolaTec develops professional online shops and e-commerce platforms for businesses that want to sell and grow online — from concept to fully functional web shop.',
  },
  {
    icon: 'payments',
    text: 'A professional online shop impresses with fast load times, secure payment processing and a user-friendly interface — exactly what your customers expect.',
  },
  {
    icon: 'trending_up',
    text: 'Our e-commerce agency combines modern shop design, technical performance and SEO optimisation — so your online shop generates measurable revenue.',
  },
];

const introStats = [
  { value: 'SSL', label: 'Secure' },
  { value: 'from €3,000', label: 'Fixed Price' },
  { value: 'from 14d', label: 'Delivery' },
];

const ecommerceServices = [
  {
    title: 'Shopify Shop Development',
    description: 'Professional Shopify shops with custom design, fast setup and optimised conversion rates.',
    icon: 'storefront',
    iconBg: 'bg-blue-100',
    iconColor: 'text-blue-600',
    borderColor: 'border-blue-500',
  },
  {
    title: 'Custom Shop Development',
    description: 'Bespoke e-commerce platforms for complex requirements, high scalability and individual workflows.',
    icon: 'code',
    iconBg: 'bg-emerald-100',
    iconColor: 'text-emerald-600',
    borderColor: 'border-emerald-500',
  },
  {
    title: 'E-Commerce SEO',
    description: 'Technical SEO optimisation for online shops — better Google rankings, more organic traffic and higher revenue.',
    icon: 'search_insights',
    iconBg: 'bg-orange-100',
    iconColor: 'text-orange-600',
    borderColor: 'border-orange-500',
  },
  {
    title: 'Conversion Optimisation',
    description: 'Professional CRO measures for higher purchase rates, better user experience and optimised checkout flows.',
    icon: 'ads_click',
    iconBg: 'bg-rose-100',
    iconColor: 'text-rose-600',
    borderColor: 'border-rose-500',
  },
  {
    title: 'Shop Maintenance & Support',
    description: 'Ongoing management, updates, performance monitoring and technical support for your online shop.',
    icon: 'build',
    iconBg: 'bg-cyan-100',
    iconColor: 'text-cyan-600',
    borderColor: 'border-cyan-500',
  },
];

const expertiseBlocks = [
  {
    icon: 'price_check',
    title: 'Online Shop Development Costs — What You Should Know',
    paragraphs: [
      'The cost of building an online shop depends on the platform, scope and individual requirements. A professional online shop at EvolaTec starts from €3,000, with custom solutions priced accordingly.',
      'In addition to the one-off build cost, there are ongoing operating costs: hosting or platform fees (e.g. a Shopify plan), payment provider fees and optional maintenance.',
      'Investing in a professionally built online shop means investing in a solution that generates long-term revenue — rather than low-cost website builders that quickly hit their limits.',
      'EvolaTec offers transparent pricing with no hidden costs. From the very first conversation you receive a realistic estimate for your individual online shop.',
    ],
    tags: ['Shop Costs', 'Transparent', 'Shopify', 'Custom Shop'],
  },
  {
    icon: 'verified_user',
    title: 'Why a Professional E-Commerce Agency Makes the Difference',
    paragraphs: [
      'A professionally developed online shop differs significantly from website builder solutions in terms of performance, design and conversion optimisation.',
      'Professional e-commerce agencies like EvolaTec develop online shops with technical precision: load times under 1.5 seconds, clean SEO structure and seamless payment integration.',
      'A professionally built web shop benefits from custom design, optimised user experience and stable technical infrastructure — all critical for high conversion rates.',
      'As an e-commerce agency, we support businesses from concept through development to launch and beyond — with professional support and continuous optimisation.',
    ],
    tags: ['Professional', 'Conversion', 'Performance', 'E-Commerce Agency'],
  },
];

const benefits = [
  {
    title: 'Fast Delivery',
    description: 'Your professional online shop goes live in as little as 14 working days.',
    icon: 'flash_on',
    bg: 'bg-gradient-to-br from-blue-600 to-indigo-800',
    image: '/ecommerce/hero.webp',
  },
  {
    title: 'Higher Conversion',
    description: 'Conversion-focused shop architecture, clear CTAs and smooth checkout for more orders.',
    icon: 'trending_up',
    bg: 'bg-gradient-to-br from-emerald-600 to-teal-800',
    image: '/ecommerce/features.webp',
  },
  {
    title: 'Secure & Performant',
    description: 'SSL-encrypted payments, fast load times and SEO-optimised structure — technically solid.',
    icon: 'shield',
    bg: 'bg-gradient-to-br from-purple-600 to-indigo-800',
    image: '/web-development-cost/tech.webp',
  },
  {
    title: 'Transparent Pricing',
    description: 'Fixed price from €3,000 — honestly calculated from the start, no hidden fees.',
    icon: 'price_check',
    bg: 'bg-gradient-to-br from-orange-500 to-rose-600',
    image: '/main/price.webp',
  },
];

const features = [
  {
    icon: 'inventory_2',
    title: 'Product Management',
    description: 'Central control of complex product catalogues with PIM integration.',
  },
  {
    icon: 'payments',
    title: 'Secure Payments',
    description: 'PCI-DSS compliant payment processing for global trust.',
  },
  {
    icon: 'smartphone',
    title: 'Mobile First',
    description: 'Responsive architecture that works perfectly on every device.',
  },
  {
    icon: 'search_check',
    title: 'E-Commerce SEO',
    description: 'Structural optimisation for top rankings on Google & beyond.',
  },
];

const pricingPlans = [
  {
    tier: 'Starter',
    price: 'from €3,000',
    features: [
      'Online Shop Setup',
      'Responsive Design',
      'Basic SEO',
      '30 Days Support',
    ],
    buttonText: 'Request a Quote',
    isHighlighted: false,
  },
  {
    tier: 'Premium',
    price: 'from €6,000',
    features: [
      'Everything in Starter',
      'Unique Design + UI/UX',
      'SEO Optimisation & SEO Copy',
      'Google Ads Setup (budget separate)',
      'Advanced Analytics',
    ],
    buttonText: 'Most Popular',
    isHighlighted: true,
  },
  {
    tier: 'Enterprise',
    price: 'Custom',
    features: [
      'Everything in Premium',
      'Full Custom Architecture',
      'ERP & PIM Integration',
      'Multi-Shop Management',
      'Dedicated Team',
    ],
    buttonText: 'Book Consultation',
    isHighlighted: false,
  },
];

const faqs = [
  {
    question: 'How much does it cost to build an online shop?',
    answer:
      'A professional online shop at EvolaTec starts from €3,000 as a basic shop. Premium solutions with extended features and integrations start from €6,000. Exact costs depend on the number of products, functionality and platform – we provide a transparent fixed-price quote before the project starts.',
  },
  {
    question: 'What ongoing costs are there after the shop is built?',
    answer:
      'In addition to one-off development there are monthly operating costs depending on the platform: a Shopify plan (depending on the chosen tier), hosting for custom solutions, payment provider fees, domain and optional maintenance. A marketing budget (Google Ads, Meta Ads, SEO) should be planned separately depending on growth goals.',
  },
  {
    question: 'How long does it take to develop an online shop?',
    answer:
      'A professional online shop can be live in as little as 14 working days at EvolaTec. More complex custom solutions with individual integrations typically take 6–12 weeks for concept and development.',
  },
  {
    question: 'Which shop platform is right for my business?',
    answer:
      'Shopify is ideal for fast market launch and easy management. Custom solutions built with Nuxt and individual shop logic are recommended for complex processes, high performance demands or special integrations. We choose the platform based on your needs.',
  },
  {
    question: 'Do you also support SEO optimisation of the online shop?',
    answer:
      'Yes, every online shop is built SEO-optimised from the ground up: clean URL architecture, technical SEO, PageSpeed optimisation and correct meta data. For deeper SEO strategies such as category optimisation, product copy and link building we offer additional SEO packages.',
  },
  {
    question: 'Is my online shop secure and GDPR-compliant?',
    answer:
      'Yes, every shop is delivered with SSL encryption, secure payment providers and GDPR-compliant data processing. This includes cookie consent, privacy policy, legal notice and secure data transmission. Compliance is standard, not optional.',
  },
  {
    question: 'Does EvolaTec offer maintenance and support after launch?',
    answer:
      '30 days of support after launch are included in the price. Beyond that we offer maintenance packages on request with updates, security patches, backups and performance monitoring. We can also take over marketing management and conversion optimisation on an ongoing basis.',
  },
];
</script>
