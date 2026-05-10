<template>
  <div>
    <HeroSection
      background-image="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1200&h=600&fit=crop"
      badge="Professionelle Linkbuilding Agentur"
      title="Linkbuilding & Backlink Aufbau: Mehr Autorität für Ihre Website"
      description="Hochwertige Backlinks sind einer der wichtigsten Google Ranking Faktoren. Wir helfen Unternehmen, starke SEO Autorität aufzubauen und bessere Rankings zu erreichen."
      primaryCTA="Linkbuilding starten"
      secondaryCTA="Preise ansehen"
      :stats="linkBuildingStats"
    />

    <BenefitsSection
      title="Warum professionelles Linkbuilding entscheidend ist"
      :benefits="benefits"
    />

    <ProcessSection
      title="So funktioniert unser Linkbuilding"
      :steps="processSteps"
    />

    <FeaturesSection
      title="Unsere Linkbuilding Leistungen"
      :features="features"
      image-url="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&h=400&fit=crop"
    />

    <SEOSection
      title="Backlinks die wir aufbauen"
      :features="backlinksTypes"
    />

    <PricingSection
      title="Linkbuilding Preise"
      subtitle="Transparente Preise für professionellen Backlink Aufbau."
      :pricing-plans="linkBuildingPricingPlans"
    />

    <FAQSection title="Häufig gestellte Fragen zu Linkbuilding" :faqs="linkBuildingFaqs" />

    <CTASection
      title="Stärken Sie Ihre SEO Autorität"
      description="Professioneller Backlink Aufbau für bessere Rankings und mehr Sichtbarkeit bei Google."
      primary-cta="Linkbuilding starten"
      secondary-cta="Kostenlos beraten lassen"
    />
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Linkbuilding Agentur – Backlinks & SEO Autorität aufbauen | EvolaTec',
  meta: [
    { name: 'description', content: 'Professionelles Linkbuilding für bessere Google Rankings. Hochwertige Backlinks, Outreach und SEO Autorität. Linkbuilding ab 500€.' },
  ],
  link: [
    { rel: 'canonical', href: 'https://evolatec.de/seo-link-building' },
  ],
});

const linkBuildingStats = [
  { value: 'Domain Authority', label: 'Aufbau', icon: 'trending_up' },
  { value: 'Hochwertig', label: 'Backlinks', icon: 'verified' },
  { value: 'Nachhaltig', label: 'SEO Wachstum', icon: 'schedule' },
  { value: 'Expertise', label: 'OffPage SEO', icon: 'star' },
];

const benefits = [
  {
    icon: 'verified',
    title: 'Mehr Domain Autorität',
    description: 'Hochwertige Backlinks von relevanten und vertrauenswürdigen Websites stärken die Autorität Ihrer Domain dauerhaft.',
    bg: 'bg-gradient-to-br from-emerald-600 to-teal-800',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&h=400&fit=crop',
  },
  {
    icon: 'trending_up',
    title: 'Bessere Google Rankings',
    description: 'Backlinks sind einer der stärksten Ranking-Faktoren. Mehr Autorität bedeutet bessere Positionen bei Google.',
    bg: 'bg-gradient-to-br from-blue-600 to-blue-800',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
  },
  {
    icon: 'schedule',
    title: 'Langfristige Wirkung',
    description: 'Gute Backlinks wirken langfristig positiv und liefern kontinuierlich mehr organischen Traffic.',
    bg: 'bg-gradient-to-br from-amber-500 to-orange-600',
    image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&h=400&fit=crop',
  },
];

