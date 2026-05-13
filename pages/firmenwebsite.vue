<template>
  <div>
    <!-- Hero -->
    <HeroSection
      background-image="/main/firmen.webp"
      badge="Professionelle Firmenwebsite Entwicklung"
      title="Firmenwebsite erstellen lassen – Professionelle Unternehmenswebsite"
      description="Firmenwebsite & Unternehmenswebsite professionell erstellen lassen — moderne Webseiten für Unternehmen, Dienstleister und Marken mit Fokus auf Performance, SEO und Conversion."
      primaryCTA="Firmenwebsite erstellen lassen"
      secondaryCTA="Festpreise ansehen"
      :stats="heroStats"
    />

    <!-- Intro — 2-col with company toolkit visual -->
    <section class="relative py-section-padding bg-surface overflow-hidden">
      <div class="absolute top-20 -right-32 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[120px] pointer-events-none"></div>
      <div class="absolute bottom-0 -left-32 w-[400px] h-[400px] rounded-full bg-primary-container/20 blur-[100px] pointer-events-none"></div>

      <div class="relative max-w-container-max mx-auto px-gutter">
        <div class="grid lg:grid-cols-[1.15fr_1fr] gap-stack-lg items-center">

          <div>
            <span class="inline-flex items-center gap-2 rounded-full bg-primary/8 border border-primary/15 px-4 py-2 text-sm font-medium text-primary mb-6">
              <span class="material-symbols-outlined text-[18px]">business</span>
              Professionelle Firmenwebsite
            </span>

            <h2 class="font-headline-xl text-headline-xl text-primary mb-8 leading-[1.1]">
              Professionelle
              <span class="relative inline-block">
                <span class="relative z-10">Firmenwebsite</span>
                <span class="absolute -bottom-1 left-0 right-0 h-3 bg-primary/15 rounded-sm -z-0"></span>
              </span>
              erstellen lassen
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
                <span class="material-symbols-outlined text-primary text-[40px]">business</span>
              </div>

              <div class="absolute top-20 left-0 bg-white rounded-2xl p-5 shadow-xl rotate-[-5deg]">
                <div class="text-[0.65rem] uppercase tracking-widest font-bold text-on-surface-variant mb-3">Festpreis</div>
                <div class="font-display text-4xl font-black leading-none text-primary">ab 750<span class="text-lg text-on-surface-variant">€</span></div>
                <div class="text-xs text-on-surface-variant mt-1">Transparent</div>
              </div>

              <div class="absolute top-44 right-0 bg-white rounded-2xl p-5 shadow-xl rotate-[5deg]">
                <div class="text-[0.65rem] uppercase tracking-widest font-bold text-on-surface-variant mb-2">Lieferzeit</div>
                <div class="font-display text-4xl font-black leading-none text-primary">ab 7<span class="text-lg text-on-surface-variant">T</span></div>
                <div class="text-xs text-on-surface-variant mt-1">Schnell live</div>
              </div>

              <div class="absolute bottom-6 left-6 bg-white rounded-2xl p-5 shadow-xl rotate-[-3deg]">
                <div class="text-[0.65rem] uppercase tracking-widest font-bold text-on-surface-variant mb-3">Markenauftritt</div>
                <div class="flex flex-col gap-1.5 w-32">
                  <div class="h-2 rounded-sm bg-primary w-full"></div>
                  <div class="h-2 rounded-sm bg-primary/30 w-3/4"></div>
                  <div class="h-2 rounded-sm bg-primary/30 w-5/6"></div>
                  <div class="h-2 rounded-sm bg-primary w-2/3"></div>
                </div>
              </div>

              <div class="absolute bottom-16 right-0 bg-white rounded-full px-4 py-2 shadow-xl rotate-[6deg] flex items-center gap-2">
                <span class="relative flex w-2 h-2">
                  <span class="absolute inline-flex w-full h-full rounded-full bg-emerald-500 opacity-75 animate-ping"></span>
                  <span class="relative inline-flex w-2 h-2 rounded-full bg-emerald-500"></span>
                </span>
                <span class="text-xs font-bold text-on-surface uppercase tracking-wider">Online</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- Services -->
    <ServicesSection
      title="Leistungen für Firmenwebsites & Unternehmenswebsites"
      subtitle="Professionelle Lösungen für moderne Unternehmensauftritte."
      variant="centered"
      :services="firmenwebsiteServices"
    />

    <!-- Internal linking — gradient cards -->
    <section class="relative py-section-padding overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-br from-primary via-primary-container to-primary-container"></div>

      <div class="relative max-w-container-max mx-auto px-gutter">
        <div class="text-center max-w-3xl mx-auto mb-16">
          <span class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/10 text-white/80 text-sm font-medium backdrop-blur-md mb-6">
            <span class="material-symbols-outlined text-[18px]">hub</span>
            Weitere Leistungen
          </span>
          <h2 class="font-headline-xl text-white mb-6">Weitere Leistungen im Bereich Webentwicklung</h2>
          <p class="font-body-lg text-white/70">Entdecken Sie unsere spezialisierten Leistungen rund um Webentwicklung und digitale Lösungen.</p>
        </div>

        <div class="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
          <NuxtLink
            v-for="card in internalLinks"
            :key="card.to"
            :to="card.to"
            class="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-7 transition-all duration-500 hover:-translate-y-2 hover:bg-white/10 ambient-shadow"
          >
            <div class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-white/10 to-transparent"></div>
            <div class="relative w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center mb-5">
              <span class="material-symbols-outlined text-white text-[28px]">{{ card.icon }}</span>
            </div>
            <div class="relative">
              <h3 class="font-headline-md text-white mb-3">{{ card.title }}</h3>
              <p class="font-body-md text-white/70 mb-5 leading-relaxed">{{ card.description }}</p>
              <div class="flex items-center gap-2 text-white font-medium">
                Mehr erfahren
                <span class="material-symbols-outlined transition-transform duration-300 group-hover:translate-x-1">arrow_forward</span>
              </div>
            </div>
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- SEO content — Firmenhomepage + Günstige Website -->
    <section class="relative py-section-padding bg-surface-container-low overflow-hidden">
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-primary/[0.04] blur-[120px] pointer-events-none"></div>

      <div class="relative max-w-container-max mx-auto px-gutter">
        <div class="text-center max-w-2xl mx-auto mb-stack-lg">
          <span class="inline-flex items-center gap-2 rounded-full bg-primary/8 border border-primary/15 px-4 py-2 text-sm font-medium text-primary mb-5">
            <span class="material-symbols-outlined text-[18px]">verified</span>
            Firmenwebsite aus einer Hand
          </span>
          <h2 class="font-headline-lg text-primary leading-tight">Moderne Firmenwebsites — vom Konzept bis zum Launch</h2>
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
                <span
                  v-for="tag in block.tags"
                  :key="tag"
                  class="px-3 py-1.5 rounded-full bg-primary/8 text-primary text-xs font-semibold"
                >{{ tag }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Features -->
    <FeaturesSection
      title="Was eine professionelle Firmenwebsite enthalten sollte."
      :features="features"
      image-url="/web-development/features.webp"
      image-alt="Professionelle Firmenwebsite – moderne Features für Unternehmen"
    />

    <!-- Benefits -->
    <BenefitsSection title="Warum EvolaTec als Webagentur?" :benefits="benefits" />

    <!-- FAQ -->
    <FAQSection title="Häufig gestellte Fragen" :faqs="faqs" />

    <!-- CTA -->
    <CTASection
      title="Firmenwebsite professionell erstellen lassen"
      description="EvolaTec entwickelt moderne Unternehmenswebsites, Firmenhomepages und digitale Plattformen für Unternehmen und Marken."
      primary-cta="Projekt starten"
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
      content:
        'Firmenwebsite & Unternehmenswebsite professionell erstellen lassen. Moderne Webseiten für Unternehmen, Dienstleister und Marken — SEO-optimiert, responsive und mit transparenten Festpreisen.',
    },
    {
      name: 'keywords',
      content:
        'firmenwebsite erstellen lassen, unternehmenswebsite erstellen lassen, firmenhomepage erstellen, professionelle firmenwebsite, website erstellen lassen festpreis, website erstellen lassen günstig, webagentur firmenwebsite',
    },
    { property: 'og:title', content: 'Firmenwebsite erstellen lassen | EvolaTec Webagentur' },
    { property: 'og:description', content: 'Professionelle Firmenwebsites und Unternehmenswebsites von EvolaTec — moderne Webseiten mit transparenten Festpreisen.' },
    { property: 'og:type', content: 'website' },
  ],
  link: [{ rel: 'canonical', href: 'https://evolatec.de/firmenwebsite' }],
});

