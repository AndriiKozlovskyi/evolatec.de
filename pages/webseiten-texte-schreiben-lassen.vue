<template>
  <div>
    <!-- Hero Section -->
    <HeroSection
      background-image="/design-content/hero.webp"
      badge="Professionelle Webseiten Texte & SEO Copywriting"
      title="Webseiten Texte & Copywriting: Inhalte die verkaufen & bei Google ranken"
      description="Professionelle Website Texte, SEO optimierte Inhalte und modernes Copywriting für Unternehmen, Landingpages, Onlineshops und Corporate Websites."
      primaryCTA="Texte anfragen"
      secondaryCTA="Preise ansehen"
      :stats="contentStats"
    />

    <!-- Trust Section -->
    <TrustSection :companies="trustCompanies" />

    <!-- Services Section -->
    <ServicesSection title="Unsere Content & Copywriting Leistungen" variant="centered" :services="contentServices" />

    <!-- Benefits Section -->
    <BenefitsSection title="Vorteile professioneller SEO Texte" :benefits="contentBenefits" />

    <!-- Process Section -->
    <ProcessSection title="So entstehen professionelle Website Texte" :steps="contentProcess" />

    <!-- Content Types Section -->
    <ChecklistSection
      title="Welche Inhalte erstellen wir?"
      icon="edit_document"
      :items="contentTypes"
    />
        <!-- Intro Section -->
    <IntroSection
      heading="Warum professionelle Website Texte wichtig sind"
      :paragraphs="introParagraphs"
      image="/design-content/copywriting.webp"
      image-alt="SEO Copywriting EvolaTec"
      :badge="introBadge"
    />

    <!-- Pricing Section -->
    <PricingSection
      title="Preise für Webseiten Texte & SEO Content"
      subtitle="Transparente Preise für professionelles Copywriting und SEO Texte."
      :pricing-plans="contentPricingPlans"
    />

    <!-- Features Section -->
    <FeaturesSection
      title="Professionelles Copywriting für Ihre digitale Präsenz"
      :features="featuresData"
      image-url="/design-content/copywriting.webp"
    />

    <!-- FAQ Section -->
    <FAQSection title="Häufig gestellte Fragen zu Webseiten Texten" :faqs="contentFaqs" />

    <!-- Final CTA -->
    <CTASection
      title="Professionelle Website Texte für mehr Kunden & bessere Rankings"
      description="Lassen Sie professionelle Webseiten Texte erstellen, die verkaufen, Vertrauen aufbauen und bei Google ranken."
      primary-cta="Content anfragen"
      secondary-cta="Kostenlos beraten lassen"
    />
  </div>
</template>

<script setup lang="ts">
import { buildSchema, organizationSchema, websiteSchema, pageSchema } from '~/composables/schema/global'
import { serviceSchema, breadcrumbSchema, faqSchema } from '~/composables/schema/service'
const { hreflangLinks } = useLanguageSwitcher();

