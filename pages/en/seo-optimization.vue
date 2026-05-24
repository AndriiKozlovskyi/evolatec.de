<template>
  <div>
    <HeroSection
      background-image="/seo/optimize.webp"
      badge="Technical SEO Optimisation"
      title="Technical SEO Optimisation: We Get Your Website on Track"
      description="We technically optimise your website, improve load times, Core Web Vitals, structure and SEO performance to achieve better Google rankings and more customers."
      primaryCTA="Optimise My Website"
      secondaryCTA="View Pricing"
      :stats="optimizationStats"
    />

    <BenefitsSection
      title="Why Technical SEO Optimisation Matters"
      :benefits="benefits"
    />

    <ProcessSection
      title="How We Optimise Your Website"
      :steps="processSteps"
    />

    <FeaturesSection
      title="Our Website Optimisation Services"
      :features="features"
      image-url="/web-development/seo.webp"
    />

    <!-- Split image + text section -->
    <section data-nav-label="Problems" data-nav-icon="bug_report" class="py-section-padding bg-surface">
      <div class="max-w-container-max mx-auto px-gutter">
        <div class="grid md:grid-cols-2 gap-stack-lg items-center">
          <div class="relative rounded-2xl overflow-hidden h-80 shadow-2xl">
            <img
              src="/landing/seo.webp"
              alt="Website Performance Optimisation"
              class="w-full h-full object-cover"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent"></div>
            <div class="absolute bottom-6 left-6 bg-white rounded-xl px-4 py-3 shadow-lg flex items-center gap-3">
              <span class="material-symbols-outlined text-emerald-500 text-2xl">speed</span>
              <div>
                <div class="font-bold text-primary text-sm">+40% faster</div>
                <div class="text-on-surface-variant text-xs">Load times improved</div>
              </div>
            </div>
          </div>
          <div>
            <h2 class="font-display text-3xl sm:text-4xl md:text-5xl font-black mb-6 leading-tight">Common Technical SEO Problems</h2>
            <div class="space-y-3">
              <div v-for="problem in commonProblems" :key="problem" class="flex gap-3 items-center p-3 rounded-lg border border-black/10 glass-card">
                <span class="material-symbols-outlined text-red-400 text-xl flex-shrink-0">cancel</span>
                <span class="font-body-md text-on-surface">{{ problem }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <PricingSection
      title="Technical SEO Optimisation Pricing"
      subtitle="Transparent pricing for professional website optimisation."
      :pricing-plans="optimizationPricingPlans"
    />

    <FAQSection title="Frequently Asked Questions about Website Optimisation" :faqs="optimizationFaqs" />

    <CTASection
      title="Get Your Website Professionally Optimised"
      description="Sustainably improve the speed, SEO performance and technical foundation of your website."
      primary-cta="Optimise My Website"
      secondary-cta="Get a Free Consultation"
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
      '@id': 'https://evolatec.de/en/seo-optimization/#webpage',
      url: 'https://evolatec.de/en/seo-optimization',
      name: 'Technical SEO Optimisation – Improve Website Performance | EvolaTec',
      description: 'Professional technical SEO optimisation for better Google rankings. Load times, Core Web Vitals, structure. SEO optimisation from €300.',
      isPartOf: { '@id': 'https://evolatec.de/#website' },
      about: { '@id': 'https://evolatec.de/#organization' },
      inLanguage: 'en-US',
    },
    {
      '@type': 'Service',
      '@id': 'https://evolatec.de/en/seo-optimization/#service',
      name: 'SEO Optimisation',
      description: 'Technical SEO optimisation for better Google rankings, faster load times and better Core Web Vitals.',
      url: 'https://evolatec.de/en/seo-optimization',
      provider: { '@id': 'https://evolatec.de/#organization' },
      areaServed: { '@type': 'Country', name: 'Germany' },
      offers: { '@type': 'Offer', priceSpecification: { '@type': 'PriceSpecification', minPrice: '300', priceCurrency: 'EUR' } },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        { '@type': 'Question', name: 'How much does technical SEO optimisation cost?', acceptedAnswer: { '@type': 'Answer', text: 'Basic optimisations start from €300. Comprehensive SEO optimisations from €500–€1,200. Exact costs depend on scope.' } },
        { '@type': 'Question', name: 'How long does SEO optimisation take?', acceptedAnswer: { '@type': 'Answer', text: 'Small optimisations take a few days, larger technical projects 1–3 weeks. This depends on the complexity of your website.' } },
        { '@type': 'Question', name: 'Does technical SEO improve my rankings?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, technical SEO is an important foundation for better Google rankings. Without a solid technical base you lose visibility.' } },
        { '@type': 'Question', name: 'Do you optimise existing websites?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, we optimise existing websites regardless of the system or framework used.' } },
        { '@type': 'Question', name: 'Can I implement the optimisations myself?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, we create a detailed implementation plan. We are happy to support you with technical questions.' } },
      ],
    },
  ],
};

