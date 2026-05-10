<template>
  <div>
    <HeroSection
      background-image="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&h=600&fit=crop"
      badge="SEO Preise & Kosten"
      title="Transparente SEO Preise für nachhaltiges Wachstum"
      description="Professionelle Suchmaschinenoptimierung zu transparenten Preisen. SEO Lösungen für Unternehmen, lokale Firmen und internationale Projekte."
      primaryCTA="Kostenloses Angebot anfragen"
      secondaryCTA="SEO Preise ansehen"
      :stats="pricingStats"
    />

    <TrustSection :companies="trustCompanies" />

    <BenefitsSection
      title="Warum in professionelle SEO investieren?"
      :benefits="benefits"
    />

    <PricingSection
      title="Unsere SEO Pakete"
      subtitle="Flexible SEO Angebote für verschiedene Unternehmensgrößen."
      :pricing-plans="seoPackages"
    />

    <!-- Individual Services Pricing Table -->
    <section class="py-section-padding bg-surface">
      <div class="max-w-container-max mx-auto px-gutter">
        <h2 class="font-display text-[2.5rem] md:text-[3rem] text-center mb-stack-lg">Einzelne SEO Leistungen & Preise</h2>
        <div class="max-w-3xl mx-auto overflow-x-auto">
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

    <SEOSection
      title="Welche Faktoren beeinflussen SEO Kosten?"
      :features="costFactors"
    />

    <FAQSection title="Häufig gestellte Fragen zu SEO Preisen" :faqs="pricingFaqs" />

    <CTASection
      title="Lassen Sie sich ein individuelles SEO Angebot erstellen"
      description="Transparente SEO Preise für nachhaltiges Wachstum und bessere Google Rankings."
      primary-cta="SEO Angebot anfragen"
      secondary-cta="Kostenlos beraten lassen"
    />
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'SEO Preise & Kosten – Transparente SEO Pakete | EvolaTec',
  meta: [
    { name: 'description', content: 'Transparente SEO Preise für professionelle Suchmaschinenoptimierung. SEO Pakete ab 250€/Monat. Keine versteckten Kosten.' },
  ],
  link: [
    { rel: 'canonical', href: 'https://evolatec.de/seo-pricing' },
  ],
});

const pricingStats = [
  { value: 'ab 250€', label: 'SEO Betreuung', icon: 'trending_up' },
  { value: 'Transparent', label: 'Preise', icon: 'price_check' },
  { value: 'Flexibel', label: 'Pakete', icon: 'tune' },
  { value: 'ROI', label: 'fokussiert', icon: 'analytics' },
];

const trustCompanies = ['FAIRE PREISE', 'TRANSPARENTE KOSTEN', 'FLEXIBLE PAKETE', 'KEIN VERSTECKTES'];

const benefits = [
  {
    icon: 'trending_up',
    title: 'Langfristiger Traffic',
    description: 'SEO liefert nachhaltigen organischen Traffic ohne permanente Werbekosten — eine der besten Investitionen im Marketing.',
  },
  {
    icon: 'people',
    title: 'Mehr Kunden',
    description: 'Bessere Google Rankings bringen mehr qualifizierte Anfragen von Kunden mit echter Kaufabsicht.',
  },
  {
    icon: 'grade',
    title: 'Wettbewerbsvorteil',
    description: 'Unternehmen mit guter SEO setzen sich dauerhaft gegen Konkurrenten durch und gewinnen Marktanteile.',
  },
];

const seoPackages = [
  {
    tier: 'START',
    price: 'ab 250 €/Monat',
    features: ['Technische SEO Basis', 'Keyword Analyse', 'OnPage Optimierung', 'Google Indexierung', 'Monatlicher Report'],
    buttonText: 'Angebot anfragen',
    isHighlighted: false,
  },
  {
    tier: 'GROWTH',
    price: 'ab 700 €/Monat',
    features: ['Komplette SEO Strategie', 'Technische SEO Optimierung', 'Content Optimierung', 'Local SEO', 'Linkbuilding', 'SEO Monitoring'],
    buttonText: 'Angebot anfragen',
    isHighlighted: true,
  },
  {
    tier: 'PREMIUM',
    price: 'ab 1.500 €/Monat',
    features: ['Internationale SEO Strategie', 'Mehrsprachige SEO', 'Hochwertiges Linkbuilding', 'Content Strategie', 'Konkurrenzanalyse', 'Priorisierte Betreuung'],
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

const costFactors = [
  'Konkurrenz in Ihrer Branche',
  'Größe der Website',
  'Anzahl der Ziel-Keywords',
  'Technischer Zustand der Website',
  'Internationales oder lokales SEO',
  'Umfang des Contents',
  'Linkbuilding Anforderungen',
  'Zielmärkte & Sprachen',
];

const pricingFaqs = [
  { question: 'Was kostet SEO pro Monat?', answer: 'Professionelle SEO Betreuung beginnt ab 250€/Monat. Die genauen Kosten hängen von Ihren Zielen, Branche und Website-Größe ab.' },
  { question: 'Warum ist SEO langfristig?', answer: 'Google Rankings werden kontinuierlich aufgebaut und verbessert. Nachhaltige SEO ist ein laufender Prozess, der regelmäßige Optimierung erfordert.' },
  { question: 'Gibt es einmalige SEO Leistungen?', answer: 'Ja. SEO Audits, technische Optimierungen und Beratungen können einmalig gebucht werden. Beispiele: SEO Audit (ab 150€) oder technische Optimierung (ab 500€).' },
  { question: 'Ist günstige SEO sinnvoll?', answer: 'Sehr günstige SEO Angebote arbeiten oft mit riskanten Methoden. Nachhaltige SEO benötigt Qualität, Zeit und Expertise — investieren Sie in langfristige Ergebnisse.' },
  { question: 'Kann ich monatlich kündigen?', answer: 'Ja. Unsere SEO Verträge sind flexibel. Sie zahlen nur für die Leistungen, die Sie wirklich nutzen.' },
];
</script>
