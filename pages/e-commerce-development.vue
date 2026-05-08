<template>
  <div>
    <!-- Hero Section -->
    <HeroSection
      background-image="https://lh3.googleusercontent.com/aida-public/AB6AXuAh03EyFGK2bdSQ9TK0_P731mUGV00H3wsr1JN7GYZYjRXlkmVAOiEG9uxoVddUSoU9z6HU7XFxafYD3jUtwzjTySK4jX03fbvmRah_O7bWiyHEBftgLmnkPe1i17B8S2qYm24qRpSBb4s6TPn79TAcPIhWg8AwNGY0LbF4u2tdaFG2x15WICGtqyUNIlHeFhwbj4v4KLzcNsOMXfO12Ct72DXLmTLHb8N5HE7nosAtb1GVjVI7Go8xoYaMN00CoxTmRnbSMXvaFUnd"
      badge="E-Commerce Excellence"
      title="Onlineshop erstellen lassen – Ihr professioneller Online Shop"
      description="Wir entwickeln E-Commerce-Plattformen mit der Präzision moderner Architektur. Skalierbar, sicher und für maximale Conversion optimiert."
      primaryCTA="Jetzt beraten lassen"
      secondaryCTA="Unsere Lösungen"
      :stats="heroStats"
    />

    <!-- Trust Section -->
    <TrustSection :companies="trustCompanies" />

    <!-- Portfolio Section -->
    <PortfolioSection
      subtitle="Portfolio"
      title="Für jedes Geschäftsmodell die passende Struktur."
      :portfolio-items="portfolioItems"
      :process-steps="processSteps"
    />

    <!-- Features Section -->
    <FeaturesSection
      title="Ingenieurskunst im E-Commerce."
      :features="features"
      image-url="https://lh3.googleusercontent.com/aida-public/AB6AXuCGXPpstFnvNOLu1iW8eXACK2oCXjXGpmpAhmP85bhKf2YIRTo7H0LcK2iFLWNS8Gk3rz7lvZz9BoANJNhYnR0iq9ecT2OtD88l0sRffXqqAeW1ES__lU1iEE0f9UXRQ0hyqT_6oey2eofxvRJ52TIeZw0-9y9L0mGWS-eja22ypOMS96VyPxNVl9CDWyDxjQtIkU2UpKjDsKhAOEdM7aABCaAVuCLMZupFk2lffKW5TGmGxxM6_r1l1NyMVgqoSVn0pfZaKHFzQIcz"
    />

    <!-- Pricing Section -->
    <PricingSection
      title="Investitions-Modelle"
      subtitle="Klare Strukturen ohne versteckte Kosten. Wählen Sie das Fundament für Ihren Erfolg."
      :pricing-plans="pricingPlans"
    />

    <!-- FAQ Section -->
    <FAQSection title="Häufige Fragen zur E-Commerce Entwicklung" :faqs="faqs" />
  </div>
</template>

<script setup lang="ts">
const heroStats = [
  { value: '+340%', label: 'Conversion', icon: 'trending_up' },
  { value: '< 1.2s', label: 'Ladezeit', icon: 'flash_on' },
  { value: '99.9%', label: 'Uptime', icon: 'shield' },
  { value: 'API', label: 'First Design', icon: 'code' },
];

const trustCompanies = ['TRUSTED BY LEADERS', 'ARCHITECTS INC.', 'DIGITAL VENTURES', 'RETAIL CORE'];

