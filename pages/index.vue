<template>
  <div>
    <!-- Hero Section -->
    <HeroSection
      background-image="/main/hero.webp"
      badge="Webdesign & Webentwicklung Agentur"
      title="Professionelle Website erstellen lassen für Unternehmen"
      description="Moderne Firmenwebsites, Landingpages und Online Shops, die Kunden gewinnen und Ihr Unternehmen wachsen lassen. SEO- & GEO-optimiert, schnell und konversionsstark."
      primaryCTA="Kostenloses Angebot erhalten"
      secondaryCTA="Preise ansehen"
      :stats="heroStats"
    />

     <!-- About Us Section -->
    <section
      data-nav-label="Über uns"
      data-nav-icon="info"
      class="relative py-section-padding bg-surface overflow-hidden"
    >
      <div class="absolute top-20 -left-32 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[120px] pointer-events-none"></div>
      <div class="absolute bottom-0 -right-32 w-[400px] h-[400px] rounded-full bg-primary-container/20 blur-[100px] pointer-events-none"></div>

      <div class="relative max-w-container-max mx-auto px-gutter">
        <div class="grid lg:grid-cols-2 gap-stack-lg items-start">

          <!-- Left: copy -->
          <div>
            <span class="inline-flex items-center gap-2 rounded-full bg-primary/8 border border-primary/15 px-4 py-2 text-sm font-medium text-primary mb-6">
              <span class="material-symbols-outlined text-[18px]">info</span>
              Über EvolaTec
            </span>

            <h2 class="font-headline-xl text-headline-xl text-primary mb-6 leading-[1.1]">
              Moderne Webagentur für
              <span class="relative inline-block">
                <span class="relative z-10">professionelle</span>
                <span class="absolute -bottom-1 left-0 right-0 h-3 bg-primary/15 rounded-sm -z-0"></span>
              </span>
              digitale Lösungen
            </h2>

            <div class="space-y-4 font-body-lg text-on-surface-variant leading-relaxed">
              <p>EvolaTec entwickelt moderne Websites, Unternehmenswebseiten, Landingpages und digitale Plattformen für Unternehmen, Startups und lokale Dienstleister.</p>
              <p>Unser Fokus liegt auf performanter Webentwicklung, modernem UI/UX Design und SEO- & GEO-optimierten Lösungen, die nicht nur professionell aussehen, sondern auch messbare Ergebnisse liefern.</p>
              <p>Wir kombinieren moderne Technologien wie Vue.js, Nuxt, Tailwind CSS und TypeScript, um schnelle, skalierbare und hochwertige Websites für moderne Unternehmen zu entwickeln.</p>
              <p>Egal ob Firmenwebsite, E-Commerce Plattform, Landingpage oder individuelle Weblösung — EvolaTec unterstützt Unternehmen beim professionellen digitalen Wachstum.</p>
            </div>
          </div>

          <!-- Right: 2×2 feature cards -->
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
            <div
              v-for="card in aboutFeatures"
              :key="card.title"
              class="bg-white rounded-2xl p-6 border border-outline-variant/30 ambient-shadow hover:shadow-xl hover:-translate-y-1 hover:border-primary/20 transition-all duration-300"
            >
              <div class="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <span class="material-symbols-outlined text-primary text-[22px]">{{ card.icon }}</span>
              </div>
              <h3 class="font-display font-bold text-on-surface mb-2 leading-tight">{{ card.title }}</h3>
              <p class="font-body-md text-on-surface-variant leading-relaxed">{{ card.description }}</p>
            </div>
          </div>

        </div>
      </div>
    </section>

     <!-- Why Us Section -->
    <section
      data-nav-label="Warum wir"
      data-nav-icon="stars"
      class="relative py-section-padding bg-surface overflow-hidden"
    >
      <div class="absolute top-20 -right-32 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[120px] pointer-events-none"></div>
      <div class="absolute bottom-0 -left-32 w-[400px] h-[400px] rounded-full bg-primary-container/20 blur-[100px] pointer-events-none"></div>

      <div class="relative max-w-container-max mx-auto px-gutter">
        <div class="grid lg:grid-cols-[1.15fr_1fr] gap-stack-lg items-center">

          <!-- Text column -->
          <div>
            <span class="inline-flex items-center gap-2 rounded-full bg-primary/8 border border-primary/15 px-4 py-2 text-sm font-medium text-primary mb-6">
              <span class="material-symbols-outlined text-[18px]">stars</span>
              Warum EvolaTec?
            </span>

            <h2 class="font-headline-xl text-headline-xl text-primary mb-6 leading-[1.1]">
              Moderne Webentwicklung für
              <span class="relative inline-block">
                <span class="relative z-10">Unternehmen</span>
                <span class="absolute -bottom-1 left-0 right-0 h-3 bg-primary/15 rounded-sm -z-0"></span>
              </span>
              mit hohen Ansprüchen
            </h2>

            <p class="font-body-lg text-on-surface-variant mb-10 leading-relaxed">
              EvolaTec kombiniert modernes Webdesign, performante Entwicklung und SEO- & GEO-optimierte Technologien für schnelle, professionelle und skalierbare Websites.
            </p>

            <div class="space-y-5">
              <div v-for="(point, i) in whyUsPoints" :key="i" class="flex gap-4 items-start">
                <div class="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span class="material-symbols-outlined text-primary text-[18px]">{{ point.icon }}</span>
                </div>
                <div class="flex-1">
                  <h3 class="font-display font-bold text-on-surface mb-1 leading-tight">{{ point.title }}</h3>
                  <p class="font-body-md text-on-surface-variant leading-relaxed">{{ point.description }}</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Developer toolkit composition — desktop only -->
          <div class="relative hidden lg:block">
            <div class="relative aspect-square max-w-md mx-auto">
              <div class="absolute inset-6 rounded-[2rem] bg-gradient-to-br from-primary/85 via-primary-container to-primary/60 ambient-shadow"></div>

              <!-- Code icon badge top-right -->
              <div class="absolute top-0 right-8 w-20 h-20 rounded-2xl bg-white shadow-xl flex items-center justify-center rotate-[8deg]">
                <span class="material-symbols-outlined text-primary text-[40px]">code_blocks</span>
              </div>

              <!-- Tech stack card -->
              <div class="absolute top-20 left-0 bg-white rounded-2xl p-5 shadow-xl rotate-[-5deg]">
                <div class="text-[0.65rem] uppercase tracking-widest font-bold text-on-surface-variant mb-3">Tech Stack</div>
                <div class="flex flex-wrap gap-1.5 max-w-[180px]">
                  <span class="px-2 py-1 rounded-md bg-primary/10 text-primary text-[0.65rem] font-bold">Vue</span>
                  <span class="px-2 py-1 rounded-md bg-primary/10 text-primary text-[0.65rem] font-bold">Nuxt</span>
                  <span class="px-2 py-1 rounded-md bg-primary/10 text-primary text-[0.65rem] font-bold">Tailwind</span>
                  <span class="px-2 py-1 rounded-md bg-primary/10 text-primary text-[0.65rem] font-bold">TypeScript</span>
                </div>
              </div>

              <!-- Lighthouse performance card -->
              <div class="absolute top-44 right-0 bg-white rounded-2xl p-5 shadow-xl rotate-[5deg]">
                <div class="text-[0.65rem] uppercase tracking-widest font-bold text-on-surface-variant mb-2">Performance</div>
                <div class="font-display text-4xl font-black leading-none text-primary">99<span class="text-lg text-on-surface-variant">/100</span></div>
                <div class="text-xs text-on-surface-variant mt-1">Lighthouse</div>
              </div>

              <!-- Clean code lines card -->
              <div class="absolute bottom-6 left-6 bg-white rounded-2xl p-5 shadow-xl rotate-[-3deg]">
                <div class="text-[0.65rem] uppercase tracking-widest font-bold text-on-surface-variant mb-3">Clean Code</div>
                <div class="flex flex-col gap-1.5 w-32">
                  <div class="h-2 rounded-sm bg-primary w-full"></div>
                  <div class="h-2 rounded-sm bg-primary/30 w-3/4"></div>
                  <div class="h-2 rounded-sm bg-primary/30 w-5/6"></div>
                  <div class="h-2 rounded-sm bg-primary w-2/3"></div>
                </div>
              </div>

              <!-- Deployed status pill -->
              <div class="absolute bottom-16 right-0 bg-white rounded-full px-4 py-2 shadow-xl rotate-[6deg] flex items-center gap-2">
                <span class="relative flex w-2 h-2">
                  <span class="absolute inline-flex w-full h-full rounded-full bg-emerald-500 opacity-75 animate-ping"></span>
                  <span class="relative inline-flex w-2 h-2 rounded-full bg-emerald-500"></span>
                </span>
                <span class="text-xs font-bold text-on-surface uppercase tracking-wider">Deployed</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
        <!-- GEO Section -->
    <section class="py-8 md:py-section-padding bg-surface">
      <div class="max-w-container-max mx-auto px-gutter">
        <div class="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-stack-lg items-start">

          <!-- Left: copy -->
          <div>
            <span class="inline-flex items-center gap-2 rounded-full bg-primary/8 border border-primary/15 px-4 py-2 text-sm font-medium text-primary mb-6">
              <span class="material-symbols-outlined text-[18px]">auto_awesome</span>
              Generative Engine Optimization
            </span>

            <h2 class="font-display text-3xl sm:text-4xl font-black text-on-surface leading-tight mb-4">
              GEO: Sichtbar in ChatGPT, Gemini &amp; Co.
            </h2>

            <p class="text-on-surface-variant leading-relaxed mb-4">
              Klassisches SEO optimiert für Google. <strong class="text-on-surface">GEO — Generative Engine Optimization</strong> — optimiert Ihre Website für die neue Generation von KI-Suchmaschinen wie ChatGPT, Google Gemini, Perplexity und Claude.
            </p>

            <p class="text-on-surface-variant leading-relaxed mb-8">
              Immer mehr Menschen stellen ihre Kaufentscheidungen direkt an KI-Assistenten. Wenn Ihr Unternehmen dort nicht auftaucht, verlieren Sie Anfragen an Wettbewerber, die bereits GEO-optimiert sind.
            </p>

            <ul class="space-y-3 mb-8">
              <li v-for="point in geoPoints" :key="point" class="flex items-center gap-3">
                <span class="material-symbols-outlined text-primary text-lg flex-shrink-0">check_circle</span>
                <span class="text-sm text-on-surface">{{ point }}</span>
              </li>
            </ul>

            <div class="inline-flex items-center gap-2 text-sm font-semibold text-primary bg-primary/8 border border-primary/15 rounded-xl px-5 py-3">
              <span class="material-symbols-outlined text-lg">verified</span>
              GEO-Optimierung ist in jeder Website inklusive — ohne Aufpreis
            </div>
          </div>

          <!-- Right: visual cards -->
          <div class="space-y-4">
            <div class="bg-surface-container-low rounded-2xl p-6 border border-outline-variant/30">
              <p class="text-xs uppercase tracking-widest font-bold text-on-surface-variant mb-4">KI-Suchmaschinen, für die wir optimieren</p>
              <div class="flex flex-wrap gap-2">
                <span
                  v-for="ai in aiEngines"
                  :key="ai"
                  class="px-3 py-1.5 bg-white rounded-full border border-outline-variant/30 text-sm font-semibold text-on-surface shadow-sm"
                >{{ ai }}</span>
              </div>
            </div>

            <div
              v-for="benefit in geoBenefits"
              :key="benefit.title"
              class="bg-white rounded-xl p-5 border border-outline-variant/20 flex items-start gap-4"
            >
              <div class="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <span class="material-symbols-outlined text-primary text-lg">{{ benefit.icon }}</span>
              </div>
              <div>
                <p class="font-semibold text-on-surface text-sm">{{ benefit.title }}</p>
                <p class="text-xs text-on-surface-variant mt-1 leading-relaxed">{{ benefit.desc }}</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- Services Section -->
    <section data-nav-label="Leistungen" data-nav-icon="apps" class="py-8 md:py-section-padding bg-surface">
      <div class="max-w-container-max mx-auto px-gutter">
        <div class="text-center mb-6 md:mb-stack-lg">
          <h2 class="font-display text-3xl sm:text-4xl md:text-5xl font-black text-on-surface mb-2 md:mb-4 leading-tight">Unsere Leistungen</h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-stack-md">
          <div
            v-for="(service, index) in services"
            :key="service.id"
            class="group relative bg-white rounded-xl md:rounded-2xl p-4 sm:p-6 md:p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-surface-container-high animate-fade-in-up"
            :style="{ animationDelay: `${index * 100}ms` }"
          >
            <!-- Icon -->
            <div class="w-12 sm:w-16 h-12 sm:h-16 rounded-lg md:rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-gradient-to-br group-hover:from-primary/20 group-hover:to-primary/10 transition-colors duration-300">
              <span class="material-symbols-outlined text-xl sm:text-[2rem] text-primary group-hover:scale-110 transition-transform duration-300">{{ service.icon }}</span>
            </div>

            <!-- Content -->
            <h3 class="text-base sm:text-headline-md font-bold text-on-surface mb-2 sm:mb-3">{{ service.title }}</h3>
            <p class="text-sm sm:text-body-md text-on-surface-variant mb-4 sm:mb-6 line-clamp-3">{{ service.description }}</p>

            <!-- Price -->
            <p class="text-base sm:text-lg font-black text-primary mb-4 sm:mb-6">{{ service.price }}</p>

            <!-- Link -->
            <a
              :href="service.href"
              class="inline-flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all duration-300 text-sm sm:text-base py-2 min-h-[44px]"
            >
              Mehr erfahren
              <span class="material-symbols-outlined text-lg">arrow_forward</span>
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Website-Typen Vergleich -->
    <section class="py-8 md:py-section-padding bg-surface-container-low">
      <div class="max-w-container-max mx-auto px-gutter">
        <div class="text-center mb-8 md:mb-stack-lg">
          <h2 class="font-display text-3xl sm:text-4xl font-black text-on-surface leading-tight">Welche Website-Lösung brauche ich?</h2>
          <p class="text-on-surface-variant mt-3 max-w-2xl mx-auto text-sm sm:text-base">Firmenwebsite, Landingpage oder Online Shop — so finden Sie die richtige Lösung für Ihr Ziel und Budget.</p>
        </div>
        <div class="grid md:grid-cols-3 gap-5">
          <div class="bg-white rounded-2xl p-7 border border-outline-variant/30 flex flex-col">
            <span class="material-symbols-outlined text-primary text-[2rem] mb-4">article</span>
            <h3 class="font-bold text-on-surface text-lg mb-2">Landingpage</h3>
            <p class="text-sm text-on-surface-variant mb-5 leading-relaxed">Ideal für Werbung, Produktlaunches und Leadgenerierung — eine fokussierte Seite mit klarem Handlungsaufruf.</p>
            <ul class="space-y-2.5 text-sm text-on-surface-variant flex-1">
              <li class="flex gap-2 items-start"><span class="material-symbols-outlined text-emerald-500 text-base flex-shrink-0 mt-0.5">check_circle</span>Google Ads & Meta Ads</li>
              <li class="flex gap-2 items-start"><span class="material-symbols-outlined text-emerald-500 text-base flex-shrink-0 mt-0.5">check_circle</span>Kurze Time-to-Market</li>
              <li class="flex gap-2 items-start"><span class="material-symbols-outlined text-emerald-500 text-base flex-shrink-0 mt-0.5">check_circle</span>Maximale Conversion-Rate</li>
            </ul>
            <div class="mt-6 pt-4 border-t border-outline-variant/20 flex items-center justify-between">
              <span class="font-bold text-primary">ab 500€</span>
              <span class="text-xs text-on-surface-variant">ab 3 Tagen</span>
            </div>
          </div>

          <div class="bg-primary rounded-2xl p-7 flex flex-col shadow-xl">
            <span class="material-symbols-outlined text-white text-[2rem] mb-4">language</span>
            <h3 class="font-bold text-white text-lg mb-2">Firmenwebsite</h3>
            <p class="text-sm text-on-primary-container mb-5 leading-relaxed">Der vollständige Online-Auftritt für Unternehmen — mehrere Seiten, SEO-Sichtbarkeit und professionelles Design.</p>
            <ul class="space-y-2.5 text-sm text-on-primary-container flex-1">
              <li class="flex gap-2 items-start"><span class="material-symbols-outlined text-white text-base flex-shrink-0 mt-0.5">check_circle</span>Unternehmensdarstellung</li>
              <li class="flex gap-2 items-start"><span class="material-symbols-outlined text-white text-base flex-shrink-0 mt-0.5">check_circle</span>Langfristige SEO-Sichtbarkeit</li>
              <li class="flex gap-2 items-start"><span class="material-symbols-outlined text-white text-base flex-shrink-0 mt-0.5">check_circle</span>Mehrere Seiten & CMS-Pflege</li>
            </ul>
            <div class="mt-6 pt-4 border-t border-white/20 flex items-center justify-between">
              <span class="font-bold text-white">ab 1.500€</span>
              <span class="text-xs text-on-primary-container">ab 7 Tagen</span>
            </div>
          </div>

          <div class="bg-white rounded-2xl p-7 border border-outline-variant/30 flex flex-col">
            <span class="material-symbols-outlined text-primary text-[2rem] mb-4">shopping_bag</span>
            <h3 class="font-bold text-on-surface text-lg mb-2">Online Shop</h3>
            <p class="text-sm text-on-surface-variant mb-5 leading-relaxed">Für Unternehmen, die Produkte oder Leistungen online verkaufen wollen — mit Shopify oder individuellem Shop.</p>
            <ul class="space-y-2.5 text-sm text-on-surface-variant flex-1">
              <li class="flex gap-2 items-start"><span class="material-symbols-outlined text-emerald-500 text-base flex-shrink-0 mt-0.5">check_circle</span>Produktverwaltung & Varianten</li>
              <li class="flex gap-2 items-start"><span class="material-symbols-outlined text-emerald-500 text-base flex-shrink-0 mt-0.5">check_circle</span>Sichere Zahlungsabwicklung</li>
              <li class="flex gap-2 items-start"><span class="material-symbols-outlined text-emerald-500 text-base flex-shrink-0 mt-0.5">check_circle</span>Shopify oder Custom-Lösung</li>
            </ul>
            <div class="mt-6 pt-4 border-t border-outline-variant/20 flex items-center justify-between">
              <span class="font-bold text-primary">ab 3.000€</span>
              <span class="text-xs text-on-surface-variant">ab 14 Tagen</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Was ist inklusive? -->
    <section class="py-8 md:py-section-padding bg-surface">
      <div class="max-w-container-max mx-auto px-gutter">
        <div class="text-center mb-8 md:mb-stack-lg">
          <h2 class="font-display text-3xl sm:text-4xl font-black text-on-surface leading-tight">Was ist bei jeder Website inklusive?</h2>
          <p class="text-on-surface-variant mt-3 max-w-2xl mx-auto text-sm sm:text-base">Alle unsere Websites beinhalten diese Grundlagen — unabhängig vom gewählten Paket.</p>
        </div>

        <!-- Mobile cards -->
        <div class="md:hidden space-y-2.5">
          <div v-for="(row, i) in inclusiveTable" :key="i" class="bg-white rounded-xl border border-outline-variant/30 p-4">
            <p class="font-semibold text-on-surface text-sm mb-3">{{ row.feature }}</p>
            <div class="grid grid-cols-3 gap-2">
              <div class="bg-surface-container-low rounded-lg p-2.5 text-center">
                <p class="text-[10px] font-bold uppercase tracking-wide text-on-surface-variant mb-2">Landing</p>
                <template v-if="row.landing === true"><span class="material-symbols-outlined text-emerald-500 text-base">check_circle</span></template>
                <template v-else-if="row.landing === false"><span class="material-symbols-outlined text-on-surface-variant/40 text-base">remove</span></template>
                <template v-else><span class="text-on-surface-variant text-[11px] font-medium leading-tight block">{{ row.landing }}</span></template>
              </div>
              <div class="bg-primary/5 rounded-lg p-2.5 text-center border border-primary/15">
                <p class="text-[10px] font-bold uppercase tracking-wide text-primary mb-2">Firma</p>
                <template v-if="row.firma === true"><span class="material-symbols-outlined text-emerald-500 text-base">check_circle</span></template>
                <template v-else-if="row.firma === false"><span class="material-symbols-outlined text-on-surface-variant/40 text-base">remove</span></template>
                <template v-else><span class="text-primary text-[11px] font-semibold leading-tight block">{{ row.firma }}</span></template>
              </div>
              <div class="bg-surface-container-low rounded-lg p-2.5 text-center">
                <p class="text-[10px] font-bold uppercase tracking-wide text-on-surface-variant mb-2">Shop</p>
                <template v-if="row.shop === true"><span class="material-symbols-outlined text-emerald-500 text-base">check_circle</span></template>
                <template v-else-if="row.shop === false"><span class="material-symbols-outlined text-on-surface-variant/40 text-base">remove</span></template>
                <template v-else><span class="text-on-surface-variant text-[11px] font-medium leading-tight block">{{ row.shop }}</span></template>
              </div>
            </div>
          </div>
        </div>

        <!-- Desktop table -->
        <div class="hidden md:block overflow-x-auto rounded-2xl border border-outline-variant/30">
          <table class="w-full text-sm">
            <thead>
              <tr class="bg-surface-container-low">
                <th class="text-left p-4 font-bold text-on-surface border-b border-outline-variant/30 w-1/2">Leistung</th>
                <th class="text-center p-4 font-bold text-on-surface border-b border-outline-variant/30">Landingpage</th>
                <th class="text-center p-4 font-bold text-primary bg-primary/5 border-b border-outline-variant/30">Firmenwebsite</th>
                <th class="text-center p-4 font-bold text-on-surface border-b border-outline-variant/30">Online Shop</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(row, i) in inclusiveTable" :key="i" :class="i % 2 === 0 ? 'bg-white' : 'bg-surface-container-low/40'">
                <td class="p-4 text-on-surface font-medium">{{ row.feature }}</td>
                <td class="p-4 text-center">
                  <template v-if="row.landing === true"><span class="material-symbols-outlined text-emerald-500 text-lg" aria-label="inklusive">check_circle</span></template>
                  <template v-else-if="row.landing === false"><span class="material-symbols-outlined text-on-surface-variant/40 text-lg" aria-label="nicht inklusive">remove</span></template>
                  <template v-else><span class="text-on-surface-variant text-xs">{{ row.landing }}</span></template>
                </td>
                <td class="p-4 text-center bg-primary/5">
                  <template v-if="row.firma === true"><span class="material-symbols-outlined text-emerald-500 text-lg" aria-label="inklusive">check_circle</span></template>
                  <template v-else-if="row.firma === false"><span class="material-symbols-outlined text-on-surface-variant/40 text-lg" aria-label="nicht inklusive">remove</span></template>
                  <template v-else><span class="text-primary font-semibold text-xs">{{ row.firma }}</span></template>
                </td>
                <td class="p-4 text-center">
                  <template v-if="row.shop === true"><span class="material-symbols-outlined text-emerald-500 text-lg" aria-label="inklusive">check_circle</span></template>
                  <template v-else-if="row.shop === false"><span class="material-symbols-outlined text-on-surface-variant/40 text-lg" aria-label="nicht inklusive">remove</span></template>
                  <template v-else><span class="text-on-surface-variant text-xs">{{ row.shop }}</span></template>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <!-- Process Section -->
    <ProcessSection
      data-nav-label="Prozess"
      data-nav-icon="route"
      title="Website erstellen lassen — unser Prozess in 4 Schritten"
      :steps="processSteps"
    />

    <!-- Pricing Overview -->
    <section data-nav-label="Preise" data-nav-icon="sell" class="py-8 md:py-section-padding bg-surface-container-low">
      <div class="max-w-container-max mx-auto px-gutter">
        <div class="text-center mb-6 md:mb-stack-lg">
          <span class="text-label-md uppercase font-bold text-primary tracking-widest mb-2 block text-xs">Preise</span>
          <h2 class="font-display text-3xl sm:text-4xl md:text-5xl font-black text-on-surface mb-2 md:mb-4 leading-tight">Website erstellen lassen – Preise</h2>
          <p class="text-on-surface-variant text-sm sm:text-lg max-w-2xl mx-auto">Transparente Preise für professionelle Webentwicklung.</p>
        </div>

        <!-- Mobile: stacked cards -->
        <div class="md:hidden space-y-3 mb-6">
          <div
            v-for="(item, index) in pricingTable"
            :key="`m-${index}`"
            class="bg-white rounded-xl border border-surface-container-high p-4 flex items-center justify-between gap-3"
          >
            <div class="min-w-0 flex-1">
              <p class="font-bold text-on-surface text-base leading-tight">{{ item.service }}</p>
              <p class="text-on-surface-variant text-xs mt-1 flex items-center gap-1">
                <span class="material-symbols-outlined text-sm">schedule</span>
                {{ item.delivery }}
              </p>
            </div>
            <p class="text-primary font-black text-lg whitespace-nowrap">{{ item.price }}</p>
          </div>
        </div>

        <!-- Desktop: table -->
        <div class="hidden md:block mb-stack-lg rounded-lg overflow-hidden">
          <table class="w-full text-base">
            <thead>
              <tr class="border-b-2 border-primary/20 bg-surface">
                <th class="text-left p-4 font-bold text-on-surface">Leistung</th>
                <th class="text-left p-4 font-bold text-on-surface">Preis</th>
                <th class="text-left p-4 font-bold text-on-surface">Lieferzeit</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, index) in pricingTable" :key="index" class="border-b border-surface-container hover:bg-white transition-colors duration-200">
                <td class="p-4 text-on-surface font-medium">{{ item.service }}</td>
                <td class="p-4 text-primary font-bold text-lg">{{ item.price }}</td>
                <td class="p-4 text-on-surface-variant">{{ item.delivery }}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="text-center">
          <a href="/webseite-kosten-kalkulator" class="inline-block">
            <BaseButton variant="primary" size="lg">Alle Preise ansehen</BaseButton>
          </a>
        </div>
      </div>
    </section>

    <!-- Technologie-Vergleich: Nuxt vs WordPress -->
    <section class="py-8 md:py-section-padding bg-surface-container-low">
      <div class="max-w-container-max mx-auto px-gutter">
        <div class="text-center mb-8 md:mb-stack-lg">
          <h2 class="font-display text-3xl sm:text-4xl font-black text-on-surface leading-tight">Warum nicht WordPress?</h2>
          <p class="text-on-surface-variant mt-3 max-w-2xl mx-auto text-sm sm:text-base">Wir setzen auf moderne Technologien — und das macht den messbaren Unterschied.</p>
        </div>

        <!-- Mobile cards -->
        <div class="md:hidden space-y-3">
          <div v-for="(row, i) in techComparisonRows" :key="i" class="bg-white rounded-xl border border-outline-variant/30 p-4">
            <p class="text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-3">{{ row.criterion }}</p>
            <div class="grid grid-cols-2 gap-2">
              <div class="bg-surface-container-low rounded-lg p-3 text-center">
                <p class="text-[10px] font-semibold uppercase tracking-wide text-on-surface-variant mb-1.5">WordPress</p>
                <p class="text-xs text-on-surface-variant leading-snug">{{ row.wp }}</p>
              </div>
              <div class="bg-primary/5 rounded-lg p-3 text-center border border-primary/15">
                <p class="text-[10px] font-semibold uppercase tracking-wide text-primary mb-1.5">EvolaTec</p>
                <p class="text-xs text-primary font-semibold leading-snug">{{ row.nuxt }}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Desktop table -->
        <div class="hidden md:block overflow-x-auto rounded-2xl border border-outline-variant/30">
          <table class="w-full text-sm">
            <thead>
              <tr class="bg-surface-container-low">
                <th class="text-left p-4 font-bold text-on-surface border-b border-outline-variant/30 w-1/3">Kriterium</th>
                <th class="text-center p-4 font-bold text-on-surface-variant border-b border-outline-variant/30">WordPress</th>
                <th class="text-center p-4 font-bold text-primary bg-primary/5 border-b border-outline-variant/30">EvolaTec (Nuxt)</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(row, i) in techComparisonRows" :key="i" :class="i % 2 === 0 ? 'bg-white' : 'bg-surface-container-low/40'">
                <td class="p-4 font-semibold text-on-surface">{{ row.criterion }}</td>
                <td class="p-4 text-center text-on-surface-variant">{{ row.wp }}</td>
                <td class="p-4 text-center text-primary font-semibold bg-primary/5">{{ row.nuxt }}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p class="text-center text-xs text-on-surface-variant mt-4">Werte basieren auf realen Messungen mit Google Lighthouse / PageSpeed Insights.</p>
      </div>
    </section>

    <!-- SEO Text Section -->
    <section data-nav-label="Lösungen" data-nav-icon="category" class="py-8 md:py-section-padding bg-surface border-y border-outline-variant/40">
      <div class="max-w-container-max mx-auto px-gutter">
        <div class="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-stack-lg items-center">
          <!-- Left: copy + CTAs -->
          <div class="space-y-4 md:space-y-stack-md">
            <h2 class="font-display text-3xl sm:text-4xl md:text-5xl font-black text-on-surface mb-4 md:mb-6 leading-tight">Professionelle Website erstellen lassen</h2>

            <p class="text-sm sm:text-body-md md:text-body-lg text-on-surface-variant leading-relaxed">
              Eine professionelle Website ist heutzutage entscheidend für den Erfolg eines Unternehmens. Bei EvolaTec entwickeln wir moderne Firmenwebsites, Landingpages und Online Shops, die nicht nur gut aussehen, sondern echte Ergebnisse liefern.
            </p>

            <p class="text-sm sm:text-body-md md:text-body-lg text-on-surface-variant leading-relaxed">
              Unsere Websites sind SEO- & GEO-optimiert, mobilfreundlich und auf Conversion ausgelegt. Ob kleine Firmenwebsite, Landingpage für Werbung oder komplexer Online Shop — wir entwickeln individuelle Lösungen für Unternehmen in Deutschland.
            </p>

            <div class="pt-6 md:pt-8 flex flex-col sm:flex-wrap sm:flex-row gap-3 sm:gap-4">
              <a href="/firmenwebsite-erstellen-lassen" class="inline-block w-full sm:w-auto">
                <BaseButton variant="primary" size="md" class="w-full sm:w-auto">Firmenwebsite</BaseButton>
              </a>
              <a href="/landingpage-erstellen-lassen" class="inline-block w-full sm:w-auto">
                <BaseButton variant="outline" size="md" class="w-full sm:w-auto">Landingpage</BaseButton>
              </a>
              <a href="/online-shop-erstellen-lassen" class="inline-block w-full sm:w-auto">
                <BaseButton variant="outline" size="md" class="w-full sm:w-auto">Online Shop</BaseButton>
              </a>
            </div>
          </div>

          <!-- Right: laptop mockup -->
          <div class="relative">
            <NuxtImg
              src="/web-development/features.webp"
              alt="Laptop mit professioneller Website Mockup"
              loading="lazy"
              width="640"
              height="384"
              sizes="100vw md:50vw lg:640px"
              class="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <FAQSection
      data-nav-label="FAQ"
      data-nav-icon="help"
      title="Häufig gestellte Fragen"
      :faqs="faqs"
    />

    <!-- CTA Section -->
    <CTASection
      data-nav-label="Kontakt"
      data-nav-icon="send"
      title="Lassen Sie Ihre Website professionell erstellen"
      description="Moderne Websites, die Kunden gewinnen und Ihr Unternehmen wachsen lassen."
      primary-cta="Kostenlos beraten lassen"
      secondary-cta="Projekt besprechen"
    />
  </div>
