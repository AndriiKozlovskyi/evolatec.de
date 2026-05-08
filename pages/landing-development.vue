<template>
  <div>
    <!-- Hero Section -->
    <HeroSection
      background-image="https://lh3.googleusercontent.com/aida-public/AB6AXuAh03EyFGK2bdSQ9TK0_P731mUGV00H3wsr1JN7GYZYjRXlkmVAOiEG9uxoVddUSoU9z6HU7XFxafYD3jUtwzjTySK4jX03fbvmRah_O7bWiyHEBftgLmnkPe1i17B8S2qYm24qRpSBb4s6TPn79TAcPIhWg8AwNGY0LbF4u2tdaFG2x15WICGtqyUNIlHeFhwbj4v4KLzcNsOMXfO12Ct72DXLmTLHb8N5HE7nosAtb1GVjVI7Go8xoYaMN00CoxTmRnbSMXvaFUnd"
      badge="Conversion-orientierte Landingpages"
      title="Landingpage & One-Pager erstellen lassen – schnell & conversion-stark"
      description="Professionelle Landingpages für Werbung, Leadgenerierung und digitale Kampagnen. Optimiert für Conversions, Geschwindigkeit und SEO."
      primaryCTA="Kostenloses Angebot erhalten"
      secondaryCTA="Preise ansehen"
      :stats="heroStats"
    />

    <!-- Benefits Section -->
    <BenefitsSection
      title="Warum Unternehmen Landingpages nutzen"
      :benefits="benefits"
    />

    <!-- Features Section -->
    <FeaturesSection
      title="Was eine erfolgreiche Landingpage enthalten sollte."
      :features="features"
      image-url="https://lh3.googleusercontent.com/aida-public/AB6AXuCGXPpstFnvNOLu1iW8eXACK2oCXjXGpmpAhmP85bhKf2YIRTo7H0LcK2iFLWNS8Gk3rz7lvZz9BoANJNhYnR0iq9ecT2OtD88l0sRffXqqAeW1ES__lU1iEE0f9UXRQ0hyqT_6oey2eofxvRJ52TIeZw0-9y9L0mGWS-eja22ypOMS96VyPxNVl9CDWyDxjQtIkU2UpKjDsKhAOEdM7aABCaAVuCLMZupFk2lffKW5TGmGxxM6_r1l1NyMVgqoSVn0pfZaKHFzQIcz"
    />

    <!-- Process Section -->
    <ProcessSection
      title="So erstellen wir Ihre Landingpage"
      :steps="processSteps"
    />

    <!-- Pricing Section -->
    <PricingSection
      title="Landingpage erstellen lassen – Preise"
      subtitle="Transparente Preise für moderne One-Pager und Landingpages."
      :pricing-plans="pricingPlans"
    />

    <!-- SEO Section -->
    <SEOSection title="SEO-optimierte Landingpages" :features="seoFeatures" />

    <!-- Use Cases Section -->
    <UseCasesSection
      title="Für welche Branchen eignen sich Landingpages?"
      :use-cases="useCases"
    />

    <!-- FAQ Section -->
    <FAQSection title="Häufige Fragen zur Landingpage Erstellung" :faqs="faqs" />

    <!-- CTA Section -->
    <CTASection
      title="Professionelle Landingpage erstellen lassen"
      description="Conversion-starke Landingpages, die mehr Leads und Kunden bringen."
      primary-cta="Kostenlos beraten lassen"
      secondary-cta="Preise ansehen"
    />
  </div>
</template>

<script setup lang="ts">
const heroStats = [
  { value: 'ab 3', label: 'Tagen', icon: 'flash_on' },
  { value: '100%', label: 'Conversion', icon: 'trending_up' },
  { value: 'Mobile', label: 'First', icon: 'smartphone' },
  { value: 'Fest', label: 'Preis', icon: 'price_check' },
];

const benefits = [
  {
    icon: 'trending_up',
    title: 'Mehr Leads & Anfragen',
    description: 'Landingpages fokussieren Besucher auf eine einzige Aktion.',
  },
  {
    icon: 'ads_click',
    title: 'Ideal für Werbung',
    description: 'Perfekt für Google Ads, Meta Ads und Marketingkampagnen.',
  },
  {
    icon: 'speed',
    title: 'Schnell online',
    description: 'Professionelle One-Pager innerhalb weniger Tage.',
  },
];

