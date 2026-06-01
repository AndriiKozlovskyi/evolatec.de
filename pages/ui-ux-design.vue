<template>
  <div>
    <!-- Hero Section -->
    <HeroSection
      background-image="/design-ui-ux/hero.webp"
      badge="Professionelle UI/UX Design Agentur"
      title="UI/UX Design Agentur: User Interface & Experience Design das überzeugt"
      description="EvolaTec entwickelt moderne UI/UX Designs, intuitive Benutzeroberflächen und digitale Nutzererlebnisse, die Vertrauen schaffen, Conversion steigern und Marken professionell präsentieren."
      primaryCTA="UX Design anfragen"
      secondaryCTA="Preise ansehen"
      :stats="uiuxStats"
    />

    <!-- Trust Section -->

    <!-- Intro Section -->
    <IntroSection
      heading="Warum gutes UI/UX Design entscheidend ist"
      :paragraphs="introParagraphs"
      image="/design-ui-ux/features.webp"
      image-alt="UI/UX Design Agentur"
      :badge="introBadge"
    />

    <!-- Services Section -->
    <ServicesSection title="Unsere UI/UX Design Leistungen" variant="centered" :services="uiuxServices" />

    <!-- Benefits Section -->
    <BenefitsSection title="Vorteile professionellen UX & UI Designs" :benefits="uiuxBenefits" />

    <!-- Process Section -->
    <ProcessSection title="Unser UI/UX Design Prozess" :steps="uiuxProcess" />

    <!-- UX & UI Info Section -->
    <ChecklistSection
      :columns="uiuxInfoColumns"
      icon="design_services"
    />

    <!-- Industries Section -->
   <!-- Industries Section -->

       <FeaturesSection
      title="UI/UX Lösungen für moderne Branchen"
      :features="uiuxIndustries"
      image-url="/web-development/hero.webp"
    />


    <!-- Pricing Section -->
    <PricingSection
      title="Preise für UI/UX Design"
      subtitle="Transparente Preise für professionelles UX & UI Design."
      :pricing-plans="uiuxPricingPlans"
    />

    <!-- Features Section -->
    <FeaturesSection
      title="Modernes UI/UX Design für digitale Produkte"
      :features="featuresData"
      image-url="/design-ui-ux/features.webp"
    />

    <!-- FAQ Section -->
    <FAQSection title="Häufig gestellte Fragen zu UI/UX Design" :faqs="uiuxFaqs" />

    <!-- Final CTA -->
    <CTASection
      title="Professionelles UI/UX Design für moderne digitale Produkte"
      description="EvolaTec entwickelt moderne Interfaces, starke Nutzererlebnisse und konversionsstarke Designs für Unternehmen, Startups und digitale Plattformen."
      primary-cta="UI/UX Projekt starten"
      secondary-cta="Kostenlos beraten lassen"
    />
  </div>
</template>

<script setup lang="ts">
import { buildSchema, organizationSchema, websiteSchema, pageSchema } from '~/composables/schema/global'
import { serviceSchema, breadcrumbSchema, faqSchema } from '~/composables/schema/service'
const { hreflangLinks } = useLanguageSwitcher();

