<template>
  <div>
    <!-- Hero Section -->
    <HeroSection
      background-image="/ads/hero.webp"
      badge="Professionelle Google Ads & SEA Agentur"
      title="Google Ads Agentur: Werbung schalten die Klicks & Kunden bringt"
      description="EvolaTec entwickelt leistungsstarke Google Ads Kampagnen, die qualifizierte Besucher, mehr Anfragen und messbares Wachstum generieren."
      primaryCTA="Google Ads anfragen"
      secondaryCTA="Preise ansehen"
      :stats="adsStats"
    />

    <!-- Intro Section -->
    <section class="py-section-padding bg-surface">
      <div class="max-w-container-max mx-auto px-gutter">
        <div class="max-w-3xl">
          <h2 class="font-headline-lg text-headline-lg text-primary mb-stack-md">
            Warum Google Ads für Unternehmen wichtig ist
          </h2>
          <p class="font-body-lg text-body-lg text-on-surface-variant mb-6">
            Google Ads gehört zu den effektivsten Methoden, um sofort sichtbar zu werden und gezielt neue Kunden zu erreichen.
          </p>
          <p class="font-body-lg text-body-lg text-on-surface-variant mb-6">
            Unternehmen können genau dann sichtbar sein, wenn potenzielle Kunden aktiv nach Dienstleistungen, Produkten oder Lösungen suchen.
          </p>
          <p class="font-body-lg text-body-lg text-on-surface-variant">
            Als Google Ads Agentur entwickelt EvolaTec datenbasierte Kampagnen, die Reichweite, Leads und Umsatz steigern. Erfahren Sie mehr über unsere <a href="/online-marketing" class="text-primary font-semibold hover:underline">Online Marketing Leistungen</a>.
          </p>
        </div>
      </div>
    </section>

    <!-- Services Section -->
    <ServicesSection title="Unsere Google Ads Leistungen" variant="centered" :services="adsServices" />

    <!-- Benefits Section -->
    <BenefitsSection title="Vorteile professioneller Google Ads Kampagnen" :benefits="adsBenefits" />

    <!-- Process Section -->
    <ProcessSection title="Unser Google Ads Prozess" :steps="adsProcess" />

    <!-- Campaign Types Section -->
    <DarkCardsSection
      title="Google Werbung für verschiedene Ziele"
      :cards="campaignTypes"
    />

    <!-- Why EvolaTec Section -->
    <section class="py-section-padding bg-surface">
      <div class="max-w-container-max mx-auto px-gutter">

        <!-- Image + Text split -->
        <div class="grid md:grid-cols-2 gap-stack-lg items-center mb-stack-lg">
          <div class="relative rounded-3xl overflow-hidden h-80 md:h-96">
            <img
              src="/landing/leads.webp"
              alt="Google Ads Performance Marketing EvolaTec"
              class="w-full h-full object-cover"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent"></div>
            <!-- Floating badge -->
            <div class="absolute bottom-6 left-6 bg-white rounded-2xl px-5 py-3 shadow-xl flex items-center gap-3">
              <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center">
                <span class="material-symbols-outlined text-white text-xl">ads_click</span>
              </div>
              <div>
                <div class="font-bold text-primary text-sm">+340% ROI</div>
                <div class="text-on-surface-variant text-xs">aus Kampagnen</div>
              </div>
            </div>
          </div>

          <div>
            <h2 class="font-headline-lg text-headline-lg text-primary mb-stack-md">
              Warum EvolaTec als Google Ads Agentur?
            </h2>
            <p class="font-body-lg text-body-lg text-on-surface-variant mb-6">
              Erfolgreiche Google Werbung besteht nicht nur aus Anzeigen.
            </p>
            <p class="font-body-lg text-body-lg text-on-surface-variant mb-6">
              Entscheidend sind Strategie, Nutzererfahrung, Landingpages und kontinuierliche Optimierung.
            </p>
            <p class="font-body-lg text-body-lg text-on-surface-variant">
              EvolaTec kombiniert Google Ads, <a href="/seo" class="text-primary font-semibold hover:underline">SEO</a>, Conversion Optimierung und modernes Webdesign zu leistungsstarken Marketing Systemen.
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

    <!-- Pricing Table Section -->
    <section class="py-section-padding bg-surface-container-low">
      <div class="max-w-container-max mx-auto px-gutter">
        <h2 class="font-headline-lg text-headline-lg text-primary text-center mb-4">
          Preise für Google Ads Betreuung
        </h2>
        <p class="text-center font-body-lg text-on-surface-variant mb-stack-lg">
          Transparente Preise für Google Werbung, SEA Betreuung und Performance Marketing.
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
                class="border-b border-outline-variant/20 hover:bg-surface transition-colors"
              >
                <td class="py-4 px-6 font-body-md text-on-surface">{{ item.name }}</td>
                <td class="py-4 px-6 font-body-md text-primary font-bold text-right">{{ item.price }}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="text-center mt-10">
          <a href="/webseite-kosten-kalkulator">
            <BaseButton variant="outline" size="md">Alle Preise ansehen</BaseButton>
          </a>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <FAQSection title="Häufig gestellte Fragen zu Google Ads" :faqs="adsFaqs" />

    <!-- Final CTA -->
    <CTASection
      title="Mehr Kunden durch professionelle Google Werbung"
      description="EvolaTec entwickelt Google Ads Kampagnen, die sichtbar machen, Leads generieren und Unternehmen wachsen lassen."
      primary-cta="Google Ads starten"
      secondary-cta="Kostenlos beraten lassen"
    />
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Google Ads Agentur – Google Werbung schalten lassen | EvolaTec',
  meta: [
    { name: 'description', content: 'Professionelle Google Ads Kampagnen von EvolaTec. Search, Display & Shopping Ads für mehr Klicks, Leads und messbare Ergebnisse.' },
    { name: 'keywords', content: 'google ads agentur, google werbung schalten lassen, google adwords agentur, google ads kampagne, ppc agentur' },
    { property: 'og:title', content: 'Google Ads Agentur | EvolaTec' },
    { property: 'og:description', content: 'Professionelle Google Ads Kampagnen für mehr Sichtbarkeit und messbare Ergebnisse.' },
    { property: 'og:type', content: 'website' },
  ],
  link: [{ rel: 'canonical', href: 'https://evolatec.de/marketing-google-ads' }],
});