</template>

<script setup lang="ts">
import { buildSchema, organizationSchema, websiteSchema, pageSchema, serviceListSchema } from '~/composables/schema/global'
import { faqSchema, type FAQ } from '~/composables/schema/service'

const { hreflangLinks } = useLanguageSwitcher()

const homeFaqs: FAQ[] = [
  {
    question: 'Was kostet eine professionelle Website?',
    answer:
      'Landingpages beginnen ab 500€, professionelle Firmenwebsites ab 1.500€, Onlineshops ab 3.000€ und Premium E-Commerce ab 6.000€. Da jedes Projekt unterschiedlich ist, erstellen wir vor Beginn ein transparentes Festpreisangebot. Nutzen Sie auch unseren Preisrechner für eine schnelle Schätzung.',
  },
  {
    question: 'Wie lange dauert die Erstellung einer Website?',
    answer:
      'Landingpages sind bereits ab 3 Werktagen live, Firmenwebsites ab 7 Arbeitstagen, Onlineshops ab 14 Arbeitstagen. Der genaue Zeitrahmen hängt vom Umfang und der Geschwindigkeit der Inhaltsbereitstellung ab.',
  },
  {
    question: 'Sind SEO und GEO bei der Website inklusive?',
    answer:
      'Ja, Basis-SEO und GEO-Optimierung sind in jedem Projekt enthalten: saubere Code-Struktur, schnelle Ladezeiten, mobile Optimierung, korrekte Meta-Daten und strukturierte Daten (Schema.org) für KI-Suchmaschinen wie ChatGPT, Gemini und Perplexity. Für weitergehende SEO-Strategien wie Keyword-Recherche, Content-Optimierung und Linkbuilding bieten wir zusätzliche SEO-Pakete ab 300€/Monat an.',
  },
  {
    question: 'Welche Leistungen bietet EvolaTec an?',
    answer:
      'EvolaTec bietet Webdesign und Webentwicklung (Landingpages, Firmenwebsites, Onlineshops), SEO (Audit, technische Optimierung, Local SEO, Linkbuilding), Online Marketing (Google Ads, Meta Ads), Branding, UI/UX Design sowie Website-Texte – alles aus einer Hand.',
  },
  {
    question: 'Entwickeln Sie Shopify Shops und individuelle Onlineshops?',
    answer:
      'Ja, wir entwickeln moderne Shopify Shops und individuelle E-Commerce-Lösungen mit Frameworks wie Nuxt. Egal ob schneller Markt-Start mit Shopify oder komplexe Custom-Lösung – wir wählen die Plattform, die zu Ihrem Use Case passt.',
  },
  {
    question: 'Gibt es Festpreise für Websites?',
    answer:
      'Ja, wir arbeiten mit transparenten Festpreisen. Sie wissen von Anfang an, was Ihre Website kostet – es gibt keine versteckten Zusatzkosten während der Entwicklung.',
  },
  {
    question: 'Was ist nach dem Website-Launch enthalten?',
    answer:
      'Bei vielen unserer Webentwicklungs-Pakete ist eine Support-Phase nach dem Launch enthalten. Auf Wunsch bieten wir darüber hinaus laufende SEO-Betreuung, Marketing-Kampagnen und Wartung an, damit Ihre Website langfristig wettbewerbsfähig bleibt.',
  },
  {
    question: 'Was ist der Unterschied zwischen Landingpage und Firmenwebsite?',
    answer:
      'Eine Landingpage ist eine einzelne, fokussierte Seite mit einem klaren Ziel — etwa Leads sammeln oder Produkte bewerben. Sie ist ideal für Werbekampagnen. Eine Firmenwebsite besteht aus mehreren Seiten (Startseite, Leistungen, Über uns, Kontakt) und dient dem vollständigen Online-Auftritt Ihres Unternehmens. Für langfristige SEO-Sichtbarkeit ist die Firmenwebsite die bessere Wahl; für schnelle Conversion-Kampagnen die Landingpage.',
  },
  {
    question: 'Wie wähle ich die richtige Webagentur aus?',
    answer:
      'Achten Sie auf: (1) nachweisliche Referenzen mit messbaren Ergebnissen, (2) transparente Festpreise ohne versteckte Kosten, (3) technisches Know-how bei Performance und SEO, (4) klare Kommunikation und feste Ansprechpartner. Agenturen, die mit modernen Technologien (Vue, Nuxt, Tailwind) arbeiten, liefern in der Regel schnellere und wartungsärmere Websites als WordPress-basierte Anbieter.',
  },
  {
    question: 'Brauche ich für meine Website unbedingt WordPress?',
    answer:
      'Nein. WordPress ist verbreitet, aber nicht automatisch die beste Wahl. Für viele Unternehmen sind moderne Headless-Lösungen wie Nuxt.js mit einem CMS wie Storyblok überlegen: schnellere Ladezeiten, bessere Core Web Vitals, weniger Sicherheitslücken durch Plugins und geringerer Wartungsaufwand. Wir beraten Sie gerne, welche Technologie zu Ihrem konkreten Use Case passt.',
  },
];

