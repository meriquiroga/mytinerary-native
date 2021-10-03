import React from 'react'
import itinerariesActions from '../redux/actions/itinerariesActions'
import {connect} from 'react-redux'
import { StyleSheet, Text, View, ScrollView, ImageBackground, Image, TouchableOpacity, Alert, Number } from 'react-native'
import { useState } from "react";
import { useEffect } from "react";

const Activities = (props) => {
  const [activities, setActivities] = useState([])

  useEffect(() => {
    async function getActivities() {
      try {
        const response = await props.getActivities(props.itinerary)
        setActivities(response.data.response)
      } catch (error) {
        Alert.alert(error)
      } /* finally {
        setLoading(false)
      } */
    }
    getActivities(props.itinerary)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  var activitiesMap = activities.map((activity) => {
    return (   
      
      <ImageBackground source={{uri: activity.img}} style={styles.itImg}>
<Text>{activity.name}</Text>

      </ImageBackground>

      
    );
  })

  return (
    <>
      <View style={styles.container}>
      {activities.length > 0 ? activitiesMap :  
          <View >
{/*             <img src='/assets/sorry.png' alt=""/> 
 */}            <Text>We're sorry!</Text>
            <Text>We don't have any activities yet...</Text>
            <Text>Please try again soon</Text>
          </View>
        }
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: "center",
    alignContent: 'center',
    backgroundColor: 'pink',
    marginHorizontal: 15,
    marginBottom: 20
  },
  activityImg: {
    width: 300,
    height: 300
  }

});

const mapDispatchToProps = {
  getActivities: activitiesActions.getActivities,
}

export default connect(null, mapDispatchToProps)(Activities);
