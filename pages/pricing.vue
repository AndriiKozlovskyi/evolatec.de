<template>
  <div>
    <!-- Hero -->
    <section class="relative bg-gradient-to-br from-primary via-primary to-primary-container text-on-primary overflow-hidden">
      <div class="absolute -top-40 -right-40 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none"></div>
      <div class="absolute -bottom-40 -left-40 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none"></div>

      <div class="relative max-w-container-max mx-auto px-gutter pt-10 pb-12 md:pt-20 md:pb-20 text-center">
        <span class="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.25em] text-white/70 mb-4">
          <span class="material-symbols-outlined text-base">calculate</span>
          Preisrechner
        </span>
        <h1 class="font-display text-3xl sm:text-4xl md:text-5xl font-black leading-tight mb-4">
          Was kostet Ihr Projekt?
        </h1>
        <p class="text-sm sm:text-base md:text-lg text-white/75 max-w-xl mx-auto leading-relaxed">
          Wählen Sie ein Paket, kalkulieren Sie individuell oder durchsuchen Sie unsere Einzelpreise.
        </p>
      </div>
    </section>

    <!-- Content -->
    <section class="bg-surface py-8 md:py-section-padding">
      <div class="max-w-4xl mx-auto px-gutter">

        <!-- Tabs -->
        <div class="flex bg-surface-container-low rounded-full p-1 mb-8 max-w-xl mx-auto shadow-inner">
          <button
            v-for="tab in tabs"
            :key="tab.id"
            @click="activeTab = tab.id"
            :class="[
              'flex-1 py-2.5 px-3 rounded-full text-sm font-bold flex items-center justify-center gap-2 min-h-[44px] transition-all duration-200',
              activeTab === tab.id
                ? 'bg-primary text-on-primary shadow-md'
                : 'text-on-surface-variant hover:text-primary',
            ]"
          >
            <span class="material-symbols-outlined text-lg">{{ tab.icon }}</span>
            <span class="hidden sm:inline">{{ tab.label }}</span>
            <span class="sm:hidden">{{ tab.shortLabel }}</span>
          </button>
        </div>

        <!-- ═══ PAKETE ═══ -->
        <div v-show="activeTab === 'pakete'" class="animate-fade-in-up">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            <div
              v-for="pkg in packages"
              :key="pkg.name"
              :class="[
                'relative bg-white rounded-2xl overflow-hidden border transition-all duration-300 hover:shadow-lg flex flex-col',
                pkg.popular ? 'border-primary shadow-md md:scale-[1.02]' : 'border-outline-variant/30',
              ]"
            >
              <div v-if="pkg.popular" class="bg-primary text-on-primary text-xs font-bold text-center py-2 tracking-widest uppercase">
                Beliebt
              </div>
              <div class="p-6 md:p-7 flex flex-col flex-1">
                <p class="text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-2">{{ pkg.name }}</p>
                <p class="font-display text-4xl md:text-5xl font-black text-primary leading-none mb-1">{{ pkg.price }}</p>
                <p class="text-xs text-on-surface-variant mb-6">einmalig, zzgl. MwSt.</p>
                <ul class="space-y-2.5 mb-6 flex-1">
                  <li v-for="feat in pkg.features" :key="feat" class="flex items-start gap-2 text-sm text-on-surface">
                    <span class="material-symbols-outlined text-primary text-base flex-shrink-0 mt-0.5">check_circle</span>
                    {{ feat }}
                  </li>
                </ul>
                <a href="/kontakt" class="block">
                  <BaseButton :variant="pkg.popular ? 'primary' : 'outline'" size="md" class="w-full">
                    Angebot anfordern
                  </BaseButton>
                </a>
              </div>
            </div>
          </div>
          <p class="text-center text-xs text-on-surface-variant mt-6">
            Individuelle Lösungen auf Anfrage · Werbebudget wird separat berechnet
          </p>
        </div>

        <!-- ═══ KALKULATOR ═══ -->
        <div v-show="activeTab === 'kalkulator'" class="animate-fade-in-up">
          <div class="bg-white rounded-2xl border border-outline-variant/30 shadow-sm overflow-hidden">

            <!-- Step 1: Category -->
            <div class="p-5 md:p-7">
              <div class="flex items-center gap-3 mb-5">
                <div class="w-8 h-8 rounded-full bg-primary text-on-primary flex items-center justify-center text-sm font-black flex-shrink-0">1</div>
                <div>
                  <p class="text-xs font-bold uppercase tracking-widest text-primary">Schritt 1</p>
                  <p class="text-base font-bold text-on-surface leading-none mt-0.5">Kategorie wählen</p>
                </div>
              </div>
              <div class="grid grid-cols-2 lg:grid-cols-4 gap-3">
                <button
                  v-for="(cat, i) in calcCategories"
                  :key="cat.id"
                  @click="selectCat(cat)"
                  :class="[
                    'group relative flex flex-col items-center text-center p-4 rounded-xl border-2 transition-all duration-200 min-h-[120px]',
                    calc.cat?.id === cat.id
                      ? 'border-primary bg-primary/5 shadow-md'
                      : 'border-outline-variant/30 hover:border-primary/40 hover:bg-surface-container-low',
                  ]"
                >
                  <span
                    v-if="calc.cat?.id === cat.id"
                    class="absolute top-2 right-2 material-symbols-outlined text-primary text-lg"
                  >check_circle</span>
                  <div
                    :class="[
                      'w-12 h-12 rounded-xl flex items-center justify-center mb-2 transition-colors',
                      calc.cat?.id === cat.id ? 'bg-primary text-on-primary' : accent(i).bg + ' ' + accent(i).text,
                    ]"
                  >
                    <span class="material-symbols-outlined text-xl">{{ cat.icon }}</span>
                  </div>
                  <p class="font-bold text-sm text-on-surface leading-tight">{{ cat.name }}</p>
                  <p class="text-xs text-on-surface-variant mt-1 leading-snug">{{ cat.desc }}</p>
                </button>
              </div>
            </div>

            <!-- Step 2: Type -->
            <template v-if="calc.cat">
              <div class="h-px bg-outline-variant/20 mx-5 md:mx-7"></div>
              <div class="p-5 md:p-7">
                <div class="flex items-center gap-3 mb-5">
                  <div class="w-8 h-8 rounded-full bg-primary text-on-primary flex items-center justify-center text-sm font-black flex-shrink-0">2</div>
                  <div>
                    <p class="text-xs font-bold uppercase tracking-widest text-primary">Schritt 2</p>
                    <p class="text-base font-bold text-on-surface leading-none mt-0.5">Typ auswählen</p>
                  </div>
                </div>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <button
                    v-for="type in calc.cat.types"
                    :key="type.id"
                    @click="selectType(type)"
                    :class="[
                      'group relative flex items-center gap-3 p-4 rounded-xl border-2 transition-all duration-200 text-left min-h-[72px]',
                      calc.type?.id === type.id
                        ? 'border-primary bg-primary/5 shadow-md'
                        : 'border-outline-variant/30 hover:border-primary/40 hover:bg-surface-container-low',
                    ]"
                  >
                    <div
                      :class="[
                        'w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors',
                        calc.type?.id === type.id ? 'bg-primary text-on-primary' : 'bg-primary/10 text-primary',
                      ]"
                    >
                      <span class="material-symbols-outlined text-lg">{{ type.icon }}</span>
                    </div>
                    <div class="flex-1 min-w-0">
                      <p class="font-bold text-sm text-on-surface leading-tight">{{ type.name }}</p>
                      <p class="text-xs text-on-surface-variant mt-0.5">{{ type.desc }}</p>
                    </div>
                    <div class="text-right flex-shrink-0">
                      <p class="text-[10px] text-on-surface-variant uppercase tracking-wider font-semibold">ab</p>
                      <p class="font-display text-base font-black text-primary leading-none">€{{ fmt(type.price) }}</p>
                    </div>
                  </button>
                </div>
              </div>
            </template>

            <!-- Step 3: Extras -->
            <template v-if="calc.type">
              <div class="h-px bg-outline-variant/20 mx-5 md:mx-7"></div>
              <div class="p-5 md:p-7">
                <div class="flex items-center gap-3 mb-5">
                  <div class="w-8 h-8 rounded-full bg-primary text-on-primary flex items-center justify-center text-sm font-black flex-shrink-0">3</div>
                  <div>
                    <p class="text-xs font-bold uppercase tracking-widest text-primary">Schritt 3</p>
                    <p class="text-base font-bold text-on-surface leading-none mt-0.5">Zusatzleistungen <span class="font-normal text-on-surface-variant">(optional)</span></p>
                  </div>
                </div>
                <div class="flex flex-wrap gap-2">
                  <button
                    v-for="extra in calc.cat!.extras"
                    :key="extra.id"
                    @click="toggleExtra(extra)"
                    :class="[
                      'inline-flex items-center gap-2 px-3 py-2 rounded-full border-2 text-sm font-semibold transition-all duration-200',
                      isExtraSel(extra)
                        ? 'border-primary bg-primary text-on-primary shadow-sm'
                        : 'border-outline-variant/40 bg-white text-on-surface hover:border-primary/40 hover:bg-primary/5',
                    ]"
                  >
                    <span class="material-symbols-outlined text-base">{{ isExtraSel(extra) ? 'check' : extra.icon }}</span>
                    {{ extra.name }}
                    <span :class="isExtraSel(extra) ? 'text-white/85' : 'text-on-surface-variant'" class="text-xs font-bold">+€{{ fmt(extra.price) }}</span>
                  </button>
                </div>
              </div>
            </template>

            <!-- Price summary -->
            <div v-if="calc.type" class="p-5 md:p-7 pt-0">
              <div class="relative bg-gradient-to-br from-primary to-primary-container text-on-primary rounded-xl p-5 md:p-7 shadow-lg overflow-hidden">
                <!-- decorative blob -->
                <div class="absolute -top-12 -right-12 w-40 h-40 bg-white/5 rounded-full blur-2xl pointer-events-none"></div>

                <div class="relative flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div>
                    <p class="text-xs font-bold uppercase tracking-widest text-white/70 mb-1.5">Geschätzte Kosten</p>
                    <p class="font-display text-4xl md:text-5xl font-black leading-none">
                      ab €{{ fmt(totalPrice) }}
                    </p>
                    <p class="text-xs text-white/70 mt-2">{{ priceNote }}</p>
                  </div>
                  <a href="/kontakt" class="w-full sm:w-auto">
                    <BaseButton variant="secondary" size="md" class="w-full sm:w-auto">
                      Angebot anfordern
                      <span class="material-symbols-outlined text-base">arrow_forward</span>
                    </BaseButton>
                  </a>
                </div>
              </div>
            </div>
            <div v-else class="px-5 md:px-7 pb-6 text-xs text-on-surface-variant text-center">
              Wählen Sie eine Kategorie und einen Typ, um den Preis zu berechnen.
            </div>

          </div>
        </div>

        <!-- ═══ EINZELPREISE ═══ -->
        <div v-show="activeTab === 'einzeln'" class="animate-fade-in-up">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
            <div
              v-for="(section, sIdx) in singlePrices"
              :key="section.title"
              class="bg-white rounded-2xl border border-outline-variant/30 shadow-sm overflow-hidden flex flex-col"
            >
              <!-- Colored accent strip -->
              <div class="h-1" :class="accent(sIdx).accent"></div>

              <div class="p-5 md:p-6 flex flex-col flex-1">
                <!-- Header -->
                <div class="flex items-center gap-3 mb-5">
                  <div
                    class="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                    :class="accent(sIdx).bg + ' ' + accent(sIdx).text"
                  >
                    <span class="material-symbols-outlined text-xl">{{ section.icon }}</span>
                  </div>
                  <h3 class="font-display text-xl sm:text-2xl font-black text-on-surface leading-tight">{{ section.title }}</h3>
                </div>

                <!-- Price rows -->
                <ul class="space-y-1 flex-1">
                  <li
                    v-for="row in section.rows"
                    :key="row.name"
                    class="flex items-center justify-between gap-3 py-2.5 px-3 -mx-3 rounded-lg hover:bg-surface-container-low transition-colors"
                  >
                    <span class="text-sm text-on-surface">{{ row.name }}</span>
                    <span class="text-sm sm:text-base font-black text-primary whitespace-nowrap">{{ row.price }}</span>
                  </li>
                </ul>

                <p v-if="section.note" class="text-xs text-on-surface-variant mt-4 italic">* {{ section.note }}</p>
              </div>
            </div>
          </div>
          <p class="text-center text-xs text-on-surface-variant mt-6">
            Alle Preise zzgl. MwSt. · Individuelle Projekte auf Anfrage
          </p>
        </div>

      </div>
    </section>

    <!-- CTA strip -->
    <section class="bg-surface-container-low py-10 md:py-14 border-t border-outline-variant/30">
      <div class="max-w-3xl mx-auto px-gutter text-center">
        <h2 class="font-display text-2xl sm:text-3xl md:text-4xl font-black text-on-surface mb-3 leading-tight">
          Nicht sicher, was Sie brauchen?
        </h2>
        <p class="text-sm sm:text-base text-on-surface-variant mb-6 max-w-xl mx-auto">
          Kostenlose Erstberatung — wir helfen Ihnen, das passende Paket zu finden.
        </p>
        <a href="/kontakt" class="inline-block">
          <BaseButton variant="primary" size="lg">
            <span class="material-symbols-outlined text-lg">event</span>
            Termin buchen
          </BaseButton>
        </a>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Preisrechner – Kosten schätzen | EvolaTec',
  meta: [
    { name: 'description', content: 'Berechnen Sie die Kosten für Website, SEO, Marketing und Design. Kostenloser Preisrechner von EvolaTec.' },
  ],
});

