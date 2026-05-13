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

    <!-- Intro Section -->
    <section class="py-section-padding bg-surface">
      <div class="max-w-container-max mx-auto px-gutter">
        <div class="max-w-3xl">
          <h2 class="font-headline-lg text-headline-lg text-primary mb-stack-md">
            Warum professionelle Website Texte wichtig sind
          </h2>

          <p class="font-body-lg text-body-lg text-on-surface-variant mb-6">
            Gute Webseiten Texte entscheiden darüber, ob Besucher zu Kunden werden.
          </p>

          <p class="font-body-lg text-body-lg text-on-surface-variant mb-6">
            Moderne Website Inhalte müssen nicht nur professionell wirken, sondern gleichzeitig bei Google ranken und Vertrauen schaffen.
          </p>

          <p class="font-body-lg text-body-lg text-on-surface-variant">
            EvolaTec erstellt SEO optimierte Texte, die Suchmaschinen verstehen und Nutzer überzeugen.
          </p>
        </div>
      </div>
    </section>

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
    description: 'Conversionstarke Texte für mehr Leads, Anfragen und Verkäufe.',
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
    description: 'Gute Texte überzeugen Besucher und steigern Anfragen.',
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
    description: 'Zielgruppe, Branche und Konkurrenz analysieren.',
    icon: 'analytics',
  },
  {
    title: 'Keyword Recherche',
    description: 'Relevante SEO Keywords für bessere Rankings identifizieren.',
    icon: 'search',
  },
  {
    title: 'Content Erstellung',
    description: 'Professionelle, strukturierte und conversionstarke Inhalte schreiben.',
    icon: 'edit_document',
  },
  {
    title: 'SEO Optimierung',
    description: 'Inhalte für Google und Nutzer optimieren.',
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
    description: 'Conversionstarke Texte für mehr Leads, Anfragen und Verkäufe.',
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
      'Conversionstarke Texte',
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
      'SEO Texte verbessern Rankings und helfen Google, Ihre Website besser zu verstehen. Gute Texte führen zu mehr organischem Traffic.',
  },
  {
    question: 'Schreiben Sie Texte für Landingpages?',
    answer:
      'Ja. Wir erstellen conversionstarke Inhalte für Landingpages und Werbekampagnen, die auf Verkäufe und Leads fokussieren.',
  },
  {
    question: 'Können Inhalte mehrsprachig erstellt werden?',
    answer:
      'Ja. Wir erstellen Inhalte für deutsche, englische und internationale Projekte mit nativen Sprachkenntnissen.',
  },
  {
    question: 'Was kosten professionelle Website Texte?',
    answer:
      'Professionelle Webseiten Texte beginnen ab 150€, komplette Projekte ab 700€. Die genauen Kosten hängen vom Umfang ab.',
  },
  {
    question: 'Wie lange dauert die Content Erstellung?',
    answer:
      'Durchschnittlich 5-10 Werktage für einzelne Seiten, größere Projekte 2-4 Wochen. Schnellere Umsetzung ist möglich.',
  },
];
</script>
