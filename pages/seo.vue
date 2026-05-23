<template>
  <div>
    <!-- Hero Section -->
    <HeroSection
      background-image="/seo/hero.webp"
      badge="Professionelle SEO Agentur"
      title="Professionelle SEO Agentur: Mehr Sichtbarkeit & mehr Kunden durch Google"
      description="Moderne Suchmaschinenoptimierung für Unternehmen, die bei Google besser gefunden werden möchten. Mehr Rankings, mehr Traffic und mehr Anfragen."
      primaryCTA="Kostenloses SEO Gespräch"
      secondaryCTA="SEO Preise ansehen"
      :stats="seoStats"
    />

    <!-- Trust Section -->
    <TrustSection :companies="trustCompanies" />

    <!-- SEO Services Navigation -->
    <ServicesSection
      title="Unsere SEO Leistungen"
      subtitle="Wählen Sie die SEO Leistung, die zu Ihren Zielen passt."
      variant="centered"
      :services="seoServiceLinks"
    />

    <!-- Features Section -->
    <FeaturesSection
      title="Was gute SEO für Ihr Unternehmen bewirkt"
      :features="features"
      image-url="/web-development/seo.webp"
    />

    <!-- Benefits Section -->
    <BenefitsSection
      title="Warum professionelle SEO entscheidend ist"
      :benefits="benefits"
    />

    <!-- Process Section -->
    <ProcessSection
      title="So funktioniert unsere SEO Optimierung"
      :steps="processSteps"
    />

    <!-- Pricing Section -->
    <PricingSection
      title="SEO Preise"
      subtitle="Transparente Preise für professionelle Suchmaschinenoptimierung."
      :pricing-plans="seoPricingPlans"
    />

    <!-- SEO Features Checklist -->
    <SEOSection
      title="SEO-freundliche Optimierung"
      :features="seoChecklist"
    />

    <!-- FAQ Section -->
    <FAQSection title="Häufig gestellte Fragen zur SEO Optimierung" :faqs="seoFaqs" />

    <!-- CTA Section -->
    <CTASection
      title="Mehr Kunden durch professionelle SEO"
      description="Lassen Sie Ihre Website bei Google sichtbar werden und gewinnen Sie nachhaltig neue Kunden."
      primary-cta="Kostenloses SEO Gespräch"
      secondary-cta="SEO Preise ansehen"
    />
  </div>
</template>

<script setup lang="ts">
import { buildSchema, organizationSchema, websiteSchema, pageSchema } from '~/composables/schema/global'
import { serviceSchema, breadcrumbSchema, faqSchema } from '~/composables/schema/service'

const { hreflangLinks } = useLanguageSwitcher();

const seoFaqs = [
  {
    question: 'Wie lange dauert SEO bis zu den ersten Ergebnissen?',
    answer:
      'Erste Verbesserungen bei den Google Rankings sind meist nach 2–3 Monaten messbar. Spürbare Steigerungen beim organischen Traffic stellen sich nach 4–6 Monaten ein, nachhaltige Top-Positionen nach 6–12 Monaten. Suchmaschinenoptimierung ist ein langfristiger Prozess: Wer kontinuierlich an Technik, Content und Backlinks arbeitet, baut einen Wettbewerbsvorteil auf, den bezahlte Werbung nicht ersetzen kann.',
  },
  {
    question: 'Was kostet professionelle SEO für Unternehmen?',
    answer:
      'Ein SEO Audit beginnt bei 100€, eine technische SEO Optimierung ab 300€ und die laufende SEO Betreuung ab 300€ pro Monat. Die genauen Kosten hängen vom Wettbewerb in Ihrer Branche, dem aktuellen Zustand der Website und den Ranking-Zielen ab. In einem kostenlosen Erstgespräch berechnen wir ein transparentes SEO Angebot, das zu Ihrem Budget passt.',
  },
  {
    question: 'Was ist der Unterschied zwischen SEO und Google Ads?',
    answer:
      'SEO sorgt für organische, unbezahlte Rankings bei Google und liefert langfristig den günstigsten Traffic. Google Ads bringen sofort Besucher, kosten aber für jeden Klick Geld. In der Praxis ergänzen sich beide Kanäle: Ads liefern schnelle Ergebnisse, während SEO über Monate stabile Sichtbarkeit, Vertrauen und planbare Leads aufbaut.',
  },
  {
    question: 'Was sind die wichtigsten SEO Rankingfaktoren?',
    answer:
      'Google bewertet über 200 Faktoren – die wichtigsten sind hochwertiger Content, eine saubere technische Basis (Ladezeit, mobile Optimierung, Core Web Vitals), eine klare Seitenstruktur, themenrelevante Keywords und vertrauenswürdige Backlinks. Wir optimieren alle Bereiche im Rahmen unserer SEO Betreuung und priorisieren die Maßnahmen mit dem größten Ranking-Hebel für Ihre Branche.',
  },
  {
    question: 'Was ist im SEO Audit enthalten?',
    answer:
      'Unser SEO Audit umfasst eine technische Analyse (Ladezeit, Indexierung, Crawling), einen OnPage Check (Meta-Daten, Überschriften, Content), eine Keyword- und Wettbewerbsanalyse sowie eine Backlink-Prüfung. Sie erhalten am Ende einen priorisierten Maßnahmenplan mit konkreten Handlungsempfehlungen, den Sie selbst umsetzen oder von uns implementieren lassen können.',
  },
  {
    question: 'Optimieren Sie auch internationale und mehrsprachige Websites?',
    answer:
      'Ja, wir entwickeln internationale SEO Strategien mit hreflang-Implementierung, lokalisierten Keywords und länderspezifischen Inhalten. So ranken Sie in jedem Zielmarkt mit der passenden Sprachversion und vermeiden Duplicate-Content-Probleme. Besonders relevant für Unternehmen, die in Deutschland, Österreich, der Schweiz oder international wachsen möchten.',
  },
  {
    question: 'Kann ich die SEO Betreuung monatlich kündigen?',
    answer:
      'Ja, unsere SEO Verträge sind flexibel und ohne lange Mindestlaufzeit kündbar. Sie zahlen nur für die Leistungen, die Sie tatsächlich nutzen, und behalten volle Kostenkontrolle. Wir setzen auf Ergebnisse statt auf Vertragsbindung – wer mit unserer Arbeit zufrieden ist, bleibt langfristig dabei.',
  },
];