const schemaMarkup = buildSchema(
  organizationSchema(),
  websiteSchema(),
  pageSchema({
    url: 'https://evolatec.de',
    name: 'EvolaTec – Webagentur für Website, SEO & Online Marketing',
    description: 'EvolaTec ist Ihre professionelle Webagentur für Website-Erstellung, SEO-Optimierung und Online Marketing. Moderne Websites ab 3 Tagen Lieferzeit.',
  }),
  serviceListSchema([
    { name: 'Landingpage erstellen lassen', description: 'Konversionsstarke One-Pager für Werbung und Leadgenerierung.', url: 'https://evolatec.de/landingpage-erstellen-lassen', minPrice: 500 },
    { name: 'Firmenwebsite erstellen lassen', description: 'Professionelle Unternehmenswebsites für lokale Firmen und Unternehmen.', url: 'https://evolatec.de/firmenwebsite-erstellen-lassen', minPrice: 1500 },
    { name: 'Online Shop erstellen lassen', description: 'Moderne E-Commerce Lösungen und Shopify Shops.', url: 'https://evolatec.de/online-shop-erstellen-lassen', minPrice: 3000 },
    { name: 'SEO Optimierung', description: 'Mehr Sichtbarkeit bei Google und nachhaltiges Wachstum.', url: 'https://evolatec.de/seo-optimieren-lassen', minPrice: 300 },
    { name: 'Google Ads Betreuung', description: 'Mehr Kundenanfragen durch gezielte Werbekampagnen.', url: 'https://evolatec.de/marketing-google-ads', minPrice: 400 },
  ]),
  faqSchema(homeFaqs),
);

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'Website erstellen lassen: Der Prozess in 4 Schritten',
  description: 'So läuft die professionelle Website-Erstellung bei EvolaTec ab — von der ersten Beratung bis zum Go-Live.',
  totalTime: 'P7D',
  step: [
    { '@type': 'HowToStep', position: 1, name: 'Kostenlose Beratung', text: 'Wir besprechen Ihre Anforderungen, Ziele und Budget in einem unverbindlichen Erstgespräch.' },
    { '@type': 'HowToStep', position: 2, name: 'Struktur & Design', text: 'Planung der Seitenstruktur und Gestaltung nach modernen UI/UX-Standards und Ihrer Markenidentität.' },
    { '@type': 'HowToStep', position: 3, name: 'Entwicklung, SEO & GEO', text: 'Professionelle technische Umsetzung mit Vue.js, Nuxt, vollständiger On-Page-SEO und GEO-Markup für KI-Suchmaschinen.' },
    { '@type': 'HowToStep', position: 4, name: 'Launch & Optimierung', text: 'Gründliches Testen auf allen Geräten, Go-Live und Übergabe mit optionaler Weiterbetreuung.' },
  ],
};

