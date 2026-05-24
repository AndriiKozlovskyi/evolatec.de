import type { RouterConfig } from '@nuxt/schema'

export default <RouterConfig>{
  scrollBehavior(to, _from, savedPosition) {
    if (savedPosition) return savedPosition
    if (to.hash) return { el: to.hash, behavior: 'smooth' }
    // Return false — scroll is handled in beforeEach so it fires
    // at navigation start, not after the page finishes loading.
    return false
  },
}
