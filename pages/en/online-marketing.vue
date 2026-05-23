<template>
  <div>
    <HeroSection
      background-image="/marketing/hero.webp"
      badge="Full Service Online Marketing Agency"
      title="Online Marketing Agency: More Reach, More Leads, More Revenue"
      description="EvolaTec develops digital marketing strategies that make businesses visible, generate qualified leads and create sustainable growth."
      primaryCTA="Request Marketing Strategy"
      secondaryCTA="View Pricing"
      :stats="marketingStats"
    />

    <IntroSection
      heading="Why Modern Online Marketing Is Essential"
      :paragraphs="introParagraphs"
      image="/marketing/hero.webp"
      image-alt="Online Marketing Agency EvolaTec"
      :badge="introBadge"
    />

    <ServicesSection title="Our Online Marketing Services" variant="centered" :services="marketingServices" />

    <BenefitsSection title="Benefits of a Professional Online Marketing Agency" :benefits="marketingBenefits" />

    <ProcessSection title="Our Online Marketing Process" :steps="marketingProcess" />

    <DarkCardsSection
      title="Online Marketing Channels for Growth"
      :cards="marketingChannels"
    />

    <IntroSection
      data-nav-label="Why us"
      data-nav-icon="stars"
      heading="Why Choose EvolaTec as Your Online Marketing Agency?"
      :paragraphs="whyEvolaTecParagraphs"
      image="/landing/leads.webp"
      image-alt="Online Marketing Agency EvolaTec"
      :badge="whyEvolaTecBadge"
      :usps="whyEvolaTec"
    />

    <!-- Consulting Section -->
    <section class="py-section-padding bg-surface-container-low">
      <div class="max-w-container-max mx-auto px-gutter">
        <div class="grid md:grid-cols-2 gap-stack-lg items-start">
          <div>
            <h2 class="font-headline-lg text-headline-lg text-primary mb-stack-md">
              Marketing Consulting & Digital Strategies
            </h2>
            <p class="font-body-lg text-body-lg text-on-surface-variant mb-6">
              Successful online marketing is built on clear strategies and measurable goals.
            </p>
            <p class="font-body-lg text-body-lg text-on-surface-variant mb-8">
              EvolaTec supports businesses in developing modern marketing concepts, digital growth strategies and scalable systems.
            </p>
            <a href="/en/contact">
              <BaseButton variant="primary" size="lg">Request Consulting</BaseButton>
            </a>
          </div>

          <div class="grid grid-cols-2 gap-3">
            <div
              v-for="(item, index) in consultingItems"
              :key="item.label"
              class="flex items-center gap-3 bg-surface rounded-xl p-4 border border-outline-variant/20"
            >
              <span
                class="material-symbols-outlined text-xl flex-shrink-0"
                :class="consultingColors[index % consultingColors.length]"
              >{{ item.icon }}</span>
              <span class="font-body-md text-on-surface text-sm font-medium">{{ item.label }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Pricing Table Section -->
    <section class="py-section-padding bg-surface">
      <div class="max-w-container-max mx-auto px-gutter">
        <h2 class="font-headline-lg text-headline-lg text-primary text-center mb-4">
          Online Marketing Pricing
        </h2>
        <p class="text-center font-body-lg text-on-surface-variant mb-stack-lg">
          Transparent pricing for digital marketing, SEO and performance campaigns.
        </p>

        <div class="max-w-2xl mx-auto overflow-x-auto">
          <table class="w-full">
            <thead>
              <tr class="border-b-2 border-primary">
                <th class="text-left py-4 px-6 font-headline-md text-primary">Service</th>
                <th class="text-right py-4 px-6 font-headline-md text-primary">Price</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="item in pricingItems"
                :key="item.name"
                class="border-b border-outline-variant/20 hover:bg-surface-container-low transition-colors"
              >
                <td class="py-4 px-6 font-body-md text-on-surface">{{ item.name }}</td>
                <td class="py-4 px-6 font-body-md text-primary font-bold text-right">{{ item.price }}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="text-center mt-10">
          <a href="/en/website-cost-calculator">
            <BaseButton variant="outline" size="md">View All Pricing</BaseButton>
          </a>
        </div>
      </div>
    </section>

    <FAQSection title="Frequently Asked Questions about Online Marketing" :faqs="marketingFaqs" />

    <CTASection
      title="More Visibility, More Leads, More Growth"
      description="EvolaTec develops modern online marketing strategies for businesses that want to grow digitally."
      primary-cta="Start Your Marketing Project"
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
      '@id': 'https://evolatec.de/en/online-marketing/#webpage',
      url: 'https://evolatec.de/en/online-marketing',
      name: 'Online Marketing Agency | Google Ads, SEO & Social Media | EvolaTec',
      description: 'Professional online marketing by EvolaTec. Google Ads, social media marketing and SEO for more reach, leads and revenue.',
      isPartOf: { '@id': 'https://evolatec.de/#website' },
      about: { '@id': 'https://evolatec.de/#organization' },
      inLanguage: 'en-US',
    },
    {
      '@type': 'Service',
      '@id': 'https://evolatec.de/en/online-marketing/#service',
      name: 'Online Marketing',
      description: 'Google Ads, social media marketing and SEO for more reach, leads and sustainable growth.',
      url: 'https://evolatec.de/en/online-marketing',
      provider: { '@id': 'https://evolatec.de/#organization' },
      areaServed: { '@type': 'Country', name: 'Germany' },
      offers: { '@type': 'Offer', priceSpecification: { '@type': 'PriceSpecification', minPrice: '400', priceCurrency: 'EUR' } },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        { '@type': 'Question', name: 'What does an online marketing agency do?', acceptedAnswer: { '@type': 'Answer', text: 'An online marketing agency develops strategies, campaigns and digital measures for reach, leads and revenue growth.' } },
        { '@type': 'Question', name: 'Which marketing services does EvolaTec offer?', acceptedAnswer: { '@type': 'Answer', text: 'SEO, Google Ads, branding, content marketing, conversion optimisation and digital strategies.' } },
        { '@type': 'Question', name: 'How much does professional online marketing cost?', acceptedAnswer: { '@type': 'Answer', text: 'Google Ads management from €400/month, Meta Ads from €300/month. Ad budget is set separately.' } },
        { '@type': 'Question', name: 'Which businesses are suited for online marketing?', acceptedAnswer: { '@type': 'Answer', text: 'Local businesses, service providers, start-ups, online shops and digital brands.' } },
      ],
    },
  ],
};

