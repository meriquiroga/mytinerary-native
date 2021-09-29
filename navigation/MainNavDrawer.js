import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import Home from '../screens/Home'
import Cities from '../screens/Cities'
import SignUp from '../screens/SignUp'
import LogIn from '../screens/LogIn'
import City from '../screens/City'
import { StyleSheet, Image, SafeAreaView, } from "react-native";
import MainNavStack from './MainNavStack'


const Drawer = createDrawerNavigator()

const Navigator = () => {
    return (
        <Drawer.Navigator >
            <Drawer.Screen name="home" component={MainNavStack} options={{
                title: 'HOME',
                headerTintColor: 'white',
                headerStyle: {
                backgroundColor: '#0b3f78'
                },
                headerShown: false,
                headerRight: () => <Image source={require("../assets/logo.png")} />
            }}/>
            <Drawer.Screen name="cities" component={Cities} options={{
                title: 'CITIES',
                headerTintColor: 'white',
                headerStyle: {
                backgroundColor: '#0b3f78'
                },
                headerRight: () => <Image source={require("../assets/logo.png")} />
            }}/>
            <Drawer.Screen name="signup" component={SignUp} options={{
                title: 'SIGN UP',
                headerTintColor: 'white',
                headerStyle: {
                backgroundColor: '#0b3f78'
                },
            }}/>
            <Drawer.Screen name="login" component={LogIn} options={{
                title: 'LOG IN',
                headerTintColor: 'white',
                headerStyle: {
                backgroundColor: '#0b3f78'
                },
            }}/>
            <Drawer.Screen name="city" component={City} options={{
                title: 'CITY',
                headerTintColor: 'white',
                headerStyle: {
                backgroundColor: '#0b3f78'
                },
            }}/>
        </Drawer.Navigator>

    )
}

export default Navigator