<template>
  <div class="tw-p-3">
    <NuxtPage />
  </div>
</template>

<style>
a[href*='//'], a[href*='mailto'] {
  color: #1bb0ce;
}

p, ul {
  font-weight: 300;
  color: #000;
  @apply tw-mb-4;
}

h2, h3, h4, h5 {
  color: #351044;
  font-family: "Ubuntu";
  line-height: 1.25em;
}

h2 {
  @apply tw-text-4xl;
  @apply tw-font-bold;
  @apply tw-text-center;
  @apply tw-mt-1;
  @apply tw-mb-2;
}

h3 {
  @apply tw-text-2xl;
  @apply tw-font-bold;
  @apply tw-mb-2;
}

h5 {
  @apply tw-text-xl;
  @apply tw-font-bold;
  @apply tw-mb-2;
}

ul li {
  position: relative;
  margin-left: 3.5em;
  display: block;
  margin-bottom: 0.2em;
}

ul li:before {
  content: '•';
  position: absolute;
  left: -1em;

}

tr td, tr th {
  padding: 5px;
  font-size: 0.8em;
  border: 1px solid #351044;
}

tr td:first-child {
  word-break: break-all;
}

</style>
