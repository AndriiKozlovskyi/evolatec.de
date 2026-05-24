<template>
  <div>
    <HeroSection
      background-image="/design-content/hero.webp"
      badge="Professional Website Copywriting & SEO Content"
      title="Website Copywriting & SEO Content: Copy That Sells & Ranks on Google"
      description="Professional website copy, SEO-optimised content and modern copywriting for businesses, landing pages, online shops and corporate websites."
      primaryCTA="Request Copywriting"
      secondaryCTA="View Pricing"
      :stats="contentStats"
    />

    <TrustSection :companies="trustCompanies" />

    <ServicesSection title="Our Content & Copywriting Services" variant="centered" :services="contentServices" />

    <BenefitsSection title="Benefits of Professional SEO Copywriting" :benefits="contentBenefits" />

    <ProcessSection title="How Professional Website Copy Is Created" :steps="contentProcess" />

    <ChecklistSection
      title="What Content Do We Create?"
      icon="edit_document"
      :items="contentTypes"
    />

    <IntroSection
      heading="Why Professional Website Copy Matters"
      :paragraphs="introParagraphs"
      image="/design-content/copywriting.webp"
      image-alt="SEO Copywriting EvolaTec"
      :badge="introBadge"
    />

    <PricingSection
      title="Website Copywriting & SEO Content Pricing"
      subtitle="Transparent pricing for professional copywriting and SEO content."
      :pricing-plans="contentPricingPlans"
    />

    <FeaturesSection
      title="Professional Copywriting for Your Digital Presence"
      :features="featuresData"
      image-url="/design-content/copywriting.webp"
    />

    <FAQSection title="Frequently Asked Questions about Website Copywriting" :faqs="contentFaqs" />

    <CTASection
      title="Professional Website Copy for More Customers & Better Rankings"
      description="Get professional website copy written that sells, builds trust and ranks on Google."
      primary-cta="Request Content"
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
      '@id': 'https://evolatec.de/en/website-copywriting/#webpage',
      url: 'https://evolatec.de/en/website-copywriting',
      name: 'Website Copywriting & SEO Content | EvolaTec',
      description: 'Professional website copy, SEO copywriting and website content for businesses, landing pages and online shops. Copy that ranks and sells.',
      isPartOf: { '@id': 'https://evolatec.de/#website' },
      about: { '@id': 'https://evolatec.de/#organization' },
      inLanguage: 'en-US',
    },
    {
      '@type': 'Service',
      '@id': 'https://evolatec.de/en/website-copywriting/#service',
      name: 'Website Copywriting & SEO Content',
      description: 'Professional website copy, SEO copywriting and content for businesses, landing pages and online shops.',
      url: 'https://evolatec.de/en/website-copywriting',
      provider: { '@id': 'https://evolatec.de/#organization' },
      areaServed: { '@type': 'Country', name: 'Germany' },
      offers: { '@type': 'Offer', priceSpecification: { '@type': 'PriceSpecification', minPrice: '150', priceCurrency: 'EUR' } },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        { '@type': 'Question', name: 'Why is SEO content important?', acceptedAnswer: { '@type': 'Answer', text: 'SEO content improves rankings and helps Google understand your website better. Good copy leads to more organic traffic.' } },
        { '@type': 'Question', name: 'Do you write copy for landing pages?', acceptedAnswer: { '@type': 'Answer', text: 'We create conversion-focused content for landing pages and ad campaigns targeting sales and leads.' } },
        { '@type': 'Question', name: 'Can content be created in multiple languages?', acceptedAnswer: { '@type': 'Answer', text: 'We create content for German, English and international projects with native language expertise.' } },
        { '@type': 'Question', name: 'How much does professional website copy cost?', acceptedAnswer: { '@type': 'Answer', text: 'Professional website copy starts from €150, complete projects from €700. Exact costs depend on the scope.' } },
        { '@type': 'Question', name: 'How long does content creation take?', acceptedAnswer: { '@type': 'Answer', text: 'For individual pages we typically need 5–10 working days, for larger projects 2–4 weeks. Faster turnaround is possible.' } },
      ],
    },
  ],
};

