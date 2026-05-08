<template>
  <button
    :class="[
      'rounded-lg font-bold uppercase transition-transform duration-200 hover:scale-105',
      variantClasses,
      sizeClasses,
    ]"
    v-bind="$attrs"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    variant?: 'primary' | 'secondary' | 'outline';
    size?: 'sm' | 'md' | 'lg';
  }>(),
  {
    variant: 'primary',
    size: 'md',
  }
);

const variantClasses = computed(() => {
  const variants = {
    primary: 'bg-primary text-on-primary hover:bg-opacity-90',
    secondary: 'bg-surface text-primary shadow-lg hover:bg-surface/90',
    outline: 'border border-on-primary-container/30 text-on-primary-container hover:bg-white/10',
  };
  return variants[props.variant];
});

const sizeClasses = computed(() => {
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-8 py-4 text-base',
    lg: 'px-12 py-4 text-lg',
  };
  return sizes[props.size];
});
</script>