const heroStats = [
  { value: 'Modern', label: 'Unternehmenswebsites', icon: 'business' },
  { value: 'Responsive', label: 'Mobile First', icon: 'devices' },
  { value: 'SEO', label: 'Optimiert', icon: 'trending_up' },
  { value: 'Festpreis', label: 'Transparente Kosten', icon: 'price_check' },
];

const introPoints = [
  {
    icon: 'business',
    text: 'EvolaTec entwickelt moderne Unternehmenswebsites für Firmen, Dienstleister, lokale Unternehmen und digitale Marken — mit Fokus auf professionellen Markenauftritt und messbare Ergebnisse.',
  },
  {
    icon: 'verified',
    text: 'Eine professionelle Firmenwebsite ist heute entscheidend, um Vertrauen aufzubauen, neue Kunden zu gewinnen und Ihr Unternehmen online professionell zu präsentieren.',
  },
  {
    icon: 'auto_awesome',
    text: 'Unsere Webagentur entwickelt moderne Websites mit professionellem Design, schneller Ladezeit, responsive Darstellung und SEO-optimierter Struktur — alles aus einer Hand.',
  },
];

const introStats = [
  { value: '100+', label: 'Firmenwebsites' },
  { value: 'ab 1.500€', label: 'Festpreis' },
  { value: 'ab 7T', label: 'Lieferzeit' },
];

