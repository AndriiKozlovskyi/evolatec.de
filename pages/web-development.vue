<template>
  <div>
    <!-- Hero -->
    <HeroSection
      background-image="/web-development/hero.webp"
      badge="Professionelle Webentwicklung Agentur"
      title="Professionelle Website erstellen lassen | EvolaTec Agentur"
      description="Homepage erstellen lassen – Ihre professionelle Webagentur für moderne Unternehmenswebsites, Landingpages, Firmenwebsites und leistungsstarke digitale Lösungen."
      primaryCTA="Website erstellen lassen"
      secondaryCTA="Preise ansehen"
      :stats="heroStats"
    />

    <!-- Intro — prettified 2-col with developer toolkit visual -->
    <section data-nav-label="Intro" data-nav-icon="info" class="relative py-section-padding bg-surface overflow-hidden">
      <div class="absolute top-20 -right-32 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[120px] pointer-events-none"></div>
      <div class="absolute bottom-0 -left-32 w-[400px] h-[400px] rounded-full bg-primary-container/20 blur-[100px] pointer-events-none"></div>

      <div class="relative max-w-container-max mx-auto px-gutter">
        <div class="grid lg:grid-cols-[1.15fr_1fr] gap-stack-lg items-center">

          <!-- Text column -->
          <div>
            <span class="inline-flex items-center gap-2 rounded-full bg-primary/8 border border-primary/15 px-4 py-2 text-sm font-medium text-primary mb-6">
              <span class="material-symbols-outlined text-[18px]">code</span>
              Professionelle Webentwicklung
            </span>

            <h2 class="font-headline-xl text-headline-xl text-primary mb-8 leading-[1.1]">
              Professionelle
              <span class="relative inline-block">
                <span class="relative z-10">Webseiten</span>
                <span class="absolute -bottom-1 left-0 right-0 h-3 bg-primary/15 rounded-sm -z-0"></span>
              </span>
              entwickeln lassen
            </h2>

            <div class="space-y-5 mb-10">
              <div v-for="(point, i) in introPoints" :key="i" class="flex gap-4 items-start">
                <div class="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span class="material-symbols-outlined text-primary text-[18px]">{{ point.icon }}</span>
                </div>
                <p class="font-body-lg text-on-surface-variant flex-1 pt-1">{{ point.text }}</p>
              </div>
            </div>

            <div class="grid grid-cols-3 gap-2 sm:gap-6 pt-8 border-t border-outline-variant/30">
              <div v-for="stat in introStats" :key="stat.label">
                <div class="font-display text-xl sm:text-3xl text-primary font-black leading-none">{{ stat.value }}</div>
                <div class="text-[0.7rem] uppercase tracking-widest text-on-surface-variant font-bold mt-2">{{ stat.label }}</div>
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

    <!-- Services -->
    <ServicesSection
      title="Unsere Leistungen in der Webentwicklung"
      subtitle="Professionelle Webentwicklung für Unternehmen, Marken und digitale Produkte."
      variant="centered"
      :services="developmentServices"
    />

    <!-- Features -->
    <FeaturesSection
      title="Was eine professionelle Website enthalten sollte."
      :features="features"
      image-url="/web-development/features.webp"
    />

    <ExpertiseCardsSection
      eyebrow="Webentwicklung aus einer Hand"
      eyebrow-icon="verified"
      title="Moderne Webseiten — vom Konzept bis zum Launch"
      :blocks="expertiseBlocks"
    />

    <!-- Why us -->
    <BenefitsSection title="Warum EvolaTec als Webagentur?" :benefits="benefits" />

    <!-- FAQ -->
    <FAQSection title="Häufig gestellte Fragen" :faqs="faqs" />

    <!-- CTA -->
    <RelatedServicesSection
      eyebrow="Ergänzende Leistungen"
      title="Ihre neue Website braucht starkes SEO und Marketing"
      :services="relatedServices"
    />

    <CTASection
      title="Professionelle Website erstellen lassen"
      description="EvolaTec entwickelt moderne Webseiten, Firmenhomepages, Landingpages und digitale Plattformen für Unternehmen und Marken."
      primary-cta="Projekt starten"
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
    question: 'Was kostet es, eine Website erstellen zu lassen?',
    answer:
      'Die Kosten hängen vom Umfang ab. Landingpages starten ab 500€, professionelle Firmenwebsites ab 1.500€ und Onlineshops ab 3.000€. Wir arbeiten mit transparenten Festpreisen und erstellen vor Projektstart ein detailliertes Angebot.',
  },
  {
    question: 'Wie lange dauert die Webentwicklung?',
    answer:
      'Eine Landingpage entwickeln wir in 3–7 Tagen, eine Firmenwebsite ab 7 Arbeitstagen und einen Onlineshop ab 14 Arbeitstagen. Die Dauer hängt vom Funktionsumfang und davon ab, wie schnell Texte, Bilder und Feedback bereitgestellt werden.',
  },
  {
    question: 'Warum ist professionelle Webentwicklung wichtig?',
    answer:
      'Eine professionell entwickelte Website lädt schnell, ist SEO-optimiert, sicher und auf allen Geräten nutzbar. Sie ist oft der erste Kontaktpunkt mit Kunden und entscheidet über Vertrauen und Conversion. Selbstgebaute Lösungen oder veraltete Templates kosten am Ende meist mehr durch verlorene Anfragen und schlechte Rankings.',
  },
  {
    question: 'Welche Technologien nutzen Sie für die Webentwicklung?',
    answer:
      'Wir entwickeln mit modernen Technologien wie Nuxt, Vue.js, Nest.js und Tailwind CSS für individuelle Websites und Webanwendungen. Für Inhalte, die Sie selbst pflegen möchten, nutzen wir Storyblok als Headless CMS. Für E-Commerce setzen wir auf Shopify oder maßgeschneiderte Lösungen.',
  },
  {
    question: 'Sind die entwickelten Websites SEO-optimiert?',
    answer:
      'Ja, jede Website wird von Beginn an grundlegend SEO-optimiert entwickelt: sauberer Code, schnelle Ladezeiten, mobile Optimierung und korrekte Meta-Daten. Für weitergehende SEO-Strategien wie Keyword-Recherche und Content-Optimierung bieten wir zusätzliche SEO-Pakete an.',
  },
  {
    question: 'Entwickelt EvolaTec auch Onlineshops und Webanwendungen?',
    answer:
      'Ja, neben klassischen Websites entwickeln wir professionelle Onlineshops und individuelle Webanwendungen. Wir setzen sowohl Standard-Lösungen (Shopify, Storyblok) als auch maßgeschneiderte Entwicklungen um.',
  },
  {
    question: 'Sind die Websites responsive und mobil optimiert?',
    answer:
      'Ja, alle Websites werden Mobile-First entwickelt und für Smartphones, Tablets und Desktop optimiert. Da Google Mobile-First-Indexing nutzt, ist responsive Design heute Pflicht – nicht nur für Nutzer, sondern auch für gute Google-Rankings.',
  },
];

