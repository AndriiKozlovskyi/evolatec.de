<template>
  <div>
    <!-- Hero Section -->
    <HeroSection
      background-image="/landing/advertising.webp"
      badge="Transparente Preise"
      title="Website erstellen lassen Kosten & Preise"
      description="Transparente Preise für Landingpages, Firmenwebsites und Online Shops. Professionelle Webentwicklung ohne versteckte Kosten."
      primaryCTA="Kostenloses Angebot erhalten"
      secondaryCTA="Preise ansehen"
      :stats="heroStats"
    />

    <!-- Intro Section -->
    <section class="py-8 md:py-section-padding bg-surface-container-low">
      <div class="max-w-container-max mx-auto px-gutter">
        <div class="max-w-3xl mx-auto text-center space-y-3 md:space-y-stack-md">
          <h2 class="font-display text-3xl sm:text-4xl md:text-5xl text-on-surface leading-tight">Was kostet es, eine Website erstellen zu lassen?</h2>
          <p class="text-sm sm:text-body-md md:text-body-lg text-on-surface-variant leading-relaxed">
            Die Kosten einer Website hängen von Umfang, Funktionen und Design ab. Eine einfache Landingpage ist günstiger als ein komplexer Online Shop.
          </p>
          <p class="text-sm sm:text-body-md md:text-body-lg text-on-surface-variant leading-relaxed">
            Bei EvolaTec erhalten Sie transparente Festpreise und moderne Websites, die auf Ergebnisse optimiert sind.
          </p>
        </div>
      </div>
    </section>

    <!-- Pricing Overview Table -->
    <section class="py-8 md:py-section-padding bg-white">
      <div class="max-w-container-max mx-auto px-gutter">
        <div class="text-center mb-6 md:mb-stack-lg">
          <span class="text-label-md uppercase font-bold text-primary tracking-widest mb-2 block text-xs">Preise</span>
          <h2 class="font-display text-3xl sm:text-4xl md:text-5xl text-on-surface mb-2 md:mb-4 leading-tight">Website Preise im Überblick</h2>
          <p class="text-on-surface-variant text-sm sm:text-lg max-w-2xl mx-auto">Transparente Preise für professionelle Websites.</p>
        </div>

        <!-- Table -->
        <div class="overflow-x-auto rounded-lg">
          <table class="w-full text-sm sm:text-base">
            <thead>
              <tr class="border-b-2 border-primary/20 bg-surface">
                <th class="text-left p-2 sm:p-4 font-bold text-on-surface text-xs sm:text-base">Leistung</th>
                <th class="text-left p-2 sm:p-4 font-bold text-on-surface text-xs sm:text-base">Preis</th>
                <th class="text-left p-2 sm:p-4 font-bold text-on-surface text-xs sm:text-base">Lieferzeit</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, index) in pricingTable" :key="index" class="border-b border-surface-container hover:bg-surface transition-colors duration-200">
                <td class="p-2 sm:p-4 text-on-surface font-medium text-xs sm:text-base">{{ item.service }}</td>
                <td class="p-2 sm:p-4 text-primary font-bold text-sm sm:text-lg">{{ item.price }}</td>
                <td class="p-2 sm:p-4 text-on-surface-variant text-xs sm:text-base">{{ item.delivery }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <!-- What Affects Price Section -->
    <FeaturesSection
      title="Was beeinflusst die Kosten einer Website?"
      :features="priceFactors"
      image-url="/web-development-cost/features.webp"
      image-alt="Faktoren die die Kosten einer Website beeinflussen – Design, Funktionen und SEO"
    />

    <!-- Landing Page Section -->
    <section class="py-8 md:py-section-padding bg-white">
      <div class="max-w-container-max mx-auto px-gutter">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-stack-lg items-center">
          <!-- Content -->
          <div>
            <h2 class="font-display text-3xl sm:text-4xl md:text-5xl text-on-surface mb-4 md:mb-stack-md leading-tight">Landingpage erstellen lassen – Kosten</h2>
            <p class="text-sm sm:text-body-md md:text-body-lg text-on-surface-variant mb-4 md:mb-6 leading-relaxed">
              Landingpages eignen sich perfekt für Werbung, lokale Dienstleistungen und schnelle Leadgenerierung.
            </p>
            <div class="space-y-3 md:space-y-4 mb-6 md:mb-8">
              <div v-for="feature in landingFeatures" :key="feature" class="flex items-start gap-3 group">
                <span class="material-symbols-outlined text-primary text-lg md:text-xl flex-shrink-0">check_circle</span>
                <span class="text-sm sm:text-body-md text-on-surface">{{ feature }}</span>
              </div>
            </div>
            <BaseButton variant="primary" size="md">Mehr über Landingpages</BaseButton>
          </div>

          <!-- Price Card -->
          <div class="bg-gradient-to-br from-primary-container to-primary rounded-xl md:rounded-2xl p-6 sm:p-8 md:p-12 text-on-primary shadow-xl">
            <p class="text-on-primary-container text-xs font-bold uppercase tracking-widest mb-2">Landingpage</p>
            <p class="text-3xl sm:text-4xl md:text-5xl font-black mb-3 md:mb-4 leading-tight">ab 350€</p>
            <p class="text-on-primary-container text-sm md:text-base mb-4 md:mb-6">Lieferung ab 3 Tagen</p>
            <BaseButton variant="secondary" size="md" class="w-full">Anfrage stellen</BaseButton>
          </div>
        </div>
      </div>
    </section>

    <!-- Website Section -->
    <section class="py-8 md:py-section-padding bg-surface-container-low">
      <div class="max-w-container-max mx-auto px-gutter">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-stack-lg items-center">
          <!-- Price Card -->
          <div class="bg-gradient-to-br from-primary-container to-primary rounded-xl md:rounded-2xl p-6 sm:p-8 md:p-12 text-on-primary shadow-xl order-2 md:order-1">
            <p class="text-on-primary-container text-xs font-bold uppercase tracking-widest mb-2">Firmenwebsite</p>
            <p class="text-3xl sm:text-4xl md:text-5xl font-black mb-3 md:mb-4 leading-tight">ab 750€</p>
            <p class="text-on-primary-container text-sm md:text-base mb-4 md:mb-6">Lieferung ab 7 Tagen</p>
            <BaseButton variant="secondary" size="md" class="w-full">Anfrage stellen</BaseButton>
          </div>

          <!-- Content -->
          <div class="order-1 md:order-2">
            <h2 class="font-display text-3xl sm:text-4xl md:text-5xl text-on-surface mb-4 md:mb-stack-md leading-tight">Firmenwebsite erstellen lassen – Kosten</h2>
            <p class="text-sm sm:text-body-md md:text-body-lg text-on-surface-variant mb-4 md:mb-6 leading-relaxed">
              Professionelle Unternehmenswebsites für lokale Unternehmen, Agenturen und Dienstleister.
            </p>
            <div class="space-y-3 md:space-y-4 mb-6 md:mb-8">
              <div v-for="feature in websiteFeatures" :key="feature" class="flex items-start gap-3 group">
                <span class="material-symbols-outlined text-primary text-lg md:text-xl flex-shrink-0">check_circle</span>
                <span class="text-sm sm:text-body-md text-on-surface">{{ feature }}</span>
              </div>
            </div>
            <BaseButton variant="primary" size="md">Mehr über Firmenwebsites</BaseButton>
          </div>
        </div>
      </div>
    </section>

    <!-- E-Commerce Section -->
    <section class="py-8 md:py-section-padding bg-white">
      <div class="max-w-container-max mx-auto px-gutter">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-stack-lg items-center">
          <!-- Content -->
          <div>
            <h2 class="font-display text-3xl sm:text-4xl md:text-5xl text-on-surface mb-4 md:mb-stack-md leading-tight">Online Shop erstellen lassen – Kosten</h2>
            <p class="text-sm sm:text-body-md md:text-body-lg text-on-surface-variant mb-4 md:mb-6 leading-relaxed">
              Moderne E-Commerce Lösungen und Shopify Shops für Unternehmen und Marken.
            </p>
            <div class="space-y-3 md:space-y-4 mb-6 md:mb-8">
              <div v-for="feature in ecommerceFeatures" :key="feature" class="flex items-start gap-3 group">
                <span class="material-symbols-outlined text-primary text-lg md:text-xl flex-shrink-0">check_circle</span>
                <span class="text-sm sm:text-body-md text-on-surface">{{ feature }}</span>
              </div>
            </div>
            <BaseButton variant="primary" size="md">Mehr über Online Shops</BaseButton>
          </div>

          <!-- Price Card -->
          <div class="bg-gradient-to-br from-primary-container to-primary rounded-xl md:rounded-2xl p-6 sm:p-8 md:p-12 text-on-primary shadow-xl">
            <p class="text-on-primary-container text-xs font-bold uppercase tracking-widest mb-2">Online Shop</p>
            <p class="text-3xl sm:text-4xl md:text-5xl font-black mb-3 md:mb-4 leading-tight">ab 1.200€</p>
            <p class="text-on-primary-container text-sm md:text-base mb-4 md:mb-6">Lieferung ab 14 Tagen</p>
            <BaseButton variant="secondary" size="md" class="w-full">Anfrage stellen</BaseButton>
          </div>
        </div>
      </div>
    </section>

    <!-- Why Us Section -->
    <BenefitsSection
      title="Warum EvolaTec?"
      :benefits="whyUs"
    />

    <!-- FAQ Section -->
    <FAQSection
      title="Häufig gestellte Fragen zu Website-Preisen"
      :faqs="faqs"
    />

    <!-- CTA Section -->
    <CTASection
      title="Website professionell erstellen lassen"
      description="Moderne Websites, Landingpages und Online Shops mit transparenten Preisen."
      primary-cta="Kostenlos beraten lassen"
      secondary-cta="Preise ansehen"
    />
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Website Kosten & Preise 2024 | Webagentur EvolaTec',
  meta: [
    { name: 'description', content: 'Was kostet eine professionelle Website? Transparente Preise für Unternehmenswebsites, Landingpages und Onlineshops. Jetzt Kosten vergleichen.' },
    { name: 'keywords', content: 'website kosten, website preise, homepage erstellen lassen kosten, webagentur preise, website erstellen kosten 2024' },
    { property: 'og:title', content: 'Website Kosten & Preise | EvolaTec Webagentur' },
    { property: 'og:description', content: 'Transparente Preise für professionelle Websites, Landingpages und Onlineshops.' },
    { property: 'og:type', content: 'website' },
  ],
  link: [{ rel: 'canonical', href: 'https://evolatec.de/website-development-cost' }],
});