useHead({
  title: 'Technical SEO Optimisation – Improve Website Performance | EvolaTec',
  htmlAttrs: { lang: 'en' },
  meta: [
    { name: 'description', content: 'Professional technical SEO optimisation for better Google rankings. Load times, Core Web Vitals, structure optimisation from €300.' },
    { name: 'keywords', content: 'technical SEO optimisation, website performance, Core Web Vitals, SEO agency, page speed optimisation, search engine optimisation' },
    { property: 'og:title', content: 'Technical SEO Optimisation | EvolaTec' },
    { property: 'og:description', content: 'Professional SEO optimisation for better Google rankings and faster load times.' },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://evolatec.de/en/seo-optimization' },
    { property: 'og:locale', content: 'en_US' },
    { property: 'og:locale:alternate', content: 'de_DE' },
  ],
  link: [
    { rel: 'canonical', href: 'https://evolatec.de/en/seo-optimization' },
    ...hreflangLinks.value,
  ],
  script: [{ type: 'application/ld+json', innerHTML: JSON.stringify(schemaMarkup) }],
});

const optimizationStats = [
  { value: '100%', label: 'Faster', icon: 'speed' },
  { value: 'Top Scores', label: 'Web Vitals', icon: 'verified_user' },
  { value: '+Rankings', label: 'Improved', icon: 'trending_up' },
  { value: 'Mobile Ready', label: 'Optimised', icon: 'smartphone' },
];

const benefits = [
  {
    icon: 'speed',
    title: 'Faster Load Times',
    description: 'Slow websites lose rankings and visitors. We optimise performance, images, JavaScript and server response times.',
    bg: 'bg-gradient-to-br from-orange-500 to-amber-600',
    image: '/main/seo.webp',
  },
  {
    icon: 'assessment',
    title: 'Better Core Web Vitals',
    description: 'Google directly factors Core Web Vitals into rankings. We optimise LCP, FID and CLS for top scores.',
    bg: 'bg-gradient-to-br from-blue-600 to-blue-800',
    image: '/web-development/seo.webp',
  },
  {
    icon: 'smartphone',
    title: 'Mobile-First Optimisation',
    description: 'Over 60% of all searches come from smartphones. Mobile optimisation is no longer an optional extra.',
    bg: 'bg-gradient-to-br from-purple-600 to-indigo-800',
    image: '/landing/seo.webp',
  },
];

const processSteps = [
  {
    icon: 'speed',
    title: 'Performance Analysis',
    description: 'Technical analysis of all performance factors using Lighthouse and PageSpeed Insights.',
  },
  {
    icon: 'bug_report',
    title: 'Issue Identification',
    description: 'All technical SEO problems are identified and prioritised.',
  },
  {
    icon: 'priority_high',
    title: 'Prioritisation',
    description: 'Creation of an optimisation plan ranked by SEO relevance and impact.',
  },
  {
    icon: 'build',
    title: 'Technical Implementation',
    description: 'Speed optimisation, SEO fixes and structural improvements.',
  },
  {
    icon: 'monitoring',
    title: 'Monitoring',
    description: 'Ongoing checks, tests and further improvements after go-live.',
  },
];

