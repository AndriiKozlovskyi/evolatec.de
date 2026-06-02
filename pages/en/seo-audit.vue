<template>
  <div>
    <HeroSection
      background-image="/seo/audit.webp"
      badge="Professional SEO Analysis Agency"
      title="SEO Audit & Analysis: Technical Check for Your Website"
      description="Professional SEO audit for better rankings, more visibility and more organic traffic. We analyse technical errors, on-page SEO and optimisation potential."
      primaryCTA="Free SEO Consultation"
      secondaryCTA="View Pricing"
      :stats="auditStats"
    />


    <BenefitsSection
      title="Why a Professional SEO Audit Is Essential"
      :benefits="benefits"
    />

    <ProcessSection
      title="How Our SEO Analysis Works"
      :steps="processSteps"
    />

    <FeaturesSection
      title="What Our SEO Audit Includes"
      :features="features"
      image-url="/web-development/seo.webp"
    />

    <!-- Common Problems Section -->
    <section data-nav-label="Problems" data-nav-icon="bug_report" class="py-section-padding bg-surface-container-low">
      <div class="max-w-container-max mx-auto px-gutter">
        <div class="text-center max-w-2xl mx-auto mb-stack-lg">
          <h2 class="font-display text-3xl sm:text-4xl md:text-5xl font-black leading-tight">Common SEO Problems We Find</h2>
        </div>
        <div class="max-w-3xl mx-auto grid md:grid-cols-2 gap-4">
          <div
            v-for="(problem, index) in commonProblems"
            :key="problem"
            class="flex gap-4 items-center glass-card p-4 rounded-xl border border-black/10"
          >
            <span class="material-symbols-outlined text-xl flex-shrink-0" :class="problemColors[index % 4]">error</span>
            <p class="font-body-md text-on-surface">{{ problem }}</p>
          </div>
        </div>
      </div>
    </section>

    <PricingSection
      title="SEO Audit Pricing"
      subtitle="Transparent pricing for professional SEO analysis."
      :pricing-plans="auditPricingPlans"
    />

    <FAQSection title="Frequently Asked Questions about SEO Analysis" :faqs="auditFaqs" />

    <CTASection
      title="Get Your Website Professionally Analysed"
      description="Find out why your website isn't ranking optimally on Google — and what to do about it."
      primary-cta="Request SEO Analysis"
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
      '@id': 'https://evolatec.de/en/seo-audit/#webpage',
      url: 'https://evolatec.de/en/seo-audit',
      name: 'SEO Audit & Analysis – Technical Website Check | EvolaTec',
      description: 'Professional SEO audit for better Google rankings. Technical analysis, on-page check and competitor analysis. SEO audits from €100.',
      isPartOf: { '@id': 'https://evolatec.de/#website' },
      about: { '@id': 'https://evolatec.de/#organization' },
      inLanguage: 'en-US',
    },
    {
      '@type': 'Service',
      '@id': 'https://evolatec.de/en/seo-audit/#service',
      name: 'SEO Audit',
      description: 'Technical SEO analysis, on-page check and competitor analysis for better Google rankings.',
      url: 'https://evolatec.de/en/seo-audit',
      provider: { '@id': 'https://evolatec.de/#organization' },
      areaServed: { '@type': 'Country', name: 'Germany' },
      offers: { '@type': 'Offer', priceSpecification: { '@type': 'PriceSpecification', minPrice: '100', priceCurrency: 'EUR' } },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        { '@type': 'Question', name: 'How much does an SEO audit cost?', acceptedAnswer: { '@type': 'Answer', text: 'Basic SEO analyses start from €100. Comprehensive technical audits from €300. Exact costs depend on the complexity of your website.' } },
        { '@type': 'Question', name: 'How long does an SEO analysis take?', acceptedAnswer: { '@type': 'Answer', text: 'Most SEO audits take 2–5 working days. Larger websites may take a little longer.' } },
        { '@type': 'Question', name: 'What is checked in an SEO audit?', acceptedAnswer: { '@type': 'Answer', text: 'We check technology, load times, structure, keywords, content, mobile optimisation, indexing and competitor strategies.' } },
        { '@type': 'Question', name: 'Do I receive an SEO report?', acceptedAnswer: { '@type': 'Answer', text: 'You receive a structured report with concrete action recommendations and a priority plan.' } },
        { '@type': 'Question', name: 'Do you also implement the optimisations?', acceptedAnswer: { '@type': 'Answer', text: 'We are happy to implement the optimisations after the audit or support you in doing so.' } },
      ],
    },
  ],
};

useHead({
  title: 'SEO Audit & Analysis – Technical Website Check | EvolaTec',
  htmlAttrs: { lang: 'en' },
  meta: [
    {
      name: 'description',
      content: 'Professional SEO audit for better Google rankings. Technical analysis, on-page check and competitor analysis. SEO audits from €100.',
    },
    {
      name: 'keywords',
      content: 'SEO audit, SEO analysis, technical SEO check, on-page SEO, website audit, Google ranking analysis',
    },
    { property: 'og:title', content: 'SEO Audit & Analysis | EvolaTec' },
    { property: 'og:description', content: 'Professional SEO audit for better Google rankings. Technical analysis and on-page check.' },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://evolatec.de/en/seo-audit' },
    { property: 'og:locale', content: 'en_US' },
    { property: 'og:locale:alternate', content: 'de_DE' },
  ],
  link: [
    { rel: 'canonical', href: 'https://evolatec.de/en/seo-audit' },
    ...hreflangLinks.value,
  ],
  script: [{ type: 'application/ld+json', innerHTML: JSON.stringify(schemaMarkup) }],
});