const firmenwebsiteServices = [
  {
    title: 'Firmenwebsite erstellen lassen',
    description: 'Moderne Firmenwebsites für Unternehmen, Dienstleister und lokale Marken.',
    icon: 'business',
    iconBg: 'bg-blue-100',
    iconColor: 'text-blue-600',
    borderColor: 'border-blue-500',
  },
  {
    title: 'Unternehmenswebsite entwickeln',
    description: 'Professionelle Unternehmenswebseiten mit modernem Webdesign und klarer Struktur.',
    icon: 'corporate_fare',
    iconBg: 'bg-emerald-100',
    iconColor: 'text-emerald-600',
    borderColor: 'border-emerald-500',
  },
  {
    title: 'Responsive Firmenhomepage',
    description: 'Mobile optimierte Websites für Smartphones, Tablets und Desktop-Geräte.',
    icon: 'devices',
    iconBg: 'bg-purple-100',
    iconColor: 'text-purple-600',
    borderColor: 'border-purple-500',
  },
  {
    title: 'SEO optimierte Webseiten',
    description: 'Technisch optimierte Unternehmenswebsites für bessere Sichtbarkeit bei Google.',
    icon: 'trending_up',
    iconBg: 'bg-orange-100',
    iconColor: 'text-orange-600',
    borderColor: 'border-orange-500',
  },
  {
    title: 'Website erstellen lassen günstig',
    description: 'Professionelle Webseiten zu fairen Preisen mit transparenter Kostenstruktur.',
    icon: 'savings',
    iconBg: 'bg-rose-100',
    iconColor: 'text-rose-600',
    borderColor: 'border-rose-500',
  },
  {
    title: 'Website erstellen lassen Festpreis',
    description: 'Transparente Festpreise ohne versteckte Kosten für Unternehmen und Selbstständige.',
    icon: 'price_check',
    iconBg: 'bg-cyan-100',
    iconColor: 'text-cyan-600',
    borderColor: 'border-cyan-500',
    href: '/website-development-cost',
  },
];

const internalLinks = [
  {
    to: '/web-development',
    icon: 'language',
    title: 'Webentwicklung',
    description: 'Professionelle Webentwicklung für moderne Websites und digitale Plattformen.',
  },
  {
    to: '/landing-development',
    icon: 'flag',
    title: 'Landingpage Entwicklung',
    description: 'Konversionsstarke Landingpages für Werbung, Kampagnen und Leadgenerierung.',
  },
  {
    to: '/e-commerce-development',
    icon: 'shopping_cart',
    title: 'E-Commerce Entwicklung',
    description: 'Moderne Onlineshops und professionelle E-Commerce Plattformen.',
  },
  {
    to: '/website-development-cost',
    icon: 'payments',
    title: 'Website Preise & Kosten',
    description: 'Transparente Preise für professionelle Firmenwebsites und Webentwicklung.',
  },
];

const expertiseBlocks = [
  {
    icon: 'home_work',
    title: 'Firmenhomepage professionell erstellen lassen',
    paragraphs: [
      'Unternehmen, die ihre Firmenhomepage professionell erstellen lassen, profitieren von einer besseren Außenwirkung, höherem Vertrauen und mehr digitalen Anfragen.',
      'Eine moderne Firmenwebsite hilft dabei, Dienstleistungen professionell zu präsentieren, neue Kunden zu gewinnen und die eigene Marke zu stärken.',
      'EvolaTec entwickelt moderne Unternehmenswebsites, die nicht nur optisch überzeugen, sondern auch technisch performant und SEO-optimiert sind.',
      'Professionelle Websites müssen heute schnell, responsive und benutzerfreundlich sein — genau darauf spezialisiert sich unsere Webagentur.',
    ],
    tags: ['Firmenhomepage', 'Markenauftritt', 'Performance', 'SEO Ready'],
  },
  {
    icon: 'savings',
    title: 'Günstige Website erstellen lassen',
    paragraphs: [
      'Viele Unternehmen suchen nach Möglichkeiten, eine professionelle Website günstig erstellen zu lassen, ohne auf Qualität verzichten zu müssen.',
      'EvolaTec bietet moderne Webseiten zu fairen Preisen mit transparenter Kostenstruktur und klaren Festpreisen — keine versteckten Kosten, keine bösen Überraschungen.',
      'Egal ob kleine Firmenwebsite, professionelle Unternehmenswebseite oder moderne Landingpage — wir entwickeln individuelle Lösungen passend zu Ihrem Budget.',
      'Unsere Websites kombinieren modernes Webdesign, schnelle Ladezeiten, SEO Optimierung und professionelle Benutzerfreundlichkeit — günstig, aber nicht billig.',
    ],
    tags: ['Festpreis', 'Günstig', 'Transparent', 'Faire Kosten'],
  },
];

