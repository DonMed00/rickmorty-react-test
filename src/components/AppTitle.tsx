import React from 'react'
import { Text, StyleSheet } from 'react-native'

const AppTitle = ({ title }) => <Text style={styles.title}>{title}</Text>

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
    marginBottom: 20,
  },
})

export default AppTitle
