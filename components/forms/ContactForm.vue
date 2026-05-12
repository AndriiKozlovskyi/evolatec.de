<template>
  <form @submit.prevent="handleSubmit" class="space-y-4">
    <!-- Name + Email side by side on sm+ -->
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div>
        <label for="name" class="block text-sm font-bold text-on-surface mb-1.5">Name *</label>
        <input
          id="name"
          v-model="form.name"
          type="text"
          required
          autocomplete="name"
          placeholder="Ihr Name"
          class="w-full px-4 py-2.5 rounded-lg border border-surface-container-high focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 text-on-surface placeholder:text-on-surface-variant text-sm"
        />
      </div>

      <div>
        <label for="email" class="block text-sm font-bold text-on-surface mb-1.5">E-Mail *</label>
        <input
          id="email"
          v-model="form.email"
          type="email"
          required
          autocomplete="email"
          inputmode="email"
          placeholder="ihre.email@beispiel.de"
          class="w-full px-4 py-2.5 rounded-lg border border-surface-container-high focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 text-on-surface placeholder:text-on-surface-variant text-sm"
        />
      </div>
    </div>

    <!-- Service Selection -->
    <div>
      <label for="service" class="block text-sm font-bold text-on-surface mb-1.5">Was interessiert Sie? *</label>
      <select
        id="service"
        v-model="form.service"
        required
        class="w-full px-4 py-2.5 rounded-lg border border-surface-container-high focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 text-on-surface bg-white text-sm"
      >
        <option value="">-- Bitte wählen --</option>
        <option value="landingpage">Landingpage</option>
        <option value="firmenwebsite">Firmenwebsite</option>
        <option value="online-shop">Online Shop</option>
        <option value="seo">SEO Optimierung</option>
        <option value="google-ads">Google Ads</option>
        <option value="beratung">Kostenlose Beratung</option>
      </select>
    </div>

    <!-- Message (optional) -->
    <div>
      <label for="message" class="block text-sm font-bold text-on-surface mb-1.5">
        Nachricht <span class="font-normal text-on-surface-variant">(optional)</span>
      </label>
      <textarea
        id="message"
        v-model="form.message"
        placeholder="Erzählen Sie uns kurz von Ihrem Projekt..."
        rows="4"
        class="w-full px-4 py-2.5 rounded-lg border border-surface-container-high focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 text-on-surface placeholder:text-on-surface-variant resize-none text-sm"
      ></textarea>
    </div>

    <!-- Honeypot — hidden from real users, bots fill it -->
    <div class="hidden" aria-hidden="true">
      <label for="website">Website</label>
      <input id="website" v-model="form.website" type="text" tabindex="-1" autocomplete="off" />
    </div>

    <!-- Privacy + Submit row -->
    <div class="flex items-start gap-3">
      <input
        id="privacy"
        v-model="form.privacy"
        type="checkbox"
        required
        class="w-5 h-5 rounded border-surface-container-high text-primary focus:ring-primary mt-0.5 cursor-pointer flex-shrink-0"
      />
      <label for="privacy" class="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
        Ich akzeptiere die
        <a href="/datenschutz" class="text-primary font-semibold hover:underline">Datenschutzerklärung</a>. *
      </label>
    </div>

    <BaseButton
      variant="primary"
      size="md"
      class="w-full"
      type="submit"
      :disabled="isSubmitting"
    >
      {{ isSubmitting ? 'Wird gesendet…' : 'Anfrage senden' }}
    </BaseButton>

    <!-- Success Message -->
    <div
      v-if="submitSuccess"
      role="status"
      class="p-3 bg-green-50 border border-green-200 rounded-lg text-green-800 flex items-start gap-2 text-sm"
    >
      <span class="material-symbols-outlined text-lg flex-shrink-0">check_circle</span>
      <span>Vielen Dank! Wir melden uns innerhalb von 24 Stunden.</span>
    </div>

    <!-- Error Message -->
    <div
      v-if="submitError"
      role="alert"
      class="p-3 bg-error/10 border border-error/30 rounded-lg text-error flex items-start gap-2 text-sm"
    >
      <span class="material-symbols-outlined text-lg flex-shrink-0">error</span>
      <span>{{ errorMessage }}</span>
    </div>
  </form>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const form = ref({
  name: '',
  email: '',
  service: '',
  message: '',
  privacy: false,
  website: '', // honeypot
});

const isSubmitting = ref(false);
const submitSuccess = ref(false);
const submitError = ref(false);
const errorMessage = ref('');

const handleSubmit = async () => {
  isSubmitting.value = true;
  submitSuccess.value = false;
  submitError.value = false;
  errorMessage.value = '';

  try {
    await $fetch('/api/contact', {
      method: 'POST',
      body: form.value,
    });

    submitSuccess.value = true;
    form.value = { name: '', email: '', service: '', message: '', privacy: false, website: '' };

    setTimeout(() => { submitSuccess.value = false; }, 6000);
  } catch (error: any) {
    submitError.value = true;
    errorMessage.value = error?.data?.statusMessage || error?.statusMessage || 'Etwas ist schiefgelaufen. Bitte erneut versuchen oder direkt schreiben.';
    console.error('Form submission error:', error);
  } finally {
    isSubmitting.value = false;
  }
};
</script>
