import React from 'react'
import itinerariesActions from '../redux/actions/itinerariesActions'
import activitiesActions from '../redux/actions/activitiesActions'
import {connect} from 'react-redux'
import { StyleSheet, Text, View, ScrollView, ImageBackground, Image, TouchableOpacity, Button, Alert, Number } from 'react-native'
import { useState } from "react";
import { useEffect } from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import Activities from './Activities'

const Itinerary = (props) => {
  const [visible, setVisible] = useState(false);
  const [quore, setQuore] = useState(false);
  /* const onButtonToggle = (value) => {
    setQuore(quore === false ? true : false);
  }; */
  const [countLikes, setCountLikes] = useState(props.itinerary.likes)

  const toggle = () => setVisible(!visible)

  const likesByUserId = () => {
    if (props.itinerary.likes.includes(props.userId)) {
      setQuore(true);
    } else {
      setQuore(false);
    }
    likesByUserId();
  };

  const likes = async () => {
    if (!props.token) {
      Alert.alert('You need to log in to like an itinerary')
    } else {
      try {
        let response = await props.likes(props.itinerary._id, props.token) 
        if(response.success) {
          setCountLikes(response.response)
          setQuore(!quore);
        } else {
          throw new Error ("Something went wrong")
        }
      } catch (error) {
        console.log(error)
      }
    }
  }

  return (
    <>
    <ScrollView>
    <View style={styles.container}>
      <Text style={styles.title}>{props.itinerary.name}</Text>
      <View style={styles.likes}>
      <TouchableOpacity onPress={likes}>
        <View>
          <Icon
            raised
            name={quore ? "heart" : "heart-o"}
            type="font-awesome"
            value={quore ? "user" : "smile"}
            quore={quore}
            color={quore ? "red" : "gray"}
          />
          <Text>{countLikes.length}</Text>
        </View>
      </TouchableOpacity>
      {/* <Text>{countLikes.length}</Text>
      <TouchableOpacity onPress={likes}>
                <Image source={require("../assets/likes.png")} />
      </TouchableOpacity> */}
      </View>
      <ImageBackground source={{uri: props.itinerary.img}} style={styles.itImg}></ImageBackground>
      <Text style={styles.description}>{props.itinerary.description}</Text>
      <Text >{props.itinerary.hashtags.map((hashtag, index) => (<Text key={index}>{hashtag + '  '}</Text>))}</Text>
      <View style={styles.authorBox}>
      <Image style={styles.authorImg} source={{uri: props.itinerary.authorImg}}/>
      <Text style={styles.authorName}>{props.itinerary.authorName}</Text>  

      </View>
      <View style={styles.cost}>
      <Text >Cost:{" "}</Text>{[...Array(props.itinerary.cost)].map((cost, index) => <Image source={require("../assets/money.png")} alt="" key={index}/>)}

      </View>
      <View style={styles.cost}>
      <Image source={require("../assets/hours.png")}/><Text>{props.itinerary.duration}</Text><Text> hours.</Text>
      </View>

      {/* <View>
      {visible && 
            <View>
              <Activities itinerary={props.itinerary._id} />
              <Comments itinerary={props.itinerary._id} />
            </View>}
            <TouchableOpacity onPress={() => setVisible(!visible)}>
              <Text>
                  {visible ? "VIEW LESS" : "VIEW MORE"}
              </Text>
            </TouchableOpacity>
      </View> */}

      {/* <View >
          {visible ?
          <View >
              <View>
                  <Text>Activities</Text>
              </View>
              <View>
                  <Activities activities={activities}/>
              </View>
          </View>
          : null}
          <TouchableOpacity onPress={props.getActivities} onPress={toggle}>
              <Text>
                  {!visible ? "View More" : "View Less"}
              </Text>
          </TouchableOpacity>
      </View> */}

    </View>
    </ScrollView>

{/*     
        </div>
            {visible && 
            <div>
              <Activities itinerary={props.itinerary._id} />
              <Comments itinerary={props.itinerary._id} />
            </div>}
            <button onClick={() => setVisible(!visible)}>
                  {visible ? "VIEW LESS" : "VIEW MORE"}
            </button>
      </div>
 */}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: "center",
    alignContent: 'center',
    backgroundColor: '#FCFCFC',
    marginHorizontal: 15,
    marginBottom: 20
  },
  itImg: {
    width: 320,
    height: 250,
  },
  title: {
    backgroundColor: '#0b3f78',
    fontSize: 16,
    width: '100%',
    paddingVertical: 12,
    textAlign: 'center',
    color: 'white'
  },
  likes: {
    flexDirection: 'row',
    alignSelf: 'flex-end',
    padding: 8,
    alignItems: 'center'
  },
  description: {
    textAlign: 'center',
    marginHorizontal: 25,
    marginVertical: 10,
  },
  authorImg: {
    width: 80,
    height: 80,
    margin: 8,
    marginHorizontal: 10
  },
  authorBox: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  authorName: {
    fontSize: 16,
  },
  cost: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 5
  }

});

const mapStateToProps = (state) => {
  return {
    token: state.usersReducer.token,
  }
}

const mapDispatchToProps = {
  likes: itinerariesActions.likes,
}

export default connect(mapStateToProps, mapDispatchToProps)(Itinerary);
