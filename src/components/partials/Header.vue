<script setup lang="ts">
import { ref } from "vue";
import { Icon } from "@iconify/vue";

// ref
const showMenu = ref(false);

const inpLogoUpload = ref<HTMLInputElement | null>(null);
const inpLogoState = ref<string>("");
const showCropper = ref(false);
const showSettings = ref(false);
const showSettingsLogo = ref(false);

// function
const toggleShowMenu = () => {
  showMenu.value = !showMenu.value;
};
const toggleShowSettings = () => {
  showSettings.value = !showSettings.value;
};




</script>

<template>
  <header class="py-2 px-3 font-sans lg:px-0">
    <div
      class="header-wrapper relative z-40 flex w-full items-center justify-between"
    >
      <router-link to="/" class="flex items-center gap-2">
        <img
          src="/assets/images/nass.png"
         
          alt=" Search"
        />
        
      </router-link>
      <button
        class="group flex h-[48px] w-[48px] items-center justify-center rounded-full bg-gray-200 outline-none outline-none lg:hidden"
        @click="toggleShowMenu()"
      >
        <Icon
          icon="fe:app-menu"
          class="text-3xl text-gray-600 transition-all group-hover:text-black"
        />
      </button>
      <div class="hidden gap-2 lg:flex">
       
        <div class="relative text-gray-800">
          <button
            class="group flex items-center justify-center outline-none"
            @click="toggleShowSettings()"
          >
          <img
          src="/assets/images/nas.svg"
          class="h-[50px] w-[50px]"
          alt=" Search"
        />
          </button>
        </div>
      </div>
    </div>
    <!-- BEGIN Mobile Menu -->
    
    <!-- EOL Mobile Menu -->
  </header>
  
  
</template>
