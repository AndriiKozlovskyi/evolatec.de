<template>
  <div>
    <HeroSection
      background-image="/seo/audit.webp"
      badge="Professionelle SEO Analyse Agentur"
      title="SEO Audit & Analyse: Technischer Check für Ihre Website"
      description="Professioneller SEO Audit für bessere Rankings, mehr Sichtbarkeit und mehr organischen Traffic. Wir analysieren technische Fehler, OnPage SEO und Optimierungspotenziale."
      primaryCTA="Kostenloses SEO Gespräch"
      secondaryCTA="Preise ansehen"
      :stats="auditStats"
    />

    <TrustSection :companies="trustCompanies" />

    <BenefitsSection
      title="Warum ein professioneller SEO Audit entscheidend ist"
      :benefits="benefits"
    />

    <ProcessSection
      title="So funktioniert unsere SEO Analyse"
      :steps="processSteps"
    />

    <FeaturesSection
      title="Was unser SEO Audit beinhaltet"
      :features="features"
      image-url="/web-development/seo.webp"
    />

    <!-- Common Problems Section -->
    <section data-nav-label="Probleme" data-nav-icon="bug_report" class="py-section-padding bg-surface-container-low">
      <div class="max-w-container-max mx-auto px-gutter">
        <div class="text-center max-w-2xl mx-auto mb-stack-lg">
          <h2 class="font-display text-3xl sm:text-4xl md:text-5xl font-black leading-tight">Häufige SEO Probleme, die wir finden</h2>
        </div>
        <div class="max-w-3xl mx-auto grid md:grid-cols-2 gap-4">
          <div
            v-for="(problem, index) in commonProblems"
            :key="problem"
            class="flex gap-4 items-center glass-card p-4 rounded-xl border border-black/10"
          >
            <span class="material-symbols-outlined text-xl flex-shrink-0" :class="problemColors[index % 4]">error</span>
            <p class="font-body-md text-on-surface">{{ problem }}</p>
          </div>
        </div>
      </div>
    </section>

    <PricingSection
      title="SEO Audit Preise"
      subtitle="Transparente Preise für professionelle SEO Analysen."
      :pricing-plans="auditPricingPlans"
    />

    <FAQSection title="Häufig gestellte Fragen zur SEO Analyse" :faqs="auditFaqs" />

    <RelatedServicesSection
      eyebrow="Website & Entwicklung"
      title="Nach dem Audit: Website neu aufbauen oder optimieren lassen"
      :services="relatedServices"
    />

    <CTASection
      title="Lassen Sie Ihre Website professionell analysieren"
      description="Finden Sie heraus, warum Ihre Website nicht optimal bei Google rankt — und was dagegen zu tun ist."
      primary-cta="SEO Analyse anfragen"
      secondary-cta="Kostenlos beraten lassen"
    />
  </div>
</template>

<script setup lang="ts">
import { buildSchema, organizationSchema, websiteSchema, pageSchema } from '~/composables/schema/global'
import { serviceSchema, breadcrumbSchema, faqSchema } from '~/composables/schema/service'

const { hreflangLinks } = useLanguageSwitcher();

