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
            class="group glass-card ambient-shadow p-8 transition-all duration-300 hover:scale-105 hover:shadow-lg border-t-4"
            :class="item.borderColor"
          >
            <div
              class="flex items-center justify-center w-14 h-14 rounded-2xl mb-6 transition-all duration-300 group-hover:scale-110"
              :class="item.iconBg"
            >
              <span class="material-symbols-outlined text-2xl" :class="item.iconColor">{{ item.icon }}</span>
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
          <div
            v-for="(step, index) in auditProcess"
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
            Vorteile einer professionellen SEO Analyse
          </h2>
        </div>

        <div class="grid md:grid-cols-2 gap-gutter">
          <div
            v-for="benefit in auditBenefits"
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

    <!-- Common Problems Section -->
    <section class="py-section-padding bg-gradient-to-br from-slate-900 to-slate-800">
      <div class="max-w-container-max mx-auto px-gutter">
        <h2 class="font-headline-lg text-headline-lg text-white text-center mb-stack-lg">
          Häufige SEO Probleme, die wir finden
        </h2>

        <div class="max-w-3xl mx-auto">
          <div class="grid md:grid-cols-2 gap-4">
            <div
              v-for="(problem, index) in commonProblems"
              :key="problem"
              class="flex gap-4 items-center bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10"
            >
              <span
                class="material-symbols-outlined text-xl flex-shrink-0"
                :class="problemColors[index % problemColors.length]"
              >error</span>
              <p class="font-body-md text-white/80">{{ problem }}</p>
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
    iconBg: 'bg-blue-100',
    iconColor: 'text-blue-600',
    borderColor: 'border-blue-500',
  },
  {
    title: 'OnPage SEO Analyse',
    description: 'Überprüfung von Überschriften, Meta Tags, Keywords, interner Verlinkung und Content Struktur.',
    icon: 'edit_document',
    iconBg: 'bg-emerald-100',
    iconColor: 'text-emerald-600',
    borderColor: 'border-emerald-500',
  },
  {
    title: 'Mobile SEO Check',
    description: 'Analyse der mobilen Optimierung und Benutzerfreundlichkeit.',
    icon: 'smartphone',
    iconBg: 'bg-orange-100',
    iconColor: 'text-orange-600',
    borderColor: 'border-orange-500',
  },
  {
    title: 'Ladezeiten Analyse',
    description: 'Optimierung von Bildern, JavaScript, CSS und Server Performance.',
    icon: 'speed',
    iconBg: 'bg-purple-100',
    iconColor: 'text-purple-600',
    borderColor: 'border-purple-500',
  },
  {
    title: 'Content & Keyword Analyse',
    description: 'Analyse von Keywords, Suchintention und SEO Potenzialen.',
    icon: 'description',
    iconBg: 'bg-rose-100',
    iconColor: 'text-rose-600',
    borderColor: 'border-rose-500',
  },
  {
    title: 'Konkurrenzanalyse',
    description: 'Analyse Ihrer Wettbewerber und deren SEO Strategien.',
    icon: 'insights',
    iconBg: 'bg-teal-100',
    iconColor: 'text-teal-600',
    borderColor: 'border-teal-500',
  },
];

const auditProcess = [
  {
    title: 'Website Analyse',
    description: 'Vollständiger technischer SEO Check Ihrer Website.',
    icon: 'search',
    iconBg: 'bg-blue-100',
    iconColor: 'text-blue-600',
    chipBg: 'bg-blue-50',
    borderColor: 'border-blue-400',
  },
  {
    title: 'Fehler & Potenziale',
    description: 'Identifikation von SEO Problemen und Wachstumschancen.',
    icon: 'bug_report',
    iconBg: 'bg-orange-100',
    iconColor: 'text-orange-600',
    chipBg: 'bg-orange-50',
    borderColor: 'border-orange-400',
  },
  {
    title: 'SEO Report',
    description: 'Klar strukturierter Bericht mit Empfehlungen.',
    icon: 'description',
    iconBg: 'bg-emerald-100',
    iconColor: 'text-emerald-600',
    chipBg: 'bg-emerald-50',
    borderColor: 'border-emerald-400',
  },
  {
    title: 'Optimierung',
    description: 'Umsetzung technischer und strategischer Verbesserungen.',
    icon: 'build',
    iconBg: 'bg-purple-100',
    iconColor: 'text-purple-600',
    chipBg: 'bg-purple-50',
    borderColor: 'border-purple-400',
  },
];

const auditBenefits = [
  {
    title: 'Mehr Google Rankings',
    description: 'Bessere Sichtbarkeit durch gezielte Optimierungen.',
    icon: 'grade',
    iconBg: 'bg-blue-100',
    iconColor: 'text-blue-600',
  },
  {
    title: 'Schnellere Website',
    description: 'Verbesserte Ladezeiten und bessere Nutzererfahrung.',
    icon: 'speed',
    iconBg: 'bg-orange-100',
    iconColor: 'text-orange-600',
  },
  {
    title: 'Mehr organischer Traffic',
    description: 'Mehr Besucher über Google Suchanfragen.',
    icon: 'trending_up',
    iconBg: 'bg-emerald-100',
    iconColor: 'text-emerald-600',
  },
  {
    title: 'Klare SEO Strategie',
    description: 'Strukturierter Plan für langfristiges Wachstum.',
    icon: 'map',
    iconBg: 'bg-purple-100',
    iconColor: 'text-purple-600',
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

const problemColors = [
  'text-red-400',
  'text-orange-400',
  'text-yellow-400',
  'text-rose-400',
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