useHead({
  title: 'EvolaTec – Webagentur für Website, SEO & Online Marketing',
  meta: [
    { name: 'description', content: 'EvolaTec ist Ihre professionelle Webagentur für Website-Erstellung, SEO-Optimierung und Online Marketing. Moderne Websites ab 3 Tagen Lieferzeit.' },
    { name: 'keywords', content: 'webagentur, website erstellen lassen, seo agentur, online marketing agentur, homepage erstellen lassen, webdesign agentur' },
    { property: 'og:title', content: 'EvolaTec – Webagentur für Website, SEO & Online Marketing' },
    { property: 'og:description', content: 'Professionelle Websites, SEO und Online Marketing für Unternehmen. Modern, schnell und conversion-optimiert.' },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://evolatec.de' },
  ],
  link: [{ rel: 'canonical', href: 'https://evolatec.de' }, ...hreflangLinks.value],
  script: [
    { type: 'application/ld+json', innerHTML: JSON.stringify(schemaMarkup) },
    { type: 'application/ld+json', innerHTML: JSON.stringify(howToSchema) },
  ],
});

const heroStats = [
  { value: 'ab 3 Tagen', label: 'Lieferzeit', icon: 'flash_on' },
  { value: '100%', label: 'SEO & GEO-ready', icon: 'search_check' },
  { value: 'Alle', label: 'Responsive Design', icon: 'smartphone' },
  { value: 'Transparent', label: 'Preise', icon: 'verified' },
];

