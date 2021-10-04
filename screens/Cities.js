import React from 'react';
import { useState } from "react";
import { useEffect } from "react";
import {connect} from 'react-redux'
import citiesActions from '../redux/actions/citiesActions'
import { StyleSheet, Text, View, TouchableOpacity, TextInput, ScrollView, ImageBackground, Image } from 'react-native';
import Loader2 from '../components/Loader2'

const Cities = (props) => {
  
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    async function getAllCities() {
      try {
        await props.getAllCities()
      } catch (error) {
        alert(error)
      } finally {
        setLoading(false)
      }
    }
    getAllCities()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (loading) {
    <Loader2 />;
  }
   var filteredMap = props.filtered.map((city) => {
    return ( 
      <TouchableOpacity onPress={() => {
        props.navigation.navigate('city', {
            id: city._id
        })
    }} key={city.name}>
            <ImageBackground source={{uri: city.src}} style={styles.citiesImg}>
              <Text style={styles.citiesH}>{city.name}</Text>
              <Text style={styles.citiesP}>{city.country}</Text>
        </ImageBackground>
      </TouchableOpacity>
    );
  })
  
  return (
    <ScrollView>
    <View style={styles.container}>
      <View style={styles.citiesTitle}>
        <Text style={styles.citiesText}>Find your next adventure</Text>
      </View>
      <View>
        <TextInput style={styles.formInput} placeholder="Search by destination" onChangeText={(e) => props.filterCities(e)}/>
      </View>
      <View style={styles.citiesCard}>
      {props.filtered.length > 0 ? filteredMap :  
          <View style={styles.sorry}>
            <Image source={require("../assets/sorry.png")} />
            <Text>We're sorry!</Text>
            <Text>We don't have that city yet...</Text>
            <Text>Please try a different one.</Text>
          </View>
        }
      </View>
  </View>
  </ScrollView>
);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    justifyContent: 'center',
    alignItems: "center",
  },
  citiesTitle: {
    width: "100%",
    height: 60,
    backgroundColor: "#1aa5bc",
    alignItems: "center",
    justifyContent: "center",
  },
  citiesText: {
    color: "white",
    fontSize: 20,
  },
  formInput: {
    backgroundColor: 'white',
    borderRadius: 50,
    padding: 10,
    marginTop: 15,
    marginHorizontal: 30,
    textAlign: 'center',
    width: 360
  },
  citiesImg: {
    justifyContent: "center",
    width: 380,
    height: 280,
    alignItems: "center",
    justifyContent: 'flex-end',
    margin: 10
  },
  citiesH: {
    backgroundColor: "#1aa5bc",
    color: 'white',
    width: '100%',
    textAlign: 'center',
    padding: 8,
    fontSize: 18
  },
  citiesP: {
    backgroundColor: "#0b3f78",
    color: 'white',
    width: '100%',
    textAlign: 'center',
    padding: 5
  },
  citiesCard: {
    alignItems: 'center'
  },
  sorry: {
    alignItems: 'center', 
    padding: 10
  }
});

const mapStateToProps = (state) => {
  return {
    cities: state.citiesRedux.cities,
    filtered: state.citiesRedux.filtered
  }
}

const mapDispatchToProps = {
  getAllCities: citiesActions.getCities,
  filterCities: citiesActions.filterCities
}

export default connect(mapStateToProps, mapDispatchToProps) (Cities);