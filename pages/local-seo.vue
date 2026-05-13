<template>
  <div>
    <HeroSection
      background-image="/seo/local.webp"
      badge="Local SEO Agentur"
      title="Lokales SEO: Werden Sie in Ihrer Region bei Google gefunden"
      description="Wir helfen Unternehmen, lokal bei Google sichtbar zu werden. Mehr regionale Kunden, bessere Google Maps Rankings und mehr Anfragen aus Ihrer Umgebung."
      primaryCTA="Kostenloses SEO Gespräch"
      secondaryCTA="Local SEO Preise ansehen"
      :stats="localStats"
    />

    <TrustSection :companies="trustCompanies" />

    <!-- Stats Cards -->
    <section class="py-section-padding bg-surface">
      <div class="max-w-container-max mx-auto px-gutter">
        <div class="text-center max-w-2xl mx-auto mb-stack-lg">
          <h2 class="font-display text-3xl sm:text-4xl md:text-5xl font-black leading-tight">Warum lokales SEO wichtig ist</h2>
          <p class="text-body-lg text-on-surface-variant mt-4">Kunden suchen lokal — werden Sie gefunden.</p>
        </div>
        <div class="max-w-4xl mx-auto grid md:grid-cols-3 gap-gutter">
          <div class="glass-card border border-black/10 p-10 text-center rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105 group">
            <span class="material-symbols-outlined text-[3.5rem] mb-4 text-primary group-hover:scale-110 transition-transform duration-300">phone</span>
            <div class="font-display text-[3rem] font-black text-primary mb-3">80%</div>
            <p class="font-body-md text-on-surface-variant">der lokalen Suchanfragen führen zu einer Kontaktaufnahme.</p>
          </div>
          <div class="glass-card border border-black/10 p-10 text-center rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105 group">
            <span class="material-symbols-outlined text-[3.5rem] mb-4 text-primary group-hover:scale-110 transition-transform duration-300">location_on</span>
            <div class="font-display text-[2rem] font-black text-primary mb-3">Google Maps</div>
            <p class="font-body-md text-on-surface-variant">ist entscheidend für lokale Sichtbarkeit und Neukundengewinnung.</p>
          </div>
          <div class="glass-card border border-black/10 p-10 text-center rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105 group">
            <span class="material-symbols-outlined text-[3.5rem] mb-4 text-primary group-hover:scale-110 transition-transform duration-300">verified_user</span>
            <div class="font-display text-[2rem] font-black text-primary mb-3">Mehr Vertrauen</div>
            <p class="font-body-md text-on-surface-variant">durch lokale Rankings und positive Kundenbewertungen.</p>
          </div>
        </div>
      </div>
    </section>

    <BenefitsSection
      title="Vorteile von Local SEO für Ihr Unternehmen"
      :benefits="benefits"
    />

    <ProcessSection
      title="So funktioniert unser lokales SEO"
      :steps="processSteps"
    />

    <FeaturesSection
      title="Unsere Leistungen für lokales SEO"
      :features="features"
      image-url="/web-development/seo.webp"
    />

    <PricingSection
      title="Preise für Local SEO"
      subtitle="Transparente Preise für professionelle lokale SEO Optimierung."
      :pricing-plans="localPricingPlans"
    />

    <SEOSection
      title="Local SEO für alle Branchen"
      :features="industries"
    />

    <FAQSection title="Häufig gestellte Fragen zu Local SEO" :faqs="localFaqs" />

    <CTASection
      title="Mehr lokale Kunden gewinnen"
      description="Werden Sie in Ihrer Region bei Google sichtbar und gewinnen Sie mehr Anfragen."
      primary-cta="Local SEO starten"
      secondary-cta="Kostenlos beraten lassen"
    />
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Local SEO Agentur – Lokal bei Google gefunden werden | EvolaTec',
  meta: [
    { name: 'description', content: 'Professionelle Local SEO Agentur für mehr regionale Sichtbarkeit bei Google und Google Maps. Local SEO ab 250€.' },
  ],
  link: [
    { rel: 'canonical', href: 'https://evolatec.de/local-seo' },
  ],
});

const localStats = [
  { value: '+80%', label: 'Kontaktrate', icon: 'phone' },
  { value: 'Google Maps', label: 'Optimiert', icon: 'location_on' },
  { value: 'Regional', label: 'Sichtbar', icon: 'public' },
  { value: 'Mehr Kunden', label: 'Lokal', icon: 'trending_up' },
];

const trustCompanies = ['GOOGLE MAPS', 'LOCAL SEARCH', 'REGIONALE SEO', 'GOOGLE BUSINESS'];

