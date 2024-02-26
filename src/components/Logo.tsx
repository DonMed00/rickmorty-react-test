import React from 'react'
import { View, Image } from 'react-native'

const Logo = () => (
  <View style={{ alignItems: 'center', margin: 20 }}>
    <Image
      source={require('../assets/images/rickmorty-logo.jpg')}
      style={{ width: 100, height: 100 }}
    />
  </View>
)

export default Logo
