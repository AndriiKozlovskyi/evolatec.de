<template>
  <div>
    <HeroSection
      background-image="/web-development/hero.webp"
      badge="Professional Web Development Agency"
      title="Professional Business Website | EvolaTec Agency"
      description="Get your website built – your professional web agency for modern business websites, landing pages and powerful digital solutions."
      primaryCTA="Get a Website Built"
      secondaryCTA="View Pricing"
      :stats="heroStats"
    />

    <!-- Intro — 2-col with developer toolkit visual -->
    <section data-nav-label="Intro" data-nav-icon="info" class="relative py-section-padding bg-surface overflow-hidden">
      <div class="absolute top-20 -right-32 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[120px] pointer-events-none"></div>
      <div class="absolute bottom-0 -left-32 w-[400px] h-[400px] rounded-full bg-primary-container/20 blur-[100px] pointer-events-none"></div>

      <div class="relative max-w-container-max mx-auto px-gutter">
        <div class="grid lg:grid-cols-[1.15fr_1fr] gap-stack-lg items-center">
          <div>
            <span class="inline-flex items-center gap-2 rounded-full bg-primary/8 border border-primary/15 px-4 py-2 text-sm font-medium text-primary mb-6">
              <span class="material-symbols-outlined text-[18px]">code</span>
              Professional Web Development
            </span>

            <h2 class="font-headline-xl text-headline-xl text-primary mb-8 leading-[1.1]">
              Professional
              <span class="relative inline-block">
                <span class="relative z-10">Websites</span>
                <span class="absolute -bottom-1 left-0 right-0 h-3 bg-primary/15 rounded-sm -z-0"></span>
              </span>
              Built for Your Business
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
                <span class="material-symbols-outlined text-primary text-[40px]">code_blocks</span>
              </div>

              <div class="absolute top-20 left-0 bg-white rounded-2xl p-5 shadow-xl rotate-[-5deg]">
                <div class="text-[0.65rem] uppercase tracking-widest font-bold text-on-surface-variant mb-3">Tech Stack</div>
                <div class="flex flex-wrap gap-1.5 max-w-[180px]">
                  <span class="px-2 py-1 rounded-md bg-primary/10 text-primary text-[0.65rem] font-bold">Vue</span>
                  <span class="px-2 py-1 rounded-md bg-primary/10 text-primary text-[0.65rem] font-bold">Nuxt</span>
                  <span class="px-2 py-1 rounded-md bg-primary/10 text-primary text-[0.65rem] font-bold">Tailwind</span>
                  <span class="px-2 py-1 rounded-md bg-primary/10 text-primary text-[0.65rem] font-bold">TypeScript</span>
                </div>
              </div>

              <div class="absolute top-44 right-0 bg-white rounded-2xl p-5 shadow-xl rotate-[5deg]">
                <div class="text-[0.65rem] uppercase tracking-widest font-bold text-on-surface-variant mb-2">Performance</div>
                <div class="font-display text-4xl font-black leading-none text-primary">99<span class="text-lg text-on-surface-variant">/100</span></div>
                <div class="text-xs text-on-surface-variant mt-1">Lighthouse</div>
              </div>

              <div class="absolute bottom-6 left-6 bg-white rounded-2xl p-5 shadow-xl rotate-[-3deg]">
                <div class="text-[0.65rem] uppercase tracking-widest font-bold text-on-surface-variant mb-3">Clean Code</div>
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
                <span class="text-xs font-bold text-on-surface uppercase tracking-wider">Deployed</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <ServicesSection
      title="Our Web Development Services"
      subtitle="Professional web development for businesses, brands and digital products."
      variant="centered"
      :services="developmentServices"
    />

    <FeaturesSection
      title="What a professional website should include."
      :features="features"
      image-url="/web-development/features.webp"
    />

    <ExpertiseCardsSection
      eyebrow="Web Development from One Source"
      eyebrow-icon="verified"
      title="Modern Websites — from Concept to Launch"
      :blocks="expertiseBlocks"
    />

    <BenefitsSection title="Why Choose EvolaTec as Your Web Agency?" :benefits="benefits" />

    <FAQSection title="Frequently Asked Questions" :faqs="faqs" />

    <CTASection
      title="Get Your Professional Business Website"
      description="EvolaTec builds modern websites, business homepages, landing pages and digital platforms for companies and brands."
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
      '@id': 'https://evolatec.de/en/business-website/#webpage',
      url: 'https://evolatec.de/en/business-website',
      name: 'Professional Business Website | EvolaTec Agency',
      description: 'Get a professional business website built – your web agency for modern company websites, landing pages and powerful digital solutions.',
      isPartOf: { '@id': 'https://evolatec.de/#website' },
      about: { '@id': 'https://evolatec.de/#organization' },
      inLanguage: 'en-US',
    },
    {
      '@type': 'Service',
      '@id': 'https://evolatec.de/en/business-website/#service',
      name: 'Business Website Development',
      description: 'Professional company websites, landing pages and digital platforms for businesses.',
      url: 'https://evolatec.de/en/business-website',
      provider: { '@id': 'https://evolatec.de/#organization' },
      areaServed: { '@type': 'Country', name: 'Germany' },
      offers: { '@type': 'Offer', priceSpecification: { '@type': 'PriceSpecification', minPrice: '1500', priceCurrency: 'EUR' } },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        { '@type': 'Question', name: 'How much does it cost to get a website built?', acceptedAnswer: { '@type': 'Answer', text: 'Costs depend on the scope of the project. Simple company websites typically start from a few hundred euros, while complex platforms and online shops are priced accordingly.' } },
        { '@type': 'Question', name: 'Why is professional web development important?', acceptedAnswer: { '@type': 'Answer', text: 'Professional websites build trust, deliver a better user experience and generate higher conversion rates. They are technically optimised, SEO-ready and designed for all devices.' } },
        { '@type': 'Question', name: 'Does EvolaTec also develop online shops?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, EvolaTec develops modern e-commerce solutions and professional online shops for businesses of all sizes.' } },
        { '@type': 'Question', name: 'Are the websites responsive?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, all websites are developed Mobile First and optimised for smartphones, tablets and desktop devices.' } },
      ],
    },
  ],
};

