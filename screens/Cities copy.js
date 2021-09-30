import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';

const Cities = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.citiesTitle}>
      <Text style={styles.citiesText}>Find your next adventure</Text>
      </View>
      <View>
        <TextInput style={styles.formInput} placeholder="Search by destination" />
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
  formInput: {
    backgroundColor: 'white',
    borderRadius: 50,
    padding: 10,
    marginTop: 30,
    marginHorizontal: 30,
    textAlign: 'center'
  },
});

export default Cities