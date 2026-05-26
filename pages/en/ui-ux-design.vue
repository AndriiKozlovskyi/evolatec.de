<template>
  <div>
    <HeroSection
      background-image="/design-ui-ux/hero.webp"
      badge="Professional UI/UX Design Agency"
      title="UI/UX Design Agency: User Interface & Experience Design That Converts"
      description="EvolaTec develops modern UI/UX designs, intuitive interfaces and digital user experiences that build trust, increase conversion and present brands professionally."
      primaryCTA="Request UX Design"
      secondaryCTA="View Pricing"
      :stats="uiuxStats"
    />

    <TrustSection :companies="trustCompanies" />

    <IntroSection
      heading="Why Good UI/UX Design Is Critical"
      :paragraphs="introParagraphs"
      image="/design-ui-ux/features.webp"
      image-alt="UI/UX Design Agency"
      :badge="introBadge"
    />

    <ServicesSection title="Our UI/UX Design Services" variant="centered" :services="uiuxServices" />

    <BenefitsSection title="Benefits of Professional UX & UI Design" :benefits="uiuxBenefits" />

    <ProcessSection title="Our UI/UX Design Process" :steps="uiuxProcess" />

    <ChecklistSection
      :columns="uiuxInfoColumns"
      :items="uiDesignItems"
      icon="design_services"
    />

    <FeaturesSection
      title="UI/UX Solutions for Modern Industries"
      :features="uiuxIndustries"
      image-url="/web-development/hero.webp"
    />

    <PricingSection
      title="UI/UX Design Pricing"
      subtitle="Transparent pricing for professional UX & UI design."
      :pricing-plans="uiuxPricingPlans"
    />

    <FeaturesSection
      title="Modern UI/UX Design for Digital Products"
      :features="featuresData"
      image-url="/design-ui-ux/features.webp"
    />

    <FAQSection title="Frequently Asked Questions about UI/UX Design" :faqs="uiuxFaqs" />

    <CTASection
      title="Professional UI/UX Design for Modern Digital Products"
      description="EvolaTec develops modern interfaces, strong user experiences and high-converting designs for businesses, start-ups and digital platforms."
      primary-cta="Start UI/UX Project"
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
      '@id': 'https://evolatec.de/en/ui-ux-design/#webpage',
      url: 'https://evolatec.de/en/ui-ux-design',
      name: 'UI/UX Design Agency | EvolaTec',
      description: 'Professional UI/UX design agency for modern interfaces, user experience design and digital user journeys. EvolaTec increases conversion through excellent design.',
      isPartOf: { '@id': 'https://evolatec.de/#website' },
      about: { '@id': 'https://evolatec.de/#organization' },
      inLanguage: 'en-US',
    },
    {
      '@type': 'Service',
      '@id': 'https://evolatec.de/en/ui-ux-design/#service',
      name: 'UI/UX Design',
      description: 'Professional User Interface and User Experience design for modern websites, apps and digital products.',
      url: 'https://evolatec.de/en/ui-ux-design',
      provider: { '@id': 'https://evolatec.de/#organization' },
      areaServed: { '@type': 'Country', name: 'Germany' },
      offers: { '@type': 'Offer', priceSpecification: { '@type': 'PriceSpecification', minPrice: '500', priceCurrency: 'EUR' } },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        { '@type': 'Question', name: 'What does a UX design agency do?', acceptedAnswer: { '@type': 'Answer', text: 'A UX agency develops user experiences that make websites and digital products more user-friendly, intuitive and conversion-optimised. This includes user research, wireframes, prototyping and interface design.' } },
        { '@type': 'Question', name: 'What is the difference between UI and UX design?', acceptedAnswer: { '@type': 'Answer', text: 'UX (User Experience) describes the overall user experience: structure, navigation, interaction and functionality. UI (User Interface) is the visual surface: layout, colours, typography and buttons. Simply put: UX is how it works, UI is how it looks.' } },
        { '@type': 'Question', name: 'Why is UX design important?', acceptedAnswer: { '@type': 'Answer', text: 'Good UX improves conversion rates, user satisfaction and customer retention while reducing bounce rates. Poor UX leads to frustrated users and lost customers. In e-commerce and SaaS products, UX is often a decisive competitive factor.' } },
        { '@type': 'Question', name: 'How much does professional UI/UX design cost?', acceptedAnswer: { '@type': 'Answer', text: 'UI/UX projects start from €500 for a UX analysis and from €1,200 for a complete website design. Complex projects such as SaaS apps from €2,000. Costs depend on scope, number of screens and complexity.' } },
        { '@type': 'Question', name: 'How does a UX design process work?', acceptedAnswer: { '@type': 'Answer', text: 'Our UX design process covers research (target audience analysis), concept (user flows), wireframes, UI design and prototyping. This is followed by handoff to development with all necessary specifications.' } },
      ],
    },
  ],
};

