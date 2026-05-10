<template>
  <div class="min-h-screen bg-surface-container-low pt-28 pb-24">
    <div class="max-w-[740px] mx-auto px-gutter">

      <!-- Header -->
      <div class="text-center mb-8">
        <span class="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-primary mb-3">
          <span class="material-symbols-outlined text-sm">calculate</span>
          Kostenrechner
        </span>
        <h1 class="font-display text-4xl md:text-5xl font-black text-on-surface mb-3">Preisrechner</h1>
        <p class="text-on-surface-variant text-sm">Unverbindliche Schätzung · Genaue Preise nach kostenlosem Erstgespräch</p>
      </div>

      <!-- Tabs -->
      <div class="flex gap-1.5 mb-6 bg-surface p-1.5 rounded-xl border border-outline-variant/20 shadow-sm">
        <button
          v-for="tab in tabs"
          :key="tab.id"
          @click="activeTab = tab.id"
          class="flex-1 py-2.5 px-3 rounded-lg text-sm font-medium flex items-center justify-center gap-2 transition-all duration-200"
          :class="activeTab === tab.id
            ? 'bg-surface-container-low text-on-surface shadow-sm border border-outline-variant/20'
            : 'text-on-surface-variant hover:text-on-surface'"
        >
          <span class="material-symbols-outlined text-base">{{ tab.icon }}</span>
          <span class="hidden sm:inline">{{ tab.label }}</span>
          <span class="sm:hidden">{{ tab.shortLabel }}</span>
        </button>
      </div>

      <!-- ═══ PANEL: PAKETE ═══ -->
      <div v-show="activeTab === 'pakete'">
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div
            v-for="pkg in packages"
            :key="pkg.name"
            class="bg-surface rounded-2xl border overflow-hidden transition-all duration-200 hover:shadow-md flex flex-col"
            :class="pkg.popular ? 'border-primary shadow-sm relative' : 'border-outline-variant/30'"
          >
            <div v-if="pkg.popular" class="bg-primary text-on-primary text-xs font-bold text-center py-1.5 tracking-wide">
              Beliebt
            </div>
            <div class="p-6 flex flex-col flex-1">
              <div class="text-sm font-semibold text-on-surface-variant mb-1">{{ pkg.name }}</div>
              <div class="font-display text-3xl font-black text-on-surface mb-0.5">{{ pkg.price }}</div>
              <div class="text-xs text-on-surface-variant mb-5">einmalig, zzgl. MwSt.</div>
              <ul class="space-y-2.5 flex-1">
                <li v-for="feat in pkg.features" :key="feat" class="flex items-start gap-2.5 text-sm text-on-surface-variant">
                  <span class="material-symbols-outlined text-primary text-base flex-shrink-0 mt-0.5">check_circle</span>
                  {{ feat }}
                </li>
              </ul>
              <a href="/kontakt" class="mt-6 block text-center bg-primary text-on-primary text-sm font-semibold rounded-xl py-2.5 hover:bg-primary/90 transition-colors">
                Angebot anfordern
              </a>
            </div>
          </div>
        </div>
        <p class="text-center text-xs text-on-surface-variant mt-5">
          Individuelle Lösungen auf Anfrage · Werbebudget für Marketing wird separat berechnet
        </p>
      </div>

      <!-- ═══ PANEL: KALKULATOR ═══ -->
      <div v-show="activeTab === 'kalkulator'">
        <div class="bg-surface rounded-2xl border border-outline-variant/20 shadow-sm overflow-hidden">

          <!-- Step 1: Category -->
          <div class="p-6 pb-0">
            <div class="step-label">1. Kategorie</div>
            <div class="grid grid-cols-2 gap-2.5">
              <button
                v-for="cat in calcCategories"
                :key="cat.id"
                @click="selectCat(cat)"
                class="opt-btn"
                :class="{ 'opt-btn--sel': calc.cat?.id === cat.id }"
              >
                <span class="material-symbols-outlined opt-icon">{{ cat.icon }}</span>
                <div class="text-left">
                  <div class="opt-name">{{ cat.name }}</div>
                  <div class="opt-desc">{{ cat.desc }}</div>
                </div>
              </button>
            </div>
          </div>

          <!-- Step 2: Type -->
          <template v-if="calc.cat">
            <div class="divider" />
            <div class="p-6 pb-0">
              <div class="step-label">2. Typ</div>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                <button
                  v-for="type in calc.cat.types"
                  :key="type.id"
                  @click="selectType(type)"
                  class="opt-btn"
                  :class="{ 'opt-btn--sel': calc.type?.id === type.id }"
                >
                  <span class="material-symbols-outlined opt-icon">{{ type.icon }}</span>
                  <div class="text-left flex-1">
                    <div class="opt-name">{{ type.name }}</div>
                    <div class="opt-desc">{{ type.desc }}</div>
                  </div>
                  <span class="opt-price">ab €{{ fmt(type.price) }}</span>
                </button>
              </div>
            </div>
          </template>

          <!-- Step 3: Extras -->
          <template v-if="calc.type">
            <div class="divider" />
            <div class="p-6 pb-0">
              <div class="step-label">3. Zusatzleistungen</div>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                <button
                  v-for="extra in calc.cat!.extras"
                  :key="extra.id"
                  @click="toggleExtra(extra)"
                  class="opt-btn"
                  :class="{ 'opt-btn--sel': isExtraSel(extra) }"
                >
                  <span class="material-symbols-outlined opt-icon">{{ extra.icon }}</span>
                  <div class="text-left flex-1">
                    <div class="opt-name">{{ extra.name }}</div>
                  </div>
                  <span class="opt-price">+€{{ fmt(extra.price) }}</span>
                </button>
              </div>
            </div>
          </template>

          <!-- Price box -->
          <div v-if="calc.type" class="p-6 pt-5">
            <div class="bg-blue-50 border border-blue-200 rounded-xl p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <div class="text-xs font-bold uppercase tracking-wider text-blue-600 mb-1.5">Geschätzte Kosten</div>
                <div class="font-display text-[2.25rem] font-black text-on-surface leading-none">ab €{{ fmt(totalPrice) }}</div>
                <div class="text-xs text-on-surface-variant mt-1.5">{{ priceNote }}</div>
              </div>
              <a href="/kontakt" class="flex items-center gap-2 bg-blue-600 text-white font-semibold text-sm px-5 py-3 rounded-xl hover:bg-blue-700 transition-colors whitespace-nowrap">
                Angebot anfordern
                <span class="material-symbols-outlined text-base">arrow_forward</span>
              </a>
            </div>
          </div>
          <div v-else class="px-6 pb-6 pt-3 text-xs text-on-surface-variant text-center">
            Wählen Sie eine Kategorie und einen Typ, um den Preis zu berechnen.
          </div>

        </div>
      </div>

      <!-- ═══ PANEL: EINZELPREISE ═══ -->
      <div v-show="activeTab === 'einzeln'">
        <div class="bg-surface rounded-2xl border border-outline-variant/20 shadow-sm divide-y divide-outline-variant/15">
          <div v-for="section in singlePrices" :key="section.title" class="p-6">
            <div class="flex items-center gap-2 text-sm font-semibold text-on-surface-variant mb-4">
              <span class="material-symbols-outlined text-base text-primary">{{ section.icon }}</span>
              {{ section.title }}
            </div>
            <table class="w-full">
              <tbody>
                <tr
                  v-for="row in section.rows"
                  :key="row.name"
                  class="border-b border-outline-variant/10 last:border-0"
                >
                  <td class="py-2.5 text-sm text-on-surface">{{ row.name }}</td>
                  <td class="py-2.5 text-sm font-semibold text-primary text-right whitespace-nowrap">{{ row.price }}</td>
                </tr>
              </tbody>
            </table>
            <p v-if="section.note" class="text-xs text-on-surface-variant mt-3">* {{ section.note }}</p>
          </div>
        </div>
        <p class="text-center text-xs text-on-surface-variant mt-5">
          Alle Preise zzgl. MwSt. · Individuelle Projekte auf Anfrage
        </p>
      </div>

    </div>
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

