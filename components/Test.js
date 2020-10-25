import React from 'react';
import { View, Image, StyleSheet,TextInput,Text } from 'react-native';
import {Appbar} from 'react-native-paper'



const Test = ({fields}) => {
  const fieldKeys = Object.keys(fields);
  return fieldKeys.map((key) => {
    const field = fields[key];
    return (
      <View key={key} style={styles.inputContainer}>
        <Text>{field.label}</Text>
        <TextInput {...field.inputProps} style={styles.input} />
      </View>
    );
  });
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    width: 300,
    paddingHorizontal: 5,
    backgroundColor: 'white',
    marginBottom: 5,
  },
  inputContainer: {
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
});
export default Test;
