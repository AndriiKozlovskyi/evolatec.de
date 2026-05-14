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
    <TrustSection :companies="trustCompanies" />

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
            <div class="grid grid-cols-3 gap-6 pt-8 border-t border-outline-variant/30">
              <div v-for="stat in introStats" :key="stat.label">
                <div class="font-display text-3xl text-primary font-black leading-none">{{ stat.value }}</div>
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
                <div class="text-[0.65rem] uppercase tracking-widest font-bold text-on-surface-variant mb-3">Conversion Rate</div>
                <div class="font-display text-4xl font-black leading-none text-primary">+340<span class="text-lg text-on-surface-variant">%</span></div>
                <div class="text-xs text-on-surface-variant mt-1">Ø Ergebnis</div>
              </div>
              <div class="absolute top-44 right-0 bg-white rounded-2xl p-5 shadow-xl rotate-[5deg]">
                <div class="text-[0.65rem] uppercase tracking-widest font-bold text-on-surface-variant mb-2">Ladezeit</div>
                <div class="font-display text-4xl font-black leading-none text-primary">&lt;1.2<span class="text-lg text-on-surface-variant">s</span></div>
                <div class="text-xs text-on-surface-variant mt-1">PageSpeed</div>
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

    <!-- Expertise Blocks — Kosten & professioneller Shop -->
    <section data-nav-label="Expertise" data-nav-icon="verified" class="relative py-section-padding bg-surface-container-low overflow-hidden">
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-primary/[0.04] blur-[120px] pointer-events-none"></div>
      <div class="relative max-w-container-max mx-auto px-gutter">
        <div class="text-center max-w-2xl mx-auto mb-stack-lg">
          <span class="inline-flex items-center gap-2 rounded-full bg-primary/8 border border-primary/15 px-4 py-2 text-sm font-medium text-primary mb-5">
            <span class="material-symbols-outlined text-[18px]">verified</span>
            E-Commerce aus einer Hand
          </span>
          <h2 class="font-headline-lg text-primary leading-tight">Onlineshop erstellen lassen — vom Konzept bis zum Verkauf</h2>
        </div>
        <div class="grid lg:grid-cols-2 gap-8">
          <div
            v-for="block in expertiseBlocks"
            :key="block.title"
            class="group relative bg-surface rounded-3xl p-10 border border-outline-variant/30 ambient-shadow hover:shadow-2xl hover:border-primary/20 transition-all duration-500 overflow-hidden"
          >
            <div class="absolute top-0 left-10 right-10 h-1 bg-gradient-to-r from-primary to-primary-container rounded-b-full"></div>
            <div class="absolute -top-20 -right-20 w-48 h-48 rounded-full bg-primary/5 blur-[60px] pointer-events-none"></div>
            <div class="relative">
              <div class="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary/15 transition-all duration-300">
                <span class="material-symbols-outlined text-primary text-2xl">{{ block.icon }}</span>
              </div>
              <h3 class="font-headline-lg text-primary mb-5 leading-tight">{{ block.title }}</h3>
              <div class="space-y-4 mb-7">
                <p v-for="(para, i) in block.paragraphs" :key="i" class="font-body-lg text-on-surface-variant">{{ para }}</p>
              </div>
              <div class="flex flex-wrap gap-2 pt-6 border-t border-outline-variant/20">
                <span v-for="tag in block.tags" :key="tag" class="px-3 py-1.5 rounded-full bg-primary/8 text-primary text-xs font-semibold">{{ tag }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Pricing Section -->
    <PricingSection
      title="Online Shop Kosten & Preise"
      subtitle="Transparente Preise ohne versteckte Kosten. Onlineshop erstellen lassen ab 3.000 €."
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
useHead({
  title: 'Online Shop erstellen lassen – E-Commerce & Webshop | EvolaTec Agentur',
  meta: [
    {
      name: 'description',
      content: 'E-Commerce Shops & Online Shops erstellen lassen. Professionelle Shopify und Custom Shop Entwicklung mit SEO-Optimierung und hohen Conversion-Raten.'
    },
    {
      name: 'keywords',
      content: 'online shop erstellen lassen, e-commerce shop, shopify shop erstellen, webshop erstellen lassen, online shop entwicklung'
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
    }
  ]
});

const heroStats = [
  { value: '+340%', label: 'Conversion', icon: 'trending_up' },
  { value: '< 1.2s', label: 'Ladezeit', icon: 'flash_on' },
  { value: '99.9%', label: 'Uptime', icon: 'shield' },
  { value: 'ab 5T', label: 'Lieferzeit', icon: 'rocket_launch' },
];

const trustCompanies = ['E-COMMERCE', 'SHOPIFY', 'WOOCOMMERCE', 'CUSTOM SHOP'];

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
  { value: '50+', label: 'Shops Live' },
  { value: '+340%', label: 'Ø Conversion' },
  { value: 'ab 5T', label: 'Lieferzeit' },
];

