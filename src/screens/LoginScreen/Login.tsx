import React, { useState } from 'react'
import { View, StyleSheet, Alert } from 'react-native'
import InputField from '../../components/InputField'
import LoginButton from '../../components/LoginButton'
import Logo from '../../components/Logo'
import AppTitle from '../../components/AppTitle'
import { validateEmail, validatePassword } from '../../utils/validators'
import { GoogleSigninButton } from '@react-native-google-signin/google-signin'
import { signInWithGoogle } from '../../services/AuthService'

const LoginScreen = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')

  const handleLoginWithEmail = () => {
    let isValid = true

    // Validar email
    if (!validateEmail(email)) {
      setEmailError('Please enter a valid email address.')
      isValid = false
    } else {
      setEmailError('')
    }

    // Validar contraseña
    if (!validatePassword(password)) {
      setPasswordError('Password must be at least 6 characters long.')
      isValid = false
    } else {
      setPasswordError('')
    }

    if (isValid) {
      // Proceder con la lógica de autenticación
      Alert.alert('Success', 'You are logged in!')
    }
  }

  const handleGoogleLogin = async () => {
    try {
      await signInWithGoogle()
      Alert.alert('Success', 'You are logged in with Google!')
    } catch (error) {
      Alert.alert('Error', 'Failed to login with Google. Please try again.')
      console.error('Error during Google authentication', error)
    }
  }

  return (
    <View style={styles.container}>
      <AppTitle title={'Rick & Morty App'} />
      <Logo />
      <InputField
        placeholder="Email"
        onChangeText={(text) => setEmail(text)}
        errorMessage={emailError}
      />
      <InputField
        placeholder="Password"
        secureTextEntry
        onChangeText={(text) => setPassword(text)}
        errorMessage={passwordError}
      />

      <LoginButton title="Login" onPress={handleLoginWithEmail} />

      <GoogleSigninButton
        size={GoogleSigninButton.Size.Wide}
        color={GoogleSigninButton.Color.Dark}
        onPress={handleGoogleLogin}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
})

export default LoginScreen