const services = [
  {
    id: 1,
    icon: 'article',
    title: 'Landingpage erstellen lassen',
    description: 'Konversionsstarke One-Pager für Werbung und Leadgenerierung.',
    price: 'ab 500€',
    href: '/landingpage-erstellen-lassen',
  },
  {
    id: 2,
    icon: 'language',
    title: 'Firmenwebsite erstellen lassen',
    description: 'Professionelle Unternehmenswebsites für lokale Firmen und Unternehmen.',
    price: 'ab 1.500€',
    href: '/firmenwebsite-erstellen-lassen',
  },
  {
    id: 3,
    icon: 'shopping_bag',
    title: 'Online Shop erstellen lassen',
    description: 'Moderne E-Commerce Lösungen und Shopify Shops.',
    price: 'ab 3.000€',
    href: '/online-shop-erstellen-lassen',
  },
  {
    id: 4,
    icon: 'search_insights',
    title: 'SEO Optimierung',
    description: 'Mehr Sichtbarkeit bei Google und nachhaltiges Wachstum.',
    price: 'ab 300€',
    href: '/seo',
  },
  {
    id: 5,
    icon: 'trending_up',
    title: 'Google Ads Betreuung',
    description: 'Mehr Kundenanfragen durch gezielte Werbekampagnen.',
    price: 'ab 400€/Monat',
    href: '/marketing-google-ads',
  },
  {
    id: 6,
    icon: 'brush',
    title: 'Branding & UI/UX Design',
    description: 'Professionelles Corporate Design, Logoentwicklung und Benutzeroberflächen, die Ihre Marke stärken.',
    price: 'auf Anfrage',
    href: '/design-branding',
  },
  {
    id: 7,
    icon: 'thumb_up',
    title: 'Social Media Marketing',
    description: 'Reichweite, Community-Aufbau und gezielte Social-Media-Kampagnen für Ihr Unternehmen.',
    price: 'ab 300€/Monat',
    href: '/marketing-social-media',
  },
  {
    id: 8,
    icon: 'auto_awesome',
    title: 'GEO / AI-Optimierung',
    description: 'Sichtbarkeit in ChatGPT, Gemini und Perplexity — durch strukturierte Daten, Schema.org und KI-lesbare Inhalte.',
    price: 'Inklusive',
    href: '/geo',
  },
];

