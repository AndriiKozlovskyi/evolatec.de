<template>
  <div>
    <!-- Hero Section -->
    <HeroSection
      background-image="/main/hero.webp"
      badge="Web Design & Web Development Agency"
      title="Professional Website Development for Businesses"
      description="Modern business websites, landing pages and online shops that win customers and grow your business. SEO- & GEO-optimized, fast and conversion-focused."
      primaryCTA="Get a Free Quote"
      secondaryCTA="View Pricing"
      :stats="heroStats"
    />

    <!-- About Us Section -->
    <section
      data-nav-label="About Us"
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
              About EvolaTec
            </span>

            <h2 class="font-headline-xl text-headline-xl text-primary mb-6 leading-[1.1]">
              Modern Web Agency for
              <span class="relative inline-block">
                <span class="relative z-10">Professional</span>
                <span class="absolute -bottom-1 left-0 right-0 h-3 bg-primary/15 rounded-sm -z-0"></span>
              </span>
              Digital Solutions
            </h2>

            <div class="space-y-4 font-body-lg text-on-surface-variant leading-relaxed">
              <p>EvolaTec develops modern websites, business websites, landing pages and digital platforms for companies, startups and local service providers.</p>
              <p>Our focus is on high-performance web development, modern UI/UX design and SEO- & GEO-optimized solutions that not only look professional but deliver measurable results.</p>
              <p>We combine modern technologies like Vue.js, Nuxt, Tailwind CSS and TypeScript to build fast, scalable and high-quality websites for modern businesses.</p>
              <p>Whether it's a business website, e-commerce platform, landing page or custom web solution — EvolaTec supports companies in their professional digital growth.</p>
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
      data-nav-label="Why Us"
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
              Why EvolaTec?
            </span>

            <h2 class="font-headline-xl text-headline-xl text-primary mb-6 leading-[1.1]">
              Modern Web Development for
              <span class="relative inline-block">
                <span class="relative z-10">Businesses</span>
                <span class="absolute -bottom-1 left-0 right-0 h-3 bg-primary/15 rounded-sm -z-0"></span>
              </span>
              with High Standards
            </h2>

            <p class="font-body-lg text-on-surface-variant mb-10 leading-relaxed">
              EvolaTec combines modern web design, high-performance development and SEO- & GEO-optimized technologies for fast, professional and scalable websites.
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

              <div class="absolute top-0 right-8 w-20 h-20 rounded-2xl bg-white shadow-xl flex items-center justify-center rotate-[8deg]">
                <span class="material-symbols-outlined text-primary text-[40px]">code_blocks</span>
              </div>

              <div class="absolute top-20 left-0 bg-white rounded-2xl p-5 shadow-xl rotate-[-5deg]">
                <div class="text-[0.65rem] uppercase tracking-widest font-bold text-on-surface-variant mb-3">Tech Stack</div>
                <div class="flex flex-wrap gap-1.5 max-w-[180px]">
                  <span class="px-2 py-1 rounded-md bg-primary/10 text-primary text-[0.65rem] font-bold">Vue</span>
                  <span class="px-2 py-1 rounded-md bg-primary/10 text-primary text-[0.65rem] font-bold">Nuxt</span>
                  <span class="px-2 py-1 rounded-md bg-primary/10 text-primary text-[0.65rem] font-bold">Tailwind</span>
                  <span class="px-2 py-1 rounded-md bg-primary/10 text-primary text-[0.65rem] font-bold">TypeScript</span>
                </div>
              </div>

              <div class="absolute top-44 right-0 bg-white rounded-2xl p-5 shadow-xl rotate-[5deg]">
                <div class="text-[0.65rem] uppercase tracking-widest font-bold text-on-surface-variant mb-2">Performance</div>
                <div class="font-display text-4xl font-black leading-none text-primary">99<span class="text-lg text-on-surface-variant">/100</span></div>
                <div class="text-xs text-on-surface-variant mt-1">Lighthouse</div>
              </div>

              <div class="absolute bottom-6 left-6 bg-white rounded-2xl p-5 shadow-xl rotate-[-3deg]">
                <div class="text-[0.65rem] uppercase tracking-widest font-bold text-on-surface-variant mb-3">Clean Code</div>
                <div class="flex flex-col gap-1.5 w-32">
                  <div class="h-2 rounded-sm bg-primary w-full"></div>
                  <div class="h-2 rounded-sm bg-primary/30 w-3/4"></div>
                  <div class="h-2 rounded-sm bg-primary/30 w-5/6"></div>
                  <div class="h-2 rounded-sm bg-primary w-2/3"></div>
                </div>
              </div>

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

    <!-- Services Section -->
    <section data-nav-label="Services" data-nav-icon="apps" class="py-8 md:py-section-padding bg-surface">
      <div class="max-w-container-max mx-auto px-gutter">
        <div class="text-center mb-6 md:mb-stack-lg">
          <h2 class="font-display text-3xl sm:text-4xl md:text-5xl font-black text-on-surface mb-2 md:mb-4 leading-tight">Our Services</h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-stack-md">
          <div
            v-for="(service, index) in services"
            :key="service.id"
            class="group relative bg-white rounded-xl md:rounded-2xl p-4 sm:p-6 md:p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-surface-container-high animate-fade-in-up"
            :style="{ animationDelay: `${index * 100}ms` }"
          >
            <div class="w-12 sm:w-16 h-12 sm:h-16 rounded-lg md:rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-gradient-to-br group-hover:from-primary/20 group-hover:to-primary/10 transition-colors duration-300">
              <span class="material-symbols-outlined text-xl sm:text-[2rem] text-primary group-hover:scale-110 transition-transform duration-300">{{ service.icon }}</span>
            </div>
            <h3 class="text-base sm:text-headline-md font-bold text-on-surface mb-2 sm:mb-3">{{ service.title }}</h3>
            <p class="text-sm sm:text-body-md text-on-surface-variant mb-4 sm:mb-6 line-clamp-3">{{ service.description }}</p>
            <p class="text-base sm:text-lg font-black text-primary mb-4 sm:mb-6">{{ service.price }}</p>
            <a
              :href="service.href"
              class="inline-flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all duration-300 text-sm sm:text-base py-2 min-h-[44px]"
            >
              Learn more
              <span class="material-symbols-outlined text-lg">arrow_forward</span>
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Website Types Comparison -->
    <section class="py-8 md:py-section-padding bg-surface-container-low">
      <div class="max-w-container-max mx-auto px-gutter">
        <div class="text-center mb-8 md:mb-stack-lg">
          <h2 class="font-display text-3xl sm:text-4xl font-black text-on-surface leading-tight">Which Website Solution Do I Need?</h2>
          <p class="text-on-surface-variant mt-3 max-w-2xl mx-auto text-sm sm:text-base">Business website, landing page or online shop — find the right solution for your goal and budget.</p>
        </div>
        <div class="grid md:grid-cols-3 gap-5">
          <div class="bg-white rounded-2xl p-7 border border-outline-variant/30 flex flex-col">
            <span class="material-symbols-outlined text-primary text-[2rem] mb-4">article</span>
            <h3 class="font-bold text-on-surface text-lg mb-2">Landing Page</h3>
            <p class="text-sm text-on-surface-variant mb-5 leading-relaxed">Ideal for advertising, product launches and lead generation — a focused page with a clear call to action.</p>
            <ul class="space-y-2.5 text-sm text-on-surface-variant flex-1">
              <li class="flex gap-2 items-start"><span class="material-symbols-outlined text-emerald-500 text-base flex-shrink-0 mt-0.5">check_circle</span>Google Ads & Meta Ads</li>
              <li class="flex gap-2 items-start"><span class="material-symbols-outlined text-emerald-500 text-base flex-shrink-0 mt-0.5">check_circle</span>Short Time-to-Market</li>
              <li class="flex gap-2 items-start"><span class="material-symbols-outlined text-emerald-500 text-base flex-shrink-0 mt-0.5">check_circle</span>Maximum Conversion Rate</li>
            </ul>
            <div class="mt-6 pt-4 border-t border-outline-variant/20 flex items-center justify-between">
              <span class="font-bold text-primary">from €500</span>
              <span class="text-xs text-on-surface-variant">from 3 days</span>
            </div>
          </div>

          <div class="bg-primary rounded-2xl p-7 flex flex-col shadow-xl">
            <span class="material-symbols-outlined text-white text-[2rem] mb-4">language</span>
            <h3 class="font-bold text-white text-lg mb-2">Business Website</h3>
            <p class="text-sm text-on-primary-container mb-5 leading-relaxed">The complete online presence for businesses — multiple pages, SEO visibility and professional design.</p>
            <ul class="space-y-2.5 text-sm text-on-primary-container flex-1">
              <li class="flex gap-2 items-start"><span class="material-symbols-outlined text-white text-base flex-shrink-0 mt-0.5">check_circle</span>Company Presentation</li>
              <li class="flex gap-2 items-start"><span class="material-symbols-outlined text-white text-base flex-shrink-0 mt-0.5">check_circle</span>Long-term SEO Visibility</li>
              <li class="flex gap-2 items-start"><span class="material-symbols-outlined text-white text-base flex-shrink-0 mt-0.5">check_circle</span>Multiple Pages & CMS</li>
            </ul>
            <div class="mt-6 pt-4 border-t border-white/20 flex items-center justify-between">
              <span class="font-bold text-white">from €1,500</span>
              <span class="text-xs text-on-primary-container">from 7 days</span>
            </div>
          </div>

          <div class="bg-white rounded-2xl p-7 border border-outline-variant/30 flex flex-col">
            <span class="material-symbols-outlined text-primary text-[2rem] mb-4">shopping_bag</span>
            <h3 class="font-bold text-on-surface text-lg mb-2">Online Shop</h3>
            <p class="text-sm text-on-surface-variant mb-5 leading-relaxed">For businesses that want to sell products or services online — with Shopify or a custom shop.</p>
            <ul class="space-y-2.5 text-sm text-on-surface-variant flex-1">
              <li class="flex gap-2 items-start"><span class="material-symbols-outlined text-emerald-500 text-base flex-shrink-0 mt-0.5">check_circle</span>Product Management & Variants</li>
              <li class="flex gap-2 items-start"><span class="material-symbols-outlined text-emerald-500 text-base flex-shrink-0 mt-0.5">check_circle</span>Secure Payment Processing</li>
              <li class="flex gap-2 items-start"><span class="material-symbols-outlined text-emerald-500 text-base flex-shrink-0 mt-0.5">check_circle</span>Shopify or Custom Solution</li>
            </ul>
            <div class="mt-6 pt-4 border-t border-outline-variant/20 flex items-center justify-between">
              <span class="font-bold text-primary">from €3,000</span>
              <span class="text-xs text-on-surface-variant">from 14 days</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- What's Included? -->
    <section class="py-8 md:py-section-padding bg-surface">
      <div class="max-w-container-max mx-auto px-gutter">
        <div class="text-center mb-8 md:mb-stack-lg">
          <h2 class="font-display text-3xl sm:text-4xl font-black text-on-surface leading-tight">What's Included With Every Website?</h2>
          <p class="text-on-surface-variant mt-3 max-w-2xl mx-auto text-sm sm:text-base">Every website we build includes these fundamentals — regardless of the package chosen.</p>
        </div>

        <div class="overflow-x-auto rounded-2xl border border-outline-variant/30">
          <table class="w-full min-w-[560px] text-sm">
            <thead>
              <tr class="bg-surface-container-low">
                <th class="text-left p-4 font-bold text-on-surface border-b border-outline-variant/30 w-1/2">Feature</th>
                <th class="text-center p-4 font-bold text-on-surface border-b border-outline-variant/30">Landing Page</th>
                <th class="text-center p-4 font-bold text-primary bg-primary/5 border-b border-outline-variant/30">Business Website</th>
                <th class="text-center p-4 font-bold text-on-surface border-b border-outline-variant/30">Online Shop</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(row, i) in inclusiveTable" :key="i" :class="i % 2 === 0 ? 'bg-white' : 'bg-surface-container-low/40'">
                <td class="p-4 text-on-surface font-medium">{{ row.feature }}</td>
                <td class="p-4 text-center">
                  <template v-if="row.landing === true"><span class="material-symbols-outlined text-emerald-500 text-lg" aria-label="included">check_circle</span></template>
                  <template v-else-if="row.landing === false"><span class="material-symbols-outlined text-on-surface-variant/40 text-lg" aria-label="not included">remove</span></template>
                  <template v-else><span class="text-on-surface-variant text-xs">{{ row.landing }}</span></template>
                </td>
                <td class="p-4 text-center bg-primary/5">
                  <template v-if="row.firma === true"><span class="material-symbols-outlined text-emerald-500 text-lg" aria-label="included">check_circle</span></template>
                  <template v-else-if="row.firma === false"><span class="material-symbols-outlined text-on-surface-variant/40 text-lg" aria-label="not included">remove</span></template>
                  <template v-else><span class="text-primary font-semibold text-xs">{{ row.firma }}</span></template>
                </td>
                <td class="p-4 text-center">
                  <template v-if="row.shop === true"><span class="material-symbols-outlined text-emerald-500 text-lg" aria-label="included">check_circle</span></template>
                  <template v-else-if="row.shop === false"><span class="material-symbols-outlined text-on-surface-variant/40 text-lg" aria-label="not included">remove</span></template>
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
      data-nav-label="Process"
      data-nav-icon="route"
      title="How We Build Your Website — 4 Steps"
      :steps="processSteps"
    />

    <!-- Pricing Overview -->
    <section data-nav-label="Pricing" data-nav-icon="sell" class="py-8 md:py-section-padding bg-surface-container-low">
      <div class="max-w-container-max mx-auto px-gutter">
        <div class="text-center mb-6 md:mb-stack-lg">
          <span class="text-label-md uppercase font-bold text-primary tracking-widest mb-2 block text-xs">Pricing</span>
          <h2 class="font-display text-3xl sm:text-4xl md:text-5xl font-black text-on-surface mb-2 md:mb-4 leading-tight">Website Development Pricing</h2>
          <p class="text-on-surface-variant text-sm sm:text-lg max-w-2xl mx-auto">Transparent pricing for professional web development.</p>
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
                <th class="text-left p-4 font-bold text-on-surface">Service</th>
                <th class="text-left p-4 font-bold text-on-surface">Price</th>
                <th class="text-left p-4 font-bold text-on-surface">Delivery Time</th>
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
          <a href="/en/website-cost-calculator" class="inline-block">
            <BaseButton variant="primary" size="lg">View All Prices</BaseButton>
          </a>
        </div>
      </div>
    </section>

    <!-- Technology Comparison: Nuxt vs WordPress -->
    <section class="py-8 md:py-section-padding bg-surface-container-low">
      <div class="max-w-container-max mx-auto px-gutter">
        <div class="text-center mb-8 md:mb-stack-lg">
          <h2 class="font-display text-3xl sm:text-4xl font-black text-on-surface leading-tight">Why Not WordPress?</h2>
          <p class="text-on-surface-variant mt-3 max-w-2xl mx-auto text-sm sm:text-base">We rely on modern technologies — and that makes a measurable difference.</p>
        </div>

        <div class="overflow-x-auto rounded-2xl border border-outline-variant/30">
          <table class="w-full min-w-[480px] text-sm">
            <thead>
              <tr class="bg-surface-container-low">
                <th class="text-left p-4 font-bold text-on-surface border-b border-outline-variant/30 w-1/3">Criterion</th>
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

        <p class="text-center text-xs text-on-surface-variant mt-4">Values based on real measurements with Google Lighthouse / PageSpeed Insights.</p>
      </div>
    </section>

    <!-- Solutions Section -->
    <section data-nav-label="Solutions" data-nav-icon="category" class="py-8 md:py-section-padding bg-surface border-y border-outline-variant/40">
      <div class="max-w-container-max mx-auto px-gutter">
        <div class="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-stack-lg items-center">
          <div class="space-y-4 md:space-y-stack-md">
            <h2 class="font-display text-3xl sm:text-4xl md:text-5xl font-black text-on-surface mb-4 md:mb-6 leading-tight">Professional Website Development</h2>

            <p class="text-sm sm:text-body-md md:text-body-lg text-on-surface-variant leading-relaxed">
              A professional website is crucial for the success of a business today. At EvolaTec, we develop modern business websites, landing pages and online shops that not only look great, but deliver real results.
            </p>

            <p class="text-sm sm:text-body-md md:text-body-lg text-on-surface-variant leading-relaxed">
              Our websites are SEO- & GEO-optimized, mobile-friendly and designed for conversion. Whether a small business website, landing page for advertising or complex online shop — we develop individual solutions for businesses across Europe.
            </p>

            <div class="pt-6 md:pt-8 flex flex-col sm:flex-wrap sm:flex-row gap-3 sm:gap-4">
              <a href="/en/business-website-design" class="inline-block w-full sm:w-auto">
                <BaseButton variant="primary" size="md" class="w-full sm:w-auto">Business Website</BaseButton>
              </a>
              <a href="/en/landing-page-design" class="inline-block w-full sm:w-auto">
                <BaseButton variant="outline" size="md" class="w-full sm:w-auto">Landing Page</BaseButton>
              </a>
              <a href="/en/online-shop-development" class="inline-block w-full sm:w-auto">
                <BaseButton variant="outline" size="md" class="w-full sm:w-auto">Online Shop</BaseButton>
              </a>
            </div>
          </div>

          <div class="relative">
            <NuxtImg
              src="/web-development/features.webp"
              alt="Laptop with professional website mockup"
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
              GEO: Visible in ChatGPT, Gemini &amp; Co.
            </h2>

            <p class="text-on-surface-variant leading-relaxed mb-4">
              Traditional SEO targets Google. <strong class="text-on-surface">GEO — Generative Engine Optimization</strong> — optimizes your website for the next generation of AI-powered search engines like ChatGPT, Google Gemini, Perplexity and Claude.
            </p>

            <p class="text-on-surface-variant leading-relaxed mb-8">
              More and more people ask their purchase decisions directly to AI assistants. If your business doesn't appear there, you lose inquiries to competitors who are already GEO-optimized.
            </p>

            <ul class="space-y-3 mb-8">
              <li v-for="point in geoPoints" :key="point" class="flex items-center gap-3">
                <span class="material-symbols-outlined text-primary text-lg flex-shrink-0">check_circle</span>
                <span class="text-sm text-on-surface">{{ point }}</span>
              </li>
            </ul>

            <div class="inline-flex items-center gap-2 text-sm font-semibold text-primary bg-primary/8 border border-primary/15 rounded-xl px-5 py-3">
              <span class="material-symbols-outlined text-lg">verified</span>
              GEO optimization is included with every website — no extra charge
            </div>
          </div>

          <!-- Right: visual cards -->
          <div class="space-y-4">
            <div class="bg-surface-container-low rounded-2xl p-6 border border-outline-variant/30">
              <p class="text-xs uppercase tracking-widest font-bold text-on-surface-variant mb-4">AI search engines we optimize for</p>
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

    <!-- FAQ Section -->
    <FAQSection
      data-nav-label="FAQ"
      data-nav-icon="help"
      title="Frequently Asked Questions"
      :faqs="faqs"
    />

    <!-- CTA Section -->
    <CTASection
      data-nav-label="Contact"
      data-nav-icon="send"
      title="Get Your Website Professionally Built"
      description="Modern websites that win customers and grow your business."
      primary-cta="Get a Free Consultation"
      secondary-cta="View Pricing"
    />
  </div>