useHead({
  title: 'UI/UX Design Agency | EvolaTec',
  htmlAttrs: { lang: 'en' },
  meta: [
    {
      name: 'description',
      content: 'Professional UI/UX design agency for modern interfaces, user experience design and digital user journeys. EvolaTec increases conversion through excellent design.',
    },
    {
      name: 'keywords',
      content: 'UI/UX design agency, user experience design, user interface design, UX design, wireframing, prototyping, SaaS design, mobile UX',
    },
    { property: 'og:title', content: 'UI/UX Design Agency | EvolaTec' },
    { property: 'og:description', content: 'Modern interfaces, strong user experiences and high-converting designs for businesses, start-ups and digital platforms.' },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://evolatec.de/en/ui-ux-design' },
    { property: 'og:locale', content: 'en_US' },
    { property: 'og:locale:alternate', content: 'de_DE' },
  ],
  link: [
    { rel: 'canonical', href: 'https://evolatec.de/en/ui-ux-design' },
    ...hreflangLinks.value,
  ],
  script: [{ type: 'application/ld+json', innerHTML: JSON.stringify(schemaMarkup) }],
});

const trustCompanies = ['UI DESIGN', 'UX RESEARCH', 'PROTOTYPING', 'CONVERSION'];

const introParagraphs = [
  'Modern websites and digital products must not only look great — they must also be intuitive to use.',
  'Professional UX design improves the user experience, reduces bounce rates and increases the likelihood that visitors become customers.',
  'As a UI/UX design agency, EvolaTec develops modern interfaces, digital experiences and performant UIs for websites, SaaS platforms, landing pages and e-commerce projects.',
];

const introBadge = {
  icon: 'design_services',
  title: 'Better UX',
  subtitle: 'More Conversion',
  iconBg: 'bg-gradient-to-br from-purple-500 to-pink-500',
};

const uiuxStats = [
  { value: 'Modern', label: 'UI Design', icon: 'design_services' },
  { value: 'Intuitive', label: 'UX Focused', icon: 'touch_app' },
  { value: 'Conversion', label: 'Optimised', icon: 'trending_up' },
  { value: 'User', label: 'Centered', icon: 'people' },
];

const uiuxServices = [
  {
    title: 'UX Design',
    description: 'User-friendly experiences with clear structure, intuitive navigation and high conversion.',
    icon: 'touch_app',
    iconBg: 'bg-blue-100',
    iconColor: 'text-blue-600',
    borderColor: 'border-blue-500',
  },
  {
    title: 'UI Design',
    description: 'Modern interfaces with a professional look and consistent design system.',
    icon: 'design_services',
    iconBg: 'bg-emerald-100',
    iconColor: 'text-emerald-600',
    borderColor: 'border-emerald-500',
  },
  {
    title: 'Wireframes & Prototyping',
    description: 'Structured concepts and clickable prototypes for digital products.',
    icon: 'schema',
    iconBg: 'bg-orange-100',
    iconColor: 'text-orange-600',
    borderColor: 'border-orange-500',
  },
  {
    title: 'SaaS & Dashboard Design',
    description: 'UI/UX solutions for complex platforms, admin panels and SaaS products.',
    icon: 'dashboard',
    iconBg: 'bg-purple-100',
    iconColor: 'text-purple-600',
    borderColor: 'border-purple-500',
  },
  {
    title: 'Mobile UX Design',
    description: 'Responsive interfaces and mobile user experiences for smartphones and tablets.',
    icon: 'smartphone',
    iconBg: 'bg-teal-100',
    iconColor: 'text-teal-600',
    borderColor: 'border-teal-500',
  },
  {
    title: 'E-Commerce UX',
    description: 'Optimised shopping experiences for higher sales and better user flow.',
    icon: 'shopping_cart',
    iconBg: 'bg-rose-100',
    iconColor: 'text-rose-600',
    borderColor: 'border-rose-500',
  },
];

const uiuxBenefits = [
  {
    title: 'Higher Conversion',
    description: 'Intuitive interfaces increase leads, sales and enquiries.',
    icon: 'trending_up',
    bg: 'bg-gradient-to-br from-blue-600 to-blue-800',
    image: '/landing/leads.webp',
  },
  {
    title: 'Better User Experience',
    description: 'Clear structures improve navigation and usability.',
    icon: 'sentiment_satisfied',
    bg: 'bg-gradient-to-br from-emerald-600 to-teal-800',
    image: '/web-development-cost/price.webp',
  },
  {
    title: 'Professional Brand Presence',
    description: 'Modern UI design builds trust and brand perception.',
    icon: 'verified_user',
    bg: 'bg-gradient-to-br from-purple-600 to-indigo-800',
    image: '/web-development-cost/tech.webp',
  },
  {
    title: 'Mobile Optimisation',
    description: 'Responsive UX designs work perfectly on all devices.',
    icon: 'devices',
    bg: 'bg-gradient-to-br from-amber-500 to-orange-600',
    image: '/web-development/responsive.webp',
  },
];

