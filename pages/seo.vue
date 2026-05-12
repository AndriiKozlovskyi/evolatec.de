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
      image-url="https://lh3.googleusercontent.com/aida-public/AB6AXuAS5zdLscgbQtZZEjecvYHDkQXZP1W7c_XfVpQJf0x7AFGBVe8Zk5O1mXCBDSE5gn8F1TBNe5wotsh4kH16_RscWT5Rc-LHZ_Zrodd5Z3EClq_NVJ-zzrrOHgMyB5fy7MRD-BXVJq2DjNKRmFDMcjTe2F6Thx0doN_l6tF4c02FTh-D2VvMLDnMe7Gucrt4z33eG2j18j14Y6tvpuIoqe2CPJmN6HzOY1GgCG0ArrlB_DzDXO1ccXnkh5e0TCDMIkGJGGuIHGSFTEHM"
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
useHead({
  title: 'Professionelle SEO Agentur – Mehr Sichtbarkeit bei Google | EvolaTec',
  meta: [
    {
      name: 'description',
      content: 'Professionelle Suchmaschinenoptimierung für Unternehmen. Mehr Google Rankings, organischer Traffic und Kundenanfragen. SEO Betreuung ab 250€/Monat.',
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
  ],
});

const seoStats = [
  { value: '+300%', label: 'Organischer Traffic', icon: 'trending_up' },
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
    image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=600&h=400&fit=crop',
  },
  {
    icon: 'trending_up',
    title: 'Nachhaltig mehr Besucher',
    description: 'SEO liefert langfristig günstigen organischen Traffic ohne permanente Werbekosten.',
    bg: 'bg-gradient-to-br from-emerald-600 to-teal-800',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
  },
  {
    icon: 'person_add',
    title: 'Mehr qualifizierte Anfragen',
    description: 'Kunden die über Google kommen, haben hohe Kaufabsicht — bessere Leads als jeder andere Kanal.',
    bg: 'bg-gradient-to-br from-purple-600 to-indigo-800',
    image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&h=400&fit=crop',
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
    href: '/seo',
  },
  {
    title: 'SEO Optimierung',
    description: 'Technische Optimierung für Geschwindigkeit und Performance.',
    icon: 'speed',
    iconBg: 'bg-orange-100',
    iconBgHover: 'bg-orange-600',
    iconColor: 'text-orange-600',
    href: '/seo-optimization',
  },
  {
    title: 'Local SEO',
    description: 'Mehr lokale Sichtbarkeit und regionale Kunden.',
    icon: 'location_on',
    iconBg: 'bg-emerald-100',
    iconBgHover: 'bg-emerald-600',
    iconColor: 'text-emerald-600',
    href: '/seo-local',
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
    href: '/seo-link-building',
  },
  {
    title: 'SEO Preise',
    description: 'Transparente SEO Pakete für jeden Bedarf und jedes Budget.',
    icon: 'price_check',
    iconBg: 'bg-teal-100',
    iconBgHover: 'bg-teal-600',
    iconColor: 'text-teal-600',
    href: '/seo-pricing',
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
  {
    question: 'Was ist im SEO Audit enthalten?',
    answer: 'Technische Analyse, OnPage Check, Konkurrenzanalyse, Keyword-Recherche und ein detaillierter Maßnahmenplan.',
  },
  {
    question: 'Kann ich SEO monatlich kündigen?',
    answer: 'Ja. Unsere SEO Betreuungsverträge sind flexibel. Sie zahlen nur für die Leistungen, die Sie wirklich nutzen.',
  },
];
</script>
