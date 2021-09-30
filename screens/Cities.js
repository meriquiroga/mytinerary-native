import React from 'react';
import { useState } from "react";
import { useEffect } from "react";
import {connect} from 'react-redux'
import citiesActions from '../redux/actions/citiesActions'
import { StyleSheet, Text, View, TouchableOpacity, TextInput, ScrollView } from 'react-native';

const Cities = (props) => {
  
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    async function getAllCities() {
      try {
        await props.getAllCities()
      } catch (error) {
        alert(error)
      } /* finally {
        setLoading(false)
      } */
    }
    getAllCities()
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])


/*   if (loading) {
    return <div className="contenedor">
              <div className='city' style={{backgroundImage: "url('/assets/hero.jpg')"}}>
                      <div className='insideCities'> 
                          <h3>Find your next adventure</h3>
                      </div>
              </div>
              <h2 className="loading">Loading...</h2>
           </div>       
  }
 */
   var filteredMap = props.filtered.map((city) => {
    return (     
      <Text key={city.name}>{city.name}</Text>
      
    );
  })
  
  return (
    <ScrollView>
    <View style={styles.container}>
      <View style={styles.citiesTitle}>
      <Text style={styles.citiesText}>Find your next adventure</Text>
      </View>
      <View>
        <TextInput style={styles.formInput} placeholder="Search by destination" onChange={(e) => props.filterCities(e)}/>
      </View>
      <View>
      {props.filtered.length > 0 ? filteredMap :  
          <View className="sorry">
     
            <Text>We're sorry!</Text>
            <Text>We don't have that city yet...</Text>
            <Text>Please try a different one</Text>
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