useHead({
  title: 'Online Marketing Agency | Google Ads, SEO & Social Media | EvolaTec',
  htmlAttrs: { lang: 'en' },
  meta: [
    { name: 'description', content: 'Professional online marketing by EvolaTec. Google Ads, social media marketing and SEO for more reach, leads and revenue.' },
    { name: 'keywords', content: 'online marketing agency, digital marketing agency, Google Ads, SEO agency, social media marketing, performance marketing' },
    { property: 'og:title', content: 'Online Marketing Agency | EvolaTec' },
    { property: 'og:description', content: 'Google Ads, social media marketing and SEO for sustainable digital growth.' },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://evolatec.de/en/online-marketing' },
    { property: 'og:locale', content: 'en_US' },
    { property: 'og:locale:alternate', content: 'de_DE' },
  ],
  link: [
    { rel: 'canonical', href: 'https://evolatec.de/en/online-marketing' },
    ...hreflangLinks.value,
  ],
  script: [{ type: 'application/ld+json', innerHTML: JSON.stringify(schemaMarkup) }],
});

const introParagraphs = [
  'Businesses that are not visible online lose potential customers every day.',
  'Professional online marketing helps build reach, create trust and consistently generate new enquiries.',
  'EvolaTec combines <a href="/en/seo" class="text-primary font-semibold hover:underline">SEO</a>, web development, performance marketing and digital strategies for measurable results.',
];

