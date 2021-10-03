import React from 'react'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from '../screens/Home'
import Cities from '../screens/Cities'
import SignUp from '../screens/SignUp'
import LogIn from '../screens/LogIn'
import City from '../screens/City'
import { StyleSheet, Image, SafeAreaView, } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect } from "react";
import {connect} from 'react-redux'
import usersActions from '../redux/actions/usersActions'

const Stack = createNativeStackNavigator()

const Navigator = (props) => {

    useEffect(()=>{
        const storage= async()=>{
          let token = await AsyncStorage.getItem("token")
          if(token){
            props.logInLS(token)
          }
        }
        storage()
      }, [])

    return (
        <Stack.Navigator >
            <Stack.Screen name="home" component={Home} options={{
                title: 'HOME',
                headerTintColor: 'white',
                headerStyle: {
                backgroundColor: '#0b3f78'
                },
                headerRight: () => <Image source={require("../assets/logo.png")} />
            }}/>
            <Stack.Screen name="cities" component={Cities} options={{
                title: 'CITIES',
                headerTintColor: 'white',
                headerStyle: {
                backgroundColor: '#0b3f78'
                },
                headerRight: () => <Image source={require("../assets/logo.png")} />
            }}/>
            <Stack.Screen name="signup" component={SignUp}/>
             <Stack.Screen name="login" component={LogIn}/>
            <Stack.Screen name="city" component={City} options={{
                title: 'CITY',
                headerTintColor: 'white',
                headerStyle: {
                backgroundColor: '#0b3f78'
                },
                headerRight: () => <Image source={require("../assets/logo.png")} />
            }} />
            

            
        </Stack.Navigator>
    )
}

const mapStateToProps = (state) => {
    return {
        token: state.usersReducer.token, 
        name: state.usersReducer.name,
        img: state.usersReducer.img
    }
}

const mapDispatchToProps = {
    logOut: usersActions.logOut,
    logInLS: usersActions.logInLS,
}

export default connect(mapStateToProps, mapDispatchToProps)(Navigator)