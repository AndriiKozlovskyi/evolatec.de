<template>
  <div>
    <!-- Hero Section -->
    <HeroSection
      background-image="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1200&h=600&fit=crop"
      badge="Professionelle Webentwicklung"
      title="Firmenwebsite & Unternehmenswebsite professionell erstellen lassen"
      description="Moderne Firmenwebsites für Unternehmen, Dienstleister und lokale Betriebe. SEO-optimiert, mobilfreundlich und auf Wachstum ausgelegt."
      primaryCTA="Kostenloses Angebot erhalten"
      secondaryCTA="Preise ansehen"
      :stats="heroStats"
    />

    <!-- Trust Section -->
    <TrustSection :companies="trustCompanies" />

    <!-- Benefits Section -->
    <BenefitsSection
      title="Warum Unternehmen ihre Website von EvolaTec erstellen lassen"
      :benefits="benefits"
    />

    <!-- Process Section -->
    <ProcessSection
      title="Wie die Erstellung Ihrer Unternehmenswebsite abläuft"
      :steps="processSteps"
    />

    <!-- Features Section -->
    <FeaturesSection
      title="Was eine professionelle Firmenwebsite enthalten sollte"
      :features="features"
      image-url="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop"
    />

    <!-- Pricing Section -->
    <PricingSection
      title="Website erstellen lassen – Preise"
      subtitle="Transparente Preise für professionelle Firmenwebsites."
      :pricing-plans="pricingPlans"
    />

    <!-- SEO Section -->
    <SEOSection
      title="SEO-freundliche Firmenwebsites"
      :features="seoFeatures"
    />

    <!-- FAQ Section -->
    <FAQSection
      title="Häufig gestellte Fragen"
      :faqs="faqs"
    />

    <!-- CTA Section -->
    <CTASection
      title="Professionelle Firmenwebsite erstellen lassen"
      description="Erhalten Sie eine moderne Unternehmenswebsite, die Vertrauen schafft und neue Kunden gewinnt."
      primary-cta="Kostenlos beraten lassen"
      secondary-cta="Preise ansehen"
    />
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Firmenwebsite erstellen lassen – Professionelle Unternehmenswebsite | EvolaTec',
  meta: [
    {
      name: 'description',
      content: 'Professionelle Firmenwebsites erstellen lassen. Moderne Unternehmenswebsites für KMU mit SEO, responsive Design und Festpreis-Angeboten ab 750€.'
    },
    {
      name: 'keywords',
      content: 'firmenwebsite erstellen lassen, unternehmenswebsite, website erstellen professionell, homepage erstellen lassen, website für unternehmen'
    },
    {
      property: 'og:title',
      content: 'Firmenwebsite erstellen lassen | EvolaTec'
    },
    {
      property: 'og:description',
      content: 'Professionelle Unternehmenswebsites für Unternehmen und lokale Firmen.'
    },
    {
      property: 'og:type',
      content: 'website'
    }
  ],
  link: [
    {
      rel: 'canonical',
      href: 'https://evolatec.de/website-development'
    }
  ]
});

const heroStats = [
  { value: 'ab 7 Tagen', label: 'Lieferzeit', icon: 'flash_on' },
  { value: '100%', label: 'SEO-ready', icon: 'search_check' },
  { value: 'Alle', label: 'Responsive Design', icon: 'smartphone' },
  { value: 'Optional', label: 'Festpreis', icon: 'payment' },
];

const trustCompanies = ['TRUSTED BY LEADERS', 'ARCHITECTS INC.', 'DIGITAL VENTURES', 'RETAIL CORE'];

const benefits = [
  {
    icon: 'design_services',
    title: 'Professionelles Unternehmensdesign',
    description: 'Moderne Firmenwebsites, die Vertrauen schaffen und professionell wirken.',
    bg: 'bg-gradient-to-br from-blue-600 to-blue-800',
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=400&fit=crop',
  },
  {
    icon: 'search_check',
    title: 'SEO-optimierte Struktur',
    description: 'Ihre Website wird suchmaschinenfreundlich aufgebaut, damit Kunden Sie leichter finden.',
    bg: 'bg-gradient-to-br from-emerald-600 to-teal-800',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
  },
  {
    icon: 'smartphone',
    title: 'Mobile Optimierung',
    description: 'Optimale Darstellung auf Smartphone, Tablet und Desktop.',
    bg: 'bg-gradient-to-br from-purple-600 to-indigo-800',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop',
  },
];