useHead({
  title: 'Professional Business Website | EvolaTec Agency',
  htmlAttrs: { lang: 'en' },
  meta: [
    {
      name: 'description',
      content: 'Get your business website built professionally – your web agency for modern company websites, landing pages and powerful digital platforms.',
    },
    {
      name: 'keywords',
      content: 'business website, company website, professional website development, web agency, website design, responsive website',
    },
    { property: 'og:title', content: 'Professional Business Website | EvolaTec' },
    { property: 'og:description', content: 'Modern websites, business homepages and digital platforms for companies and brands.' },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://evolatec.de/en/business-website' },
    { property: 'og:locale', content: 'en_US' },
    { property: 'og:locale:alternate', content: 'de_DE' },
  ],
  link: [
    { rel: 'canonical', href: 'https://evolatec.de/en/business-website' },
    ...hreflangLinks.value,
  ],
  script: [{ type: 'application/ld+json', innerHTML: JSON.stringify(schemaMarkup) }],
});

const heroStats = [
  { value: 'Modern', label: 'Web Development', icon: 'code' },
  { value: 'Responsive', label: 'Mobile First', icon: 'devices' },
  { value: 'SEO', label: 'Optimised', icon: 'trending_up' },
  { value: 'Fast', label: 'Performance', icon: 'speed' },
];

const introPoints = [
  {
    icon: 'rocket_launch',
    text: 'EvolaTec builds modern websites, company homepages, landing pages and individual digital platforms for businesses, start-ups and local service providers.',
  },
  {
    icon: 'verified',
    text: 'A modern website is far more than a digital business card — it builds trust, improves Google visibility and drives higher conversion rates.',
  },
  {
    icon: 'auto_awesome',
    text: 'Our web agency combines modern design, responsive development, SEO optimisation and high performance — so your website delivers measurable results.',
  },
];

const introStats = [
  { value: '30 Days', label: 'Support' },
  { value: '99', label: 'Lighthouse Avg' },
  { value: 'from 7d', label: 'Delivery' },
];

const developmentServices = [
  {
    title: 'Business Homepage Development',
    description: 'Professional company homepages and modern websites for businesses of all sizes.',
    icon: 'home',
    iconBg: 'bg-blue-100',
    iconColor: 'text-blue-600',
    borderColor: 'border-blue-500',
  },
  {
    title: 'Landing Page Development',
    description: 'High-converting landing pages for ad campaigns, lead generation and digital products.',
    icon: 'flag',
    iconBg: 'bg-emerald-100',
    iconColor: 'text-emerald-600',
    borderColor: 'border-emerald-500',
    href: '/en/landing-page-design',
  },
  {
    title: 'E-Commerce Development',
    description: 'Professional online shops and modern e-commerce platforms for businesses.',
    icon: 'shopping_cart',
    iconBg: 'bg-purple-100',
    iconColor: 'text-purple-600',
    borderColor: 'border-purple-500',
    href: '/en/online-shop-development',
  },
  {
    title: 'Responsive Web Development',
    description: 'Mobile-optimised websites for smartphones, tablets and desktop devices.',
    icon: 'devices',
    iconBg: 'bg-orange-100',
    iconColor: 'text-orange-600',
    borderColor: 'border-orange-500',
  },
  {
    title: 'UI/UX Website Design',
    description: 'Modern UI/UX design and professional interfaces for businesses and brands.',
    icon: 'design_services',
    iconBg: 'bg-rose-100',
    iconColor: 'text-rose-600',
    borderColor: 'border-rose-500',
  },
  {
    title: 'Pricing & Costs',
    description: 'Transparent pricing for professional websites, business homepages and web development.',
    icon: 'payments',
    iconBg: 'bg-cyan-100',
    iconColor: 'text-cyan-600',
    borderColor: 'border-cyan-500',
    href: '/en/pricing',
  },
];