const schemaMarkup = buildSchema(
  organizationSchema(),
  websiteSchema(),
  pageSchema({
    url: 'https://evolatec.de/web-development',
    name: 'Web Development Agentur – Professionelle Webentwicklung | EvolaTec',
    description: 'Professionelle Webentwicklung für moderne Unternehmenswebsites, Landingpages, Onlineshops und digitale Plattformen.',
  }),
  serviceSchema({
    id: 'https://evolatec.de/web-development/#service',
    name: 'Webentwicklung',
    description: 'Professionelle Webentwicklung für moderne Unternehmenswebsites, Landingpages, Onlineshops und digitale Plattformen.',
    url: 'https://evolatec.de/web-development',
    serviceType: 'Webentwicklung',
    minPrice: 1500,
  }),
  breadcrumbSchema([
    { name: 'Home', url: 'https://evolatec.de' },
    { name: 'Web Development', url: 'https://evolatec.de/web-development' },
  ]),
  faqSchema(faqs),
);

useHead({
  title: 'Professionelle Website erstellen lassen | EvolaTec Agentur',
  meta: [
    {
      name: 'description',
      content:
        'Homepage erstellen lassen – Ihre professionelle Webagentur für moderne Unternehmenswebsites, Landingpages, Firmenwebsites und digitale Plattformen.',
    },
    {
      name: 'keywords',
      content:
        'website erstellen lassen, homepage erstellen lassen, webentwicklung agentur, firmenwebsite, unternehmenswebsite, website programmieren lassen',
    },
    { property: 'og:title', content: 'Professionelle Website erstellen lassen | EvolaTec' },
    { property: 'og:description', content: 'Moderne Webseiten, Firmenhomepages und digitale Plattformen für Unternehmen.' },
    { property: 'og:type', content: 'website' },
  ],
  link: [{ rel: 'canonical', href: 'https://evolatec.de/website-development' }, ...hreflangLinks.value],
  script: [{ type: 'application/ld+json', innerHTML: JSON.stringify(schemaMarkup) }],
});