const introBadge = {
  icon: 'campaign',
  title: 'More Reach',
  subtitle: 'Visible Online',
  iconBg: 'bg-gradient-to-br from-blue-500 to-indigo-600',
};

const whyEvolaTecParagraphs = [
  'Many marketing agencies focus solely on advertising.',
  'EvolaTec combines marketing, <a href="/en/seo" class="text-primary font-semibold hover:underline">SEO</a>, web development, <a href="/en/design-branding" class="text-primary font-semibold hover:underline">branding</a> and technical optimisation into a holistic solution.',
  'The result: websites and marketing strategies that not only look great, but deliver real results.',
];

const whyEvolaTecBadge = {
  icon: 'campaign',
  title: '+180% Leads',
  subtitle: 'more enquiries',
  iconBg: 'bg-gradient-to-br from-blue-500 to-indigo-600',
};

const marketingStats = [
  { value: 'Full Service', label: 'Marketing', icon: 'campaign' },
  { value: 'More Leads', label: 'Generated', icon: 'person_add' },
  { value: 'Performance', label: 'Focused', icon: 'analytics' },
  { value: 'Measurable', label: 'Results', icon: 'trending_up' },
];

const marketingServices = [
  {
    title: 'SEO & Search Engine Optimisation',
    description: 'More visibility on Google through technical SEO, content strategies and sustainable rankings.',
    icon: 'search_insights',
    iconBg: 'bg-blue-100',
    iconColor: 'text-blue-600',
    borderColor: 'border-blue-500',
    href: '/en/seo',
  },
  {
    title: 'Google Ads & Performance Marketing',
    description: 'Conversion-optimised ad campaigns for leads, sales and revenue growth.',
    icon: 'ads_click',
    iconBg: 'bg-orange-100',
    iconColor: 'text-orange-600',
    borderColor: 'border-orange-500',
    href: '/en/google-ads-management',
  },
  {
    title: 'Digital Marketing Strategies',
    description: 'Individual strategies for sustainable digital growth.',
    icon: 'insights',
    iconBg: 'bg-emerald-100',
    iconColor: 'text-emerald-600',
    borderColor: 'border-emerald-500',
    href: '/en/contact',
  },
  {
    title: 'Branding & Positioning',
    description: 'Professional brand identities for greater recognition and trust.',
    icon: 'palette',
    iconBg: 'bg-purple-100',
    iconColor: 'text-purple-600',
    borderColor: 'border-purple-500',
    href: '/en/design-branding',
  },
  {
    title: 'Conversion Optimisation',
    description: 'Optimisation of websites and landing pages for better results.',
    icon: 'conversion_path',
    iconBg: 'bg-rose-100',
    iconColor: 'text-rose-600',
    borderColor: 'border-rose-500',
    href: '/en/contact',
  },
  {
    title: 'Marketing Consulting',
    description: 'Strategic consulting for businesses, start-ups and digital projects.',
    icon: 'support_agent',
    iconBg: 'bg-teal-100',
    iconColor: 'text-teal-600',
    borderColor: 'border-teal-500',
    href: '/en/contact',
  },
];

const marketingBenefits = [
  {
    title: 'More Reach',
    description: 'Professional marketing puts your brand in front of the right audience.',
    icon: 'public',
    bg: 'bg-gradient-to-br from-blue-600 to-blue-800',
    image: '/landing/leads.webp',
  },
  {
    title: 'More Leads',
    description: 'Conversion-optimised strategies generate qualified enquiries.',
    icon: 'person_add',
    bg: 'bg-gradient-to-br from-orange-500 to-amber-600',
    image: '/landing/fast.webp',
  },
  {
    title: 'More Revenue',
    description: 'Data-driven campaigns increase sales and growth.',
    icon: 'trending_up',
    bg: 'bg-gradient-to-br from-emerald-600 to-teal-800',
    image: '/web-development-cost/price.webp',
  },
  {
    title: 'Sustainable Results',
    description: 'Long-term strategies provide stable visibility.',
    icon: 'schedule',
    bg: 'bg-gradient-to-br from-purple-600 to-indigo-800',
    image: '/web-development-cost/tech.webp',
  },
];

