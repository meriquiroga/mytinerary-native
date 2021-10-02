import React from 'react'
import itinerariesActions from '../redux/actions/itinerariesActions'
import {connect} from 'react-redux'
import { StyleSheet, Text, View, ScrollView, ImageBackground, Image, TouchableOpacity } from 'react-native'
import { useState } from "react";
import { useEffect } from "react";

const Itinerary = (props) => {
  const [visible, setVisible] = useState(false);
  const [countLikes, setCountLikes] = useState(props.itinerary.likes)

  const likes = async () => {
    if (!props.token) {
      alert('You need to log in to like an itinerary')
    } else {
      try {
        let response = await props.likes(props.itinerary._id, props.token) 
        if(response.success) {
          setCountLikes(response.response)
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
      <Text>{countLikes.length}</Text>
      <TouchableOpacity onClick={likes}>

                <Image source={require("../assets/likes.png")} />
{/*                 <Image source={{uri: 'https://mytinerarywebapp.herokuapp.com/assets/likes.png'}} />
 */}                
                  {/* <imgage src="/assets/likes.png" alt="" /> */}
                  </TouchableOpacity>
      </View>
      <ImageBackground source={{uri: props.itinerary.img}} style={styles.itImg}></ImageBackground>
      <Text style={styles.description}>{props.itinerary.description}</Text>
      <Text >{props.itinerary.hashtags.map((hashtag, index) => (<Text key={index}>{hashtag + '  '}</Text>))}</Text>


    </View>

    </ScrollView>

{/*     <div className="itineraryContainer">
      <h4>{props.itinerary.name}</h4>
      <div className="likes">
                <p>{countLikes.length}</p>
                <div onClick={likes}>
                  <img src="/assets/likes.png" alt="" />
                </div>
               
          </div>
        <div className="box1">
          <div className="itineraryImg" style={{ backgroundImage: `url('${props.itinerary.img}')` }}></div>
          <div className="infoContainer">
              <div>
                   <h5>{props.itinerary.description}</h5>
              </div>
              <span className="hashtags">{props.itinerary.hashtags.map((hashtag, index) => (<p key={index}>{hashtag}</p>))}</span>
              <div className="author">
                  <img src={props.itinerary.authorImg} alt="" />
                  <h5>{props.itinerary.authorName}</h5>  
              </div> 
            <div className="cost-duration">
              <div>
              <p>Cost:{" "}{[...Array(props.itinerary.cost)].map((cost, index) => <img src="/assets/money.png" alt="" key={index}/>)}</p>
              
              </div>
              <div className="duration">
              <img src="/assets/hours.png" alt="" />
              <p>{props.itinerary.duration} hours.</p>
              </div>
            </div>
          </div>
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
    backgroundColor: 'pink',
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