</template>

<script setup lang="ts">
import { buildSchema, organizationSchema, websiteSchema, pageSchema, serviceListSchema } from '~/composables/schema/global'
import { faqSchema, type FAQ } from '~/composables/schema/service'

const { hreflangLinks } = useLanguageSwitcher()

const homeFaqs: FAQ[] = [
  {
    question: 'How much does a professional website cost?',
    answer: 'Landing pages start from €500, professional business websites from €1,500, online shops from €3,000 and Premium E-Commerce from €6,000. Since every project is different, we provide a transparent fixed-price quote before the project starts. You can also use our pricing calculator for a quick estimate.',
  },
  {
    question: 'How long does website development take?',
    answer: 'Landing pages are live from 3 working days, business websites from 7 working days, online shops from 14 working days. The exact timeframe depends on scope and how quickly content is provided.',
  },
  {
    question: 'Is SEO and GEO included with the website?',
    answer: 'Yes, basic SEO and GEO optimization are included in every project: clean code structure, fast loading times, mobile optimisation, correct meta data, and structured data markup (Schema.org) for AI search engines like ChatGPT, Gemini and Perplexity. For deeper SEO strategies such as keyword research, content optimisation and link building we offer additional SEO packages from €300/month.',
  },
  {
    question: 'Which services does EvolaTec offer?',
    answer: 'EvolaTec offers web design and development (landing pages, business websites, online shops), SEO & GEO optimization (audit, technical optimisation, Local SEO, link building), online marketing (Google Ads, Meta Ads), branding, UI/UX design and website copy – all from a single source.',
  },
  {
    question: 'Do you develop Shopify shops and custom online shops?',
    answer: 'Yes, we develop modern Shopify shops and custom e-commerce solutions with frameworks like Nuxt. Whether fast market launch with Shopify or complex custom solutions – we choose the platform that fits your use case.',
  },
  {
    question: 'Are there fixed prices for websites?',
    answer: 'Yes, we work with transparent fixed prices. You know from the start what your website costs – there are no hidden costs during development.',
  },
  {
    question: 'What is included after the website launch?',
    answer: 'Many of our web development packages include a support phase after launch. On request we also handle ongoing SEO management, marketing campaigns and maintenance so your website stays competitive long-term.',
  },
  {
    question: 'What is the difference between a landing page and a business website?',
    answer: "A landing page is a single, focused page with one clear goal — for example, collecting leads or promoting a product. It's ideal for ad campaigns. A business website consists of multiple pages (home, services, about, contact) and serves as your company's complete online presence. For long-term SEO visibility, the business website is the better choice; for fast conversion campaigns, the landing page.",
  },
  {
    question: 'How do I choose the right web agency?',
    answer: 'Look for: (1) proven references with measurable results, (2) transparent fixed prices without hidden costs, (3) technical expertise in performance, SEO & GEO, (4) clear communication and dedicated contacts. Agencies working with modern technologies (Vue, Nuxt, Tailwind) typically deliver faster and lower-maintenance websites than WordPress-based providers.',
  },
  {
    question: 'Do I absolutely need WordPress for my website?',
    answer: "No. WordPress is widespread, but not automatically the best choice. For many businesses, modern headless solutions like Nuxt.js with a CMS like Storyblok are superior: faster load times, better Core Web Vitals, fewer security vulnerabilities through plugins and lower maintenance effort. We're happy to advise you on which technology best fits your use case.",
  },
]

