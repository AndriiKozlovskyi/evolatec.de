<template>
  <div>
    <!-- Hero Section -->
    <HeroSection
      background-image="https://lh3.googleusercontent.com/aida-public/AB6AXuAS5zdLscgbQtZZEjecvYHDkQXZP1W7c_XfVpQJf0x7AFGBVe8Zk5O1mXCBDSE5gn8F1TBNe5wotsh4kH16_RscWT5Rc-LHZ_Zrodd5Z3EClq_NVJ-zzrrOHgMyB5fy7MRD-BXVJq2DjNKRmFDMcjTe2F6Thx0doN_l6tF4c02FTh-D2VvMLDnMe7Gucrt4z33eG2j18j14Y6tvpuIoqe2CPJmN6HzOY1GgCG0ArrlB_DzDXO1ccXnkh5e0TCDMIkGJGGuIHGSFTEHM"
      badge="Technische SEO Optimierung"
      title="Technische SEO Optimierung: Wir bringen Ihre Website auf Kurs"
      description="Wir optimieren Ihre Website technisch, verbessern Ladezeiten, Core Web Vitals, Struktur und SEO Performance für bessere Google Rankings und mehr Kunden."
      primaryCTA="Website optimieren lassen"
      secondaryCTA="Preise ansehen"
      :stats="optimizationStats"
    />

    <!-- Problem Section -->
    <section class="py-section-padding bg-surface">
      <div class="max-w-container-max mx-auto px-gutter">
        <div class="max-w-3xl">
          <h2 class="font-headline-lg text-headline-lg text-primary mb-stack-md">
            Warum technische SEO Optimierung wichtig ist
          </h2>

          <p class="font-body-lg text-body-lg text-on-surface-variant mb-6">
            Viele Websites verlieren Rankings, weil technische Probleme die Sichtbarkeit bei Google verschlechtern.
          </p>

          <p class="font-body-lg text-body-lg text-on-surface-variant">
            Langsame Ladezeiten, schlechte mobile Optimierung, fehlerhafte Struktur oder technische SEO Probleme wirken sich direkt auf Traffic und Conversion aus.
          </p>
        </div>
      </div>
    </section>

    <!-- Services Section -->
    <section class="py-section-padding bg-surface-container-low">
      <div class="max-w-container-max mx-auto px-gutter">
        <div class="text-center max-w-2xl mx-auto mb-stack-lg">
          <h2 class="font-headline-lg text-headline-lg text-primary mb-4">
            Unsere Leistungen zur Website Optimierung
          </h2>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-gutter">
          <div
            v-for="service in optimizationServices"
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
          So optimieren wir Ihre Website
        </h2>

        <div class="grid md:grid-cols-4 gap-gutter">
          <div v-for="(step, index) in optimizationProcess" :key="step.title" class="glass-card ambient-shadow p-8">
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
            Vorteile einer optimierten Website
          </h2>
        </div>

        <div class="grid md:grid-cols-2 gap-gutter">
          <div
            v-for="benefit in optimizationBenefits"
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

    <!-- Common Problems Section -->
    <section class="py-section-padding bg-surface">
      <div class="max-w-container-max mx-auto px-gutter">
        <h2 class="font-headline-lg text-headline-lg text-primary text-center mb-stack-lg">
          Häufige technische SEO Probleme
        </h2>

        <div class="max-w-3xl mx-auto">
          <div class="grid md:grid-cols-2 gap-gutter">
            <div v-for="problem in commonProblems" :key="problem" class="flex gap-4 items-start">
              <span class="material-symbols-outlined text-primary text-2xl flex-shrink-0 mt-1">error</span>
              <p class="font-body-md text-on-surface-variant">{{ problem }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Pricing Section -->
    <PricingSection
      title="Preise für technische SEO Optimierung"
      subtitle="Transparente Preise für professionelle Website Optimierung."
      :pricing-plans="optimizationPricingPlans"
    />

    <!-- FAQ Section -->
    <FAQSection title="Häufig gestellte Fragen zur Website Optimierung" :faqs="optimizationFaqs" />

    <!-- Final CTA -->
    <section class="py-section-padding bg-primary text-on-primary">
      <div class="max-w-container-max mx-auto px-gutter text-center space-y-stack-md">
        <h2 class="font-display text-headline-lg">Lassen Sie Ihre Website professionell optimieren</h2>
        <p class="font-body-lg max-w-2xl mx-auto opacity-80">
          Verbessern Sie Geschwindigkeit, SEO und Performance Ihrer Website.
        </p>
        <div class="flex flex-wrap justify-center gap-6 pt-6">
          <BaseButton variant="secondary" size="lg">Website optimieren lassen</BaseButton>
          <BaseButton variant="outline" size="lg">Kostenlos beraten lassen</BaseButton>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const optimizationStats = [
  { value: '+40%', label: 'Schneller', icon: 'speed' },
  { value: 'Top Scores', label: 'Web Vitals', icon: 'verified_user' },
  { value: '+Ranking', label: 'Verbesserung', icon: 'trending_up' },
  { value: 'Mobile Ready', label: 'Optimiert', icon: 'smartphone' },
];

const optimizationServices = [
  {
    title: 'Ladezeiten Optimierung',
    description: 'Verbesserung von Performance, Bildern, CSS, JavaScript und Servergeschwindigkeit.',
    icon: 'speed',
  },
  {
    title: 'Core Web Vitals Optimierung',
    description: 'Optimierung wichtiger Google Performance Faktoren für bessere Rankings.',
    icon: 'assessment',
  },
  {
    title: 'Mobile SEO Optimierung',
    description: 'Verbesserung der mobilen Nutzererfahrung und Responsiveness.',
    icon: 'smartphone',
  },
  {
    title: 'Seitenstruktur Optimierung',
    description: 'Optimierung von URLs, Überschriften, Navigation und interner Verlinkung.',
    icon: 'architecture',
  },
  {
    title: 'Technische SEO',
    description: 'Behebung technischer SEO Probleme, Crawling Fehler und Indexierungsprobleme.',
    icon: 'engineering',
  },
  {
    title: 'Sicherheitsoptimierung',
    description: 'HTTPS, sichere Ressourcen, stabile Hosting Infrastruktur und moderne Standards.',
    icon: 'security',
  },
];

const optimizationProcess = [
  {
    title: 'Analyse',
    description: 'Technische Analyse Ihrer Website und Identifikation aller Probleme.',
  },
  {
    title: 'Priorisierung',
    description: 'Erstellung eines Optimierungsplans nach SEO Relevanz.',
  },
  {
    title: 'Umsetzung',
    description: 'Technische Optimierung, Speed Verbesserung und SEO Anpassungen.',
  },
  {
    title: 'Kontrolle',
    description: 'Monitoring, Tests und weitere Verbesserungen.',
  },
];

const optimizationBenefits = [
  {
    title: 'Mehr Sichtbarkeit',
    description: 'Verbesserte Rankings bei Google Suchanfragen.',
    icon: 'visibility',
  },
  {
    title: 'Schnellere Website',
    description: 'Bessere Nutzererfahrung und niedrigere Absprungraten.',
    icon: 'speed',
  },
  {
    title: 'Mehr Anfragen',
    description: 'Mehr organischer Traffic und höhere Conversion Rates.',
    icon: 'trending_up',
  },
  {
    title: 'Zukunftssichere Technik',
    description: 'Moderne technische Standards für langfristiges Wachstum.',
    icon: 'build',
  },
];

const commonProblems = [
  'Langsame Ladezeiten',
  'Schlechte Core Web Vitals',
  'Nicht optimierte Bilder',
  'Fehlende Meta Tags',
  'Mobile Darstellungsprobleme',
  'Unsichere Inhalte (Mixed Content)',
  'Fehlerhafte interne Verlinkung',
  'Schlechte URL Struktur',
];

const optimizationPricingPlans = [
  {
    tier: 'Basis Website Optimierung',
    price: 'ab 300 €',
    features: [
      'Performance Analyse',
      'Speed Optimierung',
      'Mobile Check',
      'Erste Verbesserungen',
    ],
    buttonText: 'Optimierung anfragen',
    isHighlighted: false,
  },
  {
    tier: 'Technische SEO Optimierung',
    price: 'ab 500 €',
    features: [
      'Vollständige Tech-Optimierung',
      'Core Web Vitals Fixes',
      'Struktur-Verbesserung',
      'Implementierungsplan',
    ],
    buttonText: 'Projekt starten',
    isHighlighted: true,
  },
  {
    tier: 'Komplette SEO Optimierung',
    price: 'ab 1.200 €',
    features: [
      'Alle Optimierungen',
      'Performance + SEO',
      'Sicherheit & Struktur',
      'Monitoring & Support',
    ],
    buttonText: 'Beratung buchen',
    isHighlighted: false,
  },
];

const optimizationFaqs = [
  {
    question: 'Was kostet technische SEO Optimierung?',
    answer:
      'Basis Optimierungen beginnen ab 300€. Umfangreiche SEO Optimierungen ab 500–1.200€. Die genauen Kosten hängen vom Umfang und der Komplexität Ihrer Website ab.',
  },
  {
    question: 'Wie lange dauert die Optimierung?',
    answer:
      'Kleine Optimierungen dauern wenige Tage, größere technische Projekte 1–3 Wochen. Das hängt von der Komplexität Ihrer Website ab.',
  },
  {
    question: 'Verbessert technische SEO meine Rankings?',
    answer:
      'Ja. Technische SEO ist eine wichtige Grundlage für bessere Google Rankings. Ohne technische Basis verlieren Sie Sichtbarkeit.',
  },
  {
    question: 'Optimieren Sie bestehende Websites?',
    answer:
      'Ja. Wir optimieren bestehende Websites unabhängig vom verwendeten System oder Framework.',
  },
  {
    question: 'Kann ich die Optimierungen selbst umsetzen?',
    answer:
      'Ja. Wir erstellen einen detaillierten Implementierungsplan. Bei technischen Fragen unterstützen wir Sie gerne.',
  },
];
</script>
