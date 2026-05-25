import { watch } from 'vue';

export default defineNuxtPlugin(() => {
  const { analyticsAllowed, marketingAllowed, hasConsented, focusBanner } = useCookieConsent();

  // Global interaction gate: blocks all click-driven JS before consent is given.
  // Allowed through: navigation links (a[href]), the nav bar (mobile menu), cookie banner buttons.
  document.addEventListener('click', (e) => {
    if (hasConsented.value) return;
    const target = e.target as HTMLElement;
    if (target.closest('a[href], nav, [data-cookie-banner]')) return;
    e.preventDefault();
    e.stopImmediatePropagation();
    focusBanner();
  }, true);

  // ─── Analytics ──────────────────────────────────────────────────────
  // Called when user consents to Analytics cookies.
  // Uncomment and fill in when you add an analytics tool.
  //
  // To add a script:
  //   const el = document.createElement('script');
  //   el.src = 'https://...'; el.async = true;
  //   document.head.appendChild(el);
  //
  // To remove on withdrawal:
  //   document.querySelector('script[src="https://..."]')?.remove();
  function loadAnalytics() {
    // example: inject GA4, Plausible, Matomo, etc.
  }
  function unloadAnalytics() {
    // example: remove GA4 script tag, clear cookies (_ga, _gid, etc.)
  }

  // ─── Marketing ──────────────────────────────────────────────────────
  // Called when user consents to Marketing cookies.
  function loadMarketing() {
    // example: inject Google Ads, Meta Pixel, etc.
  }
  function unloadMarketing() {
    // example: remove ad scripts, clear _fbp cookie etc.
  }

  // ─── React to consent immediately and on every change ───────────────
  watch(analyticsAllowed, (allowed) => {
    if (allowed) loadAnalytics();
    else unloadAnalytics();
  }, { immediate: true });

  watch(marketingAllowed, (allowed) => {
    if (allowed) loadMarketing();
    else unloadMarketing();
  }, { immediate: true });
});
