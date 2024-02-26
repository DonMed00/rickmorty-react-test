import React from 'react'
import { TextInput, View, StyleSheet, Text } from 'react-native'

const InputField = ({
  placeholder,
  secureTextEntry = false,
  onChangeText,
  errorMessage,
}) => (
  <View style={styles.inputContainer}>
    <TextInput
      placeholder={placeholder}
      secureTextEntry={secureTextEntry}
      style={styles.input}
      onChangeText={onChangeText}
    />
    {!!errorMessage && <Text style={styles.errorText}>{errorMessage}</Text>}
  </View>
)

const styles = StyleSheet.create({
  inputContainer: {
    marginBottom: 15,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
  },
  errorText: {
    marginTop: 5,
    color: 'red',
  },
})

export default InputField