const schemaMarkup = buildSchema(
  organizationSchema(),
  websiteSchema(),
  pageSchema({
    url: 'https://evolatec.de/en',
    name: 'EvolaTec – Web Agency for Website, SEO & Online Marketing',
    description: 'EvolaTec is your professional web agency for website development, SEO & GEO optimization and online marketing. Modern websites from 3 days delivery time.',
  }),
  serviceListSchema([
    { name: 'Landing Page Design', description: 'Conversion-focused one-pagers for advertising and lead generation.', url: 'https://evolatec.de/en/landing-page-design', minPrice: 500 },
    { name: 'Business Website Design', description: 'Professional company websites for local businesses and enterprises.', url: 'https://evolatec.de/en/business-website-design', minPrice: 1500 },
    { name: 'Online Shop Development', description: 'Modern e-commerce solutions and Shopify shops.', url: 'https://evolatec.de/en/online-shop-development', minPrice: 3000 },
    { name: 'SEO Optimization', description: 'More visibility on Google and sustainable growth.', url: 'https://evolatec.de/en/seo-optimization', minPrice: 300 },
    { name: 'Google Ads Management', description: 'More customer inquiries through targeted advertising campaigns.', url: 'https://evolatec.de/en/google-ads-management', minPrice: 400 },
  ]),
  faqSchema(homeFaqs),
)

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How to Get a Professional Website: 4 Steps',
  description: 'How professional website creation works at EvolaTec — from initial consultation to go-live.',
  totalTime: 'P7D',
  step: [
    { '@type': 'HowToStep', position: 1, name: 'Free Consultation', text: 'We discuss your requirements, goals and budget in a no-obligation initial meeting.' },
    { '@type': 'HowToStep', position: 2, name: 'Structure & Design', text: 'Planning the page structure and design according to modern UI/UX standards and your brand identity.' },
    { '@type': 'HowToStep', position: 3, name: 'Development, SEO & GEO', text: 'Professional technical implementation with Vue.js, Nuxt, full on-page SEO and GEO markup for AI search engines.' },
    { '@type': 'HowToStep', position: 4, name: 'Launch & Optimization', text: 'Thorough testing on all devices, go-live and handover with optional ongoing support.' },
  ],
}

