export default defineNuxtPlugin(() => {
    const useFirebaseUser = () => useState("firebaseUser", () => null);
})