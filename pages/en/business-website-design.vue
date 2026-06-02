<template>
  <div>
    <!-- Hero -->
    <HeroSection
      background-image="/main/firmen.webp"
      badge="Professional Business Website Development"
      title="Get a Professional Business Website – Built for Growth"
      description="We design and develop professional company websites for businesses, service providers and brands — focused on performance, SEO and conversion."
      primaryCTA="Get a Free Quote"
      secondaryCTA="View Pricing"
      :stats="heroStats"
    />

    <!-- Intro — 2-col with company toolkit visual -->
    <section data-nav-label="Intro" data-nav-icon="info" class="relative py-section-padding bg-surface overflow-hidden">
      <div class="absolute top-20 -right-32 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[120px] pointer-events-none"></div>
      <div class="absolute bottom-0 -left-32 w-[400px] h-[400px] rounded-full bg-primary-container/20 blur-[100px] pointer-events-none"></div>

      <div class="relative max-w-container-max mx-auto px-gutter">
        <div class="grid lg:grid-cols-[1.15fr_1fr] gap-stack-lg items-center">

          <div>
            <span class="inline-flex items-center gap-2 rounded-full bg-primary/8 border border-primary/15 px-4 py-2 text-sm font-medium text-primary mb-6">
              <span class="material-symbols-outlined text-[18px]">business</span>
              Professional Business Website
            </span>

            <h2 class="font-headline-xl text-headline-xl text-primary mb-8 leading-[1.1]">
              Professional
              <span class="relative inline-block">
                <span class="relative z-10">Business Website</span>
                <span class="absolute -bottom-1 left-0 right-0 h-3 bg-primary/15 rounded-sm -z-0"></span>
              </span>
              Design & Development
            </h2>

            <div class="space-y-5 mb-10">
              <div v-for="(point, i) in introPoints" :key="i" class="flex gap-4 items-start">
                <div class="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span class="material-symbols-outlined text-primary text-[18px]">{{ point.icon }}</span>
                </div>
                <p class="font-body-lg text-on-surface-variant flex-1 pt-1">{{ point.text }}</p>
              </div>
            </div>

            <div class="grid grid-cols-3 gap-6 pt-8 border-t border-outline-variant/30">
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
                <span class="material-symbols-outlined text-primary text-[40px]">business</span>
              </div>

              <div class="absolute top-20 left-0 bg-white rounded-2xl p-5 shadow-xl rotate-[-5deg]">
                <div class="text-[0.65rem] uppercase tracking-widest font-bold text-on-surface-variant mb-3">Fixed Price</div>
                <div class="font-display text-4xl font-black leading-none text-primary">from €1,500</div>
                <div class="text-xs text-on-surface-variant mt-1">Transparent</div>
              </div>

              <div class="absolute top-44 right-0 bg-white rounded-2xl p-5 shadow-xl rotate-[5deg]">
                <div class="text-[0.65rem] uppercase tracking-widest font-bold text-on-surface-variant mb-2">Delivery</div>
                <div class="font-display text-4xl font-black leading-none text-primary">from 7<span class="text-lg text-on-surface-variant">d</span></div>
                <div class="text-xs text-on-surface-variant mt-1">Live fast</div>
              </div>

              <div class="absolute bottom-6 left-6 bg-white rounded-2xl p-5 shadow-xl rotate-[-3deg]">
                <div class="text-[0.65rem] uppercase tracking-widest font-bold text-on-surface-variant mb-3">Brand Identity</div>
                <div class="flex flex-col gap-1.5 w-32">
                  <div class="h-2 rounded-sm bg-primary w-full"></div>
                  <div class="h-2 rounded-sm bg-primary/30 w-3/4"></div>
                  <div class="h-2 rounded-sm bg-primary/30 w-5/6"></div>
                  <div class="h-2 rounded-sm bg-primary w-2/3"></div>
                </div>
              </div>

              <div class="absolute bottom-16 right-0 bg-white rounded-full px-4 py-2 shadow-xl rotate-[6deg] flex items-center gap-2">
                <span class="relative flex w-2 h-2">
                  <span class="absolute inline-flex w-full h-full rounded-full bg-emerald-500 opacity-75 animate-ping"></span>
                  <span class="relative inline-flex w-2 h-2 rounded-full bg-emerald-500"></span>
                </span>
                <span class="text-xs font-bold text-on-surface uppercase tracking-wider">Online</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- Services -->
    <ServicesSection
      title="Services for Professional Business Websites"
      subtitle="Professional solutions for modern company online presence."
      variant="centered"
      :services="websiteServices"
    />

    <GradientLinksSection
      title="More Web Development Services"
      eyebrow="More Services"
      eyebrow-icon="hub"
      description="Explore our specialised web development and digital solutions."
      learn-more-label="Learn more"
      :cards="internalLinks"
    />

    <ExpertiseCardsSection
      eyebrow="Business Websites from One Source"
      eyebrow-icon="verified"
      title="Modern Business Websites — from Concept to Launch"
      :blocks="expertiseBlocks"
    />

    <!-- Features -->
    <FeaturesSection
      title="What a professional business website should include."
      :features="features"
      image-url="/web-development/features.webp"
      image-alt="Professional business website – modern features for companies"
    />

    <!-- Benefits -->
    <BenefitsSection title="Why Choose EvolaTec as Your Web Agency?" :benefits="benefits" />

    <!-- FAQ -->
    <FAQSection title="Frequently Asked Questions" :faqs="faqs" />

    <!-- CTA -->
    <CTASection
      title="Get Your Professional Business Website"
      description="EvolaTec builds modern company websites, business homepages and digital platforms for businesses and brands."
      primary-cta="Start Your Project"
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
      '@id': 'https://evolatec.de/en/business-website-design/#webpage',
      url: 'https://evolatec.de/en/business-website-design',
      name: 'Professional Business Website Design & Development | EvolaTec',
      description: 'Get a professional business website designed and developed. Modern websites for companies, service providers and brands — SEO-optimised, responsive and with transparent fixed prices.',
      isPartOf: { '@id': 'https://evolatec.de/#website' },
      about: { '@id': 'https://evolatec.de/#organization' },
      inLanguage: 'en-US',
    },
    {
      '@type': 'Service',
      '@id': 'https://evolatec.de/en/business-website-design/#service',
      name: 'Business Website Design & Development',
      description: 'Professional company websites for local businesses and enterprises — SEO-optimised, responsive and with transparent fixed prices.',
      url: 'https://evolatec.de/en/business-website-design',
      provider: { '@id': 'https://evolatec.de/#organization' },
      areaServed: { '@type': 'Country', name: 'Germany' },
      offers: { '@type': 'Offer', priceSpecification: { '@type': 'PriceSpecification', minPrice: '1500', priceCurrency: 'EUR' } },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        { '@type': 'Question', name: 'How much does a professional business website cost?', acceptedAnswer: { '@type': 'Answer', text: 'Costs depend on the scope of the project. Professional business websites start from €1,500 as a fixed price at EvolaTec. More complex websites with custom features or multilingual content are priced accordingly — we advise you transparently before the project starts.' } },
        { '@type': 'Question', name: 'Are there fixed prices for business websites?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, EvolaTec offers transparent fixed prices for professional websites. You know the cost from the start — no hidden charges during development.' } },
        { '@type': 'Question', name: 'Are the websites SEO optimised?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, all websites are developed with technical SEO built in — clean URL structure, optimised meta data, fast load times and semantic HTML for the best visibility on Google.' } },
        { '@type': 'Question', name: 'Are the websites responsive?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, all websites are developed Mobile First and work perfectly on smartphones, tablets and desktop devices.' } },
        { '@type': 'Question', name: 'How long does it take to develop a business website?', acceptedAnswer: { '@type': 'Answer', text: 'A professional business website can be live in as little as 7 working days at EvolaTec. Larger websites with more content and features typically take 2–4 weeks.' } },
      ],
    },
  ],
};