const contentFaqs = [
  {
    question: 'Warum sind SEO Texte für die Website wichtig?',
    answer:
      'SEO Texte verbessern Ihre Google-Rankings, weil sie relevante Keywords, klare Strukturen und nutzerorientierten Content kombinieren. Google bewertet Texte nach Relevanz, Lesbarkeit, Tiefe und Suchintent – professionelle SEO Texte erfüllen alle Kriterien. Das Ergebnis: mehr organischer Traffic, höhere Verweildauer, bessere Conversion und langfristig planbare Sichtbarkeit ohne Werbekosten.',
  },
  {
    question: 'Was kosten professionelle Website Texte?',
    answer:
      'Einzelne Webseiten-Texte (500 Wörter) beginnen bei EvolaTec ab 150€, conversionsstarke Landingpage-Texte ab 250€ und komplette Website-Inhalte (bis zu 5 Seiten inkl. Keyword-Strategie) ab 700€. Längere SEO-Blogartikel ab 200€ pro Artikel. Die genauen Kosten hängen von Recherchetiefe, Wortzahl und Themenkomplexität ab. Wir erstellen vor Projektstart ein transparentes Festpreisangebot.',
  },
  {
    question: 'Wie lange dauert die Erstellung von Website Texten?',
    answer:
      'Für einzelne Seiten benötigen wir durchschnittlich 5–10 Werktage, für komplette Website-Inhalte 2–4 Wochen. Die Dauer hängt von Recherche, Anzahl der Texte und Feedback-Runden ab. Bei dringenden Projekten bieten wir Express-Erstellung innerhalb von 48–72 Stunden gegen Aufpreis an.',
  },
  {
    question: 'Schreiben Sie auch Texte für Landingpages und Werbung?',
    answer:
      'Ja, wir erstellen conversionsstarke Texte für Landingpages, Google-Ads-Anzeigen, Meta-Ads-Creatives und E-Mail-Kampagnen. Diese Texte sind speziell auf Verkäufe und Leads optimiert – mit klaren Botschaften, starken Call-to-Actions und nachgewiesenen Copywriting-Frameworks. Auf Wunsch erstellen wir auch mehrere Varianten für A/B-Tests, um die beste Conversion-Rate zu finden.',
  },
  {
    question: 'Was ist der Unterschied zwischen SEO Texten und Copywriting?',
    answer:
      'SEO Texte sind auf Suchmaschinen optimiert: Keywords, Suchintent, Struktur und organische Rankings stehen im Vordergrund. Copywriting fokussiert auf Conversion: emotionale Botschaften, Verkaufspsychologie und starke CTAs. Gute Web-Texte verbinden beides – sie ranken bei Google UND verkaufen an den Nutzer. Wir kombinieren beide Disziplinen für maximale Wirkung.',
  },
  {
    question: 'Können Inhalte mehrsprachig erstellt werden?',
    answer:
      'Ja, wir erstellen Inhalte für deutsche, englische und internationale Projekte mit nativer Sprachkompetenz. Bei mehrsprachigen Projekten achten wir auf lokale Suchgewohnheiten, kulturelle Besonderheiten und korrekte SEO-Implementierung (hreflang, lokalisierte Keywords). So ranken Sie in jedem Zielmarkt mit überzeugenden Inhalten.',
  },
  {
    question: 'Wie läuft die Texterstellung ab?',
    answer:
      'Unser Texterstellungs-Prozess umfasst vier Phasen: 1) Briefing & Recherche (Zielgruppe, Wettbewerb, Tonalität), 2) Keyword-Strategie und Themenplanung, 3) Texterstellung mit SEO-Optimierung, 4) Feedback und Feinschliff. Sie erhalten den fertigen Text in einem Word- oder Google-Dokument und können bei Bedarf zwei Korrekturrunden ohne Aufpreis nutzen.',
  },
];

const schemaMarkup = buildSchema(
  organizationSchema(),
  websiteSchema(),
  pageSchema({ url: 'https://evolatec.de/webseiten-texte-schreiben-lassen', name: 'Webseiten Texte & SEO Copywriting | EvolaTec', description: 'Professionelle Webseiten Texte, SEO Copywriting und Website Inhalte für Unternehmen, Landingpages und Onlineshops. Texte die ranken und verkaufen.' }),
  serviceSchema({ id: 'https://evolatec.de/webseiten-texte-schreiben-lassen/#service', name: 'Webseiten Texte & SEO Copywriting', description: 'Professionelle Website-Texte, SEO Copywriting und Inhalte für Unternehmen, Landingpages und Onlineshops.', url: 'https://evolatec.de/webseiten-texte-schreiben-lassen', serviceType: 'Copywriting', minPrice: 75 }),
  breadcrumbSchema([{ name: 'Home', url: 'https://evolatec.de' }, { name: 'Design & Content', url: 'https://evolatec.de/webdesign' }, { name: 'Content & Copywriting', url: 'https://evolatec.de/webseiten-texte-schreiben-lassen' }]),
  faqSchema(contentFaqs),
);

