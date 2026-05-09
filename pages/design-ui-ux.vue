<template>
  <div>
    <!-- Hero Section -->
    <HeroSection
      background-image="https://lh3.googleusercontent.com/aida-public/AB6AXuAS5zdLscgbQtZZEjecvYHDkQXZP1W7c_XfVpQJf0x7AFGBVe8Zk5O1mXCBDSE5gn8F1TBNe5wotsh4kH16_RscWT5Rc-LHZ_Zrodd5Z3EClq_NVJ-zzrrOHgMyB5fy7MRD-BXVJq2DjNKRmFDMcjTe2F6Thx0doN_l6tF4c02FTh-D2VvMLDnMe7Gucrt4z33eG2j18j14Y6tvpuIoqe2CPJmN6HzOY1GgCG0ArrlB_DzDXO1ccXnkh5e0TCDMIkGJGGuIHGSFTEHM"
      badge="Professionelle UI/UX Design Agentur"
      title="UI/UX Design Agentur: User Interface & Experience Design das überzeugt"
      description="EvolaTec entwickelt moderne UI/UX Designs, intuitive Benutzeroberflächen und digitale Nutzererlebnisse, die Vertrauen schaffen, Conversion steigern und Marken professionell präsentieren."
      primaryCTA="UX Design anfragen"
      secondaryCTA="Preise ansehen"
      :stats="uiuxStats"
    />

    <!-- Intro Section -->
    <section class="py-section-padding bg-surface">
      <div class="max-w-container-max mx-auto px-gutter">
        <div class="max-w-3xl">
          <h2 class="font-headline-lg text-headline-lg text-primary mb-stack-md">
            Warum gutes UI/UX Design entscheidend ist
          </h2>

          <p class="font-body-lg text-body-lg text-on-surface-variant mb-6">
            Moderne Websites und digitale Produkte müssen nicht nur gut aussehen, sondern auch intuitiv funktionieren.
          </p>

          <p class="font-body-lg text-body-lg text-on-surface-variant mb-6">
            Professionelles UX Design verbessert die Nutzererfahrung, reduziert Absprungraten und erhöht die Wahrscheinlichkeit, dass Besucher zu Kunden werden.
          </p>

          <p class="font-body-lg text-body-lg text-on-surface-variant">
            Als UI/UX Design Agentur entwickelt EvolaTec moderne Benutzeroberflächen, digitale Experiences und performante Interfaces für Websites, SaaS Plattformen, Landingpages und E-Commerce Projekte.
          </p>
        </div>
      </div>
    </section>

    <!-- Services Section -->
    <section class="py-section-padding bg-surface-container-low">
      <div class="max-w-container-max mx-auto px-gutter">
        <div class="text-center max-w-2xl mx-auto mb-stack-lg">
          <h2 class="font-headline-lg text-headline-lg text-primary mb-4">
            Unsere UI/UX Design Leistungen
          </h2>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-gutter">
          <div
            v-for="service in uiuxServices"
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
            Vorteile professionellen UX & UI Designs
          </h2>
        </div>

        <div class="grid md:grid-cols-2 gap-gutter max-w-4xl mx-auto">
          <div
            v-for="benefit in uiuxBenefits"
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
          Unser UI/UX Design Prozess
        </h2>

        <div class="grid md:grid-cols-4 gap-gutter">
          <div v-for="(step, index) in uiuxProcess" :key="step.title" class="glass-card ambient-shadow p-8">
            <div class="w-12 h-12 bg-primary text-white flex items-center justify-center font-bold rounded-full mb-4">
              {{ index + 1 }}
            </div>
            <h3 class="font-headline-md text-primary mb-2">{{ step.title }}</h3>
            <p class="font-body-md text-on-surface-variant">{{ step.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- UX & UI Info Section -->
    <section class="py-section-padding bg-surface">
      <div class="max-w-container-max mx-auto px-gutter">
        <div class="grid md:grid-cols-2 gap-stack-lg mb-stack-lg">
          <!-- UX Design -->
          <div>
            <h2 class="font-headline-lg text-headline-lg text-primary mb-stack-md">
              User Experience Design für moderne Websites
            </h2>

            <p class="font-body-lg text-body-lg text-on-surface-variant mb-6">
              Professionelles User Experience Design verbessert die Interaktion zwischen Nutzern und digitalen Produkten.
            </p>

            <p class="font-body-lg text-body-lg text-on-surface-variant">
              Gute UX reduziert Frustration, verbessert Orientierung und sorgt dafür, dass Besucher schneller die gewünschten Informationen finden.
            </p>
          </div>

          <!-- UI Design -->
          <div>
            <h2 class="font-headline-lg text-headline-lg text-primary mb-stack-md">
              Modernes User Interface Design
            </h2>

            <p class="font-body-lg text-body-lg text-on-surface-variant mb-6">
              UI Design bestimmt, wie ein digitales Produkt aussieht und wahrgenommen wird.
            </p>

            <p class="font-body-lg text-body-lg text-on-surface-variant">
              Unsere UI/UX Agentur entwickelt minimalistische, moderne und conversionstarke Benutzeroberflächen für Unternehmen, Startups und digitale Plattformen.
            </p>
          </div>
        </div>

        <div class="grid md:grid-cols-2 gap-gutter">
          <div v-for="item in uiDesignItems" :key="item" class="flex gap-4 items-start">
            <span class="material-symbols-outlined text-primary text-2xl flex-shrink-0 mt-1">design_services</span>
            <p class="font-body-md text-on-surface-variant">{{ item }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Industries Section -->
    <section class="py-section-padding bg-surface-container-low">
      <div class="max-w-container-max mx-auto px-gutter">
        <div class="text-center max-w-2xl mx-auto mb-stack-lg">
          <h2 class="font-headline-lg text-headline-lg text-primary mb-4">
            UI/UX Lösungen für verschiedene Branchen
          </h2>
        </div>

        <div class="grid md:grid-cols-2 gap-gutter max-w-4xl mx-auto">
          <div
            v-for="industry in uiuxIndustries"
            :key="industry.title"
            class="glass-card ambient-shadow p-8 flex gap-6"
          >
            <div class="flex-shrink-0">
              <span class="material-symbols-outlined text-[40px] text-primary">{{ industry.icon }}</span>
            </div>
            <div>
              <h3 class="font-headline-md text-primary mb-2">{{ industry.title }}</h3>
              <p class="font-body-md text-on-surface-variant">{{ industry.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Pricing Section -->
    <PricingSection
      title="Preise für UI/UX Design"
      subtitle="Transparente Preise für professionelles UX & UI Design."
      :pricing-plans="uiuxPricingPlans"
    />

    <!-- FAQ Section -->
    <FAQSection title="Häufig gestellte Fragen zu UI/UX Design" :faqs="uiuxFaqs" />

    <!-- Final CTA -->
    <section class="py-section-padding bg-primary text-on-primary">
      <div class="max-w-container-max mx-auto px-gutter text-center space-y-stack-md">
        <h2 class="font-display text-headline-lg">Professionelles UI/UX Design für moderne digitale Produkte</h2>
        <p class="font-body-lg max-w-2xl mx-auto opacity-80">
          EvolaTec entwickelt moderne Interfaces, starke Nutzererlebnisse und conversionstarke Designs für Unternehmen, Startups und digitale Plattformen.
        </p>
        <div class="flex flex-wrap justify-center gap-6 pt-6">
          <BaseButton variant="secondary" size="lg">UI/UX Projekt starten</BaseButton>
          <BaseButton variant="outline" size="lg">Kostenlos beraten lassen</BaseButton>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const uiuxStats = [
  { value: 'Modern', label: 'UI Design', icon: 'design_services' },
  { value: 'Intuitiv', label: 'UX Focused', icon: 'touch_app' },
  { value: 'Conversion', label: 'Optimiert', icon: 'trending_up' },
  { value: 'User', label: 'Centered', icon: 'people' },
];

const uiuxServices = [
  {
    title: 'UX Design',
    description: 'Benutzerfreundliche Nutzererlebnisse mit klarer Struktur, intuitiver Navigation und hoher Conversion.',
    icon: 'touch_app',
  },
  {
    title: 'UI Design',
    description: 'Moderne Benutzeroberflächen mit professionellem Look und konsistentem Designsystem.',
    icon: 'design_services',
  },
  {
    title: 'Wireframes & Prototyping',
    description: 'Strukturierte Konzepte und klickbare Prototypen für digitale Produkte.',
    icon: 'schema',
  },
  {
    title: 'SaaS & Dashboard Design',
    description: 'UI/UX Lösungen für komplexe Plattformen, Admin Panels und SaaS Produkte.',
    icon: 'dashboard',
  },
  {
    title: 'Mobile UX Design',
    description: 'Responsive Interfaces und mobile Nutzererlebnisse für Smartphones und Tablets.',
    icon: 'smartphone',
  },
  {
    title: 'E-Commerce UX',
    description: 'Optimierte Shopping Experiences für höhere Verkäufe und bessere Nutzerführung.',
    icon: 'shopping_cart',
  },
];

const uiuxBenefits = [
  {
    title: 'Höhere Conversion',
    description: 'Intuitive Interfaces steigern Leads, Verkäufe und Anfragen.',
    icon: 'trending_up',
  },
  {
    title: 'Bessere Nutzererfahrung',
    description: 'Klare Strukturen verbessern Navigation und Benutzerfreundlichkeit.',
    icon: 'sentiment_satisfied',
  },
  {
    title: 'Professioneller Markenauftritt',
    description: 'Modernes UI Design stärkt Vertrauen und Markenwahrnehmung.',
    icon: 'verified_user',
  },
  {
    title: 'Mobile Optimierung',
    description: 'Responsive UX Designs funktionieren perfekt auf allen Geräten.',
    icon: 'devices',
  },
];

const uiuxProcess = [
  {
    title: 'Analyse & Research',
    description: 'Analyse von Zielgruppe, Konkurrenz und Nutzerverhalten.',
  },
  {
    title: 'UX Struktur',
    description: 'Entwicklung von User Flows, Seitenstruktur und Wireframes.',
  },
  {
    title: 'UI Design',
    description: 'Gestaltung moderner Interfaces mit Fokus auf Conversion und Nutzerfreundlichkeit.',
  },
  {
    title: 'Optimierung & Testing',
    description: 'Verbesserung der Nutzererfahrung durch Feedback und UX Optimierung.',
  },
];

const uiDesignItems = [
  'Modernes Webdesign',
  'Mobile First Design',
  'Design Systeme',
  'SaaS Interfaces',
  'Dashboard UI',
  'Landingpage Design',
  'E-Commerce UI',
  'Corporate Interfaces',
];

const uiuxIndustries = [
  {
    title: 'SaaS & Startups',
    description: 'Interfaces für digitale Plattformen, SaaS Produkte und moderne Tools.',
    icon: 'rocket_launch',
  },
  {
    title: 'Unternehmenswebsites',
    description: 'Corporate UX Design für professionelle Markenauftritte.',
    icon: 'business',
  },
  {
    title: 'E-Commerce',
    description: 'Conversion optimierte Shopping Experiences für Onlineshops.',
    icon: 'shopping_bag',
  },
  {
    title: 'Landingpages',
    description: 'Performanceorientierte Designs für Leadgenerierung.',
    icon: 'target',
  },
];

const uiuxPricingPlans = [
  {
    tier: 'UX Analyse',
    price: 'ab 300 €',
    features: [
      'Nutzerforschung',
      'Analyse bestehender UX',
      'Verbesserungsempfehlungen',
      'Report',
    ],
    buttonText: 'Analyse anfragen',
    isHighlighted: false,
  },
  {
    tier: 'Website UI/UX Design',
    price: 'ab 1.200 €',
    features: [
      'UX & UI Design',
      'Wireframes & Prototypen',
      'Mobile Optimierung',
      'Design System',
    ],
    buttonText: 'Projekt starten',
    isHighlighted: true,
  },
  {
    tier: 'SaaS & App Design',
    price: 'ab 2.000 €',
    features: [
      'Komplexe Interfaces',
      'User Research',
      'Prototyping',
      'Design Spezifikation',
    ],
    buttonText: 'Design buchen',
    isHighlighted: false,
  },
];

const uiuxFaqs = [
  {
    question: 'Was macht eine UX Design Agentur?',
    answer:
      'Eine UX Agentur entwickelt Nutzererlebnisse, die Websites und digitale Produkte benutzerfreundlicher, intuitiver und conversionsstärker machen.',
  },
  {
    question: 'Was ist der Unterschied zwischen UI und UX?',
    answer:
      'UX beschreibt die gesamte Nutzererfahrung und Interaktion mit einem Produkt. UI ist das visuelle Interface und die Benutzeroberfläche, mit der Nutzer interagieren.',
  },
  {
    question: 'Warum ist UX Design wichtig?',
    answer:
      'Gute UX verbessert Conversion, Nutzerzufriedenheit, Kundenbindung und reduziert Absprungraten. Schlechte UX führt zu frustrierten Nutzern und verlorenen Kunden.',
  },
  {
    question: 'Was kostet professionelles UI/UX Design?',
    answer:
      'UI/UX Projekte beginnen ab 300€ für Analysen und ab 1.200€ für komplette Website Designs. Komplexe Projekte wie SaaS Apps ab 2.000€.',
  },
];
</script>
