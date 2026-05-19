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
useHead({
  title: 'Webseiten Texte & SEO Copywriting | EvolaTec',
  meta: [
    {
      name: 'description',
      content:
        'Professionelle Webseiten Texte, SEO Copywriting und Website Inhalte für Unternehmen, Landingpages und Onlineshops. Texte die ranken und verkaufen.',
    },
  ],
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
  { value: 'SEO +', label: 'Optimiert', icon: 'trending_up' },
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
      'Einzelne Seiten',
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
      'CTA Optimierung',
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
      'Alle Seiten',
      'Content Strategie',
      'SEO Struktur',
      'Professionelle Umsetzung',
    ],
    buttonText: 'Projekt starten',
    isHighlighted: false,
  },
];

const contentFaqs = [
  {
    question: 'Warum sind SEO Texte wichtig?',
    answer:
      'SEO Texte verbessern Rankings und helfen Google dabei, Ihre Website besser zu verstehen. Gute Texte führen zu mehr organischem Traffic.',
  },
  {
    question: 'Schreiben Sie Texte für Landingpages?',
    answer:
      'Wir erstellen konversionsstarke Inhalte für Landingpages und Werbekampagnen, die auf Verkäufe und Leads fokussieren.',
  },
  {
    question: 'Können Inhalte mehrsprachig erstellt werden?',
    answer:
      'Wir erstellen Inhalte für deutsche, englische und internationale Projekte mit nativen Sprachkenntnissen.',
  },
  {
    question: 'Was kosten professionelle Website Texte?',
    answer:
      'Professionelle Webseiten Texte beginnen bei 150€, komplette Projekte bei 700€. Die genauen Kosten hängen vom Umfang ab.',
  },
  {
    question: 'Wie lange dauert die Content Erstellung?',
    answer:
      'Für einzelne Seiten benötigen wir durchschnittlich 5–10 Werktage, für größere Projekte 2–4 Wochen. Eine schnellere Umsetzung ist möglich.',
  },
];
</script>