const features = [
  {
    icon: 'palette',
    title: 'Starkes Design',
    description: 'Modernes Layout, das Vertrauen schafft.',
  },
  {
    icon: 'touch_app',
    title: 'Klare CTAs',
    description: 'Besucher gezielt zur Anfrage oder Bestellung führen.',
  },
  {
    icon: 'bolt',
    title: 'Schnelle Ladezeiten',
    description: 'Optimierung für Performance und bessere Conversion-Raten.',
  },
  {
    icon: 'analytics',
    title: 'SEO & Tracking',
    description: 'Analytics, Meta-Tags und SEO-ready Struktur.',
  },
];

const processSteps = [
  {
    icon: 'search_insights',
    title: 'Analyse',
    description: 'Wir analysieren Ihr Angebot, Zielgruppe und Wettbewerb. Verständnis Ihrer Ziele und KPIs.',
    details: ['Marktforschung', 'Zielgruppen-Analyse', 'Conversion-Ziele'],
  },
  {
    icon: 'architecture',
    title: 'Struktur',
    description: 'Wireframe, Content-Architektur und User-Journey für maximale Conversions.',
    details: ['Information Architecture', 'Content-Planung', 'CTA-Strategie'],
  },
  {
    icon: 'palette',
    title: 'Design',
    description: 'Modernes, conversion-optimiertes Design im Einklang mit Ihrem Brand.',
    details: ['Visual Design', 'Prototyping', 'User Experience'],
  },
  {
    icon: 'code',
    title: 'Entwicklung',
    description: 'Schnelle, mobile-first und vollständig SEO-optimierte Entwicklung.',
    details: ['Frontend-Entwicklung', 'Performance-Optimierung', 'SEO-Integration'],
  },
  {
    icon: 'deploy',
    title: 'Deployment',
    description: 'Intensive Testphase, finale Optimierungen und sichere Live-Schaltung.',
    details: ['QA & Testing', 'Optimierung', 'Live-Schaltung'],
  },
];

const pricingPlans = [
  {
    tier: 'Basic',
    price: 'ab 350 €',
    features: ['One-Pager Setup', 'Responsives Design', 'Basis-SEO', 'ab 3 Tagen'],
    buttonText: 'Anfrage stellen',
    isHighlighted: false,
  },
  {
    tier: 'Business',
    price: 'ab 650 €',
    features: ['Custom Design', 'Advanced Features', 'SEO Optimierung', 'Analytics', 'ab 5 Tagen'],
    buttonText: 'Meistgewählt',
    isHighlighted: true,
  },
  {
    tier: 'Premium',
    price: 'ab 1.000 €',
    features: ['Vollständige Custom-Entwicklung', 'A/B Testing Setup', 'Conversion Optimierung', '24/7 Support', 'ab 7 Tagen'],
    buttonText: 'Beratung buchen',
    isHighlighted: false,
  },
];

const seoFeatures = [
  'Schnelle Ladezeiten (< 2s)',
  'Mobile Optimierung',
  'Strukturierte Daten (Schema.org)',
  'SEO-ready Meta-Tags',
  'Responsive Design',
];

const useCases = [
  'Lokale Unternehmen',
  'Dienstleister',
  'Startups',
  'Google Ads Kampagnen',
  'Immobilien & Bau',
  'Beauty & Gesundheit',
];

const faqs = [
  {
    question: 'Was kostet eine Landingpage?',
    answer:
      'Professionelle Landingpages beginnen ab 350€, abhängig von Design und Funktionen. Wir erstellen transparente Angebote ohne versteckte Kosten.',
  },
  {
    question: 'Wie lange dauert die Erstellung?',
    answer: 'Die meisten Landingpages werden innerhalb von 3–7 Tagen erstellt, je nach Komplexität und Ihren Anforderungen.',
  },
  {
    question: 'Ist die Landingpage mobil optimiert?',
    answer: 'Ja. Alle Landingpages sind vollständig responsive und mobile-first optimiert für alle Geräte.',
  },
  {
    question: 'Ist SEO inklusive?',
    answer: 'Basis-SEO ist in jeder Landingpage enthalten. Premium-Pakete beinhalten erweiterte SEO-Optimierung.',
  },
  {
    question: 'Kann die Landingpage für Werbung genutzt werden?',
    answer: 'Ja. Unsere Landingpages sind speziell für Google Ads und Social Media Kampagnen optimiert.',
  },
];
</script>
