<template>
    <div class="mt-10 h-svh">
        <UCard>
            <div>
                <ULink to="/">
                    <UButton class="px-5 py-3 rounded-md bg-green-800" label="Anasayfa"
                        icon="i-heroicons-arrow-uturn-left-16-solid" />
                </ULink>
            </div>
            <div class="flex flex-row justify-center items-center gap-x-2  mt-10 relative">
                <UTextarea v-model="inputData" class="w-full" placeholder="ChatGPT chatbot" />
                <UButton class="px-5 py-3 rounded-md bg-green-800 absolute bottom-3 right-3" @click="sendMessage"
                    label="GÖNDER" icon="i-heroicons-arrow-down-circle-20-solid" :trailing="true" />
            </div>
            <div class="p-10">
                <div v-for="(chat, index) in chatTree" :key="index">
                    <strong>{{ chat.role }} :</strong>
                    <div v-html="chat.content"></div>
                </div>
            </div>
        </UCard>
    </div>
</template>


<script setup>
const { chatCompletion } = useChatgpt()

const chatTree = ref([])
const inputData = ref('')

async function sendMessage() {
    try {
        const message = {
            role: 'user',
            content: `${inputData.value}`,
        }

        chatTree.value.push(message)

        const response = await chatCompletion(chatTree.value, 'gpt-3.5-turbo')

        const responseMessage = {
            role: response[0].message.role,
            content: response[0].message.content
        }

        chatTree.value.push(responseMessage)
    } catch (error) {
        alert(`Join the waiting list if you want to use GPT-4 models: ${error}`)
    }
}
</script>