const uiuxProcess = [
  {
    title: 'Analysis & Research',
    description: 'Analysis of target audience, competitors and user behaviour.',
    icon: 'search',
  },
  {
    title: 'UX Structure',
    description: 'Development of user flows, page architecture and wireframes.',
    icon: 'schema',
  },
  {
    title: 'UI Design',
    description: 'Crafting modern interfaces focused on conversion and usability.',
    icon: 'design_services',
  },
  {
    title: 'Optimisation & Testing',
    description: 'Improving the user experience through feedback and UX refinement.',
    icon: 'tune',
  },
];

const uiDesignItems = [
  'Modern Web Design',
  'Mobile First Design',
  'Design Systems',
  'SaaS Interfaces',
  'Dashboard UI',
  'Landing Page Design',
  'E-Commerce UI',
  'Corporate Interfaces',
];

const uiuxIndustries = [
  {
    title: 'SaaS & Start-ups',
    description: 'Interfaces for digital platforms, SaaS products and modern tools.',
    icon: 'rocket_launch',
  },
  {
    title: 'Business Websites',
    description: 'Corporate UX design for professional brand presences.',
    icon: 'business',
  },
  {
    title: 'E-Commerce',
    description: 'Conversion-optimised shopping experiences for online shops.',
    icon: 'shopping_bag',
  },
  {
    title: 'Landing Pages',
    description: 'Performance-oriented designs for lead generation.',
    icon: 'target',
  },
];

const uiuxInfoColumns = [
  {
    heading: 'User Experience Design for Modern Websites',
    paragraphs: [
      'Professional user experience design optimises the interaction between users and digital products.',
      'Good UX reduces frustration, improves orientation and ensures visitors find the information they need faster.',
    ],
  },
  {
    heading: 'Modern User Interface Design',
    paragraphs: [
      'UI design determines how a digital product looks and is perceived.',
      'Our UI/UX agency develops minimalist, modern and high-converting interfaces for businesses, start-ups and digital platforms.',
    ],
  },
];

const featuresData = [
  {
    title: 'UX Design',
    description: 'User-friendly experiences with clear structure and high conversion.',
    icon: 'touch_app',
  },
  {
    title: 'UI Design',
    description: 'Modern interfaces with a professional look and consistent design system.',
    icon: 'design_services',
  },
  {
    title: 'Wireframes & Prototyping',
    description: 'Structured concepts and clickable prototypes for digital products.',
    icon: 'schema',
  },
  {
    title: 'Mobile UX Design',
    description: 'Responsive interfaces and mobile experiences for all devices.',
    icon: 'smartphone',
  },
];

const uiuxPricingPlans = [
  {
    tier: 'UX Analysis',
    price: 'from €500',
    features: [
      'User Research',
      'Existing UX Audit',
      'Improvement Recommendations',
      'Detailed Report',
    ],
    buttonText: 'Request Analysis',
    isHighlighted: false,
  },
  {
    tier: 'Website UI/UX Design',
    price: 'from €1,200',
    features: [
      'Everything in UX Analysis',
      'UX & UI Design',
      'Wireframes & Prototypes',
      'Mobile Optimisation',
    ],
    buttonText: 'Start Project',
    isHighlighted: true,
  },
  {
    tier: 'SaaS & App Design',
    price: 'from €2,000',
    features: [
      'Everything in Website UI/UX',
      'Complex Interfaces & Flows',
      'Design System',
      'Developer Handoff & Specs',
    ],
    buttonText: 'Book Design',
    isHighlighted: false,
  },
];

const uiuxFaqs = [
  {
    question: 'What does a UX design agency do?',
    answer:
      'A UX agency develops user experiences that make websites and digital products more user-friendly, intuitive and conversion-optimised. This includes user research, wireframes, prototyping and interface design.',
  },
  {
    question: 'What is the difference between UI and UX design?',
    answer:
      'UX (User Experience) describes the overall user experience: structure, navigation, interaction and functionality. UI (User Interface) is the visual surface: layout, colours, typography and buttons. Simply put: UX is how it works, UI is how it looks.',
  },
  {
    question: 'Why is UX design important?',
    answer:
      'Good UX improves conversion rates, user satisfaction and customer retention while reducing bounce rates. Poor UX leads to frustrated users and lost customers. In e-commerce and SaaS products, UX is often a decisive competitive factor.',
  },
  {
    question: 'How much does professional UI/UX design cost?',
    answer:
      'UI/UX projects start from €500 for a UX analysis and from €1,200 for a complete website design. Complex projects such as SaaS apps from €2,000. Costs depend on scope, number of screens and complexity.',
  },
  {
    question: 'How does a UX design process work?',
    answer:
      'Our UX design process covers research (target audience analysis), concept (user flows), wireframes, UI design and prototyping. This is followed by handoff to development with all necessary specifications.',
  },
  {
    question: 'Which tools do you use for UI/UX design?',
    answer:
      'We work with Figma as our central design tool for UI, prototyping and design systems. For developer handoff we provide design systems and component libraries.',
  },
];
</script>
