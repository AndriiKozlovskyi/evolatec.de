<template>
  <div>
    <!-- Hero Section -->
    <HeroSection
      background-image="/ecommerce/hero.webp"
      badge="E-Commerce Excellence"
      title="Onlineshop erstellen lassen – Ihr professioneller Online Shop"
      description="Wir entwickeln E-Commerce-Plattformen mit der Präzision moderner Architektur. Skalierbar, sicher und für maximale Conversion optimiert."
      primaryCTA="Jetzt beraten lassen"
      secondaryCTA="Unsere Lösungen"
      :stats="heroStats"
    />

    <!-- Trust Section -->

    <!-- Intro — 2-col with keyword-rich content -->
    <section data-nav-label="Intro" data-nav-icon="storefront" class="relative py-section-padding bg-surface overflow-hidden">
      <div class="absolute top-20 -right-32 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[120px] pointer-events-none"></div>
      <div class="absolute bottom-0 -left-32 w-[400px] h-[400px] rounded-full bg-primary-container/20 blur-[100px] pointer-events-none"></div>
      <div class="relative max-w-container-max mx-auto px-gutter">
        <div class="grid lg:grid-cols-[1.15fr_1fr] gap-stack-lg items-center">
          <div>
            <span class="inline-flex items-center gap-2 rounded-full bg-primary/8 border border-primary/15 px-4 py-2 text-sm font-medium text-primary mb-6">
              <span class="material-symbols-outlined text-[18px]">shopping_cart</span>
              Professioneller Onlineshop
            </span>
            <h2 class="font-headline-xl text-headline-xl text-primary mb-8 leading-[1.1]">
              Ihren
              <span class="relative inline-block">
                <span class="relative z-10">Onlineshop</span>
                <span class="absolute -bottom-1 left-0 right-0 h-3 bg-primary/15 rounded-sm -z-0"></span>
              </span>
              professionell erstellen lassen
            </h2>
            <div class="space-y-5 mb-10">
              <div v-for="(point, i) in introPoints" :key="i" class="flex gap-4 items-start">
                <div class="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span class="material-symbols-outlined text-primary text-[18px]">{{ point.icon }}</span>
                </div>
                <p class="font-body-lg text-on-surface-variant flex-1 pt-1">{{ point.text }}</p>
              </div>
            </div>
            <div class="grid grid-cols-3 gap-2 sm:gap-6 pt-8 border-t border-outline-variant/30 text-center">
              <div v-for="stat in introStats" :key="stat.label">
                <div class="font-display text-xl sm:text-3xl text-primary font-black leading-none">{{ stat.value }}</div>
                <div class="text-[0.7rem] uppercase tracking-widest text-on-surface-variant font-bold mt-2">{{ stat.label }}</div>
              </div>
            </div>
          </div>
          <div class="relative hidden lg:block">
            <div class="relative aspect-square max-w-md mx-auto">
              <div class="absolute inset-6 rounded-[2rem] bg-gradient-to-br from-primary/85 via-primary-container to-primary/60 ambient-shadow"></div>
              <div class="absolute top-0 right-8 w-20 h-20 rounded-2xl bg-white shadow-xl flex items-center justify-center rotate-[8deg]">
                <span class="material-symbols-outlined text-primary text-[40px]">storefront</span>
              </div>
              <div class="absolute top-20 left-0 bg-white rounded-2xl p-5 shadow-xl rotate-[-5deg]">
                <div class="text-[0.65rem] uppercase tracking-widest font-bold text-on-surface-variant mb-3">Festpreis</div>
                <div class="font-display text-4xl font-black leading-none text-primary">ab 3.000<span class="text-lg text-on-surface-variant">€</span></div>
                <div class="text-xs text-on-surface-variant mt-1">Transparent</div>
              </div>
              <div class="absolute top-44 right-0 bg-white rounded-2xl p-5 shadow-xl rotate-[5deg]">
                <div class="text-[0.65rem] uppercase tracking-widest font-bold text-on-surface-variant mb-2">Lieferzeit</div>
                <div class="font-display text-4xl font-black leading-none text-primary">ab 14<span class="text-lg text-on-surface-variant">T</span></div>
                <div class="text-xs text-on-surface-variant mt-1">Schnell live</div>
              </div>
              <div class="absolute bottom-6 left-6 bg-white rounded-2xl p-5 shadow-xl rotate-[-3deg]">
                <div class="text-[0.65rem] uppercase tracking-widest font-bold text-on-surface-variant mb-3">Zahlungsarten</div>
                <div class="flex flex-col gap-1.5 w-32">
                  <div class="h-2 rounded-sm bg-primary w-full"></div>
                  <div class="h-2 rounded-sm bg-primary/30 w-3/4"></div>
                  <div class="h-2 rounded-sm bg-primary/30 w-5/6"></div>
                </div>
              </div>
              <div class="absolute bottom-16 right-0 bg-white rounded-full px-4 py-2 shadow-xl rotate-[6deg] flex items-center gap-2">
                <span class="relative flex w-2 h-2">
                  <span class="absolute inline-flex w-full h-full rounded-full bg-emerald-500 opacity-75 animate-ping"></span>
                  <span class="relative inline-flex w-2 h-2 rounded-full bg-emerald-500"></span>
                </span>
                <span class="text-xs font-bold text-on-surface uppercase tracking-wider">Live Shop</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- E-Commerce Services -->
    <ServicesSection
      title="Unsere E-Commerce Leistungen"
      subtitle="Professionelle Online Shop Entwicklung für Unternehmen, Marken und digitale Händler."
      variant="centered"
      :services="ecommerceServices"
    />

    <!-- Features Section -->
    <FeaturesSection
      title="Ingenieurskunst im E-Commerce."
      :features="features"
      image-url="/ecommerce/features.webp"
    />

    <ExpertiseCardsSection
      eyebrow="E-Commerce aus einer Hand"
      eyebrow-icon="verified"
      title="Onlineshop erstellen lassen — vom Konzept bis zum Verkauf"
      :blocks="expertiseBlocks"
    />

    <!-- Pricing Section -->
    <PricingSection
      title="Online Shop Kosten & Preise"
      subtitle="Transparente Preise ohne versteckte Kosten. Onlineshop erstellen lassen ab 3.000 €."
      bg="container-low"
      :pricing-plans="pricingPlans"
    />

    <!-- Benefits Section -->
    <BenefitsSection title="Warum EvolaTec für Ihren Online Shop?" :benefits="benefits" />

    <!-- FAQ Section -->
    <FAQSection title="Häufige Fragen zum Onlineshop erstellen lassen" :faqs="faqs" />

    <!-- CTA -->
    <CTASection
      title="Jetzt Ihren Onlineshop erstellen lassen"
      description="EvolaTec entwickelt professionelle Online Shops und E-Commerce Plattformen für Unternehmen jeder Größe – schnell, sicher und conversion-optimiert."
      primary-cta="Kostenlos beraten lassen"
      secondary-cta="Preise ansehen"
    />
  </div>
