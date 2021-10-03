import React from 'react'
import activitiesActions from '../redux/actions/activitiesActions'
import {connect} from 'react-redux'
import { StyleSheet, Text, View, ScrollView, ImageBackground, Image, TouchableOpacity, Alert, Number } from 'react-native'
import { useState } from "react";
import { useEffect } from "react";

const Activities = (props) => {
  console.log(props.activities)

  var activitiesMap = props.activities.map((activity, index) => {
    return (   
      <ImageBackground style={styles.activityImg} key={index} source={{uri: activity.img}}>
        <Text style={styles.activityName}>{activity.name}</Text>
      </ImageBackground>
    );
  })

  return (
    <>
      <ScrollView>
      <View>{activitiesMap}</View>
    </ScrollView>
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
    height: 150,
    marginVertical: 5
  },
  activityName: {
    color: 'white',
    backgroundColor: '#1aa5bc',
    textAlign: 'center',
    paddingVertical: 3
  }

});

const mapDispatchToProps = {
  getActivities: activitiesActions.getActivities,
}

export default connect(null, mapDispatchToProps)(Activities);