<script setup>
import AppHero from '~/components/landing/AppHero.vue';
import AppServices from '~/components/landing/AppServices.vue';
import AppContact from '~/components/landing/AppContact.vue';
</script>

<template>
  <div>
    <AppHeader />
    <div class="content">
      <AppHero />
      <AppServices />
      <AppContact />
    </div>
    <AppFooter />
  </div>
</template>