const heroStats = [
  { value: 'ab 350€', label: 'Landingpage', icon: 'trending_up' },
  { value: 'ab 750€', label: 'Website', icon: 'language' },
  { value: 'ab 1.200€', label: 'Online Shop', icon: 'shopping_bag' },
  { value: 'Keine', label: 'Versteckten Kosten', icon: 'verified' },
];

const pricingTable = [
  {
    service: 'Landingpage / One-Pager',
    price: 'ab 350€',
    delivery: 'ab 3 Tagen',
  },
  {
    service: 'Firmenwebsite',
    price: 'ab 750€',
    delivery: 'ab 7 Tagen',
  },
  {
    service: 'Business Website',
    price: 'ab 1.200€',
    delivery: 'ab 10 Tagen',
  },
  {
    service: 'Online Shop',
    price: 'ab 1.200€',
    delivery: 'ab 14 Tagen',
  },
  {
    service: 'Premium E-Commerce',
    price: 'ab 5.000€',
    delivery: 'ab 30 Tagen',
  },
];

const priceFactors = [
  {
    icon: 'pages',
    title: 'Anzahl der Seiten',
    description: 'Mehr Unterseiten bedeuten höheren Entwicklungsaufwand.',
  },
  {
    icon: 'design_services',
    title: 'Individuelles Design',
    description: 'Maßgeschneiderte Designs benötigen mehr Zeit.',
  },
  {
    icon: 'extension',
    title: 'Funktionen',
    description: 'Shops, Buchungssysteme, Mehrsprachigkeit oder Integrationen erhöhen den Aufwand.',
  },
  {
    icon: 'search_insights',
    title: 'SEO & Marketing',
    description: 'Erweiterte SEO-Optimierung und Werbesysteme beeinflussen den Preis.',
  },
];

