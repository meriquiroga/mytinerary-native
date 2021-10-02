import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import Home from '../screens/Home'
import Cities from '../screens/Cities'
import SignUp from '../screens/SignUp'
import LogIn from '../screens/LogIn'
import City from '../screens/City'
import Logout from '../components/Logout'
import { StyleSheet, Image, SafeAreaView, } from "react-native";
import MainNavStack from './MainNavStack'
import { useEffect } from "react";
import {connect} from 'react-redux'
import usersActions from '../redux/actions/usersActions'
import AsyncStorage from "@react-native-async-storage/async-storage";


const Drawer = createDrawerNavigator()

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
        <Drawer.Navigator >
            <Drawer.Screen name="homeDr" component={MainNavStack} options={{
                title: 'HOME',
                headerTintColor: 'white',
                headerStyle: {
                backgroundColor: '#0b3f78'
                },
                headerShown: false,
                headerRight: () => <Image source={require("../assets/logo.png")} />
            }}/>
            <Drawer.Screen name="citiesDr" component={Cities} options={{
                title: 'CITIES',
                headerTintColor: 'white',
                headerStyle: {
                backgroundColor: '#0b3f78'
                },
                headerRight: () => <Image source={require("../assets/logo.png")} />
            }}/>
            {!props.token && <Drawer.Screen name="signupDr" component={SignUp} options={{
                title: 'SIGN UP',
                headerTintColor: 'white',
                headerStyle: {
                backgroundColor: '#0b3f78'
                },
            }}/>}
             {!props.token && <Drawer.Screen name="loginDr" component={LogIn} options={{
                title: 'LOG IN',
                headerTintColor: 'white',
                headerStyle: {
                backgroundColor: '#0b3f78'
                },
            }}/>}
{/*             <Drawer.Screen name="city" component={City} options={{
                title: 'CITY',
                headerTintColor: 'white',
                headerStyle: {
                backgroundColor: '#0b3f78'
                },
            }}/> */}
            {props.token && <Drawer.Screen name="logout" component={Logout}/>}
        </Drawer.Navigator>
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