const schemaMarkup = buildSchema(
  organizationSchema(),
  websiteSchema(),
  pageSchema({
    url: 'https://evolatec.de/seo',
    name: 'Professionelle SEO Agentur – Mehr Sichtbarkeit bei Google | EvolaTec',
    description: 'Professionelle Suchmaschinenoptimierung für Unternehmen. Mehr Google Rankings, organischer Traffic und Kundenanfragen. SEO Audit ab 100€.',
  }),
  serviceSchema({
    id: 'https://evolatec.de/seo/#service',
    name: 'SEO Agentur',
    description: 'Professionelle Suchmaschinenoptimierung für mehr Google Rankings, organischen Traffic und Kundenanfragen.',
    url: 'https://evolatec.de/seo',
    serviceType: 'Suchmaschinenoptimierung',
    minPrice: 100,
  }),
  breadcrumbSchema([
    { name: 'Home', url: 'https://evolatec.de' },
    { name: 'SEO', url: 'https://evolatec.de/seo' },
  ]),
  faqSchema(seoFaqs),
);

useHead({
  title: 'Professionelle SEO Agentur – Mehr Sichtbarkeit bei Google | EvolaTec',
  meta: [
    {
      name: 'description',
      content: 'Professionelle Suchmaschinenoptimierung für Unternehmen. Mehr Google Rankings, organischer Traffic und Kundenanfragen. SEO Optimierung ab 300€.',
    },
    {
      name: 'keywords',
      content: 'seo agentur, suchmaschinenoptimierung, google ranking, seo optimierung, seo beratung, lokale seo, technische seo',
    },
    {
      property: 'og:title',
      content: 'Professionelle SEO Agentur | EvolaTec',
    },
    {
      property: 'og:description',
      content: 'Mehr Sichtbarkeit bei Google durch professionelle Suchmaschinenoptimierung.',
    },
    {
      property: 'og:type',
      content: 'website',
    },
  ],
  link: [
    {
      rel: 'canonical',
      href: 'https://evolatec.de/seo',
    },
    ...hreflangLinks.value,
  ],
  script: [{ type: 'application/ld+json', innerHTML: JSON.stringify(schemaMarkup) }],
});

const seoStats = [
  { value: 'TOP', label: 'Organischer Traffic', icon: 'trending_up' },
  { value: 'Top Rankings', label: 'Bei Google', icon: 'grade' },
  { value: '+Leads', label: 'Ohne Werbung', icon: 'people' },
  { value: 'Sichtbar', label: 'Bei Kunden', icon: 'visibility' },
];

const trustCompanies = ['GOOGLE PARTNER', 'SEO CERTIFIED', 'DIGITAL LEADERS', 'GROWTH FOCUSED'];

const benefits = [
  {
    icon: 'search_insights',
    title: 'Mehr Sichtbarkeit bei Google',
    description: 'Bessere Rankings bei relevanten Suchanfragen bringen Ihr Unternehmen genau dann vor Kunden, wenn sie suchen.',
    bg: 'bg-gradient-to-br from-blue-600 to-blue-800',
    image: '/main/seo.webp',
  },
  {
    icon: 'trending_up',
    title: 'Nachhaltig mehr Besucher',
    description: 'SEO liefert langfristig günstigen organischen Traffic ohne permanente Werbekosten.',
    bg: 'bg-gradient-to-br from-emerald-600 to-teal-800',
    image: '/web-development/seo.webp',
  },
  {
    icon: 'person_add',
    title: 'Mehr qualifizierte Anfragen',
    description: 'Menschen suchen bereits nach Ihrer Leistung — SEO sorgt dafür, dass sie Sie finden.',
    bg: 'bg-gradient-to-br from-purple-600 to-indigo-800',
    image: '/landing/seo.webp',
  },
];

