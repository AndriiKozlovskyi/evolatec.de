<template>
  <div>
    <!-- Hero Section -->
    <HeroSection
      background-image="/main/hero.webp"
      badge="Webdesign & Webentwicklung Agentur"
      title="Professionelle Website erstellen lassen für Unternehmen"
      description="Moderne Firmenwebsites, Landingpages und Online Shops, die Kunden gewinnen und Ihr Unternehmen wachsen lassen. SEO-optimiert, schnell und conversion-stark."
      primaryCTA="Kostenloses Angebot erhalten"
      secondaryCTA="Preise ansehen"
      :stats="heroStats"
    />

    <!-- Services Section -->
    <section class="py-8 md:py-section-padding bg-surface">
      <div class="max-w-container-max mx-auto px-gutter">
        <div class="text-center mb-6 md:mb-stack-lg">
          <h2 class="font-display text-3xl sm:text-4xl md:text-5xl font-black text-on-surface mb-2 md:mb-4 leading-tight">Unsere Leistungen</h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-stack-md">
          <div
            v-for="(service, index) in services"
            :key="service.id"
            class="group relative bg-white rounded-xl md:rounded-2xl p-4 sm:p-6 md:p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-surface-container-high animate-fade-in-up"
            :style="{ animationDelay: `${index * 100}ms` }"
          >
            <!-- Icon -->
            <div class="w-12 sm:w-16 h-12 sm:h-16 rounded-lg md:rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-gradient-to-br group-hover:from-primary/20 group-hover:to-primary/10 transition-colors duration-300">
              <span class="material-symbols-outlined text-xl sm:text-[2rem] text-primary group-hover:scale-110 transition-transform duration-300">{{ service.icon }}</span>
            </div>

            <!-- Content -->
            <h3 class="text-base sm:text-headline-md font-bold text-on-surface mb-2 sm:mb-3">{{ service.title }}</h3>
            <p class="text-sm sm:text-body-md text-on-surface-variant mb-4 sm:mb-6 line-clamp-3">{{ service.description }}</p>

            <!-- Price -->
            <p class="text-base sm:text-lg font-black text-primary mb-4 sm:mb-6">{{ service.price }}</p>

            <!-- Link -->
            <a
              :href="service.href"
              class="inline-flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all duration-300 text-sm sm:text-base py-2 min-h-[44px]"
            >
              Mehr erfahren
              <span class="material-symbols-outlined text-lg">arrow_forward</span>
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Why Us Section -->
    <BenefitsSection
      title="Warum EvolaTec?"
      :benefits="whyUs"
    />

    <!-- Process Section -->
    <ProcessSection
      title="So arbeiten wir"
      :steps="processSteps"
    />

    <!-- Pricing Overview -->
    <section class="py-8 md:py-section-padding bg-surface-container-low">
      <div class="max-w-container-max mx-auto px-gutter">
        <div class="text-center mb-6 md:mb-stack-lg">
          <span class="text-label-md uppercase font-bold text-primary tracking-widest mb-2 block text-xs">Preise</span>
          <h2 class="font-display text-3xl sm:text-4xl md:text-5xl font-black text-on-surface mb-2 md:mb-4 leading-tight">Website erstellen lassen – Preise</h2>
          <p class="text-on-surface-variant text-sm sm:text-lg max-w-2xl mx-auto">Transparente Preise für professionelle Webentwicklung.</p>
        </div>

        <!-- Mobile: stacked cards -->
        <div class="md:hidden space-y-3 mb-6">
          <div
            v-for="(item, index) in pricingTable"
            :key="`m-${index}`"
            class="bg-white rounded-xl border border-surface-container-high p-4 flex items-center justify-between gap-3"
          >
            <div class="min-w-0 flex-1">
              <p class="font-bold text-on-surface text-base leading-tight">{{ item.service }}</p>
              <p class="text-on-surface-variant text-xs mt-1 flex items-center gap-1">
                <span class="material-symbols-outlined text-sm">schedule</span>
                {{ item.delivery }}
              </p>
            </div>
            <p class="text-primary font-black text-lg whitespace-nowrap">{{ item.price }}</p>
          </div>
        </div>

        <!-- Desktop: table -->
        <div class="hidden md:block mb-stack-lg rounded-lg overflow-hidden">
          <table class="w-full text-base">
            <thead>
              <tr class="border-b-2 border-primary/20 bg-surface">
                <th class="text-left p-4 font-bold text-on-surface">Leistung</th>
                <th class="text-left p-4 font-bold text-on-surface">Preis</th>
                <th class="text-left p-4 font-bold text-on-surface">Lieferzeit</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, index) in pricingTable" :key="index" class="border-b border-surface-container hover:bg-white transition-colors duration-200">
                <td class="p-4 text-on-surface font-medium">{{ item.service }}</td>
                <td class="p-4 text-primary font-bold text-lg">{{ item.price }}</td>
                <td class="p-4 text-on-surface-variant">{{ item.delivery }}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="text-center">
          <a href="/pricing" class="inline-block">
            <BaseButton variant="primary" size="lg">Alle Preise ansehen</BaseButton>
          </a>
        </div>
      </div>
    </section>

    <!-- Results Section -->
    <section class="py-8 md:py-section-padding bg-gradient-to-r from-primary/90 via-primary to-primary/90 text-on-primary relative overflow-hidden">
      <!-- Background decoration - hidden on mobile -->
      <div class="hidden sm:block absolute inset-0 overflow-hidden pointer-events-none">
        <div class="absolute -top-40 -right-40 w-80 h-80 bg-on-primary-container/10 rounded-full blur-3xl"></div>
        <div class="absolute -bottom-40 -left-40 w-80 h-80 bg-on-primary-container/10 rounded-full blur-3xl"></div>
      </div>

      <div class="relative z-10 max-w-container-max mx-auto px-gutter">
        <h2 class="font-display text-3xl sm:text-4xl md:text-5xl font-black text-center mb-6 md:mb-stack-lg leading-tight">Ergebnisse unserer Kunden</h2>

        <div class="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6 md:gap-8 mb-6 md:mb-stack-lg">
          <div
            v-for="(result, index) in results"
            :key="index"
            class="text-center animate-fade-in-up"
            :style="{ animationDelay: `${index * 100}ms` }"
          >
            <p
              v-if="result.icon"
              class="text-3xl sm:text-5xl md:text-6xl font-black mb-2 sm:mb-3 text-on-primary leading-none flex items-center justify-center"
            >
              <span class="material-symbols-outlined" style="font-size: 1em; line-height: 1;">{{ result.icon }}</span>
            </p>
            <p
              v-else
              class="text-3xl sm:text-5xl md:text-6xl font-black mb-2 sm:mb-3 text-on-primary leading-tight"
            >{{ result.value }}</p>
            <p class="text-on-primary-container text-xs sm:text-body-md">{{ result.label }}</p>
          </div>
        </div>

        <div class="text-center">
          <a href="/portfolio" class="inline-block">
            <BaseButton variant="secondary" size="md">Projekte ansehen</BaseButton>
          </a>
        </div>
      </div>
    </section>

    <!-- SEO Text Section -->
    <section class="py-8 md:py-section-padding bg-white">
      <div class="max-w-container-max mx-auto px-gutter">
        <div class="max-w-3xl mx-auto space-y-4 md:space-y-stack-md">
          <h2 class="font-display text-3xl sm:text-4xl md:text-5xl font-black text-on-surface mb-4 md:mb-6 leading-tight">Professionelle Website erstellen lassen</h2>

          <p class="text-sm sm:text-body-md md:text-body-lg text-on-surface-variant leading-relaxed">
            Eine professionelle Website ist heute entscheidend für den Erfolg eines Unternehmens. Bei EvolaTec entwickeln wir moderne Firmenwebsites, Landingpages und Online Shops, die nicht nur gut aussehen, sondern echte Ergebnisse liefern.
          </p>

          <p class="text-sm sm:text-body-md md:text-body-lg text-on-surface-variant leading-relaxed">
            Unsere Websites sind SEO-optimiert, mobilfreundlich und auf Conversion ausgelegt. Ob kleine Firmenwebsite, Landingpage für Werbung oder komplexer Online Shop — wir entwickeln individuelle Lösungen für Unternehmen in Deutschland.
          </p>

          <div class="pt-6 md:pt-8 flex flex-col sm:flex-wrap sm:flex-row gap-3 sm:gap-4">
            <a href="/website-development" class="inline-block w-full sm:w-auto">
              <BaseButton variant="primary" size="md" class="w-full sm:w-auto">Firmenwebsite</BaseButton>
            </a>
            <a href="/landing-development" class="inline-block w-full sm:w-auto">
              <BaseButton variant="outline" size="md" class="w-full sm:w-auto">Landingpage</BaseButton>
            </a>
            <a href="/e-commerce-development" class="inline-block w-full sm:w-auto">
              <BaseButton variant="outline" size="md" class="w-full sm:w-auto">Online Shop</BaseButton>
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <FAQSection
      title="Häufig gestellte Fragen"
      :faqs="faqs"
    />

    <!-- CTA Section -->
    <CTASection
      title="Lassen Sie Ihre Website professionell erstellen"
      description="Moderne Websites, die Kunden gewinnen und Ihr Unternehmen wachsen lassen."
      primary-cta="Kostenlos beraten lassen"
      secondary-cta="Projekt besprechen"
    />
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'EvolaTec – Webagentur für Website, SEO & Online Marketing',
  meta: [
    { name: 'description', content: 'EvolaTec ist Ihre professionelle Webagentur für Website-Erstellung, SEO-Optimierung und Online Marketing. Moderne Websites ab 3 Tagen Lieferzeit.' },
    { name: 'keywords', content: 'webagentur, website erstellen lassen, seo agentur, online marketing agentur, homepage erstellen lassen, webdesign agentur' },
    { property: 'og:title', content: 'EvolaTec – Webagentur für Website, SEO & Online Marketing' },
    { property: 'og:description', content: 'Professionelle Websites, SEO und Online Marketing für Unternehmen. Modern, schnell und conversion-optimiert.' },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://evolatec.de' },
  ],
  link: [{ rel: 'canonical', href: 'https://evolatec.de' }],
});

