<template>
  <!-- layout -->
  <div class="container mx-auto md:px-16">
    <header class="sm:flex sm:justify-between sm:items-center sm:py-3">
      <div class="flex justify-between items-center py-3 sm:p-0">
        <!-- logo -->
        <div class="w-28 px-4 md:px-0">
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

        <!-- hamburger btn -->
        <div class="sm:hidden">
          <button
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
          >
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
        <!--  -->
      </div>
      <!-- nav links -->
      <div
        :class="toggleShowClass"
        class="pb-4 pt-2 space-y-1 sm:flex sm:items-center sm:p-0"
      >
        <a
          href="#"
          class="
            block
            hover:rounded
            text-primary
            hover:text-primary hover:bg-cyan-200
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
            hover:rounded hover:text-primary hover:bg-cyan-200
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
            hover:rounded hover:text-primary hover:bg-cyan-200
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
            hover:rounded hover:text-primary hover:bg-cyan-200
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
            hover:rounded hover:text-primary hover:bg-cyan-200
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
            hover:rounded hover:text-primary hover:bg-cyan-200
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
            hover:rounded hover:text-primary hover:bg-cyan-200
            font-semibold
            px-2
          "
        >
          Contact
        </a>
        <a
          href="#"
          class="
            block
            text-neutral-800
            hover:rounded hover:text-primary
            font-semibold
            px-2
          "
        >
          <svg
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
        </a>
        <a
          href="#"
          class="
            block
            text-neutral-800
            hover:rounded hover:text-primary
            font-semibold
            px-2
            md:flex
          "
        >
          <div class="relative mt-4 md:mt-0 inline-block">
            <svg
              class="
                w-6
                h-6
                z-10
                fill-white
                stroke-slate-900
                hover:stroke-primary
              "
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              ></path>
            </svg>
            <span
              class="
                absolute
                -top-1
                right-0
                inline-flex
                items-center
                justify-center
                px-2
                py-1
                text-xs
                font-bold
                leading-none
                text-red-100
                transform
                translate-x-1/2
                -translate-y-1/2
                bg-red-600
                rounded-full
              "
              >2</span
            >
          </div>
        </a>
      </div>
      <!--  -->
    </header>

    <!-- intro -->
    <div class="grid grid-cols-4">
      <!-- left col -->
      <div
        class="col-start-1 col-end-3 flex flex-col justify-center px-4 md:px-0"
      >
        <div class="text-4xl md:text-6xl font-semibold md:leading-tight">
          Free Home <span class="text-primary">Delivery Within</span> An Hour
        </div>
        <div class="md:w-2/3 mt-6">
          <div class="text-sm text-justify">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni
            aspernatur, ratione vitae doloribus soluta aliquid excepturi
            veritatis quas eligendi aperiam eum natus numquam iure
            necessitatibus voluptatibus qui sed enim animi!
          </div>
        </div>
        <div
          class="
            flex
            items-center
            md:w-2/3
            flex-col-reverse
            md:flex-row
            justify-between
            mt-6
          "
        >
          <button
            id="currency"
            name="currency"
            class="
              py-2
              px-4
              mt-4
              md:mt-0
              border-transparent
              text-black
              bg-primary
              text-sm
              rounded-md
              font-semibold
            "
          >
            Order Now
          </button>
          <div class="md:ml-6 relative rounded-md shadow-sm flex items-center">
            <input
              type="text"
              name="price"
              id="price"
              autocomplete="off"
              class="
                focus:ring-indigo-500
                block
                w-full
                py-2
                px-1
                text-sm
                border-gray-300
                bg-gray-300
                rounded-l-md
              "
              placeholder="Enter The Food Name"
            />
            <button
              class="
                h-full
                py-2
                px-4
                border-transparent
                text-black
                bg-primary
                font-semibold
                text-sm
                rounded-r-md rounded-l-none
              "
            >
              search
            </button>
          </div>
        </div>
      </div>
      <!--  -->
      <!-- right col -->
      <div class="col-start-3 md:col-start-4 col-end-5">
        <div class="aspect-w-1 aspect-h-2">
          <img src="assets/header/Group 21.jpg" class="object-fit" alt="man" />
        </div>
      </div>

      <!--  -->
    </div>
    <!--  -->
  </div>

  <!-- categories -->
  <section class="md:h-screen bg-split-half-h md:bg-split-half-v mt-12">
    <div class="container mx-auto md:px-16">
      <!-- headings -->
      <div class="flex flex-col md:w-1/2 px-4 md:px-0">
        <div class="text-2xl font-semibold">Featured Categories</div>
        <p class="text-base mt-3">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi libero
          asperiores in adipisci, cum quam consequuntur et nam beatae? Quaerat
          tempora non atque voluptate debitis quibusdam alias saepe odio ut.
        </p>
      </div>
      <!--  -->
      <!-- grid cards -->
      <div class="grid md:grid-cols-3 gap-8 md:gap-10 mt-6">
        <!-- card -->
        <div class="relative">
          <!-- image -->
          <div
            class="aspect-w-4 md:aspect-w-1 aspect-h-3 md:aspect-h-1 shadow-sm"
          >
            <img
              class="object-cover md:rounded-t-lg"
              src="/assets/2/kristina-bratko-nP11TkjxJ7s-unsplash.jpg"
              alt="food"
            />
          </div>
          <!--  -->

          <!-- action btn -->
          <div
            class="
              absolute
              bottom-8
              right-8
              md:right-1/2 md:transform md:translate-x-1/2
              whitespace-nowrap
            "
          >
            <div class="flex items-center bg-primary px-1 rounded-xl">
              <div class="text-base pr-16 md:pr-24 pl-4 font-semibold">
                Fast Food
              </div>
              <div class="bg-white py-3 rounded-xl px-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </div>
            </div>
          </div>
          <!--  -->
        </div>
        <!--  -->

        <div class="relative">
          <div
            class="aspect-w-4 md:aspect-w-1 aspect-h-3 md:aspect-h-1 shadow-sm"
          >
            <img
              class="object-cover md:rounded-t-lg"
              src="/assets/2/pixzolo-photography-ZB8NK8cB4EE-unsplash.jpg"
              alt="food"
            />
          </div>
          <div
            class="
              absolute
              bottom-8
              right-8
              md:right-1/2 md:transform md:translate-x-1/2
              whitespace-nowrap
            "
          >
            <div class="flex items-center bg-black px-1 rounded-xl">
              <div
                class="text-base text-white pr-16 md:pr-24 pl-4 font-semibold"
              >
                Fast Food
              </div>
              <div class="bg-primary py-3 rounded-xl px-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div class="relative">
          <div
            class="aspect-w-4 md:aspect-w-1 aspect-h-3 md:aspect-h-1 shadow-sm"
          >
            <img
              class="object-cover md:rounded-t-lg"
              src="/assets/2/pixzolo-photography-3tL4vtrFqTQ-unsplash.jpg"
              alt="food"
            />
          </div>
          <div
            class="
              absolute
              bottom-8
              right-8
              md:right-1/2 md:transform md:translate-x-1/2
              whitespace-nowrap
            "
          >
            <div class="flex items-center bg-primary px-1 rounded-xl">
              <div class="text-base pr-16 md:pr-24 pl-4 font-semibold">
                Fast Food
              </div>
              <div class="bg-white py-3 rounded-xl px-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--  -->
    </div>
  </section>
  <!--  -->

  <!-- services  -->
  <section class="md:h-screen bg-split-half-h-i md:bg-split-half-v-i pt-12">
    <div class="container mx-auto md:px-16">
      <!-- headings -->
      <div class="flex flex-col items-center px-4 md:px-0">
        <div class="text-2xl font-semibold">Featured Categories</div>
        <p class="text-base mt-3 md:w-1/2 text-center">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi libero
          asperiores in adipisci, cum quam consequuntur et nam beatae? Quaerat
          tempora non atque voluptate debitis quibusdam alias saepe odio ut.
        </p>
      </div>
      <!--  -->

      <!-- grid cards -->
      <div class="grid md:grid-cols-3 gap-0 md:gap-10 mt-6">
        <!-- card -->
        <div
          class="
            flex
            bg-primary
            md:rounded-xl
            flex-col
            items-center
            justify-center
            p-2
            space-y-4
          "
        >
          <!-- image -->
          <div class="mt-8 rounded-xl p-4 bg-white">
            <div class="w-16">
              <div class="aspect-w-1 aspect-h-1">
                <img
                  class="w-full h-full object-contain"
                  src="/assets/2/services1.jpg"
                  alt="food"
                />
              </div>
            </div>
          </div>
          <!--  -->
          <div class="font-semibold text-center text-lg">Fast Food</div>
          <div class="mx-auto w-3/4 text-sm">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis
            maiores, magni perferendis debitis minus pariatur iste nemo
            consequuntur cum sapiente error voluptatem eos? Fugiat earum commodi
            eaque cum placeat necessitatibus!
          </div>
        </div>
        <!-- card -->

        <div
          class="
            flex
            bg-white
            md:rounded-xl
            flex-col
            items-center
            justify-center
            p-2
            space-y-4
          "
        >
          <div class="mt-8 border-2 border-zinc-900 rounded-xl p-4 bg-white">
            <div class="w-16">
              <div class="aspect-w-1 aspect-h-1">
                <img
                  class="w-full h-full object-contain"
                  src="/assets/2/services2.jpg"
                  alt="food"
                />
              </div>
            </div>
          </div>
          <div class="font-semibold text-center text-lg">Fast Food</div>
          <div class="mx-auto w-3/4 text-sm">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis
            maiores, magni perferendis debitis minus pariatur iste nemo
            consequuntur cum sapiente error voluptatem eos? Fugiat earum commodi
            eaque cum placeat necessitatibus!
          </div>
        </div>
        <!-- card -->

        <div
          class="
            flex
            bg-primary
            md:rounded-xl
            flex-col
            items-center
            justify-center
            p-2
            space-y-4
          "
        >
          <div class="mt-8 rounded-xl p-4 bg-white">
            <div class="w-16">
              <div class="aspect-w-1 aspect-h-1">
                <img
                  class="w-full h-full object-contain"
                  src="/assets/2/services3(2).jpg"
                  alt="food"
                />
              </div>
            </div>
          </div>

          <div class="font-semibold text-center text-lg">Fast Food</div>
          <div class="mx-auto w-3/4 text-sm">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis
            maiores, magni perferendis debitis minus pariatur iste nemo
            consequuntur cum sapiente error voluptatem eos? Fugiat earum commodi
            eaque cum placeat necessitatibus!
          </div>
        </div>
      </div>
      <!--  -->
    </div>
  </section>
  <!--  -->
</template>

<script>
import { computed, ref } from '@vue/reactivity';
import { breakpointsTailwind, useBreakpoints } from '@vueuse/core';
import { watch } from 'vue-demi';
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
    const breakpoints = useBreakpoints(breakpointsTailwind);

    const smAndLarger = breakpoints.greater('sm');
    watch(smAndLarger, (val, oldVal) => {
      if (oldVal === false && val === true) {
        mobileNavOpen.value = false;
      }
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
