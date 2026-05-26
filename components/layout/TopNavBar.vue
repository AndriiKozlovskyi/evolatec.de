<template>
  <nav class="fixed top-0 w-full z-50">
  
    <!-- Main nav -->
    <div class="bg-surface backdrop-blur-md border-b border-outline-variant/20 shadow-sm">
    <div class="max-w-container-max mx-auto px-gutter flex justify-between items-center h-20">
      <!-- Logo -->
      <a :href="isEnglish ? '/en' : '/'" class="flex flex-row gap-3 items-center hover:opacity-80 transition-opacity duration-200 brightness-[0.8]">
        <NuxtImg
          src="/logo.webp"
          width="36"
          height="36"
          densities="x1 x2"
          format="webp"
          preload
          fetchpriority="high"
          alt="EvolaTec Logo"
        />        
        <span class="font-display text-headline-md font-bold tracking-tighter text-primary sm:inline">EvolaTec</span>     
      </a>

      <!-- Desktop Navigation -->
      <div class="hidden md:flex gap-4 lg:gap-2 items-center">
        <div
          v-for="link in navLinks"
          :key="link.id"
          class="relative group"
        >
          <a
            :href="link.href"
            @click="link.href === '#' && $event.preventDefault()"
            :class="[
              'font-nav-link text-nav-link uppercase tracking-wider transition-colors flex items-center gap-2 py-2 px-3 relative',
              link.href === '#' ? 'cursor-default' : '',
              isLinkActive(link)
                ? 'text-primary'
                : 'text-on-surface-variant hover:text-primary',
            ]"
          >
            <span
              v-if="isLinkActive(link)"
              class="absolute bottom-0 left-3 right-3 h-0.5 bg-primary rounded-full"
            />
            <span class="material-symbols-outlined text-sm leading-none">{{ link.icon }}</span>
            <span class="hidden lg:inline text-[0.6rem]">{{ link.label }}</span>
            <span v-if="link.submenu" class="material-symbols-outlined text-base group-hover:rotate-180 transition-transform duration-300">
              expand_more
            </span>
          </a>

          <div
            v-if="link.submenu"
            class="absolute top-full left-0 mt-0 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 min-w-56 border border-outline-variant/20"
          >
            <div class="py-3">
              <a
                v-for="sublink in link.submenu"
                :key="sublink.id"
                :href="sublink.href"
                :class="[
                'block px-6 py-3 transition-colors duration-200 font-nav-link text-sm',
                route.path === sublink.href + '/' || route.path === sublink.href
                  ? 'text-primary font-semibold bg-primary/5'
                  : 'text-on-surface hover:bg-surface-container-low hover:text-primary',
              ]"
              >
                {{ sublink.label }}
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- Mobile Menu Button -->
      <button
        @click="mobileMenuOpen = !mobileMenuOpen"
        class="md:hidden p-2 text-on-surface hover:text-primary transition-colors h-12 w-12 flex items-center justify-center"
        :aria-label="mobileMenuOpen ? 'Menü schließen' : 'Menü öffnen'"
        :aria-expanded="mobileMenuOpen"
        aria-controls="mobile-menu"
      >
        <svg v-if="!mobileMenuOpen" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
        <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      <!-- Language Switcher -->
      <div class="hidden md:flex items-center gap-1 border-l border-outline-variant/30 pl-3">
        <a
          :href="deHref"
          @click="savePreference('de')"
          :class="[
            'text-xs font-bold px-2 py-1 rounded transition-colors duration-200',
            currentLang === 'de'
              ? 'text-primary bg-primary/10'
              : 'text-on-surface-variant hover:text-primary hover:bg-primary/5',
          ]"
          hreflang="de"
          aria-label="Deutsch"
        >DE</a>
        <a
          :href="enHref"
          @click="savePreference('en')"
          :class="[
            'text-xs font-bold px-2 py-1 rounded transition-colors duration-200',
            currentLang === 'en'
              ? 'text-primary bg-primary/10'
              : 'text-on-surface-variant hover:text-primary hover:bg-primary/5',
          ]"
          hreflang="en"
          aria-label="English"
        >EN</a>
      </div>

      <!-- Desktop CTA -->
      <a :href="isEnglish ? '/en/contact' : '/kontakt'" class="hidden sm:inline-block">
        <BaseButton variant="primary" size="sm">{{ isEnglish ? 'Contact' : 'Anfragen' }}</BaseButton>
      </a>
    </div>
    </div>

    <!-- Mobile Menu Overlay -->
    <Transition name="slide-up">
      <div
        v-if="mobileMenuOpen"
        id="mobile-menu"
        class="md:hidden fixed top-20 left-0 right-0 bottom-0 z-[200] overflow-y-auto overscroll-contain bg-surface"
      >
        <div class="max-w-container-max mx-auto px-gutter py-6 pb-32 space-y-2">
          <!-- Navigation Links -->
          <div
            v-for="link in navLinks"
            :key="link.id"
            class="space-y-1"
          >
            <!-- Main Link -->
            <div
              v-if="link.submenu"
              class="flex items-center rounded-lg text-on-surface hover:bg-primary/10 hover:text-primary transition-all duration-200 font-semibold"
            >
              <a
                :href="link.href"
                @click="mobileMenuOpen = false"
                class="flex items-center gap-4 px-4 py-3 flex-1 touch-target"
              >
                <span class="material-symbols-outlined text-xl flex-shrink-0">{{ link.icon }}</span>
                <span>{{ link.label }}</span>
              </a>
              <button
                @click="toggleMobileSubmenu(link.id)"
                class="px-4 py-3 touch-target flex-shrink-0"
                :aria-label="`${link.label} Untermenü ${expandedMenus.includes(link.id) ? 'schließen' : 'öffnen'}`"
              >
                <span
                  class="material-symbols-outlined text-lg transition-transform duration-300"
                  :class="{ 'rotate-180': expandedMenus.includes(link.id) }"
                >
                  expand_more
                </span>
              </button>
            </div>
            <a
              v-else
              :href="link.href"
              @click="mobileMenuOpen = false"
              class="flex items-center gap-4 px-4 py-3 rounded-lg text-on-surface hover:bg-primary/10 hover:text-primary transition-all duration-200 font-semibold touch-target"
            >
              <span class="material-symbols-outlined text-xl flex-shrink-0">{{ link.icon }}</span>
              <span>{{ link.label }}</span>
            </a>

            <!-- Submenu (Collapsible) -->
            <Transition name="expand">
              <div
                v-if="link.submenu && expandedMenus.includes(link.id)"
                class="space-y-1 pl-4"
              >
                <a
                  v-for="sublink in link.submenu"
                  :key="sublink.id"
                  :href="sublink.href"
                  @click="mobileMenuOpen = false"
                  class="flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm text-on-surface-variant hover:bg-primary/10 hover:text-primary transition-all duration-200 touch-target"
                >
                  <span>{{ sublink.label }}</span>
                </a>
              </div>
            </Transition>
          </div>

          <!-- Divider -->
          <div class="border-t border-outline-variant/20 my-4"></div>

          <!-- Language Switcher -->
          <div class="flex items-center gap-2 px-4 py-2">
            <span class="material-symbols-outlined text-base text-on-surface-variant">language</span>
            <a
              :href="deHref"
              @click="savePreference('de'); mobileMenuOpen = false"
              :class="[
                'text-sm font-bold px-3 py-1.5 rounded transition-colors duration-200',
                currentLang === 'de' ? 'text-primary bg-primary/10' : 'text-on-surface-variant hover:text-primary',
              ]"
              hreflang="de"
            >Deutsch</a>
            <a
              :href="enHref"
              @click="savePreference('en'); mobileMenuOpen = false"
              :class="[
                'text-sm font-bold px-3 py-1.5 rounded transition-colors duration-200',
                currentLang === 'en' ? 'text-primary bg-primary/10' : 'text-on-surface-variant hover:text-primary',
              ]"
              hreflang="en"
            >English</a>
          </div>

          <!-- CTA Button -->
          <div>
            <a :href="isEnglish ? '/en/contact' : '/kontakt'" @click="mobileMenuOpen = false" class="block">
              <BaseButton variant="primary" size="lg" class="w-full">
                <span class="material-symbols-outlined text-lg">rocket_launch</span>
                {{ isEnglish ? 'Contact us' : 'Projekt anfragen' }}
              </BaseButton>
            </a>
          </div>
        </div>
      </div>
    </Transition>
  </nav>
