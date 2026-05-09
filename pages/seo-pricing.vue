<template>
  <div>
    <!-- Hero Section -->
    <HeroSection
      background-image="https://lh3.googleusercontent.com/aida-public/AB6AXuAS5zdLscgbQtZZEjecvYHDkQXZP1W7c_XfVpQJf0x7AFGBVe8Zk5O1mXCBDSE5gn8F1TBNe5wotsh4kH16_RscWT5Rc-LHZ_Zrodd5Z3EClq_NVJ-zzrrOHgMyB5fy7MRD-BXVJq2DjNKRmFDMcjTe2F6Thx0doN_l6tF4c02FTh-D2VvMLDnMe7Gucrt4z33eG2j18j14Y6tvpuIoqe2CPJmN6HzOY1GgCG0ArrlB_DzDXO1ccXnkh5e0TCDMIkGJGGuIHGSFTEHM"
      badge="SEO Preise & Kosten"
      title="Transparente SEO Preise für nachhaltiges Wachstum"
      description="Professionelle Suchmaschinenoptimierung zu transparenten Preisen. SEO Lösungen für Unternehmen, lokale Firmen und internationale Projekte."
      primaryCTA="Kostenloses Angebot anfragen"
      secondaryCTA="SEO Preise ansehen"
      :stats="pricingStats"
    />

    <!-- Intro Section -->
    <section class="py-section-padding bg-surface">
      <div class="max-w-container-max mx-auto px-gutter">
        <div class="max-w-3xl">
          <h2 class="font-headline-lg text-headline-lg text-primary mb-stack-md">
            Was kostet professionelle SEO?
          </h2>

          <p class="font-body-lg text-body-lg text-on-surface-variant mb-6">
            Die Kosten für Suchmaschinenoptimierung hängen vom Wettbewerb, der Website Größe und den Zielen Ihres Unternehmens ab.
          </p>

          <p class="font-body-lg text-body-lg text-on-surface-variant">
            EvolaTec bietet transparente SEO Preise ohne versteckte Kosten. Jede SEO Strategie wird individuell geplant.
          </p>
        </div>
      </div>
    </section>

    <!-- SEO Packages Section -->
    <PricingSection
      title="Unsere SEO Pakete"
      subtitle="Flexible SEO Angebote für verschiedene Unternehmensgrößen."
      :pricing-plans="seoPackages"
    />

    <!-- Individual Services Section -->
    <section class="py-section-padding bg-surface">
      <div class="max-w-container-max mx-auto px-gutter">
        <h2 class="font-headline-lg text-headline-lg text-primary text-center mb-stack-lg">
          Einzelne SEO Leistungen & Preise
        </h2>

        <div class="max-w-4xl mx-auto overflow-x-auto">
          <table class="w-full">
            <thead>
              <tr class="border-b-2 border-primary">
                <th class="text-left py-4 px-6 font-headline-md text-primary">Leistung</th>
                <th class="text-right py-4 px-6 font-headline-md text-primary">Preis</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="service in individualServices"
                :key="service.name"
                class="border-b border-outline-variant/20 hover:bg-surface-container-low transition-colors"
              >
                <td class="py-4 px-6 font-body-md text-on-surface">{{ service.name }}</td>
                <td class="py-4 px-6 font-body-md text-primary font-bold text-right">{{ service.price }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <!-- Benefits Section -->
    <section class="py-section-padding bg-surface-container-low">
      <div class="max-w-container-max mx-auto px-gutter">
        <div class="text-center max-w-2xl mx-auto mb-stack-lg">
          <h2 class="font-headline-lg text-headline-lg text-primary mb-4">
            Warum in professionelle SEO investieren?
          </h2>
        </div>

        <div class="grid md:grid-cols-2 gap-gutter max-w-4xl mx-auto">
          <div
            v-for="benefit in seoBenefits"
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

    <!-- Factors Section -->
    <section class="py-section-padding bg-surface">
      <div class="max-w-container-max mx-auto px-gutter">
        <h2 class="font-headline-lg text-headline-lg text-primary text-center mb-stack-lg">
          Welche Faktoren beeinflussen SEO Kosten?
        </h2>

        <div class="max-w-3xl mx-auto">
          <div class="grid md:grid-cols-2 gap-gutter">
            <div v-for="factor in costFactors" :key="factor" class="flex gap-4 items-start">
              <span class="material-symbols-outlined text-primary text-2xl flex-shrink-0 mt-1">check_circle</span>
              <p class="font-body-md text-on-surface-variant">{{ factor }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <FAQSection title="Häufig gestellte Fragen zu SEO Preisen" :faqs="pricingFaqs" />

    <!-- Final CTA -->
    <section class="py-section-padding bg-primary text-on-primary">
      <div class="max-w-container-max mx-auto px-gutter text-center space-y-stack-md">
        <h2 class="font-display text-headline-lg">Lassen Sie sich ein individuelles SEO Angebot erstellen</h2>
        <p class="font-body-lg max-w-2xl mx-auto opacity-80">
          Transparente SEO Preise für nachhaltiges Wachstum und bessere Google Rankings.
        </p>
        <div class="flex flex-wrap justify-center gap-6 pt-6">
          <BaseButton variant="secondary" size="lg">SEO Angebot anfragen</BaseButton>
          <BaseButton variant="outline" size="lg">Kostenlos beraten lassen</BaseButton>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const pricingStats = [
  { value: 'ab 250€', label: 'SEO Betreuung', icon: 'trending_up' },
  { value: 'Transparent', label: 'Preise', icon: 'price_check' },
  { value: 'Flexibel', label: 'Pakete', icon: 'tune' },
  { value: 'ROI', label: 'fokussiert', icon: 'analytics' },
];

const seoPackages = [
  {
    tier: 'START',
    price: 'ab 250 €/Monat',
    features: [
      'Technische SEO Basis',
      'Keyword Analyse',
      'OnPage Optimierung',
      'Google Indexierung',
      'Monatlicher Report',
    ],
    buttonText: 'Angebot anfragen',
    isHighlighted: false,
  },
  {
    tier: 'GROWTH',
    price: 'ab 700 €/Monat',
    features: [
      'Komplette SEO Strategie',
      'Technische SEO Optimierung',
      'Content Optimierung',
      'Local SEO',
      'Linkbuilding',
      'SEO Monitoring',
    ],
    buttonText: 'Angebot anfragen',
    isHighlighted: true,
  },
  {
    tier: 'PREMIUM',
    price: 'ab 1.500 €/Monat',
    features: [
      'Internationale SEO Strategie',
      'Mehrsprachige SEO',
      'Hochwertiges Linkbuilding',
      'Content Strategie',
      'Konkurrenzanalyse',
      'Priorisierte Betreuung',
    ],
    buttonText: 'Angebot anfragen',
    isHighlighted: false,
  },
];

const individualServices = [
  { name: 'SEO Analyse & Audit', price: 'ab 150€' },
  { name: 'Technische SEO Optimierung', price: 'ab 500€' },
  { name: 'Local SEO', price: 'ab 500€' },
  { name: 'Linkbuilding', price: 'ab 700€' },
  { name: 'SEO Beratung', price: 'ab 90€/Stunde' },
  { name: 'SEO Content Erstellung', price: 'ab 80€ pro Artikel' },
];

const seoBenefits = [
  {
    title: 'Langfristiger Traffic',
    description: 'SEO liefert nachhaltigen Traffic ohne permanente Werbekosten.',
    icon: 'trending_up',
  },
  {
    title: 'Mehr Kunden',
    description: 'Bessere Rankings bringen mehr qualifizierte Anfragen.',
    icon: 'people',
  },
  {
    title: 'Mehr Vertrauen',
    description: 'Gute Google Rankings stärken Ihre Marke.',
    icon: 'verified_user',
  },
  {
    title: 'Wettbewerbsvorteil',
    description: 'SEO hilft, sich gegen Konkurrenten durchzusetzen.',
    icon: 'grade',
  },
];

const costFactors = [
  'Konkurrenz in Ihrer Branche',
  'Größe der Website',
  'Anzahl der Keywords',
  'Technischer Zustand der Website',
  'Internationales oder lokales SEO',
  'Content Umfang',
  'Linkbuilding Anforderungen',
  'Zielmärkte & Sprachen',
];

const pricingFaqs = [
  {
    question: 'Was kostet SEO pro Monat?',
    answer:
      'Professionelle SEO Betreuung beginnt ab 250€/Monat. Die genauen Kosten hängen von Ihren Zielen, Branche und Website-Größe ab.',
  },
  {
    question: 'Warum ist SEO langfristig?',
    answer:
      'Google Rankings werden kontinuierlich aufgebaut und verbessert. Nachhaltige SEO ist ein laufender Prozess, der regelmäßige Optimierung erfordert.',
  },
  {
    question: 'Gibt es einmalige SEO Leistungen?',
    answer:
      'Ja. SEO Audits, technische Optimierungen und Beratungen können einmalig gebucht werden. Beispiele: SEO Audit (ab 150€) oder technische Optimierung (ab 500€).',
  },
  {
    question: 'Ist günstige SEO sinnvoll?',
    answer:
      'Sehr günstige SEO Angebote arbeiten oft mit riskanten Methoden. Nachhaltige SEO benötigt Qualität, Zeit und Expertise - investieren Sie in langfristige Ergebnisse.',
  },
  {
    question: 'Kann ich monatlich kündigen?',
    answer:
      'Ja. Unsere SEO Verträge sind flexibel. Sie zahlen nur für die Leistungen, die Sie wirklich nutzen. Kostenlose Beratung für Ihr individuelles Angebot.',
  },
];
</script>