const processSteps = [
  {
    icon: 'search',
    title: 'SEO Analyse',
    description: 'Technische Analyse, Konkurrenzanalyse und Keyword-Recherche für Ihre Branche.',
  },
  {
    icon: 'map',
    title: 'SEO Strategie',
    description: 'Klarer SEO Plan mit Prioritäten, Zielen und einem realistischen Zeitplan.',
  },
  {
    icon: 'edit_document',
    title: 'OnPage Optimierung',
    description: 'Optimierung von Seitenstruktur, Content, Überschriften und interner Verlinkung.',
  },
  {
    icon: 'engineering',
    title: 'Technische SEO',
    description: 'Ladezeiten, Core Web Vitals, Indexierung und technische Fehlerbehebung.',
  },
  {
    icon: 'monitoring',
    title: 'Monitoring & Wachstum',
    description: 'Laufendes Ranking-Monitoring, monatliche Reports und kontinuierliche Verbesserung.',
  },
];

const features = [
  {
    icon: 'visibility',
    title: 'Top Google Rankings',
    description: 'Ihre Website erscheint auf Seite 1 für relevante Suchbegriffe Ihrer Branche.',
  },
  {
    icon: 'trending_up',
    title: 'Mehr organischer Traffic',
    description: 'Stetig wachsende Besucherzahlen ohne laufende Werbekosten.',
  },
  {
    icon: 'verified_user',
    title: 'Mehr Vertrauen & Autorität',
    description: 'Gute Google Rankings stärken das Vertrauen potenzieller Kunden.',
  },
  {
    icon: 'analytics',
    title: 'Messbare Ergebnisse',
    description: 'Klare Reports zu Rankings, Traffic und Leads zeigen den SEO Fortschritt.',
  },
];

const seoServiceLinks = [
  {
    title: 'SEO Strategie',
    description: 'Langfristige SEO Strategien für nachhaltiges Wachstum.',
    icon: 'trending_up',
    iconBg: 'bg-blue-100',
    iconBgHover: 'bg-blue-600',
    iconColor: 'text-blue-600',
    href: '/kontakt',
  },
  {
    title: 'SEO Optimierung',
    description: 'Technische Optimierung für Geschwindigkeit und Performance.',
    icon: 'speed',
    iconBg: 'bg-orange-100',
    iconBgHover: 'bg-orange-600',
    iconColor: 'text-orange-600',
    href: '/seo-optimieren-lassen',
  },
  {
    title: 'Local SEO',
    description: 'Mehr lokale Sichtbarkeit und regionale Kunden.',
    icon: 'location_on',
    iconBg: 'bg-emerald-100',
    iconBgHover: 'bg-emerald-600',
    iconColor: 'text-emerald-600',
    href: '/local-seo',
  },
  {
    title: 'SEO Audit & Analyse',
    description: 'Professionelle Audits und technische SEO Analysen.',
    icon: 'assessment',
    iconBg: 'bg-purple-100',
    iconBgHover: 'bg-purple-600',
    iconColor: 'text-purple-600',
    href: '/seo-audit',
  },
  {
    title: 'Linkbuilding',
    description: 'Hochwertige Backlinks für mehr Autorität und bessere Rankings.',
    icon: 'link',
    iconBg: 'bg-rose-100',
    iconBgHover: 'bg-rose-600',
    iconColor: 'text-rose-600',
    href: '/seo-linkbuilding',
  },
];

const seoPricingPlans = [
  {
    tier: 'SEO Audit',
    price: 'ab 100 €',
    features: [
      'Technische Analyse',
      'Keyword-Recherche',
      'Konkurrenzanalyse',
      'Detaillierter Report',
    ],
    buttonText: 'Audit anfragen',
    isHighlighted: false,
  },
  {
    tier: 'Basis SEO',
    price: 'ab 300 €',
    features: [
      'Alles aus SEO Audit',
      'OnPage Optimierung',
      'Technische Fixes',
      'Content Optimierung',
    ],
    buttonText: 'Paket wählen',
    isHighlighted: true,
  },
  {
    tier: 'Monatliche Betreuung',
    price: 'ab 300 €/Monat',
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

const seoChecklist = [
  'Keyword Recherche & Wettbewerbsanalyse',
  'Technische SEO & Core Web Vitals',
  'OnPage Optimierung & Content Strategie',
  'Google Search Console & Analytics Integration',
  'Strukturierte Daten (Schema.org Markup)',
  'Lokale SEO & Google Maps Optimierung',
  'Linkbuilding & Domain Autorität',
  'Monatliche Reports & Ranking Monitoring',
];

</script>
