<template>
  <div>
    <HeroSection
      background-image="/smm/hero.webp"
      badge="Professional Social Media & Meta Ads Agency"
      title="Social Media Ads Agency: Facebook & Instagram Advertising That Sells"
      description="EvolaTec develops high-performance social media campaigns for Facebook, Instagram and Meta Ads — strategy, content and performance marketing for measurable results."
      primaryCTA="Request Social Media"
      secondaryCTA="View Pricing"
      :stats="socialStats"
    />

    <IntroSection
      heading="Why Social Media Marketing Is Essential Today"
      :paragraphs="introParagraphs"
      image="/smm/meta.webp"
      image-alt="Social Media Marketing EvolaTec"
      :badge="introBadge"
    />

    <!-- Platforms Visual Section -->
    <section class="py-section-padding bg-surface-container-low">
      <div class="max-w-container-max mx-auto px-gutter">
        <div class="text-center max-w-2xl mx-auto mb-stack-lg">
          <h2 class="font-headline-lg text-headline-lg text-primary mb-4">Social Media Marketing for Different Platforms</h2>
          <p class="font-body-lg text-on-surface-variant">We develop tailored campaigns for every channel.</p>
        </div>
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-gutter">
          <div
            v-for="platform in socialPlatforms"
            :key="platform.name"
            class="group relative rounded-3xl overflow-hidden h-72 cursor-pointer"
            :class="platform.bg"
          >
            <NuxtPicture
              :src="platform.image"
              alt=""
              format="avif,webp"
              sizes="xs:100vw sm:100vw md:50vw lg:25vw xl:25vw xxl:25vw"
              :width="600"
              :height="450"
              :img-attrs="{
                loading: 'lazy',
                decoding: 'async',
                class: 'absolute inset-0 w-full h-full object-cover opacity-20 group-hover:opacity-30 transition-opacity duration-500 scale-105 group-hover:scale-110 transition-transform',
              }"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            <div class="relative h-full flex flex-col justify-between p-6">
              <div class="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <span class="material-symbols-outlined text-white text-2xl">{{ platform.icon }}</span>
              </div>
              <div>
                <h3 class="font-headline-md text-white mb-1">{{ platform.name }}</h3>
                <p class="text-white/70 text-sm font-body-md">{{ platform.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <ServicesSection title="Our Social Media Services" variant="centered" :services="socialServices" />

    <ProcessSection title="Our Social Media Process" :steps="socialProcess" />

    <DarkBannerSection
      image="/ecommerce/hero.webp"
      badge="Measurable Results"
      description="Our social media campaigns are designed for results — not likes. Clicks, leads and revenue are precisely measurable."
      cta-text="Start Social Media Campaign"
      :checklist="campaignResults"
    >
      <template #title>
        Campaigns that
        <span class="bg-gradient-to-r from-blue-400 to-pink-400 bg-clip-text text-transparent">really</span>
        perform
      </template>
    </DarkBannerSection>

    <IntroSection
      data-nav-label="Why Us"
      data-nav-icon="stars"
      heading="Why EvolaTec as Your Social Media Agency?"
      :paragraphs="whyEvolaTecParagraphs"
      image="/main/seo.webp"
      image-alt="Social Media Marketing Agency EvolaTec"
      :badge="whyEvolaTecBadge"
      :usps="whyEvolaTec"
    />

    <PricingTableSection
      title="Social Media Marketing Pricing"
      description="Transparent pricing for social media management, Meta Ads and performance campaigns."
      service-label="Service"
      price-label="Price"
      cta-label="View All Prices"
      cta-href="/en/website-cost-calculator"
      :items="pricingItems"
    />

    <FAQSection title="Frequently Asked Questions about Social Media Marketing" :faqs="socialFaqs" />

    <section class="py-section-padding bg-primary text-on-primary">
      <div class="max-w-container-max mx-auto px-gutter text-center space-y-stack-md">
        <h2 class="font-display text-headline-lg">More Reach & Customers with Social Media Marketing</h2>
        <p class="font-body-lg max-w-2xl mx-auto opacity-80">
          EvolaTec develops social media campaigns that create visibility, win customers and help businesses grow.
        </p>
        <div class="flex flex-wrap justify-center gap-6 pt-6">
          <NuxtLink to="/en/contact">
            <BaseButton variant="secondary" size="lg">Start Social Media</BaseButton>
          </NuxtLink>
          <NuxtLink to="/en/contact">
            <BaseButton variant="outline" size="lg" class="!border-white/40 !text-white hover:!bg-white/10">View Pricing</BaseButton>
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const { hreflangLinks } = useLanguageSwitcher();

const schemaMarkup = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://evolatec.de/en/social-media-marketing/#webpage',
      url: 'https://evolatec.de/en/social-media-marketing',
      name: 'Social Media Marketing Agency | Instagram & Facebook Ads | EvolaTec',
      description: 'Professional social media marketing by EvolaTec. Instagram, Facebook and LinkedIn Ads for more reach, followers and conversions.',
      isPartOf: { '@id': 'https://evolatec.de/#website' },
      about: { '@id': 'https://evolatec.de/#organization' },
      inLanguage: 'en-US',
    },
    {
      '@type': 'Service',
      '@id': 'https://evolatec.de/en/social-media-marketing/#service',
      name: 'Meta Ads & Social Media Marketing',
      description: 'Instagram, Facebook and LinkedIn Ads for more reach, followers and conversions.',
      url: 'https://evolatec.de/en/social-media-marketing',
      provider: { '@id': 'https://evolatec.de/#organization' },
      areaServed: { '@type': 'Country', name: 'Germany' },
      offers: { '@type': 'Offer', priceSpecification: { '@type': 'PriceSpecification', minPrice: '300', priceCurrency: 'EUR' } },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        { '@type': 'Question', name: 'What does a social media agency do?', acceptedAnswer: { '@type': 'Answer', text: 'A social media agency develops, manages and optimises campaigns on platforms such as Facebook and Instagram.' } },
        { '@type': 'Question', name: 'How much do Facebook or Instagram ads cost?', acceptedAnswer: { '@type': 'Answer', text: 'Meta Ads management starts from €300/month. The advertising budget is set separately.' } },
        { '@type': 'Question', name: 'How quickly do social media ads work?', acceptedAnswer: { '@type': 'Answer', text: 'First results can be visible within a few days.' } },
        { '@type': 'Question', name: 'Which businesses benefit from social media marketing?', acceptedAnswer: { '@type': 'Answer', text: 'Local businesses, service providers, e-commerce, start-ups and brand building.' } },
      ],
    },
  ],
};

