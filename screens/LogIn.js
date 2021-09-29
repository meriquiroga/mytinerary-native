import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import axios from 'axios'

const LogIn = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.formTitle} >Log into your account</Text>
      <View style={styles.formContainer}>
        <TextInput style={styles.formInput} placeholder="E-mail" />
        <TextInput style={styles.formInput} placeholder="Password" />
        <TouchableOpacity>
            <View style={styles.button}>
              <Text style={styles.buttonText} onPress={() => {}}>LOG IN</Text>
            </View>
          </TouchableOpacity>
          <Text style={styles.buttonText}>Don't have an account? Sign up here</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',

  },
  formContainer: {
    backgroundColor: '#0b3f78',
    width: '92%',
    paddingBottom: 25
  }, 
  formTitle: {
    fontSize: 18,
    paddingVertical: 15
  },
  formInput: {
    backgroundColor: 'white',
    borderRadius: 50,
    padding: 10,
    marginTop: 30,
    marginHorizontal: 30,
  },
  button: {
    backgroundColor: "#1aa5bc",
    borderRadius: 80,
    paddingHorizontal: 16,
    marginHorizontal: 100,
    paddingVertical: 10,
    margin: 30
  },
  buttonText: {
    color: "white",
    textAlign: 'center'
  },
});

export default LogIn