useHead({
  title: 'Professional Business Website Design & Development | EvolaTec',
  htmlAttrs: { lang: 'en' },
  meta: [
    {
      name: 'description',
      content: 'Get a professional business website designed and developed. Modern websites for companies and service providers — SEO-optimised, responsive, transparent fixed prices from €1,500.',
    },
    {
      name: 'keywords',
      content: 'business website design, professional website development, company website, business website agency, responsive website, SEO website',
    },
    { property: 'og:title', content: 'Professional Business Website Design | EvolaTec' },
    { property: 'og:description', content: 'Professional business websites by EvolaTec — modern design, transparent fixed prices, fast delivery.' },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://evolatec.de/en/business-website-design' },
    { property: 'og:locale', content: 'en_US' },
    { property: 'og:locale:alternate', content: 'de_DE' },
  ],
  link: [
    { rel: 'canonical', href: 'https://evolatec.de/en/business-website-design' },
    ...hreflangLinks.value,
  ],
  script: [{ type: 'application/ld+json', innerHTML: JSON.stringify(schemaMarkup) }],
});

const heroStats = [
  { value: 'Modern', label: 'Business Websites', icon: 'business' },
  { value: 'Responsive', label: 'Mobile First', icon: 'devices' },
  { value: 'SEO', label: 'Optimised', icon: 'trending_up' },
  { value: 'Fixed', label: 'Transparent Pricing', icon: 'price_check' },
];