// ── Types ────────────────────────────────────────────────────────────────────
interface Extra     { id: string; icon: string; name: string; price: number }
interface CalcType  { id: string; icon: string; name: string; desc: string; price: number; note: string }
interface CalcCat   { id: string; icon: string; name: string; desc: string; types: CalcType[]; extras: Extra[] }

// ── Accent rotation (matches ProcessSection palette feel) ─────────────────────
const accentColors = [
  { bg: 'bg-sky-50',     text: 'text-sky-600',     accent: 'bg-sky-400'     },
  { bg: 'bg-emerald-50', text: 'text-emerald-600', accent: 'bg-emerald-400' },
  { bg: 'bg-violet-50',  text: 'text-violet-600',  accent: 'bg-violet-400'  },
  { bg: 'bg-amber-50',   text: 'text-amber-600',   accent: 'bg-amber-400'   },
] as const;
function accent(i: number) {
  return accentColors[i % accentColors.length]!;
}

// ── Tabs ─────────────────────────────────────────────────────────────────────
const activeTab = ref<'pakete' | 'kalkulator' | 'einzeln'>('pakete');

const tabs = [
  { id: 'pakete',     icon: 'package_2',  label: 'Pakete',       shortLabel: 'Pakete'     },
  { id: 'kalkulator', icon: 'calculate',  label: 'Kalkulator',   shortLabel: 'Rechner'    },
  { id: 'einzeln',    icon: 'list',       label: 'Einzelpreise', shortLabel: 'Preisliste' },
] as const;

