/* import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const City = () => {
  return (
    <View style={styles.container}>
      <Text>Working on it!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default City */

import { useState } from "react";
import { useEffect } from "react";
import {connect} from 'react-redux'
import Itinerary from "../components/Itinerary";
import itinerariesActions from '../redux/actions/itinerariesActions'
import citiesActions from "../redux/actions/citiesActions";
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

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
    getOneCity(props.match.params.id)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  
  useEffect(() => {
    async function getItineraries() {
      try {
        await props.getItineraries(props.match.params.id)
      } catch (error) {
        alert(error)
      } /* finally {
        setLoading(false)
      } */
    }
    getItineraries(props.match.params.id)
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
   

  /* var itinerariesMap = props.itineraries.map((itinerary) => {
    return (              
        <Itinerary itinerary={itinerary} key={itinerary._id } />       
    );
  }) */

  return (
    <>
    <Text>{props.city.name}</Text>
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