const auditFaqs = [
  {
    question: 'Was kostet ein SEO Audit?',
    answer:
      'Basis SEO Analysen beginnen bei EvolaTec ab 100€. Umfangreiche technische Audits mit Wettbewerbsanalyse und detailliertem Maßnahmenplan ab 300€. Die genauen Kosten hängen vom Umfang und der Komplexität Ihrer Website ab.',
  },
  {
    question: 'Wie lange dauert eine SEO Analyse?',
    answer:
      'Die meisten SEO Audits dauern 2–5 Werktage. Bei umfangreichen Websites kann es etwas länger dauern. Sie erhalten am Ende einen schriftlichen Report mit allen Befunden und Empfehlungen.',
  },
  {
    question: 'Was wird bei einem SEO Audit geprüft?',
    answer:
      'Wir prüfen Technik (Ladezeit, Core Web Vitals, Indexierung), OnPage (Meta-Daten, Überschriften, Content), Keywords, Backlinks, mobile Optimierung und strukturierte Daten. Außerdem analysieren wir Ihre wichtigsten Wettbewerber und identifizieren Ranking-Chancen.',
  },
  {
    question: 'Was bekomme ich nach dem SEO Audit?',
    answer:
      'Sie erhalten einen strukturierten Bericht mit allen Befunden, konkreten Handlungsempfehlungen und einem priorisierten Maßnahmenplan. Auf Wunsch erläutern wir die Ergebnisse in einem persönlichen Gespräch.',
  },
  {
    question: 'Setzen Sie die Optimierungen nach dem Audit auch um?',
    answer:
      'Ja, gerne übernehmen wir die Umsetzung der empfohlenen SEO-Optimierungen oder unterstützen Sie dabei. Auf Wunsch begleiten wir Sie auch laufend mit monatlicher SEO-Betreuung ab 300€/Monat.',
  },
  {
    question: 'Wie oft sollte ein SEO Audit durchgeführt werden?',
    answer:
      'Wir empfehlen mindestens einmal jährlich einen umfassenden SEO Audit. Bei größeren Website-Relaunches oder spürbaren Ranking-Veränderungen ist ein zusätzlicher Audit sinnvoll, um Ursachen frühzeitig zu identifizieren.',
  },
];

const schemaMarkup = buildSchema(
  organizationSchema(),
  websiteSchema(),
  pageSchema({
    url: 'https://evolatec.de/seo-audit',
    name: 'SEO Audit & Analyse – Technischer Website Check | EvolaTec',
    description: 'Professioneller SEO Audit für bessere Google Rankings. Technische Analyse, OnPage Check und Konkurrenzanalyse. SEO Audits ab 100€.',
  }),
  serviceSchema({
    id: 'https://evolatec.de/seo-audit/#service',
    name: 'SEO Audit',
    description: 'Technische SEO-Analyse, OnPage Check und Konkurrenzanalyse für bessere Google Rankings.',
    url: 'https://evolatec.de/seo-audit',
    serviceType: 'SEO Audit',
    minPrice: 100,
  }),
  breadcrumbSchema([
    { name: 'Home', url: 'https://evolatec.de' },
    { name: 'SEO', url: 'https://evolatec.de/seo' },
    { name: 'SEO Audit & Analyse', url: 'https://evolatec.de/seo-audit' },
  ]),
  faqSchema(auditFaqs),
);

useHead({
  title: 'SEO Audit & Analyse – Technischer Website Check | EvolaTec',
  meta: [
    { name: 'description', content: 'Professioneller SEO Audit für bessere Google Rankings. Technische Analyse, OnPage Check und Konkurrenzanalyse. SEO Audits ab 100€.' },
  ],
  link: [
    { rel: 'canonical', href: 'https://evolatec.de/seo-audit' },
    ...hreflangLinks.value,
  ],
  script: [{ type: 'application/ld+json', innerHTML: JSON.stringify(schemaMarkup) }],
});

const auditStats = [
  { value: '2-5 Tage', label: 'Analyse-Zeit', icon: 'schedule' },
  { value: 'Top Rankings', label: 'Unser Ziel', icon: 'trending_up' },
  { value: 'Komplett', label: 'Technischer Check', icon: 'verified' },
  { value: 'Klar', label: 'SEO Report', icon: 'description' },
];

const trustCompanies = ['TECHNISCHE ANALYSE', 'ONPAGE CHECK', 'KEYWORD AUDIT', 'SEO REPORT'];

