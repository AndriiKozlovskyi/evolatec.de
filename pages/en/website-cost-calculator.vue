<template>
  <div>
    <!-- Hero -->
    <section class="relative bg-gradient-to-br from-primary via-primary to-primary-container text-on-primary overflow-hidden">
      <div class="absolute -top-40 -right-40 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none"></div>
      <div class="absolute -bottom-40 -left-40 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none"></div>

      <div class="relative max-w-container-max mx-auto px-gutter pt-10 pb-12 md:pt-20 md:pb-20 text-center">
        <span class="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.25em] text-white/70 mb-4">
          <span class="material-symbols-outlined text-base">calculate</span>
          Price Calculator
        </span>
        <h1 class="font-display text-3xl sm:text-4xl md:text-5xl font-black leading-tight mb-4">
          What Does Your Project Cost?
        </h1>
        <p class="text-sm sm:text-base md:text-lg text-white/75 max-w-xl mx-auto leading-relaxed">
          Choose a package, calculate individually or browse our individual prices.
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

        <!-- ═══ PACKAGES ═══ -->
        <div v-show="activeTab === 'packages'" class="animate-fade-in-up">
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
                Popular
              </div>
              <div class="p-6 md:p-7 flex flex-col flex-1">
                <p class="text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-2">{{ pkg.name }}</p>
                <p class="font-display text-4xl md:text-5xl font-black text-primary leading-none mb-1">{{ pkg.price }}</p>
                <p class="text-xs text-on-surface-variant mb-6">one-off, excl. VAT</p>
                <ul class="space-y-2.5 mb-6 flex-1">
                  <li v-for="feat in pkg.features" :key="feat" class="flex items-start gap-2 text-sm text-on-surface">
                    <span class="material-symbols-outlined text-primary text-base flex-shrink-0 mt-0.5">check_circle</span>
                    {{ feat }}
                  </li>
                </ul>
                <NuxtLink to="/en/contact" class="block">
                  <BaseButton :variant="pkg.popular ? 'primary' : 'outline'" size="md" class="w-full">
                    Request Quote
                  </BaseButton>
                </NuxtLink>
              </div>
            </div>
          </div>
          <p class="text-center text-xs text-on-surface-variant mt-6">
            Custom solutions available on request · Advertising budget calculated separately
          </p>
        </div>

        <!-- ═══ CALCULATOR ═══ -->
        <div v-show="activeTab === 'calculator'" class="animate-fade-in-up">
          <div class="bg-white rounded-2xl border border-outline-variant/30 shadow-sm overflow-hidden">

            <!-- Step 1: Category -->
            <div class="p-5 md:p-7">
              <div class="flex items-center gap-3 mb-5">
                <div class="w-8 h-8 rounded-full bg-primary text-on-primary flex items-center justify-center text-sm font-black flex-shrink-0">1</div>
                <div>
                  <p class="text-xs font-bold uppercase tracking-widest text-primary">Step 1</p>
                  <p class="text-base font-bold text-on-surface leading-none mt-0.5">Choose category</p>
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
                    <p class="text-xs font-bold uppercase tracking-widest text-primary">Step 2</p>
                    <p class="text-base font-bold text-on-surface leading-none mt-0.5">Select type</p>
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
                      <p class="text-[10px] text-on-surface-variant uppercase tracking-wider font-semibold">from</p>
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
                    <p class="text-xs font-bold uppercase tracking-widest text-primary">Step 3</p>
                    <p class="text-base font-bold text-on-surface leading-none mt-0.5">Add-ons <span class="font-normal text-on-surface-variant">(optional)</span></p>
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
                <div class="absolute -top-12 -right-12 w-40 h-40 bg-white/5 rounded-full blur-2xl pointer-events-none"></div>
                <div class="relative flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div>
                    <p class="text-xs font-bold uppercase tracking-widest text-white/70 mb-1.5">Estimated Cost</p>
                    <p class="font-display text-4xl md:text-5xl font-black leading-none">
                      from €{{ fmt(totalPrice) }}
                    </p>
                    <p class="text-xs text-white/70 mt-2">{{ priceNote }}</p>
                  </div>
                  <NuxtLink to="/en/contact" class="w-full sm:w-auto">
                    <BaseButton variant="secondary" size="md" class="w-full sm:w-auto">
                      Request Quote
                      <span class="material-symbols-outlined text-base">arrow_forward</span>
                    </BaseButton>
                  </NuxtLink>
                </div>
              </div>
            </div>
            <div v-else class="px-5 md:px-7 pb-6 text-xs text-on-surface-variant text-center">
              Select a category and type to calculate the price.
            </div>

          </div>
        </div>

        <!-- ═══ INDIVIDUAL PRICES ═══ -->
        <div v-show="activeTab === 'individual'" class="animate-fade-in-up">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
            <div
              v-for="(section, sIdx) in singlePrices"
              :key="section.title"
              class="bg-white rounded-2xl border border-outline-variant/30 shadow-sm overflow-hidden flex flex-col"
            >
              <div class="h-1" :class="accent(sIdx).accent"></div>
              <div class="p-5 md:p-6 flex flex-col flex-1">
                <div class="flex items-center gap-3 mb-5">
                  <div
                    class="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                    :class="accent(sIdx).bg + ' ' + accent(sIdx).text"
                  >
                    <span class="material-symbols-outlined text-xl">{{ section.icon }}</span>
                  </div>
                  <h3 class="font-display text-xl sm:text-2xl font-black text-on-surface leading-tight">{{ section.title }}</h3>
                </div>
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
            All prices excl. VAT · Custom projects available on request
          </p>
        </div>

      </div>
    </section>

    <!-- CTA strip -->
    <section class="bg-surface-container-low py-10 md:py-14 border-t border-outline-variant/30">
      <div class="max-w-3xl mx-auto px-gutter text-center">
        <h2 class="font-display text-2xl sm:text-3xl md:text-4xl font-black text-on-surface mb-3 leading-tight">
          Not sure what you need?
        </h2>
        <p class="text-sm sm:text-base text-on-surface-variant mb-6 max-w-xl mx-auto">
          Free initial consultation — we help you find the right package.
        </p>
        <NuxtLink to="/en/contact" class="inline-block">
          <BaseButton variant="primary" size="lg">
            <span class="material-symbols-outlined text-lg">event</span>
            Book Appointment
          </BaseButton>
        </NuxtLink>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const { hreflangLinks } = useLanguageSwitcher();

