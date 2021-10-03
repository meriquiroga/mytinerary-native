import React from "react"
import { StyleSheet, Text, View, Image, ImageBackground, TouchableOpacity, StatusBar, Platform } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const Loader = () => {
    return (
        <SafeAreaView style={styles.mainContainer}>
            <View className="loaderBox">
                <Text>Loading...</Text>
                {/* <Image src={"/assets/search.gif"}/> */}
            </View>
        </SafeAreaView>
    )
}

export default Loader