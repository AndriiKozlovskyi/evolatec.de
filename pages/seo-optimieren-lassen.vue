<template>
  <div>
    <HeroSection
      background-image="/seo/optimize.webp"
      badge="Technische SEO Optimierung"
      title="Technische SEO Optimierung: Wir bringen Ihre Website auf Kurs"
      description="Wir optimieren Ihre Website technisch, verbessern Ladezeiten, Core Web Vitals, Struktur und SEO Performance, um bessere Google-Rankings und mehr Kunden zu erreichen."
      primaryCTA="Website optimieren lassen"
      secondaryCTA="Preise ansehen"
      :stats="optimizationStats"
    />

    <BenefitsSection
      title="Warum technische SEO Optimierung wichtig ist"
      :benefits="benefits"
    />

    <ProcessSection
      title="So optimieren wir Ihre Website"
      :steps="processSteps"
    />

    <FeaturesSection
      title="Unsere Leistungen zur Website Optimierung"
      :features="features"
      image-url="/web-development/seo.webp"
    />

    <!-- Split image + text section -->
    <section data-nav-label="Probleme" data-nav-icon="bug_report" class="py-section-padding bg-surface">
      <div class="max-w-container-max mx-auto px-gutter">
        <div class="grid md:grid-cols-2 gap-stack-lg items-center">
          <div class="relative rounded-2xl overflow-hidden aspect-[3/2] md:aspect-auto md:h-80 shadow-2xl order-2 md:order-1">
            <NuxtImg
              src="/landing/seo.webp"
              alt="Website Performance Optimierung"
              class="w-full h-full object-cover"
              width="840"
              height="560"
              sizes="100vw md:576px"
              loading="lazy"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent"></div>
          </div>
          <div class="order-1 md:order-2">
            <h2 class="font-display text-3xl sm:text-4xl md:text-5xl font-black mb-6 leading-tight">Häufige technische SEO Probleme</h2>
            <div class="space-y-3">
              <div v-for="problem in commonProblems" :key="problem" class="flex gap-3 items-center p-3 rounded-lg border border-black/10 glass-card">
                <span class="material-symbols-outlined text-red-400 text-xl flex-shrink-0">cancel</span>
                <span class="font-body-md text-on-surface">{{ problem }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <PricingSection
      title="Preise für technische SEO Optimierung"
      subtitle="Transparente Preise für professionelle Website Optimierung."
      :pricing-plans="optimizationPricingPlans"
    />

    <FAQSection title="Häufig gestellte Fragen zur Website Optimierung" :faqs="optimizationFaqs" />

    <RelatedServicesSection
      eyebrow="Website & Entwicklung"
      title="SEO Optimierung braucht eine solide Website als Basis"
      :services="relatedServices"
    />

    <CTASection
      title="Lassen Sie Ihre Website professionell optimieren"
      description="Verbessern Sie Geschwindigkeit, SEO Performance und technische Basis Ihrer Website nachhaltig."
      primary-cta="Website optimieren lassen"
      secondary-cta="Kostenlos beraten lassen"
    />
  </div>
</template>

<script setup lang="ts">
import { buildSchema, organizationSchema, websiteSchema, pageSchema } from '~/composables/schema/global'
import { serviceSchema, breadcrumbSchema, faqSchema } from '~/composables/schema/service'

const { hreflangLinks } = useLanguageSwitcher();

const optimizationFaqs = [
  {
    question: 'Was kostet technische SEO Optimierung?',
    answer:
      'Basis SEO Optimierungen beginnen bei EvolaTec ab 300€. Umfangreichere technische SEO Pakete mit Core Web Vitals Optimierung und OnPage Überarbeitung kosten zwischen 500€ und 1.200€. Die genauen Kosten hängen vom Umfang Ihrer Website ab.',
  },
  {
    question: 'Wie lange dauert die SEO Optimierung?',
    answer:
      'Kleinere Optimierungen sind oft innerhalb weniger Tage umgesetzt, umfangreichere Projekte benötigen 1–3 Wochen. Erste Verbesserungen bei den Google-Rankings sind meist sichtbar, sobald Google die Änderungen indexiert hat.',
  },
  {
    question: 'Verbessert technische SEO meine Google Rankings?',
    answer:
      'Ja, technische SEO ist die Grundlage für gute Google-Rankings. Eine schnell ladende, technisch saubere Website mit guten Core Web Vitals wird von Google bevorzugt. Ohne technische Basis bringen auch die besten Inhalte und Backlinks wenig.',
  },
  {
    question: 'Was sind Core Web Vitals und warum sind sie wichtig?',
    answer:
      'Core Web Vitals sind Google-Messwerte für die Nutzererfahrung: LCP (Ladezeit), INP (Interaktivität) und CLS (visuelle Stabilität). Sie sind ein offizieller Ranking-Faktor – Websites mit schlechten Core Web Vitals verlieren Sichtbarkeit.',
  },
  {
    question: 'Optimieren Sie auch bestehende Websites?',
    answer:
      'Ja, wir optimieren bestehende Websites unabhängig vom verwendeten CMS oder Framework. Wir analysieren zuerst den aktuellen Zustand und priorisieren die Maßnahmen mit dem größten Ranking-Hebel.',
  },
  {
    question: 'Kann ich die SEO Optimierungen selbst umsetzen?',
    answer:
      'Ja, wir erstellen auf Wunsch einen detaillierten Implementierungsplan für Ihr Team oder Ihre Entwickler. Bei technischen Fragen unterstützen wir Sie gerne oder übernehmen die komplette Umsetzung.',
  },
  {
    question: 'Welche Bereiche umfasst eine vollständige SEO Optimierung?',
    answer:
      'Eine vollständige SEO-Optimierung umfasst Technik (Ladezeit, Core Web Vitals, Mobile, Crawling), OnPage (Meta-Daten, Überschriften, Content, interne Links), strukturierte Daten, URL-Struktur sowie Bilder-Optimierung und Indexierung. Auf Wunsch ergänzen wir Keyword-Strategie und Content-Optimierung.',
  },
];

const schemaMarkup = buildSchema(
  organizationSchema(),
  websiteSchema(),
  pageSchema({
    url: 'https://evolatec.de/seo-optimieren-lassen',
    name: 'Technische SEO Optimierung – Website Performance verbessern | EvolaTec',
    description: 'Professionelle technische SEO Optimierung für bessere Google Rankings. Ladezeiten, Core Web Vitals, Struktur. SEO Optimierung ab 300€.',
  }),
  serviceSchema({
    id: 'https://evolatec.de/seo-optimieren-lassen/#service',
    name: 'SEO Optimierung',
    description: 'Technische SEO Optimierung für bessere Google Rankings, schnellere Ladezeiten und bessere Core Web Vitals.',
    url: 'https://evolatec.de/seo-optimieren-lassen',
    serviceType: 'Suchmaschinenoptimierung',
    minPrice: 300,
  }),
  breadcrumbSchema([
    { name: 'Home', url: 'https://evolatec.de' },
    { name: 'SEO', url: 'https://evolatec.de/seo' },
    { name: 'SEO Optimierung', url: 'https://evolatec.de/seo-optimieren-lassen' },
  ]),
  faqSchema(optimizationFaqs),
);

useHead({
  title: 'Technische SEO Optimierung – Website Performance verbessern | EvolaTec',
  meta: [
    { name: 'description', content: 'Professionelle technische SEO Optimierung für bessere Google Rankings. Ladezeiten, Core Web Vitals, Struktur. SEO Optimierung ab 300€.' },
  ],
  link: [
    { rel: 'canonical', href: 'https://evolatec.de/seo-optimieren-lassen' },
    ...hreflangLinks.value,
  ],
  script: [{ type: 'application/ld+json', innerHTML: JSON.stringify(schemaMarkup) }],
});

const optimizationStats = [
  { value: '100%', label: 'Schneller', icon: 'speed' },
  { value: 'Top Scores', label: 'Web Vitals', icon: 'verified_user' },
  { value: '+Ranking', label: 'Verbesserung', icon: 'trending_up' },
  { value: 'Mobile Ready', label: 'Optimiert', icon: 'smartphone' },
];

const benefits = [
  {
    icon: 'speed',
    title: 'Schnellere Ladezeiten',
    description: 'Langsame Websites verlieren Rankings und Besucher. Wir optimieren Performance, Bilder, JavaScript und Servergeschwindigkeit.',
    bg: 'bg-gradient-to-br from-orange-500 to-amber-600',
    image: '/main/seo.webp',
  },
  {
    icon: 'assessment',
    title: 'Bessere Core Web Vitals',
    description: 'Google bewertet Core Web Vitals direkt im Ranking. Wir optimieren LCP, FID und CLS für Top-Scores.',
    bg: 'bg-gradient-to-br from-blue-600 to-blue-800',
    image: '/web-development/seo.webp',
  },
  {
    icon: 'smartphone',
    title: 'Mobile-First Optimierung',
    description: 'Über 60% aller Suchanfragen kommen vom Smartphone. Mobile Optimierung ist heute kein optionales Extra mehr.',
    bg: 'bg-gradient-to-br from-purple-600 to-indigo-800',
    image: '/landing/seo.webp',
  },
];

const processSteps = [
  {
    icon: 'speed',
    title: 'Performance Analyse',
    description: 'Technische Analyse aller Performance-Faktoren mit Lighthouse und PageSpeed Insights.',
  },
  {
    icon: 'bug_report',
    title: 'Fehleridentifikation',
    description: 'Alle technischen SEO-Probleme werden erkannt und priorisiert.',
  },
  {
    icon: 'priority_high',
    title: 'Priorisierung',
    description: 'Erstellung eines Optimierungsplans nach SEO-Relevanz und -Impact.',
  },
  {
    icon: 'build',
    title: 'Technische Umsetzung',
    description: 'Speed-Optimierung, SEO-Fixes und strukturelle Verbesserungen.',
  },
  {
    icon: 'monitoring',
    title: 'Monitoring',
    description: 'Laufende Kontrolle, Tests und weitere Verbesserungen nach dem Go-Live.',
  },
];

const features = [
  {
    icon: 'speed',
    title: 'Ladezeiten',
    description: 'Bilder, CSS, JavaScript und Serverantwortzeiten werden gezielt verbessert.',
  },
  {
    icon: 'architecture',
    title: 'Seitenstruktur',
    description: 'URLs, Überschriften, Navigation und interne Verlinkung werden optimiert.',
  },
  {
    icon: 'security',
    title: 'Sicherheit',
    description: 'HTTPS, sichere Ressourcen und moderne Hosting-Standards.',
  },
  {
    icon: 'engineering',
    title: 'Crawling & Indexierung',
    description: 'Behebung von Crawling-Fehlern und Indexierungsproblemen.',
  },
];

const commonProblems = [
  'Langsame Ladezeiten (>3 Sekunden)',
  'Schlechte Core Web Vitals',
  'Nicht optimierte Bilder',
  'Mobile Darstellungsprobleme',
  'Unsichere Inhalte (Mixed Content)',
  'Schlechte URL-Struktur',
];

const optimizationPricingPlans = [
  {
    tier: 'Basis Website Optimierung',
    price: 'ab 300 €',
    features: [
      'Performance Analyse',
      'Speed-Optimierung',
      'Mobile Check',
      'Erste Verbesserungen',
    ],
    buttonText: 'Optimierung anfragen',
    isHighlighted: false,
  },
  {
    tier: 'Technische SEO Optimierung',
    price: 'ab 500 €',
    features: [
      'Alles aus Basis Optimierung',
      'Vollständige Tech-Optimierung',
      'Core Web Vitals Fixes',
      'Struktur-Verbesserung',
    ],
    buttonText: 'Projekt starten',
    isHighlighted: true,
  },
  {
    tier: 'Komplette SEO Optimierung',
    price: 'ab 1.200 €',
    features: [
      'Alles aus Technische Optimierung',
      'Content-Optimierung',
      'Sicherheit & Struktur',
      'Monitoring & Support',
    ],
    buttonText: 'Beratung buchen',
    isHighlighted: false,
  },
];

const relatedServices = [
  { icon: 'language', title: 'Firmenwebsite erstellen lassen', description: 'Eine technisch einwandfreie Firmenwebsite ist die Basis jeder erfolgreichen SEO Optimierung.', price: 'ab 1.500 €', href: '/firmenwebsite-erstellen-lassen' },
  { icon: 'article', title: 'Landingpage erstellen lassen', description: 'Optimierte Landingpages mit sauberer technischer SEO Basis für bessere Conversions und Rankings.', price: 'ab 500 €', href: '/landingpage-erstellen-lassen' },
  { icon: 'shopping_bag', title: 'Online-Shop erstellen lassen', description: 'E-Commerce mit eingebautem SEO-Fundament — schnell, sicher und gut bei Google.', price: 'ab 3.000 €', href: '/online-shop-erstellen-lassen' },
];

</script>
