<template>
  <div>
    <!-- Hero Section -->
    <HeroSection
      background-image="/seo/hero.webp"
      badge="Generative Engine Optimization"
      title="GEO Optimization: Visibility in ChatGPT, Gemini & More"
      description="Prepare your website for AI search. GEO optimizes your content for ChatGPT, Google Gemini, Perplexity, and more — included with every EvolaTec website."
      primaryCTA="Free GEO Consultation"
      secondaryCTA="Learn More"
      :stats="geoStats"
    />

    <!-- Trust Section -->
    <TrustSection :companies="trustCompanies" />

    <!-- What is GEO -->
    <section class="py-8 md:py-section-padding bg-surface">
      <div class="max-w-container-max mx-auto px-gutter">
        <div class="grid lg:grid-cols-2 gap-8 md:gap-stack-lg items-center">
          <!-- Left: copy -->
          <div>
            <span class="inline-flex items-center gap-2 rounded-full bg-primary/8 border border-primary/15 px-4 py-2 text-sm font-medium text-primary mb-6">
              <span class="material-symbols-outlined text-[18px]">auto_awesome</span>
              What is GEO?
            </span>
            <h2 class="font-display text-3xl sm:text-4xl md:text-5xl font-black text-on-surface leading-tight mb-6">What is Generative Engine Optimization?</h2>
            <div class="space-y-4 text-on-surface-variant leading-relaxed">
              <p>GEO stands for <strong class="text-on-surface">Generative Engine Optimization</strong> — the evolution of classical SEO for the AI era. While SEO aims to rank in Google search results, GEO optimizes your content to be understood, analyzed, and cited by AI systems like ChatGPT, Google Gemini, or Perplexity.</p>
              <p>Classical Google search is changing rapidly. More and more users are turning to AI assistants for direct answers — without opening dozens of websites. Businesses that don't appear in these AI responses lose visibility and leads to competitors.</p>
              <p>GEO combines technical SEO, semantic content strategies, structured data (Schema.org), fast load times, and AI-readable content into a modern optimization strategy for the next generation of search.</p>
            </div>
          </div>
          <!-- Right: image -->
          <div class="relative">
            <NuxtImg
              src="/seo/section.webp"
              alt="GEO Optimization for AI Search Engines"
              width="640"
              height="427"
              sizes="100vw md:50vw lg:640px"
              loading="lazy"
              class="w-full rounded-2xl object-cover"
            />
            <div class="absolute -bottom-4 -left-4 bg-white rounded-2xl p-4 shadow-xl border border-outline-variant/20">
              <div class="flex items-center gap-3">
                <span class="material-symbols-outlined text-primary text-2xl">verified</span>
                <div>
                  <p class="font-bold text-on-surface text-sm">GEO Included</p>
                  <p class="text-xs text-on-surface-variant">With every EvolaTec website</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- SEO vs GEO Comparison Table -->
    <section class="py-8 md:py-section-padding bg-surface-container-low">
      <div class="max-w-container-max mx-auto px-gutter">
        <div class="text-center mb-8 md:mb-stack-lg">
          <h2 class="font-display text-3xl sm:text-4xl font-black text-on-surface leading-tight">SEO vs. GEO: What's the Difference?</h2>
          <p class="text-on-surface-variant mt-3 max-w-2xl mx-auto">Both strategies complement each other — but GEO is the necessary extension for the AI-driven search of tomorrow.</p>
        </div>
        <div class="overflow-x-auto rounded-2xl border border-outline-variant/30">
          <table class="w-full min-w-[560px] text-sm">
            <thead>
              <tr class="bg-surface-container-low">
                <th class="text-left p-4 font-bold text-on-surface border-b border-outline-variant/30 w-1/4">Criterion</th>
                <th class="text-center p-4 font-bold text-on-surface-variant border-b border-outline-variant/30">Classical SEO</th>
                <th class="text-center p-4 font-bold text-primary bg-primary/5 border-b border-outline-variant/30">GEO (Future)</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(row, i) in seoVsGeoRows" :key="i" :class="i % 2 === 0 ? 'bg-white' : 'bg-surface-container-low/40'">
                <td class="p-4 font-semibold text-on-surface">{{ row.criterion }}</td>
                <td class="p-4 text-center text-on-surface-variant">{{ row.seo }}</td>
                <td class="p-4 text-center text-primary font-semibold bg-primary/5">{{ row.geo }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <FeaturesSection
      title="What GEO Does for Your Business"
      :features="features"
      image-url="/web-development/geoimg.webp"
    />

    <!-- GEO Elements -->
    <ServicesSection
      title="Key Components of Modern GEO Optimization"
      subtitle="These four pillars form the foundation for maximum AI visibility."
      variant="centered"
      :services="geoElements"
    />

    <!-- Process Section -->
    <ProcessSection
      title="How We Optimize Your Website for AI Search"
      :steps="processSteps"
    />

    <!-- Benefits Section -->
    <BenefitsSection
      title="Benefits of GEO for Your Business"
      :benefits="benefits"
    />

    <!-- Pricing Section -->
    <PricingSection
      title="GEO Optimization Pricing"
      subtitle="Transparent pricing for professional AI visibility."
      :pricing-plans="geoPricingPlans"
    />

    <!-- GEO Checklist -->
    <SEOSection
      title="GEO Optimization Is Included with Every Website"
      :features="geoChecklist"
    />

    <!-- FAQ Section -->
    <FAQSection title="Frequently Asked Questions About GEO" :faqs="geoFaqs" />

    <!-- Related Services -->
    <RelatedServicesSection
      eyebrow="Complete Visibility"
      title="GEO Is Part of Our Full Package"
      :services="relatedServices"
    />

    <!-- CTA Section -->
    <CTASection
      title="Get GEO-Ready Now"
      description="Prepare your website for AI search — with a modern GEO strategy, technical performance, and AI-optimized content."
      primary-cta="Free GEO Consultation"
      secondary-cta="View Pricing"
      primary-href="/en/contact"
      secondary-href="/en/website-cost-calculator"
    />
  </div>
</template>

<script setup lang="ts">
import { buildSchema, organizationSchema, websiteSchema, pageSchema } from '~/composables/schema/global'
import { serviceSchema, breadcrumbSchema, faqSchema } from '~/composables/schema/service'

const { hreflangLinks } = useLanguageSwitcher()

const geoFaqs = [
  {
    question: 'What is GEO optimization?',
    answer:
      'GEO (Generative Engine Optimization) is the optimization of websites and content for AI-based search engines like ChatGPT, Google Gemini, Perplexity, and Claude. While SEO targets Google rankings, GEO ensures your website is recognized by AI systems as a relevant source, analyzed, and cited in responses.',
  },
  {
    question: 'What is the difference between SEO and GEO?',
    answer:
      'SEO optimizes for traditional search engines like Google — the goal is rankings in the search results list. GEO goes a step further and optimizes content for AI systems that generate direct answers. GEO uses structured data (Schema.org), semantic content, and AI-readable information architecture. Both strategies complement each other perfectly.',
  },
  {
    question: 'How long does it take for GEO to show results?',
    answer:
      'Technical GEO optimizations like Schema Markup are often processed by AI systems within weeks. A measurable improvement in AI visibility is typically noticeable after 1–3 months. Since GEO metrics are less standardized than SEO metrics, the timeframe varies by industry and competition.',
  },
  {
    question: 'Is GEO included with every EvolaTec website?',
    answer:
      'Yes. Basic GEO optimization is included as standard with every website we develop: Schema.org Markup (FAQ, HowTo, Service, Organization), structured content architecture, and AI-readable metadata. This is not a paid add-on — it is our development standard.',
  },
  {
    question: 'Which AI search engines does GEO optimize for?',
    answer:
      'GEO optimizes for all major AI search systems: ChatGPT (OpenAI), Google AI Overviews, Perplexity, Microsoft Copilot, Claude (Anthropic), and future AI search platforms. The technical foundations — structured data, clear content architecture, performance — apply across all platforms.',
  },
  {
    question: 'What does GEO optimization cost?',
    answer:
      'Basic GEO optimization is included at no extra cost with every EvolaTec website. For in-depth GEO strategies (content architecture optimization, semantic analysis, GEO audits for existing websites), packages are available from €300. We create a concrete proposal after a free initial consultation.',
  },
]

const schemaMarkup = buildSchema(
  organizationSchema(),
  websiteSchema(),
  pageSchema({
    url: 'https://evolatec.de/en/geo',
    name: 'GEO Optimization: Visibility in ChatGPT, Gemini & More | EvolaTec',
    description: 'Generative Engine Optimization (GEO) for businesses. Your website visible in ChatGPT, Google Gemini, Perplexity, and more — included with every website.',
  }),
  serviceSchema({
    id: 'https://evolatec.de/en/geo/#service',
    name: 'GEO Optimization',
    description: 'Generative Engine Optimization — visibility in ChatGPT, Google Gemini, Perplexity, and other AI search engines.',
    url: 'https://evolatec.de/en/geo',
    serviceType: 'Generative Engine Optimization',
    minPrice: 300,
  }),
  breadcrumbSchema([
    { name: 'Home', url: 'https://evolatec.de/en' },
    { name: 'GEO Optimization', url: 'https://evolatec.de/en/geo' },
  ]),
  faqSchema(geoFaqs),
)

useHead({
  title: 'GEO Optimization: Visible in ChatGPT, Gemini & More | EvolaTec',
  meta: [
    {
      name: 'description',
      content: 'Generative Engine Optimization (GEO) for businesses. Your website visible in ChatGPT, Google Gemini, Perplexity, and more — included with every EvolaTec website.',
    },
    {
      name: 'keywords',
      content: 'geo optimization, generative engine optimization, ai search engines, chatgpt visibility, google gemini optimization, ai seo, perplexity visibility',
    },
    { property: 'og:title', content: 'GEO Optimization: Visible in ChatGPT, Gemini & More | EvolaTec' },
    { property: 'og:description', content: 'Prepare your website for AI search — GEO optimization included with every website.' },
    { property: 'og:type', content: 'website' },
  ],
  link: [
    { rel: 'canonical', href: 'https://evolatec.de/en/geo' },
    ...hreflangLinks.value,
  ],
  script: [{ type: 'application/ld+json', innerHTML: JSON.stringify(schemaMarkup) }],
})

const geoStats = [
  { value: 'AI Search', label: 'Growing fast', icon: 'trending_up' },
  { value: '5+', label: 'AI Platforms', icon: 'search' },
  { value: 'Included', label: 'With Every Website', icon: 'verified' },
  { value: 'Future', label: 'Of Search', icon: 'auto_awesome' },
]

const trustCompanies = ['CHATGPT OPTIMIZED', 'GOOGLE GEMINI', 'PERPLEXITY', 'MICROSOFT COPILOT', 'SCHEMA.ORG']

const seoVsGeoRows = [
  { criterion: 'Goal', seo: 'Google Search Results (SERPs)', geo: 'AI Answers & Direct Citations' },
  { criterion: 'Main Method', seo: 'Keywords & Backlinks', geo: 'Semantics, Structure & Schema.org' },
  { criterion: 'Impact', seo: 'Rank in the results list', geo: 'Direct AI recommendation & citation' },
  { criterion: 'Data Format', seo: 'Meta tags, Sitemap', geo: 'FAQ, HowTo, Service Schema' },
  { criterion: 'Target Platforms', seo: 'Google, Bing, Yahoo', geo: 'ChatGPT, Gemini, Perplexity, Claude' },
  { criterion: 'Measurement', seo: 'Rankings, CTR, Traffic', geo: 'AI visibility, citations, brand mentions' },
  { criterion: 'Time Horizon', seo: '3–6 months', geo: '1–3 months' },
  { criterion: 'Status 2026', seo: 'Established, still important', geo: 'Growing, competitive advantage' },
]


const features = [
  {
    icon: 'smart_toy',
    title: 'Visibility in AI Answers',
    description: 'Your website is recognized by ChatGPT, Gemini, and Perplexity as a relevant source and recommended in responses.',
  },
  {
    icon: 'trending_up',
    title: 'Future-Proof Strategy',
    description: 'GEO secures your digital visibility even as classical Google rankings are displaced by AI overviews.',
  },
  {
    icon: 'verified_user',
    title: 'Stronger Brand Authority',
    description: 'Regular mentions in AI answers strengthen your brand as a trusted source in your industry.',
  },
  {
    icon: 'analytics',
    title: 'Better Content Quality',
    description: 'GEO-optimized content is more clearly structured, more readable, and better indexed across all platforms.',
  },
]

const geoElements = [
  {
    title: 'Technical Performance',
    description: 'Fast load times, Core Web Vitals, and clean architecture allow AI systems to crawl your site efficiently.',
    icon: 'speed',
    iconBg: 'bg-blue-100',
    iconBgHover: 'bg-blue-600',
    iconColor: 'text-blue-600',
    href: '/en/contact',
  },
  {
    title: 'Semantic Content',
    description: 'Clear questions & answers, comparison tables, and structured text help AI systems recognize expertise.',
    icon: 'article',
    iconBg: 'bg-purple-100',
    iconBgHover: 'bg-purple-600',
    iconColor: 'text-purple-600',
    href: '/en/contact',
  },
  {
    title: 'Structured Data',
    description: 'Schema.org Markup for FAQ, HowTo, Services, and Organization — machine-readable for LLMs and AI search systems.',
    icon: 'schema',
    iconBg: 'bg-orange-100',
    iconBgHover: 'bg-orange-600',
    iconColor: 'text-orange-600',
    href: '/en/contact',
  },
  {
    title: 'Authority & Trust',
    description: 'High-quality content and a strong brand presence increase the likelihood of being used as an AI source.',
    icon: 'verified',
    iconBg: 'bg-emerald-100',
    iconBgHover: 'bg-emerald-600',
    iconColor: 'text-emerald-600',
    href: '/en/contact',
  },
]

const processSteps = [
  {
    icon: 'search_check',
    title: 'GEO Analysis',
    description: 'We analyze the current AI visibility of your website and identify concrete optimization opportunities.',
  },
  {
    icon: 'account_tree',
    title: 'Content Architecture',
    description: 'Semantic structure, information hierarchy, and clear question-answer formats for LLM comprehension.',
  },
  {
    icon: 'schema',
    title: 'Schema Markup',
    description: 'Implementation of FAQ, HowTo, Service, and Organization schema for machine-readable information.',
  },
  {
    icon: 'edit_document',
    title: 'AI-Optimized Content',
    description: 'Authoritative, clearly structured content that AI systems recognize and cite as a trusted source.',
  },
  {
    icon: 'monitoring',
    title: 'GEO Monitoring',
    description: 'Ongoing review of AI visibility and continuous improvement of GEO performance.',
  },
]

const benefits = [
  {
    icon: 'smart_toy',
    title: 'Visible in ChatGPT & Gemini',
    description: 'Your brand is recommended and directly cited by the most-used AI assistants as a relevant source.',
    bg: 'bg-gradient-to-br from-purple-600 to-indigo-800',
    image: '/main/seo.webp',
  },
  {
    icon: 'trending_up',
    title: 'Sustainable Competitive Advantage',
    description: 'Early GEO investment secures a strong AI visibility position before the competition catches up.',
    bg: 'bg-gradient-to-br from-blue-600 to-blue-800',
    image: '/web-development/geoai.webp',
  },
  {
    icon: 'person_add',
    title: 'Qualified Leads',
    description: 'Users who find your business through AI answers are already informed and ready to buy.',
    bg: 'bg-gradient-to-br from-emerald-600 to-teal-800',
    image: '/web-development/geohandshake.webp',
  },
]

const geoPricingPlans = [
  {
    tier: 'GEO Basic',
    price: 'Included',
    features: [
      'FAQ & Service Schema Markup',
      'Semantic content architecture',
      'Organization Schema',
      'AI-readable metadata',
    ],
    buttonText: 'Request website',
    isHighlighted: false,
  },
  {
    tier: 'GEO Optimization',
    price: 'from €300',
    features: [
      'Everything in Basic',
      'Content architecture audit',
      'HowTo & FAQ expansion',
      'AI visibility check',
    ],
    buttonText: 'Choose package',
    isHighlighted: true,
  },
  {
    tier: 'GEO Management',
    price: 'from €300/month',
    features: [
      'Ongoing optimization',
      'Content updates',
      'Monthly monitoring',
      'Support & consulting',
    ],
    buttonText: 'Book consultation',
    isHighlighted: false,
  },
]

const geoChecklist = [
  'FAQ Schema Markup — machine-readable for all AI systems',
  'HowTo & Service Structured Data (Schema.org)',
  'Semantic content architecture for LLM crawlers',
  'Comparison tables for purchase-decision queries',
  'Authoritative answer content for common user questions',
  'Technical performance (Core Web Vitals, < 1s load time)',
  'Organization & Website Schema for brand authority',
  'Clear information hierarchy with H1–H3 structure',
]

const relatedServices = [
  {
    icon: 'search_insights',
    title: 'SEO Optimization',
    description: 'Professional search engine optimization for more Google rankings and organic traffic — the classic complement to GEO.',
    price: 'from €300',
    href: '/en/seo',
  },
  {
    icon: 'language',
    title: 'Business Website Design',
    description: 'SEO- & GEO-optimized business websites that rank on Google and get cited in AI answers.',
    price: 'from €1,500',
    href: '/en/business-website-design',
  },
  {
    icon: 'article',
    title: 'Landing Page Design',
    description: 'High-converting landing pages with GEO markup and structured data for maximum visibility.',
    price: 'from €500',
    href: '/en/landing-page-design',
  },
]
</script>