</template>

<script setup lang="ts">
import { buildSchema, organizationSchema, websiteSchema, pageSchema } from '~/composables/schema/global'
import { serviceSchema, breadcrumbSchema, faqSchema } from '~/composables/schema/service'

const { hreflangLinks } = useLanguageSwitcher();

const faqs = [
  {
    question: 'Was kostet es, einen Onlineshop erstellen zu lassen?',
    answer:
      'Ein professioneller Onlineshop bei EvolaTec startet ab 3.000€ als Basis-Shop. Premium-Lösungen mit erweiterten Funktionen und Integrationen beginnen ab 6.000€. Die genauen Kosten hängen von Produktanzahl, Funktionsumfang und Plattform ab – wir erstellen vor Projektstart ein transparentes Festpreisangebot.',
  },
  {
    question: 'Welche laufenden Kosten entstehen nach der Shop-Erstellung?',
    answer:
      'Neben der einmaligen Entwicklung fallen je nach Plattform monatliche Betriebskosten an: Hosting, Gebühren der Zahlungsanbieter sowie Domain und optional Wartung. Marketing-Budget (Google Ads, Meta Ads, SEO) sollte je nach Wachstumsziel zusätzlich eingeplant werden.',
  },
  {
    question: 'Wie lange dauert die Entwicklung eines Online-Shops?',
    answer:
      'Ein professioneller Onlineshop ist bei EvolaTec bereits ab 14 Arbeitstagen live. Komplexere Custom-Lösungen mit individuellen Integrationen benötigen je nach Umfang 6–12 Wochen für Konzeption und Entwicklung.',
  },
  {
    question: 'Welche Shop-Plattform ist die richtige für mein Unternehmen?',
    answer:
      'Wir entwickeln Online Shops mit Nuxt und individueller Shop-Logik — für maximale Performance, Flexibilität und individuelle Prozesse. Je nach Anforderungen empfehlen wir die passende Architektur: vom schnellen Standard-Shop bis zur komplexen Custom-Plattform.',
  },
  {
    question: 'Unterstützen Sie auch bei der SEO-Optimierung des Onlineshops?',
    answer:
      'Ja, jeder Onlineshop wird von Grund auf SEO-optimiert entwickelt: saubere URL-Architektur, technisches SEO, PageSpeed-Optimierung und korrekte Meta-Daten. Für weitergehende SEO-Strategien wie Kategorie-Optimierung, Produkttexte und Linkbuilding bieten wir zusätzliche SEO-Pakete an.',
  },
  {
    question: 'Ist mein Onlineshop sicher und DSGVO-konform?',
    answer:
      'Ja, jeder Shop wird mit SSL-Verschlüsselung, sicheren Zahlungsanbietern und DSGVO-konformer Datenverarbeitung ausgeliefert. Dazu gehören Cookie-Consent, Datenschutzerklärung, Impressum sowie sichere Datenübertragung. Compliance ist Standard, nicht optional.',
  },
  {
    question: 'Bietet EvolaTec auch Wartung und Support nach dem Launch?',
    answer:
      'Im Preis sind 30 Tage Support nach dem Launch enthalten. Darüber hinaus bieten wir auf Anfrage Wartungspakete mit Updates, Sicherheits-Patches, Backups und Performance-Monitoring. Auch Marketing-Betreuung und Conversion-Optimierung können wir laufend übernehmen.',
  },
];