useHead({
  title: 'Webseiten Texte & SEO Copywriting | EvolaTec',
  meta: [
    {
      name: 'description',
      content:
        'Professionelle Webseiten Texte, SEO Copywriting und Website Inhalte für Unternehmen, Landingpages und Onlineshops. Texte die ranken und verkaufen.',
    },
  ],
  link: [{ rel: 'canonical', href: 'https://evolatec.de/webseiten-texte-schreiben-lassen' }, ...hreflangLinks.value],
  script: [{ type: 'application/ld+json', innerHTML: JSON.stringify(schemaMarkup) }],
});

const trustCompanies = ['SEO CONTENT', 'COPYWRITING', 'WEB TEXTE', 'CONVERSION'];

const introParagraphs = [
  'Gute Webseiten Texte entscheiden darüber, ob Besucher zu Kunden werden.',
  'Moderne Website Inhalte müssen nicht nur professionell wirken, sondern gleichzeitig bei Google ranken und Vertrauen schaffen.',
  'EvolaTec erstellt SEO optimierte Texte, die Suchmaschinen verstehen und Nutzer überzeugen.',
];

const introBadge = {
  icon: 'edit_document',
  title: 'SEO Texte',
  subtitle: 'Die ranken',
  iconBg: 'bg-gradient-to-br from-emerald-500 to-teal-600',
};

const contentStats = [
  { value: 'SEO', label: 'Optimiert', icon: 'trending_up' },
  { value: 'Verkaufs-', label: 'fokussiert', icon: 'shopping_cart' },
  { value: 'Google', label: 'Rankings', icon: 'grade' },
  { value: 'Professionell', label: 'Texte', icon: 'edit_document' },
];

const contentServices = [
  {
    title: 'Webseiten Texte schreiben lassen',
    description: 'Professionelle Texte für Unternehmenswebsites, Landingpages und Markenauftritte.',
    icon: 'edit_document',
    iconBg: 'bg-blue-100',
    iconColor: 'text-blue-600',
    borderColor: 'border-blue-500',
  },
  {
    title: 'SEO Texte schreiben lassen',
    description: 'SEO optimierte Inhalte für bessere Rankings und mehr Sichtbarkeit.',
    icon: 'search',
    iconBg: 'bg-emerald-100',
    iconColor: 'text-emerald-600',
    borderColor: 'border-emerald-500',
  },
  {
    title: 'Landingpage Copywriting',
    description: 'Konversionsstarke Texte für mehr Leads, Anfragen und Verkäufe.',
    icon: 'target',
    iconBg: 'bg-orange-100',
    iconColor: 'text-orange-600',
    borderColor: 'border-orange-500',
  },
  {
    title: 'Onlineshop Inhalte',
    description: 'Produkttexte und Kategorieseiten für E-Commerce Projekte.',
    icon: 'shopping_bag',
    iconBg: 'bg-purple-100',
    iconColor: 'text-purple-600',
    borderColor: 'border-purple-500',
  },
  {
    title: 'Content Strategie',
    description: 'Strukturierte Inhalte für SEO, Branding und Marketing.',
    icon: 'map',
    iconBg: 'bg-teal-100',
    iconColor: 'text-teal-600',
    borderColor: 'border-teal-500',
  },
  {
    title: 'SEO Blog Artikel',
    description: 'Fachartikel und SEO Content für langfristigen Traffic.',
    icon: 'article',
    iconBg: 'bg-rose-100',
    iconColor: 'text-rose-600',
    borderColor: 'border-rose-500',
  },
];

