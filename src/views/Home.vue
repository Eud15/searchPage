<script setup lang="ts">
import { onMounted, ref } from "vue";
import { Icon } from "@iconify/vue";
import { useRouter } from "vue-router";

import Header from "@/src/components/partials/Header.vue";
import Footer from "@/src/components/partials/Footer.vue";

const router = useRouter();

// ref
const inpSearch = ref("");

const inpLogoState = ref<string>("");

// mounted
onMounted(() => {
  window.scroll(0, 0);
  document.title = "Search | " + import.meta.env.VITE_TITLE;
  // check logo
  const getLogoImg = window.localStorage.getItem("asLogo");
  if (getLogoImg == null) {
    window.localStorage.setItem("asLogo", "");
  } else {
    inpLogoState.value = getLogoImg;
  }
});

// handler
const handleSubmit = () => {
  if (inpSearch.value) {
    router.push({
      name: "Halaman Pencarian",
      params: { searchQuery: inpSearch.value },
    });
  }
};

const onSubmit = () => {
  console.log("search...");
};
</script>

<template>
  <Header />
  <main class="mt-4 min-h-[300px]">
    <!-- BEGIN Search Form -->
    <div class="mx-auto mb-12 flex max-w-2xl flex-col px-5 lg:px-0 my-10">
      <div class="flex items-center justify-center">
        
        <img
          
          class=""
          src="/assets/images/HUB.png"
          alt="logo"
        />
      </div>
      <form class="relative mt-4 w-full" @submit.prevent="onSubmit()">
        <label for="search-input" class="text-gray-500">
          <input
            id="search-input"
            v-model="inpSearch"
            type="search"
            class="home-search block w-full rounded-full border border-violet-900 bg-white py-5 pl-14 pr-5 text-sm font-normal shadow-lg outline-none focus:border-violet-900 focus:ring focus:ring-violet-200 focus:ring-opacity-50 disabled:bg-gray-200 md:pl-16"
            placeholder="Search new"
          />
          <button
            class="focus:ring-blue-6000 absolute right-2.5 top-1/2 flex h-11 w-11 -translate-y-1/2 transform items-center justify-center rounded-full bg-violet-600 !leading-none text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:bg-opacity-70"
            type="submit"
            @click.prevent="handleSubmit()"
          >
            <Icon icon="fe:arrow-right" class="text-xl" />
          </button>
          <span
            class="absolute left-5 top-1/2 -translate-y-1/2 transform text-2xl md:left-6"
          >
            <svg
              class="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                d="M22 22L20 20"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
          </span>
        </label>
      </form>
    </div>
    <div class="flex justify-center">
    <div class="w-full max-w-6xl">
      <div class="text-center mb-8">
        <p class="text-gray-600">
          All the trends at your fingertips 
          
        </p>
        <div class="flex flex-col items-center">
          <Icon icon="fe:arrow-down" class="text-xl" />
        </div>
        
      </div>
      <div class="flex flex-wrap justify-center">
        <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/4 p-6">
          <div class="bg-white border rounded-lg shadow-lg overflow-hidden">
            <img class="w-25  h-auto mx-auto" src="/assets/images/reflexion.png" alt="Image 1 text-center">
            <div class="p-4 text-sm text-justify">              
              <p>Naviguez comme d’habitude, et nous nous occupons du reste. Nous avons combiné notre moteur de recherche, bloqueur de traqueurs et améliorateur de chiffrement en une</p>
            </div>
          </div>
        </div>
        <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/4 p-6">
          <div class="bg-white border rounded-lg shadow-lg overflow-hidden">
            <img class="w-25  h-auto mx-auto" src="/assets/images/good vibes.png" alt="Image 2">
            <div class="p-4 text-justify text-sm">
              
              <p>Naviguez comme d’habitude, et nous nous occupons du reste. Nous avons combiné notre moteur de recherche, bloqueur de traqueurs et améliorateur de chiffrement en une</p>
            </div>
          </div>
        </div>
        <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/4 p-6">
          <div class="bg-white border rounded-lg shadow-lg overflow-hidden">
            <img class="w-25  h-auto mx-auto" src="/assets/images/bad vibes.png"  alt="Image 3">
            <div class="p-4 text-sm text-justify">
              <p>Naviguez comme d’habitude, et nous nous occupons du reste. Nous avons combiné notre moteur de recherche, bloqueur de traqueurs et améliorateur de chiffrement en une</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    <!-- EOL Search Form -->
  </main>
  <Footer />
</template>
