<template>
  <div>
    <!-- Hero Section -->
    <HeroSection
      background-image="https://lh3.googleusercontent.com/aida-public/AB6AXuAS5zdLscgbQtZZEjecvYHDkQXZP1W7c_XfVpQJf0x7AFGBVe8Zk5O1mXCBDSE5gn8F1TBNe5wotsh4kH16_RscWT5Rc-LHZ_Zrodd5Z3EClq_NVJ-zzrrOHgMyB5fy7MRD-BXVJq2DjNKRmFDMcjTe2F6Thx0doN_l6tF4c02FTh-D2VvMLDnMe7Gucrt4z33eG2j18j14Y6tvpuIoqe2CPJmN6HzOY1GgCG0ArrlB_DzDXO1ccXnkh5e0TCDMIkGJGGuIHGSFTEHM"
      badge="Local SEO Agentur"
      title="Lokales SEO: Werden Sie in Ihrer Region bei Google gefunden"
      description="Wir helfen Unternehmen, lokal bei Google sichtbar zu werden. Mehr regionale Kunden, bessere Google Maps Rankings und mehr Anfragen aus Ihrer Umgebung."
      primaryCTA="Kostenloses SEO Gespräch"
      secondaryCTA="Local SEO Preise ansehen"
      :stats="localStats"
    />

    <!-- Why Local SEO Section -->
    <section class="py-section-padding bg-surface">
      <div class="max-w-container-max mx-auto px-gutter">
        <h2 class="font-headline-lg text-headline-lg text-primary mb-stack-lg text-center">
          Warum lokales SEO wichtig ist
        </h2>

        <div class="max-w-4xl mx-auto grid md:grid-cols-3 gap-gutter mb-stack-lg">
          <div class="glass-card ambient-shadow p-8 text-center">
            <div class="text-display text-primary mb-4">80%</div>
            <p class="font-body-md text-on-surface-variant">der lokalen Suchanfragen führen zu einer Kontaktaufnahme.</p>
          </div>
          <div class="glass-card ambient-shadow p-8 text-center">
            <div class="text-headline-lg text-primary mb-4 font-bold">Google Maps</div>
            <p class="font-body-md text-on-surface-variant">ist entscheidend für lokale Sichtbarkeit.</p>
          </div>
          <div class="glass-card ambient-shadow p-8 text-center">
            <div class="text-headline-lg text-primary mb-4 font-bold">Mehr Vertrauen</div>
            <p class="font-body-md text-on-surface-variant">durch lokale Rankings und Bewertungen.</p>
          </div>
        </div>

        <div class="max-w-3xl mx-auto">
          <p class="font-body-lg text-body-lg text-on-surface-variant mb-4">
            Viele Kunden suchen lokal nach Dienstleistungen direkt über Google oder Google Maps.
          </p>
          <p class="font-body-lg text-body-lg text-on-surface-variant">
            Ohne lokale SEO Optimierung verlieren Unternehmen potenzielle Kunden an regionale Wettbewerber.
          </p>
        </div>
      </div>
    </section>

    <!-- Services Section -->
    <section class="py-section-padding bg-surface-container-low">
      <div class="max-w-container-max mx-auto px-gutter">
        <div class="text-center max-w-2xl mx-auto mb-stack-lg">
          <h2 class="font-headline-lg text-headline-lg text-primary mb-4">
            Unsere Leistungen für lokales SEO
          </h2>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-gutter">
          <div
            v-for="service in localServices"
            :key="service.title"
            class="group glass-card ambient-shadow p-8 transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            <div class="flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300 mb-6">
              <span class="material-symbols-outlined text-primary text-2xl">{{ service.icon }}</span>
            </div>
            <h3 class="font-headline-md text-primary mb-3">{{ service.title }}</h3>
            <p class="font-body-md text-on-surface-variant leading-relaxed">{{ service.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Process Section -->
    <section class="py-section-padding bg-surface">
      <div class="max-w-container-max mx-auto px-gutter">
        <h2 class="font-headline-lg text-headline-lg text-primary text-center mb-stack-lg">
          So funktioniert unser lokales SEO
        </h2>

        <div class="grid md:grid-cols-4 gap-gutter">
          <div v-for="(step, index) in localProcess" :key="step.title" class="glass-card ambient-shadow p-8">
            <div class="w-12 h-12 bg-primary text-white flex items-center justify-center font-bold rounded-full mb-4">
              {{ index + 1 }}
            </div>
            <h3 class="font-headline-md text-primary mb-2">{{ step.title }}</h3>
            <p class="font-body-md text-on-surface-variant">{{ step.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Benefits Section -->
    <section class="py-section-padding bg-surface-container-low">
      <div class="max-w-container-max mx-auto px-gutter">
        <div class="text-center max-w-2xl mx-auto mb-stack-lg">
          <h2 class="font-headline-lg text-headline-lg text-primary mb-4">
            Vorteile von Local SEO
          </h2>
        </div>

        <div class="grid md:grid-cols-2 gap-gutter">
          <div
            v-for="benefit in localBenefits"
            :key="benefit.title"
            class="glass-card ambient-shadow p-8 flex gap-6"
          >
            <div class="flex-shrink-0">
              <span class="material-symbols-outlined text-[40px] text-primary">{{ benefit.icon }}</span>
            </div>
            <div>
              <h3 class="font-headline-md text-primary mb-2">{{ benefit.title }}</h3>
              <p class="font-body-md text-on-surface-variant">{{ benefit.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Industries Section -->
    <section class="py-section-padding bg-surface">
      <div class="max-w-container-max mx-auto px-gutter">
        <h2 class="font-headline-lg text-headline-lg text-primary text-center mb-stack-lg">
          Für welche Unternehmen eignet sich lokales SEO?
        </h2>

        <div class="max-w-3xl mx-auto">
          <div class="grid md:grid-cols-2 gap-gutter">
            <div v-for="industry in industries" :key="industry" class="flex gap-4 items-start">
              <span class="material-symbols-outlined text-primary text-2xl flex-shrink-0 mt-1">storefront</span>
              <p class="font-body-md text-on-surface-variant">{{ industry }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Pricing Section -->
    <PricingSection
      title="Preise für Local SEO"
      subtitle="Transparente Preise für professionelle lokale SEO Optimierung."
      :pricing-plans="localPricingPlans"
    />

    <!-- FAQ Section -->
    <FAQSection title="Häufig gestellte Fragen zu Local SEO" :faqs="localFaqs" />

    <!-- Final CTA -->
    <section class="py-section-padding bg-primary text-on-primary">
      <div class="max-w-container-max mx-auto px-gutter text-center space-y-stack-md">
        <h2 class="font-display text-headline-lg">Mehr lokale Kunden gewinnen</h2>
        <p class="font-body-lg max-w-2xl mx-auto opacity-80">
          Werden Sie in Ihrer Region sichtbar und gewinnen Sie mehr Anfragen über Google.
        </p>
        <div class="flex flex-wrap justify-center gap-6 pt-6">
          <BaseButton variant="secondary" size="lg">Local SEO starten</BaseButton>
          <BaseButton variant="outline" size="lg">Kostenlos beraten lassen</BaseButton>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const localStats = [
  { value: '+80%', label: 'Kontaktrate', icon: 'phone' },
  { value: 'Google Maps', label: 'Optimiert', icon: 'location_on' },
  { value: 'Regional', label: 'Sichtbar', icon: 'public' },
  { value: 'Mehr Kunden', label: 'Lokal', icon: 'trending_up' },
];

const localServices = [
  {
    title: 'Google Maps Optimierung',
    description: 'Optimierung Ihres Google Business Profils für bessere lokale Rankings.',
    icon: 'location_on',
  },
  {
    title: 'Lokale Keyword Optimierung',
    description: 'Optimierung auf regionale Suchbegriffe und lokale Suchintentionen.',
    icon: 'search',
  },
  {
    title: 'Technische Local SEO',
    description: 'Strukturierte Daten, lokale Landingpages und technische Optimierung.',
    icon: 'engineering',
  },
  {
    title: 'Bewertungsmanagement',
    description: 'Strategien für bessere Google Bewertungen und mehr Vertrauen.',
    icon: 'star',
  },
  {
    title: 'Lokale SEO Inhalte',
    description: 'Erstellung regional optimierter Inhalte und Standortseiten.',
    icon: 'edit_document',
  },
  {
    title: 'Local SEO Reporting',
    description: 'Monitoring lokaler Rankings, Sichtbarkeit und Kundenanfragen.',
    icon: 'analytics',
  },
];

const localProcess = [
  {
    title: 'Analyse',
    description: 'Analyse Ihrer lokalen Sichtbarkeit und Konkurrenz.',
  },
  {
    title: 'Strategie',
    description: 'Entwicklung einer regionalen SEO Strategie für Ihre Branche.',
  },
  {
    title: 'Optimierung',
    description: 'Google Maps, Website und lokale Inhalte optimieren.',
  },
  {
    title: 'Wachstum',
    description: 'Mehr lokale Rankings, mehr Sichtbarkeit und mehr Kunden.',
  },
];

const localBenefits = [
  {
    title: 'Mehr lokale Kunden',
    description: 'Sichtbarkeit bei regionalen Suchanfragen und Google Maps.',
    icon: 'people',
  },
  {
    title: 'Mehr Vertrauen',
    description: 'Professionelle lokale Präsenz stärkt Ihre Marke.',
    icon: 'verified_user',
  },
  {
    title: 'Höhere Conversion',
    description: 'Lokale Suchanfragen haben hohe Kaufabsicht.',
    icon: 'trending_up',
  },
  {
    title: 'Langfristige Sichtbarkeit',
    description: 'Nachhaltiges Wachstum ohne permanente Werbekosten.',
    icon: 'schedule',
  },
];

const industries = [
  'Restaurants & Cafés',
  'Ärzte & Kliniken',
  'Handwerker',
  'Immobilienunternehmen',
  'Lokale Dienstleister',
  'Fitnessstudios',
  'Kanzleien & Berater',
  'Einzelhandel & Shops',
];

const localPricingPlans = [
  {
    tier: 'Google Business Optimierung',
    price: 'ab 250 €',
    features: [
      'Profil Optimierung',
      'Fotos & Beschreibung',
      'Kategorie & Attribute',
      'Erstes Ranking',
    ],
    buttonText: 'Profil optimieren',
    isHighlighted: false,
  },
  {
    tier: 'Basis Local SEO',
    price: 'ab 500 €',
    features: [
      'Maps + Website',
      'Lokale Keywords',
      'Struktur & Content',
      'Implementierungsplan',
    ],
    buttonText: 'Projekt starten',
    isHighlighted: true,
  },
  {
    tier: 'Monatliche Local SEO Betreuung',
    price: 'ab 300 €/Monat',
    features: [
      'Laufende Optimierung',
      'Ranking Monitoring',
      'Bewertungsmanagement',
      'Monatliche Reports',
    ],
    buttonText: 'Betreuung buchen',
    isHighlighted: false,
  },
];

const localFaqs = [
  {
    question: 'Was ist Local SEO?',
    answer:
      'Local SEO optimiert Unternehmen für lokale Suchanfragen und Google Maps. Ziel ist es, dass Sie in Ihrer Region bei Google gefunden werden.',
  },
  {
    question: 'Wie lange dauert Local SEO?',
    answer:
      'Erste Verbesserungen sind oft nach wenigen Wochen sichtbar. Nachhaltige Ergebnisse entstehen über mehrere Monate.',
  },
  {
    question: 'Was kostet lokales SEO?',
    answer:
      'Basis Local SEO beginnt ab 500€. Monatliche Betreuung ab 300€. Die genauen Kosten hängen von Ihrer Branche und Region ab.',
  },
  {
    question: 'Ist Google Maps wichtig?',
    answer:
      'Ja. Viele lokale Kunden suchen direkt über Google Maps. Eine gute Google Business Optimierung ist entscheidend.',
  },
  {
    question: 'Haben Sie Erfahrung in meiner Branche?',
    answer:
      'Wir arbeiten mit vielen lokalen Unternehmen: Ärzte, Handwerker, Restaurants, Einzelhandel und Dienstleister. Gerne besprechen wir Ihre Branche.',
  },
];
</script>
