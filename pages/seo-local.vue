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
          <div class="glass-card ambient-shadow p-8 text-center border-t-4 border-blue-500">
            <div class="w-12 h-12 rounded-2xl bg-blue-100 flex items-center justify-center mx-auto mb-4">
              <span class="material-symbols-outlined text-blue-600 text-2xl">phone</span>
            </div>
            <div class="text-display text-primary mb-4 bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent font-black">80%</div>
            <p class="font-body-md text-on-surface-variant">der lokalen Suchanfragen führen zu einer Kontaktaufnahme.</p>
          </div>
          <div class="glass-card ambient-shadow p-8 text-center border-t-4 border-emerald-500">
            <div class="w-12 h-12 rounded-2xl bg-emerald-100 flex items-center justify-center mx-auto mb-4">
              <span class="material-symbols-outlined text-emerald-600 text-2xl">location_on</span>
            </div>
            <div class="text-headline-lg text-primary mb-4 font-bold bg-gradient-to-r from-emerald-600 to-emerald-400 bg-clip-text text-transparent">Google Maps</div>
            <p class="font-body-md text-on-surface-variant">ist entscheidend für lokale Sichtbarkeit.</p>
          </div>
          <div class="glass-card ambient-shadow p-8 text-center border-t-4 border-orange-500">
            <div class="w-12 h-12 rounded-2xl bg-orange-100 flex items-center justify-center mx-auto mb-4">
              <span class="material-symbols-outlined text-orange-600 text-2xl">verified_user</span>
            </div>
            <div class="text-headline-lg text-primary mb-4 font-bold bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent">Mehr Vertrauen</div>
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
            class="group glass-card ambient-shadow p-8 transition-all duration-300 hover:scale-105 hover:shadow-lg border-t-4"
            :class="service.borderColor"
          >
            <div
              class="flex items-center justify-center w-14 h-14 rounded-2xl mb-6 transition-all duration-300 group-hover:scale-110"
              :class="service.iconBg"
            >
              <span class="material-symbols-outlined text-2xl" :class="service.iconColor">{{ service.icon }}</span>
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
          <div
            v-for="(step, index) in localProcess"
            :key="step.title"
            class="glass-card ambient-shadow p-8 border-t-4 transition-all duration-300 hover:scale-105"
            :class="step.borderColor"
          >
            <div class="flex items-center gap-3 mb-4">
              <div
                class="w-10 h-10 rounded-xl flex items-center justify-center"
                :class="step.iconBg"
              >
                <span class="material-symbols-outlined text-xl" :class="step.iconColor">{{ step.icon }}</span>
              </div>
              <span class="text-xs font-bold uppercase tracking-wider px-2 py-1 rounded-full" :class="[step.chipBg, step.iconColor]">
                Schritt {{ index + 1 }}
              </span>
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
            class="glass-card ambient-shadow p-8 flex gap-6 transition-all duration-300 hover:scale-105"
          >
            <div class="flex-shrink-0">
              <div class="w-16 h-16 rounded-2xl flex items-center justify-center" :class="benefit.iconBg">
                <span class="material-symbols-outlined text-3xl" :class="benefit.iconColor">{{ benefit.icon }}</span>
              </div>
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
    <section class="py-section-padding bg-gradient-to-br from-slate-900 to-slate-800">
      <div class="max-w-container-max mx-auto px-gutter">
        <h2 class="font-headline-lg text-headline-lg text-white text-center mb-stack-lg">
          Für welche Unternehmen eignet sich lokales SEO?
        </h2>

        <div class="max-w-3xl mx-auto">
          <div class="grid md:grid-cols-2 gap-4">
            <div
              v-for="(industry, index) in industries"
              :key="industry"
              class="flex gap-4 items-center bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10"
            >
              <span
                class="material-symbols-outlined text-xl flex-shrink-0"
                :class="industryColors[index % industryColors.length]"
              >storefront</span>
              <p class="font-body-md text-white/80">{{ industry }}</p>
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
    iconBg: 'bg-blue-100',
    iconColor: 'text-blue-600',
    borderColor: 'border-blue-500',
  },
  {
    title: 'Lokale Keyword Optimierung',
    description: 'Optimierung auf regionale Suchbegriffe und lokale Suchintentionen.',
    icon: 'search',
    iconBg: 'bg-emerald-100',
    iconColor: 'text-emerald-600',
    borderColor: 'border-emerald-500',
  },
  {
    title: 'Technische Local SEO',
    description: 'Strukturierte Daten, lokale Landingpages und technische Optimierung.',
    icon: 'engineering',
    iconBg: 'bg-orange-100',
    iconColor: 'text-orange-600',
    borderColor: 'border-orange-500',
  },
  {
    title: 'Bewertungsmanagement',
    description: 'Strategien für bessere Google Bewertungen und mehr Vertrauen.',
    icon: 'star',
    iconBg: 'bg-purple-100',
    iconColor: 'text-purple-600',
    borderColor: 'border-purple-500',
  },
  {
    title: 'Lokale SEO Inhalte',
    description: 'Erstellung regional optimierter Inhalte und Standortseiten.',
    icon: 'edit_document',
    iconBg: 'bg-rose-100',
    iconColor: 'text-rose-600',
    borderColor: 'border-rose-500',
  },
  {
    title: 'Local SEO Reporting',
    description: 'Monitoring lokaler Rankings, Sichtbarkeit und Kundenanfragen.',
    icon: 'analytics',
    iconBg: 'bg-teal-100',
    iconColor: 'text-teal-600',
    borderColor: 'border-teal-500',
  },
];

