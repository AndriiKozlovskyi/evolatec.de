<template>
  <div>
    <HeroSection
      background-image="/design-branding/hero.webp"
      badge="Branding Agency & Corporate Design Studio"
      title="Branding Agency: Corporate Design That Makes Your Brand Unmistakable"
      description="EvolaTec develops strong brand identities, modern corporate design, professional logos and digital brand presences that make businesses visible, trustworthy and unique."
      primaryCTA="Start Branding Project"
      secondaryCTA="View Pricing"
      :stats="brandingStats"
    />

    <TrustSection :companies="trustCompanies" />

    <IntroSection
      heading="Why Professional Branding Is Essential"
      :paragraphs="introParagraphs"
      image="/design-branding/features.webp"
      image-alt="Professional Branding and Corporate Design"
      :badge="introBadge"
    />

    <ServicesSection title="Our Branding & Corporate Design Services" variant="centered" :services="brandingServices" />

    <BenefitsSection title="Benefits of Professional Branding" :benefits="brandingBenefits" />

    <ProcessSection title="Our Branding Process" :steps="brandingProcess" />

    <FeaturesSection
      title="Branding Solutions for Modern Businesses"
      :features="brandingTypes"
      image-url="/web-development-cost/features.webp"
    />

    <ChecklistSection bg="container-low" :columns="brandingInfoColumns" />

    <PricingSection
      title="Branding & Corporate Design Pricing"
      subtitle="Transparent pricing for branding, logo development and corporate design."
      :pricing-plans="brandingPricingPlans"
    />

    <FeaturesSection
      title="Strong Brand Identities for Modern Businesses"
      :features="featuresData"
      image-url="/design-branding/features.webp"
    />

    <FAQSection title="Frequently Asked Questions about Branding" :faqs="brandingFaqs" />

    <CTASection
      title="Build a Strong Brand with EvolaTec"
      description="Professional branding, modern corporate design and strategic brand development for businesses, start-ups and digital projects."
      primary-cta="Start Branding Project"
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
      '@id': 'https://evolatec.de/en/design-branding/#webpage',
      url: 'https://evolatec.de/en/design-branding',
      name: 'Branding Agency & Corporate Design | EvolaTec',
      description: 'Professional branding agency for corporate design, logo design and brand development. EvolaTec develops strong brand identities for businesses and start-ups.',
      isPartOf: { '@id': 'https://evolatec.de/#website' },
      about: { '@id': 'https://evolatec.de/#organization' },
      inLanguage: 'en-US',
    },
    {
      '@type': 'Service',
      '@id': 'https://evolatec.de/en/design-branding/#service',
      name: 'Branding & Corporate Design',
      description: 'Professional branding agency for corporate design, logo design and brand development.',
      url: 'https://evolatec.de/en/design-branding',
      provider: { '@id': 'https://evolatec.de/#organization' },
      areaServed: { '@type': 'Country', name: 'Germany' },
      offers: { '@type': 'Offer', priceSpecification: { '@type': 'PriceSpecification', minPrice: '200', priceCurrency: 'EUR' } },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        { '@type': 'Question', name: 'What does a branding agency do?', acceptedAnswer: { '@type': 'Answer', text: 'A branding agency develops brand identities, corporate designs, logos and strategic brand presences for businesses and start-ups.' } },
        { '@type': 'Question', name: 'Why is corporate design important?', acceptedAnswer: { '@type': 'Answer', text: 'Corporate design ensures recognition, professionalism and trust. A consistent design creates a cohesive brand perception.' } },
        { '@type': 'Question', name: 'How much does professional branding cost?', acceptedAnswer: { '@type': 'Answer', text: 'Logo design starts from €200, corporate design from €1,000. Rebranding and complete brand presences from €2,000.' } },
        { '@type': 'Question', name: 'Can existing brands be modernised?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, we offer rebranding, corporate redesign and complete brand relaunches to modernise existing brands.' } },
        { '@type': 'Question', name: 'How long does a branding project take?', acceptedAnswer: { '@type': 'Answer', text: 'A branding project takes an average of 4–8 weeks, depending on scope and complexity. Logo design is often achievable faster.' } },
      ],
    },
  ],
};

useHead({
  title: 'Branding Agency & Corporate Design | EvolaTec',
  htmlAttrs: { lang: 'en' },
  meta: [
    {
      name: 'description',
      content: 'Professional branding agency for corporate design, logo design and brand development. EvolaTec develops strong brand identities for businesses and start-ups.',
    },
    {
      name: 'keywords',
      content: 'branding agency, corporate design, logo design, brand identity, rebranding, brand strategy, brand development',
    },
    { property: 'og:title', content: 'Branding Agency & Corporate Design | EvolaTec' },
    { property: 'og:description', content: 'Strong brand identities, modern corporate design and professional logos for businesses and start-ups.' },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://evolatec.de/en/design-branding' },
    { property: 'og:locale', content: 'en_US' },
    { property: 'og:locale:alternate', content: 'de_DE' },
  ],
  link: [
    { rel: 'canonical', href: 'https://evolatec.de/en/design-branding' },
    ...hreflangLinks.value,
  ],
  script: [{ type: 'application/ld+json', innerHTML: JSON.stringify(schemaMarkup) }],
});