const processSteps = [
  {
    icon: 'analytics',
    title: 'Analyse Ihres Unternehmens',
    description: 'Wir verstehen Ihre Ziele, Zielgruppe und Anforderungen genau.',
  },
  {
    icon: 'architecture_2',
    title: 'Struktur & Wireframe',
    description: 'Genaue Planung der Seitenstruktur und des User-Experience-Designs.',
  },
  {
    icon: 'palette',
    title: 'Design & Entwicklung',
    description: 'Professionelle Gestaltung und hochwertige technische Umsetzung.',
  },
  {
    icon: 'search_insights',
    title: 'SEO Optimierung',
    description: 'Technische Optimierung für beste Rankings bei Google.',
  },
  {
    icon: 'done_all',
    title: 'Testing & Launch',
    description: 'Gründliches Testen und professioneller Go-Live.',
  },
];

const features = [
  {
    icon: 'design_services',
    title: 'Modernes Webdesign',
    description: 'Zeitgemäßes UI/UX Design passend zu Ihrer Marke.',
  },
  {
    icon: 'search_check',
    title: 'SEO Optimierung',
    description: 'Optimierte Struktur, schnelle Ladezeiten und saubere Meta-Daten.',
  },
  {
    icon: 'trending_up',
    title: 'Lead-Generierung',
    description: 'Kontaktformulare, CTAs und Conversion-Optimierung.',
  },
  {
    icon: 'public',
    title: 'Google Integration',
    description: 'Analytics, Maps, Tracking und Ads-ready Setup.',
  },
];

const pricingPlans = [
  {
    tier: 'Basic',
    price: 'ab 750 €',
    features: [
      'Professionelle Website',
      'Responsive Design',
      'Basis-SEO',
      'Kontaktformular',
      'ab 7 Tagen',
    ],
    buttonText: 'Anfrage stellen',
    isHighlighted: false,
  },
  {
    tier: 'Business',
    price: 'ab 1.200 €',
    features: [
      'Custom Design',
      'Erweiterte SEO',
      'Blog-System',
      'Newsletter Integration',
      'Google Analytics',
      'ab 10 Tagen',
    ],
    buttonText: 'Meistgewählt',
    isHighlighted: true,
  },
  {
    tier: 'Premium',
    price: 'ab 2.300 €',
    features: [
      'Vollständige Individualität',
      'Advanced SEO',
      'E-Commerce Ready',
      'CMS Integration',
      '24/7 Support',
      'ab 14 Tagen',
    ],
    buttonText: 'Beratung buchen',
    isHighlighted: false,
  },
];

const seoFeatures = [
  'Schnelle Ladezeiten & Performance-Optimierung',
  'Mobile-First Responsive Design',
  'Strukturierte Daten (Schema.org Markup)',
  'Google Analytics & Search Console Integration',
  'SEO-freundliche URL-Strukturen',
  'Optimierte Meta-Daten & Descriptions',
];

const faqs = [
  {
    question: 'Was kostet eine Firmenwebsite?',
    answer:
      'Die Preise beginnen ab 750€ für eine professionelle Basic-Website. Je nach Umfang und zusätzlichen Funktionen können Sie zwischen mehreren Paketen wählen. Alle Preise sind transparent und ohne versteckte Kosten.',
  },
  {
    question: 'Kann ich eine Website günstig erstellen lassen?',
    answer:
      'Ja, absolut. Wir bieten günstige Webseiten speziell für kleine Unternehmen und lokale Betriebe an. Bereits ab 750€ erhalten Sie eine professionelle Website mit modernem Design und SEO-Grundlagen.',
  },
  {
    question: 'Wie lange dauert die Erstellung?',
    answer:
      'Die meisten Firmenwebsites werden innerhalb von 7–14 Tagen erstellt, je nachdem welches Paket Sie wählen. Eine Basic-Website ist bereits ab 7 Tagen verfügbar.',
  },
  {
    question: 'Ist SEO inklusive?',
    answer:
      'Ja, Basis-SEO ist in jeder Website enthalten. Das beinhaltet technische Optimierungen, schnelle Ladezeiten, mobile Optimierung und saubere Meta-Daten. Premium-Pakete enthalten erweiterte SEO-Maßnahmen.',
  },
  {
    question: 'Gibt es Festpreis-Angebote?',
    answer:
      'Ja, wir bieten transparente Festpreis-Pakete an. Sie wissen von Anfang an, welche Kosten entstehen – es gibt keine überraschenden Zusatzkosten während der Entwicklung.',
  },
  {
    question: 'Kann ich meine Website später ändern?',
    answer:
      'Selbstverständlich. Je nach Paket erhalten Sie Zugang zu einem benutzerfreundlichen CMS oder wir unterstützen Sie bei Änderungen. Alle Websites sind leicht wartbar und erweiterbar.',
  },
];
</script>
