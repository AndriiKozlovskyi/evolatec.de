<template>
  <div>
    <!-- Hero -->
    <HeroSection
      background-image="/main/design.webp"
      badge="Professionelle Webdesign Agentur"
      title="Webdesign Agentur – Professionelles Webdesign von EvolaTec"
      description="EvolaTec entwickelt moderne Websites, starke Markenauftritte und conversionstarkes Webdesign für Unternehmen, Startups und lokale Firmen."
      primaryCTA="Projekt starten"
      secondaryCTA="Preise ansehen"
      :stats="heroStats"
    />

    <!-- Trust -->
    <TrustSection :companies="trustCompanies" />

    <!-- Intro -->
    <section class="relative py-section-padding bg-surface overflow-hidden">
      <!-- Ambient color depth -->
      <div class="absolute top-20 -right-32 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[120px] pointer-events-none"></div>
      <div class="absolute bottom-0 -left-32 w-[400px] h-[400px] rounded-full bg-primary-container/20 blur-[100px] pointer-events-none"></div>

      <div class="relative max-w-container-max mx-auto px-gutter">
        <div class="grid lg:grid-cols-[1.15fr_1fr] gap-stack-lg items-center">

          <!-- Text column -->
          <div>
            <span class="inline-flex items-center gap-2 rounded-full bg-primary/8 border border-primary/15 px-4 py-2 text-sm font-medium text-primary mb-6">
              <span class="material-symbols-outlined text-[18px]">language</span>
              Professionelles Webdesign
            </span>

            <h2 class="font-headline-xl text-headline-xl text-primary mb-8 leading-[1.1]">
              Moderne Websites für
              <span class="relative inline-block">
                <span class="relative z-10">Unternehmen</span>
                <span class="absolute -bottom-1 left-0 right-0 h-3 bg-primary/15 rounded-sm -z-0"></span>
              </span>, Marken und digitale Produkte
            </h2>

            <div class="space-y-5 mb-10">
              <div v-for="(point, i) in introPoints" :key="i" class="flex gap-4 items-start">
                <div class="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span class="material-symbols-outlined text-primary text-[18px]">{{ point.icon }}</span>
                </div>
                <p class="font-body-lg text-on-surface-variant flex-1 pt-1">{{ point.text }}</p>
              </div>
            </div>

            <!-- Stats row -->
            <div class="grid grid-cols-3 gap-6 pt-8 border-t border-outline-variant/30">
              <div v-for="stat in introStats" :key="stat.label">
                <div class="font-display text-3xl text-primary font-black leading-none">{{ stat.value }}</div>
                <div class="text-[0.7rem] uppercase tracking-widest text-on-surface-variant font-bold mt-2">{{ stat.label }}</div>
              </div>
            </div>
          </div>

          <!-- Designer's toolkit composition — desktop only -->
          <div class="relative hidden lg:block">
            <div class="relative aspect-square max-w-md mx-auto">
              <!-- Gradient backdrop -->
              <div class="absolute inset-6 rounded-[2rem] bg-gradient-to-br from-primary/85 via-primary-container to-primary/60 ambient-shadow"></div>

              <!-- Icon badge top-right -->
              <div class="absolute top-0 right-8 w-20 h-20 rounded-2xl bg-white shadow-xl flex items-center justify-center rotate-[8deg]">
                <span class="material-symbols-outlined text-primary text-[40px]">design_services</span>
              </div>

              <!-- Color palette card -->
              <div class="absolute top-20 left-0 bg-white rounded-2xl p-5 shadow-xl rotate-[-5deg]">
                <div class="text-[0.65rem] uppercase tracking-widest font-bold text-on-surface-variant mb-3">Color Palette</div>
                <div class="flex gap-2">
                  <div class="w-9 h-9 rounded-lg bg-primary ring-2 ring-white"></div>
                  <div class="w-9 h-9 rounded-lg bg-primary-container ring-2 ring-white"></div>
                  <div class="w-9 h-9 rounded-lg bg-slate-900 ring-2 ring-white"></div>
                  <div class="w-9 h-9 rounded-lg bg-orange-400 ring-2 ring-white"></div>
                </div>
              </div>

              <!-- Typography card -->
              <div class="absolute top-44 right-0 bg-white rounded-2xl p-5 shadow-xl rotate-[5deg]">
                <div class="text-[0.65rem] uppercase tracking-widest font-bold text-on-surface-variant mb-2">Typography</div>
                <div class="font-display text-4xl font-black leading-none text-primary">Aa</div>
                <div class="text-xs text-on-surface-variant mt-1">Inter · Display</div>
              </div>

              <!-- Layout grid card -->
              <div class="absolute bottom-6 left-6 bg-white rounded-2xl p-5 shadow-xl rotate-[-3deg]">
                <div class="text-[0.65rem] uppercase tracking-widest font-bold text-on-surface-variant mb-3">Layout Grid</div>
                <div class="grid grid-cols-3 gap-1.5 w-32">
                  <div class="h-5 rounded-sm bg-primary"></div>
                  <div class="h-5 rounded-sm bg-primary/30"></div>
                  <div class="h-5 rounded-sm bg-primary/30"></div>
                  <div class="h-5 rounded-sm bg-primary/30"></div>
                  <div class="h-5 rounded-sm bg-primary"></div>
                  <div class="h-5 rounded-sm bg-primary/30"></div>
                </div>
              </div>

              <!-- Live status chip -->
              <div class="absolute bottom-16 right-0 bg-white rounded-full px-4 py-2 shadow-xl rotate-[6deg] flex items-center gap-2">
                <span class="relative flex w-2 h-2">
                  <span class="absolute inline-flex w-full h-full rounded-full bg-emerald-500 opacity-75 animate-ping"></span>
                  <span class="relative inline-flex w-2 h-2 rounded-full bg-emerald-500"></span>
                </span>
                <span class="text-xs font-bold text-on-surface uppercase tracking-wider">Live</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- Services -->
    <ServicesSection title="Unsere Webdesign Leistungen" variant="centered" :services="designServices" />

    <!-- Features -->
    <FeaturesSection
      title="Was professionelles Webdesign ausmacht."
      :features="features"
      image-url="/web-development/design.webp"
    />

    <!-- Benefits -->
    <BenefitsSection title="Warum professionelles Webdesign wichtig ist" :benefits="benefits" />

    <!-- Process -->
    <ProcessSection title="Unser Webdesign Prozess" :steps="processSteps" />

    <!-- Expertise blocks — 2 card columns with tags -->
    <section class="relative py-section-padding bg-surface-container-low overflow-hidden">
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-primary/[0.04] blur-[120px] pointer-events-none"></div>

      <div class="relative max-w-container-max mx-auto px-gutter">
        <div class="text-center max-w-2xl mx-auto mb-stack-lg">
          <span class="inline-flex items-center gap-2 rounded-full bg-primary/8 border border-primary/15 px-4 py-2 text-sm font-medium text-primary mb-5">
            <span class="material-symbols-outlined text-[18px]">verified</span>
            Webdesign aus einer Hand
          </span>
          <h2 class="font-headline-lg text-primary leading-tight">Komplette digitale Lösungen für Ihre Marke</h2>
        </div>

        <div class="grid lg:grid-cols-2 gap-8">
          <div
            v-for="block in expertiseBlocks"
            :key="block.title"
            class="group relative bg-surface rounded-3xl p-10 border border-outline-variant/30 ambient-shadow hover:shadow-2xl hover:border-primary/20 transition-all duration-500 overflow-hidden"
          >
            <!-- Gradient accent rail at top -->
            <div class="absolute top-0 left-10 right-10 h-1 bg-gradient-to-r from-primary to-primary-container rounded-b-full"></div>

            <!-- Soft accent blob -->
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

    <!-- FAQ -->
    <FAQSection title="Häufig gestellte Fragen" :faqs="faqs" />

    <!-- CTA -->
    <CTASection
      title="Professionelles Webdesign für Ihr Unternehmen"
      description="EvolaTec entwickelt moderne Websites, starke Markenauftritte und conversionstarke digitale Erlebnisse."
      primary-cta="Webdesign anfragen"
      secondary-cta="Kostenlos beraten lassen"
    />
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Webdesign Agentur – Professionelles Webdesign | EvolaTec',
  meta: [
    {
      name: 'description',
      content: 'Professionelles Webdesign von EvolaTec. Moderne Websites, responsive Designs, UI/UX und Branding für Unternehmen, Startups und lokale Firmen.',
    },
  ],
});

