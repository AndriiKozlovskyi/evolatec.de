<template>
  <div>
    <!-- Hero Section -->
    <HeroSection
      background-image="/main/hero.webp"
      badge="Webdesign & Webentwicklung Agentur"
      title="Professionelle Website erstellen lassen für Unternehmen"
      description="Moderne Firmenwebsites, Landingpages und Online Shops, die Kunden gewinnen und Ihr Unternehmen wachsen lassen. SEO-optimiert, schnell und konversionsstark."
      primaryCTA="Kostenloses Angebot erhalten"
      secondaryCTA="Preise ansehen"
      :stats="heroStats"
    />

     <!-- Why Us Section -->
    <section
      data-nav-label="Warum wir"
      data-nav-icon="stars"
      class="relative py-section-padding bg-surface overflow-hidden"
    >
      <div class="absolute top-20 -right-32 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[120px] pointer-events-none"></div>
      <div class="absolute bottom-0 -left-32 w-[400px] h-[400px] rounded-full bg-primary-container/20 blur-[100px] pointer-events-none"></div>

      <div class="relative max-w-container-max mx-auto px-gutter">
        <div class="grid lg:grid-cols-[1.15fr_1fr] gap-stack-lg items-center">

          <!-- Text column -->
          <div>
            <span class="inline-flex items-center gap-2 rounded-full bg-primary/8 border border-primary/15 px-4 py-2 text-sm font-medium text-primary mb-6">
              <span class="material-symbols-outlined text-[18px]">stars</span>
              Warum EvolaTec?
            </span>

            <h2 class="font-headline-xl text-headline-xl text-primary mb-6 leading-[1.1]">
              Moderne Webentwicklung für
              <span class="relative inline-block">
                <span class="relative z-10">Unternehmen</span>
                <span class="absolute -bottom-1 left-0 right-0 h-3 bg-primary/15 rounded-sm -z-0"></span>
              </span>
              mit hohen Ansprüchen
            </h2>

            <p class="font-body-lg text-on-surface-variant mb-10 leading-relaxed">
              EvolaTec kombiniert modernes Webdesign, performante Entwicklung und SEO-optimierte Technologien für schnelle, professionelle und skalierbare Websites.
            </p>

            <div class="space-y-5">
              <div v-for="(point, i) in whyUsPoints" :key="i" class="flex gap-4 items-start">
                <div class="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span class="material-symbols-outlined text-primary text-[18px]">{{ point.icon }}</span>
                </div>
                <div class="flex-1">
                  <h3 class="font-display font-bold text-on-surface mb-1 leading-tight">{{ point.title }}</h3>
                  <p class="font-body-md text-on-surface-variant leading-relaxed">{{ point.description }}</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Developer toolkit composition — desktop only -->
          <div class="relative hidden lg:block">
            <div class="relative aspect-square max-w-md mx-auto">
              <div class="absolute inset-6 rounded-[2rem] bg-gradient-to-br from-primary/85 via-primary-container to-primary/60 ambient-shadow"></div>

              <!-- Code icon badge top-right -->
              <div class="absolute top-0 right-8 w-20 h-20 rounded-2xl bg-white shadow-xl flex items-center justify-center rotate-[8deg]">
                <span class="material-symbols-outlined text-primary text-[40px]">code_blocks</span>
              </div>

              <!-- Tech stack card -->
              <div class="absolute top-20 left-0 bg-white rounded-2xl p-5 shadow-xl rotate-[-5deg]">
                <div class="text-[0.65rem] uppercase tracking-widest font-bold text-on-surface-variant mb-3">Tech Stack</div>
                <div class="flex flex-wrap gap-1.5 max-w-[180px]">
                  <span class="px-2 py-1 rounded-md bg-primary/10 text-primary text-[0.65rem] font-bold">Vue</span>
                  <span class="px-2 py-1 rounded-md bg-primary/10 text-primary text-[0.65rem] font-bold">Nuxt</span>
                  <span class="px-2 py-1 rounded-md bg-primary/10 text-primary text-[0.65rem] font-bold">Tailwind</span>
                  <span class="px-2 py-1 rounded-md bg-primary/10 text-primary text-[0.65rem] font-bold">TypeScript</span>
                </div>
              </div>

              <!-- Lighthouse performance card -->
              <div class="absolute top-44 right-0 bg-white rounded-2xl p-5 shadow-xl rotate-[5deg]">
                <div class="text-[0.65rem] uppercase tracking-widest font-bold text-on-surface-variant mb-2">Performance</div>
                <div class="font-display text-4xl font-black leading-none text-primary">99<span class="text-lg text-on-surface-variant">/100</span></div>
                <div class="text-xs text-on-surface-variant mt-1">Lighthouse</div>
              </div>

              <!-- Clean code lines card -->
              <div class="absolute bottom-6 left-6 bg-white rounded-2xl p-5 shadow-xl rotate-[-3deg]">
                <div class="text-[0.65rem] uppercase tracking-widest font-bold text-on-surface-variant mb-3">Clean Code</div>
                <div class="flex flex-col gap-1.5 w-32">
                  <div class="h-2 rounded-sm bg-primary w-full"></div>
                  <div class="h-2 rounded-sm bg-primary/30 w-3/4"></div>
                  <div class="h-2 rounded-sm bg-primary/30 w-5/6"></div>
                  <div class="h-2 rounded-sm bg-primary w-2/3"></div>
                </div>
              </div>

              <!-- Deployed status pill -->
              <div class="absolute bottom-16 right-0 bg-white rounded-full px-4 py-2 shadow-xl rotate-[6deg] flex items-center gap-2">
                <span class="relative flex w-2 h-2">
                  <span class="absolute inline-flex w-full h-full rounded-full bg-emerald-500 opacity-75 animate-ping"></span>
                  <span class="relative inline-flex w-2 h-2 rounded-full bg-emerald-500"></span>
                </span>
                <span class="text-xs font-bold text-on-surface uppercase tracking-wider">Deployed</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- Services Section -->
    <section data-nav-label="Leistungen" data-nav-icon="apps" class="py-8 md:py-section-padding bg-surface">
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

    <!-- Process Section -->
    <ProcessSection
      data-nav-label="Prozess"
      data-nav-icon="route"
      title="So arbeiten wir"
      :steps="processSteps"
    />

    <!-- Pricing Overview -->
    <section data-nav-label="Preise" data-nav-icon="sell" class="py-8 md:py-section-padding bg-surface-container-low">
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
          <a href="/webseite-kosten-kalkulator" class="inline-block">
            <BaseButton variant="primary" size="lg">Alle Preise ansehen</BaseButton>
          </a>
        </div>
      </div>
    </section>

    <!-- Results Section -->
    <section data-nav-label="Ergebnisse" data-nav-icon="trending_up" class="py-8 md:py-section-padding bg-gradient-to-r from-primary/90 via-primary to-primary/90 text-on-primary relative overflow-hidden">
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
    <section data-nav-label="Über uns" data-nav-icon="info" class="py-8 md:py-section-padding bg-white">
      <div class="max-w-container-max mx-auto px-gutter">
        <div class="max-w-3xl mx-auto space-y-4 md:space-y-stack-md">
          <h2 class="font-display text-3xl sm:text-4xl md:text-5xl font-black text-on-surface mb-4 md:mb-6 leading-tight">Professionelle Website erstellen lassen</h2>

          <p class="text-sm sm:text-body-md md:text-body-lg text-on-surface-variant leading-relaxed">
            Eine professionelle Website ist heutzutage entscheidend für den Erfolg eines Unternehmens. Bei EvolaTec entwickeln wir moderne Firmenwebsites, Landingpages und Online Shops, die nicht nur gut aussehen, sondern echte Ergebnisse liefern.
          </p>

          <p class="text-sm sm:text-body-md md:text-body-lg text-on-surface-variant leading-relaxed">
            Unsere Websites sind SEO-optimiert, mobilfreundlich und auf Conversion ausgelegt. Ob kleine Firmenwebsite, Landingpage für Werbung oder komplexer Online Shop — wir entwickeln individuelle Lösungen für Unternehmen in Deutschland.
          </p>

          <div class="pt-6 md:pt-8 flex flex-col sm:flex-wrap sm:flex-row gap-3 sm:gap-4">
            <a href="/firmenwebsite-erstellen-lassen" class="inline-block w-full sm:w-auto">
              <BaseButton variant="primary" size="md" class="w-full sm:w-auto">Firmenwebsite</BaseButton>
            </a>
            <a href="/landingpage-erstellen-lassen" class="inline-block w-full sm:w-auto">
              <BaseButton variant="outline" size="md" class="w-full sm:w-auto">Landingpage</BaseButton>
            </a>
            <a href="/online-shop-erstellen-lassen" class="inline-block w-full sm:w-auto">
              <BaseButton variant="outline" size="md" class="w-full sm:w-auto">Online Shop</BaseButton>
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <FAQSection
      data-nav-label="FAQ"
      data-nav-icon="help"
      title="Häufig gestellte Fragen"
      :faqs="faqs"
    />

    <!-- CTA Section -->
    <CTASection
      data-nav-label="Kontakt"
      data-nav-icon="send"
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
    description: 'Konversionsstarke One-Pager für Werbung und Leadgenerierung.',
    price: 'ab 500€',
    href: '/landingpage-erstellen-lassen',
  },
  {
    id: 2,
    icon: 'language',
    title: 'Firmenwebsite erstellen lassen',
    description: 'Professionelle Unternehmenswebsites für lokale Firmen und Unternehmen.',
    price: 'ab 1.500€',
    href: '/firmenwebsite-erstellen-lassen',
  },
  {
    id: 3,
    icon: 'shopping_bag',
    title: 'Online Shop erstellen lassen',
    description: 'Moderne E-Commerce Lösungen und Shopify Shops.',
    price: 'ab 3.000€',
    href: '/online-shop-erstellen-lassen',
  },
  {
    id: 4,
    icon: 'search_insights',
    title: 'SEO Optimierung',
    description: 'Mehr Sichtbarkeit bei Google und nachhaltiges Wachstum.',
    price: 'ab 300€',
    href: '/seo',
  },
  {
    id: 5,
    icon: 'trending_up',
    title: 'Google Ads Betreuung',
    description: 'Mehr Kundenanfragen durch gezielte Werbekampagnen.',
    price: 'ab 400€/Monat',
    href: '/marketing-google-ads',
  },
];

