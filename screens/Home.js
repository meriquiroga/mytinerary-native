import React from "react";
import { StyleSheet, Text, View, Image, ImageBackground, TouchableOpacity, SafeAreaView } from "react-native";
import MyCarousel from "../components/MyCarousel";


const Home = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <ImageBackground
        source={{uri: 'https://beprint.com.ar/wp-content/uploads/2021/10/heronative.jpg'}}
         style={styles.mainImg}
        >
          <Image source={require("../assets/mytineraryLogo.png")} />
          <Text style={styles.mainText}>
            Find your perfect trip, designed by insiders who know and love their
            cities!
          </Text>
          <TouchableOpacity>
            <View style={styles.button}>
              <Text style={styles.buttonText} onPress={() => {
                  props.navigation.navigate('cities')
              }}>START DREAMING</Text>
            </View>
          </TouchableOpacity>
          <Text onPress={() => {
                  props.navigation.toggleDrawer()
              }} >
            MENU
          </Text>
        </ImageBackground>
        <View style={styles.carrousel}>
          <Text style={styles.carrouselText}>Popular MyTineraries</Text>
        </View>
        <MyCarousel/>
      </View>
      <View style={styles.footer}>
        <Text style={styles.footerText}>
          Contact us: +1 123 456 789 | info@mytinerary.com
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    alignContent: "space-between",
  },
  /* main: {
    flexGrow: 1,
  }, */
  mainImg: {
    justifyContent: "center",
    width: "100%",
    height: 300,
    alignItems: "center",
  },
  mainText: {
    textAlign: "center",
    padding: 20,
  },
  footer: {
    width: "100%",
    height: 60,
    backgroundColor: "#0b3f78",
    alignContent: 'center'
  },

  footerText: {
    color: "#fff",
    textAlign: "center",
    paddingTop: 10,
  },
  button: {
    backgroundColor: "#1aa5bc",
    borderRadius: 80,
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  buttonText: {
    color: "white",
  },
  carrousel: {
    alignItems: "center",
  },
  carrouselText: {
    color: "#0b3f78",
    fontSize: 16,
    paddingTop: 12,
  },
});

export default Home;