const trustCompanies = ['WEB DESIGN', 'UI/UX', 'BRANDING', 'RESPONSIVE'];

const introPoints = [
  {
    icon: 'speed',
    text: 'Als professionelle Webdesign Agentur entwickelt EvolaTec moderne, schnelle und conversionstarke Websites für Unternehmen, Startups und lokale Dienstleister.',
  },
  {
    icon: 'verified',
    text: 'Professionelles Webdesign verbessert die Wahrnehmung Ihrer Marke, steigert Vertrauen und sorgt dafür, dass Besucher zu Kunden werden.',
  },
  {
    icon: 'auto_awesome',
    text: 'Unsere Webagentur kombiniert modernes UI/UX Design, SEO-optimierte Strukturen und performante Entwicklung für nachhaltigen Erfolg im Internet.',
  },
];

const introStats = [
  { value: '10+', label: 'Jahre Erfahrung' },
  { value: '100+', label: 'Projekte' },
  { value: '98%', label: 'Zufriedenheit' },
];

const expertiseBlocks = [
  {
    icon: 'business',
    title: 'Webdesign Agentur für moderne Unternehmen',
    paragraphs: [
      'EvolaTec ist Ihre Agentur für professionelles Webdesign, moderne Unternehmenswebsites und digitale Markenauftritte.',
      'Als responsive Webdesign Agentur entwickeln wir Websites, die auf Smartphones, Tablets und Desktop-Geräten perfekt funktionieren.',
      'Unsere Webdesign Firma verbindet Design, Performance, Benutzerfreundlichkeit und SEO für nachhaltige Ergebnisse.',
    ],
    tags: ['Webdesign Agentur', 'Responsive', 'SEO Ready', 'Mobile First'],
  },
  {
    icon: 'workspace_premium',
    title: 'Professioneller Webdesigner & moderne Webagentur',
    paragraphs: [
      'Ob Unternehmenswebsite, Landingpage oder komplexe digitale Plattform — unsere Website Design Agentur entwickelt moderne Lösungen für unterschiedlichste Branchen.',
      'Professionelles Webdesign steigert Vertrauen, Markenwahrnehmung und Conversion-Raten.',
      'Als moderne Internetagentur unterstützt EvolaTec Unternehmen bei ihrem digitalen Wachstum.',
    ],
    tags: ['Landingpage', 'Branding', 'Conversion', 'Internetagentur'],
  },
];

