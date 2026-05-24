<template>
  <div>
    <HeroSection
      background-image="/main/design.webp"
      badge="Professional Web Design Agency"
      title="Web Design Agency – Professional Web Design by EvolaTec"
      description="EvolaTec develops modern websites, strong brand identities and conversion-focused web design for businesses, start-ups and local companies."
      primaryCTA="Start Your Project"
      secondaryCTA="View Pricing"
      :stats="heroStats"
    />

    <TrustSection :companies="trustCompanies" />

    <IntroSection
      heading="Modern Websites for Businesses, Brands and Digital Products"
      :paragraphs="introParagraphs"
      image="/web-development/design.webp"
      image-alt="Professional Web Design"
      :badge="introBadge"
    />

    <FeaturesSection
      title="What makes professional web design."
      :features="features"
      image-url="/web-development/design.webp"
    />

    <ServicesSection title="Our Web Design Services" variant="centered" :services="designServices" />

    <BenefitsSection title="Why Professional Web Design Matters" :benefits="benefits" />

    <ProcessSection title="Our Web Design Process" :steps="processSteps" />

    <!-- Expertise blocks -->
    <section data-nav-label="Expertise" data-nav-icon="verified" class="relative py-section-padding bg-surface-container-low overflow-hidden">
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-primary/[0.04] blur-[120px] pointer-events-none"></div>

      <div class="relative max-w-container-max mx-auto px-gutter">
        <div class="text-center max-w-2xl mx-auto mb-stack-lg">
          <span class="inline-flex items-center gap-2 rounded-full bg-primary/8 border border-primary/15 px-4 py-2 text-sm font-medium text-primary mb-5">
            <span class="material-symbols-outlined text-[18px]">verified</span>
            Web Design from One Source
          </span>
          <h2 class="font-headline-lg text-primary leading-tight">Complete Digital Solutions for Your Brand</h2>
        </div>

        <div class="grid lg:grid-cols-2 gap-8">
          <div
            v-for="block in expertiseBlocks"
            :key="block.title"
            class="group relative bg-surface rounded-3xl p-10 border border-outline-variant/30 ambient-shadow hover:shadow-2xl hover:border-primary/20 transition-all duration-500 overflow-hidden"
          >
            <div class="absolute top-0 left-10 right-10 h-1 bg-gradient-to-r from-primary to-primary-container rounded-b-full"></div>
            <div class="absolute -top-20 -right-20 w-48 h-48 rounded-full bg-primary/5 blur-[60px] pointer-events-none"></div>

            <div class="relative">
              <div class="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary/15 transition-all duration-300">
                <span class="material-symbols-outlined text-primary text-2xl">{{ block.icon }}</span>
              </div>
              <h3 class="font-headline-lg text-primary mb-5 leading-tight">{{ block.title }}</h3>
              <div class="space-y-4 mb-7">
                <p v-for="(para, i) in block.paragraphs" :key="i" class="font-body-lg text-on-surface-variant">{{ para }}</p>
              </div>
              <div class="flex flex-wrap gap-2 pt-6 border-t border-outline-variant/20">
                <span v-for="tag in block.tags" :key="tag" class="px-3 py-1.5 rounded-full bg-primary/8 text-primary text-xs font-semibold">{{ tag }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <FAQSection title="Frequently Asked Questions" :faqs="faqs" />

    <CTASection
      title="Professional Web Design for Your Business"
      description="EvolaTec develops modern websites, strong brand identities and conversion-focused digital experiences."
      primary-cta="Request Web Design"
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
      '@id': 'https://evolatec.de/en/web-design/#webpage',
      url: 'https://evolatec.de/en/web-design',
      name: 'Web Design Agency – Professional Web Design | EvolaTec',
      description: 'Professional web design by EvolaTec. Modern websites, responsive designs, UI/UX and branding for businesses, start-ups and local companies.',
      isPartOf: { '@id': 'https://evolatec.de/#website' },
      about: { '@id': 'https://evolatec.de/#organization' },
      inLanguage: 'en-US',
    },
    {
      '@type': 'Service',
      '@id': 'https://evolatec.de/en/web-design/#service',
      name: 'Web Design',
      description: 'Modern, responsive web design for businesses, start-ups and local companies.',
      url: 'https://evolatec.de/en/web-design',
      provider: { '@id': 'https://evolatec.de/#organization' },
      areaServed: { '@type': 'Country', name: 'Germany' },
      offers: { '@type': 'Offer', priceSpecification: { '@type': 'PriceSpecification', minPrice: '1000', priceCurrency: 'EUR' } },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        { '@type': 'Question', name: 'How much does professional web design cost?', acceptedAnswer: { '@type': 'Answer', text: 'Costs depend on the scope of the project. Landing pages start from €500, professional business websites from €1,500.' } },
        { '@type': 'Question', name: 'Why is responsive web design important?', acceptedAnswer: { '@type': 'Answer', text: 'Responsive websites work optimally on smartphones, tablets and desktop devices.' } },
        { '@type': 'Question', name: 'What does a web design agency do?', acceptedAnswer: { '@type': 'Answer', text: 'A web design agency develops modern websites, improves brand identities and optimises user experiences.' } },
        { '@type': 'Question', name: 'Does EvolaTec also offer UI/UX design?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, EvolaTec develops modern UI/UX designs for websites, apps and digital platforms.' } },
      ],
    },
  ],
};