const introPoints = [
  {
    icon: 'business',
    text: 'EvolaTec builds modern business websites for companies, service providers, local businesses and digital brands — focused on professional brand presence and measurable results.',
  },
  {
    icon: 'verified',
    text: 'A professional business website is essential today to build trust, attract new customers and present your company online in the best possible light.',
  },
  {
    icon: 'auto_awesome',
    text: 'Our web agency delivers modern websites with professional design, fast load times, responsive layout and SEO-optimised structure — everything from one source.',
  },
];

const introStats = [
  { value: '30 Days', label: 'Support' },
  { value: 'from €1,500', label: 'Fixed Price' },
  { value: 'from 7d', label: 'Delivery' },
];

const websiteServices = [
  {
    title: 'Business Website Development',
    description: 'Modern websites for companies, service providers and local brands.',
    icon: 'business',
    iconBg: 'bg-blue-100',
    iconColor: 'text-blue-600',
    borderColor: 'border-blue-500',
  },
  {
    title: 'Corporate Website Design',
    description: 'Professional company websites with modern web design and clear structure.',
    icon: 'corporate_fare',
    iconBg: 'bg-emerald-100',
    iconColor: 'text-emerald-600',
    borderColor: 'border-emerald-500',
  },
  {
    title: 'Responsive Web Design',
    description: 'Mobile-optimised websites for smartphones, tablets and desktop devices.',
    icon: 'devices',
    iconBg: 'bg-purple-100',
    iconColor: 'text-purple-600',
    borderColor: 'border-purple-500',
  },
  {
    title: 'SEO-Optimised Websites',
    description: 'Technically optimised company websites for better visibility on Google.',
    icon: 'trending_up',
    iconBg: 'bg-orange-100',
    iconColor: 'text-orange-600',
    borderColor: 'border-orange-500',
  },
  {
    title: 'Affordable Website Design',
    description: 'Professional websites at fair prices with a transparent cost structure.',
    icon: 'savings',
    iconBg: 'bg-rose-100',
    iconColor: 'text-rose-600',
    borderColor: 'border-rose-500',
  },
  {
    title: 'Fixed-Price Website Development',
    description: 'Transparent fixed prices with no hidden costs for businesses and freelancers.',
    icon: 'price_check',
    iconBg: 'bg-cyan-100',
    iconColor: 'text-cyan-600',
    borderColor: 'border-cyan-500',
    href: '/en/pricing',
  },
];

const internalLinks = [
  {
    to: '/en/web-development',
    icon: 'language',
    title: 'Web Development',
    description: 'Professional web development for modern websites and digital platforms.',
  },
  {
    to: '/en/landing-page-design',
    icon: 'flag',
    title: 'Landing Page Design',
    description: 'High-converting landing pages for ads, campaigns and lead generation.',
  },
  {
    to: '/en/online-shop-development',
    icon: 'shopping_cart',
    title: 'E-Commerce Development',
    description: 'Modern online shops and professional e-commerce platforms.',
  },
  {
    to: '/en/pricing',
    icon: 'payments',
    title: 'Website Pricing & Costs',
    description: 'Transparent pricing for professional business websites and web development.',
  },
];