const landingFeatures = [
  'Ab 350€',
  'Lieferung ab 3 Tagen',
  'SEO-ready',
  'Responsive Design',
];

const websiteFeatures = [
  'Ab 750€',
  'Ab 7 Tagen',
  'SEO optimiert',
  'Modernes Webdesign',
];

const ecommerceFeatures = [
  'Ab 1.200€',
  'Ab 14 Tagen',
  'Produktverwaltung',
  'Zahlungssysteme integriert',
];

const whyUs = [
  {
    icon: 'verified_user',
    title: 'Transparente Preise',
    description: 'Klare Angebote ohne versteckte Kosten.',
    bg: 'bg-gradient-to-br from-emerald-600 to-teal-800',
    image: '/web-development-cost/price.webp',
  },
  {
    icon: 'trending_up',
    title: 'Fokus auf Ergebnisse',
    description: 'Websites, die Kunden gewinnen und Umsatz steigern.',
    bg: 'bg-gradient-to-br from-blue-600 to-blue-800',
    image: '/landing/leads.webp',
  },
  {
    icon: 'rocket_launch',
    title: 'Moderne Technologien',
    description: 'Schnelle, SEO-optimierte und responsive Websites.',
    bg: 'bg-gradient-to-br from-purple-600 to-indigo-800',
    image: '/web-development-cost/tech.webp',
  },
];

