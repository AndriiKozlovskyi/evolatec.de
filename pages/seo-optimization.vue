<template>
  <div>
    <HeroSection
      background-image="/seo/optimize.webp"
      badge="Technische SEO Optimierung"
      title="Technische SEO Optimierung: Wir bringen Ihre Website auf Kurs"
      description="Wir optimieren Ihre Website technisch, verbessern Ladezeiten, Core Web Vitals, Struktur und SEO Performance für bessere Google Rankings und mehr Kunden."
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
    <section class="py-section-padding bg-surface">
      <div class="max-w-container-max mx-auto px-gutter">
        <div class="grid md:grid-cols-2 gap-stack-lg items-center">
          <div class="relative rounded-2xl overflow-hidden h-80 shadow-2xl">
            <img
              src="/landing/seo.webp"
              alt="Website Performance Optimierung"
              class="w-full h-full object-cover"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent"></div>
            <div class="absolute bottom-6 left-6 bg-white rounded-xl px-4 py-3 shadow-lg flex items-center gap-3">
              <span class="material-symbols-outlined text-emerald-500 text-2xl">speed</span>
              <div>
                <div class="font-bold text-primary text-sm">+40% schneller</div>
                <div class="text-on-surface-variant text-xs">Ladezeiten verbessert</div>
              </div>
            </div>
          </div>
          <div>
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

    <CTASection
      title="Lassen Sie Ihre Website professionell optimieren"
      description="Verbessern Sie Geschwindigkeit, SEO Performance und technische Basis Ihrer Website nachhaltig."
      primary-cta="Website optimieren lassen"
      secondary-cta="Kostenlos beraten lassen"
    />
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Technische SEO Optimierung – Website Performance verbessern | EvolaTec',
  meta: [
    { name: 'description', content: 'Professionelle technische SEO Optimierung für bessere Google Rankings. Ladezeiten, Core Web Vitals, Struktur. SEO Optimierung ab 300€.' },
  ],
  link: [
    { rel: 'canonical', href: 'https://evolatec.de/seo-optimization' },
  ],
});

const optimizationStats = [
  { value: '+40%', label: 'Schneller', icon: 'speed' },
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
    description: 'Über 60% aller Suchanfragen kommen vom Smartphone. Mobile Optimierung ist heute kein Optional mehr.',
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
    title: 'Fehler Identifikation',
    description: 'Alle technischen SEO Probleme werden erkannt und priorisiert.',
  },
  {
    icon: 'priority_high',
    title: 'Priorisierung',
    description: 'Erstellung eines Optimierungsplans nach SEO Relevanz und Impact.',
  },
  {
    icon: 'build',
    title: 'Technische Umsetzung',
    description: 'Speed Optimierung, SEO Fixes und strukturelle Verbesserungen.',
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
    title: 'Ladezeiten Optimierung',
    description: 'Bilder, CSS, JavaScript und Serverantwortzeiten werden gezielt verbessert.',
  },
  {
    icon: 'architecture',
    title: 'Seitenstruktur Optimierung',
    description: 'URLs, Überschriften, Navigation und interne Verlinkung werden optimiert.',
  },
  {
    icon: 'security',
    title: 'Sicherheitsoptimierung',
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
  'Schlechte URL Struktur',
];

const optimizationPricingPlans = [
  {
    tier: 'Basis Website Optimierung',
    price: 'ab 300 €',
    features: ['Performance Analyse', 'Speed Optimierung', 'Mobile Check', 'Erste Verbesserungen'],
    buttonText: 'Optimierung anfragen',
    isHighlighted: false,
  },
  {
    tier: 'Technische SEO Optimierung',
    price: 'ab 500 €',
    features: ['Vollständige Tech-Optimierung', 'Core Web Vitals Fixes', 'Struktur-Verbesserung', 'Implementierungsplan'],
    buttonText: 'Projekt starten',
    isHighlighted: true,
  },
  {
    tier: 'Komplette SEO Optimierung',
    price: 'ab 1.200 €',
    features: ['Alle Optimierungen', 'Performance + SEO', 'Sicherheit & Struktur', 'Monitoring & Support'],
    buttonText: 'Beratung buchen',
    isHighlighted: false,
  },
];

const optimizationFaqs = [
  { question: 'Was kostet technische SEO Optimierung?', answer: 'Basis Optimierungen beginnen ab 300€. Umfangreiche SEO Optimierungen ab 500–1.200€. Die genauen Kosten hängen vom Umfang ab.' },
  { question: 'Wie lange dauert die Optimierung?', answer: 'Kleine Optimierungen dauern wenige Tage, größere technische Projekte 1–3 Wochen. Das hängt von der Komplexität Ihrer Website ab.' },
  { question: 'Verbessert technische SEO meine Rankings?', answer: 'Ja. Technische SEO ist eine wichtige Grundlage für bessere Google Rankings. Ohne technische Basis verlieren Sie Sichtbarkeit.' },
  { question: 'Optimieren Sie bestehende Websites?', answer: 'Ja. Wir optimieren bestehende Websites unabhängig vom verwendeten System oder Framework.' },
  { question: 'Kann ich die Optimierungen selbst umsetzen?', answer: 'Ja. Wir erstellen einen detaillierten Implementierungsplan. Bei technischen Fragen unterstützen wir Sie gerne.' },
];
</script>
