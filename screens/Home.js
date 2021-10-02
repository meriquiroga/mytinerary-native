import React from "react";
import { StyleSheet, Text, View, Image, ImageBackground, TouchableOpacity, SafeAreaView } from "react-native";
import MyCarousel from "../components/MyCarousel";

const Home = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <ImageBackground
          source={require("../assets/hero1.jpg")}
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
        <MyCarousel />
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
  /* header: {
    width: "100%",
    height: 80,
    paddingVertical: 10,
    backgroundColor: "#0b3f78",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingTop: 30,
  }, */
  /* headerText: {
    color: "#fff",
    textAlign: "center",
    paddingVertical: 5,
  }, */
  main: {
    flexGrow: 1,
  },
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
    height: 40,
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
    paddingVertical: 10,
  },
});

export default Home;
