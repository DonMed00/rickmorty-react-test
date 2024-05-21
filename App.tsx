import React from 'react'
import LoginScreen from './src/screens/LoginScreen/Login'
import { initializeFirebase } from './src/config/FirebaseConfig'

const App = () => {
  initializeFirebase()

  return <LoginScreen />
}

export default App
