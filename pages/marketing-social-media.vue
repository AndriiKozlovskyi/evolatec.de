<template>
  <div>
    <!-- Hero Section -->
    <HeroSection
      background-image="/smm/hero.webp"
      badge="Professionelle Social Media & Meta Ads Agentur"
      title="Social Media Ads Agentur: Facebook & Instagram Werbung die verkauft"
      description="EvolaTec entwickelt leistungsstarke Social Media Kampagnen für Facebook, Instagram und Meta Ads — Strategie, Content und Performance Marketing für messbare Ergebnisse."
      primaryCTA="Social Media anfragen"
      secondaryCTA="Preise ansehen"
      :stats="socialStats"
    />

    <!-- Intro Section -->
    <section class="py-section-padding bg-surface">
      <div class="max-w-container-max mx-auto px-gutter">
        <div class="max-w-3xl">
          <h2 class="font-headline-lg text-headline-lg text-primary mb-stack-md">
            Warum Social Media Marketing heute entscheidend ist
          </h2>
          <p class="font-body-lg text-body-lg text-on-surface-variant mb-6">
            Facebook, Instagram und andere soziale Netzwerke gehören zu den wichtigsten Marketingkanälen für moderne Unternehmen.
          </p>
          <p class="font-body-lg text-body-lg text-on-surface-variant mb-6">
            Professionelle Social Media Werbung ermöglicht es, gezielt neue Kunden zu erreichen, Markenbekanntheit aufzubauen und Verkäufe zu steigern.
          </p>
          <p class="font-body-lg text-body-lg text-on-surface-variant">
            Als Social Media Agentur entwickelt EvolaTec Kampagnen, die Reichweite, Interaktionen, Leads und Umsatz generieren — ergänzt durch <a href="/seo" class="text-primary font-semibold hover:underline">SEO</a> und <a href="/marketing-google-ads" class="text-primary font-semibold hover:underline">Google Ads</a>.
          </p>
        </div>
      </div>
    </section>

    <!-- Platforms Visual Section -->
    <section class="py-section-padding bg-surface-container-low">
      <div class="max-w-container-max mx-auto px-gutter">
        <div class="text-center max-w-2xl mx-auto mb-stack-lg">
          <h2 class="font-headline-lg text-headline-lg text-primary mb-4">
            Social Media Marketing für verschiedene Plattformen
          </h2>
          <p class="font-body-lg text-on-surface-variant">
            Wir entwickeln maßgeschneiderte Kampagnen für jeden Kanal.
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-gutter">
          <div
            v-for="platform in socialPlatforms"
            :key="platform.name"
            class="group relative rounded-3xl overflow-hidden h-72 cursor-pointer"
            :class="platform.bg"
          >
            <!-- Background image overlay -->
            <img
              :src="platform.image"
              alt=""
              class="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:opacity-30 transition-opacity duration-500 scale-105 group-hover:scale-110 transition-transform"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

            <!-- Content -->
            <div class="relative h-full flex flex-col justify-between p-6">
              <div class="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <span class="material-symbols-outlined text-white text-2xl">{{ platform.icon }}</span>
              </div>
              <div>
                <h3 class="font-headline-md text-white mb-1">{{ platform.name }}</h3>
                <p class="text-white/70 text-sm font-body-md">{{ platform.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Services Section -->
    <ServicesSection title="Unsere Social Media Leistungen" variant="centered" :services="socialServices" />

       <BenefitsSection
      title="Modernes UI/UX Design für digitale Produkte"
      :benefits="socialBenefits"
      image-url="/ecommerce/hero.webp"
    />


    <!-- Process Section -->
         <ProcessSection title="Unser Social Media Prozess" :steps="socialProcess" />



    <!-- Results / Image Banner Section -->
    <DarkBannerSection
      image="/ecommerce/hero.webp"
      badge="Messbare Ergebnisse"
      description="Unsere Social Media Kampagnen sind auf Ergebnisse ausgelegt — nicht auf Likes. Klicks, Leads und Umsatz sind exakt messbar."
      cta-text="Social Media Kampagne starten"
      :stats="campaignResults"
    >
      <template #title>
        Kampagnen die
        <span class="bg-gradient-to-r from-blue-400 to-pink-400 bg-clip-text text-transparent">wirklich</span>
        performen
      </template>
    </DarkBannerSection>

    <!-- Why EvolaTec Section -->
    <section class="py-section-padding bg-surface">
      <div class="max-w-container-max mx-auto px-gutter">
        <!-- Image + Text split -->
        <div class="grid md:grid-cols-2 gap-stack-lg items-center mb-stack-lg">
          <div class="relative rounded-3xl overflow-hidden h-80 md:h-96">
            <img
              src="/main/seo.webp"
              alt="Social Media Marketing Agentur EvolaTec"
              class="w-full h-full object-cover"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent"></div>
            <!-- Floating badge -->
            <div class="absolute bottom-6 left-6 bg-white rounded-2xl px-5 py-3 shadow-xl flex items-center gap-3">
              <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center">
                <span class="material-symbols-outlined text-white text-xl">groups</span>
              </div>
              <div>
                <div class="font-bold text-primary text-sm">+2.4M</div>
                <div class="text-on-surface-variant text-xs">Reichweite generiert</div>
              </div>
            </div>
          </div>

          <div>
            <h2 class="font-headline-lg text-headline-lg text-primary mb-stack-md">
              Warum EvolaTec als Social Media Agentur?
            </h2>
            <p class="font-body-lg text-body-lg text-on-surface-variant mb-6">
              Erfolgreiches Social Media Marketing benötigt mehr als nur schöne Beiträge.
            </p>
            <p class="font-body-lg text-body-lg text-on-surface-variant mb-6">
              Entscheidend sind Strategie, Zielgruppenanalyse, Content und datenbasierte Optimierung.
            </p>
            <p class="font-body-lg text-body-lg text-on-surface-variant">
              EvolaTec verbindet Social Media Werbung, <a href="/online-marketing" class="text-primary font-semibold hover:underline">Performance Marketing</a>, Webdesign und <a href="/seo" class="text-primary font-semibold hover:underline">SEO</a> zu leistungsstarken Marketing Systemen.
            </p>
          </div>
        </div>

        <div class="grid md:grid-cols-3 gap-gutter">
          <div
            v-for="usp in whyEvolaTec"
            :key="usp.title"
            class="glass-card ambient-shadow p-8 text-center border-t-4 transition-all duration-300 hover:scale-105"
            :class="usp.borderColor"
          >
            <div class="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-6" :class="usp.iconBg">
              <span class="material-symbols-outlined text-2xl" :class="usp.iconColor">{{ usp.icon }}</span>
            </div>
            <h3 class="font-headline-md text-primary mb-3">{{ usp.title }}</h3>
            <p class="font-body-md text-on-surface-variant">{{ usp.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Pricing Table Section -->
    <section class="py-section-padding bg-surface-container-low">
      <div class="max-w-container-max mx-auto px-gutter">
        <h2 class="font-headline-lg text-headline-lg text-primary text-center mb-4">
          Preise für Social Media Marketing
        </h2>
        <p class="text-center font-body-lg text-on-surface-variant mb-stack-lg">
          Transparente Preise für Social Media Betreuung, Meta Ads und Performance Kampagnen.
        </p>

        <div class="max-w-2xl mx-auto overflow-x-auto">
          <table class="w-full">
            <thead>
              <tr class="border-b-2 border-primary">
                <th class="text-left py-4 px-6 font-headline-md text-primary">Leistung</th>
                <th class="text-right py-4 px-6 font-headline-md text-primary">Preis</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="item in pricingItems"
                :key="item.name"
                class="border-b border-outline-variant/20 hover:bg-surface transition-colors"
              >
                <td class="py-4 px-6 font-body-md text-on-surface">{{ item.name }}</td>
                <td class="py-4 px-6 font-body-md text-primary font-bold text-right">{{ item.price }}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="text-center mt-10">
          <a href="/webseite-kosten-kalkulator">
            <BaseButton variant="outline" size="md">Alle Preise ansehen</BaseButton>
          </a>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <FAQSection title="Häufig gestellte Fragen zu Social Media Marketing" :faqs="socialFaqs" />

    <!-- Final CTA -->
    <section class="py-section-padding bg-primary text-on-primary">
      <div class="max-w-container-max mx-auto px-gutter text-center space-y-stack-md">
        <h2 class="font-display text-headline-lg">Mehr Reichweite & Kunden mit Social Media Marketing</h2>
        <p class="font-body-lg max-w-2xl mx-auto opacity-80">
          EvolaTec entwickelt Social Media Kampagnen, die sichtbar machen, Kunden gewinnen und Unternehmen wachsen lassen.
        </p>
        <div class="flex flex-wrap justify-center gap-6 pt-6">
          <a href="/kontakt">
            <BaseButton variant="secondary" size="lg">Social Media starten</BaseButton>
          </a>
          <a href="/kontakt">
            <BaseButton variant="outline" size="lg">Kostenlos beraten lassen</BaseButton>
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Social Media Marketing Agentur | Instagram & Facebook Ads | EvolaTec',
  meta: [
    { name: 'description', content: 'Professionelles Social Media Marketing von EvolaTec. Instagram, Facebook und LinkedIn Ads für mehr Reichweite, Follower und Conversions.' },
    { name: 'keywords', content: 'social media marketing agentur, instagram marketing, facebook ads agentur, social media agentur, social media werbung' },
    { property: 'og:title', content: 'Social Media Marketing Agentur | EvolaTec' },
    { property: 'og:description', content: 'Instagram, Facebook und LinkedIn Ads für mehr Reichweite und Conversions.' },
    { property: 'og:type', content: 'website' },
  ],
  link: [{ rel: 'canonical', href: 'https://evolatec.de/marketing-social-media' }],
});

const socialStats = [
  { value: 'Facebook', label: 'Instagram & Meta', icon: 'groups' },
  { value: 'Mehr Leads', label: 'Generierung', icon: 'person_add' },
  { value: 'Performance', label: 'fokussiert', icon: 'analytics' },
  { value: 'Reichweite', label: 'Aufbau', icon: 'public' },
];

const socialPlatforms = [
  {
    name: 'Facebook Marketing',
    description: 'Werbung für lokale Unternehmen, Dienstleistungen und E-Commerce.',
    icon: 'thumb_up',
    bg: 'bg-gradient-to-br from-blue-600 to-blue-800',
    image: '/smm/facebook.webp',
  },
  {
    name: 'Instagram Marketing',
    description: 'Visuelle Kampagnen für Markenaufbau und Reichweite.',
    icon: 'photo_camera',
    bg: 'bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400',
    image: '/smm/instagram.webp',
  },
  {
    name: 'Meta Ads',
    description: 'Performance Kampagnen im gesamten Meta Netzwerk.',
    icon: 'hub',
    bg: 'bg-gradient-to-br from-indigo-600 to-blue-700',
    image: '/smm/meta.webp',
  },
  {
    name: 'Retargeting',
    description: 'Rückgewinnung von Besuchern und Interessenten.',
    icon: 'refresh',
    bg: 'bg-gradient-to-br from-slate-700 to-slate-900',
    image: '/smm/retargeting.webp',
  },
];

const socialServices = [
  {
    title: 'Facebook Ads',
    description: 'Zielgerichtete Facebook Werbung für Leads, Verkäufe und Markenaufbau.',
    icon: 'thumb_up',
    iconBg: 'bg-blue-100',
    iconColor: 'text-blue-600',
    borderColor: 'border-blue-500',
  },
  {
    title: 'Instagram Ads',
    description: 'Moderne Instagram Kampagnen für Reichweite und Performance.',
    icon: 'photo_camera',
    iconBg: 'bg-pink-100',
    iconColor: 'text-pink-600',
    borderColor: 'border-pink-500',
  },
  {
    title: 'Meta Ads Kampagnen',
    description: 'Performance Kampagnen im gesamten Meta Netzwerk.',
    icon: 'hub',
    iconBg: 'bg-indigo-100',
    iconColor: 'text-indigo-600',
    borderColor: 'border-indigo-500',
  },
  {
    title: 'Social Media Content',
    description: 'Erstellung von Werbeinhalten, Creatives und Kampagnenmaterial.',
    icon: 'edit_square',
    iconBg: 'bg-orange-100',
    iconColor: 'text-orange-600',
    borderColor: 'border-orange-500',
  },
  {
    title: 'Social Media Management',
    description: 'Betreuung, Planung und Optimierung Ihrer Social Media Kanäle.',
    icon: 'manage_accounts',
    iconBg: 'bg-emerald-100',
    iconColor: 'text-emerald-600',
    borderColor: 'border-emerald-500',
  },
  {
    title: 'Performance Marketing',
    description: 'Skalierbare Kampagnen mit Fokus auf Umsatz und Conversion.',
    icon: 'analytics',
    iconBg: 'bg-purple-100',
    iconColor: 'text-purple-600',
    borderColor: 'border-purple-500',
  },
];

const socialBenefits = [
  {
    title: 'Präzises Targeting',
    description: 'Anzeigen erreichen genau die richtige Zielgruppe.',
    icon: 'my_location',
    iconBg: 'bg-blue-100',
    iconColor: 'text-blue-600',
  },
  {
    title: 'Markenbekanntheit',
    description: 'Aufbau einer starken Marke in sozialen Netzwerken.',
    icon: 'campaign',
    iconBg: 'bg-pink-100',
    iconColor: 'text-pink-600',
  },
  {
    title: 'Mehr Leads & Verkäufe',
    description: 'Conversion optimierte Kampagnen steigern Umsatz und Anfragen.',
    icon: 'trending_up',
    iconBg: 'bg-emerald-100',
    iconColor: 'text-emerald-600',
  },
  {
    title: 'Skalierbares Wachstum',
    description: 'Erfolgreiche Kampagnen können kontinuierlich erweitert werden.',
    icon: 'stacked_line_chart',
    iconBg: 'bg-purple-100',
    iconColor: 'text-purple-600',
  },
];

const socialProcess = [
  {
    title: 'Analyse & Strategie',
    description: 'Analyse Ihrer Zielgruppe, Branche und Wettbewerber.',
    icon: 'analytics',
    iconBg: 'bg-blue-100',
    iconColor: 'text-blue-600',
    chipBg: 'bg-blue-50',
    borderColor: 'border-blue-400',
  },
  {
    title: 'Content & Creatives',
    description: 'Entwicklung von Werbeinhalten, Bildern und Kampagnenmaterial.',
    icon: 'brush',
    iconBg: 'bg-pink-100',
    iconColor: 'text-pink-600',
    chipBg: 'bg-pink-50',
    borderColor: 'border-pink-400',
  },
  {
    title: 'Kampagnen Setup',
    description: 'Einrichtung professioneller Facebook & Instagram Kampagnen.',
    icon: 'campaign',
    iconBg: 'bg-emerald-100',
    iconColor: 'text-emerald-600',
    chipBg: 'bg-emerald-50',
    borderColor: 'border-emerald-400',
  },
  {
    title: 'Optimierung & Skalierung',
    description: 'Laufende Analyse und Verbesserung der Performance.',
    icon: 'tune',
    iconBg: 'bg-purple-100',
    iconColor: 'text-purple-600',
    chipBg: 'bg-purple-50',
    borderColor: 'border-purple-400',
  },
];

const campaignResults = [
  { value: '+340%', label: 'Mehr Reichweite' },
  { value: '3.2×', label: 'ROAS Ø' },
  { value: '-42%', label: 'Cost per Lead' },
];

const whyEvolaTec = [
  {
    title: 'Fokus auf Performance',
    description: 'Kampagnen mit messbaren Ergebnissen.',
    icon: 'ads_click',
    iconBg: 'bg-blue-100',
    iconColor: 'text-blue-600',
    borderColor: 'border-blue-500',
  },
  {
    title: 'Kreative Inhalte',
    description: 'Werbeanzeigen die Aufmerksamkeit erzeugen.',
    icon: 'brush',
    iconBg: 'bg-pink-100',
    iconColor: 'text-pink-600',
    borderColor: 'border-pink-500',
  },
  {
    title: 'Skalierbare Systeme',
    description: 'Strategien für langfristiges Wachstum.',
    icon: 'stacked_line_chart',
    iconBg: 'bg-purple-100',
    iconColor: 'text-purple-600',
    borderColor: 'border-purple-500',
  },
];

const pricingItems = [
  { name: 'Social Media Beratung', price: 'ab 90€/Stunde' },
  { name: 'Facebook Ads Setup', price: 'ab 350€' },
  { name: 'Instagram Ads Setup', price: 'ab 350€' },
  { name: 'Social Media Betreuung', price: 'ab 500€/Monat' },
  { name: 'Performance Marketing', price: 'ab 1.200€/Monat' },
  { name: 'Content Produktion', price: 'ab 300€' },
];

const socialFaqs = [
  {
    question: 'Was macht eine Social Media Agentur?',
    answer: 'Eine Social Media Agentur entwickelt, verwaltet und optimiert Kampagnen auf Plattformen wie Facebook und Instagram.',
  },
  {
    question: 'Was kosten Facebook oder Instagram Ads?',
    answer: 'Die Betreuung beginnt ab 500€ monatlich. Das Werbebudget wird separat festgelegt.',
  },
  {
    question: 'Wie schnell funktionieren Social Media Ads?',
    answer: 'Erste Ergebnisse können bereits innerhalb weniger Tage sichtbar werden.',
  },
  {
    question: 'Für welche Unternehmen eignet sich Social Media Marketing?',
    answer: 'Für lokale Unternehmen, Dienstleister, E-Commerce, Startups und Markenaufbau.',
  },
];
</script>
