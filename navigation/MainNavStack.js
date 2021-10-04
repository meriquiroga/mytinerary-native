import React from 'react'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from '../screens/Home'
import Cities from '../screens/Cities'
import SignUp from '../screens/SignUp'
import LogIn from '../screens/LogIn'
import City from '../screens/City'
import { StyleSheet, Image, SafeAreaView, Text } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect } from "react";
import {connect} from 'react-redux'
import usersActions from '../redux/actions/usersActions'
import {Ionicons} from '@expo/vector-icons'

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
                headerRight: () => props.token ? <Text style={styles.welcome} >Welcome, {props.name}!</Text> : <Image style={styles.welcomeImg} source={require("../assets/logo.png")} />,
                headerLeft: () => <Ionicons name="ios-menu" size={24} color="white" onPress={() => {
                    props.navigation.toggleDrawer()
                }} />
            }}/>
            <Stack.Screen name="cities" component={Cities} options={{
                title: 'CITIES',
                headerTintColor: 'white',
                headerStyle: {
                backgroundColor: '#0b3f78'
                },
                headerRight: () => props.token ? <Text style={styles.welcome} >Welcome, {props.name}!</Text> : <Image style={styles.welcomeImg} source={require("../assets/logo.png")} />,
                headerLeft: () => <Ionicons name="ios-menu" size={24} color="white" onPress={() => {
                    props.navigation.toggleDrawer()
                }} />
            }}/>
            <Stack.Screen name="signup" component={SignUp} options={{
                title: 'SIGN UP',
                headerTintColor: 'white',
                headerStyle: {
                backgroundColor: '#0b3f78'
                },
                headerRight: () => {props.token ? <Text>Welcome, {props.name}</Text> : <Image source={require("../assets/logo.png")} />},
                headerLeft: () => <Ionicons name="ios-menu" size={24} color="white" onPress={() => {
                    props.navigation.toggleDrawer()
                }} />
            }}/>
             <Stack.Screen name="login" component={LogIn} options={{
                title: 'LOG IN',
                headerTintColor: 'white',
                headerStyle: {
                backgroundColor: '#0b3f78'
                },
                headerRight: () => <Image source={require("../assets/logo.png")} />,
                headerLeft: () => <Ionicons name="ios-menu" size={24} color="white" onPress={() => {
                    props.navigation.toggleDrawer()
                }} />
            }}/>
            <Stack.Screen name="city" component={City} options={{
                title: 'CITY',
                headerTintColor: 'white',
                headerStyle: {
                backgroundColor: '#0b3f78'
                },
                headerRight: () => props.token ? <Text style={styles.welcome} >Welcome, {props.name}!</Text> : <Image source={require("../assets/logo.png")} />
            }} />
        </Stack.Navigator>
    )
}

const styles = StyleSheet.create({
welcome: {
    color: 'white',
    width: 150,
    textAlign: 'right'
},
/* welcomeImg: {
    alignSelf: 'right'
} */

})

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