const schemaMarkup = buildSchema(
  organizationSchema(),
  websiteSchema(),
  pageSchema({
    url: 'https://evolatec.de/online-shop-erstellen-lassen',
    name: 'Online Shop erstellen lassen – E-Commerce & Webshop | EvolaTec',
    description: 'Professionelle Online Shops und E-Commerce Plattformen ab 3.000€. Maßgeschneiderte Nuxt-Shops mit SEO-Optimierung und hoher Conversion.',
  }),
  serviceSchema({
    id: 'https://evolatec.de/online-shop-erstellen-lassen/#service',
    name: 'Online Shop erstellen lassen',
    description: 'Professionelle E-Commerce Shops und Online Shops für Unternehmen — individuelle Nuxt-basierte Lösungen mit SEO und Conversion-Optimierung.',
    url: 'https://evolatec.de/online-shop-erstellen-lassen',
    serviceType: 'E-Commerce',
    minPrice: 3000,
  }),
  breadcrumbSchema([
    { name: 'Home', url: 'https://evolatec.de' },
    { name: 'Firmenwebsite', url: 'https://evolatec.de/firmenwebsite' },
    { name: 'Online-Shop erstellen lassen', url: 'https://evolatec.de/online-shop-erstellen-lassen' },
  ]),
  faqSchema(faqs),
);

useHead({
  title: 'Online Shop erstellen lassen – E-Commerce & Webshop | EvolaTec Agentur',
  meta: [
    {
      name: 'description',
      content: 'E-Commerce Shops & Online Shops erstellen lassen. Professionelle Nuxt-basierte Online Shop Entwicklung mit SEO-Optimierung und hohen Conversion-Raten.'
    },
    {
      name: 'keywords',
      content: 'online shop erstellen lassen, e-commerce shop, nuxt shop erstellen, webshop erstellen lassen, online shop entwicklung'
    },
    {
      property: 'og:title',
      content: 'Online Shop erstellen lassen – E-Commerce & Webshop | EvolaTec'
    },
    {
      property: 'og:description',
      content: 'Professionelle E-Commerce Lösungen und Online Shops für Unternehmen.'
    },
    {
      property: 'og:type',
      content: 'website'
    }
  ],
  link: [
    {
      rel: 'canonical',
      href: 'https://evolatec.de/online-shop-erstellen-lassen'
    },
    ...hreflangLinks.value,
  ],
  script: [{ type: 'application/ld+json', innerHTML: JSON.stringify(schemaMarkup) }],
});

