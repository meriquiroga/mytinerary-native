import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import SelectPicker from 'react-native-form-select-picker';
import axios from 'axios'
import { useState } from "react";
import { useEffect } from "react";
import {connect} from 'react-redux'
import usersActions from '../redux/actions/usersActions'

const SignUp = (props) => {


  const [countries, setCountries] = useState([]);
  const [error, setError] = useState()
  
  const [userInfo, setUserInfo] = useState({
    name: '',
    surname: '',
    email: '',
    password: '',
    img: '',
    country:''
  })

  const inputHandler = (e) => {
    setUserInfo({
      ...userInfo,
      [e.target.name]: e.target.value
    })
  }

  /* const formSubmit = async (e) => {
    e.preventDefault()
    if (Object.keys(userInfo).some(property => userInfo[property] === '')) {
      setError('All fields are required.')
      return false
    } else if (!userInfo.email.includes('@')) {
      setError('Please verify your e-mail.')
      return false
    } else {
      try {
        let response = await props.signUp(userInfo)
          if (response.data.success) {
            toast('User created, welcome!', {
              position: "top-center",
              autoClose: 4000,
              hideProgressBar: true,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              });
          } 
    } catch (newError) {
      if (newError.data) {
        setError(newError.data.error || newError.data.errors.map((error) => error.message))
      } else {
        toast('There was a connection error.', {
          position: "top-center",
          autoClose: 4000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          });
        }
      }
    }
  } */

  useEffect(() => {
    axios
      .get("https://restcountries.eu/rest/v2/all?fields=name")
      .then((response) => setCountries(response.data))
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.formTitle} >Create your account here</Text>
      <View style={styles.formContainer}>
        <TextInput style={styles.formInput} placeholder="Name" />
        <TextInput style={styles.formInput} placeholder="Surname" />
        <TextInput style={styles.formInput} placeholder="E-mail" />
        <TextInput style={styles.formInput} placeholder="Password" />
        <TextInput style={styles.formInput} placeholder="URL of your picture" />
        <SelectPicker style={styles.formInput} placeholder="Select your country" default='Select your country'>
        {countries.map((country) => (<SelectPicker.Item key={country.name} label={country.name} value={country.name}/>))}
        </SelectPicker>
        <TouchableOpacity>
            <View style={styles.button}>
              <Text style={styles.buttonText} onPress={() => {}}>SIGN UP</Text>
            </View>
          </TouchableOpacity>
          <Text style={styles.buttonText} onPress={() => {
                  props.navigation.navigate('loginDr')
              }}>Already user? Log in here</Text>
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

export default SignUp