useHead({
  title: 'EvolaTec – Web Agency for Website, SEO & Online Marketing',
  htmlAttrs: { lang: 'en' },
  meta: [
    { name: 'description', content: 'EvolaTec is your professional web agency for website development, SEO & GEO optimization and online marketing. Modern websites from 3 days delivery time.' },
    { name: 'keywords', content: 'web agency, website development, seo agency, geo optimization, online marketing agency, website design, web design agency' },
    { property: 'og:title', content: 'EvolaTec – Web Agency for Website, SEO & Online Marketing' },
    { property: 'og:description', content: 'Professional websites, SEO & GEO and online marketing for businesses. Modern, fast and conversion-optimized.' },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://evolatec.de/en' },
    { property: 'og:locale', content: 'en_US' },
    { property: 'og:locale:alternate', content: 'de_DE' },
  ],
  link: [
    { rel: 'canonical', href: 'https://evolatec.de/en' },
    ...hreflangLinks.value,
  ],
  script: [
    { type: 'application/ld+json', innerHTML: JSON.stringify(schemaMarkup) },
    { type: 'application/ld+json', innerHTML: JSON.stringify(howToSchema) },
  ],
})

const heroStats = [
  { value: 'from 3 Days', label: 'Delivery Time', icon: 'flash_on' },
  { value: '100%', label: 'SEO & GEO-ready', icon: 'search_check' },
  { value: 'All Devices', label: 'Responsive Design', icon: 'smartphone' },
  { value: 'Transparent', label: 'Pricing', icon: 'verified' },
]

