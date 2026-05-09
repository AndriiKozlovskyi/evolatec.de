<template>
  <div>
    <!-- Hero Section -->
    <HeroSection
      background-image="https://lh3.googleusercontent.com/aida-public/AB6AXuAS5zdLscgbQtZZEjecvYHDkQXZP1W7c_XfVpQJf0x7AFGBVe8Zk5O1mXCBDSE5gn8F1TBNe5wotsh4kH16_RscWT5Rc-LHZ_Zrodd5Z3EClq_NVJ-zzrrOHgMyB5fy7MRD-BXVJq2DjNKRmFDMcjTe2F6Thx0doN_l6tF4c02FTh-D2VvMLDnMe7Gucrt4z33eG2j18j14Y6tvpuIoqe2CPJmN6HzOY1GgCG0ArrlB_DzDXO1ccXnkh5e0TCDMIkGJGGuIHGSFTEHM"
      badge="Professionelle Linkbuilding Agentur"
      title="Linkbuilding & Backlink Aufbau: Mehr Autorität für Ihre Website"
      description="Hochwertige Backlinks sind einer der wichtigsten Google Ranking Faktoren. Wir helfen Unternehmen, starke SEO Autorität aufzubauen und bessere Rankings zu erreichen."
      primary-cta="Linkbuilding starten"
      secondary-cta="Preise ansehen"
      :stats="linkBuildingStats"
    />

    <!-- Why Linkbuilding Section -->
    <section class="py-section-padding bg-surface">
      <div class="max-w-container-max mx-auto px-gutter">
        <h2 class="font-headline-lg text-headline-lg text-primary mb-stack-lg text-center">
          Warum ist Linkbuilding wichtig?
        </h2>

        <div class="max-w-4xl mx-auto grid md:grid-cols-3 gap-gutter mb-stack-lg">
          <div class="glass-card ambient-shadow p-8 text-center">
            <div class="text-headline-lg text-primary mb-4 font-bold">Mehr Autorität</div>
            <p class="font-body-md text-on-surface-variant">Vertrauenswürdige Backlinks stärken Ihre Domain.</p>
          </div>
          <div class="glass-card ambient-shadow p-8 text-center">
            <div class="text-headline-lg text-primary mb-4 font-bold">Bessere Rankings</div>
            <p class="font-body-md text-on-surface-variant">OffPage SEO verbessert Ihre Google Positionen.</p>
          </div>
          <div class="glass-card ambient-shadow p-8 text-center">
            <div class="text-headline-lg text-primary mb-4 font-bold">Langfristige Wirkung</div>
            <p class="font-body-md text-on-surface-variant">Gute Backlinks wirken langfristig positiv.</p>
          </div>
        </div>

        <div class="max-w-3xl mx-auto">
          <p class="font-body-lg text-body-lg text-on-surface-variant mb-4">
            Backlinks gehören zu den wichtigsten Ranking Faktoren bei Google.
          </p>
          <p class="font-body-lg text-body-lg text-on-surface-variant">
            Hochwertige Verlinkungen erhöhen die Autorität Ihrer Website und verbessern langfristig Ihre Sichtbarkeit in Suchmaschinen.
          </p>
        </div>
      </div>
    </section>

    <!-- Services Section -->
    <section class="py-section-padding bg-surface-container-low">
      <div class="max-w-container-max mx-auto px-gutter">
        <div class="text-center max-w-2xl mx-auto mb-stack-lg">
          <h2 class="font-headline-lg text-headline-lg text-primary mb-4">
            Unsere Linkbuilding Leistungen
          </h2>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-gutter">
          <div
            v-for="service in linkBuildingServices"
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
          So funktioniert unser Linkbuilding
        </h2>

        <div class="grid md:grid-cols-4 gap-gutter">
          <div v-for="(step, index) in linkBuildingProcess" :key="step.title" class="glass-card ambient-shadow p-8">
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
            Vorteile professionellen Linkbuildings
          </h2>
        </div>

        <div class="grid md:grid-cols-2 gap-gutter">
          <div
            v-for="benefit in linkBuildingBenefits"
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

    <!-- Backlink Types Section -->
    <section class="py-section-padding bg-surface">
      <div class="max-w-container-max mx-auto px-gutter">
        <h2 class="font-headline-lg text-headline-lg text-primary text-center mb-stack-lg">
          Welche Backlinks bauen wir auf?
        </h2>

        <div class="max-w-3xl mx-auto">
          <div class="grid md:grid-cols-2 gap-gutter">
            <div v-for="backlinkType in backlinksTypes" :key="backlinkType" class="flex gap-4 items-start">
              <span class="material-symbols-outlined text-primary text-2xl flex-shrink-0 mt-1">link</span>
              <p class="font-body-md text-on-surface-variant">{{ backlinkType }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Pricing Section -->
    <PricingSection
      title="Linkbuilding Preise"
      subtitle="Transparente Preise für professionellen Backlink Aufbau."
      :pricing-plans="linkBuildingPricingPlans"
    />

    <!-- FAQ Section -->
    <FAQSection title="Häufig gestellte Fragen zu Linkbuilding" :faqs="linkBuildingFaqs" />

    <!-- Final CTA -->
    <section class="py-section-padding bg-primary text-on-primary">
      <div class="max-w-container-max mx-auto px-gutter text-center space-y-stack-md">
        <h2 class="font-display text-headline-lg">Stärken Sie Ihre SEO Autorität</h2>
        <p class="font-body-lg max-w-2xl mx-auto opacity-80">
          Professioneller Backlink Aufbau für bessere Rankings und mehr Sichtbarkeit.
        </p>
        <div class="flex flex-wrap justify-center gap-6 pt-6">
          <BaseButton variant="secondary" size="lg">Linkbuilding starten</BaseButton>
          <BaseButton variant="outline" size="lg">Kostenlos beraten lassen</BaseButton>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const linkBuildingStats = [
  { value: 'Domain Authority', label: 'Aufbau', icon: 'trending_up' },
  { value: 'Hochwertig', label: 'Backlinks', icon: 'verified' },
  { value: 'Nachhaltig', label: 'SEO Wachstum', icon: 'schedule' },
  { value: 'Expertise', label: 'OffPage SEO', icon: 'star' },
];

const linkBuildingServices = [
  {
    title: 'Linkbuilding Strategie',
    description: 'Entwicklung einer nachhaltigen OffPage SEO Strategie für Ihre Branche.',
    icon: 'map',
  },
  {
    title: 'Hochwertiger Backlink Aufbau',
    description: 'Aufbau relevanter und vertrauenswürdiger Backlinks.',
    icon: 'link',
  },
  {
    title: 'Outreach & Kooperationen',
    description: 'Kontaktaufbau mit passenden Websites und Medien.',
    icon: 'people',
  },
  {
    title: 'Gastartikel & Content Links',
    description: 'Contentbasierter Linkaufbau über hochwertige Artikel.',
    icon: 'edit_document',
  },
  {
    title: 'Backlink Analyse',
    description: 'Analyse bestehender Backlinks und Identifikation toxischer Links.',
    icon: 'assessment',
  },
  {
    title: 'Link Monitoring',
    description: 'Laufende Kontrolle und Optimierung Ihres Linkprofils.',
    icon: 'visibility',
  },
];

const linkBuildingProcess = [
  {
    title: 'Analyse',
    description: 'Analyse Ihrer Domain, Konkurrenz und Backlinkstruktur.',
  },
  {
    title: 'Strategie',
    description: 'Erstellung einer individuellen Linkbuilding Strategie.',
  },
  {
    title: 'Linkaufbau',
    description: 'Aufbau hochwertiger und thematisch relevanter Backlinks.',
  },
  {
    title: 'Wachstum',
    description: 'Mehr Autorität, bessere Rankings und nachhaltiges SEO Wachstum.',
  },
];

const linkBuildingBenefits = [
  {
    title: 'Höhere Domain Autorität',
    description: 'Vertrauenswürdige Backlinks stärken Ihre Website.',
    icon: 'grade',
  },
  {
    title: 'Mehr organischer Traffic',
    description: 'Bessere Rankings bringen mehr Besucher.',
    icon: 'trending_up',
  },
  {
    title: 'Nachhaltige SEO Wirkung',
    description: 'Gute Links wirken langfristig positiv.',
    icon: 'schedule',
  },
  {
    title: 'Wettbewerbsvorteil',
    description: 'Stärkeres Linkprofil gegenüber Konkurrenten.',
    icon: 'competitive_outline',
  },
];

const backlinksTypes = [
  'Redaktionelle Backlinks',
  'Branchenverzeichnisse',
  'Gastartikel Links',
  'Contentbasierte Verlinkungen',
  'Lokale Backlinks',
  'Thematisch relevante Links',
  'Internationale Backlinks',
  'Autoritätslinks',
];

const linkBuildingPricingPlans = [
  {
    tier: 'Backlink Analyse',
    price: 'ab 200 €',
    features: [
      'Backlink Analyse',
      'Konkurrenz Check',
      'Probleme identifizieren',
      'Strategieempfehlungen',
    ],
    buttonText: 'Analyse anfragen',
    isHighlighted: false,
  },
  {
    tier: 'Basis Linkbuilding',
    price: 'ab 500 €',
    features: [
      'Linkbuilding Strategie',
      'Erste Backlinks',
      'Outreach & Aufbau',
      'Implementierungsplan',
    ],
    buttonText: 'Projekt starten',
    isHighlighted: true,
  },
  {
    tier: 'Monatliche Linkbuilding Betreuung',
    price: 'ab 700 €/Monat',
    features: [
      'Laufender Linkaufbau',
      'Monatliche Backlinks',
      'Link Monitoring',
      'Wettbewerb-Analyse',
    ],
    buttonText: 'Betreuung buchen',
    isHighlighted: false,
  },
];

const linkBuildingFaqs = [
  {
    question: 'Warum sind Backlinks wichtig?',
    answer:
      'Backlinks stärken die Autorität Ihrer Website und verbessern Rankings bei Google. Sie sind einer der stärksten Ranking Faktoren.',
  },
  {
    question: 'Wie lange dauert Linkbuilding?',
    answer:
      'Linkbuilding ist ein langfristiger Prozess. Erste Verbesserungen sind oft nach einigen Wochen sichtbar, nachhaltige Ergebnisse entstehen über Monate.',
  },
  {
    question: 'Was kostet professionelles Linkbuilding?',
    answer:
      'Basis Linkbuilding beginnt ab 500€. Monatliche Betreuung ab 700€/Monat. Die genauen Kosten hängen von Ihrer Branche und Zielen ab.',
  },
  {
    question: 'Nutzen Sie sichere SEO Methoden?',
    answer:
      'Ja. Wir setzen auf nachhaltige und Google-konforme Linkbuilding Strategien. Wir vermeiden manipulative Taktiken und toxische Links.',
  },
  {
    question: 'Werden toxische Links entfernt?',
    answer:
      'Ja. Wir analysieren Ihr Linkprofil auf toxische Links und initiieren ggf. Disavow-Anfragen, um schädliche Backlinks zu entfernen.',
  },
];
</script>