useHead({
  title: 'Web Design Agency – Professional Web Design | EvolaTec',
  htmlAttrs: { lang: 'en' },
  meta: [
    {
      name: 'description',
      content: 'Professional web design by EvolaTec. Modern websites, responsive designs, UI/UX and branding for businesses, start-ups and local companies.',
    },
    {
      name: 'keywords',
      content: 'web design agency, professional web design, website design, responsive web design, UI UX design, branding agency',
    },
    { property: 'og:title', content: 'Web Design Agency | EvolaTec' },
    { property: 'og:description', content: 'Modern websites, strong brand identities and conversion-focused digital experiences.' },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://evolatec.de/en/web-design' },
    { property: 'og:locale', content: 'en_US' },
    { property: 'og:locale:alternate', content: 'de_DE' },
  ],
  link: [
    { rel: 'canonical', href: 'https://evolatec.de/en/web-design' },
    ...hreflangLinks.value,
  ],
  script: [{ type: 'application/ld+json', innerHTML: JSON.stringify(schemaMarkup) }],
});

const trustCompanies = ['WEB DESIGN', 'UI/UX', 'BRANDING', 'RESPONSIVE'];

const introParagraphs = [
  'As a professional web design agency, EvolaTec develops modern, fast and conversion-focused websites for businesses, start-ups and local service providers.',
  'Professional web design improves how your brand is perceived, builds trust and ensures that visitors become customers.',
  'Our web agency combines modern UI/UX design, SEO-optimised structures and high-performance development for lasting success online.',
];

const introBadge = {
  icon: 'palette',
  title: 'Modern Design',
  subtitle: 'Brand-strong',
  iconBg: 'bg-gradient-to-br from-primary to-primary-container',
};

const expertiseBlocks = [
  {
    icon: 'business',
    title: 'Web Design Agency for Modern Businesses',
    paragraphs: [
      'EvolaTec is your agency for professional web design, modern company websites and digital brand identities.',
      'As a responsive web design agency, we develop websites that work perfectly on smartphones, tablets and desktop devices.',
      'Our web design studio combines design, performance, usability and SEO for sustainable results.',
    ],
    tags: ['Web Design Agency', 'Responsive', 'SEO Ready', 'Mobile First'],
  },
  {
    icon: 'workspace_premium',
    title: 'Professional Web Designer & Modern Web Agency',
    paragraphs: [
      'Whether a company website, landing page or complex digital platform — our website design agency develops modern solutions for a wide range of industries.',
      'Professional web design increases trust, brand perception and conversion rates.',
      'As a modern digital agency, EvolaTec supports businesses in their digital growth.',
    ],
    tags: ['Landing Page', 'Branding', 'Conversion', 'Digital Agency'],
  },
];

const heroStats = [
  { value: 'Modern', label: 'Web Design', icon: 'design_services' },
  { value: 'Responsive', label: 'Mobile First', icon: 'devices' },
  { value: 'SEO', label: 'Optimised', icon: 'trending_up' },
  { value: 'Conversion', label: 'Focused', icon: 'rocket_launch' },
];

const designServices = [
  {
    title: 'Content & Copywriting',
    description: 'Professional content, structured copy and conversion-focused content strategies.',
    icon: 'edit_square',
    iconBg: 'bg-blue-100',
    iconColor: 'text-blue-600',
    borderColor: 'border-blue-500',
    href: '/en/website-copywriting',
  },
  {
    title: 'UI/UX Design',
    description: 'Intuitive interfaces and modern user experiences for digital products.',
    icon: 'design_services',
    iconBg: 'bg-purple-100',
    iconColor: 'text-purple-600',
    borderColor: 'border-purple-500',
    href: '/en/ui-ux-design',
  },
  {
    title: 'Branding & Corporate Design',
    description: 'Professional brand identities and corporate designs for businesses.',
    icon: 'brand_awareness',
    iconBg: 'bg-orange-100',
    iconColor: 'text-orange-600',
    borderColor: 'border-orange-500',
    href: '/en/design-branding',
  },
  {
    title: 'Professional Web Design',
    description: 'Modern websites with strong brand presence and high conversion.',
    icon: 'language',
    iconBg: 'bg-emerald-100',
    iconColor: 'text-emerald-600',
    borderColor: 'border-emerald-500',
  },
  {
    title: 'Responsive Web Design',
    description: 'Optimised websites for smartphones, tablets and desktops.',
    icon: 'devices',
    iconBg: 'bg-rose-100',
    iconColor: 'text-rose-600',
    borderColor: 'border-rose-500',
  },
  {
    title: 'SEO Optimisation',
    description: 'Technically optimised websites with fast load times.',
    icon: 'search',
    iconBg: 'bg-cyan-100',
    iconColor: 'text-cyan-600',
    borderColor: 'border-cyan-500',
  },
];

