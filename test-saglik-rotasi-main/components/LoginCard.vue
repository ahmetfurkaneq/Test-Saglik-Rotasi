<template>
    
    <div class="flex flex-col items-center mt-10">
        <UCard class="w-[500px]">
            
            <template #header>
                <div class="flex justify-between ">
                    <h2 class="text-center">GİRİŞ YAP</h2>
                    <ULink to="/">
                        <UButton class="px-4 py-2 rounded-md bg-green-800" label="Anasayfa"
                            icon="i-heroicons-arrow-uturn-left-16-solid" />
                    </ULink>
            </div>   
            </template>

            <div class="flex flex-col gap-y-5">
                <div class="flex flex-col gap-y-2 w-full">
                    <UInput v-model="email" placeholder="E-mail" class="w-full" size="xl" :padded="true" />
                    <UInput type="password" v-model="password" placeholder="Şifre" size="xl" :padded="true"
                        class="w-full" />
                </div>

            <div class="text-center">
                <ULink to="/signup" class="bg-transparent hover:text-blue-500">
                    Hesabınız yok mu? Kayıt ol
                </ULink>
            </div>

                <div class="flex flex-row gap-x-5 justify-center">
                    <ULink class="w-28 h-28 p-8 shadow shadow-gray-700 rounded-md" @click="signGoogle">
                        <img src="~/assets/pictures/icons8-google-240.png" alt="">
                    </ULink>
                    <ULink class="w-28 h-28 p-8 shadow shadow-gray-700 rounded-md" @click="signFaceBook">
                        <img src="~/assets/pictures/icons8-facebook-240.png" alt="">
                    </ULink>
                </div>
            </div>

            <template #footer>
                <UButton @click="submit" size="xl" class="justify-center w-full">Giriş Yap
                </UButton>
            </template>
        </UCard>
        <UButton @click="userSignOut" label="ÇIKIŞ YAP" size="xl" class="justify-center hidden" />
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useAuth } from '~/composables/useAuth';

const isSignIn = ref(true); // Start with sign-in form
const email = ref('');
const password = ref('');
const router = useRouter();

const { signIn, signOut, signInWithGoogle, signInWithFacebook } = useAuth();

const signGoogle = async () => {
    try {
        await signInWithGoogle();
    } catch (error) {
        console.error("Error signing in with Google:", error);
    }
};

const userSignOut = async () => {
    try {
        await signOut();
        router.push("/");
    } catch (error) {
        console.error("Error signing out:", error);
    }
};

const signFaceBook = async () => {
    try {
        await signInWithFacebook();
    } catch (error) {
        console.error("Error signing in with Facebook:", error);
    }
};

const submit = async () => {
        await signIn(email.value, password.value);
    
};
</script>

<style scoped></style>