</template>

<script setup lang="ts">
import { ref, computed, watch, onBeforeUnmount } from 'vue';

const { currentLang, isEnglish, deHref, enHref, savePreference } = useLanguageSwitcher();
const mobileMenuOpen = ref(false);
const expandedMenus = ref<number[]>([]);
const route = useRoute();

if (import.meta.client) {
  watch(mobileMenuOpen, (open) => {
    document.body.style.overflow = open ? 'hidden' : '';
    if (!open) expandedMenus.value = [];
  });
  watch(() => route.path, () => {
    mobileMenuOpen.value = false;
  });
  onBeforeUnmount(() => {
    document.body.style.overflow = '';
  });
}

function toggleMobileSubmenu(linkId: number) {
  if (expandedMenus.value.includes(linkId)) {
    expandedMenus.value = expandedMenus.value.filter(id => id !== linkId);
  } else {
    expandedMenus.value = [...expandedMenus.value, linkId];
  }
}

function isLinkActive(link: { href: string; submenu?: { href: string }[] }) {
  if (link.href !== '#' && route.path == link.href || route.path == link.href + '/') return true;
  return link.submenu?.some(s => route.path === s.href || route.path === s.href + '/') ?? false;
}

const navLinks = computed(() => {
  const en = isEnglish.value;
  return [
    {
      id: 2,
      label: 'Website',
      href: en ? '/en/business-website' : '/firmenwebsite',
      isActive: true,
      icon: 'language',
      submenu: [
        { id: 2.1, label: en ? 'Business Website' : 'Firmenwebsite', href: en ? '/en/business-website-design' : '/firmenwebsite-erstellen-lassen' },
        { id: 2.2, label: en ? 'Landing Page'     : 'Landingpage',   href: en ? '/en/landing-page-design'    : '/landingpage-erstellen-lassen' },
        { id: 2.3, label: en ? 'Online Shop'       : 'Online-Shop',   href: en ? '/en/online-shop-development': '/online-shop-erstellen-lassen' },
      ],
    },
    {
      id: 3,
      label: 'SEO',
      href: en ? '/en/seo' : '/seo',
      isActive: false,
      icon: 'search_insights',
      submenu: [
        { id: 3.1, label: en ? 'SEO Optimization' : 'SEO Optimierung',     href: en ? '/en/seo-optimization' : '/seo-optimieren-lassen' },
        { id: 3.2, label: 'Local SEO',                                       href: en ? '/en/local-seo'        : '/local-seo' },
        { id: 3.3, label: en ? 'Link Building'    : 'Linkbuilding',         href: en ? '/en/seo-link-building' : '/seo-linkbuilding' },
        { id: 3.4, label: en ? 'SEO Audit'        : 'SEO Audit & Analyse',  href: en ? '/en/seo-audit'        : '/seo-audit' },
      ],
    },
    {
      id: 4,
      label: en ? 'Design & Content' : 'Design & Content',
      href: en ? '/en/web-design' : '/webdesign',
      isActive: false,
      icon: 'edit_document',
      submenu: [
        { id: 4.1, label: en ? 'Copywriting'              : 'Content & Copywriting',      href: en ? '/en/website-copywriting' : '/webseiten-texte-schreiben-lassen' },
        { id: 4.2, label: en ? 'Branding & Corporate Design' : 'Branding & Corporate Design', href: en ? '/en/design-branding' : '/design-branding' },
        { id: 4.3, label: 'UI/UX Design',                                                 href: en ? '/en/ui-ux-design'        : '/ui-ux-design' },
      ],
    },
    {
      id: 5,
      label: 'Marketing',
      href: en ? '/en/online-marketing' : '/online-marketing',
      isActive: false,
      icon: 'campaign',
      submenu: [
        { id: 5.1, label: 'Google Ads',  href: en ? '/en/google-ads-management'  : '/marketing-google-ads' },
        { id: 5.2, label: 'Social Media', href: en ? '/en/social-media-marketing' : '/marketing-social-media' },
      ],
    },
    { id: 6, label: en ? 'Price Calculator' : 'Preise Kalkulator', href: en ? '/en/website-cost-calculator' : '/webseite-kosten-kalkulator', isActive: false, icon: 'price_check' },
  ];
});
</script>

<style scoped>
.touch-target {
  min-height: 44px;
  display: flex;
  align-items: center;
}

/* Slide-up animation for mobile menu */
.slide-up-enter-active,
.slide-up-leave-active {
  transition: opacity 0.3s ease;
}

.slide-up-enter-from,
.slide-up-leave-to {
  opacity: 0;
}

/* Expand animation for submenus */
.expand-enter-active,
.expand-leave-active {
  transition: all 0.3s ease;
  overflow: hidden;
}

.expand-enter-from,
.expand-leave-to {
  opacity: 0;
  max-height: 0;
}

.expand-enter-to,
.expand-leave-from {
  opacity: 1;
  max-height: 500px;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