<style scoped>
.step-label {
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.07em;
  color: var(--color-on-surface-variant, #888);
  margin-bottom: 10px;
  margin-top: 0;
}

.opt-btn {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 11px 13px;
  border: 0.5px solid rgba(0,0,0,0.12);
  border-radius: 10px;
  background: white;
  cursor: pointer;
  text-align: left;
  transition: border-color 0.15s, background 0.15s;
  width: 100%;
}
.opt-btn:hover {
  background: #f9f9f7;
}
.opt-btn--sel {
  border: 2px solid #2563eb;
  background: #eff6ff;
}

.opt-icon {
  font-size: 18px;
  color: #bbb;
  flex-shrink: 0;
  font-family: 'Material Symbols Outlined';
}
.opt-btn--sel .opt-icon {
  color: #2563eb;
}

.opt-name {
  font-size: 13px;
  font-weight: 500;
  color: #1a1a1a;
}
.opt-desc {
  font-size: 11px;
  color: #aaa;
  margin-top: 1px;
}
.opt-price {
  margin-left: auto;
  font-size: 12px;
  font-weight: 500;
  color: #aaa;
  white-space: nowrap;
  flex-shrink: 0;
}
.opt-btn--sel .opt-price {
  color: #2563eb;
}

.divider {
  height: 0.5px;
  background: rgba(0,0,0,0.07);
  margin: 1.25rem 1.5rem 0;
}
</style>
