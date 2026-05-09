<template>
  <div>
    <!-- Hero Section -->
    <HeroSection
      background-image="https://lh3.googleusercontent.com/aida-public/AB6AXuAS5zdLscgbQtZZEjecvYHDkQXZP1W7c_XfVpQJf0x7AFGBVe8Zk5O1mXCBDSE5gn8F1TBNe5wotsh4kH16_RscWT5Rc-LHZ_Zrodd5Z3EClq_NVJ-zzrrOHgMyB5fy7MRD-BXVJq2DjNKRmFDMcjTe2F6Thx0doN_l6tF4c02FTh-D2VvMLDnMe7Gucrt4z33eG2j18j14Y6tvpuIoqe2CPJmN6HzOY1GgCG0ArrlB_DzDXO1ccXnkh5e0TCDMIkGJGGuIHGSFTEHM"
      badge="Professionelle SEO Analyse Agentur"
      title="SEO Analyse: Technischer Audit & Onpage Check für Ihre Website"
      description="Professioneller SEO Audit für bessere Rankings, mehr Sichtbarkeit und mehr organischen Traffic. Wir analysieren technische Fehler, OnPage SEO und Optimierungspotenziale."
      primaryCTA="Kostenloses SEO Gespräch"
      secondaryCTA="SEO Audit Preise ansehen"
      :stats="auditStats"
    />

    <!-- Why Audit Section -->
    <section class="py-section-padding bg-surface">
      <div class="max-w-container-max mx-auto px-gutter">
        <div class="max-w-3xl">
          <h2 class="font-headline-lg text-headline-lg text-primary mb-stack-md">
            Warum ist eine SEO Analyse wichtig?
          </h2>

          <p class="font-body-lg text-body-lg text-on-surface-variant mb-6">
            Viele Websites verlieren Rankings, weil technische SEO Probleme, langsame Ladezeiten oder fehlerhafte Seitenstrukturen nicht erkannt werden.
          </p>

          <p class="font-body-lg text-body-lg text-on-surface-variant">
            Eine professionelle SEO Analyse zeigt, warum Ihre Website bei Google nicht optimal rankt und welche Optimierungen notwendig sind.
          </p>
        </div>
      </div>
    </section>

    <!-- What's Included Section -->
    <section class="py-section-padding bg-surface-container-low">
      <div class="max-w-container-max mx-auto px-gutter">
        <div class="text-center max-w-2xl mx-auto mb-stack-lg">
          <h2 class="font-headline-lg text-headline-lg text-primary mb-4">
            Was beinhaltet unser SEO Audit?
          </h2>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-gutter">
          <div
            v-for="item in auditIncluded"
            :key="item.title"
            class="group glass-card ambient-shadow p-8 transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            <div class="flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300 mb-6">
              <span class="material-symbols-outlined text-primary text-2xl">{{ item.icon }}</span>
            </div>
            <h3 class="font-headline-md text-primary mb-3">{{ item.title }}</h3>
            <p class="font-body-md text-on-surface-variant leading-relaxed">{{ item.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Process Section -->
    <section class="py-section-padding bg-surface">
      <div class="max-w-container-max mx-auto px-gutter">
        <h2 class="font-headline-lg text-headline-lg text-primary text-center mb-stack-lg">
          So funktioniert unsere SEO Analyse
        </h2>

        <div class="grid md:grid-cols-4 gap-gutter">
          <div v-for="(step, index) in auditProcess" :key="step.title" class="glass-card ambient-shadow p-8">
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
            Vorteile einer professionellen SEO Analyse
          </h2>
        </div>

        <div class="grid md:grid-cols-2 gap-gutter">
          <div
            v-for="benefit in auditBenefits"
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
          Häufige SEO Probleme, die wir finden
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
      title="SEO Audit Preise"
      subtitle="Transparente Preise für professionelle SEO Analysen."
      :pricing-plans="auditPricingPlans"
    />

    <!-- FAQ Section -->
    <FAQSection title="Häufig gestellte Fragen zur SEO Analyse" :faqs="auditFaqs" />

    <!-- Final CTA -->
    <section class="py-section-padding bg-primary text-on-primary">
      <div class="max-w-container-max mx-auto px-gutter text-center space-y-stack-md">
        <h2 class="font-display text-headline-lg">Lassen Sie Ihre Website professionell analysieren</h2>
        <p class="font-body-lg max-w-2xl mx-auto opacity-80">
          Finden Sie heraus, warum Ihre Website nicht optimal bei Google rankt.
        </p>
        <div class="flex flex-wrap justify-center gap-6 pt-6">
          <BaseButton variant="secondary" size="lg">SEO Analyse anfragen</BaseButton>
          <BaseButton variant="outline" size="lg">Kostenlos beraten lassen</BaseButton>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const auditStats = [
  { value: '2-5 Tage', label: 'Analyse-Zeit', icon: 'schedule' },
  { value: 'Top Rankings', label: 'Unser Ziel', icon: 'trending_up' },
  { value: 'Komplett', label: 'Technischer Check', icon: 'verified' },
  { value: 'Klar', label: 'SEO Report', icon: 'description' },
];

const auditIncluded = [
  {
    title: 'Technischer SEO Audit',
    description: 'Analyse von Ladezeiten, Core Web Vitals, Indexierung, Crawling, Struktur und technischen Fehlern.',
    icon: 'engineering',
  },
  {
    title: 'OnPage SEO Analyse',
    description: 'Überprüfung von Überschriften, Meta Tags, Keywords, interner Verlinkung und Content Struktur.',
    icon: 'edit_document',
  },
  {
    title: 'Mobile SEO Check',
    description: 'Analyse der mobilen Optimierung und Benutzerfreundlichkeit.',
    icon: 'smartphone',
  },
  {
    title: 'Ladezeiten Analyse',
    description: 'Optimierung von Bildern, JavaScript, CSS und Server Performance.',
    icon: 'speed',
  },
  {
    title: 'Content & Keyword Analyse',
    description: 'Analyse von Keywords, Suchintention und SEO Potenzialen.',
    icon: 'description',
  },
  {
    title: 'Konkurrenzanalyse',
    description: 'Analyse Ihrer Wettbewerber und deren SEO Strategien.',
    icon: 'insights',
  },
];

const auditProcess = [
  {
    title: 'Website Analyse',
    description: 'Vollständiger technischer SEO Check Ihrer Website.',
  },
  {
    title: 'Fehler & Potenziale',
    description: 'Identifikation von SEO Problemen und Wachstumschancen.',
  },
  {
    title: 'SEO Report',
    description: 'Klar strukturierter Bericht mit Empfehlungen.',
  },
  {
    title: 'Optimierung',
    description: 'Umsetzung technischer und strategischer Verbesserungen.',
  },
];

const auditBenefits = [
  {
    title: 'Mehr Google Rankings',
    description: 'Bessere Sichtbarkeit durch gezielte Optimierungen.',
    icon: 'grade',
  },
  {
    title: 'Schnellere Website',
    description: 'Verbesserte Ladezeiten und bessere Nutzererfahrung.',
    icon: 'speed',
  },
  {
    title: 'Mehr organischer Traffic',
    description: 'Mehr Besucher über Google Suchanfragen.',
    icon: 'trending_up',
  },
  {
    title: 'Klare SEO Strategie',
    description: 'Strukturierter Plan für langfristiges Wachstum.',
    icon: 'map',
  },
];

const commonProblems = [
  'Langsame Ladezeiten',
  'Fehlende Meta Tags',
  'Schlechte mobile Optimierung',
  'Duplicate Content',
  'Falsche Überschriftenstruktur',
  'Fehlende interne Verlinkung',
  'Indexierungsprobleme',
  'Schwache Keyword Struktur',
];

const auditPricingPlans = [
  {
    tier: 'Basis SEO Analyse',
    price: 'ab 150 €',
    features: [
      'Technische Analyse',
      'OnPage Check',
      'Mobil-Optimierung',
      'Detaillierter Report',
    ],
    buttonText: 'Analyse anfragen',
    isHighlighted: false,
  },
  {
    tier: 'Technischer SEO Audit',
    price: 'ab 300 €',
    features: [
      'Vollständiger Tech-Audit',
      'Konkurrenzanalyse',
      'Core Web Vitals Check',
      'Implementierungsplan',
    ],
    buttonText: 'Audit buchen',
    isHighlighted: true,
  },
  {
    tier: 'Umfassende SEO Analyse',
    price: 'ab 500 €',
    features: [
      'Alle Audits + Konkurrenz',
      'Keyword Strategie',
      'Content Potenziale',
      'Wettbewerb-Vergleich',
    ],
    buttonText: 'Beratung buchen',
    isHighlighted: false,
  },
];

const auditFaqs = [
  {
    question: 'Was kostet ein SEO Audit?',
    answer:
      'Basis SEO Analysen beginnen ab 150€. Umfangreiche technische Audits ab 300€. Die genauen Kosten hängen von der Komplexität Ihrer Website ab.',
  },
  {
    question: 'Wie lange dauert eine SEO Analyse?',
    answer:
      'Die meisten SEO Audits dauern 2–5 Werktage. Bei umfangreichen Websites oder internationalen Analysen kann es etwas länger dauern.',
  },
  {
    question: 'Was wird bei einem SEO Audit geprüft?',
    answer:
      'Wir prüfen Technik, Ladezeiten, Struktur, Keywords, Content, mobile Optimierung, Indexierung und Wettbewerber-Strategien.',
  },
  {
    question: 'Bekomme ich einen SEO Report?',
    answer:
      'Ja. Sie erhalten einen strukturierten Bericht mit konkreten Handlungsempfehlungen und einem Prioritäts-Plan.',
  },
  {
    question: 'Optimieren Sie die Website auch um?',
    answer:
      'Ja. Nach dem Audit können wir die Optimierungen umsetzen oder Sie bei der Umsetzung unterstützen.',
  },
];
</script>