useHead({
  title: 'Price Calculator – Estimate Costs | EvolaTec',
  htmlAttrs: { lang: 'en' },
  meta: [
    {
      name: 'description',
      content: 'Calculate the costs for website, SEO, marketing and design. Free price calculator by EvolaTec.',
    },
    { property: 'og:title', content: 'Price Calculator | EvolaTec' },
    { property: 'og:description', content: 'Estimate costs for your website, SEO, marketing and design project.' },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://evolatec.de/en/website-cost-calculator' },
    { property: 'og:locale', content: 'en_US' },
    { property: 'og:locale:alternate', content: 'de_DE' },
  ],
  link: [
    { rel: 'canonical', href: 'https://evolatec.de/en/website-cost-calculator' },
    ...hreflangLinks.value,
  ],
});

interface Extra    { id: string; icon: string; name: string; price: number }
interface CalcType { id: string; icon: string; name: string; desc: string; price: number; note: string }
interface CalcCat  { id: string; icon: string; name: string; desc: string; types: CalcType[]; extras: Extra[] }

const accentColors = [
  { bg: 'bg-sky-50',     text: 'text-sky-600',     accent: 'bg-sky-400'     },
  { bg: 'bg-emerald-50', text: 'text-emerald-600', accent: 'bg-emerald-400' },
  { bg: 'bg-violet-50',  text: 'text-violet-600',  accent: 'bg-violet-400'  },
  { bg: 'bg-amber-50',   text: 'text-amber-600',   accent: 'bg-amber-400'   },
] as const;
function accent(i: number) {
  return accentColors[i % accentColors.length]!;
}

const activeTab = ref<'packages' | 'calculator' | 'individual'>('packages');

const tabs = [
  { id: 'packages',   icon: 'package_2',  label: 'Packages',        shortLabel: 'Packages'  },
  { id: 'calculator', icon: 'calculate',  label: 'Calculator',      shortLabel: 'Calc'      },
  { id: 'individual', icon: 'list',       label: 'Individual Prices', shortLabel: 'Prices'  },
] as const;

const packages = [
  {
    name: 'Landing Basis',
    price: '€1,000',
    popular: false,
    features: [
      'Landing Page',
      'Unique Design',
      'SEO Optimisation',
      'SEO Copy',
    ],
  },
  {
    name: 'Business Website PRO',
    price: '€3,000',
    popular: true,
    features: [
      'Business Website (5–20 pages)',
      'Unique Design',
      'UI/UX Design',
      'SEO Optimisation',
      'SEO Copy',
    ],
  },
  {
    name: 'Online Shop Premium',
    price: '€6,000',
    popular: false,
    features: [
      'Online Shop',
      'Unique Design',
      'UI/UX Design',
      'SEO Optimisation',
      'SEO Copy',
      'Google Ads (budget separate)',
    ],
  },
];

