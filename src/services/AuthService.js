import { GoogleSignin } from '@react-native-google-signin/google-signin'
import webCLient from '../config/FirebaseConfig'
import auth from '@react-native-firebase/auth'

GoogleSignin.configure({
  webClientId: 'id',
})

export const signInWithGoogle = async () => {
  try {
    await GoogleSignin.hasPlayServices()
    const { idToken } = await GoogleSignin.signIn()
    const googleCredential = auth.GoogleAuthProvider.credential(idToken)
    const userCredential = await auth().signInWithCredential(googleCredential)
    console.log(userCredential.user)
    return userCredential.user
  } catch (error) {
    console.error(error)
    throw error
  }
}
