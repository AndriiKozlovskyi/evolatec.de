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
    <IntroSection
      heading="Warum Google Ads für Unternehmen wichtig ist"
      :paragraphs="introParagraphs"
      image="/landing/advertising.webp"
      image-alt="Google Ads Kampagnen EvolaTec"
      :badge="introBadge"
    />

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
    <IntroSection
      data-nav-label="Warum wir"
      data-nav-icon="stars"
      heading="Warum EvolaTec als Google Ads Agentur?"
      :paragraphs="whyEvolaTecParagraphs"
      image="/landing/leads.webp"
      image-alt="Google Ads Performance Marketing EvolaTec"
      :badge="whyEvolaTecBadge"
      :usps="whyEvolaTec"
    />

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

const introParagraphs = [
  'Google Ads gehört zu den effektivsten Methoden, um sofort sichtbar zu werden und gezielt neue Kunden zu erreichen.',
  'Unternehmen können genau dann sichtbar sein, wenn potenzielle Kunden aktiv nach Dienstleistungen, Produkten oder Lösungen suchen.',
  'Als Google Ads Agentur entwickelt EvolaTec datenbasierte Kampagnen, die Reichweite, Leads und Umsatz steigern. Erfahren Sie mehr über unsere <a href="/online-marketing" class="text-primary font-semibold hover:underline">Online Marketing Leistungen</a>.',
];

const introBadge = {
  icon: 'campaign',
  title: 'Sofort sichtbar',
  subtitle: 'bei Google',
  iconBg: 'bg-gradient-to-br from-blue-500 to-indigo-600',
};

const whyEvolaTecParagraphs = [
  'Erfolgreiche Google Werbung besteht nicht nur aus Anzeigen.',
  'Entscheidend sind Strategie, Nutzererfahrung, Landingpages und kontinuierliche Optimierung.',
  'EvolaTec kombiniert Google Ads, <a href="/seo" class="text-primary font-semibold hover:underline">SEO</a>, Conversion Optimierung und modernes Webdesign zu leistungsstarken Marketing Systemen.',
];

const whyEvolaTecBadge = {
  icon: 'ads_click',
  title: '+340% ROI',
  subtitle: 'aus Kampagnen',
  iconBg: 'bg-gradient-to-br from-orange-500 to-red-500',
};

const adsStats = [
  { value: 'Sofort', label: 'Sichtbar', icon: 'visibility' },
  { value: 'Mehr Leads', label: 'Generierung', icon: 'person_add' },
  { value: 'Performance', label: 'fokussiert', icon: 'ads_click' },
  { value: 'Messbar', label: 'Ergebnisse', icon: 'analytics' },
];

const adsServices = [
  {
    title: 'Google Suchanzeigen',
    description: 'Sichtbarkeit bei relevanten Suchanfragen mit konversionsstarken Anzeigen.',
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
