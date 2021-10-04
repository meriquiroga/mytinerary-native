import React from "react"
import { StyleSheet, Text, View, Image, ImageBackground, TouchableOpacity, StatusBar, Platform } from 'react-native'
import { Feather } from '@expo/vector-icons'; 

const Loader2 = () => {
    return (
        <View style={styles.container}>
             <Feather name="loader" size={24} color="black" />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      alignContent: "center",
      backgroundColor: "#FCFCFC",
      marginHorizontal: 15,
      marginBottom: 20,
    },
  });
export default Loader2