const contentBenefits = [
  {
    title: 'Mehr Google Rankings',
    description: 'SEO optimierte Texte verbessern Ihre Sichtbarkeit.',
    icon: 'trending_up',
    bg: 'bg-gradient-to-br from-blue-600 to-blue-800',
    image: '/landing/seo.webp',
  },
  {
    title: 'Höhere Conversion',
    description: 'Gute Texte überzeugen Besucher und steigern die Anzahl der Anfragen.',
    icon: 'shopping_cart',
    bg: 'bg-gradient-to-br from-emerald-600 to-teal-800',
    image: '/web-development-cost/price.webp',
  },
  {
    title: 'Professioneller Markenauftritt',
    description: 'Hochwertige Inhalte stärken Vertrauen und Markenwirkung.',
    icon: 'verified_user',
    bg: 'bg-gradient-to-br from-purple-600 to-indigo-800',
    image: '/web-development-cost/tech.webp',
  },
];

const contentProcess = [
  {
    title: 'Analyse',
    description: 'Wir analysieren Ihre Zielgruppe, Branche und Wettbewerber — und definieren gemeinsam Tonalität, Botschaften und Ziele Ihrer Texte.',
    icon: 'analytics',
  },
  {
    title: 'Keyword Recherche',
    description: 'Wir identifizieren relevante SEO Keywords mit echtem Suchvolumen und passender Suchintention für nachhaltige Rankings bei Google.',
    icon: 'search',
  },
  {
    title: 'Content Erstellung',
    description: 'Professionelle, strukturierte und konversionsstarke Texte — klar verständlich, suchmaschinenoptimiert und auf Ihre Markenstimme abgestimmt.',
    icon: 'edit_document',
  },
  {
    title: 'SEO Optimierung',
    description: 'Feinschliff für Meta-Daten, Überschriftenstruktur und interne Verlinkung — damit Ihre Inhalte sowohl Google als auch Ihre Leser überzeugen.',
    icon: 'search_insights',
  },
];

const contentTypes = [
  'Webseiten Texte',
  'SEO Landingpages',
  'Unternehmensbeschreibungen',
  'Produktbeschreibungen',
  'Blog Artikel',
  'Google SEO Texte',
  'Conversion Texte',
  'Content für Werbeanzeigen',
];

const featuresData = [
  {
    title: 'Webseiten Texte schreiben lassen',
    description: 'Professionelle Texte für Unternehmenswebsites, Landingpages und Markenauftritte.',
    icon: 'edit_document',
  },
  {
    title: 'SEO Texte schreiben lassen',
    description: 'SEO optimierte Inhalte für bessere Rankings und mehr Sichtbarkeit.',
    icon: 'search',
  },
  {
    title: 'Landingpage Copywriting',
    description: 'Konversionsstarke Texte für mehr Leads, Anfragen und Verkäufe.',
    icon: 'target',
  },
  {
    title: 'Content Strategie',
    description: 'Strukturierte Inhalte für SEO, Branding und nachhaltiges Marketing.',
    icon: 'map',
  },
];

const contentPricingPlans = [
  {
    tier: 'Webseiten Texte',
    price: 'ab 150 €',
    features: [
      'Einzelne Seiten (500 Wörter)',
      'SEO optimiert',
      'Professionell geschrieben',
      'Google fokussiert',
    ],
    buttonText: 'Texte anfragen',
    isHighlighted: false,
  },
  {
    tier: 'Landingpage Copywriting',
    price: 'ab 250 €',
    features: [
      'Konversionsstarke Texte',
      'CTA & Headline Optimierung',
      'Sales fokussiert',
      'A/B Testing ready',
    ],
    buttonText: 'Copywriting buchen',
    isHighlighted: true,
  },
  {
    tier: 'Komplette Website Inhalte',
    price: 'ab 700 €',
    features: [
      'Alle Seiten (bis 5)',
      'Content Strategie',
      'SEO Struktur & Keywords',
      'Professionelle Umsetzung',
    ],
    buttonText: 'Projekt starten',
    isHighlighted: false,
  },
];

</script>