useHead({
  title: 'Social Media Marketing Agency | Instagram & Facebook Ads | EvolaTec',
  htmlAttrs: { lang: 'en' },
  meta: [
    {
      name: 'description',
      content: 'Professional social media marketing by EvolaTec. Instagram, Facebook and LinkedIn Ads for more reach, followers and conversions.',
    },
    {
      name: 'keywords',
      content: 'social media marketing agency, Instagram marketing, Facebook ads agency, social media agency, social media advertising, Meta Ads',
    },
    { property: 'og:title', content: 'Social Media Marketing Agency | EvolaTec' },
    { property: 'og:description', content: 'Instagram, Facebook and LinkedIn Ads for more reach and conversions.' },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://evolatec.de/en/social-media-marketing' },
    { property: 'og:locale', content: 'en_US' },
    { property: 'og:locale:alternate', content: 'de_DE' },
  ],
  link: [
    { rel: 'canonical', href: 'https://evolatec.de/en/social-media-marketing' },
    ...hreflangLinks.value,
  ],
  script: [{ type: 'application/ld+json', innerHTML: JSON.stringify(schemaMarkup) }],
});

const introParagraphs = [
  'Facebook, Instagram and other social networks are among the most important marketing channels for modern businesses.',
  'Professional social media advertising enables you to target new customers, build brand awareness and increase sales.',
  'As a social media agency, EvolaTec develops campaigns that generate reach, engagement, leads and revenue — complemented by SEO and Google Ads.',
];