const whyUsPoints = [
  {
    icon: 'bolt',
    title: 'Schnelle & performante Websites',
    description: 'Unsere Websites werden mit modernen Technologien wie Vue.js, Nuxt und Tailwind CSS entwickelt und erreichen starke Core Web Vitals sowie schnelle Ladezeiten.',
  },
  {
    icon: 'search_insights',
    title: 'SEO optimierte Entwicklung',
    description: 'Technisches SEO, saubere Strukturen, SSR Rendering und mobile Optimierung sorgen für bessere Sichtbarkeit bei Google.',
  },
  {
    icon: 'design_services',
    title: 'Modernes Premium Design',
    description: 'Keine Standard-Templates oder veraltete Themes. Wir entwickeln individuelle Benutzeroberflächen mit professionellem UI/UX Design.',
  },
  {
    icon: 'rocket_launch',
    title: 'Skalierbare Technologien',
    description: 'Unsere Lösungen eignen sich perfekt für Unternehmenswebsites, SaaS Plattformen, Landingpages und moderne digitale Produkte.',
  },
  {
    icon: 'security',
    title: 'Sichere & stabile Systeme',
    description: 'Moderne Architektur bedeutet weniger Abhängigkeit von unsicheren Plugins und eine bessere langfristige Wartbarkeit.',
  },
  {
    icon: 'psychology',
    title: 'Strategischer Ansatz',
    description: 'Wir entwickeln nicht nur schöne Websites, sondern digitale Lösungen mit Fokus auf Conversion, Markenauftritt und Wachstum.',
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
  { service: 'Landingpage', price: 'ab 500€', delivery: 'ab 3 Tagen' },
  { service: 'Firmenwebsite', price: 'ab 1.500€', delivery: 'ab 7 Tagen' },
  { service: 'Online Shop', price: 'ab 3.000€', delivery: 'ab 14 Tagen' },
  { service: 'Premium E-Commerce', price: 'ab 6.000€', delivery: 'ab 30 Tagen' },
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
      'Die Preise beginnen ab 500€ für Landingpages und ab 1.500€ für Firmenwebsites. Da jedes Projekt unterschiedlich ist, erstellen wir Ihnen gerne ein transparentes Angebot.',
  },
  {
    question: 'Wie lange dauert die Erstellung?',
    answer:
      'Landingpages ab 3 Tagen, Firmenwebsites ab 7 Tagen, Online Shops ab 14 Tagen. Der genaue Zeitrahmen hängt von Umfang und Anforderungen ab.',
  },
  {
    question: 'Ist SEO inklusive?',
    answer:
      'Ja, Basis-SEO ist in jedem Projekt enthalten. Dazu gehören technische Optimierungen, schnelle Ladezeiten, mobile Optimierung und saubere Metadaten.',
  },
  {
    question: 'Entwickeln Sie Shopify Shops?',
    answer:
      'Ja, wir entwickeln moderne Shopify Shops und individuelle E-Commerce Lösungen. Egal ob einfacher Shop oder komplexe Integration – wir haben die nötige Expertise.',
  },
  {
    question: 'Gibt es Festpreise?',
    answer:
      'Ja, wir arbeiten mit transparenten Festpreisen. Sie wissen von Anfang an, was Ihre Website kostet, es gibt keine versteckten Zusatzkosten.',
  },
  {
    question: 'Was ist nach dem Launch?',
    answer:
      'Nach dem Launch unterstützen wir Sie bei der Wartung und Optimierung. Auf Wunsch bieten wir Ihnen auch regelmäßige Updates, Monitoring und Performance-Verbesserungen an.',
  },
];
</script>

