<template>
  <div>
    <!-- Hero Section -->
    <HeroSection
      background-image="https://lh3.googleusercontent.com/aida-public/AB6AXuAS5zdLscgbQtZZEjecvYHDkQXZP1W7c_XfVpQJf0x7AFGBVe8Zk5O1mXCBDSE5gn8F1TBNe5wotsh4kH16_RscWT5Rc-LHZ_Zrodd5Z3EClq_NVJ-zzrrOHgMyB5fy7MRD-BXVJq2DjNKRmFDMcjTe2F6Thx0doN_l6tF4c02FTh-D2VvMLDnMe7Gucrt4z33eG2j18j14Y6tvpuIoqe2CPJmN6HzOY1GgCG0ArrlB_DzDXO1ccXnkh5e0TCDMIkGJGGuIHGSFTEHM"
      badge="Full Service Online Marketing Agentur"
      title="Online Marketing Agentur: Mehr Reichweite, mehr Leads, mehr Umsatz"
      description="EvolaTec entwickelt digitale Marketingstrategien, die Unternehmen sichtbar machen, qualifizierte Leads generieren und nachhaltiges Wachstum schaffen."
      primaryCTA="Marketing Strategie anfragen"
      secondaryCTA="Preise ansehen"
      :stats="marketingStats"
    />

    <!-- Intro Section -->
    <section class="py-section-padding bg-surface">
      <div class="max-w-container-max mx-auto px-gutter">
        <div class="max-w-3xl">
          <h2 class="font-headline-lg text-headline-lg text-primary mb-stack-md">
            Warum modernes Online Marketing entscheidend ist
          </h2>
          <p class="font-body-lg text-body-lg text-on-surface-variant mb-6">
            Unternehmen, die online nicht sichtbar sind, verlieren täglich potenzielle Kunden.
          </p>
          <p class="font-body-lg text-body-lg text-on-surface-variant mb-6">
            Professionelles Online Marketing hilft dabei, Reichweite aufzubauen, Vertrauen zu schaffen und konstant neue Anfragen zu generieren.
          </p>
          <p class="font-body-lg text-body-lg text-on-surface-variant">
            EvolaTec kombiniert <a href="/seo" class="text-primary font-semibold hover:underline">SEO</a>, Webentwicklung, Performance Marketing und digitale Strategien zu messbaren Ergebnissen.
          </p>
        </div>
      </div>
    </section>

    <!-- Services Section -->
    <ServicesSection title="Unsere Online Marketing Leistungen" variant="centered" :services="marketingServices" />

    <!-- Benefits Section -->
    <BenefitsSection title="Vorteile einer professionellen Online Marketing Agentur" :benefits="marketingBenefits" />

    <!-- Process Section -->
    <ProcessSection title="Unser Online Marketing Prozess" :steps="marketingProcess" />

    <!-- Channels Section -->
    <DarkCardsSection
      title="Online Marketing Kanäle für Wachstum"
      :cards="marketingChannels"
    />

    <!-- Why EvolaTec Section -->
    <section class="py-section-padding bg-surface">
      <div class="max-w-container-max mx-auto px-gutter">

        <!-- Image + Text split -->
        <div class="grid md:grid-cols-2 gap-stack-lg items-center mb-stack-lg">
          <div class="relative rounded-3xl overflow-hidden h-80 md:h-96">
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=500&fit=crop"
              alt="Online Marketing Agentur EvolaTec"
              class="w-full h-full object-cover"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent"></div>
            <!-- Floating badge -->
            <div class="absolute bottom-6 left-6 bg-white rounded-2xl px-5 py-3 shadow-xl flex items-center gap-3">
              <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center">
                <span class="material-symbols-outlined text-white text-xl">campaign</span>
              </div>
              <div>
                <div class="font-bold text-primary text-sm">+180% Leads</div>
                <div class="text-on-surface-variant text-xs">mehr Anfragen</div>
              </div>
            </div>
          </div>

          <div>
            <h2 class="font-headline-lg text-headline-lg text-primary mb-stack-md">
              Warum EvolaTec als Online Marketing Agentur?
            </h2>
            <p class="font-body-lg text-body-lg text-on-surface-variant mb-6">
              Viele Marketing Agenturen konzentrieren sich nur auf Werbung.
            </p>
            <p class="font-body-lg text-body-lg text-on-surface-variant mb-6">
              EvolaTec kombiniert Marketing, <a href="/seo" class="text-primary font-semibold hover:underline">SEO</a>, Webentwicklung, <a href="/design-branding" class="text-primary font-semibold hover:underline">Branding</a> und technische Optimierung zu einer ganzheitlichen Lösung.
            </p>
            <p class="font-body-lg text-body-lg text-on-surface-variant">
              Dadurch entstehen Websites und Marketing Strategien, die nicht nur gut aussehen, sondern echte Ergebnisse liefern.
            </p>
          </div>
        </div>

        <div class="grid md:grid-cols-3 gap-gutter">
          <div
            v-for="usp in whyEvolaTec"
            :key="usp.title"
            class="glass-card ambient-shadow bg-white/60 p-8 text-center border-t-4 transition-all duration-300 hover:scale-105"
            :class="usp.borderColor"
          >
            <div class="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-6" :class="usp.iconBg">
              <span class="material-symbols-outlined text-2xl" :class="usp.iconColor">{{ usp.icon }}</span>
            </div>
            <h3 class="font-headline-md text-primary mb-3">{{ usp.title }}</h3>
            <p class="font-body-md text-on-surface-variant">{{ usp.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Consulting/Services List Section -->
    <section class="py-section-padding bg-surface-container-low">
      <div class="max-w-container-max mx-auto px-gutter">
        <div class="grid md:grid-cols-2 gap-stack-lg items-start">
          <div>
            <h2 class="font-headline-lg text-headline-lg text-primary mb-stack-md">
              Marketing Beratung & digitale Strategien
            </h2>
            <p class="font-body-lg text-body-lg text-on-surface-variant mb-6">
              Erfolgreiches Online Marketing basiert auf klaren Strategien und messbaren Zielen.
            </p>
            <p class="font-body-lg text-body-lg text-on-surface-variant mb-8">
              EvolaTec unterstützt Unternehmen bei der Entwicklung moderner Marketingkonzepte, digitaler Wachstumsstrategien und skalierbarer Systeme.
            </p>
            <a href="/kontakt">
              <BaseButton variant="primary" size="lg">Beratung anfragen</BaseButton>
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
        <h2 class="font-headline-lg text-headline-lg text-primary text-center mb-stack-lg">
          Preise für Online Marketing Leistungen
        </h2>
        <p class="text-center font-body-lg text-on-surface-variant mb-stack-lg">
          Transparente Preise für digitales Marketing, SEO und Performance Kampagnen.
        </p>

        <div class="max-w-2xl mx-auto overflow-x-auto">
          <table class="w-full">
            <thead>
              <tr class="border-b-2 border-primary">
                <th class="text-left py-4 px-6 font-headline-md text-primary">Leistung</th>
                <th class="text-right py-4 px-6 font-headline-md text-primary">Preis</th>
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
          <a href="/pricing">
            <BaseButton variant="outline" size="md">Alle Preise ansehen</BaseButton>
          </a>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <FAQSection title="Häufig gestellte Fragen zum Online Marketing" :faqs="marketingFaqs" />

    <!-- Final CTA -->
    <CTASection
      title="Mehr Sichtbarkeit, mehr Leads, mehr Wachstum"
      description="EvolaTec entwickelt moderne Online Marketing Strategien für Unternehmen, die digital wachsen möchten."
      primary-cta="Marketing Projekt starten"
      secondary-cta="Kostenlos beraten lassen"
    />
  </div>
</template>

<script setup lang="ts">
const marketingStats = [
  { value: 'Full Service', label: 'Marketing', icon: 'campaign' },
  { value: 'Mehr Leads', label: 'Generierung', icon: 'person_add' },
  { value: 'Performance', label: 'fokussiert', icon: 'analytics' },
  { value: 'Messbar', label: 'Ergebnisse', icon: 'trending_up' },
];

const marketingServices = [
  {
    title: 'SEO & Suchmaschinenoptimierung',
    description: 'Mehr Sichtbarkeit bei Google durch technische SEO, Content Strategien und nachhaltige Rankings.',
    icon: 'search_insights',
    iconBg: 'bg-blue-100',
    iconColor: 'text-blue-600',
    borderColor: 'border-blue-500',
    href: '/seo',
  },
  {
    title: 'Google Ads & Performance Marketing',
    description: 'Conversion optimierte Werbekampagnen für Leads, Verkäufe und Umsatzwachstum.',
    icon: 'ads_click',
    iconBg: 'bg-orange-100',
    iconColor: 'text-orange-600',
    borderColor: 'border-orange-500',
    href: '/marketing-google-ads',
  },
  {
    title: 'Digitale Marketing Strategien',
    description: 'Individuelle Strategien für nachhaltiges digitales Wachstum.',
    icon: 'insights',
    iconBg: 'bg-emerald-100',
    iconColor: 'text-emerald-600',
    borderColor: 'border-emerald-500',
    href: '/kontakt',
  },
  {
    title: 'Branding & Positionierung',
    description: 'Professionelle Markenauftritte für höhere Wiedererkennbarkeit und Vertrauen.',
    icon: 'palette',
    iconBg: 'bg-purple-100',
    iconColor: 'text-purple-600',
    borderColor: 'border-purple-500',
    href: '/design-branding',
  },
  {
    title: 'Conversion Optimierung',
    description: 'Optimierung von Websites und Landingpages für bessere Ergebnisse.',
    icon: 'conversion_path',
    iconBg: 'bg-rose-100',
    iconColor: 'text-rose-600',
    borderColor: 'border-rose-500',
    href: '/kontakt',
  },
  {
    title: 'Marketing Beratung',
    description: 'Strategische Beratung für Unternehmen, Startups und digitale Projekte.',
    icon: 'support_agent',
    iconBg: 'bg-teal-100',
    iconColor: 'text-teal-600',
    borderColor: 'border-teal-500',
    href: '/kontakt',
  },
];

const marketingBenefits = [
  {
    title: 'Mehr Reichweite',
    description: 'Professionelles Marketing bringt Ihre Marke vor die richtige Zielgruppe.',
    icon: 'public',
    bg: 'bg-gradient-to-br from-blue-600 to-blue-800',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
  },
  {
    title: 'Mehr Leads',
    description: 'Conversion optimierte Strategien generieren qualifizierte Anfragen.',
    icon: 'person_add',
    bg: 'bg-gradient-to-br from-orange-500 to-amber-600',
    image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=600&h=400&fit=crop',
  },
  {
    title: 'Mehr Umsatz',
    description: 'Datenbasierte Kampagnen steigern Verkäufe und Wachstum.',
    icon: 'trending_up',
    bg: 'bg-gradient-to-br from-emerald-600 to-teal-800',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&h=400&fit=crop',
  },
  {
    title: 'Nachhaltige Ergebnisse',
    description: 'Langfristige Strategien sorgen für stabile Sichtbarkeit.',
    icon: 'schedule',
    bg: 'bg-gradient-to-br from-purple-600 to-indigo-800',
    image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&h=400&fit=crop',
  },
];

const marketingProcess = [
  {
    title: 'Analyse & Strategie',
    description: 'Analyse Ihrer Branche, Zielgruppe und Wettbewerber.',
    icon: 'analytics',
  },
  {
    title: 'Marketing Konzept',
    description: 'Entwicklung einer individuellen digitalen Wachstumsstrategie.',
    icon: 'lightbulb',
  },
  {
    title: 'Umsetzung & Kampagnen',
    description: 'Umsetzung von SEO, Ads, Content und Conversion Maßnahmen.',
    icon: 'rocket_launch',
  },
  {
    title: 'Optimierung & Skalierung',
    description: 'Kontinuierliche Verbesserung und datenbasierte Optimierung.',
    icon: 'tune',
  },
];

const marketingChannels = [
  { title: 'Google SEO', description: 'Organische Sichtbarkeit durch Suchmaschinenoptimierung.', icon: 'search_insights', href: '/seo' },
  { title: 'Google Ads', description: 'Sofortige Reichweite durch bezahlte Suchanzeigen.', icon: 'ads_click', href: '/marketing-google-ads' },
  { title: 'Social Media Marketing', description: 'Reichweite und Markenaufbau auf sozialen Plattformen.', icon: 'groups', href: '/marketing-social-media' },
  { title: 'Content Marketing', description: 'SEO Inhalte, Landingpages und Conversion Content.', icon: 'article', href: '/design-content' },
];

const whyEvolaTec = [
  {
    title: 'Technisches Know-how',
    description: 'Kombination aus Entwicklung, SEO und Marketing.',
    icon: 'code',
    iconBg: 'bg-blue-100',
    iconColor: 'text-blue-600',
    borderColor: 'border-blue-500',
  },
  {
    title: 'Fokus auf Ergebnisse',
    description: 'Mehr Leads, bessere Rankings und nachhaltiges Wachstum.',
    icon: 'trending_up',
    iconBg: 'bg-emerald-100',
    iconColor: 'text-emerald-600',
    borderColor: 'border-emerald-500',
  },
  {
    title: 'Skalierbare Strategien',
    description: 'Marketing Systeme, die langfristig funktionieren.',
    icon: 'stacked_line_chart',
    iconBg: 'bg-purple-100',
    iconColor: 'text-purple-600',
    borderColor: 'border-purple-500',
  },
];

const consultingItems = [
  { label: 'Online Marketing Beratung', icon: 'support_agent' },
  { label: 'Digital Marketing Consulting', icon: 'business_center' },
  { label: 'Funnel Strategien', icon: 'filter_alt' },
  { label: 'Leadgenerierung', icon: 'person_add' },
  { label: 'SEO Strategien', icon: 'search_insights' },
  { label: 'Branding & Positionierung', icon: 'palette' },
  { label: 'Conversion Optimierung', icon: 'conversion_path' },
  { label: 'Performance Marketing', icon: 'analytics' },
];

const consultingColors = [
  'text-blue-500',
  'text-emerald-500',
  'text-orange-500',
  'text-purple-500',
];

const pricingItems = [
  { name: 'Marketing Beratung', price: 'ab 90€/Stunde' },
  { name: 'SEO Betreuung', price: 'ab 400€/Monat' },
  { name: 'Google Ads Management', price: 'ab 350€/Monat' },
  { name: 'Performance Marketing', price: 'ab 700€/Monat' },
  { name: 'Full Service Marketing', price: 'ab 1.200€/Monat' },
  { name: 'Marketing Strategie', price: 'ab 600€' },
];

const marketingFaqs = [
  {
    question: 'Was macht eine Online Marketing Agentur?',
    answer:
      'Eine Online Marketing Agentur entwickelt Strategien, Kampagnen und digitale Maßnahmen für Reichweite, Leads und Umsatzwachstum.',
  },
  {
    question: 'Welche Marketing Leistungen bietet EvolaTec?',
    answer:
      'SEO, Google Ads, Branding, Content Marketing, Conversion Optimierung und digitale Strategien.',
  },
  {
    question: 'Was kostet professionelles Online Marketing?',
    answer:
      'Marketing Betreuung beginnt ab 350€ monatlich, Full Service Lösungen ab 1.200€ monatlich.',
  },
  {
    question: 'Für welche Unternehmen eignet sich Online Marketing?',
    answer:
      'Für lokale Unternehmen, Dienstleister, Startups, Onlineshops und digitale Marken.',
  },
];
</script>
