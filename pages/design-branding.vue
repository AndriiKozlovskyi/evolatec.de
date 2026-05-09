<template>
  <div>
    <!-- Hero Section -->
    <HeroSection
      background-image="https://lh3.googleusercontent.com/aida-public/AB6AXuAS5zdLscgbQtZZEjecvYHDkQXZP1W7c_XfVpQJf0x7AFGBVe8Zk5O1mXCBDSE5gn8F1TBNe5wotsh4kH16_RscWT5Rc-LHZ_Zrodd5Z3EClq_NVJ-zzrrOHgMyB5fy7MRD-BXVJq2DjNKRmFDMcjTe2F6Thx0doN_l6tF4c02FTh-D2VvMLDnMe7Gucrt4z33eG2j18j14Y6tvpuIoqe2CPJmN6HzOY1GgCG0ArrlB_DzDXO1ccXnkh5e0TCDMIkGJGGuIHGSFTEHM"
      badge="Branding Agentur & Corporate Design Studio"
      title="Branding Agentur: Corporate Design das Ihre Marke unverwechselbar macht"
      description="EvolaTec entwickelt starke Markenidentitäten, modernes Corporate Design, professionelle Logos und digitale Markenauftritte, die Unternehmen sichtbar, vertrauenswürdig und einzigartig machen."
      primaryCTA="Branding Projekt starten"
      secondaryCTA="Preise ansehen"
      :stats="brandingStats"
    />

    <!-- Intro Section -->
    <section class="py-section-padding bg-surface">
      <div class="max-w-container-max mx-auto px-gutter">
        <div class="max-w-3xl">
          <h2 class="font-headline-lg text-headline-lg text-primary mb-stack-md">
            Warum professionelles Branding entscheidend ist
          </h2>

          <p class="font-body-lg text-body-lg text-on-surface-variant mb-6">
            Starkes Branding entscheidet darüber, wie Kunden Ihr Unternehmen wahrnehmen. Eine professionelle Markenidentität schafft Vertrauen, Wiedererkennung und Positionierung im Markt.
          </p>

          <p class="font-body-lg text-body-lg text-on-surface-variant mb-6">
            Unternehmen mit klarem Corporate Design wirken professioneller, hochwertiger und bleiben langfristig im Gedächtnis.
          </p>

          <p class="font-body-lg text-body-lg text-on-surface-variant">
            Als Branding Agentur entwickelt EvolaTec moderne Markenauftritte für Unternehmen, Startups, Dienstleister und digitale Marken.
          </p>
        </div>
      </div>
    </section>

    <!-- Services Section -->
    <section class="py-section-padding bg-surface-container-low">
      <div class="max-w-container-max mx-auto px-gutter">
        <div class="text-center max-w-2xl mx-auto mb-stack-lg">
          <h2 class="font-headline-lg text-headline-lg text-primary mb-4">
            Unsere Branding & Corporate Design Leistungen
          </h2>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-gutter">
          <div
            v-for="service in brandingServices"
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
            Vorteile professionellen Brandings
          </h2>
        </div>

        <div class="grid md:grid-cols-2 gap-gutter max-w-4xl mx-auto">
          <div
            v-for="benefit in brandingBenefits"
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
          Unser Branding Prozess
        </h2>

        <div class="grid md:grid-cols-4 gap-gutter">
          <div v-for="(step, index) in brandingProcess" :key="step.title" class="glass-card ambient-shadow p-8">
            <div class="w-12 h-12 bg-primary text-white flex items-center justify-center font-bold rounded-full mb-4">
              {{ index + 1 }}
            </div>
            <h3 class="font-headline-md text-primary mb-2">{{ step.title }}</h3>
            <p class="font-body-md text-on-surface-variant">{{ step.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Branding Types Section -->
    <section class="py-section-padding bg-surface">
      <div class="max-w-container-max mx-auto px-gutter">
        <div class="text-center max-w-2xl mx-auto mb-stack-lg">
          <h2 class="font-headline-lg text-headline-lg text-primary mb-4">
            Branding Lösungen für moderne Unternehmen
          </h2>
        </div>

        <div class="grid md:grid-cols-2 gap-gutter max-w-4xl mx-auto">
          <div
            v-for="type in brandingTypes"
            :key="type.title"
            class="glass-card ambient-shadow p-8 flex gap-6"
          >
            <div class="flex-shrink-0">
              <span class="material-symbols-outlined text-[40px] text-primary">{{ type.icon }}</span>
            </div>
            <div>
              <h3 class="font-headline-md text-primary mb-2">{{ type.title }}</h3>
              <p class="font-body-md text-on-surface-variant">{{ type.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Corporate Design & Logo Info Section -->
    <section class="py-section-padding bg-surface-container-low">
      <div class="max-w-container-max mx-auto px-gutter">
        <div class="grid md:grid-cols-2 gap-stack-lg">
          <!-- Corporate Design -->
          <div>
            <h2 class="font-headline-lg text-headline-lg text-primary mb-stack-md">
              Corporate Design für Unternehmen
            </h2>

            <p class="font-body-lg text-body-lg text-on-surface-variant mb-6">
              Professionelles Corporate Design sorgt für einen konsistenten Markenauftritt über alle Kanäle hinweg.
            </p>

            <p class="font-body-lg text-body-lg text-on-surface-variant mb-8">
              EvolaTec entwickelt Corporate Designs, die modern, hochwertig und flexibel einsetzbar sind.
            </p>

            <div class="space-y-3">
              <div v-for="item in corporateDesignItems" :key="item" class="flex gap-3 items-start">
                <span class="material-symbols-outlined text-primary text-xl flex-shrink-0 mt-0.5">check_circle</span>
                <p class="font-body-md text-on-surface-variant">{{ item }}</p>
              </div>
            </div>
          </div>

          <!-- Logo Design -->
          <div>
            <h2 class="font-headline-lg text-headline-lg text-primary mb-stack-md">
              Professionelle Logoentwicklung
            </h2>

            <p class="font-body-lg text-body-lg text-on-surface-variant mb-6">
              Ein gutes Logo ist das Fundament jeder Marke.
            </p>

            <p class="font-body-lg text-body-lg text-on-surface-variant mb-8">
              Unsere Logo Design Agentur entwickelt moderne, minimalistische und professionelle Logos, die Ihre Marke klar repräsentieren.
            </p>

            <div class="space-y-3">
              <div v-for="item in logoDesignItems" :key="item" class="flex gap-3 items-start">
                <span class="material-symbols-outlined text-primary text-xl flex-shrink-0 mt-0.5">check_circle</span>
                <p class="font-body-md text-on-surface-variant">{{ item }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Pricing Section -->
    <PricingSection
      title="Branding & Corporate Design Preise"
      subtitle="Transparente Preise für Branding, Logoentwicklung und Corporate Design."
      :pricing-plans="brandingPricingPlans"
    />

    <!-- FAQ Section -->
    <FAQSection title="Häufig gestellte Fragen zum Branding" :faqs="brandingFaqs" />

    <!-- Final CTA -->
    <section class="py-section-padding bg-primary text-on-primary">
      <div class="max-w-container-max mx-auto px-gutter text-center space-y-stack-md">
        <h2 class="font-display text-headline-lg">Entwickeln Sie eine starke Marke mit EvolaTec</h2>
        <p class="font-body-lg max-w-2xl mx-auto opacity-80">
          Professionelles Branding, modernes Corporate Design und strategische Markenentwicklung für Unternehmen, Startups und digitale Projekte.
        </p>
        <div class="flex flex-wrap justify-center gap-6 pt-6">
          <BaseButton variant="secondary" size="lg">Branding Projekt starten</BaseButton>
          <BaseButton variant="outline" size="lg">Kostenlos beraten lassen</BaseButton>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const brandingStats = [
  { value: 'Einzigartig', label: 'Marken', icon: 'star' },
  { value: 'Modern', label: 'Designs', icon: 'palette' },
  { value: 'Professionell', label: 'Branding', icon: 'verified_user' },
  { value: 'Strategisch', label: 'Positioniert', icon: 'target' },
];

const brandingServices = [
  {
    title: 'Branding & Markenentwicklung',
    description: 'Entwicklung einer klaren Markenidentität inklusive Strategie, Positionierung und visueller Kommunikation.',
    icon: 'palette',
  },
  {
    title: 'Logo Design Agentur',
    description: 'Professionelle Logos für Unternehmen, Startups und digitale Marken.',
    icon: 'art_tracks',
  },
  {
    title: 'Corporate Design',
    description: 'Einheitliches Designsystem für professionelle Markenauftritte.',
    icon: 'design_services',
  },
  {
    title: 'Corporate Website Design',
    description: 'Moderne Unternehmenswebsites mit starkem Branding und klarer Nutzerführung.',
    icon: 'web',
  },
  {
    title: 'Rebranding & Corporate Relaunch',
    description: 'Modernisierung bestehender Marken und komplette visuelle Relaunches.',
    icon: 'refresh',
  },
  {
    title: 'Brand Strategy & Positionierung',
    description: 'Strategische Markenentwicklung für nachhaltiges Wachstum.',
    icon: 'map',
  },
];

const brandingBenefits = [
  {
    title: 'Wiedererkennbarkeit',
    description: 'Ein starkes Corporate Design sorgt dafür, dass Kunden Ihre Marke sofort erkennen.',
    icon: 'recognition',
  },
  {
    title: 'Vertrauen & Professionalität',
    description: 'Professionelles Branding steigert Glaubwürdigkeit und Vertrauen.',
    icon: 'verified_user',
  },
  {
    title: 'Bessere Positionierung',
    description: 'Eine klare Markenidentität hebt Sie von Wettbewerbern ab.',
    icon: 'trending_up',
  },
  {
    title: 'Höhere Conversion',
    description: 'Starkes Branding verbessert Nutzererfahrung und Kaufentscheidungen.',
    icon: 'shopping_cart',
  },
];

const brandingProcess = [
  {
    title: 'Analyse & Strategie',
    description: 'Analyse Ihrer Zielgruppe, Konkurrenz und Markenpositionierung.',
  },
  {
    title: 'Konzeptentwicklung',
    description: 'Entwicklung von Markenstil, Designrichtung und visueller Identität.',
  },
  {
    title: 'Logo & Corporate Design',
    description: 'Gestaltung von Logos, Farben, Typografie und Designsystemen.',
  },
  {
    title: 'Umsetzung & Rollout',
    description: 'Anwendung des Brandings auf Website, Marketing und digitale Kanäle.',
  },
];

const brandingTypes = [
  {
    title: 'Branding für Gründer',
    description: 'Professionelle Markenauftritte für neue Unternehmen und Startups.',
    icon: 'lightbulb',
  },
  {
    title: 'Corporate Branding',
    description: 'Einheitliche Markenkommunikation für etablierte Unternehmen.',
    icon: 'business',
  },
  {
    title: 'Brand Building',
    description: 'Aufbau langfristiger Markenidentitäten für Wachstum und Skalierung.',
    icon: 'trending_up',
  },
  {
    title: 'Rebranding Agentur',
    description: 'Modernisierung bestehender Marken und visuelle Relaunches.',
    icon: 'refresh',
  },
];

const corporateDesignItems = [
  'Logo Design',
  'Farbpalette',
  'Typografie',
  'Brand Guidelines',
  'Social Media Design',
  'Corporate Website Design',
  'Präsentationen & Dokumente',
  'Werbematerialien',
];

const logoDesignItems = [
  'Wiedererkennbarkeit',
  'Skalierbarkeit',
  'Moderne Gestaltung',
  'Markenpassung',
  'Digitale & Print Nutzung',
];

const brandingPricingPlans = [
  {
    tier: 'Logo Design',
    price: 'ab 300 €',
    features: [
      'Professionelles Logo',
      'Mehrere Varianten',
      'Vektorformat',
      'Brand Markings',
    ],
    buttonText: 'Logo anfragen',
    isHighlighted: false,
  },
  {
    tier: 'Branding Paket',
    price: 'ab 1.500 €',
    features: [
      'Logo + Corporate Design',
      'Farbpalette & Typografie',
      'Brand Guidelines',
      'Website Design Grundlagen',
    ],
    buttonText: 'Branding starten',
    isHighlighted: true,
  },
  {
    tier: 'Rebranding & Relaunch',
    price: 'ab 2.500 €',
    features: [
      'Komplettes Rebranding',
      'Visuelle Modernisierung',
      'Corporate Redesign',
      'Implementierung',
    ],
    buttonText: 'Rebranding buchen',
    isHighlighted: false,
  },
];

const brandingFaqs = [
  {
    question: 'Was macht eine Branding Agentur?',
    answer:
      'Eine Branding Agentur entwickelt Markenidentitäten, Corporate Design, Logos und strategische Markenauftritte für Unternehmen und Startups.',
  },
  {
    question: 'Warum ist Corporate Design wichtig?',
    answer:
      'Corporate Design sorgt für Wiedererkennbarkeit, Professionalität und Vertrauen. Ein einheitliches Design schafft eine konsistente Markenwahrnehmung.',
  },
  {
    question: 'Was kostet professionelles Branding?',
    answer:
      'Branding Projekte beginnen ab 1.500€, Logo Design ab 300€. Rebranding und komplette Corporate Designs ab 2.500€.',
  },
  {
    question: 'Können bestehende Marken modernisiert werden?',
    answer:
      'Ja. Wir bieten Rebranding, Corporate Redesign und komplette Marken Relaunches an um bestehende Marken zu modernisieren.',
  },
  {
    question: 'Wie lange dauert ein Branding Projekt?',
    answer:
      'Ein Branding Projekt dauert durchschnittlich 4-8 Wochen, abhängig von Umfang und Komplexität. Logo Design ist oft schneller umsetzbar.',
  },
];
</script>
