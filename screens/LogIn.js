import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { useState } from "react";
import {connect} from 'react-redux'
import usersActions from '../redux/actions/usersActions'

const LogIn = (props) => {

  const [userInfo, setUserInfo] = useState({
    email: '',
    password: '',
  })
  const [error, setError] = useState()

  const formSubmit = async (e) => {
    e.preventDefault()
    if (Object.keys(userInfo).some(property => userInfo[property] === '')) {
      setError('All fields are required.')
      return false
    } else if (!userInfo.email.includes('@')) {
      setError('Please verify your e-mail.')
      return false
    } else {
      try {
        let response = await props.logIn(userInfo)
          if (response.data.success) {
            console.log('User logueado')
            props.navigation.navigate('cities')
            /* toast('You are logged in!', {
              position: "top-center",
              autoClose: 4000,
              hideProgressBar: true,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              }); */
            }
      } catch (newError) {
        if (newError.data) {
          setError(newError.data.error)
        } else {
          console.log('There was a connection error.')
          props.navigation.navigate('home')
          /* toast('There was a connection error.', {
            position: "top-center",
            autoClose: 4000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            }); */
        }
      }
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.formTitle} >Log into your account</Text>
      <View style={styles.formContainer}>
      <TextInput style={styles.formInput} placeholder="E-mail" onChange={(e) => setUserInfo({ ...userInfo, email: e.nativeEvent.text })}/>
      <TextInput style={styles.formInput} secureTextEntry={true} placeholder="Password" onChange={(e) => setUserInfo({ ...userInfo, password: e.nativeEvent.text })}/>
      <Text style={styles.buttonText}>{error}</Text>

        <TouchableOpacity>
            <View style={styles.button}>
              <Text style={styles.buttonText} onPress={formSubmit}>LOG IN</Text>
            </View>
          </TouchableOpacity>
          <Text style={styles.buttonText} onPress={() => {
                  props.navigation.navigate('signupDr')
              }}>Don't have an account? Sign up here</Text>
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
    marginTop: 25,
    marginHorizontal: 30,
    paddingLeft: 18
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

const mapDispatchToProps = {
  logIn: usersActions.logIn,
}

export default connect(null, mapDispatchToProps)(LogIn);