const expertiseBlocks = [
  {
    icon: 'home_work',
    title: 'Professional Business Homepage Design',
    paragraphs: [
      'Businesses that invest in a professionally designed website benefit from a stronger brand image, higher trust and more digital enquiries.',
      'A modern business website helps you present your services professionally, attract new clients and strengthen your brand online.',
      'EvolaTec builds modern company websites that not only look great, but are technically performant and SEO-optimised.',
      'Today\'s professional websites must be fast, responsive and user-friendly — exactly what our web agency specialises in.',
    ],
    tags: ['Business Homepage', 'Brand Identity', 'Performance', 'SEO Ready'],
  },
  {
    icon: 'savings',
    title: 'Affordable Professional Website Design',
    paragraphs: [
      'Many businesses look for ways to get a professional website at a reasonable price without compromising on quality.',
      'EvolaTec offers modern websites at fair prices with a transparent cost structure and clear fixed prices — no hidden costs, no nasty surprises.',
      'Whether a small business website, a professional corporate site or a modern landing page — we build individual solutions that fit your budget.',
      'Our websites combine modern web design, fast load times, SEO optimisation and professional usability — affordable, but never cheap.',
    ],
    tags: ['Fixed Price', 'Affordable', 'Transparent', 'Fair Costs'],
  },
];

const features = [
  {
    icon: 'design_services',
    title: 'Professional Web Design',
    description: 'Modern brand design, clear structure and professional visuals for a credible business presence.',
  },
  {
    icon: 'devices',
    title: 'Responsive Design',
    description: 'Perfect display on smartphones, tablets and desktop — developed Mobile First.',
  },
  {
    icon: 'speed',
    title: 'Fast Load Times',
    description: 'Optimised performance under 2 seconds — good for users and for Google rankings.',
  },
  {
    icon: 'search_insights',
    title: 'SEO Optimisation',
    description: 'Technical SEO fundamentals, clean structure and meta data for more visibility on Google.',
  },
  {
    icon: 'price_check',
    title: 'Transparent Fixed Prices',
    description: 'Fair fixed prices with no hidden costs — clear from the very start.',
  },
];

const benefits = [
  {
    title: 'Professional Web Design',
    description: 'Modern business websites with high-quality brand presence.',
    icon: 'design_services',
    bg: 'bg-gradient-to-br from-blue-600 to-indigo-800',
    image: '/main/design.webp',
  },
  {
    title: 'Responsive Development',
    description: 'Optimised display on smartphones, tablets and desktop devices.',
    icon: 'devices',
    bg: 'bg-gradient-to-br from-emerald-600 to-teal-800',
    image: '/web-development/responsive.webp',
  },
  {
    title: 'SEO Optimisation',
    description: 'Technical SEO fundamentals and fast load times for better visibility.',
    icon: 'trending_up',
    bg: 'bg-gradient-to-br from-purple-600 to-indigo-800',
    image: '/main/seo.webp',
  },
  {
    title: 'Transparent Fixed Prices',
    description: 'Fair prices with no hidden costs for businesses and freelancers.',
    icon: 'price_check',
    bg: 'bg-gradient-to-br from-orange-500 to-rose-600',
    image: '/main/price.webp',
  },
];

const faqs = [
  {
    question: 'How much does a professional business website cost?',
    answer:
      'At EvolaTec, modern business websites start as a fixed price from €1,500 including design, development and basic SEO. Larger corporate websites with custom features or multilingual content are priced accordingly – we provide a transparent quote before the project starts.',
  },
  {
    question: 'Are there fixed prices for business websites?',
    answer:
      'Yes, EvolaTec works with transparent fixed prices for professional business websites. You know the cost from day one – there are no hidden charges during development.',
  },
  {
    question: 'How long does it take to develop a business website?',
    answer:
      'A professional business website can go live in as little as 7 working days at EvolaTec. Larger corporate websites with multiple languages or booking systems take 2–4 weeks depending on scope. The exact timeframe depends on how quickly content, images and approvals are provided.',
  },
  {
    question: 'Are the business websites SEO-optimised?',
    answer:
      'Yes, every business website is developed with basic SEO built in from the start – clean URL structure, optimised meta data, fast load times and semantic HTML. Your website is ready for strong Google rankings from day one. For deeper SEO strategies we offer additional packages.',
  },
  {
    question: 'Are the business websites responsive and mobile-optimised?',
    answer:
      'Yes, all websites are developed Mobile-First and work optimally on smartphones, tablets and desktop devices. Since Google uses Mobile-First Indexing, responsive design is now a prerequisite for good rankings.',
  },
  {
    question: 'Can I maintain the business website myself later?',
    answer:
      'Yes, on request we build your business website with Storyblok as a headless CMS so you can update text, images and blog posts yourself. Alternatively we take care of ongoing maintenance on request.',
  },
  {
    question: 'What is included after the business website launch?',
    answer:
      'After launch you receive 30 days of support and an optional maintenance agreement. We can also seamlessly take over SEO management, Google Ads campaigns or later extensions.',
  },
];
</script>