const faqs = [
  {
    question: 'Was kostet eine professionelle Website?',
    answer:
      'Professionelle Websites beginnen ab 750€, abhängig von Umfang und Funktionen. Eine Firmenwebsite enthält alle wichtigen Features für ein Unternehmen: modernes Design, mobile Optimierung und Basis-SEO.',
  },
  {
    question: 'Was kostet eine Landingpage?',
    answer:
      'Landingpages beginnen ab 350€ und eignen sich ideal für Werbung, Kampagnen und schnelle Leadgenerierung. Sie sind perfekt, wenn Sie schnell online präsent sein möchten.',
  },
  {
    question: 'Was kostet ein Online Shop?',
    answer:
      'Online Shops starten ab 1.200€, abhängig von der Anzahl der Produkte und benötigten Funktionen. Komplexere E-Commerce-Lösungen mit erweiterten Features kosten ab 5.000€.',
  },
  {
    question: 'Gibt es Festpreise?',
    answer:
      'Ja, wir bieten transparente Festpreis-Angebote. Sie wissen von Anfang an, was Ihre Website kostet – es gibt keine überraschenden Zusatzkosten während der Entwicklung.',
  },
  {
    question: 'Ist SEO inklusive?',
    answer:
      'Ja, Basis-SEO ist in allen Projekten enthalten. Das beinhaltet technische Optimierungen, schnelle Ladezeiten, mobile Optimierung und saubere Meta-Daten. Erweiterte SEO-Services sind gegen Aufpreis möglich.',
  },
  {
    question: 'Sind Wartung und Support inklusive?',
    answer:
      'Die Grundlage ist im Preis enthalten. Für regelmäßige Wartung, Updates und erweiterten Support bieten wir flexible Pakete an.',
  },
];
</script>