const services = [
  {
    id: 1,
    icon: 'article',
    title: 'Landing Page Design',
    description: 'Conversion-focused one-pagers for advertising and lead generation.',
    price: 'from €500',
    href: '/en/landing-page-design',
  },
  {
    id: 2,
    icon: 'language',
    title: 'Business Website Design',
    description: 'Professional company websites for local businesses and enterprises.',
    price: 'from €1,500',
    href: '/en/business-website-design',
  },
  {
    id: 3,
    icon: 'shopping_bag',
    title: 'Online Shop Development',
    description: 'Modern e-commerce solutions and Shopify shops.',
    price: 'from €3,000',
    href: '/en/online-shop-development',
  },
  {
    id: 4,
    icon: 'search_insights',
    title: 'SEO Optimization',
    description: 'More visibility on Google and sustainable growth.',
    price: 'from €300',
    href: '/en/seo-optimization',
  },
  {
    id: 5,
    icon: 'trending_up',
    title: 'Google Ads Management',
    description: 'More customer inquiries through targeted advertising campaigns.',
    price: 'from €400/month',
    href: '/en/google-ads-management',
  },
  {
    id: 6,
    icon: 'brush',
    title: 'Branding & UI/UX Design',
    description: 'Professional corporate design, logo development and user interfaces that strengthen your brand.',
    price: 'on request',
    href: '/en/design-branding',
  },
  {
    id: 7,
    icon: 'thumb_up',
    title: 'Social Media Marketing',
    description: 'Reach, community building and targeted social media campaigns for your business.',
    price: 'from €300/month',
    href: '/en/social-media-marketing',
  },
  {
    id: 8,
    icon: 'auto_awesome',
    title: 'GEO / AI Optimization',
    description: 'Visibility in ChatGPT, Gemini and Perplexity — through structured data, Schema.org and AI-readable content.',
    price: 'Included',
    href: '/en/ai-optimization',
  },
]