const heroStats = [
  { value: 'Modern', label: 'Webdesign', icon: 'design_services' },
  { value: 'Responsive', label: 'Mobile First', icon: 'devices' },
  { value: 'SEO', label: 'Optimiert', icon: 'trending_up' },
  { value: 'Conversion', label: 'Focused', icon: 'rocket_launch' },
];

const designServices = [
  {
    title: 'Content & Copywriting',
    description: 'Professionelle Inhalte, strukturierte Texte und conversionstarke Content Strategien.',
    icon: 'edit_square',
    iconBg: 'bg-blue-100',
    iconColor: 'text-blue-600',
    borderColor: 'border-blue-500',
    href: '/webseiten-texte-schreiben-lassen',
  },
  {
    title: 'UI/UX Design',
    description: 'Intuitive Interfaces und moderne Nutzererlebnisse für digitale Produkte.',
    icon: 'design_services',
    iconBg: 'bg-purple-100',
    iconColor: 'text-purple-600',
    borderColor: 'border-purple-500',
    href: '/ui-ux-design',
  },
  {
    title: 'Branding & Corporate Design',
    description: 'Professionelle Markenidentitäten und Corporate Designs für Unternehmen.',
    icon: 'brand_awareness',
    iconBg: 'bg-orange-100',
    iconColor: 'text-orange-600',
    borderColor: 'border-orange-500',
    href: '/design-branding',
  },
  {
    title: 'Professionelles Webdesign',
    description: 'Moderne Websites mit starkem Markenauftritt und hoher Conversion.',
    icon: 'language',
    iconBg: 'bg-emerald-100',
    iconColor: 'text-emerald-600',
    borderColor: 'border-emerald-500',
  },
  {
    title: 'Responsive Webdesign',
    description: 'Optimierte Websites für Smartphones, Tablets und Desktop.',
    icon: 'devices',
    iconBg: 'bg-rose-100',
    iconColor: 'text-rose-600',
    borderColor: 'border-rose-500',
  },
  {
    title: 'SEO Optimierung',
    description: 'Technisch optimierte Websites mit schneller Ladezeit.',
    icon: 'search',
    iconBg: 'bg-cyan-100',
    iconColor: 'text-cyan-600',
    borderColor: 'border-cyan-500',
  },
];

