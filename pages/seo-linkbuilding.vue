<template>
  <div>
    <HeroSection
      background-image="/seo/link.webp"
      badge="Professionelle Linkbuilding Agentur"
      title="Linkbuilding & Backlink Aufbau: Mehr Autorität für Ihre Website"
      description="Hochwertige Backlinks zählen zu den wichtigsten Google Rankingfaktoren. Wir helfen Unternehmen dabei, eine starke SEO-Autorität aufzubauen und bessere Rankings zu erreichen."
      primaryCTA="Linkbuilding starten"
      secondaryCTA="Preise ansehen"
      :stats="linkBuildingStats"
    />

    <BenefitsSection
      title="Warum professionelles Linkbuilding entscheidend ist"
      :benefits="benefits"
    />

    <FeaturesSection
      title="Unsere Linkbuilding Leistungen"
      :features="features"
      image-url="/web-development/seo.webp"
    />

        <ProcessSection
      title="So funktioniert unser Linkbuilding"
      :steps="processSteps"
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

    <RelatedServicesSection
      eyebrow="Website & Entwicklung"
      title="Starke Backlinks brauchen eine starke Website als Ziel"
      :services="relatedServices"
    />

    <CTASection
      title="Stärken Sie Ihre SEO Autorität"
      description="Professioneller Backlink Aufbau für bessere Rankings und mehr Sichtbarkeit bei Google."
      primary-cta="Linkbuilding starten"
      secondary-cta="Kostenlos beraten lassen"
    />
  </div>
</template>

<script setup lang="ts">
import { buildSchema, organizationSchema, websiteSchema, pageSchema } from '~/composables/schema/global'
import { serviceSchema, breadcrumbSchema, faqSchema } from '~/composables/schema/service'
const { hreflangLinks } = useLanguageSwitcher();

const linkBuildingFaqs = [
  {
    question: 'Warum sind Backlinks für SEO wichtig?',
    answer:
      'Backlinks stärken die Autorität Ihrer Website und verbessern Rankings bei Google. Sie zählen zu den wichtigsten Rankingfaktoren – je relevanter und autoritativer die verlinkende Domain, desto stärker der Effekt auf Ihre Rankings.',
  },
  {
    question: 'Was kostet professionelles Linkbuilding?',
    answer:
      'Linkbuilding beginnt bei EvolaTec ab 100€. Monatliche Linkbuilding-Betreuung mit laufendem Backlink-Aufbau ab 700€/Monat. Die genauen Kosten hängen von Ihrer Branche und Ihren Zielen ab.',
  },
  {
    question: 'Wie lange dauert Linkbuilding bis zu Ergebnissen?',
    answer:
      'Linkbuilding ist ein langfristiger Prozess. Erste Verbesserungen sind oft nach einigen Wochen sichtbar, nachhaltige Ergebnisse entstehen über Monate. Wer regelmäßig hochwertige Backlinks aufbaut, baut einen langfristigen Wettbewerbsvorteil auf.',
  },
  {
    question: 'Welche Arten von Backlinks bauen Sie auf?',
    answer:
      'Wir konzentrieren uns auf hochwertige, themenrelevante Backlinks: redaktionelle Erwähnungen, Gastartikel, Brancheneinträge, Content-basierte Links und lokale Backlinks. Wir vermeiden gekaufte Massen-Links und andere Methoden, die Ihrer Website langfristig schaden.',
  },
  {
    question: 'Nutzen Sie sichere, Google-konforme Linkbuilding Methoden?',
    answer:
      'Ja, wir setzen ausschließlich auf nachhaltige und Google-konforme Linkbuilding-Strategien. Manipulative Taktiken und toxische Links vermeiden wir – solche Methoden führen zu Ranking-Verlusten oder Google-Strafen.',
  },
  {
    question: 'Werden toxische Backlinks erkannt und entfernt?',
    answer:
      'Ja, wir analysieren Ihr Linkprofil auf toxische Links und initiieren bei Bedarf Disavow-Anfragen bei Google Search Console, um schädliche Backlinks bei der Bewertung Ihrer Website auszuschließen.',
  },
  {
    question: 'Wie viele Backlinks brauche ich für ein gutes Ranking?',
    answer:
      'Die Anzahl ist weniger entscheidend als die Qualität. Wenige hochwertige Backlinks von autoritativen, themenrelevanten Domains sind wirkungsvoller als viele schwache Links. Wir bauen ein Profil mit dem richtigen Mix aus Authority, Relevanz und natürlichem Wachstum auf.',
  },
];