const marketingProcess = [
  {
    title: 'Analysis & Strategy',
    description: 'Analysis of your industry, target audience and competitors.',
    icon: 'analytics',
  },
  {
    title: 'Marketing Concept',
    description: 'Development of an individual digital growth strategy.',
    icon: 'lightbulb',
  },
  {
    title: 'Implementation & Campaigns',
    description: 'Execution of SEO, ads, content and conversion measures.',
    icon: 'rocket_launch',
  },
  {
    title: 'Optimisation & Scaling',
    description: 'Continuous improvement and data-driven optimisation.',
    icon: 'tune',
  },
];

const marketingChannels = [
  { title: 'Google SEO', description: 'Organic visibility through search engine optimisation.', icon: 'search_insights', href: '/en/seo' },
  { title: 'Google Ads', description: 'Instant reach through paid search advertising.', icon: 'ads_click', href: '/en/google-ads-management' },
  { title: 'Social Media Marketing', description: 'Reach and brand building on social platforms.', icon: 'groups', href: '/en/social-media-marketing' },
  { title: 'Content Marketing', description: 'SEO content, landing pages and conversion copy.', icon: 'article', href: '/en/website-copywriting' },
];

const whyEvolaTec = [
  {
    title: 'Technical Know-How',
    description: 'Combination of development, SEO and marketing.',
    icon: 'code',
    iconBg: 'bg-blue-100',
    iconColor: 'text-blue-600',
    borderColor: 'border-blue-500',
  },
  {
    title: 'Results Focus',
    description: 'More leads, better rankings and sustainable growth.',
    icon: 'trending_up',
    iconBg: 'bg-emerald-100',
    iconColor: 'text-emerald-600',
    borderColor: 'border-emerald-500',
  },
  {
    title: 'Scalable Strategies',
    description: 'Marketing systems built for long-term success.',
    icon: 'stacked_line_chart',
    iconBg: 'bg-purple-100',
    iconColor: 'text-purple-600',
    borderColor: 'border-purple-500',
  },
];

const consultingItems = [
  { label: 'Online Marketing Consulting', icon: 'support_agent' },
  { label: 'Digital Marketing Strategy', icon: 'business_center' },
  { label: 'Funnel Strategies', icon: 'filter_alt' },
  { label: 'Lead Generation', icon: 'person_add' },
  { label: 'SEO Strategies', icon: 'search_insights' },
  { label: 'Branding & Positioning', icon: 'palette' },
  { label: 'Conversion Optimisation', icon: 'conversion_path' },
  { label: 'Performance Marketing', icon: 'analytics' },
];

const consultingColors = [
  'text-blue-500',
  'text-emerald-500',
  'text-orange-500',
  'text-purple-500',
];

const pricingItems = [
  { name: 'Marketing Consulting', price: 'from €90/hour' },
  { name: 'Google Ads Management', price: 'from €400/month' },
  { name: 'Meta Ads Management', price: 'from €300/month' },
  { name: 'SEO Optimisation', price: 'from €300' },
  { name: 'Creatives & Graphics', price: 'from €150' },
  { name: 'Monthly Reporting', price: 'from €100/month' },
];

const marketingFaqs = [
  {
    question: 'What does an online marketing agency do?',
    answer: 'An online marketing agency develops strategies, campaigns and digital measures for reach, leads and revenue growth.',
  },
  {
    question: 'Which marketing services does EvolaTec offer?',
    answer: 'SEO, Google Ads, branding, content marketing, conversion optimisation and digital strategies.',
  },
  {
    question: 'How much does professional online marketing cost?',
    answer: 'Google Ads management from €400/month, Meta Ads from €300/month. Ad budget is set separately.',
  },
  {
    question: 'Which businesses are suited for online marketing?',
    answer: 'Local businesses, service providers, start-ups, online shops and digital brands.',
  },
];
</script>
