import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView, Alert } from 'react-native';
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

/*   var countries = ["Argentina", "Bahamas", "Barbados", "Belize", "Bolivia", "Brazil", "Canada", "Chile", "Colombia", "Costa Rica", "Cuba", "Dominica", " Ecuador "," El Salvador "," United States "," Granada "," Guatemala "," Guyana "," Haiti "," Honduras "," Jamaica "," Mexico "," Nicaragua "," Panama "," Paraguay "," Peru "," Dominican Republic "," Santa Lucia "," Surinam "," Uruguay "," Venezuela "]
 */  /* const inputHandler = (e) => {
    setUserInfo({
      ...userInfo,
      [e.target.name]: e.target.value
    })
  } */

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
        let response = await props.signUp(userInfo)
          if (response.data.success) {
            Alert.alert('User created')
            props.navigation.navigate('cities')
            /* toast('User created, welcome!', {
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
        setError(newError.data.error || newError.data.errors.map((error) => error.message))
      } else {
        console.log('There was a connection error.')
        console.log(newError)
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

  /* useEffect(() => {
    axios
      .get("https://restcountries.eu/rest/v2/all?fields=name")
      .then((response) => setCountries(response.data))
      .catch((error) => {
        console.log(error);
      });
  }, []); */

  return (
    <ScrollView>
    <View style={styles.container}>
      <Text style={styles.formTitle} >Create your account here</Text>
      <View style={styles.formContainer}>
        <TextInput style={styles.formInput} placeholder="Name" onChange={(e) => setUserInfo({ ...userInfo, name: e.nativeEvent.text })}/>
        <TextInput style={styles.formInput} placeholder="Surname" onChange={(e) => setUserInfo({ ...userInfo, surname: e.nativeEvent.text })}/>
        <TextInput style={styles.formInput} placeholder="E-mail" onChange={(e) => setUserInfo({ ...userInfo, email: e.nativeEvent.text })}/>
        <TextInput style={styles.formInput} secureTextEntry={true} placeholder="Password" onChange={(e) => setUserInfo({ ...userInfo, password: e.nativeEvent.text })}/>
        <TextInput style={styles.formInput} placeholder="URL of your picture" onChange={(e) => setUserInfo({ ...userInfo, img: e.nativeEvent.text })}/>
        <TextInput style={styles.formInput} placeholder="Country" onChange={(e) => setUserInfo({ ...userInfo, country: e.nativeEvent.text })}/>
        <Text style={styles.buttonText}>{error}</Text>
        <TouchableOpacity>
            <View style={styles.button}>
              <Text style={styles.buttonText} onPress={formSubmit}>SIGN UP</Text>
            </View>
          </TouchableOpacity>
          <Text style={styles.buttonText} onPress={() => {
                  props.navigation.navigate('loginDr')
              }}>Already user? Log in here</Text>
      </View>
    </View>
    </ScrollView>
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
  signUp: usersActions.signUp,
}

export default connect(null, mapDispatchToProps)(SignUp);