useHead({
  title: 'Website Copywriting & SEO Content | EvolaTec',
  htmlAttrs: { lang: 'en' },
  meta: [
    {
      name: 'description',
      content: 'Professional website copy, SEO copywriting and website content for businesses, landing pages and online shops. Copy that ranks and sells.',
    },
    {
      name: 'keywords',
      content: 'website copywriting, SEO content, website copy, SEO copywriter, landing page copy, content marketing, web content',
    },
    { property: 'og:title', content: 'Website Copywriting & SEO Content | EvolaTec' },
    { property: 'og:description', content: 'Professional website copy and SEO content for more Google rankings and higher conversion.' },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://evolatec.de/en/website-copywriting' },
    { property: 'og:locale', content: 'en_US' },
    { property: 'og:locale:alternate', content: 'de_DE' },
  ],
  link: [
    { rel: 'canonical', href: 'https://evolatec.de/en/website-copywriting' },
    ...hreflangLinks.value,
  ],
  script: [{ type: 'application/ld+json', innerHTML: JSON.stringify(schemaMarkup) }],
});

const trustCompanies = ['SEO CONTENT', 'COPYWRITING', 'WEB COPY', 'CONVERSION'];

const introParagraphs = [
  'Good website copy determines whether visitors become customers.',
  'Modern website content must not only appear professional but also rank on Google and build trust at the same time.',
  'EvolaTec creates SEO-optimised copy that search engines understand and users find convincing.',
];

const introBadge = {
  icon: 'edit_document',
  title: 'SEO Copy',
  subtitle: 'That Ranks',
  iconBg: 'bg-gradient-to-br from-emerald-500 to-teal-600',
};

const contentStats = [
  { value: 'SEO', label: 'Optimised', icon: 'trending_up' },
  { value: 'Sales', label: 'Focused', icon: 'shopping_cart' },
  { value: 'Google', label: 'Rankings', icon: 'grade' },
  { value: 'Professional', label: 'Copy', icon: 'edit_document' },
];

const contentServices = [
  {
    title: 'Website Copywriting',
    description: 'Professional copy for business websites, landing pages and brand presences.',
    icon: 'edit_document',
    iconBg: 'bg-blue-100',
    iconColor: 'text-blue-600',
    borderColor: 'border-blue-500',
  },
  {
    title: 'SEO Content Writing',
    description: 'SEO-optimised content for better rankings and more visibility.',
    icon: 'search',
    iconBg: 'bg-emerald-100',
    iconColor: 'text-emerald-600',
    borderColor: 'border-emerald-500',
  },
  {
    title: 'Landing Page Copywriting',
    description: 'Conversion-focused copy for more leads, enquiries and sales.',
    icon: 'target',
    iconBg: 'bg-orange-100',
    iconColor: 'text-orange-600',
    borderColor: 'border-orange-500',
  },
  {
    title: 'Online Shop Content',
    description: 'Product descriptions and category pages for e-commerce projects.',
    icon: 'shopping_bag',
    iconBg: 'bg-purple-100',
    iconColor: 'text-purple-600',
    borderColor: 'border-purple-500',
  },
  {
    title: 'Content Strategy',
    description: 'Structured content for SEO, branding and marketing.',
    icon: 'map',
    iconBg: 'bg-teal-100',
    iconColor: 'text-teal-600',
    borderColor: 'border-teal-500',
  },
  {
    title: 'SEO Blog Articles',
    description: 'Expert articles and SEO content for long-term traffic.',
    icon: 'article',
    iconBg: 'bg-rose-100',
    iconColor: 'text-rose-600',
    borderColor: 'border-rose-500',
  },
];

const contentBenefits = [
  {
    title: 'More Google Rankings',
    description: 'SEO-optimised copy improves your visibility.',
    icon: 'trending_up',
    bg: 'bg-gradient-to-br from-blue-600 to-blue-800',
    image: '/landing/seo.webp',
  },
  {
    title: 'Higher Conversion',
    description: 'Good copy convinces visitors and increases enquiries.',
    icon: 'shopping_cart',
    bg: 'bg-gradient-to-br from-emerald-600 to-teal-800',
    image: '/web-development-cost/price.webp',
  },
  {
    title: 'Professional Brand Presence',
    description: 'High-quality content strengthens trust and brand impact.',
    icon: 'verified_user',
    bg: 'bg-gradient-to-br from-purple-600 to-indigo-800',
    image: '/web-development-cost/tech.webp',
  },
];