const aboutFeatures = [
  {
    icon: 'code_blocks',
    title: 'Moderne Technologien',
    description: 'Entwicklung mit Vue.js, Nuxt, Tailwind CSS und modernen Frontend-Technologien.',
  },
  {
    icon: 'bolt',
    title: 'Fokus auf Performance',
    description: 'Schnelle Ladezeiten, saubere Architektur und optimierte Benutzererfahrung.',
  },
  {
    icon: 'search_insights',
    title: 'SEO, GEO & Sichtbarkeit',
    description: 'Technische SEO & GEO Optimierung für bessere Rankings bei Google und Sichtbarkeit in KI-Suchmaschinen.',
  },
  {
    icon: 'auto_awesome',
    title: 'Individuelle Lösungen',
    description: 'Keine Standard-Themes — jedes Projekt wird individuell entwickelt.',
  },
];

const whyUsPoints = [
  {
    icon: 'bolt',
    title: 'Schnelle & performante Websites',
    description: 'Unsere Websites werden mit modernen Technologien wie Vue.js, Nuxt und Tailwind CSS entwickelt und erreichen starke Core Web Vitals sowie schnelle Ladezeiten.',
  },
  {
    icon: 'search_insights',
    title: 'SEO & GEO Optimierung',
    description: 'Technisches SEO, saubere Strukturen, SSR Rendering und GEO-Markup sorgen für bessere Sichtbarkeit bei Google und in KI-Suchmaschinen wie ChatGPT und Gemini.',
  },
  {
    icon: 'design_services',
    title: 'Modernes Premium Design',
    description: 'Keine Standard-Templates oder veraltete Themes. Wir entwickeln individuelle Benutzeroberflächen mit professionellem UI/UX Design.',
  },
  {
    icon: 'rocket_launch',
    title: 'Skalierbare Technologien',
    description: 'Unsere Lösungen eignen sich perfekt für Unternehmenswebsites, SaaS Plattformen, Landingpages und moderne digitale Produkte.',
  },
  {
    icon: 'security',
    title: 'Sichere & stabile Systeme',
    description: 'Moderne Architektur bedeutet weniger Abhängigkeit von unsicheren Plugins und eine bessere langfristige Wartbarkeit.',
  },
  {
    icon: 'psychology',
    title: 'Strategischer Ansatz',
    description: 'Wir entwickeln nicht nur schöne Websites, sondern digitale Lösungen mit Fokus auf Conversion, Markenauftritt und Wachstum.',
  },
];

