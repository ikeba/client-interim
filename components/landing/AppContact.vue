<template>
  <div id="contact" class="landing-section tw-flex tw-flex-col">
    <h1 class="tw-text-4xl tw-text-white tw-text-center tw-font-[800] tw-my-[30px]">
      Contact
    </h1>
    <div class="container tw-self-center tw-flex tw-flex-col md:tw-flex-row tw-p-4 tw-h-full">
      <div class="tw-w-full tw-text-white tw-pr-5 tw-self-start">
        <form>
          <div>
            <label for="first" class="tw-mb-2 tw-block">Name</label>
            <div class="tw-flex tw-mb-5">
              <input type="text" name="first">
              <input type="text" name="last" class="tw-ml-5">
            </div>
            <div class="tw-mb-5">
              <label for="first" class="tw-mb-2 tw-block">Email</label>
              <input type="email">
            </div>
            <div class="tw-mb-5">
              <label for="first" class="tw-mb-2 tw-block">Comment or Message </label>
              <textarea />
            </div>
            <div />
            <div class="tw-text-center">
              <button type="button" @click="null">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
      <div class="tw-w-full">
        <!--        <iframe-->
        <!--          class="tw-mt-[32px]"-->
        <!--          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d22872.92107939696!2d15.995139368173689!3d45.81261027038296!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4765d7b4c52d4fd9%3A0xa1ca517ab9e6767f!2sUl.%20Stara%20Pe%C5%A1%C4%87enica%20IV%201%2C%2010000%2C%20Zagreb%2C%20Croatia!5e0!3m2!1sen!2sus!4v1683896770531!5m2!1sen!2sus"-->
        <!--          allowfullscreen=""-->
        <!--          loading="lazy"-->
        <!--          referrerpolicy="no-referrer-when-downgrade"-->
        <!--        />-->
      </div>
    </div>
  </div>
</template>

<script setup>

</script>
<style scoped>
.landing-section {
  background: url('/img/bgr.png') center center / cover no-repeat #350F45;
}

iframe {
  max-width: 100%;
  width: 100%;
  height: 500px;
  border: none;
}

form input, form textarea {
  border: 1px solid #fff;
  background: transparent;
  display: block;
  width: 100%;
  padding: .7em;
  border-radius: 0;
  color: #fff;
}

form input:focus, form textarea:focus {
  outline: none;
}

button {
  padding: .7em;
  border: 1px solid #fff;
}

</style>
