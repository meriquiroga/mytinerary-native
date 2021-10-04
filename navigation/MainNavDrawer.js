import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import Home from '../screens/Home'
import Cities from '../screens/Cities'
import SignUp from '../screens/SignUp'
import LogIn from '../screens/LogIn'
import Logout from '../components/Logout'
import { StyleSheet, Image, SafeAreaView, Text} from "react-native";
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
        <Drawer.Navigator options={{style: {backgroundColor: '#0b3f78', flex: 1}}} >
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
                headerRight: () => props.token ? <Text style={styles.welcome} >Welcome, {props.name}!</Text> : <Image style={styles.welcomeImg} source={require("../assets/logo.png")} />
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
            {props.token && <Drawer.Screen name="logout" component={Logout} options={{
                title: 'LOG OUT',
                headerTintColor: 'white',
                headerStyle: {
                backgroundColor: '#0b3f78'
                },
            }}/>}
        </Drawer.Navigator>
    )
}

const styles = StyleSheet.create({
    welcome: {
        color: 'white',
        width: 150,
        textAlign: 'right',
        paddingRight: 20
    },
    welcomeImg: {
        marginRight: 20
    }
    
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