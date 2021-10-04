import { useState } from "react";
import { useEffect } from "react";
import {connect} from 'react-redux'
import citiesActions from '../redux/actions/citiesActions'
import React from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import Itinerary from '../components/Itinerary'
import itinerariesActions from '../redux/actions/itinerariesActions'

const City = (props) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if(props.cities.length === 0){
      props.history.push('/cities')
      return false
    }
    async function getOneCity() {
      try {
        await props.getOneCity(props.route.params.id)
      } catch (error) {
        alert(error) // poner toast
        /* props.history.push("/cities") */
      }
    }
    /* window.scrollTo(0, 0); */
    getOneCity(props.route.params.id)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])  

  useEffect(() => {
    async function getItineraries() {
      try {
        await props.getItineraries(props.route.params.id)
      } catch (error) {
        alert(error)
      } /* finally {
        setLoading(false)
      } */
    }
    getItineraries(props.route.params.id)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  /* if (loading) {
    return <div className="contenedor">
              <div className='city' style={{backgroundImage: `url(${props.city.src})`}}>
                <div className='insideCities'>   
                    <h3>{props.city.name}</h3>
                    <p>{props.city.country}</p>
                </div>
              </div>  
              <h2 className="loading">Loading...</h2>
           </div>       
  } */
   

  var itinerariesMap = props.itineraries.map((itinerary) => {
    return (              
        <Itinerary itinerary={itinerary} key={itinerary._id } />       
    );
  })

  return (
    <>
        <ScrollView>
    <View style={styles.container}>
    <Text style={styles.citiesH}>{props.city.name}</Text>
      <Text style={styles.citiesP}>{props.city.country}</Text>
  </View>
  <View style={styles.itineraryContainer}>
          <Text style={styles.find}>Find the perfect itinerary for your trip</Text>
        </View>

        <View style={styles.cityCard}>
        {props.itineraries.length > 0 ? itinerariesMap :  
          <View >
            <Text>We're sorry!</Text>
            <Text>We don't have any itineraries yet...</Text>
            <Text>Please try again soon</Text>
          </View>
        }
        </View>


  </ScrollView>
      {/* <div className="contenedor">
        <div className='city' style={{backgroundImage: `url(${props.city.src})`}}>
                <div className='insideCities'>   
                    <h3>{props.city.name}</h3>
                    <p>{props.city.country}</p>
                </div>
        </div>
        
        <div className='section'>
                <h2>Find the perfect itinerary for your trip</h2>
        </div>
        <div className="contenedorItCity">
        {props.itineraries.length > 0 ? itinerariesMap :  
          <div className="sorry">
            <img src='/assets/sorry.png' alt=""/> 
            <h2>We're sorry!</h2>
            <h3>We don't have any itineraries yet...</h3>
            <p>Please try again soon</p>
          </div>
        }
        </div>

        <div className="buscador">
            <Link to="/cities">
              <button>BACK TO CITIES</button>
            </Link>
        </div>
      </div> */}
    </>
  );
};

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
    fontSize: 18,
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
    padding: 15,
    fontSize: 20
  },
  citiesP: {
    backgroundColor: "#0b3f78",
    color: 'white',
    width: '100%',
    textAlign: 'center',
    padding: 5,
    fontSize: 16
  }, 
  itineraryContainer: {
    alignItems: "center",
  },
  find: {
    color: "#0b3f78",
    fontSize: 18,
    paddingVertical: 10,
  },
  cityCard: {
    alignItems: 'center'
  }
});

const mapStateToProps = (state) => {
  return {
    city: state.citiesRedux.oneCity,
    cities: state.citiesRedux.cities,
    itineraries: state.itinerariesRedux.itineraries
  }
}

const mapDispatchToProps = {
  getOneCity: citiesActions.getOneCity,
  getItineraries: itinerariesActions.getItineraries
}

export default connect(mapStateToProps, mapDispatchToProps)(City);