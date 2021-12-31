<template>
  <!-- layout -->
  <div class="container mx-auto md:px-16">
    <header class="sm:flex sm:justify-between sm:items-center sm:py-3">
      <div class="flex justify-between items-center py-3 sm:p-0">
        <!-- logo -->
        <div class="w-28 md:px-0">
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
                -top-4
                left-3
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
        class="col-start-1 col-end-3 flex flex-col justify-center px-4 lg:px-0"
      >
        <div class="text-4xl lg:text-6xl font-semibold lg:leading-tight">
          Free Home <span class="text-primary">Delivery Within</span> An Hour
        </div>
        <div class="lg:w-2/3 mt-6">
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
            lg:w-2/3
            flex-col-reverse
            lg:flex-row
            justify-between
            mt-6
          "
        >
          <button
            id="currency"
            name="currency"
            class="
              py-3
              px-4
              mt-4
              lg:mt-0
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
                py-3
                pl-2
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
                py-3
                px-6
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
      <div class="col-start-3 lg:col-start-4 col-end-5">
        <div class="aspect-w-1 aspect-h-2">
          <img src="assets/header/Group 21.jpg" class="object-fit" alt="man" />
        </div>
      </div>

      <!--  -->
    </div>
    <!--  -->
  </div>
  <!-- categories -->
  <section class="md:bg-split-half-v mt-16">
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
      <div class="grid md:grid-cols-3 md:gap-10 mt-6">
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
              <div class="text-base pr-6 lg:pr-24 pl-4 font-semibold">
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
                class="text-base text-white pr-6 lg:pr-24 pl-4 font-semibold"
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
              <div class="text-base pr-6 lg:pr-24 pl-4 font-semibold">
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
  <section class="md:bg-split-half-v-i py-16">
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
      <div class="grid md:grid-cols-3 md:gap-10 my-6">
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

  <!-- about -->
  <section class="bg-slate-900 py-4">
    <div class="container mx-auto lg:px-16 pt-12">
      <!-- grid cards -->
      <div class="grid grid-rows-1 md:gap-0 lg:grid-rows-none lg:grid-cols-2">
        <div
          class="
            row-start-2 row-end-3
            lg:row-start-auto
            lg:row-end-auto
            lg:col-start-1
            lg:col-end-2
            lg:relative
            lg:mt-0
            mt-6
          "
        >
          <div
            class="
              w-96
              mx-auto
              lg:mx-none lg:absolute lg:top-1/2 lg:transform lg:-translate-y-1/2
            "
          >
            <div class="aspect-w-4 aspect-h-3">
              <img
                src="/assets/4/brooke-lark-nTZOILVZuOg-unsplash.jpg"
                class="w-full h-full rounded-4xl object-cover"
                alt="food"
              />
            </div>
          </div>
        </div>
        <div
          class="
            lg:col-start-2 lg:col-end-3
            flex flex-col
            px-4
            lg:px-0
            space-y-6
          "
        >
          <div class="font-bold text-2xl text-white">
            What People Say About Us
          </div>
          <p class="text-sm text-white">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores,
            in quae ratione quas esse placeat minus perspiciatis molestias
            facilis nisi dignissimos aspernatur cupiditate doloribus rem quaerat
            aut doloremque enim laboriosam.
          </p>
          <div
            class="
              flex
              justify-between
              space-y-3
              items-center
              flex-col
              lg:flex-row
            "
          >
            <div class="w-40">
              <div class="aspect-w-3 aspect-h-2">
                <img
                  class="w-full h-full rounded-4xl object-cover"
                  src="/assets/4/3.jpg"
                  alt="food"
                />
              </div>
            </div>
            <div class="w-52">
              <div class="aspect-w-4 aspect-h-3">
                <img
                  class="w-full h-full rounded-4xl object-cover"
                  src="/assets/4/01-150x150.jpg"
                  alt="food"
                />
              </div>
            </div>
            <div class="w-40">
              <div class="aspect-w-3 aspect-h-2">
                <img
                  class="w-full h-full rounded-4xl object-cover"
                  src="/assets/4/03-150x150.jpg"
                  alt="food"
                />
              </div>
            </div>
          </div>

          <div class="text-primary text-xl font-semibold text-center">
            Alaa Eddin Ksibati
          </div>
          <p class="text-sm text-white text-center">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores,
            in quae ratione quas esse placeat minus perspiciatis molestias
            facilis nisi dignissimos aspernatur cupiditate doloribus rem quaerat
            aut doloremque enim laboriosam.
          </p>

          <div class="flex justify-center">
            <div class="bg-primary py-3 rounded-4xl px-6 transform -scale-100">
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
            s
            <div class="bg-primary py-3 rounded-4xl px-6">
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
      <!--  -->
    </div>
  </section>
  <!--  -->
  <!-- chifes -->
  <section class="md:bg-slate-split-half-v py-16">
    <div class="container mx-auto md:px-16">
      <!-- headings -->
      <div class="flex flex-col items-center px-4 md:px-0">
        <div class="text-2xl text-black md:text-white font-semibold">
          Our Chefs
        </div>
        <p class="text-base text-black md:text-white mt-3 md:w-1/2 text-center">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi libero
          asperiores in adipisci, cum quam consequuntur et nam beatae? Quaerat
          tempora non atque voluptate debitis quibusdam alias saepe odio ut.
        </p>
      </div>
      <!--  -->
      <!-- grid cards -->
      <div class="grid gap-4 sm:gap-2 lg:grid-cols-4 lg:gap-10 mt-6">
        <!-- card -->
        <div class="relative">
          <!-- image -->
          <div
            class="aspect-w-4 lg:aspect-w-1 aspect-h-3 lg:aspect-h-1 shadow-sm"
          >
            <img
              class="object-cover lg:rounded-lg"
              src="/assets/4/1.jpg"
              alt="Chef"
            />
          </div>
          <!--  -->

          <!-- action btn -->
          <div
            class="
              absolute
              bottom-0
              right-8
              left-8
              lg:right-0 lg:left-0
              whitespace-nowrap
            "
          >
            <div
              class="
                flex
                items-center
                justify-center
                bg-primary
                rounded-t-lg
                lg:rounded-lg
              "
            >
              <div class="text-xl py-3 xl:py-4 font-bold">Great Chef</div>
            </div>
          </div>
          <!--  -->
        </div>
        <!--  -->
        <!-- card -->
        <div class="relative">
          <!-- image -->
          <div
            class="aspect-w-4 lg:aspect-w-1 aspect-h-3 lg:aspect-h-1 shadow-sm"
          >
            <img
              class="object-cover lg:rounded-lg"
              src="/assets/4/3(2).jpg"
              alt="cheif"
            />
          </div>
          <!--  -->

          <!-- action btn -->
          <div
            class="
              absolute
              bottom-0
              right-8
              left-8
              lg:right-0 lg:left-0
              whitespace-nowrap
            "
          >
            <div
              class="
                flex
                items-center
                justify-center
                bg-primary
                rounded-t-lg
                lg:rounded-lg
              "
            >
              <div class="text-xl py-3 xl:py-4 font-bold">Great Chef</div>
            </div>
          </div>
          <!--  -->
        </div>
        <!--  -->

        <div class="relative">
          <div
            class="aspect-w-4 lg:aspect-w-1 aspect-h-3 lg:aspect-h-1 shadow-sm"
          >
            <img
              class="object-cover lg:rounded-lg"
              src="/assets/4/6.jpg"
              alt="food"
            />
          </div>
          <div
            class="
              absolute
              bottom-0
              right-8
              left-8
              lg:right-0 lg:left-0
              whitespace-nowrap
            "
          >
            <div
              class="
                flex
                items-center
                justify-center
                bg-primary
                rounded-t-lg
                md:rounded-lg
              "
            >
              <div class="text-xl py-3 xl:py-4 font-bold">Great Chef</div>
            </div>
          </div>
        </div>
        <div class="relative">
          <div
            class="aspect-w-4 lg:aspect-w-1 aspect-h-3 lg:aspect-h-1 shadow-sm"
          >
            <img
              class="object-cover lg:rounded-lg"
              src="/assets/4/7.jpg"
              alt="food"
            />
          </div>
          <div
            class="
              absolute
              bottom-0
              right-8
              left-8
              lg:right-0 lg:left-0
              whitespace-nowrap
            "
          >
            <div
              class="
                flex
                items-center
                justify-center
                bg-primary
                rounded-t-lg
                lg:rounded-lg
              "
            >
              <div class="text-xl py-3 xl:py-4 font-bold">Great Chef</div>
            </div>
          </div>
        </div>
      </div>
      <!--  -->
    </div>
  </section>

  <footer class="container mx-auto md:px-16 py-12">
    <div class="grid gap-8 lg:gap-0 lg:grid-cols-5">
      <div
        class="
          flex flex-nowrap
          lg:flex-col
          justify-start
          items-start
          px-4
          space-x-6
          lg:px-0 lg:space-x-0 lg:space-y-8
        "
      >
        <div class="w-20">
          <div class="aspect-1">
            <img
              src="/assets/5+1/Flat.jpg"
              class="full-w full-h object-cover"
              alt="logo"
            />
          </div>
        </div>

        <div class="text-sm w-1/3 lg:w-full">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
          repellendus facilis ex animi id quia exercitationem.
        </div>

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
              py-3
              pl-2
              text-sm
              border-gray-300
              bg-gray-300
              rounded-l-md
            "
            placeholder="Your Email"
          />
          <button
            class="
              h-full
              py-3
              px-6
              border-transparent
              text-white
              bg-black
              font-semibold
              text-sm
              rounded-r-md rounded-l-none
            "
          >
            Send
          </button>
        </div>
      </div>
      <div
        class="
          flex flex-nowrap
          px-4
          space-x-6
          lg:px-0 lg:space-x-0 lg:space-y-8 lg:flex-col
          justify-start
          items-start
          lg:items-center
        "
      >
        <div class="font-semibold text-lg w-24 lg:w-auto">Services</div>
        <div class="text-base">About</div>
        <div class="text-base">Support</div>
        <div class="text-base">Privacy & Policy</div>
      </div>
      <div
        class="
          flex flex-nowrap
          px-4
          space-x-6
          lg:px-0 lg:space-x-0 lg:space-y-8 lg:flex-col
          justify-start
          items-start
          lg:items-center
          
        "
      >
        <div class="font-semibold text-lg w-24 lg:w-auto">Quick links</div>
        <div class="text-base">Collections</div>
        <div class="text-base">Services</div>
        <div class="text-base">Food</div>
        <div class="text-base">Contacts</div>
      </div>
      <div
        class="
          flex flex-nowrap
          px-4
          space-x-6
          lg:px-0 lg:space-x-0 lg:space-y-8 lg:flex-col
          justify-start
          items-start
          lg:items-center
        "
      >
        <div class="font-semibold text-lg w-24 lg:w-auto">Contact Us</div>
        <div class="text-base">+111</div>
        <div class="text-base">alaa.97@gmial.com</div>
        <div class="text-base">Damascus Syria</div>
      </div>
      <div
        class="
          flex flex-nowrap
          px-4
          space-x-6
          lg:px-0 lg:space-x-0 lg:space-y-8 lg:flex-col
          justify-start
          items-start
          lg:items-center
        "
      >
        <div class="font-semibold text-lg w-24 lg:w-auto">Find Us</div>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            style="fill: #000000"
          >
            <path
              d="M 21.800781 0 L 2.199219 0 C 1 0 0 1 0 2.199219 L 0 21.800781 C 0 23 1 24 2.199219 24 L 12 24 L 12 14 L 9 14 L 9 11 L 12 11 L 12 8 C 12 5.5 13 4 16 4 L 19 4 L 19 7 L 17.699219 7 C 16.800781 7 16 7.800781 16 8.699219 L 16 11 L 20 11 L 19.5 14 L 16 14 L 16 24 L 21.800781 24 C 23 24 24 23 24 21.800781 L 24 2.199219 C 24 1 23 0 21.800781 0 Z"
            ></path>
          </svg>
        </div>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            style="fill: #000000"
          >
            <path
              d="M 21.800781 0 L 2.199219 0 C 1 0 0 1 0 2.199219 L 0 21.800781 C 0 23 1 24 2.199219 24 L 21.800781 24 C 23 24 24 23 24 21.800781 L 24 2.199219 C 24 1 23 0 21.800781 0 Z M 7 20 L 3 20 L 3 9 L 7 9 Z M 5 7.699219 C 3.800781 7.699219 3 6.898438 3 5.898438 C 3 4.800781 3.800781 4 5 4 C 6.199219 4 7 4.800781 7 5.800781 C 7 6.898438 6.199219 7.699219 5 7.699219 Z M 21 20 L 17 20 L 17 14 C 17 12.398438 15.898438 12 15.601563 12 C 15.300781 12 14 12.199219 14 14 C 14 14.199219 14 20 14 20 L 10 20 L 10 9 L 14 9 L 14 10.601563 C 14.601563 9.699219 15.601563 9 17.5 9 C 19.398438 9 21 10.5 21 14 Z"
            ></path>
          </svg>
        </div>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            style="fill: #000000"
          >
            <path
              d="M 2.1875 0 C 0.988281 0 0 0.988281 0 2.1875 L 0 21.8125 C 0 23.011719 0.988281 24 2.1875 24 L 21.8125 24 C 23.011719 24 24 23.011719 24 21.8125 L 24 2.1875 C 24 0.988281 23.011719 0 21.8125 0 Z M 9.1875 3.90625 L 13.59375 3.90625 L 12.1875 4.59375 L 11 4.59375 C 11.5 5.09375 12.5 5.898438 12.5 7.5 C 12.5 9.101563 11.585938 9.800781 10.6875 10.5 C 10.386719 10.800781 10.09375 11.101563 10.09375 11.5 C 10.09375 12 10.386719 12.207031 10.6875 12.40625 L 11.5 13 C 12.398438 13.800781 13.3125 14.5 13.3125 16 C 13.3125 18 11.289063 20 7.6875 20 C 4.585938 20 3.09375 18.5 3.09375 17 C 3.09375 16.199219 3.511719 15.207031 4.8125 14.40625 C 6.113281 13.605469 7.90625 13.507813 8.90625 13.40625 C 8.605469 13.007813 8.3125 12.601563 8.3125 12 C 8.3125 11.601563 8.398438 11.386719 8.5 11.1875 L 7.8125 11.1875 C 5.3125 11.289063 4 9.605469 4 7.90625 C 4 6.90625 4.507813 5.792969 5.40625 5.09375 C 6.605469 4.09375 8.085938 3.90625 9.1875 3.90625 Z M 7.90625 4.59375 C 7.304688 4.59375 6.707031 4.914063 6.40625 5.3125 C 6.007813 5.8125 5.90625 6.40625 5.90625 6.90625 C 5.90625 8.304688 6.695313 10.6875 8.59375 10.6875 C 9.09375 10.6875 9.695313 10.394531 10.09375 10.09375 C 10.59375 9.59375 10.59375 8.894531 10.59375 8.59375 C 10.59375 6.992188 9.707031 4.59375 7.90625 4.59375 Z M 17 8 L 19 8 L 19 11 L 22 11 L 22 13 L 19 13 L 19 16 L 17 16 L 17 13 L 14 13 L 14 11 L 17 11 Z M 8.90625 14.09375 C 8.707031 14.09375 7.492188 14.105469 6.59375 14.40625 C 6.09375 14.605469 4.8125 15.09375 4.8125 16.59375 C 4.8125 18.09375 6.292969 19.1875 8.59375 19.1875 C 10.695313 19.1875 11.8125 18.207031 11.8125 16.90625 C 11.8125 15.804688 11.101563 15.195313 9.5 14.09375 Z"
            ></path>
          </svg>
        </div>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            style="fill: #000000"
          >
            <path
              d="M 24 4.300781 C 23.101563 4.699219 22.199219 5 21.199219 5.101563 C 22.199219 4.5 23 3.5 23.398438 2.398438 C 22.398438 3 21.398438 3.398438 20.300781 3.601563 C 19.300781 2.601563 18 2 16.601563 2 C 13.898438 2 11.699219 4.199219 11.699219 6.898438 C 11.699219 7.300781 11.699219 7.699219 11.800781 8 C 7.699219 7.800781 4.101563 5.898438 1.699219 2.898438 C 1.199219 3.601563 1 4.5 1 5.398438 C 1 7.101563 1.898438 8.601563 3.199219 9.5 C 2.398438 9.398438 1.601563 9.199219 1 8.898438 C 1 8.898438 1 8.898438 1 9 C 1 11.398438 2.699219 13.398438 4.898438 13.800781 C 4.5 13.898438 4.101563 14 3.601563 14 C 3.300781 14 3 14 2.699219 13.898438 C 3.300781 15.898438 5.101563 17.300781 7.300781 17.300781 C 5.601563 18.601563 3.5 19.398438 1.199219 19.398438 C 0.800781 19.398438 0.398438 19.398438 0 19.300781 C 2.199219 20.699219 4.800781 21.5 7.5 21.5 C 16.601563 21.5 21.5 14 21.5 7.5 C 21.5 7.300781 21.5 7.101563 21.5 6.898438 C 22.5 6.199219 23.300781 5.300781 24 4.300781"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  </footer>
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