const processSteps = [
  {
    icon: 'mail',
    title: 'Kostenlose Beratung',
    description: 'Wir verstehen Ihre Anforderungen und Ziele genau.',
  },
  {
    icon: 'design_services',
    title: 'Struktur & Design',
    description: 'Planung und Gestaltung Ihrer Website.',
  },
  {
    icon: 'code',
    title: 'Entwicklung, SEO & GEO',
    description: 'Technische Umsetzung mit On-Page-SEO und GEO-Markup — damit Ihre Website auch in ChatGPT, Gemini und Perplexity gefunden wird.',
  },
  {
    icon: 'rocket_launch',
    title: 'Launch & Optimierung',
    description: 'Gründliches Testen und professioneller Go-Live.',
  },
];

const pricingTable = [
  { service: 'Landingpage', price: 'ab 500€', delivery: 'ab 3 Tagen' },
  { service: 'Firmenwebsite', price: 'ab 1.500€', delivery: 'ab 7 Tagen' },
  { service: 'Online Shop', price: 'ab 3.000€', delivery: 'ab 14 Tagen' },
  { service: 'Premium E-Commerce', price: 'ab 6.000€', delivery: 'ab 30 Tagen' },
];

const results = [
  { value: '+230%', label: 'mehr Leads' },
  { value: '+180%', label: 'organischer Traffic' },
  { icon: 'bolt', label: 'Schnellere Ladezeiten' },
  { icon: 'trending_up', label: 'Mehr Verkäufe' },
];