const benefits = [
  {
    icon: 'engineering',
    title: 'Vollständiger technischer Check',
    description: 'Ladezeiten, Core Web Vitals, Indexierung, Crawling und technische Fehler werden systematisch analysiert.',
    bg: 'bg-gradient-to-br from-blue-600 to-blue-800',
    image: '/landing/seo.webp',
  },
  {
    icon: 'edit_document',
    title: 'OnPage & Content Analyse',
    description: 'Überschriften, Meta Tags, Keywords, interne Verlinkung und Content Struktur werden geprüft und bewertet.',
    bg: 'bg-gradient-to-br from-emerald-600 to-teal-800',
    image: '/web-development/seo.webp',
  },
  {
    icon: 'insights',
    title: 'Konkurrenzanalyse inklusive',
    description: 'Wir vergleichen Ihre Website mit den Wettbewerbern und zeigen konkrete Wachstumspotenziale auf.',
    bg: 'bg-gradient-to-br from-purple-600 to-indigo-800',
    image: '/main/design.webp',
  },
];

const processSteps = [
  {
    icon: 'travel_explore',
    title: 'Website Crawl',
    description: 'Vollständiges Crawling Ihrer Website zur Erkennung technischer Fehler und Strukturprobleme.',
  },
  {
    icon: 'engineering',
    title: 'Technische Analyse',
    description: 'Ladezeiten, Core Web Vitals, Indexierung und Sicherheit werden geprüft.',
  },
  {
    icon: 'edit_document',
    title: 'OnPage Check',
    description: 'Keywords, Überschriften, Meta Tags und Content werden analysiert.',
  },
  {
    icon: 'insights',
    title: 'Konkurrenzanalyse',
    description: 'Vergleich mit den wichtigsten Wettbewerbern in Ihrer Branche.',
  },
  {
    icon: 'description',
    title: 'SEO Report',
    description: 'Klarer, strukturierter Bericht mit konkreten Handlungsempfehlungen.',
  },
];

const features = [
  {
    icon: 'speed',
    title: 'Ladezeiten & Performance',
    description: 'Analyse aller Performance-Faktoren die Google für das Ranking berücksichtigt.',
  },
  {
    icon: 'smartphone',
    title: 'Mobile SEO Check',
    description: 'Überprüfung der mobilen Optimierung und Benutzerfreundlichkeit auf allen Geräten.',
  },
  {
    icon: 'description',
    title: 'Content & Keyword Analyse',
    description: 'Identifikation von Keyword-Potenzialen und Content-Lücken gegenüber dem Wettbewerb.',
  },
  {
    icon: 'link',
    title: 'Backlink Profil',
    description: 'Analyse des bestehenden Linkprofils und Identifikation toxischer Backlinks.',
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

const problemColors = ['text-red-500', 'text-orange-500', 'text-amber-500', 'text-rose-500'];

const auditPricingPlans = [
  {
    tier: 'Basis SEO Analyse',
    price: 'ab 100 €',
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
      'Alles aus Basis Analyse',
      'Vollständiger Tech-Audit',
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
      'Alles aus Technischer Audit',
      'Konkurrenz- & Wettbewerbsanalyse',
      'Keyword-Strategie',
      'Content Potenziale',
    ],
    buttonText: 'Beratung buchen',
    isHighlighted: false,
  },
];

const relatedServices = [
  { icon: 'language', title: 'Firmenwebsite erstellen lassen', description: 'Nutzen Sie die Erkenntnisse des Audits und starten Sie mit einer technisch einwandfreien Firmenwebsite.', price: 'ab 1.500 €', href: '/firmenwebsite-erstellen-lassen' },
  { icon: 'article', title: 'Landingpage erstellen lassen', description: 'Conversion-optimierte Landingpages, die von Anfang an technisch korrekt und SEO-ready sind.', price: 'ab 500 €', href: '/landingpage-erstellen-lassen' },
  { icon: 'shopping_bag', title: 'Online-Shop erstellen lassen', description: 'E-Commerce mit solider SEO Basis — entwickelt nach den Erkenntnissen Ihrer Analyse.', price: 'ab 3.000 €', href: '/online-shop-erstellen-lassen' },
];

</script>
