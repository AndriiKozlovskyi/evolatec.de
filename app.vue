<template>
  <div class="bg-surface text-on-surface font-body-md overflow-x-hidden">
    <form name="contact-form" netlify netlify-honeypot="website" hidden>
      <input name="name" type="text" />
      <input name="email" type="email" />
      <select name="service">
        <option></option>
      </select>
      <textarea name="message"></textarea>
      <input name="privacy" type="checkbox" />
      <input name="website" type="text" />
    </form>
    <TopNavBar />
    <main class="pt-20">
      <NuxtPage />
    </main>
    <Footer />
    <FloatingContact />
    <SectionDotNav />
  </div>
</template>