const heroStats = [
  { value: 'Modern', label: 'Webentwicklung', icon: 'code' },
  { value: 'Responsive', label: 'Mobile First', icon: 'devices' },
  { value: 'SEO', label: 'Optimiert', icon: 'trending_up' },
  { value: 'Fast', label: 'Performance', icon: 'speed' },
];

const introPoints = [
  {
    icon: 'rocket_launch',
    text: 'EvolaTec entwickelt moderne Webseiten, Unternehmenswebsites, Landingpages und individuelle digitale Plattformen für Unternehmen, Startups und lokale Dienstleister.',
  },
  {
    icon: 'verified',
    text: 'Eine moderne Website ist heute weit mehr als eine digitale Visitenkarte — sie sorgt für Vertrauen, bessere Sichtbarkeit bei Google und höhere Conversion-Raten.',
  },
  {
    icon: 'auto_awesome',
    text: 'Unsere Webagentur kombiniert modernes Webdesign, responsive Entwicklung, SEO-Optimierung und hohe Performance — damit Ihre Website messbare Ergebnisse liefert.',
  },
];

const introStats = [
  { value: '30 Tage', label: 'Support' },
  { value: '99', label: 'Lighthouse Avg' },
  { value: 'ab 7T', label: 'Lieferzeit' },
];

const developmentServices = [
  {
    title: 'Homepage erstellen lassen',
    description: 'Professionelle Firmenhomepages und moderne Webseiten für Unternehmen jeder Größe.',
    icon: 'home',
    iconBg: 'bg-blue-100',
    iconColor: 'text-blue-600',
    borderColor: 'border-blue-500',
  },
  {
    title: 'Landingpage Entwicklung',
    description: 'Konversionsstarke Landingpages für Werbekampagnen, Leadgenerierung und digitale Produkte.',
    icon: 'flag',
    iconBg: 'bg-emerald-100',
    iconColor: 'text-emerald-600',
    borderColor: 'border-emerald-500',
    href: '/landingpage-erstellen-lassen',
  },
  {
    title: 'E-Commerce Entwicklung',
    description: 'Professionelle Onlineshops und moderne E-Commerce Plattformen für Unternehmen.',
    icon: 'shopping_cart',
    iconBg: 'bg-purple-100',
    iconColor: 'text-purple-600',
    borderColor: 'border-purple-500',
    href: '/online-shop-erstellen-lassen',
  },
  {
    title: 'Responsive Webentwicklung',
    description: 'Mobile optimierte Websites für Smartphones, Tablets und Desktop-Geräte.',
    icon: 'devices',
    iconBg: 'bg-orange-100',
    iconColor: 'text-orange-600',
    borderColor: 'border-orange-500',
  },
  {
    title: 'Website gestalten lassen',
    description: 'Modernes UI/UX Design und professionelle Benutzeroberflächen für Unternehmen und Marken.',
    icon: 'design_services',
    iconBg: 'bg-rose-100',
    iconColor: 'text-rose-600',
    borderColor: 'border-rose-500',
  },
  {
    title: 'Preise & Kosten',
    description: 'Transparente Preise für professionelle Websites, Firmenhomepages und Webentwicklung.',
    icon: 'payments',
    iconBg: 'bg-cyan-100',
    iconColor: 'text-cyan-600',
    borderColor: 'border-cyan-500',
    href: '/webseite-kosten-kalkulator',
  },
];