const trustCompanies = ['LOGO DESIGN', 'CORPORATE DESIGN', 'BRAND STRATEGY', 'REBRANDING'];

const introParagraphs = [
  'Strong branding determines how customers perceive your business. A professional brand identity builds trust, ensures recognition and positions your company in the market.',
  'Businesses with clear corporate design appear more professional, higher quality and remain in people\'s memories long-term.',
  'As a branding agency, EvolaTec develops modern brand presences for businesses, start-ups, service providers and digital brands.',
];

const introBadge = {
  icon: 'palette',
  title: 'Strong Branding',
  subtitle: 'More Trust',
  iconBg: 'bg-gradient-to-br from-blue-500 to-indigo-600',
};

const brandingStats = [
  { value: 'Unique', label: 'Brands', icon: 'star' },
  { value: 'Modern', label: 'Designs', icon: 'palette' },
  { value: 'Professional', label: 'Branding', icon: 'verified_user' },
  { value: 'Strategic', label: 'Positioning', icon: 'target' },
];

const brandingServices = [
  {
    title: 'Branding & Brand Development',
    description: 'Development of a clear brand identity including strategy, positioning and visual communication.',
    icon: 'palette',
    iconBg: 'bg-blue-100',
    iconColor: 'text-blue-600',
    borderColor: 'border-blue-500',
  },
  {
    title: 'Logo Design Agency',
    description: 'Professional logos for businesses, start-ups and digital brands.',
    icon: 'auto_awesome',
    iconBg: 'bg-emerald-100',
    iconColor: 'text-emerald-600',
    borderColor: 'border-emerald-500',
  },
  {
    title: 'Corporate Design',
    description: 'Consistent design system for professional brand presences.',
    icon: 'design_services',
    iconBg: 'bg-orange-100',
    iconColor: 'text-orange-600',
    borderColor: 'border-orange-500',
  },
  {
    title: 'Corporate Website Design',
    description: 'Modern business websites with strong branding and clear user flow.',
    icon: 'web',
    iconBg: 'bg-purple-100',
    iconColor: 'text-purple-600',
    borderColor: 'border-purple-500',
  },
  {
    title: 'Rebranding & Corporate Relaunch',
    description: 'Modernisation of existing brands and complete visual relaunches.',
    icon: 'refresh',
    iconBg: 'bg-teal-100',
    iconColor: 'text-teal-600',
    borderColor: 'border-teal-500',
  },
  {
    title: 'Brand Strategy & Positioning',
    description: 'Strategic brand development for sustainable growth.',
    icon: 'map',
    iconBg: 'bg-rose-100',
    iconColor: 'text-rose-600',
    borderColor: 'border-rose-500',
  },
];

const brandingBenefits = [
  {
    title: 'Recognition',
    description: 'Strong corporate design ensures that customers recognise your brand immediately.',
    icon: 'fingerprint',
    bg: 'bg-gradient-to-br from-blue-600 to-blue-800',
    image: '/landing/leads.webp',
  },
  {
    title: 'Trust & Professionalism',
    description: 'Professional branding increases credibility and trust.',
    icon: 'verified_user',
    bg: 'bg-gradient-to-br from-emerald-600 to-teal-800',
    image: '/web-development-cost/price.webp',
  },
  {
    title: 'Better Positioning',
    description: 'A clear brand identity sets you apart from competitors.',
    icon: 'trending_up',
    bg: 'bg-gradient-to-br from-purple-600 to-indigo-800',
    image: '/web-development-cost/tech.webp',
  },
  {
    title: 'Higher Conversion',
    description: 'Strong branding improves user experience and purchasing decisions.',
    icon: 'shopping_cart',
    bg: 'bg-gradient-to-br from-amber-500 to-orange-600',
    image: '/landing/advertising.webp',
  },
];

const brandingProcess = [
  {
    title: 'Analysis & Strategy',
    description: 'Analysis of your target audience, competitors and brand positioning.',
    icon: 'analytics',
  },
  {
    title: 'Concept Development',
    description: 'Development of brand style, design direction and visual identity.',
    icon: 'lightbulb',
  },
  {
    title: 'Logo & Corporate Design',
    description: 'Design of logos, colours, typography and design systems.',
    icon: 'palette',
  },
  {
    title: 'Implementation & Rollout',
    description: 'Application of branding across website, marketing and digital channels.',
    icon: 'rocket_launch',
  },
];