const features = [
  {
    icon: 'design_services',
    title: 'Professionelles Webdesign',
    description: 'Modernes Markendesign, klare Strukturen und professionelle Optik für einen seriösen Unternehmensauftritt.',
  },
  {
    icon: 'devices',
    title: 'Responsive Design',
    description: 'Perfekte Darstellung auf Smartphones, Tablets und Desktop — Mobile First entwickelt.',
  },
  {
    icon: 'speed',
    title: 'Schnelle Ladezeiten',
    description: 'Optimierte Performance unter 2 Sekunden — gut für Nutzer und für das Google Ranking.',
  },
  {
    icon: 'search_insights',
    title: 'SEO-Optimierung',
    description: 'Technische SEO-Grundlagen, saubere Struktur und Meta-Daten für mehr Sichtbarkeit bei Google.',
  },
  {
    icon: 'price_check',
    title: 'Transparente Festpreise',
    description: 'Faire Festpreise ohne versteckte Kosten — von Anfang an klar kalkuliert.',
  },
];

const benefits = [
  {
    title: 'Professionelles Webdesign',
    description: 'Moderne Unternehmenswebsites mit hochwertigem Markenauftritt.',
    icon: 'design_services',
    bg: 'bg-gradient-to-br from-blue-600 to-indigo-800',
    image: '/main/design.webp',
  },
  {
    title: 'Responsive Entwicklung',
    description: 'Optimierte Darstellung auf Smartphones, Tablets und Desktop-Geräten.',
    icon: 'devices',
    bg: 'bg-gradient-to-br from-emerald-600 to-teal-800',
    image: '/web-development/responsive.webp',
  },
  {
    title: 'SEO Optimierung',
    description: 'Technische SEO Grundlagen und schnelle Ladezeiten für bessere Sichtbarkeit.',
    icon: 'trending_up',
    bg: 'bg-gradient-to-br from-purple-600 to-indigo-800',
    image: '/main/seo.webp',
  },
  {
    title: 'Transparente Festpreise',
    description: 'Faire Preise ohne versteckte Kosten für Unternehmen und Selbstständige.',
    icon: 'price_check',
    bg: 'bg-gradient-to-br from-orange-500 to-rose-600',
    image: '/main/price.webp',
  },
];

const faqs = [
  {
    question: 'Was kostet eine professionelle Firmenwebsite?',
    answer:
      'Die Kosten hängen vom Umfang der Website ab. Moderne Firmenwebsites starten bei EvolaTec ab 1.500€ als Festpreis. Komplexere Unternehmenswebsites mit individuellen Funktionen oder mehrsprachigen Inhalten entsprechend höher — wir beraten Sie transparent vor Projektstart.',
  },
  {
    question: 'Gibt es Festpreise für Firmenwebsites?',
    answer:
      'Ja, EvolaTec bietet transparente Festpreise für professionelle Webseiten und Firmenwebsites. Sie wissen von Anfang an, was Ihre Website kostet — keine versteckten Zusatzkosten während der Entwicklung.',
  },
  {
    question: 'Sind die Websites SEO optimiert?',
    answer:
      'Ja, alle Websites werden technisch SEO optimiert entwickelt — mit sauberer URL-Struktur, optimierten Meta-Daten, schnellen Ladezeiten und semantischem HTML für die beste Sichtbarkeit bei Google.',
  },
  {
    question: 'Sind die Webseiten responsive?',
    answer:
      'Ja, alle Websites werden Mobile First entwickelt und funktionieren optimal auf Smartphones, Tablets und Desktop-Geräten — perfekt für jeden Nutzer und jedes Endgerät.',
  },
  {
    question: 'Wie lange dauert die Entwicklung einer Firmenwebsite?',
    answer:
      'Eine professionelle Firmenwebsite ist bei EvolaTec bereits ab 7 Arbeitstagen live. Umfangreichere Unternehmenswebsites benötigen je nach Inhalt und Funktionen 2–4 Wochen.',
  },
];
</script>