const ecommerceServices = [
  {
    title: 'Shopify Shop erstellen lassen',
    description: 'Professionelle Shopify Shops mit individuellem Design, schnellem Setup und optimierten Conversion-Raten.',
    icon: 'storefront',
    iconBg: 'bg-blue-100',
    iconColor: 'text-blue-600',
    borderColor: 'border-blue-500',
  },
  {
    title: 'WooCommerce Entwicklung',
    description: 'Individuelle WooCommerce Shops auf WordPress-Basis — flexibel, erweiterbar und SEO-optimiert.',
    icon: 'shopping_bag',
    iconBg: 'bg-purple-100',
    iconColor: 'text-purple-600',
    borderColor: 'border-purple-500',
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
      'Die Kosten, einen Onlineshop erstellen zu lassen, hängen von Plattform, Umfang und individuellen Anforderungen ab. Ein professioneller Shopify Shop startet bei EvolaTec ab 5.000 €, individuelle Custom-Lösungen entsprechend höher.',
      'Zu den einmaligen Erstellungskosten kommen laufende Betriebskosten: Hosting, Plattform-Gebühren (z. B. Shopify ab ca. 30 €/Monat), Zahlungsanbieter-Gebühren sowie optionale Wartungsleistungen.',
      'Wer seinen Onlineshop professionell erstellen lässt, investiert in eine Lösung, die langfristig Umsatz generiert — statt in günstige Baukastensysteme, die schnell an ihre Grenzen stoßen.',
      'EvolaTec bietet transparente Preise ohne versteckte Kosten. Bereits im ersten Gespräch erhalten Sie eine realistische Einschätzung der Kosten für Ihren individuellen Online Shop.',
    ],
    tags: ['Shop Kosten', 'Transparent', 'Shopify', 'Custom Shop'],
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
    description: 'Ihr professioneller Online Shop geht bereits ab 5 Arbeitstagen live.',
    icon: 'flash_on',
    bg: 'bg-gradient-to-br from-blue-600 to-indigo-800',
    image: '/ecommerce/hero.webp',
  },
  {
    title: 'Höhere Conversion',
    description: 'Conversion-optimierte Shops generieren im Schnitt +340% mehr Bestellungen.',
    icon: 'trending_up',
    bg: 'bg-gradient-to-br from-emerald-600 to-teal-800',
    image: '/ecommerce/features.webp',
  },
  {
    title: 'Technische Performance',
    description: 'Ladezeiten unter 1,2 Sekunden und 99,9% Uptime für Ihren Shop.',
    icon: 'speed',
    bg: 'bg-gradient-to-br from-purple-600 to-indigo-800',
    image: '/web-development-cost/tech.webp',
  },
  {
    title: 'Transparente Kosten',
    description: 'Klare Preise ohne versteckte Gebühren — von Anfang an ehrlich kalkuliert.',
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
    question: 'Was kostet es, einen Onlineshop erstellen zu lassen?',
    answer:
      'Die Kosten für einen professionellen Online Shop bei EvolaTec starten ab 3.000 € für einen Basis-Shop. Premium-Lösungen mit Custom Design, erweiterten Funktionen und Integrationen beginnen ab 6.000 €. Die genauen Kosten hängen von Produktanzahl, Funktionsumfang und Plattform ab — wir beraten Sie gerne transparent.',
  },
  {
    question: 'Welche laufenden Kosten entstehen nach der Shop-Erstellung?',
    answer:
      'Neben den einmaligen Entwicklungskosten fallen monatliche Betriebskosten an: Shopify-Abo ab ca. 30 €/Monat, Hosting, Zahlungsanbieter-Gebühren (ca. 1–2% pro Transaktion) sowie optionale Wartung und Support. Wir beraten Sie zu allen laufenden Kosten transparent vor Projektstart.',
  },
  {
    question: 'Wie lange dauert die Entwicklung eines Online-Shops?',
    answer:
      'Ein Standard-Shopify-Setup kann innerhalb von 2–4 Wochen live gehen. Komplexe Custom-Lösungen benötigen je nach Umfang 2–4 Monate für Konzeption und Entwicklung.',
  },
  {
    question: 'Welche Shop-Plattform ist die richtige für mein Unternehmen?',
    answer:
      'Shopify eignet sich ideal für schnellen Start und einfache Verwaltung. WooCommerce bietet maximale Flexibilität auf WordPress-Basis. Custom-Lösungen empfehlen wir für komplexe Prozesse, hohe Skalierbarkeit oder spezifische Integrationen.',
  },
  {
    question: 'Unterstützen Sie auch bei der SEO-Optimierung des Shops?',
    answer:
      'Ja, jeder von uns entwickelte Online Shop ist von Grund auf SEO-optimiert — mit technischer Struktur, PageSpeed-Optimierung, Schema.org Markup und sauberer URL-Architektur für beste Rankings bei Google.',
  },
  {
    question: 'Bietet EvolaTec auch Wartung und Support nach dem Launch an?',
    answer:
      'Ja, wir bieten verschiedene Wartungspakete mit monatlichem Support, Updates, Performance-Monitoring und technischer Betreuung. So bleibt Ihr Online Shop dauerhaft aktuell und leistungsstark.',
  },
];
</script>