const aboutFeatures = [
  {
    icon: 'code_blocks',
    title: 'Modern Technologies',
    description: 'Development with Vue.js, Nuxt, Tailwind CSS and modern frontend technologies.',
  },
  {
    icon: 'bolt',
    title: 'Performance Focus',
    description: 'Fast load times, clean architecture and optimized user experience.',
  },
  {
    icon: 'search_insights',
    title: 'SEO, GEO & Visibility',
    description: 'Technical SEO & GEO optimization for better rankings in Google and AI search engines.',
  },
  {
    icon: 'auto_awesome',
    title: 'Custom Solutions',
    description: 'No standard themes — every project is individually developed.',
  },
]

const whyUsPoints = [
  {
    icon: 'bolt',
    title: 'Fast & High-Performance Websites',
    description: 'Our websites are built with modern technologies like Vue.js, Nuxt and Tailwind CSS, achieving strong Core Web Vitals and fast load times.',
  },
  {
    icon: 'search_insights',
    title: 'SEO & GEO Optimization',
    description: 'Technical SEO, clean structures, SSR rendering and GEO markup ensure better visibility on Google and in AI search engines like ChatGPT and Gemini.',
  },
  {
    icon: 'design_services',
    title: 'Modern Premium Design',
    description: "No standard templates or outdated themes. We develop individual user interfaces with professional UI/UX design.",
  },
  {
    icon: 'rocket_launch',
    title: 'Scalable Technologies',
    description: 'Our solutions are perfect for business websites, SaaS platforms, landing pages and modern digital products.',
  },
  {
    icon: 'security',
    title: 'Secure & Stable Systems',
    description: 'Modern architecture means less dependency on insecure plugins and better long-term maintainability.',
  },
  {
    icon: 'psychology',
    title: 'Strategic Approach',
    description: "We don't just build beautiful websites, but digital solutions focused on conversion, brand presence and growth.",
  },
]