// ── Packages ──────────────────────────────────────────────────────────────────
const packages = [
  {
    name: 'Landing Basis',
    price: '€1.000',
    popular: false,
    features: [
      'Landing Page',
      'Einzigartiges Design',
      'SEO Optimierung',
      'SEO Texte',
    ],
  },
  {
    name: 'Firmenwebsite PRO',
    price: '€3.000',
    popular: true,
    features: [
      'Firmenwebsite (5–20 Seiten)',
      'Einzigartiges Design',
      'UI/UX Design',
      'SEO Optimierung',
      'SEO Texte',
    ],
  },
  {
    name: 'Online Shop Premium',
    price: '€6.000',
    popular: false,
    features: [
      'Online Shop',
      'Einzigartiges Design',
      'UI/UX Design',
      'SEO Optimierung',
      'SEO Texte',
      'Google Ads (Budget getrennt)',
    ],
  },
];

// ── Calculator data ───────────────────────────────────────────────────────────
const calcCategories: CalcCat[] = [
  {
    id: 'web', icon: 'language', name: 'Website', desc: 'Entwicklung & Design',
    types: [
      { id: 'lp',  icon: 'draft',          name: 'Landing Page',        desc: 'Eine Seite, ein Ziel',  price: 500,  note: 'einmalig, zzgl. MwSt.' },
      { id: 'fw',  icon: 'web',            name: 'Unternehmenswebsite', desc: '5–20 Seiten',           price: 1500, note: 'einmalig, zzgl. MwSt.' },
      { id: 'sh',  icon: 'shopping_cart',  name: 'Online Shop',         desc: 'E-Commerce Lösung',     price: 3000, note: 'einmalig, zzgl. MwSt.' },
    ],
    extras: [
      { id: 'seo',      icon: 'search',    name: 'SEO Optimierung',          price: 300 },
      { id: 'seotxt',   icon: 'article',   name: 'SEO Texte (500 Wörter)',   price: 150 },
      { id: 'uiux',     icon: 'devices',   name: 'UI/UX Design',             price: 500 },
      { id: 'logo',     icon: 'title',     name: 'Logo Design',              price: 200 },
    ],
  },
  {
    id: 'seo', icon: 'trending_up', name: 'SEO', desc: 'Suchmaschinenoptimierung',
    types: [
      { id: 'audit', icon: 'zoom_in',      name: 'SEO Audit',        desc: 'Einmalige Analyse',    price: 100, note: 'einmalig, zzgl. MwSt.' },
      { id: 'opt',   icon: 'tune',         name: 'SEO Optimierung',  desc: 'Onpage & Technisch',   price: 300, note: 'einmalig, zzgl. MwSt.' },
      { id: 'local', icon: 'location_on',  name: 'Lokales SEO',      desc: 'Google Maps & lokal',  price: 400, note: 'einmalig, zzgl. MwSt.' },
      { id: 'link',  icon: 'link',         name: 'Linkbuilding',     desc: 'Backlinks aufbauen',   price: 100, note: 'einmalig, zzgl. MwSt.' },
    ],
    extras: [
      { id: 'report',  icon: 'bar_chart',  name: 'Monatliches Reporting',      price: 100 },
      { id: 'content', icon: 'article',    name: 'SEO Texte (500 Wörter)',     price: 150 },
    ],
  },
  {
    id: 'marketing', icon: 'campaign', name: 'Marketing', desc: 'Google Ads & Meta Ads',
    types: [
      { id: 'gads', icon: 'ads_click', name: 'Google Ads',    desc: 'Suchanzeigen & Display',  price: 400, note: 'pro Monat, zzgl. Werbebudget' },
      { id: 'meta', icon: 'groups',    name: 'Meta Ads',      desc: 'Facebook & Instagram',    price: 300, note: 'pro Monat, zzgl. Werbebudget' },
    ],
    extras: [
      { id: 'creative', icon: 'photo_camera', name: 'Creatives & Grafiken',    price: 150 },
      { id: 'report',   icon: 'pie_chart',    name: 'Monatliches Reporting',   price: 100 },
    ],
  },
  {
    id: 'design', icon: 'palette', name: 'Design', desc: 'Logo, Branding & UI/UX',
    types: [
      { id: 'logo',    icon: 'title',          name: 'Logo Design',       desc: 'Professionelles Logo',   price: 200,  note: 'einmalig, zzgl. MwSt.' },
      { id: 'cd',      icon: 'palette',        name: 'Corporate Design',  desc: 'CI, CD & Styleguide',    price: 1000, note: 'einmalig, zzgl. MwSt.' },
      { id: 'uiux',    icon: 'devices',        name: 'UI/UX Design',      desc: 'Interface & Prototyping',price: 500,  note: 'einmalig, zzgl. MwSt.' },
    ],
    extras: [
      { id: 'texte',   icon: 'article',          name: 'Texte (500 Wörter)',       price: 75  },
      { id: 'seotxt',  icon: 'article',          name: 'SEO Texte (500 Wörter)',   price: 150 },
      { id: 'sm',      icon: 'photo_camera',     name: 'Social Media Templates',   price: 150 },
    ],
  },
];

