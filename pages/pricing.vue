<template>
  <div class="min-h-screen bg-surface-container-low pt-28 pb-20 px-gutter">
    <div class="max-w-2xl mx-auto">

      <!-- Header -->
      <div class="mb-10">
        <span class="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary mb-3">
          <span class="material-symbols-outlined text-sm">calculate</span>
          Kostenrechner
        </span>
        <h1 class="font-display text-4xl md:text-5xl font-black text-on-surface mb-3">Preisrechner</h1>
        <p class="font-body-lg text-on-surface-variant">Wählen Sie Ihre gewünschten Leistungen und erhalten Sie sofort eine Schätzung.</p>
      </div>

      <!-- Calculator Card -->
      <div class="bg-surface rounded-2xl border border-outline-variant/30 shadow-sm p-8">

        <!-- Step 1: Category -->
        <div class="step-label">1. Dienstleistung wählen</div>
        <div class="grid grid-cols-2 gap-3 mb-8">
          <button
            v-for="cat in categories"
            :key="cat.id"
            @click="selectCategory(cat)"
            class="opt-btn group"
            :class="{ selected: state.cat?.id === cat.id }"
          >
            <span class="material-symbols-outlined opt-icon">{{ cat.icon }}</span>
            <div class="text-left">
              <div class="opt-name">{{ cat.name }}</div>
              <div class="opt-desc">{{ cat.desc }}</div>
            </div>
          </button>
        </div>

        <template v-if="state.cat">
          <div class="divider" />

          <!-- Step 2: Type -->
          <div class="step-label">2. {{ state.cat.typeLabel }}</div>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
            <button
              v-for="type in state.cat.types"
              :key="type.id"
              @click="selectType(type)"
              class="opt-btn"
              :class="{ selected: state.type?.id === type.id }"
            >
              <span class="material-symbols-outlined opt-icon">{{ type.icon }}</span>
              <div class="text-left flex-1">
                <div class="opt-name">{{ type.name }}</div>
                <div class="opt-desc">{{ type.desc }}</div>
              </div>
              <span class="opt-price">{{ type.label }}</span>
            </button>
          </div>
        </template>

        <template v-if="state.type">
          <div class="divider" />

          <!-- Step 3: Scope -->
          <div class="step-label">3. {{ state.cat?.scopeLabel }}</div>
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
            <button
              v-for="scope in state.cat?.scopes"
              :key="scope.id"
              @click="selectScope(scope)"
              class="opt-btn"
              :class="{ selected: state.scope?.id === scope.id }"
            >
              <span class="material-symbols-outlined opt-icon">{{ scope.icon }}</span>
              <div class="text-left flex-1">
                <div class="opt-name">{{ scope.name }}</div>
                <div class="opt-desc">{{ scope.desc }}</div>
              </div>
              <span class="opt-price">{{ scope.label }}</span>
            </button>
          </div>
        </template>

        <template v-if="state.scope">
          <div class="divider" />

          <!-- Step 4: Extras -->
          <div class="step-label">4. Zusatzleistungen</div>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
            <button
              v-for="extra in state.cat.extras"
              :key="extra.id"
              @click="toggleExtra(extra)"
              class="opt-btn"
              :class="{ selected: isExtraSelected(extra) }"
            >
              <span class="material-symbols-outlined opt-icon">{{ extra.icon }}</span>
              <div class="text-left flex-1">
                <div class="opt-name">{{ extra.name }}</div>
              </div>
              <span class="opt-price">+{{ formatPrice(extra.price) }}</span>
            </button>
          </div>

          <!-- Price Result -->
          <div class="bg-primary/5 border border-primary/30 rounded-xl p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <div class="text-xs font-bold uppercase tracking-wider text-primary mb-2">Geschätzte Kosten</div>
              <div class="font-display text-4xl font-black text-primary">{{ formatPrice(totalPrice) }}</div>
              <div class="text-sm text-primary/70 mt-1">{{ priceNote }}</div>
            </div>
            <a href="/kontakt" class="inline-flex items-center gap-2 bg-primary text-on-primary font-bold px-6 py-3 rounded-xl hover:bg-primary/90 transition-colors whitespace-nowrap">
              Angebot anfordern
              <span class="material-symbols-outlined text-lg">arrow_forward</span>
            </a>
          </div>
        </template>

      </div>

      <!-- Info note -->
      <p class="text-center text-xs text-on-surface-variant mt-6">
        Unverbindliche Schätzung · Genaue Preise nach kostenlosem Erstgespräch
      </p>
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