const uiuxFaqs = [
  {
    question: 'Was macht eine UX Design Agentur?',
    answer:
      'Eine UX Agentur entwickelt Nutzererlebnisse, die Websites und digitale Produkte benutzerfreundlicher, intuitiver und conversionsstärker machen. Dazu gehören User Research, Wireframes, Prototyping und Interface-Design.',
  },
  {
    question: 'Was ist der Unterschied zwischen UI und UX Design?',
    answer:
      'UX (User Experience) beschreibt die gesamte Nutzererfahrung: Struktur, Nutzerführung, Interaktion und Funktionalität. UI (User Interface) ist die visuelle Oberfläche: Layout, Farben, Typografie und Buttons. Vereinfacht: UX ist, wie es funktioniert, UI ist, wie es aussieht.',
  },
  {
    question: 'Warum ist UX Design wichtig?',
    answer:
      'Eine gute UX verbessert Conversion-Raten, Nutzerzufriedenheit und Kundenbindung und reduziert Absprungraten. Schlechte UX führt zu frustrierten Nutzern und verlorenen Kunden. Bei E-Commerce und SaaS-Produkten ist UX oft ein entscheidender Wettbewerbsfaktor.',
  },
  {
    question: 'Was kostet professionelles UI/UX Design?',
    answer:
      'UI/UX Projekte beginnen ab 500€ für eine UX Analyse und ab 1.200€ für ein komplettes Website Design. Komplexe Projekte wie SaaS Apps ab 2.000€. Die Kosten hängen von Umfang, Anzahl der Screens und Komplexität ab.',
  },
  {
    question: 'Wie läuft ein UX Design Prozess ab?',
    answer:
      'Unser UX Design Prozess umfasst Research (Zielgruppen-Analyse), Konzept (User Flows), Wireframes, UI-Design und Prototyping. Anschließend folgt die Übergabe an die Entwicklung mit allen notwendigen Spezifikationen.',
  },
  {
    question: 'Welche Tools nutzen Sie für UI/UX Design?',
    answer:
      'Wir arbeiten mit Figma als zentralem Design-Tool für UI, Prototyping und Design-Systeme. Für die Übergabe an die Entwicklung stellen wir Design-Systeme und Komponenten-Bibliotheken bereit.',
  },
];

const schemaMarkup = buildSchema(
  organizationSchema(),
  websiteSchema(),
  pageSchema({ url: 'https://evolatec.de/ui-ux-design', name: 'UI/UX Design Agentur | EvolaTec', description: 'Professionelle UI/UX Design Agentur für moderne Benutzeroberflächen, User Experience Design und digitale Nutzererlebnisse. EvolaTec steigert Conversion durch exzellentes Design.' }),
  serviceSchema({ id: 'https://evolatec.de/ui-ux-design/#service', name: 'UI/UX Design', description: 'Professionelles User Interface und User Experience Design für moderne Websites, Apps und digitale Produkte.', url: 'https://evolatec.de/ui-ux-design', serviceType: 'UI/UX Design', minPrice: 500 }),
  breadcrumbSchema([{ name: 'Home', url: 'https://evolatec.de' }, { name: 'Design & Content', url: 'https://evolatec.de/webdesign' }, { name: 'UI/UX Design', url: 'https://evolatec.de/ui-ux-design' }]),
  faqSchema(uiuxFaqs),
);

useHead({
  title: 'UI/UX Design Agentur | EvolaTec',
  meta: [
    {
      name: 'description',
      content:
        'Professionelle UI/UX Design Agentur für moderne Benutzeroberflächen, User Experience Design und digitale Nutzererlebnisse. EvolaTec steigert Conversion durch exzellentes Design.',
    },
  ],
  link: [{ rel: 'canonical', href: 'https://evolatec.de/ui-ux-design' }, ...hreflangLinks.value],
  script: [{ type: 'application/ld+json', innerHTML: JSON.stringify(schemaMarkup) }],
});


const introParagraphs = [
  'Moderne Websites und digitale Produkte müssen nicht nur ansprechend gestaltet sein, sondern auch intuitiv bedienbar.',
  'Professionelles UX Design verbessert die Nutzererfahrung, reduziert Absprungraten und erhöht die Wahrscheinlichkeit, dass Besucher zu Kunden werden.',
  'Als UI/UX Design Agentur entwickelt EvolaTec moderne Benutzeroberflächen, digitale Experiences und performante Interfaces für Websites, SaaS Plattformen, Landingpages und E-Commerce Projekte.',
];

const introBadge = {
  icon: 'design_services',
  title: 'Bessere UX',
  subtitle: 'Mehr Conversion',
  iconBg: 'bg-gradient-to-br from-purple-500 to-pink-500',
};

