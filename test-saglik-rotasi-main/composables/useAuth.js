// import { auth } from '~/plugins/firebase'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut as signOutFirebase, signInWithPopup } from 'firebase/auth';

export const useAuth = () => {
  const { $auth: auth , $googleProvider: googleProvider, $facebookProvider: facebookProvider} = useNuxtApp();

  const createUser = async (email, password) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password)
      console.log('createUser trigger')
      // Success
    } catch (error) {
    //   $toast.error(error.message);
    }
  }

  const signIn = async (email, password) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password)
      // Success 
      console.log('signIn trigger: '+ userCredential.user.email)
    } catch (error) {
    //   $toast.error(error.message);
    }
  }

  const signOut = async () => {
    try {
      await signOutFirebase(auth);
      console.log('signOut trigger')
      // Success
    } catch (error) {
    //   $toast.error(error.message);
    }
  }

  const signInWithGoogle = async () => {
    try {
      const userCredential = await signInWithPopup(auth, googleProvider)
      console.log('Google sign-in: '+ userCredential.user.email);
    } catch (error) {
       console.error(error); 
    }
  }

  const signInWithFacebook = async () => {
    try {
      const userCredential = await signInWithPopup(auth, facebookProvider);
      console.log('Facebook sign-in: '+ userCredential.user.email);
    } catch (error) {
       console.error(error); 
    }
  }

  return { createUser, signIn, signOut, signInWithGoogle, signInWithFacebook}
}