const auditStats = [
  { value: '2–5 Days', label: 'Analysis Time', icon: 'schedule' },
  { value: 'Top Rankings', label: 'Our Goal', icon: 'trending_up' },
  { value: 'Complete', label: 'Technical Check', icon: 'verified' },
  { value: 'Clear', label: 'SEO Report', icon: 'description' },
];


const benefits = [
  {
    icon: 'engineering',
    title: 'Complete Technical Check',
    description: 'Load times, Core Web Vitals, indexing, crawling and technical errors are systematically analysed.',
    bg: 'bg-gradient-to-br from-blue-600 to-blue-800',
    image: '/landing/seo.webp',
  },
  {
    icon: 'edit_document',
    title: 'On-Page & Content Analysis',
    description: 'Headings, meta tags, keywords, internal linking and content structure are checked and evaluated.',
    bg: 'bg-gradient-to-br from-emerald-600 to-teal-800',
    image: '/web-development/seo.webp',
  },
  {
    icon: 'insights',
    title: 'Competitor Analysis Included',
    description: 'We compare your website with competitors and identify concrete growth opportunities.',
    bg: 'bg-gradient-to-br from-purple-600 to-indigo-800',
    image: '/main/design.webp',
  },
];

const processSteps = [
  {
    icon: 'travel_explore',
    title: 'Website Crawl',
    description: 'Complete crawling of your website to detect technical errors and structural issues.',
  },
  {
    icon: 'engineering',
    title: 'Technical Analysis',
    description: 'Load times, Core Web Vitals, indexing and security are checked.',
  },
  {
    icon: 'edit_document',
    title: 'On-Page Check',
    description: 'Keywords, headings, meta tags and content are analysed.',
  },
  {
    icon: 'insights',
    title: 'Competitor Analysis',
    description: 'Comparison with the most important competitors in your industry.',
  },
  {
    icon: 'description',
    title: 'SEO Report',
    description: 'Clear, structured report with concrete action recommendations.',
  },
];

const features = [
  {
    icon: 'speed',
    title: 'Load Times & Performance',
    description: 'Analysis of all performance factors that Google takes into account for rankings.',
  },
  {
    icon: 'smartphone',
    title: 'Mobile SEO Check',
    description: 'Review of mobile optimisation and usability across all devices.',
  },
  {
    icon: 'description',
    title: 'Content & Keyword Analysis',
    description: 'Identification of keyword opportunities and content gaps versus competitors.',
  },
  {
    icon: 'link',
    title: 'Backlink Profile',
    description: 'Analysis of the existing link profile and identification of toxic backlinks.',
  },
];

const commonProblems = [
  'Slow load times',
  'Missing meta tags',
  'Poor mobile optimisation',
  'Duplicate content',
  'Incorrect heading structure',
  'Missing internal links',
  'Indexing issues',
  'Weak keyword structure',
];

const problemColors = ['text-red-500', 'text-orange-500', 'text-amber-500', 'text-rose-500'];

const auditPricingPlans = [
  {
    tier: 'Basic SEO Analysis',
    price: 'from €100',
    features: [
      'Technical Analysis',
      'On-Page Check',
      'Mobile Optimisation',
      'Detailed Report',
    ],
    buttonText: 'Request Analysis',
    isHighlighted: false,
  },
  {
    tier: 'Technical SEO Audit',
    price: 'from €300',
    features: [
      'Everything in Basic Analysis',
      'Full Tech Audit',
      'Core Web Vitals Check',
      'Implementation Plan',
    ],
    buttonText: 'Book Audit',
    isHighlighted: true,
  },
  {
    tier: 'Comprehensive SEO Analysis',
    price: 'from €500',
    features: [
      'Everything in Technical Audit',
      'Competitor & Market Analysis',
      'Keyword Strategy',
      'Content Opportunities',
    ],
    buttonText: 'Book Consultation',
    isHighlighted: false,
  },
];

const auditFaqs = [
  {
    question: 'How much does an SEO audit cost?',
    answer:
      'Basic SEO analyses at EvolaTec start from €100. Comprehensive technical audits with competitor analysis and a detailed action plan from €300. Exact costs depend on the scope and complexity of your website.',
  },
  {
    question: 'How long does an SEO analysis take?',
    answer:
      'Most SEO audits take 2–5 working days. Larger websites may take a little longer. You receive a written report at the end with all findings and recommendations.',
  },
  {
    question: 'What is checked in an SEO audit?',
    answer:
      'We check technology (load time, Core Web Vitals, indexing), on-page (meta data, headings, content), keywords, backlinks, mobile optimisation and structured data. We also analyse your most important competitors and identify ranking opportunities.',
  },
  {
    question: 'What do I receive after the SEO audit?',
    answer:
      'You receive a structured report with all findings, concrete action recommendations and a prioritised action plan. On request we walk through the results in a personal conversation.',
  },
  {
    question: 'Do you also implement the optimisations after the audit?',
    answer:
      'Yes, we are happy to implement the recommended SEO optimisations or support you in doing so. On request we also offer ongoing SEO management from €300/month.',
  },
  {
    question: 'How often should an SEO audit be performed?',
    answer:
      'We recommend a comprehensive SEO audit at least once a year. For larger website relaunches or noticeable ranking changes an additional audit is useful to identify causes early.',
  },
];
</script>