const heroStats = [
  { value: 'ab 3 Tagen', label: 'Lieferzeit', icon: 'flash_on' },
  { value: '100%', label: 'SEO-ready', icon: 'search_check' },
  { value: 'Alle', label: 'Responsive Design', icon: 'smartphone' },
  { value: 'Transparent', label: 'Preise', icon: 'verified' },
];

const services = [
  {
    id: 1,
    icon: 'article',
    title: 'Landingpage erstellen lassen',
    description: 'Conversion-optimierte One-Pager für Werbung und Leadgenerierung.',
    price: 'ab 350€',
    href: '/landing-development',
  },
  {
    id: 2,
    icon: 'language',
    title: 'Firmenwebsite erstellen lassen',
    description: 'Professionelle Unternehmenswebsites für lokale Firmen und Unternehmen.',
    price: 'ab 750€',
    href: '/website-development',
  },
  {
    id: 3,
    icon: 'shopping_bag',
    title: 'Online Shop erstellen lassen',
    description: 'Moderne E-Commerce Lösungen und Shopify Shops.',
    price: 'ab 1.200€',
    href: '/e-commerce-development',
  },
  {
    id: 4,
    icon: 'search_insights',
    title: 'SEO Optimierung',
    description: 'Mehr Sichtbarkeit bei Google und nachhaltiges Wachstum.',
    price: 'ab 250€/Monat',
    href: '/seo',
  },
  {
    id: 5,
    icon: 'trending_up',
    title: 'Google Ads Betreuung',
    description: 'Mehr Kundenanfragen durch gezielte Werbekampagnen.',
    price: 'ab 200€/Monat',
    href: '/google-ads',
  },
];