interface Extra { id: string; icon: string; name: string; price: number }
interface Scope { id: string; icon: string; name: string; desc: string; mult: number; label: string }
interface ServiceType { id: string; icon: string; name: string; desc: string; price: number; label: string }
interface Category {
  id: string; icon: string; name: string; desc: string;
  typeLabel: string; scopeLabel: string;
  types: ServiceType[]; scopes: Scope[]; extras: Extra[];
}

const categories: Category[] = [
  {
    id: 'web', icon: 'language', name: 'Website', desc: 'Entwicklung & Design',
    typeLabel: 'Welche Art von Website?', scopeLabel: 'Design & Technologie',
    types: [
      { id: 'landing', icon: 'draft', name: 'Landing Page', desc: 'Eine Seite, ein Ziel', price: 800, label: 'ab €800' },
      { id: 'website', icon: 'web', name: 'Unternehmenswebsite', desc: '5–15 Seiten', price: 2500, label: 'ab €2.500' },
      { id: 'shop', icon: 'shopping_cart', name: 'Online Shop', desc: 'E-Commerce Lösung', price: 4500, label: 'ab €4.500' },
    ],
    scopes: [
      { id: 'template', icon: 'view_quilt', name: 'Template-basiert', desc: 'Schnell & kostengünstig', mult: 1.0, label: 'Standard' },
      { id: 'custom', icon: 'brush', name: 'Custom Design', desc: 'Individuell gestaltet', mult: 1.5, label: '+50%' },
      { id: 'premium', icon: 'diamond', name: 'Premium', desc: 'Animationen & Sonderfunktionen', mult: 2.2, label: '+120%' },
    ],
    extras: [
      { id: 'seo', icon: 'search', name: 'SEO-Grundoptimierung', price: 400 },
      { id: 'cms', icon: 'edit', name: 'CMS & Schulung', price: 300 },
      { id: 'multilang', icon: 'translate', name: 'Mehrsprachigkeit', price: 600 },
      { id: 'maint', icon: 'settings', name: 'Wartungsvertrag/Jahr', price: 800 },
    ],
  },
  {
    id: 'seo', icon: 'trending_up', name: 'SEO', desc: 'Suchmaschinenoptimierung',
    typeLabel: 'Welche SEO-Leistung?', scopeLabel: 'Laufzeit',
    types: [
      { id: 'audit', icon: 'zoom_in', name: 'SEO Audit', desc: 'Einmalige Analyse', price: 800, label: 'ab €800' },
      { id: 'local', icon: 'location_on', name: 'Lokales SEO', desc: 'Google Maps & lokal', price: 600, label: 'ab €600' },
      { id: 'onpage', icon: 'tune', name: 'Onpage Optimierung', desc: 'Technisch & inhaltlich', price: 1200, label: 'ab €1.200' },
      { id: 'full', icon: 'rocket_launch', name: 'Full SEO Paket', desc: 'Komplett inkl. Linkbuilding', price: 2500, label: 'ab €2.500' },
    ],
    scopes: [
      { id: 'once', icon: 'flash_on', name: 'Einmalig', desc: 'Einmaliges Projekt', mult: 1.0, label: 'Einmalig' },
      { id: '3m', icon: 'calendar_today', name: '3 Monate', desc: 'Kurzzeitige Betreuung', mult: 2.5, label: '×2,5' },
      { id: '12m', icon: 'event', name: '12 Monate', desc: 'Nachhaltige Ergebnisse', mult: 8, label: '×8' },
    ],
    extras: [
      { id: 'report', icon: 'bar_chart', name: 'Monatliches Reporting', price: 150 },
      { id: 'content', icon: 'article', name: 'Content Erstellung', price: 400 },
      { id: 'linkbuild', icon: 'link', name: 'Linkbuilding', price: 600 },
    ],
  },
  {
    id: 'marketing', icon: 'campaign', name: 'Marketing', desc: 'Google Ads & Social Media',
    typeLabel: 'Welcher Kanal?', scopeLabel: 'Werbebudget (monatlich)',
    types: [
      { id: 'gads', icon: 'ads_click', name: 'Google Ads', desc: 'Suchanzeigen & Display', price: 800, label: 'ab €800/Mo' },
      { id: 'meta', icon: 'groups', name: 'Meta / Instagram Ads', desc: 'Facebook & Instagram', price: 700, label: 'ab €700/Mo' },
      { id: 'linkedin', icon: 'business_center', name: 'LinkedIn Ads', desc: 'B2B Werbung', price: 1000, label: 'ab €1.000/Mo' },
      { id: 'full', icon: 'rocket_launch', name: 'Full Performance', desc: 'Alle Kanäle kombiniert', price: 2000, label: 'ab €2.000/Mo' },
    ],
    scopes: [
      { id: 'small', icon: 'payments', name: 'unter €1.000', desc: 'Kleines Budget', mult: 1.0, label: 'Standard' },
      { id: 'mid', icon: 'account_balance_wallet', name: '€1.000–€5.000', desc: 'Mittleres Budget', mult: 1.3, label: '+30%' },
      { id: 'large', icon: 'savings', name: 'über €5.000', desc: 'Großes Budget', mult: 1.6, label: '+60%' },
    ],
    extras: [
      { id: 'creative', icon: 'photo_camera', name: 'Creatives & Grafiken', price: 400 },
      { id: 'report', icon: 'pie_chart', name: 'Monatliches Reporting', price: 200 },
      { id: 'ab', icon: 'science', name: 'A/B Testing', price: 300 },
    ],
  },
  {
    id: 'design', icon: 'palette', name: 'Design', desc: 'Branding & UI/UX',
    typeLabel: 'Welche Design-Leistung?', scopeLabel: 'Komplexität',
    types: [
      { id: 'logo', icon: 'title', name: 'Logo Design', desc: 'Professionelles Logo', price: 800, label: 'ab €800' },
      { id: 'branding', icon: 'palette', name: 'Corporate Design', desc: 'CI, CD & Styleguide', price: 2500, label: 'ab €2.500' },
      { id: 'uiux', icon: 'devices', name: 'UI/UX Design', desc: 'Interface & Prototyping', price: 2000, label: 'ab €2.000' },
      { id: 'full', icon: 'star', name: 'Full Branding Paket', desc: 'Alles aus einer Hand', price: 5000, label: 'ab €5.000' },
    ],
    scopes: [
      { id: 'simple', icon: 'circle', name: 'Einfach', desc: 'Klares, minimales Design', mult: 1.0, label: 'Standard' },
      { id: 'mid', icon: 'device_hub', name: 'Mittel', desc: 'Mehrere Varianten & Formate', mult: 1.5, label: '+50%' },
      { id: 'complex', icon: 'account_tree', name: 'Komplex', desc: 'Umfangreich & detailreich', mult: 2.2, label: '+120%' },
    ],
    extras: [
      { id: 'guide', icon: 'menu_book', name: 'Styleguide Dokument', price: 400 },
      { id: 'stationery', icon: 'mail', name: 'Geschäftsausstattung', price: 600 },
      { id: 'social', icon: 'photo_camera', name: 'Social Media Templates', price: 350 },
    ],
  },
];