const introBadge = {
  icon: 'thumb_up',
  title: 'More Reach',
  subtitle: 'On Meta',
  iconBg: 'bg-gradient-to-br from-blue-500 to-pink-500',
};

const whyEvolaTecParagraphs = [
  'Successful social media marketing requires more than just attractive posts.',
  'Strategy, audience analysis, content and data-driven optimisation are key.',
  'EvolaTec combines social media advertising, performance marketing, web design and SEO into powerful marketing systems.',
];

const whyEvolaTecBadge = {
  icon: 'groups',
  title: 'Meta Ads',
  subtitle: 'Strategy & Setup',
  iconBg: 'bg-gradient-to-br from-pink-500 to-purple-600',
};

const socialStats = [
  { value: 'Facebook', label: 'Instagram & Meta', icon: 'groups' },
  { value: 'More Leads', label: 'Generation', icon: 'person_add' },
  { value: 'Performance', label: 'Focused', icon: 'analytics' },
  { value: 'Reach', label: 'Building', icon: 'public' },
];

const socialPlatforms = [
  {
    name: 'Facebook Marketing',
    description: 'Advertising for local businesses, services and e-commerce.',
    icon: 'thumb_up',
    bg: 'bg-gradient-to-br from-blue-600 to-blue-800',
    image: '/smm/facebook.webp',
  },
  {
    name: 'Instagram Marketing',
    description: 'Visual campaigns for brand building and reach.',
    icon: 'photo_camera',
    bg: 'bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400',
    image: '/smm/instagram.webp',
  },
  {
    name: 'Meta Ads',
    description: 'Performance campaigns across the entire Meta network.',
    icon: 'hub',
    bg: 'bg-gradient-to-br from-indigo-600 to-blue-700',
    image: '/smm/meta.webp',
  },
  {
    name: 'Retargeting',
    description: 'Re-engaging visitors and prospects.',
    icon: 'refresh',
    bg: 'bg-gradient-to-br from-slate-700 to-slate-900',
    image: '/smm/retargeting.webp',
  },
];

const socialServices = [
  {
    title: 'Facebook Ads',
    description: 'Targeted Facebook advertising for leads, sales and brand building.',
    icon: 'thumb_up',
    iconBg: 'bg-blue-100',
    iconColor: 'text-blue-600',
    borderColor: 'border-blue-500',
  },
  {
    title: 'Instagram Ads',
    description: 'Modern Instagram campaigns for reach and performance.',
    icon: 'photo_camera',
    iconBg: 'bg-pink-100',
    iconColor: 'text-pink-600',
    borderColor: 'border-pink-500',
  },
  {
    title: 'Meta Ads Campaigns',
    description: 'Performance campaigns across the entire Meta network.',
    icon: 'hub',
    iconBg: 'bg-indigo-100',
    iconColor: 'text-indigo-600',
    borderColor: 'border-indigo-500',
  },
  {
    title: 'Social Media Content',
    description: 'Creation of ad content, creatives and campaign materials.',
    icon: 'edit_square',
    iconBg: 'bg-orange-100',
    iconColor: 'text-orange-600',
    borderColor: 'border-orange-500',
  },
  {
    title: 'Social Media Management',
    description: 'Management, planning and optimisation of your social media channels.',
    icon: 'manage_accounts',
    iconBg: 'bg-emerald-100',
    iconColor: 'text-emerald-600',
    borderColor: 'border-emerald-500',
  },
  {
    title: 'Performance Marketing',
    description: 'Scalable campaigns focused on revenue and conversion.',
    icon: 'analytics',
    iconBg: 'bg-purple-100',
    iconColor: 'text-purple-600',
    borderColor: 'border-purple-500',
  },
];