const processSteps = [
  {
    icon: 'mail',
    title: 'Free Consultation',
    description: 'We understand your requirements and goals precisely.',
  },
  {
    icon: 'design_services',
    title: 'Structure & Design',
    description: 'Planning and design of your website.',
  },
  {
    icon: 'code',
    title: 'Development, SEO & GEO',
    description: 'Technical implementation with full SEO optimization and GEO markup — so your website is found in ChatGPT, Gemini and Perplexity too.',
  },
  {
    icon: 'rocket_launch',
    title: 'Launch & Optimization',
    description: 'Thorough testing and professional go-live.',
  },
]

const pricingTable = [
  { service: 'Landing Page', price: 'from €500', delivery: 'from 3 days' },
  { service: 'Business Website', price: 'from €1,500', delivery: 'from 7 days' },
  { service: 'Online Shop', price: 'from €3,000', delivery: 'from 14 days' },
  { service: 'Premium E-Commerce', price: 'from €6,000', delivery: 'from 30 days' },
]

const geoPoints = [
  'Structured data (Schema.org) for AI comprehension',
  'FAQ and HowTo markup for direct AI citations',
  'Clear information architecture for LLM crawlers',
  'Authoritative content that AI assistants recommend',
  'Comparison content for purchase decision queries',
]