const contentProcess = [
  {
    title: 'Analysis',
    description: 'We analyse your target audience, industry and competitors — and define tone, messages and goals for your copy together.',
    icon: 'analytics',
  },
  {
    title: 'Keyword Research',
    description: 'We identify relevant SEO keywords with real search volume and matching intent for sustainable Google rankings.',
    icon: 'search',
  },
  {
    title: 'Content Creation',
    description: 'Professional, structured and conversion-focused copy — clearly understandable, search engine optimised and aligned with your brand voice.',
    icon: 'edit_document',
  },
  {
    title: 'SEO Optimisation',
    description: 'Fine-tuning of meta data, heading structure and internal links — so your content convinces both Google and your readers.',
    icon: 'search_insights',
  },
];

const contentTypes = [
  'Website copy',
  'SEO landing pages',
  'Company descriptions',
  'Product descriptions',
  'Blog articles',
  'Google SEO content',
  'Conversion copy',
  'Content for advertisements',
];

const featuresData = [
  {
    title: 'Website Copywriting',
    description: 'Professional copy for business websites, landing pages and brand presences.',
    icon: 'edit_document',
  },
  {
    title: 'SEO Content Writing',
    description: 'SEO-optimised content for better rankings and more visibility.',
    icon: 'search',
  },
  {
    title: 'Landing Page Copywriting',
    description: 'Conversion-focused copy for more leads, enquiries and sales.',
    icon: 'target',
  },
  {
    title: 'Content Strategy',
    description: 'Structured content for SEO, branding and sustainable marketing.',
    icon: 'map',
  },
];

const contentPricingPlans = [
  {
    tier: 'Website Copy',
    price: 'from €150',
    features: [
      'Individual Pages (500 words)',
      'SEO Optimised',
      'Professionally Written',
      'Google Focused',
    ],
    buttonText: 'Request Copy',
    isHighlighted: false,
  },
  {
    tier: 'Landing Page Copywriting',
    price: 'from €250',
    features: [
      'Conversion-Focused Copy',
      'CTA & Headline Optimisation',
      'Sales Focused',
      'A/B Testing Ready',
    ],
    buttonText: 'Book Copywriting',
    isHighlighted: true,
  },
  {
    tier: 'Complete Website Content',
    price: 'from €700',
    features: [
      'All Pages (up to 5)',
      'Content Strategy',
      'SEO Structure & Keywords',
      'Professional Implementation',
    ],
    buttonText: 'Start Project',
    isHighlighted: false,
  },
];

const contentFaqs = [
  {
    question: 'Why is SEO content important for a website?',
    answer:
      'SEO content improves your Google rankings because it combines relevant keywords, clear structure and user-focused copy. The result: more organic traffic and predictable long-term visibility without ad costs.',
  },
  {
    question: 'How much does professional website copy cost?',
    answer:
      'Individual website pages (500 words) start at EvolaTec from €150, landing page copywriting from €250 and complete website content from €700. General copy is billed at €0.15/word, SEO copy at €0.30/word.',
  },
  {
    question: 'How long does website copywriting take?',
    answer:
      'For individual pages we typically need 5–10 working days, for larger projects 2–4 weeks. Faster turnaround is possible on request.',
  },
  {
    question: 'Do you also write copy for landing pages and advertising?',
    answer:
      'Yes, we write conversion-focused copy for landing pages and ad campaigns targeting sales and leads. Landing page copywriting starts from €250.',
  },
  {
    question: 'What is the difference between SEO copy and copywriting?',
    answer:
      'SEO copy is optimised for search engines: keywords, search intent and organic rankings come first. Copywriting focuses on conversion: clear messages and strong CTAs. Good web content combines both – it ranks on Google AND convinces the user.',
  },
  {
    question: 'Can content be created in multiple languages?',
    answer:
      'Yes, we create content for German, English and international projects. For multilingual projects we account for local search habits and correct SEO implementation.',
  },
  {
    question: 'How does the copywriting process work?',
    answer:
      'Our process includes briefing & research, keyword strategy, writing with SEO optimisation and feedback/polishing. You receive the finished copy as a document for approval.',
  },
];
</script>
