export default defineNuxtPlugin(() => {
  const router = useRouter();
  router.beforeEach((to, from) => {
    if (!to.hash && to.path !== from.path) {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }
  });
});