const calcCategories: CalcCat[] = [
  {
    id: 'web', icon: 'language', name: 'Website', desc: 'Development & Design',
    types: [
      { id: 'lp',  icon: 'draft',         name: 'Landing Page',      desc: 'One page, one goal', price: 500,  note: 'one-off, excl. VAT' },
      { id: 'fw',  icon: 'web',           name: 'Business Website',  desc: '5–20 pages',         price: 1500, note: 'one-off, excl. VAT' },
      { id: 'sh',  icon: 'shopping_cart', name: 'Online Shop',       desc: 'E-Commerce solution', price: 3000, note: 'one-off, excl. VAT' },
    ],
    extras: [
      { id: 'seo',    icon: 'search',  name: 'SEO Optimisation',        price: 300 },
      { id: 'seotxt', icon: 'article', name: 'SEO Copy (500 words)',     price: 150 },
      { id: 'uiux',   icon: 'devices', name: 'UI/UX Design',            price: 500 },
      { id: 'logo',   icon: 'title',   name: 'Logo Design',             price: 200 },
    ],
  },
  {
    id: 'seo', icon: 'trending_up', name: 'SEO', desc: 'Search Engine Optimisation',
    types: [
      { id: 'audit', icon: 'zoom_in',     name: 'SEO Audit',        desc: 'One-off analysis',      price: 100, note: 'one-off, excl. VAT' },
      { id: 'opt',   icon: 'tune',        name: 'SEO Optimisation', desc: 'On-page & technical',   price: 300, note: 'one-off, excl. VAT' },
      { id: 'local', icon: 'location_on', name: 'Local SEO',        desc: 'Google Maps & local',   price: 400, note: 'one-off, excl. VAT' },
      { id: 'link',  icon: 'link',        name: 'Link Building',    desc: 'Build backlinks',       price: 100, note: 'one-off, excl. VAT' },
    ],
    extras: [
      { id: 'report',  icon: 'bar_chart', name: 'Monthly Reporting',          price: 100 },
      { id: 'content', icon: 'article',   name: 'SEO Copy (500 words)',       price: 150 },
    ],
  },
  {
    id: 'marketing', icon: 'campaign', name: 'Marketing', desc: 'Google Ads & Meta Ads',
    types: [
      { id: 'gads', icon: 'ads_click', name: 'Google Ads', desc: 'Search & Display ads', price: 400, note: 'per month, excl. ad budget' },
      { id: 'meta', icon: 'groups',    name: 'Meta Ads',   desc: 'Facebook & Instagram', price: 300, note: 'per month, excl. ad budget' },
    ],
    extras: [
      { id: 'creative', icon: 'photo_camera', name: 'Creatives & Graphics', price: 150 },
      { id: 'report',   icon: 'pie_chart',    name: 'Monthly Reporting',    price: 100 },
    ],
  },
  {
    id: 'design', icon: 'palette', name: 'Design', desc: 'Logo, Branding & UI/UX',
    types: [
      { id: 'logo', icon: 'title',   name: 'Logo Design',      desc: 'Professional logo',        price: 200,  note: 'one-off, excl. VAT' },
      { id: 'cd',   icon: 'palette', name: 'Corporate Design', desc: 'CI, CD & Style guide',     price: 1000, note: 'one-off, excl. VAT' },
      { id: 'uiux', icon: 'devices', name: 'UI/UX Design',     desc: 'Interface & prototyping',  price: 500,  note: 'one-off, excl. VAT' },
    ],
    extras: [
      { id: 'texte',  icon: 'article',      name: 'Copy (500 words)',        price: 75  },
      { id: 'seotxt', icon: 'article',      name: 'SEO Copy (500 words)',    price: 150 },
      { id: 'sm',     icon: 'photo_camera', name: 'Social Media Templates', price: 150 },
    ],
  },
];

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
  return n.toLocaleString('en-US');
}

const singlePrices = [
  {
    title: 'Website',
    icon: 'language',
    note: null,
    rows: [
      { name: 'Landing Page',         price: 'from €500'   },
      { name: 'Business Website',     price: 'from €1,500' },
      { name: 'Online Shop',          price: 'from €3,000' },
      { name: 'Premium E-Commerce',   price: 'from €6,000' },
    ],
  },
  {
    title: 'SEO',
    icon: 'trending_up',
    note: null,
    rows: [
      { name: 'SEO Audit',              price: 'from €100'      },
      { name: 'SEO Optimisation',       price: 'from €300'      },
      { name: 'Local SEO',              price: 'from €400'      },
      { name: 'Link Building',          price: 'from €100'      },
      { name: 'SEO Management',         price: 'from €300 / mo' },
      { name: 'Local SEO Management',   price: 'from €300 / mo' },
      { name: 'Link Building Management', price: 'from €700 / mo' },
    ],
  },
  {
    title: 'Marketing',
    icon: 'campaign',
    note: 'Advertising budget calculated separately',
    rows: [
      { name: 'Marketing Consulting',   price: 'from €90 / hr' },
      { name: 'Google Ads Management',  price: 'from €400 / mo' },
      { name: 'Meta Ads Management',    price: 'from €300 / mo' },
      { name: 'Creatives & Graphics',   price: 'from €150'      },
      { name: 'Content Production',     price: 'from €300'      },
      { name: 'Monthly Reporting',      price: 'from €100 / mo' },
    ],
  },
  {
    title: 'Design & Content',
    icon: 'palette',
    note: null,
    rows: [
      { name: 'Logo Design',              price: 'from €200'      },
      { name: 'Corporate Design',         price: 'from €1,000'    },
      { name: 'Rebranding & Relaunch',    price: 'from €2,000'    },
      { name: 'UI/UX Design',             price: 'from €500'      },
      { name: 'Social Media Templates',   price: 'from €150'      },
      { name: 'Copy',                     price: '€0.15 / word'   },
      { name: 'SEO Copy',                 price: '€0.30 / word'   },
      { name: 'Landing Page Copywriting', price: 'from €250'      },
      { name: 'Full Website Content',     price: 'from €700'      },
    ],
  },
];
</script>
