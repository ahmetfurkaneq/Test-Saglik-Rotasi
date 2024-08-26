<template>
    <div class="flex flex-col items-center mt-10">
      
        <div class="text-center">
          <h3 class="text-6xl font-semibold mb-2">Hasta mı hissediyorsun?</h3>
          <p class="text-4xl text-gray-700 mb-4 mt-5">Sağlık Rotam bir 'click' uzağında..</p>
          <p class="text-sm text-gray-500 mb-0 mt-5">(Her hâlükârda uzmana danışmanız tavsiye edilir.)</p>
          <router-link to="/login" class="text-white bg-green-500 hover:bg-green-600 rounded-md py-2 px-4 mt-10 inline-block text-center">
          Başlayın
        </router-link>

          <img src="~/assets/pictures/doktor.png" alt="Açıklama" class="mt-4 mx-auto" style="width: 550px; height: auto;">
        </div>
      
    </div>
  </template>
  
  <script setup>
  import { useRouter } from 'vue-router';
  const router = useRouter();
  </script>