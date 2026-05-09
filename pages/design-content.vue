<template>
  <div>
    <!-- Hero Section -->
    <HeroSection
      background-image="https://lh3.googleusercontent.com/aida-public/AB6AXuAS5zdLscgbQtZZEjecvYHDkQXZP1W7c_XfVpQJf0x7AFGBVe8Zk5O1mXCBDSE5gn8F1TBNe5wotsh4kH16_RscWT5Rc-LHZ_Zrodd5Z3EClq_NVJ-zzrrOHgMyB5fy7MRD-BXVJq2DjNKRmFDMcjTe2F6Thx0doN_l6tF4c02FTh-D2VvMLDnMe7Gucrt4z33eG2j18j14Y6tvpuIoqe2CPJmN6HzOY1GgCG0ArrlB_DzDXO1ccXnkh5e0TCDMIkGJGGuIHGSFTEHM"
      badge="Professionelle Webseiten Texte & SEO Copywriting"
      title="Webseiten Texte & Copywriting: Inhalte die verkaufen & bei Google ranken"
      description="Professionelle Website Texte, SEO optimierte Inhalte und modernes Copywriting für Unternehmen, Landingpages, Onlineshops und Corporate Websites."
      primaryCTA="Texte anfragen"
      secondaryCTA="Preise ansehen"
      :stats="contentStats"
    />

    <!-- Intro Section -->
    <section class="py-section-padding bg-surface">
      <div class="max-w-container-max mx-auto px-gutter">
        <div class="max-w-3xl">
          <h2 class="font-headline-lg text-headline-lg text-primary mb-stack-md">
            Warum professionelle Website Texte wichtig sind
          </h2>

          <p class="font-body-lg text-body-lg text-on-surface-variant mb-6">
            Gute Webseiten Texte entscheiden darüber, ob Besucher zu Kunden werden.
          </p>

          <p class="font-body-lg text-body-lg text-on-surface-variant mb-6">
            Moderne Website Inhalte müssen nicht nur professionell wirken, sondern gleichzeitig bei Google ranken und Vertrauen schaffen.
          </p>

          <p class="font-body-lg text-body-lg text-on-surface-variant">
            EvolaTec erstellt SEO optimierte Texte, die Suchmaschinen verstehen und Nutzer überzeugen.
          </p>
        </div>
      </div>
    </section>

    <!-- Services Section -->
    <section class="py-section-padding bg-surface-container-low">
      <div class="max-w-container-max mx-auto px-gutter">
        <div class="text-center max-w-2xl mx-auto mb-stack-lg">
          <h2 class="font-headline-lg text-headline-lg text-primary mb-4">
            Unsere Content & Copywriting Leistungen
          </h2>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-gutter">
          <div
            v-for="service in contentServices"
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

    <!-- Benefits Section -->
    <section class="py-section-padding bg-surface">
      <div class="max-w-container-max mx-auto px-gutter">
        <div class="text-center max-w-2xl mx-auto mb-stack-lg">
          <h2 class="font-headline-lg text-headline-lg text-primary mb-4">
            Vorteile professioneller SEO Texte
          </h2>
        </div>

        <div class="grid md:grid-cols-2 gap-gutter max-w-4xl mx-auto">
          <div
            v-for="benefit in contentBenefits"
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

    <!-- Process Section -->
    <section class="py-section-padding bg-surface-container-low">
      <div class="max-w-container-max mx-auto px-gutter">
        <h2 class="font-headline-lg text-headline-lg text-primary text-center mb-stack-lg">
          So entstehen professionelle Website Texte
        </h2>

        <div class="grid md:grid-cols-4 gap-gutter">
          <div v-for="(step, index) in contentProcess" :key="step.title" class="glass-card ambient-shadow p-8">
            <div class="w-12 h-12 bg-primary text-white flex items-center justify-center font-bold rounded-full mb-4">
              {{ index + 1 }}
            </div>
            <h3 class="font-headline-md text-primary mb-2">{{ step.title }}</h3>
            <p class="font-body-md text-on-surface-variant">{{ step.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Content Types Section -->
    <section class="py-section-padding bg-surface">
      <div class="max-w-container-max mx-auto px-gutter">
        <h2 class="font-headline-lg text-headline-lg text-primary text-center mb-stack-lg">
          Welche Inhalte erstellen wir?
        </h2>

        <div class="max-w-3xl mx-auto">
          <div class="grid md:grid-cols-2 gap-gutter">
            <div v-for="contentType in contentTypes" :key="contentType" class="flex gap-4 items-start">
              <span class="material-symbols-outlined text-primary text-2xl flex-shrink-0 mt-1">edit_document</span>
              <p class="font-body-md text-on-surface-variant">{{ contentType }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Pricing Section -->
    <PricingSection
      title="Preise für Webseiten Texte & SEO Content"
      subtitle="Transparente Preise für professionelles Copywriting und SEO Texte."
      :pricing-plans="contentPricingPlans"
    />

    <!-- FAQ Section -->
    <FAQSection title="Häufig gestellte Fragen zu Webseiten Texten" :faqs="contentFaqs" />

    <!-- Final CTA -->
    <section class="py-section-padding bg-primary text-on-primary">
      <div class="max-w-container-max mx-auto px-gutter text-center space-y-stack-md">
        <h2 class="font-display text-headline-lg">Professionelle Website Texte für mehr Kunden & bessere Rankings</h2>
        <p class="font-body-lg max-w-2xl mx-auto opacity-80">
          Lassen Sie professionelle Webseiten Texte erstellen, die verkaufen, Vertrauen aufbauen und bei Google ranken.
        </p>
        <div class="flex flex-wrap justify-center gap-6 pt-6">
          <BaseButton variant="secondary" size="lg">Content anfragen</BaseButton>
          <BaseButton variant="outline" size="lg">Kostenlos beraten lassen</BaseButton>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const contentStats = [
  { value: 'SEO +', label: 'Optimiert', icon: 'trending_up' },
  { value: 'Verkaufs-', label: 'fokussiert', icon: 'shopping_cart' },
  { value: 'Google', label: 'Rankings', icon: 'grade' },
  { value: 'Professionell', label: 'Texte', icon: 'edit_document' },
];

const contentServices = [
  {
    title: 'Webseiten Texte schreiben lassen',
    description: 'Professionelle Texte für Unternehmenswebsites, Landingpages und Markenauftritte.',
    icon: 'edit_document',
  },
  {
    title: 'SEO Texte schreiben lassen',
    description: 'SEO optimierte Inhalte für bessere Rankings und mehr Sichtbarkeit.',
    icon: 'search',
  },
  {
    title: 'Landingpage Copywriting',
    description: 'Conversionstarke Texte für mehr Leads, Anfragen und Verkäufe.',
    icon: 'target',
  },
  {
    title: 'Onlineshop Inhalte',
    description: 'Produkttexte und Kategorieseiten für E-Commerce Projekte.',
    icon: 'shopping_bag',
  },
  {
    title: 'Content Strategie',
    description: 'Strukturierte Inhalte für SEO, Branding und Marketing.',
    icon: 'map',
  },
  {
    title: 'SEO Blog Artikel',
    description: 'Fachartikel und SEO Content für langfristigen Traffic.',
    icon: 'article',
  },
];

const contentBenefits = [
  {
    title: 'Mehr Google Rankings',
    description: 'SEO optimierte Texte verbessern Ihre Sichtbarkeit.',
    icon: 'trending_up',
  },
  {
    title: 'Höhere Conversion',
    description: 'Gute Texte überzeugen Besucher und steigern Anfragen.',
    icon: 'shopping_cart',
  },
  {
    title: 'Professioneller Markenauftritt',
    description: 'Hochwertige Inhalte stärken Vertrauen und Markenwirkung.',
    icon: 'verified_user',
  },
  {
    title: 'Nachhaltiger Traffic',
    description: 'SEO Content bringt langfristig Besucher.',
    icon: 'schedule',
  },
];

const contentProcess = [
  {
    title: 'Analyse',
    description: 'Zielgruppe, Branche und Konkurrenz analysieren.',
  },
  {
    title: 'Keyword Recherche',
    description: 'Relevante SEO Keywords für bessere Rankings identifizieren.',
  },
  {
    title: 'Content Erstellung',
    description: 'Professionelle, strukturierte und conversionstarke Inhalte schreiben.',
  },
  {
    title: 'SEO Optimierung',
    description: 'Inhalte für Google und Nutzer optimieren.',
  },
];

const contentTypes = [
  'Webseiten Texte',
  'SEO Landingpages',
  'Unternehmensbeschreibungen',
  'Produktbeschreibungen',
  'Blog Artikel',
  'Google SEO Texte',
  'Conversion Texte',
  'Content für Werbeanzeigen',
];

const contentPricingPlans = [
  {
    tier: 'Webseiten Texte',
    price: 'ab 150 €',
    features: [
      'Einzelne Seiten',
      'SEO optimiert',
      'Professionell geschrieben',
      'Google fokussiert',
    ],
    buttonText: 'Texte anfragen',
    isHighlighted: false,
  },
  {
    tier: 'Landingpage Copywriting',
    price: 'ab 250 €',
    features: [
      'Conversionstarke Texte',
      'CTA Optimierung',
      'Sales fokussiert',
      'A/B Testing ready',
    ],
    buttonText: 'Copywriting buchen',
    isHighlighted: true,
  },
  {
    tier: 'Komplette Website Inhalte',
    price: 'ab 700 €',
    features: [
      'Alle Seiten',
      'Content Strategie',
      'SEO Struktur',
      'Professionelle Umsetzung',
    ],
    buttonText: 'Projekt starten',
    isHighlighted: false,
  },
];

const contentFaqs = [
  {
    question: 'Warum sind SEO Texte wichtig?',
    answer:
      'SEO Texte verbessern Rankings und helfen Google, Ihre Website besser zu verstehen. Gute Texte führen zu mehr organischem Traffic.',
  },
  {
    question: 'Schreiben Sie Texte für Landingpages?',
    answer:
      'Ja. Wir erstellen conversionstarke Inhalte für Landingpages und Werbekampagnen, die auf Verkäufe und Leads fokussieren.',
  },
  {
    question: 'Können Inhalte mehrsprachig erstellt werden?',
    answer:
      'Ja. Wir erstellen Inhalte für deutsche, englische und internationale Projekte mit nativen Sprachkenntnissen.',
  },
  {
    question: 'Was kosten professionelle Website Texte?',
    answer:
      'Professionelle Webseiten Texte beginnen ab 150€, komplette Projekte ab 700€. Die genauen Kosten hängen vom Umfang ab.',
  },
  {
    question: 'Wie lange dauert die Content Erstellung?',
    answer:
      'Durchschnittlich 5-10 Werktage für einzelne Seiten, größere Projekte 2-4 Wochen. Schnellere Umsetzung ist möglich.',
  },
];
</script>
