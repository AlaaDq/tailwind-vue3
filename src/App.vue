<template>
  <!-- layout -->
  <!-- <div class="container mx-auto">
  </div> -->

  <header class="border-4 border-teal-600">
    <div class="flex justify-between items-center py-3 px-4">
      <!-- logo -->
      <div class="w-28">
        <div class="aspect-w-4 w-full aspect-h-2">
          <img
            :src="'/assets/header/Group\ 18.jpg'"
            alt="logo"
            class="
              w-full
              h-full
              object-center object-contain
              lg:w-full lg:h-full
            "
          />
        </div>
      </div>
      <!--  -->

      <!-- menu btn -->
      <div class="sm:hidden">
        <button
          data-collapse-toggle="mobile-menu"
          @click="toggleCollapse"
          type="button"
          class="
            inline-flex
            items-center
            p-2
            ml-3
            text-sm text-gray-500
            rounded-lg
            md:hidden
            hover:bg-gray-100focus:outline-none
            focus:ring-2 focus:ring-gray-200
          "
          aria-controls="mobile-menu-2"
          aria-expanded="false"
        >
          <span class="sr-only">Open main menu</span>
          <svg
            :class="toggleHideClass"
            class="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <svg
            :class="toggleShowClass"
            class="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
      </div>
    </div>
    <div :class="toggleShowClass" class="px-2 pb-4 pt-2 space-y-1 sm:block">
      <a
        href="#"
        class="
          block
          text-neutral-800
          hover:rounded hover:text-yellow-400 hover:bg-cyan-200
          font-semibold
          px-2
        "
      >
        Home
      </a>
      <a
        href="#"
        class="
          block
          text-neutral-800
          hover:rounded hover:text-yellow-400 hover:bg-cyan-200
          font-semibold
          px-2
        "
      >
        About
      </a>
      <a
        href="#"
        class="
          block
          text-neutral-800
          hover:rounded hover:text-yellow-400 hover:bg-cyan-200
          font-semibold
          px-2
        "
      >
        Services
      </a>
      <a
        href="#"
        class="
          block
          text-neutral-800
          hover:rounded hover:text-yellow-400 hover:bg-cyan-200
          font-semibold
          px-2
        "
      >
        Categories
      </a>
      <a
        href="#"
        class="
          block
          text-neutral-800
          hover:rounded hover:text-yellow-400 hover:bg-cyan-200
          font-semibold
          px-2
        "
      >
        Pages
      </a>
      <a
        href="#"
        class="
          block
          text-neutral-800
          hover:rounded hover:text-yellow-400 hover:bg-cyan-200
          font-semibold
          px-2
        "
      >
        Blog
      </a>
      <a
        href="#"
        class="
          block
          text-neutral-800
          hover:rounded hover:text-yellow-400 hover:bg-cyan-200
          font-semibold
          px-2
        "
      >
        Contact
      </a>
    </div>
  </header>
</template>

<script>
import { computed, ref } from '@vue/reactivity';
export default {
  setup() {
    const mobileNavOpen = ref(false);
    const toggleCollapse = () => {
      mobileNavOpen.value = !mobileNavOpen.value;
    };
    const toggleShowClass = computed(() => {
      return mobileNavOpen.value ? 'block' : 'hidden';
    });
    const toggleHideClass = computed(() => {
      return !mobileNavOpen.value ? 'block' : 'hidden';
    });

    return {
      toggleCollapse,
      toggleShowClass,
      toggleHideClass,
    };
  },
};
</script>

<style lang="scss" scoped></style>