const portfolioItems = [
  {
    id: 1,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBVBqfhULHSO8HZECb85_xbUd0u5N4cq2cnOwBIuModrZKowD0ZNf-eh0gOXSdzd1PddCoGHThlp3-XdeVAh7WwYdftPEq2Hyk-XfMy8luu3th2LNvcfhUlA-gkzsRr9IG5a-EkduP6yqprqIwCBAaPQTYIEOUvPUKMpAgBe0eTNs3JfmCNyhY7jYu29zfzh7U__daqr9IEyMN96QgkoFme7HfOrsPaBn6YFnVOogrAI5ERKKoWwzI0OfanomsuB5nScytc8aYV-vMY',
    title: 'Custom Shop Lösungen',
    description: 'Individuell entwickelte Architekturen für komplexe Anforderungen und maximale Skalierbarkeit.',
    isLarge: true,
  },
  {
    id: 2,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBn-m2_Q4aVXB1Vq6Q9oOdIfqtJHp55Il-CTwUimx_-8yMxKfYo0zwGi9hnpt6vu4dgBKh0Weeq9WTu9yX3ASHyL04v5N8njjbFYGtZDzkpFaP1SXLcyA76WGUkws_MxbnzZK3c_BO3qklxTcrdTA94JDlvGExPOrFtOp9i23GzDAh6lR620nf-cCi5jG6YCnjOO6zIgAPtQi6_f27wRrIGlXLj4a_8mfBfqC-KNCmEzPQrgyl6sBfmV2d_cwB9yqY3hketM8m-AR3z',
    title: 'Shopify Excellence',
    description: 'Schneller Markteintritt mit professionellen Shopify-Setups.',
    isLarge: false,
  },
  {
    id: 3,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBxYm2iICnVJDiTWE8bWYSVAE5RWrb8G4R8JV7l4Y1UtDs9_x_J8D8AeoXmpPrYzJ3P8201Eila-VG2JzbXOetU9doK4ipcC6OIgCfkH7JG68h0-nWyTfxcRaeBxOdkZJUMYJWPy9ic00nY5pfq7K3pZT6crR4gcjW2xu30HTavoVVjGN7llnxoxATCAfZuElcof-dnTFGbOSYCJVObrurVenJiaBZ50fwcC8iP4Ba-ZyvH34mplDfCvmjo7Gw9zVTJcfLb3h-QtQkR',
    title: 'Boutique Shops',
    description: 'Kuratierte Lösungen für exklusive Marken und kleine Sortimente.',
    isLarge: false,
  },
];

const processSteps = [
  {
    title: 'Analyse',
    description: 'Wir prüfen Ihr Geschäftsmodell und Ihre Ziele bis ins Detail.',
  },
  {
    title: 'Architektur',
    description: 'Entwurf der technischen Infrastruktur und des UX-Designs.',
  },
  {
    title: 'Deployment',
    description: 'Hochpräzise Entwicklung und nahtloser Go-Live.',
  },
];

const features = [
  {
    icon: 'inventory_2',
    title: 'Product Management',
    description: 'Zentrale Steuerung komplexer Produktkataloge mit PIM-Integration.',
  },
  {
    icon: 'payments',
    title: 'Secure Payments',
    description: 'PCI-DSS konforme Zahlungsabwicklung für globales Vertrauen.',
  },
  {
    icon: 'smartphone',
    title: 'Mobile First',
    description: 'Responsive Architekturen, die auf jedem Endgerät perfekt funktionieren.',
  },
  {
    icon: 'search_check',
    title: 'E-Commerce SEO',
    description: 'Strukturelle Optimierung für beste Rankings bei Google & Co.',
  },
];

const pricingPlans = [
  {
    tier: 'Starter',
    price: 'ab 5.000 €',
    features: ['Shopify Standard Setup', 'Design Anpassung', 'Grundlegende SEO', 'Support Basis'],
    buttonText: 'Anfrage stellen',
    isHighlighted: false,
  },
  {
    tier: 'Business Elite',
    price: 'ab 15.000 €',
    features: [
      'Custom Storefront',
      'ERP & PIM Integration',
      'Performance Hosting',
      'Advanced Analytics',
      '24/7 Monitoring',
    ],
    buttonText: 'Meistgewählt',
    isHighlighted: true,
  },
  {
    tier: 'Enterprise',
    price: 'Individuell',
    features: ['Volle Custom-Architektur', 'Multi-Shop Management', 'Globaler Rollout', 'Dedicated Team'],
    buttonText: 'Beratung buchen',
    isHighlighted: false,
  },
];

const faqs = [
  {
    question: 'Wie lange dauert die Entwicklung eines Online-Shops?',
    answer:
      'Ein Standard-Shopify-Setup kann innerhalb von 4-6 Wochen live gehen. Komplexe Custom-Lösungen benötigen je nach Umfang 3-6 Monate für Konzeption und Entwicklung.',
  },
  {
    question: 'Welche laufenden Kosten entstehen?',
    answer:
      'Neben den Plattform-Gebühren (z.B. Shopify-Abos) fallen Kosten für Hosting, Wartung und optionale Marketing-Automatisierung an. Wir beraten Sie transparent zu allen Betriebskosten.',
  },
  {
    question: 'Unterstützen Sie auch bei der SEO-Optimierung?',
    answer:
      'Absolut. Jede von uns entwickelte Architektur ist von Grund auf SEO-optimiert, inklusive technischer Struktur, PageSpeed und Schema.org Markup.',
  },
];
</script>