const socialProcess = [
  {
    title: 'Analysis & Strategy',
    description: 'Analysis of your target audience, industry and competitors.',
    icon: 'analytics',
    iconBg: 'bg-blue-100',
    iconColor: 'text-blue-600',
    chipBg: 'bg-blue-50',
    borderColor: 'border-blue-400',
  },
  {
    title: 'Content & Creatives',
    description: 'Development of ad content, images and campaign materials.',
    icon: 'brush',
    iconBg: 'bg-pink-100',
    iconColor: 'text-pink-600',
    chipBg: 'bg-pink-50',
    borderColor: 'border-pink-400',
  },
  {
    title: 'Campaign Setup',
    description: 'Professional setup of Facebook & Instagram campaigns.',
    icon: 'campaign',
    iconBg: 'bg-emerald-100',
    iconColor: 'text-emerald-600',
    chipBg: 'bg-emerald-50',
    borderColor: 'border-emerald-400',
  },
  {
    title: 'Optimisation & Scaling',
    description: 'Ongoing analysis and improvement of performance.',
    icon: 'tune',
    iconBg: 'bg-purple-100',
    iconColor: 'text-purple-600',
    chipBg: 'bg-purple-50',
    borderColor: 'border-purple-400',
  },
];

const whyEvolaTec = [
  {
    title: 'Performance Focus',
    description: 'Campaigns with measurable results.',
    icon: 'ads_click',
    iconBg: 'bg-blue-100',
    iconColor: 'text-blue-600',
    borderColor: 'border-blue-500',
  },
  {
    title: 'Creative Content',
    description: 'Ads that generate attention.',
    icon: 'brush',
    iconBg: 'bg-pink-100',
    iconColor: 'text-pink-600',
    borderColor: 'border-pink-500',
  },
  {
    title: 'Scalable Systems',
    description: 'Strategies for long-term growth.',
    icon: 'stacked_line_chart',
    iconBg: 'bg-purple-100',
    iconColor: 'text-purple-600',
    borderColor: 'border-purple-500',
  },
];

const campaignResults = [
  'Clear KPIs & transparent reporting',
  'A/B-tested ads & creatives',
  'Ongoing campaign optimisation',
  'Focus on leads & revenue, not likes',
];

const pricingItems = [
  { name: 'Social Media Consulting', price: 'from €90/hour' },
  { name: 'Meta Ads Management', price: 'from €300/month' },
  { name: 'Creatives & Graphics', price: 'from €150' },
  { name: 'Monthly Reporting', price: 'from €100/month' },
  { name: 'Social Media Templates', price: 'from €150' },
  { name: 'Content Production', price: 'from €300' },
];

const socialFaqs = [
  {
    question: 'What does a social media agency do?',
    answer:
      'A social media agency develops, launches and optimises advertising campaigns on platforms such as Instagram, Facebook, TikTok and LinkedIn. This includes audience analysis, creative production, ad copy, targeting and ongoing optimisation. The goal is to generate as many qualified clicks, leads or sales as possible with your ad budget.',
  },
  {
    question: 'How much do Facebook or Instagram ads cost?',
    answer:
      'Our Meta Ads management starts from €300/month for agency services. The advertising budget for Facebook and Instagram is set separately and paid directly to Meta. The amount depends on industry and goals – we provide a recommendation before launch.',
  },
  {
    question: 'How quickly do social media ads work?',
    answer:
      'First results can be visible within a few days. The first weeks are mainly used for testing different creatives and audiences – the best combinations are then further optimised and scaled up.',
  },
  {
    question: 'Which social media platform is right for my business?',
    answer:
      'Instagram and Facebook work especially well for B2C, local businesses and visually strong offers. TikTok works for younger audiences. LinkedIn is the first choice for B2B. We analyse your target audience and recommend the right platform.',
  },
  {
    question: 'What is the difference between social media marketing and Google Ads?',
    answer:
      'Google Ads reach users who are actively searching for a solution. Social media ads are shown to users who match a target audience but are not actively searching. Social media is particularly suited for brand building and visual offers; Google Ads for concrete buying intent.',
  },
  {
    question: 'Do you also handle content creation for social media?',
    answer:
      'Yes, on request we produce creatives, reels, story content and ad copy for your campaigns. Creatives & graphics start from €150, content production from €300.',
  },
  {
    question: 'Which businesses benefit from social media marketing?',
    answer:
      'Local businesses, service providers, e-commerce, start-ups and brand building. Particularly effective when your offering can be presented visually or has a clearly defined target audience.',
  },
];
</script>