const heroStats = [
  { value: 'ab 3.000€', label: 'Festpreis',  icon: 'price_check' },
  { value: 'ab 14T',    label: 'Lieferzeit', icon: 'rocket_launch' },
  { value: 'SSL',       label: 'Sicher',     icon: 'shield' },
  { value: '30 Tage',   label: 'Support',    icon: 'support_agent' },
];


const introPoints = [
  {
    icon: 'storefront',
    text: 'EvolaTec entwickelt professionelle Online Shops und E-Commerce Plattformen für Unternehmen, die online verkaufen und wachsen möchten — von der Idee bis zum fertigen Webshop.',
  },
  {
    icon: 'payments',
    text: 'Ein professioneller Onlineshop überzeugt durch schnelle Ladezeiten, sichere Zahlungsabwicklung und eine nutzerfreundliche Oberfläche — genau das, was Ihre Kunden erwarten.',
  },
  {
    icon: 'trending_up',
    text: 'Unsere E-Commerce Agentur kombiniert modernes Shop-Design, technische Performance und SEO-Optimierung — damit Ihr Online Shop messbare Umsätze generiert.',
  },
];

const introStats = [
  { value: 'SSL', label: 'Sicher' },
  { value: 'ab 3.000€', label: 'Festpreis' },
  { value: 'ab 14T', label: 'Lieferzeit' },
];

const ecommerceServices = [
  {
    title: 'Nuxt Online Shop erstellen lassen',
    description: 'Professionelle Online Shops mit Nuxt, individuellem Design, schnellem Setup und optimierten Conversion-Raten.',
    icon: 'storefront',
    iconBg: 'bg-blue-100',
    iconColor: 'text-blue-600',
    borderColor: 'border-blue-500',
  },
  {
    title: 'Custom Shop Entwicklung',
    description: 'Maßgeschneiderte E-Commerce Plattformen für komplexe Anforderungen, hohe Skalierbarkeit und individuelle Prozesse.',
    icon: 'code',
    iconBg: 'bg-emerald-100',
    iconColor: 'text-emerald-600',
    borderColor: 'border-emerald-500',
  },
  {
    title: 'E-Commerce SEO',
    description: 'Technische SEO-Optimierung für Online Shops — bessere Google Rankings, mehr organischen Traffic und höhere Umsätze.',
    icon: 'search_insights',
    iconBg: 'bg-orange-100',
    iconColor: 'text-orange-600',
    borderColor: 'border-orange-500',
  },
  {
    title: 'Conversion Optimierung',
    description: 'Professionelle CRO-Maßnahmen für höhere Kaufabschlüsse, bessere Nutzererlebnisse und optimierte Checkout-Prozesse.',
    icon: 'ads_click',
    iconBg: 'bg-rose-100',
    iconColor: 'text-rose-600',
    borderColor: 'border-rose-500',
  },
  {
    title: 'Shop Wartung & Support',
    description: 'Laufende Betreuung, Updates, Performance-Monitoring und technischer Support für Ihren Online Shop.',
    icon: 'build',
    iconBg: 'bg-cyan-100',
    iconColor: 'text-cyan-600',
    borderColor: 'border-cyan-500',
  },
];

