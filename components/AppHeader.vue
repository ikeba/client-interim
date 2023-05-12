<template>
  <header class="tw-fixed tw-top-0 tw-w-[100%] tw-bg-white tw-px-10 tw-left-[50%] tw-translate-x-[-50%]">
    <div class="container tw-flex tw-justify-between tw-items-center tw-h-[73px] tw-mx-auto">
      <img src="~public/img/logo.svg" alt="Interim">
      <button class="tw-flex md:tw-hidden hover:tw-opacity-60" @click="opened = true">
        MENU
      </button>
      <div :class="{ opened }" class="tw-hidden md:tw-flex menu tw-flex-col md:tw-flex-row tw-justify-center tw-uppercase tw-font-bold tw-text-sm">
        <button class="close-button tw-hidden tw-top-0 tw-p-4 tw-absolute hover:tw-opacity-60" @click="opened = false">
          CLOSE
        </button>
        <a href="#home" @click="opened = false">Home</a>
        <a href="#services" class="tw-pl-10" @click="opened = false">Services</a>
        <a href="#contact" class="tw-pl-10" @click="opened = false">Contact</a>
      </div>
    </div>
  </header>
</template>

<script setup>
const opened = ref(false);
</script>

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
  position: fixed;
  height: 100vh;
  width: 100vw;
  z-index: 10000;
  top: 0;
  left: 0;
  background: #fff;
}

.menu a {
  display: block;
  padding: 1.5rem 0;
  text-align: center;
  width: 100%;
  font-size: 2rem;
}

.opened {
  display: flex;
}

.close-button {
  left: 50%;
  transform: translateX(-50%);
}

.opened .close-button {
  display: block;
}

@media all and (min-width: 768px) {
  .menu {
    display: block;
    position: relative;
    height: auto;
    width: auto;
    z-index: 10000;
  }

  .menu a {
    display: inline-block;
    padding: 0 1rem;
    text-align: center;
    width: auto;
    font-size: inherit;
  }
}

</style>
