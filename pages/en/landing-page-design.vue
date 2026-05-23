<template>
  <div>
    <HeroSection
      background-image="/landing/hero.webp"
      badge="Conversion-Focused Landing Pages"
      title="Professional Landing Page Design – Fast & High-Converting"
      description="Professional landing pages for advertising, lead generation and digital campaigns. Optimised for conversions, speed and SEO."
      primaryCTA="Get a Free Quote"
      secondaryCTA="View Pricing"
      :stats="heroStats"
    />

    <BenefitsSection
      title="Why Businesses Use Landing Pages"
      :benefits="benefits"
    />

    <FeaturesSection
      title="What a successful landing page should include."
      :features="features"
      image-url="/ecommerce/features.webp"
    />

    <ProcessSection
      title="How We Build Your Landing Page"
      :steps="processSteps"
    />

    <PricingSection
      title="Landing Page Design – Pricing"
      subtitle="Transparent pricing for modern one-pagers and landing pages."
      :pricing-plans="pricingPlans"
    />

    <SEOSection title="SEO-Optimised Landing Pages" :features="seoFeatures" />

    <UseCasesSection
      title="Which Industries Benefit from Landing Pages?"
      :use-cases="useCases"
    />

    <FAQSection title="Frequently Asked Questions about Landing Pages" :faqs="faqs" />

    <CTASection
      title="Get Your Professional Landing Page"
      description="High-converting landing pages that bring more leads and customers."
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
      '@id': 'https://evolatec.de/en/landing-page-design/#webpage',
      url: 'https://evolatec.de/en/landing-page-design',
      name: 'Landing Page Design – Professional One-Pager | EvolaTec',
      description: 'Professional landing pages & one-pagers designed for conversions. High-converting landing pages for advertising, campaigns and lead generation from €500.',
      isPartOf: { '@id': 'https://evolatec.de/#website' },
      about: { '@id': 'https://evolatec.de/#organization' },
      inLanguage: 'en-US',
    },
    {
      '@type': 'Service',
      '@id': 'https://evolatec.de/en/landing-page-design/#service',
      name: 'Landing Page Design',
      description: 'High-converting one-pagers and landing pages for advertising, campaigns and lead generation.',
      url: 'https://evolatec.de/en/landing-page-design',
      provider: { '@id': 'https://evolatec.de/#organization' },
      areaServed: { '@type': 'Country', name: 'Germany' },
      offers: { '@type': 'Offer', priceSpecification: { '@type': 'PriceSpecification', minPrice: '500', priceCurrency: 'EUR' } },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        { '@type': 'Question', name: 'How much does a landing page cost?', acceptedAnswer: { '@type': 'Answer', text: 'Professional landing pages start from €500, depending on design and features. We provide transparent quotes with no hidden costs.' } },
        { '@type': 'Question', name: 'How long does it take to create a landing page?', acceptedAnswer: { '@type': 'Answer', text: 'Most landing pages are created within 3–7 days, depending on complexity and your requirements.' } },
        { '@type': 'Question', name: 'Is the landing page mobile optimised?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, all landing pages are fully responsive and mobile-first optimised for all devices.' } },
        { '@type': 'Question', name: 'Is SEO included?', acceptedAnswer: { '@type': 'Answer', text: 'Basic SEO is included with every landing page. Premium packages include advanced SEO optimisation.' } },
        { '@type': 'Question', name: 'Can the landing page be used for advertising?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, our landing pages are specifically optimised for Google Ads and social media campaigns.' } },
      ],
    },
  ],
};

useHead({
  title: 'Landing Page Design – Professional One-Pager | EvolaTec',
  htmlAttrs: { lang: 'en' },
  meta: [
    {
      name: 'description',
      content: 'Professional landing pages & one-pagers built for conversions. High-converting landing page design for advertising, campaigns and lead generation from €500.',
    },
    {
      name: 'keywords',
      content: 'landing page design, landing page development, one-pager design, conversion landing page, landing page for advertising, lead generation page',
    },
    { property: 'og:title', content: 'Landing Page Design – Professional One-Pager | EvolaTec' },
    { property: 'og:description', content: 'Conversion-optimised landing pages for advertising and lead generation.' },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://evolatec.de/en/landing-page-design' },
    { property: 'og:locale', content: 'en_US' },
    { property: 'og:locale:alternate', content: 'de_DE' },
  ],
  link: [
    { rel: 'canonical', href: 'https://evolatec.de/en/landing-page-design' },
    ...hreflangLinks.value,
  ],
  script: [{ type: 'application/ld+json', innerHTML: JSON.stringify(schemaMarkup) }],
});