const uiuxStats = [
  { value: 'Modern', label: 'UI Design', icon: 'design_services' },
  { value: 'Intuitiv', label: 'UX Focused', icon: 'touch_app' },
  { value: 'Conversion', label: 'Optimiert', icon: 'trending_up' },
  { value: 'User', label: 'Centered', icon: 'people' },
];

const uiuxServices = [
  {
    title: 'UX Design',
    description: 'Benutzerfreundliche Nutzererlebnisse mit klarer Struktur, intuitiver Navigation und hoher Conversion.',
    icon: 'touch_app',
    iconBg: 'bg-blue-100',
    iconColor: 'text-blue-600',
    borderColor: 'border-blue-500',
  },
  {
    title: 'UI Design',
    description: 'Moderne Benutzeroberflächen mit professionellem Look und konsistentem Designsystem.',
    icon: 'design_services',
    iconBg: 'bg-emerald-100',
    iconColor: 'text-emerald-600',
    borderColor: 'border-emerald-500',
  },
  {
    title: 'Wireframes & Prototyping',
    description: 'Strukturierte Konzepte und klickbare Prototypen für digitale Produkte.',
    icon: 'schema',
    iconBg: 'bg-orange-100',
    iconColor: 'text-orange-600',
    borderColor: 'border-orange-500',
  },
  {
    title: 'SaaS & Dashboard Design',
    description: 'UI/UX Lösungen für komplexe Plattformen, Admin Panels und SaaS Produkte.',
    icon: 'dashboard',
    iconBg: 'bg-purple-100',
    iconColor: 'text-purple-600',
    borderColor: 'border-purple-500',
  },
  {
    title: 'Mobile UX Design',
    description: 'Responsive Interfaces und mobile Nutzererlebnisse für Smartphones und Tablets.',
    icon: 'smartphone',
    iconBg: 'bg-teal-100',
    iconColor: 'text-teal-600',
    borderColor: 'border-teal-500',
  },
  {
    title: 'E-Commerce UX',
    description: 'Optimierte Shopping Experiences für höhere Verkäufe und bessere Nutzerführung.',
    icon: 'shopping_cart',
    iconBg: 'bg-rose-100',
    iconColor: 'text-rose-600',
    borderColor: 'border-rose-500',
  },
];

const uiuxBenefits = [
  {
    title: 'Höhere Conversion',
    description: 'Intuitive Interfaces steigern Leads, Verkäufe und Anfragen.',
    icon: 'trending_up',
    bg: 'bg-gradient-to-br from-blue-600 to-blue-800',
    image: '/landing/leads.webp',
  },
  {
    title: 'Bessere Nutzererfahrung',
    description: 'Klare Strukturen verbessern Navigation und Benutzerfreundlichkeit.',
    icon: 'sentiment_satisfied',
    bg: 'bg-gradient-to-br from-emerald-600 to-teal-800',
    image: '/web-development-cost/price.webp',
  },
  {
    title: 'Professioneller Markenauftritt',
    description: 'Modernes UI Design stärkt Vertrauen und Markenwahrnehmung.',
    icon: 'verified_user',
    bg: 'bg-gradient-to-br from-purple-600 to-indigo-800',
    image: '/web-development-cost/tech.webp',
  },
  {
    title: 'Mobile Optimierung',
    description: 'Responsive UX Designs funktionieren perfekt auf allen Geräten.',
    icon: 'devices',
    bg: 'bg-gradient-to-br from-amber-500 to-orange-600',
    image: '/web-development/responsive.webp',
  },
];
 
const uiuxProcess = [
  {
    title: 'Analyse & Research',
    description: 'Analyse von Zielgruppe, Konkurrenz und Nutzerverhalten.',
    icon: 'search',
  },
  {
    title: 'UX Struktur',
    description: 'Entwicklung von User Flows, Seitenstruktur und Wireframes.',
    icon: 'schema',
  },
  {
    title: 'UI Design',
    description: 'Gestaltung moderner Interfaces mit Fokus auf Conversion und Nutzerfreundlichkeit.',
    icon: 'design_services',
  },
  {
    title: 'Optimierung & Testing',
    description: 'Verbesserung der Nutzererfahrung durch Feedback und UX Optimierung.',
    icon: 'tune',
  },
];