const adsStats = [
  { value: 'Sofort', label: 'Sichtbar', icon: 'visibility' },
  { value: 'Mehr Leads', label: 'Generierung', icon: 'person_add' },
  { value: 'Performance', label: 'fokussiert', icon: 'ads_click' },
  { value: 'Messbar', label: 'Ergebnisse', icon: 'analytics' },
];

const adsServices = [
  {
    title: 'Google Suchanzeigen',
    description: 'Sichtbarkeit bei relevanten Suchanfragen mit conversionstarken Anzeigen.',
    icon: 'ads_click',
    iconBg: 'bg-blue-100',
    iconColor: 'text-blue-600',
    borderColor: 'border-blue-500',
  },
  {
    title: 'Display Werbung',
    description: 'Bannerkampagnen zur Steigerung von Markenbekanntheit und Reichweite.',
    icon: 'image',
    iconBg: 'bg-emerald-100',
    iconColor: 'text-emerald-600',
    borderColor: 'border-emerald-500',
  },
  {
    title: 'Google Shopping Ads',
    description: 'Performance Kampagnen für Onlineshops und E-Commerce Projekte.',
    icon: 'shopping_cart',
    iconBg: 'bg-orange-100',
    iconColor: 'text-orange-600',
    borderColor: 'border-orange-500',
  },
  {
    title: 'Remarketing Kampagnen',
    description: 'Rückgewinnung von Besuchern durch gezielte Anzeigen.',
    icon: 'refresh',
    iconBg: 'bg-purple-100',
    iconColor: 'text-purple-600',
    borderColor: 'border-purple-500',
  },
  {
    title: 'Conversion Optimierung',
    description: 'Optimierung von Anzeigen, Landingpages und Nutzerführung.',
    icon: 'conversion_path',
    iconBg: 'bg-rose-100',
    iconColor: 'text-rose-600',
    borderColor: 'border-rose-500',
  },
  {
    title: 'Google Ads Beratung',
    description: 'Strategische Beratung für Unternehmen und Performance Kampagnen.',
    icon: 'support_agent',
    iconBg: 'bg-teal-100',
    iconColor: 'text-teal-600',
    borderColor: 'border-teal-500',
  },
];