// ── Calculator state ──────────────────────────────────────────────────────────
const calc = reactive<{ cat: CalcCat | null; type: CalcType | null; extras: Extra[] }>({
  cat: null, type: null, extras: [],
});

function selectCat(cat: CalcCat) {
  calc.cat = cat; calc.type = null; calc.extras = [];
}
function selectType(type: CalcType) {
  calc.type = type; calc.extras = [];
}
function toggleExtra(extra: Extra) {
  const i = calc.extras.findIndex(e => e.id === extra.id);
  if (i > -1) calc.extras.splice(i, 1);
  else calc.extras.push(extra);
}
function isExtraSel(extra: Extra) {
  return calc.extras.some(e => e.id === extra.id);
}

const totalPrice = computed(() => {
  if (!calc.type) return 0;
  return calc.type.price + calc.extras.reduce((s, e) => s + e.price, 0);
});

const priceNote = computed(() => calc.type?.note ?? '');

function fmt(n: number) {
  return n.toLocaleString('de-DE');
}

// ── Individual prices ─────────────────────────────────────────────────────────
const singlePrices = [
  {
    title: 'Website',
    icon: 'language',
    note: null,
    rows: [
      { name: 'Landing Page',        price: 'ab €500'   },
      { name: 'Unternehmenswebsite', price: 'ab €1.500' },
      { name: 'Online Shop',         price: 'ab €3.000' },
    ],
  },
  {
    title: 'SEO',
    icon: 'trending_up',
    note: null,
    rows: [
      { name: 'SEO Audit',         price: 'ab €100' },
      { name: 'SEO Optimierung',   price: 'ab €300' },
      { name: 'Lokales SEO',       price: 'ab €400' },
      { name: 'Linkbuilding',      price: 'ab €100' },
    ],
  },
  {
    title: 'Marketing',
    icon: 'campaign',
    note: 'Werbebudget wird separat berechnet',
    rows: [
      { name: 'Google Ads Management', price: 'ab €400 / Mo' },
      { name: 'Meta Ads Management',   price: 'ab €300 / Mo' },
    ],
  },
  {
    title: 'Design & Content',
    icon: 'palette',
    note: null,
    rows: [
      { name: 'Logo Design',       price: 'ab €200'       },
      { name: 'Corporate Design',  price: 'ab €1.000'     },
      { name: 'UI/UX Design',      price: 'ab €500'       },
      { name: 'Texte',             price: '€0,15 / Wort'  },
      { name: 'SEO Texte',         price: '€0,30 / Wort'  },
    ],
  },
];
</script>