const benefits = [
  {
    icon: 'location_on',
    title: 'Google Maps Präsenz',
    description: 'Optimierung Ihres Google Business Profils für bessere Platzierungen in Google Maps und der lokalen Suche.',
    bg: 'bg-gradient-to-br from-blue-600 to-blue-800',
    image: '/main/seo.webp',
  },
  {
    icon: 'people',
    title: 'Mehr regionale Kunden',
    description: 'Sichtbarkeit bei lokalen Suchanfragen bringt qualifizierte Kunden direkt aus Ihrer Umgebung.',
    bg: 'bg-gradient-to-br from-emerald-600 to-teal-800',
    image: '/landing/seo.webp',
  },
  {
    icon: 'star',
    title: 'Bewertungen & Vertrauen',
    description: 'Strategisches Bewertungsmanagement stärkt Ihr lokales Profil und das Vertrauen potenzieller Kunden.',
    bg: 'bg-gradient-to-br from-amber-500 to-orange-600',
    image: '/web-development/seo.webp',
  },
];

const processSteps = [
  {
    icon: 'search',
    title: 'Lokale Analyse',
    description: 'Analyse Ihrer lokalen Sichtbarkeit, Konkurrenten und Keyword-Potenziale in der Region.',
  },
  {
    icon: 'storefront',
    title: 'Google Business Setup',
    description: 'Vollständige Optimierung Ihres Google Business Profils für maximale Sichtbarkeit.',
  },
  {
    icon: 'edit_document',
    title: 'Keyword Optimierung',
    description: 'Optimierung auf regionale Suchbegriffe und lokale Suchintentionen Ihrer Zielgruppe.',
  },
  {
    icon: 'article',
    title: 'Content & Struktur',
    description: 'Erstellung regional optimierter Inhalte, Standortseiten und strukturierter Daten.',
  },
  {
    icon: 'trending_up',
    title: 'Ranking Wachstum',
    description: 'Laufendes Monitoring, Reporting und Optimierung für mehr lokale Sichtbarkeit.',
  },
];

const features = [
  {
    icon: 'location_on',
    title: 'Google Maps Optimierung',
    description: 'Professionelle Optimierung Ihres Google Business Profils für bessere lokale Rankings.',
  },
  {
    icon: 'engineering',
    title: 'Technische Local SEO',
    description: 'Strukturierte Daten, lokale Landingpages und technische Optimierung.',
  },
  {
    icon: 'star',
    title: 'Bewertungsmanagement',
    description: 'Strategien für bessere Google Bewertungen und mehr Vertrauen.',
  },
  {
    icon: 'analytics',
    title: 'Local SEO Reporting',
    description: 'Monitoring lokaler Rankings, Sichtbarkeit und Kundenanfragen.',
  },
];

const localPricingPlans = [
  {
    tier: 'Google Business Optimierung',
    price: 'ab 250 €',
    features: ['Profil Optimierung', 'Fotos & Beschreibung', 'Kategorie & Attribute', 'Erstes Ranking'],
    buttonText: 'Profil optimieren',
    isHighlighted: false,
  },
  {
    tier: 'Basis Local SEO',
    price: 'ab 500 €',
    features: ['Maps + Website', 'Lokale Keywords', 'Struktur & Content', 'Implementierungsplan'],
    buttonText: 'Projekt starten',
    isHighlighted: true,
  },
  {
    tier: 'Monatliche Local SEO Betreuung',
    price: 'ab 300 €/Monat',
    features: ['Laufende Optimierung', 'Ranking Monitoring', 'Bewertungsmanagement', 'Monatliche Reports'],
    buttonText: 'Betreuung buchen',
    isHighlighted: false,
  },
];

const industries = [
  'Restaurants & Cafés',
  'Ärzte & Kliniken',
  'Handwerker & Bauunternehmen',
  'Immobilienunternehmen',
  'Lokale Dienstleister',
  'Fitnessstudios & Coaches',
  'Kanzleien & Berater',
  'Einzelhandel & Shops',
];

const localFaqs = [
  { question: 'Was ist Local SEO?', answer: 'Local SEO optimiert Unternehmen für lokale Suchanfragen und Google Maps. Ziel ist es, dass Sie in Ihrer Region bei Google gefunden werden.' },
  { question: 'Wie lange dauert Local SEO?', answer: 'Erste Verbesserungen sind oft nach wenigen Wochen sichtbar. Nachhaltige Ergebnisse entstehen über mehrere Monate.' },
  { question: 'Was kostet lokales SEO?', answer: 'Basis Local SEO beginnt ab 500€. Monatliche Betreuung ab 300€. Die genauen Kosten hängen von Ihrer Branche und Region ab.' },
  { question: 'Ist Google Maps wichtig?', answer: 'Ja. Viele lokale Kunden suchen direkt über Google Maps. Eine gute Google Business Optimierung ist entscheidend.' },
  { question: 'Haben Sie Erfahrung in meiner Branche?', answer: 'Wir arbeiten mit vielen lokalen Unternehmen: Ärzte, Handwerker, Restaurants, Einzelhandel und Dienstleister. Gerne besprechen wir Ihre Branche.' },
];
</script>