const expertiseBlocks = [
  {
    icon: 'price_check',
    title: 'Onlineshop erstellen lassen Kosten — was Sie wissen sollten',
    paragraphs: [
      'Die Kosten, einen Onlineshop erstellen zu lassen, hängen von Plattform, Umfang und individuellen Anforderungen ab. Ein professioneller Online Shop startet bei EvolaTec ab 3.000 €, individuelle Custom-Lösungen entsprechend höher.',
      'Zu den einmaligen Erstellungskosten kommen laufende Betriebskosten hinzu: Hosting bzw. Plattformgebühren, Gebühren der Zahlungsanbieter sowie optionale Wartungsleistungen.',
      'Wer seinen Onlineshop professionell erstellen lässt, investiert in eine Lösung, die langfristig Umsatz generiert — statt in günstige Baukastensysteme, die schnell an ihre Grenzen stoßen.',
      'EvolaTec bietet transparente Preise ohne versteckte Kosten. Bereits im ersten Gespräch erhalten Sie eine realistische Einschätzung der Kosten für Ihren individuellen Online Shop.',
    ],
    tags: ['Shop Kosten', 'Transparent', 'Nuxt', 'Custom Shop'],
  },
  {
    icon: 'verified_user',
    title: 'Professionellen Online Shop erstellen lassen — warum ein Profi entscheidend ist',
    paragraphs: [
      'Ein professionell entwickelter Online Shop unterscheidet sich in Performance, Design und Conversion-Optimierung deutlich von Baukastenlösungen wie Wix oder einfachen Shop-Templates.',
      'Professionelle E-Commerce Agenturen wie EvolaTec entwickeln Online Shops mit technischer Präzision: schnelle Ladezeiten unter 1,5 Sekunden, saubere SEO-Struktur und nahtlose Zahlungsintegration.',
      'Wer seinen Webshop professionell erstellen lässt, profitiert von individuellem Design, optimierter User Experience und einer stabilen technischen Infrastruktur — alles entscheidend für hohe Conversion-Raten.',
      'Als E-Commerce Agentur begleiten wir Unternehmen von der Konzeption über die Entwicklung bis zum Launch und darüber hinaus — mit professionellem Support und kontinuierlicher Optimierung.',
    ],
    tags: ['Professionell', 'Conversion', 'Performance', 'E-Commerce Agentur'],
  },
];

const benefits = [
  {
    title: 'Schnelle Lieferzeit',
    description: 'Ihr professioneller Online Shop geht bereits ab 14 Arbeitstagen live.',
    icon: 'flash_on',
    bg: 'bg-gradient-to-br from-blue-600 to-indigo-800',
    image: '/ecommerce/hero.webp',
  },
  {
    title: 'Höhere Conversion',
    description: 'Konversionsstarke Shop-Architektur, klare CTAs und reibungsloser Checkout für mehr Bestellungen.',
    icon: 'trending_up',
    bg: 'bg-gradient-to-br from-emerald-600 to-teal-800',
    image: '/ecommerce/features.webp',
  },
  {
    title: 'Sicher & Performant',
    description: 'SSL-verschlüsselte Zahlungen, schnelle Ladezeiten und SEO-optimierte Struktur — technisch solide aufgebaut.',
    icon: 'shield',
    bg: 'bg-gradient-to-br from-purple-600 to-indigo-800',
    image: '/web-development-cost/tech.webp',
  },
  {
    title: 'Transparente Kosten',
    description: 'Festpreis ab 3.000€ — von Anfang an ehrlich kalkuliert, keine versteckten Gebühren.',
    icon: 'price_check',
    bg: 'bg-gradient-to-br from-orange-500 to-rose-600',
    image: '/main/price.webp',
  },
];

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
    title: 'Online Shop Excellence',
    description: 'Schneller Markteintritt mit professionellen Online Shop Setups.',
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
    price: 'ab 3.000 €',
    features: [
      'Online Shop Setup',
      'Responsives Design',
      'Grundlegende SEO',
      '30 Tage Support',
    ],
    buttonText: 'Anfrage stellen',
    isHighlighted: false,
  },
  {
    tier: 'Premium',
    price: 'ab 6.000 €',
    features: [
      'Alles aus Starter',
      'Einzigartiges Design + UI/UX',
      'SEO Optimierung & SEO Texte',
      'Google Ads Setup (Budget getrennt)',
      'Advanced Analytics',
    ],
    buttonText: 'Meistgewählt',
    isHighlighted: true,
  },
  {
    tier: 'Enterprise',
    price: 'Individuell',
    features: [
      'Alles aus Premium',
      'Volle Custom-Architektur',
      'ERP & PIM Integration',
      'Multi-Shop Management',
      'Dedicated Team',
    ],
    buttonText: 'Beratung buchen',
    isHighlighted: false,
  },
];

</script>
