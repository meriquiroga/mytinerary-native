import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const Cities = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.citiesTitle}>
      <Text style={styles.citiesText}>Find your next adventure</Text>
      </View>
  </View>
);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },
  citiesTitle: {
    width: "100%",
    height: 80,
    backgroundColor: "#1aa5bc",
    alignItems: "center",
    justifyContent: "center",
  },
  citiesText: {
    color: "white",
    fontSize: 16,
  },
});

export default Cities