const features = [
  {
    icon: 'speed',
    title: 'Load Times',
    description: 'Images, CSS, JavaScript and server response times are targeted for improvement.',
  },
  {
    icon: 'architecture',
    title: 'Page Structure',
    description: 'URLs, headings, navigation and internal linking are optimised.',
  },
  {
    icon: 'security',
    title: 'Security',
    description: 'HTTPS, secure resources and modern hosting standards.',
  },
  {
    icon: 'engineering',
    title: 'Crawling & Indexing',
    description: 'Fixing crawling errors and indexing problems.',
  },
];

const commonProblems = [
  'Slow load times (>3 seconds)',
  'Poor Core Web Vitals scores',
  'Unoptimised images',
  'Mobile display issues',
  'Insecure content (mixed content)',
  'Poor URL structure',
];

const optimizationPricingPlans = [
  {
    tier: 'Basic Website Optimisation',
    price: 'from €300',
    features: [
      'Performance Analysis',
      'Speed Optimisation',
      'Mobile Check',
      'Initial Improvements',
    ],
    buttonText: 'Request Optimisation',
    isHighlighted: false,
  },
  {
    tier: 'Technical SEO Optimisation',
    price: 'from €500',
    features: [
      'Everything in Basic Optimisation',
      'Full Technical Optimisation',
      'Core Web Vitals Fixes',
      'Structure Improvement',
    ],
    buttonText: 'Start Project',
    isHighlighted: true,
  },
  {
    tier: 'Complete SEO Optimisation',
    price: 'from €1,200',
    features: [
      'Everything in Technical Optimisation',
      'Content Optimisation',
      'Security & Structure',
      'Monitoring & Support',
    ],
    buttonText: 'Book Consultation',
    isHighlighted: false,
  },
];

const optimizationFaqs = [
  {
    question: 'How much does technical SEO optimisation cost?',
    answer:
      'Basic SEO optimisations at EvolaTec start from €300. More comprehensive technical SEO packages with Core Web Vitals optimisation and on-page rework cost between €500 and €1,200. Exact costs depend on the scope of your website.',
  },
  {
    question: 'How long does SEO optimisation take?',
    answer:
      'Smaller optimisations are usually implemented within a few days, larger projects take 1–3 weeks. First improvements in Google rankings are usually visible once Google has indexed the changes.',
  },
  {
    question: 'Does technical SEO improve my Google rankings?',
    answer:
      'Yes, technical SEO is the foundation for good Google rankings. A fast, technically clean website with strong Core Web Vitals is favoured by Google. Without a solid technical base even the best content and backlinks deliver little.',
  },
  {
    question: 'What are Core Web Vitals and why are they important?',
    answer:
      'Core Web Vitals are Google metrics for user experience: LCP (loading), INP (interactivity) and CLS (visual stability). They are an official ranking factor – websites with poor Core Web Vitals lose visibility.',
  },
  {
    question: 'Do you also optimise existing websites?',
    answer:
      'Yes, we optimise existing websites regardless of the CMS or framework used. We first analyse the current state and prioritise the actions with the biggest ranking leverage.',
  },
  {
    question: 'Can I implement the SEO optimisations myself?',
    answer:
      'Yes, on request we create a detailed implementation plan for your team or developers. For technical questions we are happy to support you or take over the full implementation.',
  },
  {
    question: 'Which areas does a complete SEO optimisation cover?',
    answer:
      'A complete SEO optimisation covers technology (load time, Core Web Vitals, mobile, crawling), on-page (meta data, headings, content, internal links), structured data, URL structure and image optimisation and indexing. On request we also add keyword strategy and content optimisation.',
  },
];
</script>
