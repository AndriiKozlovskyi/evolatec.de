<template>
  <div>
    <!-- Hero Section -->
    <HeroSection
      background-image="/seo/hero.webp"
      badge="Generative Engine Optimization"
      title="GEO Optimierung: Sichtbarkeit in ChatGPT, Gemini & Co."
      description="Bereiten Sie Ihre Website auf die KI-Suche vor. GEO optimiert Ihre Inhalte für ChatGPT, Google Gemini, Perplexity und Co. — inklusive in jeder Website von EvolaTec."
      primaryCTA="Kostenloses GEO Gespräch"
      secondaryCTA="Mehr erfahren"
      :stats="geoStats"
    />

    <!-- AI Growth Stats Bar -->
    <section class="hidden sm:flex py-10 bg-primary text-on-primary">
      <div class="max-w-container-max mx-auto px-gutter">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 md:divide-x md:divide-white/20 text-center">
          <div v-for="stat in growthStats" :key="stat.label" class="px-4">
            <div class="flex items-center justify-center gap-2 mb-1">
              <span class="material-symbols-outlined text-xl">{{ stat.icon }}</span>
              <span class="text-3xl md:text-4xl font-black">{{ stat.value }}</span>
            </div>
            <p class="text-sm font-semibold">{{ stat.label }}</p>
            <p class="text-xs text-on-primary-container mt-0.5">{{ stat.sublabel }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Was ist GEO -->
    <section class="py-8 md:py-section-padding bg-surface">
      <div class="max-w-container-max mx-auto px-gutter">
        <div class="grid lg:grid-cols-2 gap-8 md:gap-stack-lg items-center">
          <!-- Left: copy -->
          <div>
            <span class="inline-flex items-center gap-2 rounded-full bg-primary/8 border border-primary/15 px-4 py-2 text-sm font-medium text-primary mb-6">
              <span class="material-symbols-outlined text-[18px]">auto_awesome</span>
              Was ist GEO?
            </span>
            <h2 class="font-display text-3xl sm:text-4xl md:text-5xl font-black text-on-surface leading-tight mb-6">Was ist Generative Engine Optimization?</h2>
            <div class="space-y-4 text-on-surface-variant leading-relaxed">
              <p>GEO steht für <strong class="text-on-surface">Generative Engine Optimization</strong> — die Weiterentwicklung klassischer SEO für das KI-Zeitalter. Während SEO darauf abzielt, in Google-Suchergebnissen zu ranken, optimiert GEO Ihre Inhalte dafür, von KI-Systemen wie ChatGPT, Google Gemini oder Perplexity verstanden, analysiert und zitiert zu werden.</p>
              <p>Die klassische Google-Suche verändert sich rasant. Immer mehr Nutzer verwenden KI-Assistenten, um direkte Antworten zu erhalten — ohne dutzende Webseiten zu öffnen. Unternehmen, die in diesen KI-Antworten nicht erscheinen, verlieren Sichtbarkeit und Anfragen an Wettbewerber.</p>
              <p>GEO kombiniert technisches SEO, semantische Content-Strategien, strukturierte Daten (Schema.org), schnelle Ladezeiten und AI-lesbare Inhalte zu einer modernen Optimierungsstrategie für die neue Generation der Suche.</p>
            </div>
          </div>
          <!-- Right: image -->
          <div class="relative">
            <NuxtImg
              src="/seo/section.webp"
              alt="GEO Optimierung für KI-Suchmaschinen"
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
                  <p class="font-bold text-on-surface text-sm">GEO Inklusive</p>
                  <p class="text-xs text-on-surface-variant">Bei jeder Website von EvolaTec</p>
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
          <h2 class="font-display text-3xl sm:text-4xl font-black text-on-surface leading-tight">SEO vs. GEO: Was ist der Unterschied?</h2>
          <p class="text-on-surface-variant mt-3 max-w-2xl mx-auto">Beide Strategien ergänzen sich — aber GEO ist die notwendige Erweiterung für die KI-getriebene Suche von morgen.</p>
        </div>

        <!-- Mobile cards -->
        <div class="md:hidden space-y-3">
          <div v-for="(row, i) in seoVsGeoRows" :key="i" class="bg-white rounded-xl border border-outline-variant/30 p-4">
            <p class="text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-3">{{ row.criterion }}</p>
            <div class="grid grid-cols-2 gap-2">
              <div class="bg-surface-container-low rounded-lg p-3 text-center">
                <p class="text-[10px] font-semibold uppercase tracking-wide text-on-surface-variant mb-1.5">Klassisches SEO</p>
                <p class="text-xs text-on-surface-variant leading-snug">{{ row.seo }}</p>
              </div>
              <div class="bg-primary/5 rounded-lg p-3 text-center">
                <p class="text-[10px] font-semibold uppercase tracking-wide text-primary mb-1.5">GEO</p>
                <p class="text-xs text-primary font-semibold leading-snug">{{ row.geo }}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Desktop table -->
        <div class="hidden md:block overflow-x-auto rounded-2xl border border-outline-variant/30">
          <table class="w-full text-sm">
            <thead>
              <tr class="bg-surface-container-low">
                <th class="text-left p-4 font-bold text-on-surface border-b border-outline-variant/30 w-1/4">Kriterium</th>
                <th class="text-center p-4 font-bold text-on-surface-variant border-b border-outline-variant/30">Klassisches SEO</th>
                <th class="text-center p-4 font-bold text-primary bg-primary/5 border-b border-outline-variant/30">GEO (Zukunft)</th>
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
      title="Was GEO für Ihr Unternehmen bewirkt"
      :features="features"
      image-url="/web-development/seo.webp"
    />

    <!-- AI Search Platforms Statistics -->
    <section class="py-8 md:py-section-padding bg-surface-container-low">
      <div class="max-w-container-max mx-auto px-gutter">
        <div class="text-center mb-8 md:mb-stack-lg">
          <h2 class="font-display text-3xl sm:text-4xl font-black text-on-surface leading-tight">KI-Suchmaschinen wachsen rasant</h2>
          <p class="text-on-surface-variant mt-3 max-w-2xl mx-auto">Die Zahlen zeigen: AI-gestützte Suche ist kein Trend — sie ist die neue Realität.</p>
        </div>

        <!-- Mobile cards -->
        <div class="md:hidden space-y-3">
          <div v-for="(row, i) in aiStatsRows" :key="i" class="bg-white rounded-xl border border-outline-variant/30 p-4">
            <p class="font-bold text-on-surface mb-3">{{ row.platform }}</p>
            <div class="flex justify-between items-center text-sm mb-2">
              <span class="text-on-surface-variant text-xs">Monatliche Nutzer</span>
              <span class="text-on-surface font-semibold text-xs">{{ row.users }}</span>
            </div>
            <div class="flex justify-between items-center text-sm mb-3">
              <span class="text-on-surface-variant text-xs">Wachstum</span>
              <span class="inline-flex items-center gap-1 text-emerald-600 font-semibold text-xs">
                <span class="material-symbols-outlined text-sm">trending_up</span>
                {{ row.growth }}
              </span>
            </div>
            <div class="pt-2.5 border-t border-outline-variant/20">
              <p class="text-xs text-on-surface-variant leading-snug">{{ row.relevance }}</p>
            </div>
          </div>
        </div>

        <!-- Desktop table -->
        <div class="hidden md:block overflow-x-auto rounded-2xl border border-outline-variant/30">
          <table class="w-full text-sm">
            <thead>
              <tr class="bg-surface-container-low">
                <th class="text-left p-4 font-bold text-on-surface border-b border-outline-variant/30">Plattform</th>
                <th class="text-center p-4 font-bold text-on-surface border-b border-outline-variant/30">Monatliche Nutzer</th>
                <th class="text-center p-4 font-bold text-on-surface border-b border-outline-variant/30">Wachstum</th>
                <th class="text-left p-4 font-bold text-on-surface border-b border-outline-variant/30">GEO-Relevanz</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(row, i) in aiStatsRows" :key="i" :class="i % 2 === 0 ? 'bg-white' : 'bg-surface-container-low/40'">
                <td class="p-4 font-semibold text-on-surface">{{ row.platform }}</td>
                <td class="p-4 text-center text-on-surface-variant">{{ row.users }}</td>
                <td class="p-4 text-center">
                  <span class="inline-flex items-center gap-1 text-emerald-600 font-semibold">
                    <span class="material-symbols-outlined text-sm">trending_up</span>
                    {{ row.growth }}
                  </span>
                </td>
                <td class="p-4 text-on-surface-variant">{{ row.relevance }}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p class="text-center text-xs text-on-surface-variant mt-4">Quellen: Statista, OpenAI, Google Trends 2024/2025. Angaben sind Schätzwerte.</p>
      </div>
    </section>

    <!-- GEO Elements -->
    <ServicesSection
      title="Wichtige Bestandteile moderner GEO Optimierung"
      subtitle="Diese vier Säulen bilden die Grundlage für maximale KI-Sichtbarkeit."
      variant="centered"
      :services="geoElements"
    />

    <!-- Process Section -->
    <ProcessSection
      title="So optimieren wir Ihre Website für KI-Suche"
      :steps="processSteps"
    />

    <!-- Benefits Section -->
    <BenefitsSection
      title="Vorteile von GEO für Ihr Unternehmen"
      :benefits="benefits"
    />

    <!-- GEO Checklist -->
    <SEOSection
      title="GEO-Optimierung ist in jeder Website inklusive"
      :features="geoChecklist"
    />

    <!-- FAQ Section -->
    <FAQSection title="Häufig gestellte Fragen zur GEO Optimierung" :faqs="geoFaqs" />

    <!-- Related Services -->
    <RelatedServicesSection
      eyebrow="Vollständige Sichtbarkeit"
      title="GEO ist Teil unseres Gesamtpakets"
      :services="relatedServices"
    />

    <!-- CTA Section -->
    <CTASection
      title="Jetzt GEO-ready werden"
      description="Bereiten Sie Ihre Website auf die KI-Suche vor — mit moderner GEO-Strategie, technischer Performance und AI-optimierten Inhalten."
      primary-cta="Kostenloses GEO Gespräch"
      secondary-cta="Preise ansehen"
      primary-href="/kontakt"
      secondary-href="/webseite-kosten-kalkulator"
    />
  </div>
</template>

<script setup lang="ts">
import { buildSchema, organizationSchema, websiteSchema, pageSchema } from '~/composables/schema/global'
import { serviceSchema, breadcrumbSchema, faqSchema } from '~/composables/schema/service'

const { hreflangLinks } = useLanguageSwitcher()

const geoFaqs = [
  {
    question: 'Was ist GEO Optimierung?',
    answer:
      'GEO (Generative Engine Optimization) ist die Optimierung von Websites und Inhalten für KI-basierte Suchmaschinen wie ChatGPT, Google Gemini, Perplexity und Claude. Während SEO auf Google-Rankings abzielt, sorgt GEO dafür, dass Ihre Website von KI-Systemen als relevante Quelle erkannt, analysiert und in Antworten zitiert wird.',
  },
  {
    question: 'Was ist der Unterschied zwischen SEO und GEO?',
    answer:
      'SEO optimiert für klassische Suchmaschinen wie Google — Ziel sind Rankings in der Suchergebnisliste. GEO geht einen Schritt weiter und optimiert Inhalte für KI-Systeme, die direkte Antworten generieren. GEO nutzt strukturierte Daten (Schema.org), semantische Inhalte und AI-lesbare Informationsarchitektur. Beide Strategien ergänzen sich optimal.',
  },
  {
    question: 'Wie lange dauert es, bis GEO Ergebnisse zeigt?',
    answer:
      'Technische GEO-Optimierungen wie Schema Markup werden von KI-Systemen oft innerhalb von Wochen verarbeitet. Eine messbare Verbesserung der KI-Sichtbarkeit ist typischerweise nach 1–3 Monaten feststellbar. Da GEO-Metriken noch weniger standardisiert sind als SEO-Metriken, variiert der Zeitrahmen je nach Branche und Wettbewerb.',
  },
  {
    question: 'Ist GEO bei jeder Website von EvolaTec inklusive?',
    answer:
      'Ja. GEO-Grundoptimierung ist in jeder Website, die wir entwickeln, standardmäßig enthalten: Schema.org Markup (FAQ, HowTo, Service, Organization), strukturierte Inhaltsarchitektur und KI-lesbare Metadaten. Dies ist kein kostenpflichtiger Add-on, sondern unser Entwicklungsstandard.',
  },
  {
    question: 'Für welche KI-Suchmaschinen optimiert GEO?',
    answer:
      'GEO optimiert für alle großen KI-Suchsysteme: ChatGPT (OpenAI), Google AI Overviews, Perplexity, Microsoft Copilot, Claude (Anthropic) und zukünftige KI-Suchplattformen. Die technischen Grundlagen — strukturierte Daten, klare Inhaltsarchitektur, Performance — gelten plattformübergreifend.',
  },
  {
    question: 'Was kostet GEO Optimierung?',
    answer:
      'GEO-Grundoptimierung ist bei jeder Website von EvolaTec ohne Aufpreis inklusive. Für tiefergehende GEO-Strategien (Content-Architektur-Optimierung, semantische Analyse, GEO-Audit bestehender Websites) sind Pakete ab 300€ verfügbar. Ein konkretes Angebot erstellen wir nach einem kostenlosen Erstgespräch.',
  },
]

const schemaMarkup = buildSchema(
  organizationSchema(),
  websiteSchema(),
  pageSchema({
    url: 'https://evolatec.de/geo',
    name: 'GEO Optimierung: Sichtbarkeit in ChatGPT, Gemini & Co. | EvolaTec',
    description: 'Generative Engine Optimization (GEO) für Unternehmen. Ihre Website sichtbar in ChatGPT, Google Gemini, Perplexity und Co. — inklusive in jeder Website.',
  }),
  serviceSchema({
    id: 'https://evolatec.de/geo/#service',
    name: 'GEO Optimierung',
    description: 'Generative Engine Optimization — Sichtbarkeit in ChatGPT, Google Gemini, Perplexity und anderen KI-Suchmaschinen.',
    url: 'https://evolatec.de/geo',
    serviceType: 'Generative Engine Optimization',
    minPrice: 300,
  }),
  breadcrumbSchema([
    { name: 'Home', url: 'https://evolatec.de' },
    { name: 'GEO Optimierung', url: 'https://evolatec.de/geo' },
  ]),
  faqSchema(geoFaqs),
)

useHead({
  title: 'GEO Optimierung: Sichtbar in ChatGPT, Gemini & Co. | EvolaTec',
  meta: [
    {
      name: 'description',
      content: 'Generative Engine Optimization (GEO) für Unternehmen. Ihre Website sichtbar in ChatGPT, Google Gemini, Perplexity und Co. — inklusive in jeder Website von EvolaTec.',
    },
    {
      name: 'keywords',
      content: 'geo optimierung, generative engine optimization, ki suchmaschinen, chatgpt sichtbarkeit, google gemini optimierung, ai seo, perplexity sichtbarkeit',
    },
    { property: 'og:title', content: 'GEO Optimierung: Sichtbar in ChatGPT, Gemini & Co. | EvolaTec' },
    { property: 'og:description', content: 'Bereiten Sie Ihre Website auf die KI-Suche vor — GEO-Optimierung inklusive in jeder Website.' },
    { property: 'og:type', content: 'website' },
  ],
  link: [
    { rel: 'canonical', href: 'https://evolatec.de/geo' },
    ...hreflangLinks.value,
  ],
  script: [{ type: 'application/ld+json', innerHTML: JSON.stringify(schemaMarkup) }],
})

const geoStats = [
  { value: '200M+', label: 'ChatGPT Nutzer/Woche', icon: 'smart_toy' },
  { value: '+300%', label: 'AI-Suchanfragen YoY', icon: 'trending_up' },
  { value: '5 Engines', label: 'KI-Plattformen', icon: 'search' },
  { value: 'Inklusive', label: 'Bei jeder Website', icon: 'verified' },
]

const growthStats = [
  { value: '200M+', label: 'ChatGPT Nutzer / Woche', sublabel: 'OpenAI, 2024', icon: 'smart_toy' },
  { value: '+300%', label: 'AI-Suchanfragen', sublabel: 'Wachstum 2023–2025', icon: 'trending_up' },
  { value: '40%', label: 'Suchanfragen', sublabel: 'Nutzen AI Overviews (Google)', icon: 'search' },
  { value: '2026', label: 'KI-Suche wird Standard', sublabel: 'Analystenschätzung', icon: 'calendar_today' },
]

const seoVsGeoRows = [
  { criterion: 'Ziel', seo: 'Google Suchergebnisse (SERPs)', geo: 'KI-Antworten & direkte Zitate' },
  { criterion: 'Hauptmethode', seo: 'Keywords & Backlinks', geo: 'Semantik, Struktur & Schema.org' },
  { criterion: 'Wirkung', seo: 'Rang in der Trefferliste', geo: 'Direkte KI-Empfehlung & Quellenangabe' },
  { criterion: 'Datenformat', seo: 'Meta-Tags, Sitemap', geo: 'FAQ, HowTo, Service Schema' },
  { criterion: 'Zielplattformen', seo: 'Google, Bing, Yahoo', geo: 'ChatGPT, Gemini, Perplexity, Claude' },
  { criterion: 'Erfolgsmessung', seo: 'Rankings, CTR, Traffic', geo: 'AI-Sichtbarkeit, Zitate, Brand Mentions' },
  { criterion: 'Zeithorizont', seo: '3–6 Monate', geo: '1–3 Monate' },
  { criterion: 'Status 2026', seo: 'Etabliert, weiter wichtig', geo: 'Wachsend, Wettbewerbsvorteil' },
]

const aiStatsRows = [
  { platform: 'ChatGPT (OpenAI)', users: '200 Mio.+ / Woche', growth: '+100% YoY', relevance: 'Direktanfragen, Produktvergleiche, Empfehlungen' },
  { platform: 'Google AI Overviews', users: '1 Mrd.+ Suchen / Tag', growth: 'Neu 2024', relevance: 'Zeigt Quellen direkt über der Suchergebnisliste' },
  { platform: 'Perplexity', users: '15 Mio.+ / Monat', growth: '+200% YoY', relevance: 'Zitiert Websites namentlich als Quellen' },
  { platform: 'Microsoft Copilot', users: '100 Mio.+ / Monat', growth: '+150% YoY', relevance: 'Business-Suche & Office-Integration' },
  { platform: 'Claude (Anthropic)', users: '50 Mio.+ / Monat', growth: 'Stark wachsend', relevance: 'Textbasierte Recherche & tiefe Analysen' },
]

const features = [
  {
    icon: 'smart_toy',
    title: 'Sichtbarkeit in KI-Antworten',
    description: 'Ihre Website wird von ChatGPT, Gemini und Perplexity als relevante Quelle erkannt und in Antworten empfohlen.',
  },
  {
    icon: 'trending_up',
    title: 'Zukunftssichere Strategie',
    description: 'GEO sichert Ihre digitale Sichtbarkeit auch dann, wenn klassische Google-Rankings durch KI-Overviews verdrängt werden.',
  },
  {
    icon: 'verified_user',
    title: 'Stärkere Markenautorität',
    description: 'Regelmäßige Erwähnungen in KI-Antworten stärken Ihre Marke als vertrauenswürdige Quelle in Ihrer Branche.',
  },
  {
    icon: 'analytics',
    title: 'Bessere Content-Qualität',
    description: 'GEO-optimierte Inhalte sind klarer strukturiert, besser lesbar und für alle Plattformen besser indexierbar.',
  },
]

const geoElements = [
  {
    title: 'Technische Performance',
    description: 'Schnelle Ladezeiten, Core Web Vitals und saubere Architektur ermöglichen KI-Systemen effizientes Crawlen.',
    icon: 'speed',
    iconBg: 'bg-blue-100',
    iconBgHover: 'bg-blue-600',
    iconColor: 'text-blue-600',
    href: '/kontakt',
  },
  {
    title: 'Semantische Inhalte',
    description: 'Klare Fragen & Antworten, Vergleichstabellen und strukturierte Texte helfen KI-Systemen, Expertise zu erkennen.',
    icon: 'article',
    iconBg: 'bg-purple-100',
    iconBgHover: 'bg-purple-600',
    iconColor: 'text-purple-600',
    href: '/kontakt',
  },
  {
    title: 'Strukturierte Daten',
    description: 'Schema.org Markup für FAQ, HowTo, Services und Organization — maschinenlesbar für LLMs und KI-Suchsysteme.',
    icon: 'schema',
    iconBg: 'bg-orange-100',
    iconBgHover: 'bg-orange-600',
    iconColor: 'text-orange-600',
    href: '/kontakt',
  },
  {
    title: 'Autorität & Vertrauen',
    description: 'Hochwertiger Content und starke Markenpräsenz erhöhen die Wahrscheinlichkeit, als KI-Quelle genutzt zu werden.',
    icon: 'verified',
    iconBg: 'bg-emerald-100',
    iconBgHover: 'bg-emerald-600',
    iconColor: 'text-emerald-600',
    href: '/kontakt',
  },
]

const processSteps = [
  {
    icon: 'search_check',
    title: 'GEO Analyse',
    description: 'Wir analysieren die aktuelle KI-Sichtbarkeit Ihrer Website und identifizieren konkrete Optimierungspotenziale.',
  },
  {
    icon: 'account_tree',
    title: 'Content-Architektur',
    description: 'Semantische Struktur, Informationshierarchie und klare Frage-Antwort-Formate für LLM-Verständnis.',
  },
  {
    icon: 'schema',
    title: 'Schema Markup',
    description: 'Implementierung von FAQ, HowTo, Service- und Organization-Schema für maschinenlesbare Informationen.',
  },
  {
    icon: 'edit_document',
    title: 'AI-optimierte Inhalte',
    description: 'Autoritative, klar strukturierte Inhalte, die KI-Systeme als vertrauenswürdige Quelle erkennen und zitieren.',
  },
  {
    icon: 'monitoring',
    title: 'GEO Monitoring',
    description: 'Laufende Überprüfung der KI-Sichtbarkeit und kontinuierliche Verbesserung der GEO-Performance.',
  },
]

const benefits = [
  {
    icon: 'smart_toy',
    title: 'Sichtbar in ChatGPT & Gemini',
    description: 'Ihre Marke wird von den meistgenutzten KI-Assistenten als relevante Quelle empfohlen und direkt zitiert.',
    bg: 'bg-gradient-to-br from-purple-600 to-indigo-800',
    image: '/main/seo.webp',
  },
  {
    icon: 'trending_up',
    title: 'Nachhaltiger Wettbewerbsvorteil',
    description: 'Frühe GEO-Investitionen sichern eine starke Position in der KI-Sichtbarkeit, bevor der Wettbewerb aufholt.',
    bg: 'bg-gradient-to-br from-blue-600 to-blue-800',
    image: '/web-development/seo.webp',
  },
  {
    icon: 'person_add',
    title: 'Qualifizierte Anfragen',
    description: 'Nutzer, die über KI-Antworten auf Ihr Unternehmen stoßen, sind bereits informiert und kaufbereit.',
    bg: 'bg-gradient-to-br from-emerald-600 to-teal-800',
    image: '/landing/seo.webp',
  },
]

const geoChecklist = [
  'FAQ Schema Markup — maschinenlesbar für alle KI-Systeme',
  'HowTo & Service Structured Data (Schema.org)',
  'Semantische Inhaltsarchitektur für LLM-Crawler',
  'Comparison-Tables für Kaufentscheidungs-Anfragen',
  'Autoritative Antwort-Inhalte auf häufige Nutzerfragen',
  'Technische Performance (Core Web Vitals, < 1s Ladezeit)',
  'Organization & Website Schema für Markenautorität',
  'Klare Informationshierarchie mit H1–H3-Struktur',
]

const relatedServices = [
  {
    icon: 'search_insights',
    title: 'SEO Optimierung',
    description: 'Professionelle Suchmaschinenoptimierung für mehr Google-Rankings und organischen Traffic — die klassische Ergänzung zu GEO.',
    price: 'ab 300 €',
    href: '/seo',
  },
  {
    icon: 'language',
    title: 'Firmenwebsite erstellen lassen',
    description: 'SEO- & GEO-optimierte Firmenwebsites, die bei Google ranken und in KI-Antworten zitiert werden.',
    price: 'ab 1.500 €',
    href: '/firmenwebsite-erstellen-lassen',
  },
  {
    icon: 'article',
    title: 'Landingpage erstellen lassen',
    description: 'Conversion-starke Landingpages mit GEO-Markup und strukturierten Daten für maximale Sichtbarkeit.',
    price: 'ab 500 €',
    href: '/landingpage-erstellen-lassen',
  },
]
</script>
