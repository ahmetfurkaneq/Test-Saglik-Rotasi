<template>
    <div class="flex flex-col items-center mt-10">
      <UCard class="w-[500px]">
        <template #header>
          <div class="flex justify-between ">
            <h2 class="text-center">Sorun Bildir</h2>
            <ULink to="/">
              <UButton class="px-4 py-2 rounded-md bg-green-800" label="Anasayfa" icon="i-heroicons-arrow-uturn-left-16-solid" />
            </ULink>
          </div>
        </template>
        
        <div class="flex flex-col gap-y-5">
          <div class="flex flex-col gap-y-2 w-full">
            <UInput v-model="email" placeholder="E-mail" class="w-full" size="xl" :padded="true" />
            <textarea v-model="mesaj" placeholder="Sorununuzu açıklayın" class="w-full h-32 p-2 resize-none border rounded-md" :padded="true"></textarea>
          </div>
  
          <div class="text-center">
            <UButton @click="submit" size="xl" class="justify-center w-full">Gönder</UButton>
          </div>
        </div>
  
        <template #footer>
        
        </template>
      </UCard>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  
  const email = ref('');
  const mesaj = ref('');
  
  const router = useRouter();
  
  const submit = () => {
      router.push('/');
  };
  </script>
<style scoped></style>