const heroStats = [
  { value: 'from 3', label: 'Days', icon: 'flash_on' },
  { value: 'High', label: 'Conversion', icon: 'trending_up' },
  { value: 'Mobile', label: 'First', icon: 'smartphone' },
  { value: 'Fixed', label: 'Price', icon: 'price_check' },
];

const benefits = [
  {
    icon: 'trending_up',
    title: 'More Leads & Enquiries',
    description: 'Landing pages focus visitors on a single action for maximum results.',
    bg: 'bg-gradient-to-br from-blue-600 to-blue-800',
    image: '/landing/leads.webp',
  },
  {
    icon: 'ads_click',
    title: 'Perfect for Advertising',
    description: 'Ideal for Google Ads, Meta Ads and marketing campaigns.',
    bg: 'bg-gradient-to-br from-emerald-600 to-teal-800',
    image: '/landing/advertising.webp',
  },
  {
    icon: 'speed',
    title: 'Online Fast',
    description: 'Professional one-pagers delivered within days.',
    bg: 'bg-gradient-to-br from-orange-500 to-amber-600',
    image: '/landing/fast.webp',
  },
];

const features = [
  {
    icon: 'palette',
    title: 'Strong Design',
    description: 'Modern layout that builds trust and drives action.',
  },
  {
    icon: 'touch_app',
    title: 'Clear CTAs',
    description: 'Guide visitors precisely towards an enquiry or purchase.',
  },
  {
    icon: 'bolt',
    title: 'Fast Load Times',
    description: 'Performance-optimised for better conversion rates.',
  },
  {
    icon: 'analytics',
    title: 'SEO & Tracking',
    description: 'Analytics, meta tags and SEO-ready structure built in.',
  },
];

const processSteps = [
  {
    icon: 'search_insights',
    title: 'Analysis',
    description: 'We analyse your offer, target audience and competitors. Understanding your goals and KPIs.',
    details: ['Market research', 'Audience analysis', 'Conversion goals'],
  },
  {
    icon: 'architecture',
    title: 'Structure',
    description: 'Wireframe, content architecture and user journey for maximum conversions.',
    details: ['Information architecture', 'Content planning', 'CTA strategy'],
  },
  {
    icon: 'palette',
    title: 'Design',
    description: 'Modern, conversion-optimised design aligned with your brand.',
    details: ['Visual design', 'Prototyping', 'User experience'],
  },
  {
    icon: 'code',
    title: 'Development',
    description: 'Fast, mobile-first and fully SEO-optimised development.',
    details: ['Frontend development', 'Performance optimisation', 'SEO integration'],
  },
  {
    icon: 'rocket_launch',
    title: 'Launch',
    description: 'Thorough testing, final optimisations and secure go-live.',
    details: ['QA & testing', 'Optimisation', 'Go-live'],
  },
];

const pricingPlans = [
  {
    tier: 'Basic',
    price: 'from €500',
    features: [
      'Landing Page (One-Pager)',
      'Responsive Design',
      'Basic SEO',
      'Delivery from 3 days',
    ],
    buttonText: 'Request a Quote',
    isHighlighted: false,
  },
  {
    tier: 'Business',
    price: 'from €800',
    features: [
      'Everything in Basic',
      'Unique Design',
      'SEO Optimisation',
      'Analytics & Tracking',
      'Delivery from 5 days',
    ],
    buttonText: 'Most Popular',
    isHighlighted: true,
  },
  {
    tier: 'Premium',
    price: 'from €1,000',
    features: [
      'Everything in Business',
      'SEO Copy',
      'Conversion Optimisation',
      'A/B Testing Setup',
      'Delivery from 7 days',
    ],
    buttonText: 'Book Consultation',
    isHighlighted: false,
  },
];

const seoFeatures = [
  'Fast load times (< 2s)',
  'Mobile optimisation',
  'Structured data (Schema.org)',
  'SEO-ready meta tags',
  'Responsive design',
];

const useCases = [
  'Local businesses',
  'Service providers',
  'Start-ups',
  'Google Ads campaigns',
  'Real estate & construction',
  'Beauty & health',
];

const faqs = [
  {
    question: 'How much does a landing page cost?',
    answer: 'Professional landing pages start from €500, depending on design and features. We provide transparent quotes with no hidden costs.',
  },
  {
    question: 'How long does it take to create a landing page?',
    answer: 'Most landing pages are created within 3–7 days, depending on complexity and your requirements.',
  },
  {
    question: 'Is the landing page mobile optimised?',
    answer: 'Yes, all landing pages are fully responsive and mobile-first optimised for all devices.',
  },
  {
    question: 'Is SEO included?',
    answer: 'Basic SEO is included with every landing page. Premium packages include advanced SEO optimisation.',
  },
  {
    question: 'Can the landing page be used for advertising?',
    answer: 'Yes, our landing pages are specifically optimised for Google Ads and social media campaigns.',
  },
];
</script>
