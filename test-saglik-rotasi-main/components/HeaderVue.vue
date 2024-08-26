<template>
    <UContainer class="bg-green-400">
        <div class="flex flex-row justify-between items-center w-full">
            <ULink to="/">
                <img class="h-24 w-24" src="~/assets/pictures/Sağlık Rotam_transparent.png" alt="logo">
            </ULink>
            <UHorizontalNavigation :links="links" class="border-gray-200 dark:border-gray-800 justify-end" />
            <ClientOnly>
                <UButton :icon="isDark ? 'i-heroicons-moon-20-solid' : 'i-heroicons-sun-20-solid'" color="gray"
                    variant="ghost" aria-label="Theme" @click="isDark = !isDark" />
                <template #fallback>
                    <div class="w-8 h-8">Loading</div>
                </template>
            </ClientOnly>
        </div>
    </UContainer>
</template>

<script setup lang="ts">
const route = useRoute()

const colorMode = useColorMode()
const isDark = computed({
    get() {
        return colorMode.value === 'dark'
    },
    set() {
        colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
    }
})

const links = [{
    label:'KAYIT OL',
    icon:'i-heroicons-user-plus',
    to:'/signup'
},{
    label: 'GİRİŞ YAPIN',
    icon: 'i-heroicons-arrow-right-end-on-rectangle',
    to: '/login'
}, {
    label: 'TEST EDİN',
    icon: 'i-heroicons-command-line',
    to: '/chatbot'
},{
    label:'SORUN BİLDİR',
    icon:'i-heroicons-question-mark-circle',
    to:'/help'
}]
</script>



