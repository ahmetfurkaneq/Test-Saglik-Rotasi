import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth , GoogleAuthProvider, FacebookAuthProvider} from 'firebase/auth'

export default defineNuxtPlugin(() => {
    // Access the private config
    const runtimeConfig = useRuntimeConfig()
    
    // Your web app's Firebase configuration
    const firebaseConfig = {
        apiKey: runtimeConfig.public.API_KEY,
        authDomain: runtimeConfig.public.AUTH_DOMAIN,
        projectId: runtimeConfig.public.PROJECT_ID,
        storageBucket: runtimeConfig.public.STORAGE_BUCKET,
        messagingSenderId: runtimeConfig.public.MESSAGING_SENDER_ID,
        appId: runtimeConfig.public.APP_ID
    };

    const app = initializeApp(firebaseConfig)
    const db = getFirestore(app)
    const auth = getAuth(app)

    // Providers
    const googleProvider = new GoogleAuthProvider();
    const facebookProvider = new FacebookAuthProvider();

    return {
      provide: {
        app: app,
        db: db,
        auth: auth,
        googleProvider: googleProvider,
        facebookProvider: facebookProvider
      }
    }
})