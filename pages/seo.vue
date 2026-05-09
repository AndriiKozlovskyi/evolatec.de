<template>
  <div>
    <!-- Hero Section -->
    <HeroSection
      background-image="https://lh3.googleusercontent.com/aida-public/AB6AXuAS5zdLscgbQtZZEjecvYHDkQXZP1W7c_XfVpQJf0x7AFGBVe8Zk5O1mXCBDSE5gn8F1TBNe5wotsh4kH16_RscWT5Rc-LHZ_Zrodd5Z3EClq_NVJ-zzrrOHgMyB5fy7MRD-BXVJq2DjNKRmFDMcjTe2F6Thx0doN_l6tF4c02FTh-D2VvMLDnMe7Gucrt4z33eG2j18j14Y6tvpuIoqe2CPJmN6HzOY1GgCG0ArrlB_DzDXO1ccXnkh5e0TCDMIkGJGGuIHGSFTEHM"
      badge="Professionelle SEO Agentur"
      title="Professionelle SEO Agentur: Mehr Sichtbarkeit & mehr Kunden durch Google"
      description="Moderne Suchmaschinenoptimierung für Unternehmen, die bei Google besser gefunden werden möchten. Mehr Rankings, mehr Traffic und mehr Anfragen."
      primaryCTA="Kostenloses SEO Gespräch"
      secondaryCTA="SEO Preise ansehen"
      :stats="seoStats"
    />

    <!-- Trust & Statistics Section -->
    <section class="py-section-padding bg-surface">
      <div class="max-w-container-max mx-auto px-gutter">
        <div class="text-center max-w-2xl mx-auto mb-stack-lg">
          <h2 class="font-headline-lg text-headline-lg text-primary mb-4">
            Warum professionelle Suchmaschinenoptimierung wichtig ist
          </h2>
          <p class="font-body-lg text-body-lg text-on-surface-variant">
            Die meisten Kunden suchen heute über Google nach Dienstleistungen. Ohne SEO verlieren Unternehmen täglich
            potenzielle Kunden an Wettbewerber.
          </p>
        </div>

        <div class="grid md:grid-cols-3 gap-gutter">
          <!-- 90% card -->
          <div class="glass-card ambient-shadow p-10 text-center border-t-4 border-blue-500">
            <span class="material-symbols-outlined text-4xl text-blue-500 mb-3 block">trending_up</span>
            <div class="text-display text-primary mb-4">90%</div>
            <p class="font-body-md text-on-surface-variant">aller Nutzer klicken nur auf die erste Google Seite.</p>
          </div>
          <!-- SEO card -->
          <div class="glass-card ambient-shadow p-10 text-center border-t-4 border-emerald-500">
            <span class="material-symbols-outlined text-4xl text-emerald-500 mb-3 block">search</span>
            <div class="text-headline-lg text-primary mb-4 font-bold">SEO</div>
            <p class="font-body-md text-on-surface-variant">
              liefert langfristig günstigere Leads als Werbung.
            </p>
          </div>
          <!-- Sichtbarkeit card -->
          <div class="glass-card ambient-shadow p-10 text-center border-t-4 border-purple-500">
            <span class="material-symbols-outlined text-4xl text-purple-500 mb-3 block">visibility</span>
            <div class="text-headline-lg text-primary mb-4 font-bold">Mehr Sichtbarkeit</div>
            <p class="font-body-md text-on-surface-variant">bedeutet mehr Vertrauen und mehr Kunden.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- SEO Services Navigation -->
    <section class="py-section-padding bg-surface-container-low">
      <div class="max-w-container-max mx-auto px-gutter">
        <div class="text-center max-w-2xl mx-auto mb-stack-lg">
          <h2 class="font-headline-lg text-headline-lg text-primary mb-4">Unsere SEO Leistungen</h2>
          <p class="font-body-lg text-body-lg text-on-surface-variant">
            Wählen Sie die SEO Leistung, die zu Ihren Zielen passt.
          </p>
        </div>

        <div class="grid md:grid-cols-2 gap-gutter max-w-4xl mx-auto">
          <!-- SEO Strategie -->
          <NuxtLink
            to="/seo"
            class="group glass-card ambient-shadow p-8 text-center transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            <div class="w-16 h-16 rounded-2xl flex items-center justify-center bg-blue-100 group-hover:bg-blue-600 transition-colors duration-300 mb-4 mx-auto">
              <span class="material-symbols-outlined text-3xl text-blue-600 group-hover:text-white transition-colors duration-300">trending_up</span>
            </div>
            <h3 class="font-headline-md text-primary mb-2">SEO Strategie</h3>
            <p class="font-body-md text-on-surface-variant mb-4">Langfristige SEO Strategien für nachhaltiges Wachstum.</p>
            <span class="text-primary font-bold inline-flex items-center gap-2 group-hover:gap-3 transition-all">
              Mehr erfahren
              <span class="material-symbols-outlined text-lg">arrow_forward</span>
            </span>
          </NuxtLink>

          <!-- SEO Optimierung -->
          <NuxtLink
            to="/seo-optimization"
            class="group glass-card ambient-shadow p-8 text-center transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            <div class="w-16 h-16 rounded-2xl flex items-center justify-center bg-orange-100 group-hover:bg-orange-600 transition-colors duration-300 mb-4 mx-auto">
              <span class="material-symbols-outlined text-3xl text-orange-600 group-hover:text-white transition-colors duration-300">speed</span>
            </div>
            <h3 class="font-headline-md text-primary mb-2">SEO Optimierung</h3>
            <p class="font-body-md text-on-surface-variant mb-4">Technische Optimierung für Geschwindigkeit und Performance.</p>
            <span class="text-primary font-bold inline-flex items-center gap-2 group-hover:gap-3 transition-all">
              Mehr erfahren
              <span class="material-symbols-outlined text-lg">arrow_forward</span>
            </span>
          </NuxtLink>

          <!-- Local SEO -->
          <NuxtLink
            to="/seo-local"
            class="group glass-card ambient-shadow p-8 text-center transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            <div class="w-16 h-16 rounded-2xl flex items-center justify-center bg-green-100 group-hover:bg-green-600 transition-colors duration-300 mb-4 mx-auto">
              <span class="material-symbols-outlined text-3xl text-green-600 group-hover:text-white transition-colors duration-300">location_on</span>
            </div>
            <h3 class="font-headline-md text-primary mb-2">Local SEO</h3>
            <p class="font-body-md text-on-surface-variant mb-4">Mehr lokale Sichtbarkeit und regionale Kunden.</p>
            <span class="text-primary font-bold inline-flex items-center gap-2 group-hover:gap-3 transition-all">
              Mehr erfahren
              <span class="material-symbols-outlined text-lg">arrow_forward</span>
            </span>
          </NuxtLink>

          <!-- SEO Audit -->
          <NuxtLink
            to="/seo-audit"
            class="group glass-card ambient-shadow p-8 text-center transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            <div class="w-16 h-16 rounded-2xl flex items-center justify-center bg-purple-100 group-hover:bg-purple-600 transition-colors duration-300 mb-4 mx-auto">
              <span class="material-symbols-outlined text-3xl text-purple-600 group-hover:text-white transition-colors duration-300">assessment</span>
            </div>
            <h3 class="font-headline-md text-primary mb-2">SEO Audit & Analyse</h3>
            <p class="font-body-md text-on-surface-variant mb-4">Professionelle Audits und technische SEO Analysen.</p>
            <span class="text-primary font-bold inline-flex items-center gap-2 group-hover:gap-3 transition-all">
              Mehr erfahren
              <span class="material-symbols-outlined text-lg">arrow_forward</span>
            </span>
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Services Section -->
    <section class="py-section-padding bg-surface-container-low">
      <div class="max-w-container-max mx-auto px-gutter">
        <div class="text-center max-w-2xl mx-auto mb-stack-lg">
          <h2 class="font-headline-lg text-headline-lg text-primary mb-4">Unsere SEO Dienstleistungen</h2>
          <p class="font-body-lg text-body-lg text-on-surface-variant">
            Professionelle SEO Lösungen für Unternehmen jeder Größe.
          </p>
        </div>

        <div class="grid md:grid-cols-3 gap-gutter">
          <div
            v-for="service in seoServices"
            :key="service.title"
            class="group glass-card ambient-shadow p-8 transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            <div
              class="flex items-center justify-center w-14 h-14 rounded-xl transition-colors duration-300 mb-6"
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
          So funktioniert unsere SEO Optimierung
        </h2>

        <div class="grid md:grid-cols-4 gap-gutter">
          <div v-for="(step, index) in processSteps" :key="step.title" class="glass-card ambient-shadow p-8 text-center">
            <div class="text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-2">Schritt {{ index + 1 }}</div>
            <div
              class="w-12 h-12 text-white flex items-center justify-center font-bold rounded-full mb-3 mx-auto text-lg"
              :class="step.color"
            >
              {{ index + 1 }}
            </div>
            <div class="mb-4">
              <span class="material-symbols-outlined text-2xl" :class="step.color.replace('bg-', 'text-')">{{ step.icon }}</span>
            </div>
            <h3 class="font-headline-md text-primary mb-2">{{ step.title }}</h3>
            <p class="font-body-md text-on-surface-variant">{{ step.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Benefits Section -->
    <section class="py-section-padding bg-primary text-on-primary">
      <div class="max-w-container-max mx-auto px-gutter">
        <h2 class="font-headline-lg text-headline-lg mb-stack-lg text-center">Warum EvolaTec als SEO Agentur?</h2>

        <div class="grid md:grid-cols-2 gap-stack-lg">
          <div v-for="benefit in benefits" :key="benefit.title" class="flex gap-6">
            <div
              class="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center"
              :class="benefit.iconBg"
            >
              <span class="material-symbols-outlined text-2xl" :class="benefit.iconColor">{{ benefit.icon }}</span>
            </div>
            <div>
              <h3 class="font-headline-md mb-2">{{ benefit.title }}</h3>
              <p class="font-body-md text-on-primary-container/80">{{ benefit.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Results Section -->
    <section class="py-section-padding bg-gradient-to-br from-slate-900 to-slate-800">
      <div class="max-w-container-max mx-auto px-gutter">
        <h2 class="font-headline-lg text-headline-lg text-white text-center mb-stack-lg">
          Was gute SEO bewirken kann
        </h2>

        <div class="grid md:grid-cols-3 gap-gutter">
          <div
            v-for="result in results"
            :key="result.value"
            class="bg-white/5 border border-white/10 rounded-2xl p-10 text-center"
          >
            <div
              class="text-display font-bold mb-4 bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent"
            >
              {{ result.value }}
            </div>
            <p class="font-body-md text-white/60">{{ result.label }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Pricing Section -->
    <PricingSection
      title="SEO Preise"
      subtitle="Transparente Preise für professionelle Suchmaschinenoptimierung."
      :pricing-plans="seoPricingPlans"
    />

    <!-- FAQ Section -->
    <FAQSection title="Häufig gestellte Fragen zur SEO Optimierung" :faqs="seoFaqs" />

    <!-- Final CTA -->
    <section class="py-section-padding bg-primary text-on-primary">
      <div class="max-w-container-max mx-auto px-gutter text-center space-y-stack-md">
        <h2 class="font-display text-headline-lg">Mehr Kunden durch professionelle SEO</h2>
        <p class="font-body-lg max-w-2xl mx-auto opacity-80">
          Lassen Sie Ihre Website bei Google sichtbar werden.
        </p>
        <div class="flex flex-wrap justify-center gap-6 pt-6">
          <BaseButton variant="secondary" size="lg">Kostenloses SEO Gespräch</BaseButton>
          <BaseButton variant="outline" size="lg">Angebot anfragen</BaseButton>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const seoStats = [
  { value: '+300%', label: 'Organischer Traffic', icon: 'trending_up' },
  { value: 'Top Rankings', label: 'Bei Google', icon: 'grade' },
  { value: '+Leads', label: 'Ohne Werbung', icon: 'people' },
  { value: 'Sichtbar', label: 'Bei Kunden', icon: 'visibility' },
];

const seoServices = [
  {
    title: 'Technische SEO Optimierung',
    description: 'Ladezeiten, Struktur, Indexierung, Core Web Vitals und technische Fehlerbehebung.',
    icon: 'engineering',
    iconBg: 'bg-blue-100',
    iconColor: 'text-blue-600',
  },
  {
    title: 'OnPage SEO',
    description: 'Optimierung von Seitenstruktur, Content, Überschriften, Keywords und interner Verlinkung.',
    icon: 'edit_document',
    iconBg: 'bg-emerald-100',
    iconColor: 'text-emerald-600',
  },
  {
    title: 'Local SEO',
    description: 'Mehr lokale Sichtbarkeit über Google Maps und regionale Suchanfragen.',
    icon: 'location_on',
    iconBg: 'bg-orange-100',
    iconColor: 'text-orange-600',
  },
  {
    title: 'Internationale SEO',
    description: 'Mehrsprachige SEO Strategien für internationale Unternehmen.',
    icon: 'language',
    iconBg: 'bg-purple-100',
    iconColor: 'text-purple-600',
  },
  {
    title: 'SEO Content Strategie',
    description: 'SEO Texte, Landingpages, Blogartikel und Keyword-Strukturen.',
    icon: 'description',
    iconBg: 'bg-rose-100',
    iconColor: 'text-rose-600',
  },
  {
    title: 'SEO Analyse & Reporting',
    description: 'Rankings, Traffic, Sichtbarkeit und monatliche Reports.',
    icon: 'assessment',
    iconBg: 'bg-teal-100',
    iconColor: 'text-teal-600',
  },
];

const processSteps = [
  {
    title: 'SEO Analyse',
    description: 'Technische Analyse, Konkurrenzanalyse und Keyword-Recherche.',
    icon: 'search',
    color: 'bg-blue-500',
  },
  {
    title: 'SEO Strategie',
    description: 'Erstellung eines klaren SEO Plans mit Prioritäten und Zielen.',
    icon: 'map',
    color: 'bg-purple-500',
  },
  {
    title: 'Umsetzung',
    description: 'Optimierung von Website, Content und Technik.',
    icon: 'rocket_launch',
    color: 'bg-orange-500',
  },
  {
    title: 'Wachstum',
    description: 'Monitoring, Reporting und kontinuierliche Verbesserung.',
    icon: 'trending_up',
    color: 'bg-emerald-500',
  },
];

const benefits = [
  {
    title: 'SEO + Entwicklung',
    description: 'Wir optimieren nicht nur Inhalte, sondern auch die technische Basis Ihrer Website.',
    icon: 'code',
    iconBg: 'bg-blue-100/20',
    iconColor: 'text-blue-300',
  },
  {
    title: 'Fokus auf Ergebnisse',
    description: 'Mehr Leads, mehr Sichtbarkeit und nachhaltiges Wachstum.',
    icon: 'analytics',
    iconBg: 'bg-emerald-100/20',
    iconColor: 'text-emerald-300',
  },
  {
    title: 'Transparente Kommunikation',
    description: 'Klare Reports und verständliche SEO Prozesse.',
    icon: 'chat',
    iconBg: 'bg-orange-100/20',
    iconColor: 'text-orange-300',
  },
  {
    title: 'Internationale Erfahrung',
    description: 'SEO Strategien für Deutschland, Europa und internationale Märkte.',
    icon: 'language',
    iconBg: 'bg-purple-100/20',
    iconColor: 'text-purple-300',
  },
];

const results = [
  {
    value: '+300%',
    label: 'organischer Traffic',
  },
  {
    value: 'Top Rankings',
    label: 'bei Google Suchanfragen',
  },
  {
    value: 'Mehr Leads',
    label: 'ohne zusätzliche Werbung',
  },
];

const seoPricingPlans = [
  {
    tier: 'SEO Audit',
    price: 'ab 150 €',
    features: [
      'Technische Analyse',
      'Konkurrenzanalyse',
      'Keyword-Recherche',
      'Detaillierter Report',
    ],
    buttonText: 'Audit anfragen',
    isHighlighted: false,
  },
  {
    tier: 'Basis SEO',
    price: 'ab 500 €',
    features: [
      'OnPage Optimierung',
      'Technische Fixes',
      'Content Optimierung',
      'Erste Rankings',
    ],
    buttonText: 'Paket wählen',
    isHighlighted: true,
  },
  {
    tier: 'Monatliche Betreuung',
    price: 'ab 250 €/Monat',
    features: [
      'Kontinuierliche Optimierung',
      'Content Updates',
      'Monatliche Reports',
      'Support & Beratung',
    ],
    buttonText: 'Beratung buchen',
    isHighlighted: false,
  },
];

const seoFaqs = [
  {
    question: 'Wie lange dauert SEO?',
    answer:
      'Erste Ergebnisse sind oft nach 2–3 Monaten sichtbar. Nachhaltige SEO ist jedoch ein langfristiger Prozess, der kontinuierliche Optimierung erfordert.',
  },
  {
    question: 'Was kostet professionelle SEO?',
    answer: 'Basis SEO beginnt ab 500€, monatliche Betreuung ab 250€/Monat. Genaue Preise hängen von Umfang und Zielgruppe ab.',
  },
  {
    question: 'Ist SEO besser als Werbung?',
    answer:
      'SEO liefert langfristig günstigeren Traffic, während Werbung sofortige Ergebnisse bringt. Beide Strategien funktionieren zusammen am besten.',
  },
  {
    question: 'Optimieren Sie internationale Websites?',
    answer: 'Ja. Wir bieten mehrsprachige und internationale SEO Strategien für Unternehmen an, die global wachsen möchten.',
  },
];
</script>
