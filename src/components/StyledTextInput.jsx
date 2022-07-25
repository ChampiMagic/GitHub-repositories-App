import React from "react";
import { TextInput, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    Textinput: {
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#999',
        paddingHorizontal: 20,
        paddingVertical: 10,
        marginBottom: 10
    },
    error : {
      borderColor: 'red'
    }
})

const StyledTextInput = ({ style = {}, error, ...props }) => {
  const inputStyles = [
    styles.Textinput,
    style,
    error && styles.error,
  ]
    
  

  return (<TextInput style={inputStyles} {...props} />)
} 

export default StyledTextInput