const benefits = [
  {
    title: 'Mehr Vertrauen',
    description: 'Professionelles Webdesign stärkt Ihre Marke.',
    icon: 'verified',
    bg: 'bg-gradient-to-br from-blue-600 to-indigo-800',
    image: '/main/design.webp',
  },
  {
    title: 'Höhere Conversion',
    description: 'Moderne Websites generieren mehr Anfragen und Verkäufe.',
    icon: 'trending_up',
    bg: 'bg-gradient-to-br from-emerald-600 to-teal-800',
    image: '/web-development/design.webp',
  },
  {
    title: 'Mobile Optimierung',
    description: 'Perfekte Darstellung auf allen Geräten.',
    icon: 'devices',
    bg: 'bg-gradient-to-br from-purple-600 to-indigo-800',
    image: '/web-development/responsive.webp',
  },
  {
    title: 'Starke Markenwirkung',
    description: 'Professionelle Designs bleiben im Gedächtnis.',
    icon: 'auto_awesome',
    bg: 'bg-gradient-to-br from-orange-500 to-rose-600',
    image: '/main/hero.webp',
  },
];

const processSteps = [
  { title: 'Analyse', description: 'Analyse von Zielgruppe, Markt und Anforderungen.', icon: 'search' },
  { title: 'Konzept & Struktur', description: 'Wireframes, Seitenstruktur und UX Planung.', icon: 'schema' },
  { title: 'Design', description: 'Modernes UI Design und Branding.', icon: 'design_services' },
  { title: 'Optimierung', description: 'Performance, SEO und mobile Optimierung.', icon: 'rocket_launch' },
];

const features = [
  {
    icon: 'palette',
    title: 'Starke visuelle Identität & Markenwirkung',
    description: 'Professionelles Design schafft sofortiges Vertrauen — mit konsistenten Farben, Typografie und einer unverwechselbaren Bildsprache.',
  },
  {
    icon: 'devices',
    title: 'Responsive auf allen Geräten',
    description: 'Jedes Layout funktioniert perfekt auf Smartphones, Tablets und Desktop — Mobile First, pixelgenau und ohne Kompromisse.',
  },
  {
    icon: 'ads_click',
    title: 'Conversion-optimiertes UI/UX Design',
    description: 'Intuitive Navigation, klare Call-to-Actions und nutzerorientierte Strukturen, die Besucher zu Kunden machen.',
  },
  {
    icon: 'speed',
    title: 'Performance & technische Perfektion',
    description: 'Leichtgewichtige Assets, optimierte Bilder und sauberer Code für schnelle Ladezeiten und hohe Lighthouse-Scores.',
  },
  {
    icon: 'search_insights',
    title: 'SEO-ready von Anfang an',
    description: 'Semantisches HTML, saubere Struktur und optimierte Inhalte — damit Ihre Website bei Google gefunden wird.',
  },
];

const faqs = [
  {
    question: 'Was kostet professionelles Webdesign?',
    answer: 'Die Kosten hängen vom Umfang des Projekts ab. Professionelle Websites starten meist ab 1.000€.',
  },
  {
    question: 'Warum ist responsive Webdesign wichtig?',
    answer: 'Responsive Websites funktionieren auf Smartphones, Tablets und Desktop-Geräten optimal.',
  },
  {
    question: 'Was macht eine Webdesign Agentur?',
    answer: 'Eine Webdesign Agentur entwickelt moderne Websites, verbessert Markenauftritte und optimiert Nutzererlebnisse.',
  },
  {
    question: 'Bietet EvolaTec auch UI/UX Design an?',
    answer: 'Ja, EvolaTec entwickelt moderne UI/UX Designs für Websites, Apps und digitale Plattformen.',
  },
];
</script>