const whyUs = [
  {
    icon: 'target',
    title: 'Ergebnisse statt nur Design',
    description: 'Wir entwickeln Websites, die Leads generieren und verkaufen.',
    bg: 'bg-gradient-to-br from-blue-600 to-blue-800',
    image: '/main/design.webp',
  },
  {
    icon: 'search_check',
    title: 'SEO-ready Entwicklung',
    description: 'Technisch optimierte Websites für bessere Rankings bei Google.',
    bg: 'bg-gradient-to-br from-emerald-600 to-teal-800',
    image: '/main/seo.webp',
  },
  {
    icon: 'flash_on',
    title: 'Schnelle Umsetzung',
    description: 'Landingpages ab 3 Tagen, Firmenwebsites ab 7 Tagen.',
    bg: 'bg-gradient-to-br from-amber-500 to-orange-600',
    image: '/main/fast.webp',
  },
  {
    icon: 'verified_user',
    title: 'Transparente Preise',
    description: 'Klare Angebote ohne versteckte Kosten.',
    bg: 'bg-gradient-to-br from-purple-600 to-indigo-800',
    image: '/main/price.webp',
  },
];

const processSteps = [
  {
    icon: 'mail',
    title: 'Kostenlose Beratung',
    description: 'Wir verstehen Ihre Anforderungen und Ziele genau.',
  },
  {
    icon: 'design_services',
    title: 'Struktur & Design',
    description: 'Planung und Gestaltung Ihrer Website.',
  },
  {
    icon: 'code',
    title: 'Entwicklung & SEO',
    description: 'Professionelle Umsetzung mit vollständiger SEO-Optimierung.',
  },
  {
    icon: 'rocket_launch',
    title: 'Launch & Optimierung',
    description: 'Gründliches Testen und professioneller Go-Live.',
  },
];

