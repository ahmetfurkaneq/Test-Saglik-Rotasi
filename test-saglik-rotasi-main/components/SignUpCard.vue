<template>

    <div class="flex flex-col items-center mt-10">
        <UCard class="w-[500px]">
            
            <template #header>
                <div class="flex justify-between ">
                    <h2 class="text-center">KAYIT OL</h2>
                    <ULink to="/">
                        <UButton class="px-4 py-2 rounded-md bg-green-800" label="Anasayfa"
                            icon="i-heroicons-arrow-uturn-left-16-solid" />
                    </ULink>
            </div>   
            </template>

            <div class="flex flex-col gap-y-5">
                <div class="flex flex-col gap-y-2 w-full">
                    <UInput v-model="isim" placeholder="İsim" class="w-full" size="xl" :padded="true" />
                    <UInput v-model="soyisim" placeholder="Soyisim" class="w-full" size="xl" :padded="true" />
                    <UInput v-model="dogum" placeholder="Doğum Tarihi" class="w-full" size="xl" :padded="true" />
                    <div style="display: flex; margin-left: 10px">
                        <div style="margin-right: 20px;">
                            <label for="male">Erkek </label>
                            <input type="radio" id="male" value="Erkek" v-model="cinsiyet" />
                        </div>
                        <div>
                            <label for="female">Kadın </label>
                            <input type="radio" id="female" value="Kadın" v-model="cinsiyet" />
                        </div>
                    </div>
                    <UInput v-model="email" placeholder="E-mail" class="w-full" size="xl" :padded="true" />
                    <UInput type="password" v-model="password" placeholder="Şifre" size="xl" :padded="true" class="w-full" />
                </div>

            <div class="text-center">
                <ULink to="/login" class="bg-transparent hover:text-blue-500">
                    Hesabınız var mı? Giriş yap
                </ULink>
            </div>
            </div>
            <template #footer>
                <UButton @click="submit" size="xl" class="justify-center w-full">Kayıt Ol
                </UButton>
            </template>
        </UCard>
    </div>
</template>

<<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

// State variables
const isim = ref('');
const soyisim = ref('');
const dogum = ref('');
const cinsiyet = ref(null);
const email = ref('');
const password = ref('');

const router = useRouter();

// Submit function
const submit = () => {
  // Validation and submission logic here

  // Redirect to login page after successful submission
  router.push('/login');
};
</script>
<style scoped></style>