const uiDesignItems = [
  'Modernes Webdesign',
  'Mobile First Design',
  'Design Systeme',
  'SaaS Interfaces',
  'Dashboard UI',
  'Landingpage Design',
  'E-Commerce UI',
  'Corporate Interfaces',
];

const uiuxIndustries = [
  {
    title: 'SaaS & Startups',
    description: 'Interfaces für digitale Plattformen, SaaS Produkte und moderne Tools.',
    icon: 'rocket_launch',
  },
  {
    title: 'Unternehmenswebsites',
    description: 'Corporate UX Design für professionelle Markenauftritte.',
    icon: 'business',
  },
  {
    title: 'E-Commerce',
    description: 'Conversion optimierte Shopping Experiences für Onlineshops.',
    icon: 'shopping_bag',
  },
  {
    title: 'Landingpages',
    description: 'Performanceorientierte Designs für Leadgenerierung.',
    icon: 'target',
  },
];

const uiuxInfoColumns = [
  {
    heading: 'User Experience Design für moderne Websites',
    paragraphs: [
      'Professionelles User Experience Design optimisiert die Interaktion zwischen Nutzern und digitalen Produkten.',
      'Eine gute UX reduziert Frustration, verbessert Orientierung und sorgt dafür, dass Besucher schneller die gewünschten Informationen finden.',
    ],
    items: ['Modernes Webdesign', 'Design Systeme', 'Dashboard UI', 'E-Commerce UI'],
  },
  {
    heading: 'Modernes User Interface Design',
    paragraphs: [
      'UI Design bestimmt, wie ein digitales Produkt aussieht und wahrgenommen wird.',
      'Unsere UI/UX Agentur entwickelt minimalistische, moderne und konversionsstarke Benutzeroberflächen für Unternehmen, Startups und digitale Plattformen.',
    ],
    items: ['Mobile First Design', 'SaaS Interfaces', 'Landingpage Design', 'Corporate Interfaces'],
  },
];

const featuresData = [
  {
    title: 'UX Design',
    description: 'Benutzerfreundliche Nutzererlebnisse mit klarer Struktur und hoher Conversion.',
    icon: 'touch_app',
  },
  {
    title: 'UI Design',
    description: 'Moderne Benutzeroberflächen mit professionellem Look und konsistentem Designsystem.',
    icon: 'design_services',
  },
  {
    title: 'Wireframes & Prototyping',
    description: 'Strukturierte Konzepte und klickbare Prototypen für digitale Produkte.',
    icon: 'schema',
  },
  {
    title: 'Mobile UX Design',
    description: 'Responsive Interfaces und mobile Nutzererlebnisse für alle Geräte.',
    icon: 'smartphone',
  },
];

const uiuxPricingPlans = [
  {
    tier: 'UX Analyse',
    price: 'ab 500 €',
    features: [
      'Nutzerforschung',
      'Analyse bestehender UX',
      'Verbesserungsempfehlungen',
      'Detaillierter Report',
    ],
    buttonText: 'Analyse anfragen',
    isHighlighted: false,
  },
  {
    tier: 'Website UI/UX Design',
    price: 'ab 1.200 €',
    features: [
      'Alles aus UX Analyse',
      'UX & UI Design',
      'Wireframes & Prototypen',
      'Mobile Optimierung',
    ],
    buttonText: 'Projekt starten',
    isHighlighted: true,
  },
  {
    tier: 'SaaS & App Design',
    price: 'ab 2.000 €',
    features: [
      'Alles aus Website UI/UX',
      'Komplexe Interfaces & Flows',
      'Design System',
      'Developer Handoff & Specs',
    ],
    buttonText: 'Design buchen',
    isHighlighted: false,
  },
];

</script>