const adsBenefits = [
  {
    title: 'Sofortige Sichtbarkeit',
    description: 'Ihre Anzeigen erscheinen direkt bei relevanten Suchanfragen.',
    icon: 'visibility',
    bg: 'bg-gradient-to-br from-blue-600 to-blue-800',
    image: '/landing/leads.webp',
  },
  {
    title: 'Qualifizierte Leads',
    description: 'Zielgerichtete Werbung erreicht potenzielle Kunden.',
    icon: 'person_add',
    bg: 'bg-gradient-to-br from-orange-500 to-amber-600',
    image: '/ads/benefit.webp',
  },
  {
    title: 'Messbare Ergebnisse',
    description: 'Klicks, Leads und Conversions sind exakt analysierbar.',
    icon: 'analytics',
    bg: 'bg-gradient-to-br from-emerald-600 to-teal-800',
    image: '/web-development-cost/price.webp',
  },
  {
    title: 'Skalierbares Wachstum',
    description: 'Erfolgreiche Kampagnen können kontinuierlich skaliert werden.',
    icon: 'stacked_line_chart',
    bg: 'bg-gradient-to-br from-purple-600 to-indigo-800',
    image: '/web-development-cost/tech.webp',
  },
];

const adsProcess = [
  {
    title: 'Analyse & Strategie',
    description: 'Analyse Ihrer Branche, Zielgruppe und Wettbewerber.',
    icon: 'analytics',
  },
  {
    title: 'Keyword Recherche',
    description: 'Auswahl relevanter Suchbegriffe mit hohem Potenzial.',
    icon: 'search',
  },
  {
    title: 'Kampagnen Erstellung',
    description: 'Erstellung professioneller Anzeigen, Zielgruppen und Landingpages.',
    icon: 'campaign',
  },
  {
    title: 'Optimierung & Skalierung',
    description: 'Laufende Verbesserung für bessere Performance und niedrigere Kosten.',
    icon: 'tune',
  },
];

const campaignTypes = [
  { title: 'Leadgenerierung', description: 'Mehr Anfragen für Dienstleister und Unternehmen.', icon: 'person_add' },
  { title: 'E-Commerce Werbung', description: 'Google Shopping und Performance Kampagnen für Onlineshops.', icon: 'shopping_cart' },
  { title: 'Lokale Werbung', description: 'Google Anzeigen für lokale Unternehmen und regionale Sichtbarkeit.', icon: 'location_on' },
  { title: 'Brand Kampagnen', description: 'Aufbau von Markenbekanntheit und digitaler Reichweite.', icon: 'campaign' },
];

const whyEvolaTec = [
  {
    title: 'Performance Fokus',
    description: 'Zielgerichtete Kampagnen mit Fokus auf Ergebnisse.',
    icon: 'ads_click',
    iconBg: 'bg-blue-100',
    iconColor: 'text-blue-600',
    borderColor: 'border-blue-500',
  },
  {
    title: 'Technische Expertise',
    description: 'Kombination aus Marketing, SEO und Entwicklung.',
    icon: 'code',
    iconBg: 'bg-emerald-100',
    iconColor: 'text-emerald-600',
    borderColor: 'border-emerald-500',
  },
  {
    title: 'Skalierbare Kampagnen',
    description: 'Systeme die langfristig wachsen.',
    icon: 'stacked_line_chart',
    iconBg: 'bg-purple-100',
    iconColor: 'text-purple-600',
    borderColor: 'border-purple-500',
  },
];

const pricingItems = [
  { name: 'Google Ads Beratung', price: 'ab 90€/Stunde' },
  { name: 'Kampagnen Setup', price: 'ab 350€' },
  { name: 'Google Ads Betreuung', price: 'ab 400€/Monat' },
  { name: 'E-Commerce Kampagnen', price: 'ab 700€/Monat' },
  { name: 'Performance Marketing', price: 'ab 1.200€/Monat' },
  { name: 'Landingpage Optimierung', price: 'ab 500€' },
];

const adsFaqs = [
  {
    question: 'Was macht eine Google Ads Agentur?',
    answer: 'Eine Google Ads Agentur erstellt, optimiert und verwaltet Werbekampagnen bei Google.',
  },
  {
    question: 'Wie schnell funktionieren Google Ads?',
    answer: 'Google Werbung kann bereits innerhalb weniger Tage erste Besucher und Leads generieren.',
  },
  {
    question: 'Was kosten Google Ads Kampagnen?',
    answer: 'Die Betreuung beginnt ab 400€ monatlich. Das Werbebudget wird separat festgelegt.',
  },
  {
    question: 'Für welche Unternehmen eignet sich Google Ads?',
    answer: 'Für lokale Unternehmen, Dienstleister, Onlineshops, Startups und B2B Unternehmen.',
  },
];
</script>