const geoPoints = [
  'Strukturierte Daten (Schema.org) für KI-Verständnis',
  'FAQ- und HowTo-Markup für direkte KI-Zitate',
  'Klare Informationsarchitektur für LLM-Crawler',
  'Autoritative Inhalte, die KI-Assistenten empfehlen',
  'Comparison-Content für Kaufentscheidungs-Anfragen',
];

const aiEngines = ['ChatGPT', 'Google Gemini', 'Perplexity', 'Claude', 'Copilot'];

const geoBenefits = [
  { icon: 'smart_toy', title: 'KI-Sichtbarkeit', desc: 'Ihre Website wird von KI-Assistenten als Quelle zitiert und empfohlen.' },
  { icon: 'schema', title: 'Strukturierte Daten', desc: 'Schema.org-Markup für FAQ, HowTo, Services — maschinenlesbar für LLMs.' },
  { icon: 'verified', title: 'Inklusive in jedem Projekt', desc: 'GEO ist kein Aufpreis — es ist Teil unseres Entwicklungsstandards.' },
];

const proofStats = [
  { value: '95–100', label: 'Lighthouse Score', sublabel: 'Performance-Benchmark', icon: 'speed' },
  { value: '+180%', label: 'Mehr organischer Traffic', sublabel: 'Durchschnittliches Kundenergebnis', icon: 'trending_up' },
  { value: 'ab 3 Tagen', label: 'Schnellste Lieferzeit', sublabel: 'Go-Live möglich', icon: 'flash_on' },
  { value: '100%', label: 'Festpreis', sublabel: 'Keine versteckten Kosten', icon: 'verified' },
];

type InclusiveValue = boolean | string;
const inclusiveTable: { feature: string; landing: InclusiveValue; firma: InclusiveValue; shop: InclusiveValue }[] = [
  { feature: 'Responsives Design (Mobile-first)', landing: true, firma: true, shop: true },
  { feature: 'SEO-Grundoptimierung (Meta, Struktur)', landing: true, firma: true, shop: true },
  { feature: 'SSL & schnelles Hosting-Setup', landing: true, firma: true, shop: true },
  { feature: 'Kontaktformular', landing: true, firma: true, shop: true },
  { feature: 'Mehrere Unterseiten', landing: false, firma: true, shop: true },
  { feature: 'Blog / News-Bereich', landing: false, firma: true, shop: true },
  { feature: 'CMS-Zugang (Inhalte selbst pflegen)', landing: false, firma: true, shop: true },
  { feature: 'Produkte & Kategorien', landing: false, firma: false, shop: true },
  { feature: 'Zahlungsabwicklung', landing: false, firma: false, shop: true },
  { feature: 'GEO-Optimierung (ChatGPT, Gemini, Perplexity)', landing: true, firma: true, shop: true },
  { feature: 'Lieferzeit', landing: 'ab 3 Tagen', firma: 'ab 7 Tagen', shop: 'ab 14 Tagen' },
];

const techComparisonRows = [
  { criterion: 'Ladezeit', wp: '3–8 Sekunden', nuxt: '< 1 Sekunde' },
  { criterion: 'Lighthouse Score', wp: '40–70 / 100', nuxt: '95–100 / 100' },
  { criterion: 'Core Web Vitals', wp: 'Oft mangelhaft', nuxt: 'Sehr gut' },
  { criterion: 'Sicherheit', wp: 'Plugin-Schwachstellen', nuxt: 'Kein CMS, keine Angriffsfläche' },
  { criterion: 'SEO-Basis', wp: 'Plugin-abhängig', nuxt: 'Code-tief optimiert' },
  { criterion: 'Wartungsaufwand', wp: 'Hoch (Plugins, Updates)', nuxt: 'Minimal' },
  { criterion: 'Skalierbarkeit', wp: 'Eingeschränkt', nuxt: 'Unbegrenzt' },
];

const faqs = homeFaqs;
</script>

