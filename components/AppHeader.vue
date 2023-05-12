<script setup lang='ts'>
</script>
<template>
  <header class="tw-fixed tw-top-0 tw-w-[100%] tw-bg-white tw-px-10 tw-left-[50%] tw-translate-x-[-50%]">
    <div class="container tw-flex tw-justify-between tw-items-center tw-h-[73px] tw-mx-auto">
      <img src="img/logo.svg" alt="Interim">
      <div class="menu tw-uppercase tw-font-bold tw-text-sm tw-fixed md:tw-relative">
        <a href="#home">Home</a>
        <a href="#services" class="tw-pl-10">Services</a>
        <a href="#contact" class="tw-pl-10">Contact</a>
      </div>
    </div>
  </header>
</template>

<style scoped>
header {
  box-shadow: 0 4px 0 rgba(34, 34, 34, 0.03);
}

.menu a {
  transition: color 0.3s ease-in-out;
  color: #351044;
}

.menu a:hover {
  @apply tw-text-gray-400;
}

.menu {
  height: 100%;
  width: 100%;
  z-index: 10000;
}

@media not all and (min-width: 768px) {
.menu {
  height: auto;
  width: auto;
}
}
</style>
