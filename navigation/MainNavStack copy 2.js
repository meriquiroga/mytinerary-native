import React from 'react'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from '../screens/Home'
import Cities from '../screens/Cities'
import SignUp from '../screens/SignUp'
import LogIn from '../screens/LogIn'
import City from '../screens/City'
import { StyleSheet, Image, SafeAreaView, } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Stack = createNativeStackNavigator()

const Navigator = () => {
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
            <Stack.Screen name="city" component={City}/>
        </Stack.Navigator>
    )
}

export default Navigator