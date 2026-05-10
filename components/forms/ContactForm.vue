<template>
  <form @submit.prevent="handleSubmit" class="space-y-6">
    <!-- Name Field -->
    <div>
      <label for="name" class="block text-sm font-bold text-on-surface mb-2">
        Name *
      </label>
      <input
        id="name"
        v-model="form.name"
        type="text"
        required
        autocomplete="name"
        placeholder="Ihr Name"
        class="w-full px-4 py-3 rounded-lg border border-surface-container-high focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 text-on-surface placeholder:text-on-surface-variant"
      />
    </div>

    <!-- Email Field -->
    <div>
      <label for="email" class="block text-sm font-bold text-on-surface mb-2">
        E-Mail *
      </label>
      <input
        id="email"
        v-model="form.email"
        type="email"
        required
        autocomplete="email"
        inputmode="email"
        placeholder="ihre.email@beispiel.de"
        class="w-full px-4 py-3 rounded-lg border border-surface-container-high focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 text-on-surface placeholder:text-on-surface-variant"
      />
    </div>

    <!-- Phone Field -->
    <div>
      <label for="phone" class="block text-sm font-bold text-on-surface mb-2">
        Telefon
      </label>
      <input
        id="phone"
        v-model="form.phone"
        type="tel"
        autocomplete="tel"
        inputmode="tel"
        placeholder="+49 (0) 123 456789"
        class="w-full px-4 py-3 rounded-lg border border-surface-container-high focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 text-on-surface placeholder:text-on-surface-variant"
      />
    </div>

    <!-- Company Field -->
    <div>
      <label for="company" class="block text-sm font-bold text-on-surface mb-2">
        Unternehmen
      </label>
      <input
        id="company"
        v-model="form.company"
        type="text"
        autocomplete="organization"
        placeholder="Ihre Firma"
        class="w-full px-4 py-3 rounded-lg border border-surface-container-high focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 text-on-surface placeholder:text-on-surface-variant"
      />
    </div>

    <!-- Service Selection -->
    <div>
      <label for="service" class="block text-sm font-bold text-on-surface mb-2">
        Welche Leistung interessiert Sie? *
      </label>
      <select
        id="service"
        v-model="form.service"
        required
        class="w-full px-4 py-3 rounded-lg border border-surface-container-high focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 text-on-surface bg-white"
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

    <!-- Message Field -->
    <div>
      <label for="message" class="block text-sm font-bold text-on-surface mb-2">
        Nachricht *
      </label>
      <textarea
        id="message"
        v-model="form.message"
        required
        placeholder="Erzählen Sie uns von Ihrem Projekt..."
        rows="6"
        class="w-full px-4 py-3 rounded-lg border border-surface-container-high focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 text-on-surface placeholder:text-on-surface-variant resize-none"
      ></textarea>
    </div>

    <!-- Privacy Checkbox -->
    <div class="flex items-start gap-3">
      <input
        id="privacy"
        v-model="form.privacy"
        type="checkbox"
        required
        class="w-5 h-5 rounded border-surface-container-high text-primary focus:ring-primary mt-1 cursor-pointer"
      />
      <label for="privacy" class="text-sm text-on-surface-variant leading-relaxed">
        Ich akzeptiere die
        <a href="/datenschutz" class="text-primary font-semibold hover:underline">Datenschutzerklärung</a>
        und stimme zu, dass EvolaTec meine Daten zur Kontaktaufnahme nutzen darf. *
      </label>
    </div>

    <!-- Submit Button -->
    <div class="pt-4">
      <BaseButton
        variant="primary"
        size="lg"
        class="w-full"
        type="submit"
        :disabled="isSubmitting"
      >
        {{ isSubmitting ? 'Wird gesendet...' : 'Anfrage senden' }}
      </BaseButton>
    </div>

    <!-- Success Message -->
    <div
      v-if="submitSuccess"
      role="status"
      class="p-4 bg-green-50 border border-green-200 rounded-lg text-green-800 flex items-start gap-3"
    >
      <span class="material-symbols-outlined text-xl flex-shrink-0">check_circle</span>
      <span>Vielen Dank! Ihre Anfrage wurde erfolgreich gesendet. Wir melden uns in Kürze bei Ihnen.</span>
    </div>

    <!-- Error Message -->
    <div
      v-if="submitError"
      role="alert"
      class="p-4 bg-error/10 border border-error/30 rounded-lg text-error flex items-start gap-3"
    >
      <span class="material-symbols-outlined text-xl flex-shrink-0">error</span>
      <span>Ein Fehler ist aufgetreten. Bitte versuchen Sie es später erneut oder kontaktieren Sie uns direkt.</span>
    </div>
  </form>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const form = ref({
  name: '',
  email: '',
  phone: '',
  company: '',
  service: '',
  message: '',
  privacy: false,
});

const isSubmitting = ref(false);
const submitSuccess = ref(false);
const submitError = ref(false);

const handleSubmit = async () => {
  isSubmitting.value = true;
  submitSuccess.value = false;
  submitError.value = false;

  try {
    // Simulate API call - replace with actual endpoint
    await new Promise(resolve => setTimeout(resolve, 1500));

    // Here you would typically send the form data to your backend
    console.log('Form submitted:', form.value);

    submitSuccess.value = true;
    form.value = {
      name: '',
      email: '',
      phone: '',
      company: '',
      service: '',
      message: '',
      privacy: false,
    };

    // Hide success message after 5 seconds
    setTimeout(() => {
      submitSuccess.value = false;
    }, 5000);
  } catch (error) {
    submitError.value = true;
    console.error('Form submission error:', error);
  } finally {
    isSubmitting.value = false;
  }
};
</script>