const expertiseBlocks = [
  {
    icon: 'home_work',
    title: 'Professionelle Homepage erstellen lassen',
    paragraphs: [
      'Unternehmen, die ihre Homepage professionell erstellen lassen, profitieren von einem stärkeren Markenauftritt, mehr Vertrauen und einer besseren Positionierung im Internet.',
      'Eine moderne Firmenhomepage hilft dabei, neue Kunden zu gewinnen, Dienstleistungen professionell zu präsentieren und digitale Sichtbarkeit aufzubauen.',
      'EvolaTec entwickelt moderne Unternehmenswebsites, die nicht nur gut aussehen, sondern auch technisch performant, responsive und SEO-optimiert sind.',
      'Professionelle Webseiten überzeugen durch schnelle Ladezeiten, klare Strukturen und benutzerfreundliche Navigation — genau darauf spezialisiert sich unsere Webagentur.',
    ],
    tags: ['Firmenhomepage', 'Markenauftritt', 'Performance', 'SEO Ready'],
  },
  {
    icon: 'engineering',
    title: 'Website entwickeln lassen vom Profi',
    paragraphs: [
      'Wer eine professionelle Website entwickeln lassen möchte, benötigt mehr als nur schönes Design — moderne Webseiten müssen technisch performant, mobil optimiert und konversionsstark sein.',
      'Unsere Agentur entwickelt Webseiten für Unternehmen, Startups, Dienstleister und lokale Firmen, die online professionell auftreten möchten.',
      'Egal ob Landingpage, Unternehmenswebsite, Online Shop oder individuelle Plattform — EvolaTec entwickelt maßgeschneiderte Lösungen für moderne Anforderungen.',
      'Als professionelle Website Agentur unterstützen wir Unternehmen bei Webdesign, Entwicklung, SEO, Performance Optimierung und digitalem Wachstum.',
    ],
    tags: ['Webentwicklung', 'Webagentur', 'Conversion', 'Digital Growth'],
  },
];

const benefits = [
  {
    title: 'Modernes Webdesign',
    description: 'Professionelle Benutzeroberflächen und moderne digitale Designs für Ihre Marke.',
    icon: 'design_services',
    bg: 'bg-gradient-to-br from-blue-600 to-indigo-800',
    image: '/web-development/design.webp',
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
    description: 'Technische SEO Grundlagen und schnelle Ladezeiten für bessere Sichtbarkeit bei Google.',
    icon: 'trending_up',
    bg: 'bg-gradient-to-br from-purple-600 to-indigo-800',
    image: '/web-development/seo.webp',
  },
  {
    title: 'Individuelle Entwicklung',
    description: 'Maßgeschneiderte Lösungen für Unternehmen, Startups und digitale Plattformen.',
    icon: 'tune',
    bg: 'bg-gradient-to-br from-orange-500 to-rose-600',
    image: '/web-development/develop.webp',
  },
];

const features = [
  {
    icon: 'speed',
    title: 'Hohe Performance & schnelle Ladezeiten',
    description: 'Optimierte Websites mit Lighthouse-Scores nahe 100 — für bessere User Experience und höheres Google-Ranking.',
  },
  {
    icon: 'devices',
    title: 'Responsive Design für alle Geräte',
    description: 'Mobile First Entwicklung für perfekte Darstellung auf Smartphones, Tablets und Desktop — ohne Kompromisse.',
  },
  {
    icon: 'search_insights',
    title: 'Technisch SEO-optimiert von Grund auf',
    description: 'Strukturierte Daten, saubere URLs, schnelle Core Web Vitals und semantisches HTML für maximale Sichtbarkeit.',
  },
  {
    icon: 'verified_user',
    title: 'Sicherheit & moderne Technologien',
    description: 'HTTPS, sichere Hosting-Infrastruktur und moderne Frameworks wie Nuxt, Vue und Tailwind CSS.',
  },
  {
    icon: 'tune',
    title: 'Individuelle Anpassung & Skalierbarkeit',
    description: 'Maßgeschneiderte Lösungen, die mit Ihrem Unternehmen mitwachsen — keine Standard-Templates, sondern echte Entwicklung.',
  },
];

const relatedServices = [
  { icon: 'search_insights', title: 'SEO Optimierung', description: 'Professionelle Suchmaschinenoptimierung, die das Potenzial Ihrer neuen Website maximal ausschöpft.', price: 'ab 300 €', href: '/seo-optimieren-lassen' },
  { icon: 'campaign', title: 'Google Ads', description: 'Mit Google Ads sofort sichtbar werden — ideal ergänzend zur organischen SEO Ihrer Website.', price: 'ab 300 €/Monat', href: '/marketing-google-ads' },
  { icon: 'brush', title: 'Branding & Corporate Design', description: 'Eine professionelle Markenidentität als Grundlage für eine überzeugende und konsistente Website.', price: 'ab 500 €', href: '/design-branding' },
];

</script>