const expertiseBlocks = [
  {
    icon: 'home_work',
    title: 'Professional Business Homepage Design',
    paragraphs: [
      'Businesses that have their homepage professionally built benefit from a stronger brand presence, more trust and a better position online.',
      'A modern company homepage helps attract new customers, present services professionally and build digital visibility.',
      'EvolaTec builds company websites that not only look great, but are also technically performant, responsive and search engine optimised.',
      'Professional websites win users over with fast load times, clear structure and intuitive navigation — exactly what our web agency specialises in.',
    ],
    tags: ['Business Homepage', 'Brand Presence', 'Performance', 'SEO Ready'],
  },
  {
    icon: 'engineering',
    title: 'Website Development by Professionals',
    paragraphs: [
      'Getting a professional website built requires more than just great design — modern sites must be technically performant, mobile-optimised and built for conversions.',
      'Our agency develops websites for businesses, start-ups, service providers and local companies that want to present themselves professionally online.',
      'Whether a landing page, company website, online shop or custom platform — EvolaTec develops tailored solutions for modern requirements.',
      'As a professional web agency, we support businesses with web design, development, SEO, performance optimisation and digital growth.',
    ],
    tags: ['Web Development', 'Web Agency', 'Conversion', 'Digital Growth'],
  },
];

const benefits = [
  {
    title: 'Modern Web Design',
    description: 'Professional interfaces and modern digital designs for your brand.',
    icon: 'design_services',
    bg: 'bg-gradient-to-br from-blue-600 to-indigo-800',
    image: '/web-development/design.webp',
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
    description: 'Technical SEO fundamentals and fast load times for better visibility on Google.',
    icon: 'trending_up',
    bg: 'bg-gradient-to-br from-purple-600 to-indigo-800',
    image: '/web-development/seo.webp',
  },
  {
    title: 'Custom Development',
    description: 'Tailored solutions for businesses, start-ups and digital platforms.',
    icon: 'tune',
    bg: 'bg-gradient-to-br from-orange-500 to-rose-600',
    image: '/web-development/develop.webp',
  },
];

const features = [
  {
    icon: 'speed',
    title: 'High Performance & Fast Load Times',
    description: 'Optimised websites with Lighthouse scores near 100 — for better user experience and higher Google rankings.',
  },
  {
    icon: 'devices',
    title: 'Responsive Design for All Devices',
    description: 'Mobile-first development for perfect display on smartphones, tablets and desktop — no compromises.',
  },
  {
    icon: 'search_insights',
    title: 'Technically SEO-Optimised from the Start',
    description: 'Structured data, clean URLs, fast Core Web Vitals and semantic HTML for maximum visibility.',
  },
  {
    icon: 'verified_user',
    title: 'Security & Modern Technologies',
    description: 'HTTPS, secure hosting infrastructure and modern frameworks like Nuxt, Vue and Tailwind CSS.',
  },
  {
    icon: 'tune',
    title: 'Custom Flexibility & Scalability',
    description: 'Tailored solutions that grow with your business — real development, not standard templates.',
  },
];

const faqs = [
  {
    question: 'How much does it cost to get a website built?',
    answer:
      'Costs depend on scope. Landing pages start from €500, professional business websites from €1,500 and online shops from €3,000. We work with transparent fixed prices and provide a detailed quote before the project starts.',
  },
  {
    question: 'How long does it take to build a website?',
    answer:
      'A landing page is usually ready within 3–7 days, a business website from 7 working days and an online shop from 14 working days. Duration depends on the feature scope and how quickly content, images and feedback are provided.',
  },
  {
    question: 'Why is professional web development important?',
    answer:
      'A professional website is often the first contact point with potential customers and decides on trust and conversion. It loads fast, is SEO-optimised, usable on mobile and secure. DIY solutions or outdated templates usually cost more in the long run through lost enquiries and poor rankings.',
  },
  {
    question: 'Which CMS or framework do you recommend?',
    answer:
      'For custom, high-performance websites we use Nuxt, Vue.js and Tailwind CSS. If you want to manage content yourself we recommend Storyblok as a headless CMS. For online shops we use Shopify or custom solutions. We choose technology based on your use case.',
  },
  {
    question: 'Are the websites SEO-optimised?',
    answer:
      'Yes, every website we build comes with basic SEO from the start: clean code, fast loading times, mobile optimisation and correct meta data. For deeper SEO strategies such as keyword research, content optimisation and link building we offer dedicated SEO packages.',
  },
  {
    question: 'Does EvolaTec also develop online shops and web applications?',
    answer:
      'Yes, beyond classic business websites we develop professional online shops and custom web applications. We implement both standard solutions (Shopify, Storyblok) and tailored development.',
  },
  {
    question: 'Are the websites responsive and optimised for mobile?',
    answer:
      'Yes, all websites are developed Mobile-First and optimised for smartphones, tablets and desktop. Since Google uses Mobile-First Indexing, responsive design is now mandatory – not just for users but also for good Google rankings.',
  },
];
</script>