const aiEngines = ['ChatGPT', 'Google Gemini', 'Perplexity', 'Claude', 'Copilot']

const geoBenefits = [
  { icon: 'smart_toy', title: 'AI Visibility', desc: 'Your website is cited and recommended by AI assistants as a source.' },
  { icon: 'schema', title: 'Structured Data', desc: 'Schema.org markup for FAQ, HowTo, Services — machine-readable for LLMs.' },
  { icon: 'verified', title: 'Included in Every Project', desc: "GEO is not an add-on — it's part of our development standard." },
]

const proofStats = [
  { value: '95–100', label: 'Lighthouse Score', sublabel: 'Performance Benchmark', icon: 'speed' },
  { value: '+180%', label: 'More Organic Traffic', sublabel: 'Average Client Result', icon: 'trending_up' },
  { value: 'from 3 Days', label: 'Fastest Delivery', sublabel: 'Go-Live Possible', icon: 'flash_on' },
  { value: '100%', label: 'Fixed Price', sublabel: 'No Hidden Costs', icon: 'verified' },
]

type InclusiveValue = boolean | string
const inclusiveTable: { feature: string; landing: InclusiveValue; firma: InclusiveValue; shop: InclusiveValue }[] = [
  { feature: 'Responsive Design (Mobile-first)', landing: true, firma: true, shop: true },
  { feature: 'Basic SEO Optimization (Meta, Structure)', landing: true, firma: true, shop: true },
  { feature: 'SSL & Fast Hosting Setup', landing: true, firma: true, shop: true },
  { feature: 'Contact Form', landing: true, firma: true, shop: true },
  { feature: 'Multiple Sub-pages', landing: false, firma: true, shop: true },
  { feature: 'Blog / News Section', landing: false, firma: true, shop: true },
  { feature: 'CMS Access (Edit Content Yourself)', landing: false, firma: true, shop: true },
  { feature: 'Products & Categories', landing: false, firma: false, shop: true },
  { feature: 'Payment Processing', landing: false, firma: false, shop: true },
  { feature: 'GEO Optimization (ChatGPT, Gemini, Perplexity)', landing: true, firma: true, shop: true },
  { feature: 'Delivery Time', landing: 'from 3 days', firma: 'from 7 days', shop: 'from 14 days' },
]

const techComparisonRows = [
  { criterion: 'Load Time', wp: '3–8 seconds', nuxt: '< 1 second' },
  { criterion: 'Lighthouse Score', wp: '40–70 / 100', nuxt: '95–100 / 100' },
  { criterion: 'Core Web Vitals', wp: 'Often poor', nuxt: 'Excellent' },
  { criterion: 'Security', wp: 'Plugin vulnerabilities', nuxt: 'No CMS, no attack surface' },
  { criterion: 'SEO Foundation', wp: 'Plugin-dependent', nuxt: 'Code-deep optimized' },
  { criterion: 'Maintenance Effort', wp: 'High (plugins, updates)', nuxt: 'Minimal' },
  { criterion: 'Scalability', wp: 'Limited', nuxt: 'Unlimited' },
]

const faqs = homeFaqs
</script>
