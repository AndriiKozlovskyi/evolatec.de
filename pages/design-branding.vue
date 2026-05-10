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

    <!-- Trust Section -->
    <TrustSection :companies="trustCompanies" />

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
    <ServicesSection title="Unsere Branding & Corporate Design Leistungen" variant="centered" :services="brandingServices" />

    <!-- Benefits Section -->
    <BenefitsSection title="Vorteile professionellen Brandings" :benefits="brandingBenefits" />

    <!-- Process Section -->
    <ProcessSection title="Unser Branding Prozess" :steps="brandingProcess" />


    <FeaturesSection
      title="Branding Lösungen für moderne Unternehmen"
      :features="brandingTypes"
      image-url="https://lh3.googleusercontent.com/aida-public/AB6AXuAS5zdLscgbQtZZEjecvYHDkQXZP1W7c_XfVpQJf0x7AFGBVe8Zk5O1mXCBDSE5gn8F1TBNe5wotsh4kH16_RscWT5Rc-LHZ_Zrodd5Z3EClq_NVJ-zzrrOHgMyB5fy7MRD-BXVJq2DjNKRmFDMcjTe2F6Thx0doN_l6tF4c02FTh-D2VvMLDnMe7Gucrt4z33eG2j18j14Y6tvpuIoqe2CPJmN6HzOY1GgCG0ArrlB_DzDXO1ccXnkh5e0TCDMIkGJGGuIHGSFTEHM"
    />
  
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

    <!-- Features Section -->
    <FeaturesSection
      title="Starke Markenidentitäten für moderne Unternehmen"
      :features="featuresData"
      image-url="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=400&fit=crop"
    />

    <!-- FAQ Section -->
    <FAQSection title="Häufig gestellte Fragen zum Branding" :faqs="brandingFaqs" />

    <!-- Final CTA -->
    <CTASection
      title="Entwickeln Sie eine starke Marke mit EvolaTec"
      description="Professionelles Branding, modernes Corporate Design und strategische Markenentwicklung für Unternehmen, Startups und digitale Projekte."
      primary-cta="Branding Projekt starten"
      secondary-cta="Kostenlos beraten lassen"
    />
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Branding Agentur & Corporate Design | EvolaTec',
  meta: [
    {
      name: 'description',
      content:
        'Professionelle Branding Agentur für Corporate Design, Logo Design und Markenentwicklung. EvolaTec entwickelt starke Markenidentitäten für Unternehmen und Startups.',
    },
  ],
});

const trustCompanies = ['LOGO DESIGN', 'CORPORATE DESIGN', 'BRAND STRATEGY', 'REBRANDING'];

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
    iconBg: 'bg-blue-100',
    iconColor: 'text-blue-600',
    borderColor: 'border-blue-500',
  },
  {
    title: 'Logo Design Agentur',
    description: 'Professionelle Logos für Unternehmen, Startups und digitale Marken.',
    icon: 'art_tracks',
    iconBg: 'bg-emerald-100',
    iconColor: 'text-emerald-600',
    borderColor: 'border-emerald-500',
  },
  {
    title: 'Corporate Design',
    description: 'Einheitliches Designsystem für professionelle Markenauftritte.',
    icon: 'design_services',
    iconBg: 'bg-orange-100',
    iconColor: 'text-orange-600',
    borderColor: 'border-orange-500',
  },
  {
    title: 'Corporate Website Design',
    description: 'Moderne Unternehmenswebsites mit starkem Branding und klarer Nutzerführung.',
    icon: 'web',
    iconBg: 'bg-purple-100',
    iconColor: 'text-purple-600',
    borderColor: 'border-purple-500',
  },
  {
    title: 'Rebranding & Corporate Relaunch',
    description: 'Modernisierung bestehender Marken und komplette visuelle Relaunches.',
    icon: 'refresh',
    iconBg: 'bg-teal-100',
    iconColor: 'text-teal-600',
    borderColor: 'border-teal-500',
  },
  {
    title: 'Brand Strategy & Positionierung',
    description: 'Strategische Markenentwicklung für nachhaltiges Wachstum.',
    icon: 'map',
    iconBg: 'bg-rose-100',
    iconColor: 'text-rose-600',
    borderColor: 'border-rose-500',
  },
];

const brandingBenefits = [
  {
    title: 'Wiedererkennbarkeit',
    description: 'Ein starkes Corporate Design sorgt dafür, dass Kunden Ihre Marke sofort erkennen.',
    icon: 'recognition',
    bg: 'bg-gradient-to-br from-blue-600 to-blue-800',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
  },
  {
    title: 'Vertrauen & Professionalität',
    description: 'Professionelles Branding steigert Glaubwürdigkeit und Vertrauen.',
    icon: 'verified_user',
    bg: 'bg-gradient-to-br from-emerald-600 to-teal-800',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&h=400&fit=crop',
  },
  {
    title: 'Bessere Positionierung',
    description: 'Eine klare Markenidentität hebt Sie von Wettbewerbern ab.',
    icon: 'trending_up',
    bg: 'bg-gradient-to-br from-purple-600 to-indigo-800',
    image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&h=400&fit=crop',
  },
  {
    title: 'Höhere Conversion',
    description: 'Starkes Branding verbessert Nutzererfahrung und Kaufentscheidungen.',
    icon: 'shopping_cart',
    bg: 'bg-gradient-to-br from-amber-500 to-orange-600',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
  },
];

const brandingProcess = [
  {
    title: 'Analyse & Strategie',
    description: 'Analyse Ihrer Zielgruppe, Konkurrenz und Markenpositionierung.',
    icon: 'analytics',
  },
  {
    title: 'Konzeptentwicklung',
    description: 'Entwicklung von Markenstil, Designrichtung und visueller Identität.',
    icon: 'lightbulb',
  },
  {
    title: 'Logo & Corporate Design',
    description: 'Gestaltung von Logos, Farben, Typografie und Designsystemen.',
    icon: 'palette',
  },
  {
    title: 'Umsetzung & Rollout',
    description: 'Anwendung des Brandings auf Website, Marketing und digitale Kanäle.',
    icon: 'rocket_launch',
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

const featuresData = [
  {
    title: 'Branding & Markenentwicklung',
    description: 'Entwicklung einer klaren Markenidentität inklusive Strategie und visueller Kommunikation.',
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
    title: 'Brand Strategy & Positionierung',
    description: 'Strategische Markenentwicklung für nachhaltiges Wachstum.',
    icon: 'map',
  },
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