const schemaMarkup = buildSchema(
  organizationSchema(),
  websiteSchema(),
  pageSchema({ url: 'https://evolatec.de/seo-linkbuilding', name: 'Linkbuilding Agentur – Backlinks & SEO Autorität aufbauen | EvolaTec', description: 'Professionelles Linkbuilding für bessere Google Rankings. Hochwertige Backlinks, Outreach und SEO Autorität. Linkbuilding ab 100€.' }),
  serviceSchema({ id: 'https://evolatec.de/seo-linkbuilding/#service', name: 'Linkbuilding', description: 'Hochwertige Backlinks und Outreach für mehr Domain-Autorität und bessere Google Rankings.', url: 'https://evolatec.de/seo-linkbuilding', serviceType: 'Linkbuilding', minPrice: 100 }),
  breadcrumbSchema([{ name: 'Home', url: 'https://evolatec.de' }, { name: 'SEO', url: 'https://evolatec.de/seo' }, { name: 'Linkbuilding', url: 'https://evolatec.de/seo-linkbuilding' }]),
  faqSchema(linkBuildingFaqs),
);

useHead({
  title: 'Linkbuilding Agentur – Backlinks & SEO Autorität aufbauen | EvolaTec',
  meta: [
    { name: 'description', content: 'Professionelles Linkbuilding für bessere Google Rankings. Hochwertige Backlinks, Outreach und SEO Autorität. Linkbuilding ab 100€.' },
  ],
  link: [
    { rel: 'canonical', href: 'https://evolatec.de/seo-linkbuilding' },
    ...hreflangLinks.value,
  ],
  script: [{ type: 'application/ld+json', innerHTML: JSON.stringify(schemaMarkup) }],
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
    title: 'Mehr Domain-Autorität',
    description: 'Hochwertige Backlinks von relevanten und vertrauenswürdigen Websites stärken die Autorität Ihrer Domain dauerhaft.',
    bg: 'bg-gradient-to-br from-emerald-600 to-teal-800',
    image: '/web-development/seo.webp',
  },
  {
    icon: 'trending_up',
    title: 'Bessere Google Rankings',
    description: 'Backlinks zählen zu den stärksten Ranking-Faktoren. Mehr Autorität bedeutet bessere Positionen bei Google.',
    bg: 'bg-gradient-to-br from-blue-600 to-blue-800',
    image: '/main/seo.webp',
  },
  {
    icon: 'schedule',
    title: 'Langfristige Wirkung',
    description: 'Gute Backlinks wirken langfristig positiv und liefern kontinuierlich mehr organischen Traffic.',
    bg: 'bg-gradient-to-br from-amber-500 to-orange-600',
    image: '/landing/seo.webp',
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
    description: 'Erstellung einer individuellen Linkbuilding Strategie, die zu Ihrer Branche passt.',
  },
  {
    icon: 'people',
    title: 'Outreach',
    description: 'Kontaktaufbau mit relevanten Websites, Medien und Partnern.',
  },
  {
    icon: 'link',
    title: 'Linkaufbau',
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
    description: 'Content-basierter Linkaufbau über hochwertige Gastbeiträge und Artikel.',
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
  'Content-basierte Verlinkungen',
  'Lokale Backlinks für Local SEO',
  'Thematisch relevante Nischen-Links',
  'Internationale Backlinks',
  'Autoritätslinks von starken Domains',
];

const linkBuildingPricingPlans = [
  {
    tier: 'Backlink Analyse',
    price: 'ab 100 €',
    features: [
      'Backlink Audit',
      'Konkurrenz Check',
      'Probleme identifizieren',
      'Strategieempfehlungen',
    ],
    buttonText: 'Analyse anfragen',
    isHighlighted: false,
  },
  {
    tier: 'Basis Linkbuilding',
    price: 'ab 500 €',
    features: [
      'Alles aus Backlink Analyse',
      'Linkbuilding Strategie',
      'Erste Backlinks',
      'Outreach & Aufbau',
    ],
    buttonText: 'Projekt starten',
    isHighlighted: true,
  },
  {
    tier: 'Monatliche Linkbuilding Betreuung',
    price: 'ab 700 €/Monat',
    features: [
      'Laufender Linkaufbau',
      'Monatliche neue Backlinks',
      'Link Monitoring',
      'Wettbewerbsanalyse',
    ],
    buttonText: 'Betreuung buchen',
    isHighlighted: false,
  },
];

const relatedServices = [
  { icon: 'language', title: 'Firmenwebsite erstellen lassen', description: 'Backlinks entfalten ihre Wirkung nur bei einer technisch sauberen, schnellen Firmenwebsite.', price: 'ab 1.500 €', href: '/firmenwebsite-erstellen-lassen' },
  { icon: 'article', title: 'Landingpage erstellen lassen', description: 'Professionelle Landingpages als Linkziele — für maximale Conversion und SEO Wirkung.', price: 'ab 500 €', href: '/landingpage-erstellen-lassen' },
  { icon: 'shopping_bag', title: 'Online-Shop erstellen lassen', description: 'E-Commerce mit starkem SEO-Fundament — für Backlinks, die zu mehr Umsatz führen.', price: 'ab 3.000 €', href: '/online-shop-erstellen-lassen' },
];

</script>