const pricingTable = [
  { service: 'Landingpage', price: 'ab 350€', delivery: 'ab 3 Tagen' },
  { service: 'Firmenwebsite', price: 'ab 750€', delivery: 'ab 7 Tagen' },
  { service: 'Business Website', price: 'ab 1.200€', delivery: 'ab 10 Tagen' },
  { service: 'Online Shop', price: 'ab 1.200€', delivery: 'ab 14 Tagen' },
  { service: 'Premium E-Commerce', price: 'ab 5.000€', delivery: 'ab 30 Tagen' },
];

const results = [
  { value: '+230%', label: 'mehr Leads' },
  { value: '+180%', label: 'organischer Traffic' },
  { icon: 'bolt', label: 'Schnellere Ladezeiten' },
  { icon: 'trending_up', label: 'Mehr Verkäufe' },
];

const faqs = [
  {
    question: 'Was kostet eine professionelle Website?',
    answer:
      'Die Preise beginnen ab 350€ für Landingpages und ab 750€ für Firmenwebsites. Jedes Projekt ist unterschiedlich – wir erstellen Ihnen gerne ein transparentes Angebot.',
  },
  {
    question: 'Wie lange dauert die Erstellung?',
    answer:
      'Landingpages ab 3 Tagen, Firmenwebsites ab 7 Tagen, Online Shops ab 14 Tagen. Der genaue Zeitrahmen hängt von Umfang und Anforderungen ab.',
  },
  {
    question: 'Ist SEO inklusive?',
    answer:
      'Ja. Basis-SEO ist in jedem Projekt enthalten. Das beinhaltet technische Optimierungen, schnelle Ladezeiten, mobile Optimierung und saubere Meta-Daten.',
  },
  {
    question: 'Entwickeln Sie Shopify Shops?',
    answer:
      'Ja. Wir entwickeln moderne Shopify Shops und individuelle E-Commerce Lösungen. Egal ob einfacher Shop oder komplexe Integration – wir haben Expertise.',
  },
  {
    question: 'Gibt es Festpreise?',
    answer:
      'Ja. Wir arbeiten mit transparenten Festpreisen. Sie wissen von Anfang an, was Ihre Website kostet – keine versteckten Zusatzkosten.',
  },
  {
    question: 'Was ist nach dem Launch?',
    answer:
      'Nach dem Launch unterstützen wir Sie bei der Wartung und Optimierung. Optional bieten wir regelmäßige Updates, Monitoring und Performance-Verbesserungen an.',
  },
];
</script>