const brandingTypes = [
  {
    title: 'Branding for Founders',
    description: 'Professional brand presences for new businesses and start-ups.',
    icon: 'lightbulb',
  },
  {
    title: 'Corporate Branding',
    description: 'Consistent brand communication for established companies.',
    icon: 'business',
  },
  {
    title: 'Brand Building',
    description: 'Building long-term brand identities for growth and scaling.',
    icon: 'trending_up',
  },
  {
    title: 'Rebranding Agency',
    description: 'Modernisation of existing brands and visual relaunches.',
    icon: 'refresh',
  },
];

const brandingInfoColumns = [
  {
    heading: 'Corporate Design for Businesses',
    paragraphs: [
      'Professional corporate design ensures a consistent brand presence across all channels.',
      'EvolaTec develops corporate designs that are modern, high-quality and flexibly applicable.',
    ],
    items: [
      'Logo Design',
      'Colour Palette',
      'Typography',
      'Brand Guidelines',
      'Social Media Design',
      'Corporate Website Design',
      'Presentations & Documents',
      'Advertising Materials',
    ],
  },
  {
    heading: 'Professional Logo Development',
    paragraphs: [
      'A great logo is the foundation of every brand.',
      'Our logo design agency develops modern, minimalist and professional logos that clearly represent your brand.',
    ],
    items: [
      'Recognition',
      'Scalability',
      'Modern Design',
      'Brand Alignment',
      'Digital & Print Use',
    ],
  },
];

const featuresData = [
  {
    title: 'Branding & Brand Development',
    description: 'Development of a clear brand identity including strategy and visual communication.',
    icon: 'palette',
  },
  {
    title: 'Logo Design Agency',
    description: 'Professional logos for businesses, start-ups and digital brands.',
    icon: 'auto_awesome',
  },
  {
    title: 'Corporate Design',
    description: 'Consistent design system for professional brand presences.',
    icon: 'design_services',
  },
  {
    title: 'Brand Strategy & Positioning',
    description: 'Strategic brand development for sustainable growth.',
    icon: 'map',
  },
];

const brandingPricingPlans = [
  {
    tier: 'Logo Design',
    price: 'from €200',
    features: [
      'Professional Logo',
      'Multiple Variants',
      'Vector Format (SVG/PDF)',
      'Brand Markings',
    ],
    buttonText: 'Request Logo',
    isHighlighted: false,
  },
  {
    tier: 'Corporate Design',
    price: 'from €1,000',
    features: [
      'Everything in Logo Design',
      'Colour Palette & Typography',
      'Brand Guidelines',
      'Visual Design System',
    ],
    buttonText: 'Start Branding',
    isHighlighted: true,
  },
  {
    tier: 'Rebranding & Relaunch',
    price: 'from €2,000',
    features: [
      'Everything in Corporate Design',
      'Brand Analysis & Strategy',
      'Visual Modernisation',
      'Roll-out & Implementation',
    ],
    buttonText: 'Book Rebranding',
    isHighlighted: false,
  },
];

const brandingFaqs = [
  {
    question: 'What does a branding agency do?',
    answer:
      'A branding agency develops brand identities, corporate designs, logos and strategic brand presences for businesses and start-ups. This includes logo design, colour and typography systems, brand guidelines and consistent execution across all touchpoints – website, social media, print and more.',
  },
  {
    question: 'Why is corporate design important?',
    answer:
      'Corporate design ensures recognition, professionalism and trust. A consistent design across website, social media and print creates a cohesive brand perception and makes your business unmistakable.',
  },
  {
    question: 'How much does professional branding cost?',
    answer:
      'Logo design at EvolaTec starts from €200, a complete corporate design from €1,000. Complete rebranding or brand presences for established businesses start from €2,000. Exact costs depend on scope.',
  },
  {
    question: 'How long does a branding project take?',
    answer:
      'A branding project takes an average of 4–8 weeks, depending on scope and complexity. Logo design is often achievable faster, complex rebranding takes longer.',
  },
  {
    question: 'What is the difference between branding and logo design?',
    answer:
      'Logo design is a single visual element – your business mark. Branding covers the entire brand identity: logo, colours, typography, imagery, tone of voice and communication. A logo alone is just a symbol – branding turns it into a recognisable brand.',
  },
  {
    question: 'Can existing brands be modernised?',
    answer:
      'Yes, we offer rebranding, corporate redesign and complete brand relaunches to modernise existing brands. We can preserve valuable existing brand assets or develop a completely new brand identity on request.',
  },
  {
    question: 'What is included in the brand guidelines?',
    answer:
      'Brand guidelines include logo variants, colour palette, typography system, imagery, application examples and dos & don\'ts. This way you and your service providers can apply your brand consistently across all channels.',
  },
];
</script>