const processSteps = [
  {
    icon: 'assessment',
    title: 'Backlink Analyse',
    description: 'Analyse Ihrer aktuellen Backlink-Struktur, Konkurrenten und Potenziale.',
  },
  {
    icon: 'map',
    title: 'Strategie Entwicklung',
    description: 'Erstellung einer individuellen Linkbuilding Strategie passend zu Ihrer Branche.',
  },
  {
    icon: 'people',
    title: 'Outreach',
    description: 'Kontaktaufbau mit relevanten Websites, Medien und Partnern.',
  },
  {
    icon: 'link',
    title: 'Link Aufbau',
    description: 'Aufbau hochwertiger, thematisch relevanter Backlinks.',
  },
  {
    icon: 'monitoring',
    title: 'Monitoring',
    description: 'Laufende Kontrolle des Linkprofils und weitere Optimierung.',
  },
];

const features = [
  {
    icon: 'map',
    title: 'Linkbuilding Strategie',
    description: 'Entwicklung einer nachhaltigen OffPage SEO Strategie für Ihre Branche und Ziele.',
  },
  {
    icon: 'people',
    title: 'Outreach & Kooperationen',
    description: 'Kontaktaufbau mit passenden Websites, Blogs und Medien in Ihrer Nische.',
  },
  {
    icon: 'edit_document',
    title: 'Gastartikel & Content Links',
    description: 'Contentbasierter Linkaufbau über hochwertige Gastbeiträge und Artikel.',
  },
  {
    icon: 'visibility',
    title: 'Link Monitoring',
    description: 'Laufende Kontrolle und Optimierung Ihres Linkprofils und der Linkqualität.',
  },
];

const backlinksTypes = [
  'Redaktionelle Backlinks von Fachmedien',
  'Branchenverzeichnisse & Portale',
  'Gastartikel & Content Marketing Links',
  'Contentbasierte Verlinkungen',
  'Lokale Backlinks für Local SEO',
  'Thematisch relevante Nischen-Links',
  'Internationale Backlinks',
  'Autoritätslinks von starken Domains',
];

const linkBuildingPricingPlans = [
  {
    tier: 'Backlink Analyse',
    price: 'ab 200 €',
    features: ['Backlink Analyse', 'Konkurrenz Check', 'Probleme identifizieren', 'Strategieempfehlungen'],
    buttonText: 'Analyse anfragen',
    isHighlighted: false,
  },
  {
    tier: 'Basis Linkbuilding',
    price: 'ab 500 €',
    features: ['Linkbuilding Strategie', 'Erste Backlinks', 'Outreach & Aufbau', 'Implementierungsplan'],
    buttonText: 'Projekt starten',
    isHighlighted: true,
  },
  {
    tier: 'Monatliche Linkbuilding Betreuung',
    price: 'ab 700 €/Monat',
    features: ['Laufender Linkaufbau', 'Monatliche Backlinks', 'Link Monitoring', 'Wettbewerb-Analyse'],
    buttonText: 'Betreuung buchen',
    isHighlighted: false,
  },
];

const linkBuildingFaqs = [
  { question: 'Warum sind Backlinks wichtig?', answer: 'Backlinks stärken die Autorität Ihrer Website und verbessern Rankings bei Google. Sie sind einer der stärksten Ranking Faktoren.' },
  { question: 'Wie lange dauert Linkbuilding?', answer: 'Linkbuilding ist ein langfristiger Prozess. Erste Verbesserungen sind oft nach einigen Wochen sichtbar, nachhaltige Ergebnisse entstehen über Monate.' },
  { question: 'Was kostet professionelles Linkbuilding?', answer: 'Basis Linkbuilding beginnt ab 500€. Monatliche Betreuung ab 700€/Monat. Die genauen Kosten hängen von Ihrer Branche und Zielen ab.' },
  { question: 'Nutzen Sie sichere SEO Methoden?', answer: 'Ja. Wir setzen auf nachhaltige und Google-konforme Linkbuilding Strategien. Wir vermeiden manipulative Taktiken und toxische Links.' },
  { question: 'Werden toxische Links entfernt?', answer: 'Ja. Wir analysieren Ihr Linkprofil auf toxische Links und initiieren ggf. Disavow-Anfragen, um schädliche Backlinks zu entfernen.' },
];
</script>