const state = reactive<{
  cat: Category | null;
  type: ServiceType | null;
  scope: Scope | null;
  extras: Extra[];
}>({ cat: null, type: null, scope: null, extras: [] });

function selectCategory(cat: Category) {
  state.cat = cat;
  state.type = null;
  state.scope = null;
  state.extras = [];
}

function selectType(type: ServiceType) {
  state.type = type;
  state.scope = null;
  state.extras = [];
}

function selectScope(scope: Scope) {
  state.scope = scope;
  state.extras = [];
}

function toggleExtra(extra: Extra) {
  const idx = state.extras.findIndex(e => e.id === extra.id);
  if (idx > -1) state.extras.splice(idx, 1);
  else state.extras.push(extra);
}

function isExtraSelected(extra: Extra) {
  return state.extras.some(e => e.id === extra.id);
}

const totalPrice = computed(() => {
  if (!state.type || !state.scope) return 0;
  const base = Math.round(state.type.price * state.scope.mult);
  return base + state.extras.reduce((sum, e) => sum + e.price, 0);
});

const priceNote = computed(() => {
  if (state.cat?.id === 'marketing') return 'pro Monat, zzgl. Werbebudget';
  return 'Unverbindliche Schätzung, zzgl. MwSt.';
});

function formatPrice(value: number) {
  return 'ab €' + value.toLocaleString('de-DE');
}
</script>

<style scoped>

</style>