const localProcess = [
  {
    title: 'Analyse',
    description: 'Analyse Ihrer lokalen Sichtbarkeit und Konkurrenz.',
    icon: 'search',
    iconBg: 'bg-blue-100',
    iconColor: 'text-blue-600',
    chipBg: 'bg-blue-50',
    borderColor: 'border-blue-400',
  },
  {
    title: 'Strategie',
    description: 'Entwicklung einer regionalen SEO Strategie für Ihre Branche.',
    icon: 'map',
    iconBg: 'bg-orange-100',
    iconColor: 'text-orange-600',
    chipBg: 'bg-orange-50',
    borderColor: 'border-orange-400',
  },
  {
    title: 'Optimierung',
    description: 'Google Maps, Website und lokale Inhalte optimieren.',
    icon: 'tune',
    iconBg: 'bg-emerald-100',
    iconColor: 'text-emerald-600',
    chipBg: 'bg-emerald-50',
    borderColor: 'border-emerald-400',
  },
  {
    title: 'Wachstum',
    description: 'Mehr lokale Rankings, mehr Sichtbarkeit und mehr Kunden.',
    icon: 'trending_up',
    iconBg: 'bg-purple-100',
    iconColor: 'text-purple-600',
    chipBg: 'bg-purple-50',
    borderColor: 'border-purple-400',
  },
];

const localBenefits = [
  {
    title: 'Mehr lokale Kunden',
    description: 'Sichtbarkeit bei regionalen Suchanfragen und Google Maps.',
    icon: 'people',
    iconBg: 'bg-blue-100',
    iconColor: 'text-blue-600',
  },
  {
    title: 'Mehr Vertrauen',
    description: 'Professionelle lokale Präsenz stärkt Ihre Marke.',
    icon: 'verified_user',
    iconBg: 'bg-emerald-100',
    iconColor: 'text-emerald-600',
  },
  {
    title: 'Höhere Conversion',
    description: 'Lokale Suchanfragen haben hohe Kaufabsicht.',
    icon: 'trending_up',
    iconBg: 'bg-orange-100',
    iconColor: 'text-orange-600',
  },
  {
    title: 'Langfristige Sichtbarkeit',
    description: 'Nachhaltiges Wachstum ohne permanente Werbekosten.',
    icon: 'schedule',
    iconBg: 'bg-purple-100',
    iconColor: 'text-purple-600',
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

const industryColors = [
  'text-blue-400',
  'text-emerald-400',
  'text-orange-400',
  'text-purple-400',
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