const benefits = [
  {
    title: 'More Trust',
    description: 'Professional web design strengthens your brand.',
    icon: 'verified',
    bg: 'bg-gradient-to-br from-blue-600 to-indigo-800',
    image: '/main/design.webp',
  },
  {
    title: 'Higher Conversion',
    description: 'Modern websites generate more enquiries and sales.',
    icon: 'trending_up',
    bg: 'bg-gradient-to-br from-emerald-600 to-teal-800',
    image: '/web-development/design.webp',
  },
  {
    title: 'Mobile Optimisation',
    description: 'Perfect display on all devices.',
    icon: 'devices',
    bg: 'bg-gradient-to-br from-purple-600 to-indigo-800',
    image: '/web-development/responsive.webp',
  },
  {
    title: 'Strong Brand Impact',
    description: 'Professional designs that stay in the memory.',
    icon: 'auto_awesome',
    bg: 'bg-gradient-to-br from-orange-500 to-rose-600',
    image: '/main/hero.webp',
  },
];

const processSteps = [
  {
    title: 'Analysis',
    description: 'We analyse your target audience, market and competition — and define clear goals for your website together with you.',
    icon: 'search',
  },
  {
    title: 'Concept & Structure',
    description: 'Wireframes, information architecture and user flow for intuitive navigation and maximum conversion.',
    icon: 'schema',
  },
  {
    title: 'Design',
    description: 'Modern UI design in line with your branding — pixel-perfect, responsive and optimised for recognition.',
    icon: 'design_services',
  },
  {
    title: 'Optimisation',
    description: 'Fast load times, mobile optimisation and clean SEO structure for lasting visibility on Google.',
    icon: 'rocket_launch',
  },
];

const features = [
  {
    icon: 'palette',
    title: 'Strong Visual Identity & Brand Impact',
    description: 'Professional design creates instant trust — with consistent colours, typography and a distinctive visual language.',
  },
  {
    icon: 'devices',
    title: 'Responsive on All Devices',
    description: 'Every layout works perfectly on smartphones, tablets and desktops — mobile-first, pixel-perfect and without compromise.',
  },
  {
    icon: 'ads_click',
    title: 'Conversion-Optimised UI/UX Design',
    description: 'Intuitive navigation, clear calls-to-action and user-centred structures that turn visitors into customers.',
  },
  {
    icon: 'speed',
    title: 'Performance & Technical Excellence',
    description: 'Lightweight assets, optimised images and clean code for fast load times and high Lighthouse scores.',
  },
  {
    icon: 'search_insights',
    title: 'SEO-Ready from the Start',
    description: 'Semantic HTML, clean structure and optimised content — so your website gets found on Google.',
  },
];

const faqs = [
  {
    question: 'What does a web design agency do?',
    answer:
      'A web design agency conceives and designs modern websites: visual design, layout, typography, colours, imagery and user flow. The goal is a brand presence that builds trust, convinces visitors and carries the brand consistently across every page.',
  },
  {
    question: 'What makes professional web design?',
    answer:
      'Professional web design combines clear structure, considered user flow, high-quality typography and colours, and a consistent design system. It is aligned with your brand and target audience and ensures visitors grasp your offering intuitively and build trust.',
  },
  {
    question: 'What is the difference between web design and web development?',
    answer:
      'Web design focuses on visual appearance, layout, typography and user flow. Web development is the technical implementation with code. EvolaTec offers both disciplines from a single source – so design and implementation fit together perfectly.',
  },
  {
    question: 'How does the web design process work?',
    answer:
      'Our web design process covers briefing & analysis, concept and wireframes, visual design and feedback rounds up to final handover. At every stage we coordinate closely with you so the result fits your brand and goals precisely.',
  },
  {
    question: 'What is the difference between web design and UI/UX design?',
    answer:
      'Web design covers the creative concept of a website – look, layout and brand presence. UI/UX design goes deeper into user interface and user experience, especially for complex applications such as SaaS or apps. Both disciplines complement each other.',
  },
  {
    question: 'Why is responsive web design important?',
    answer:
      'A large share of visitors today use smartphones. Responsive web design ensures that layout, images and content display optimally on every device – smartphone, tablet and desktop. Google also prefers mobile-optimised websites in its search results.',
  },
  {
    question: 'Do you also redesign existing websites?',
    answer:
      'Yes, we also handle redesigns and visually rework existing websites. On request we focus purely on the new design – or combine the redesign with a technical relaunch.',
  },
];
</script>
