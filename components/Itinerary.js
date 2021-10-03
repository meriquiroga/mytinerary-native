import React from "react";
import itinerariesActions from "../redux/actions/itinerariesActions";
import activitiesActions from "../redux/actions/activitiesActions";
import { connect } from "react-redux";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  ImageBackground,
  Image,
  TouchableOpacity,
  Button,
  Alert,
  Number,
} from "react-native";
import { useState } from "react";
import { useEffect } from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import Activities from "../components/Activities";
import Loader from "../components/Loader";

const Itinerary = (props) => {
  console.log(activities + "estoy viendo activities de itinerario");
  const [loading, setLoading] = useState(true);
  const [visible, setVisible] = useState(false);
  const [quore, setQuore] = useState(false);
  /* const onButtonToggle = (value) => {
    setQuore(quore === false ? true : false);
  }; */
  const [countLikes, setCountLikes] = useState(props.itinerary.likes);

  const [activities, setActivities] = useState([]);

  useEffect(() => {
    console.log(visible);
    if (visible) {
      async function getActivities() {
        try {
          const response = await props.getActivities(props.itinerary._id);
          console.log(response.data.response);
          setActivities(response.data.response);
        } catch (error) {
          Alert.alert(error);
        } finally {
          setLoading(false);
        }
      }
      getActivities(props.itinerary._id);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [visible]);

  if (loading) {
    <Loader />;
  }

  const toggle = () => setVisible(!visible);

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
      Alert.alert("You need to log in to like an itinerary");
    } else {
      try {
        let response = await props.likes(props.itinerary._id, props.token);
        if (response.success) {
          setCountLikes(response.response);
          setQuore(!quore);
        } else {
          throw new Error("Something went wrong");
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

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
          <ImageBackground
            source={{ uri: props.itinerary.img }}
            style={styles.itImg}
          ></ImageBackground>
          <Text style={styles.description}>{props.itinerary.description}</Text>
          <Text>
            {props.itinerary.hashtags.map((hashtag, index) => (
              <Text key={index}>{hashtag + "  "}</Text>
            ))}
          </Text>
          <View style={styles.authorBox}>
            <Image
              style={styles.authorImg}
              source={{ uri: props.itinerary.authorImg }}
            />
            <Text style={styles.authorName}>{props.itinerary.authorName}</Text>
          </View>
          <View style={styles.cost}>
            <Text>Cost: </Text>
            {[...Array(props.itinerary.cost)].map((cost, index) => (
              <Image
                source={require("../assets/money.png")}
                alt=""
                key={index}
              />
            ))}
          </View>
          <View style={styles.cost}>
            <Image source={require("../assets/hours.png")} />
            <Text>{props.itinerary.duration}</Text>
            <Text> hours.</Text>
          </View>

          {
              <ScrollView>
                {visible ? (
                  <View >
                    <Text style={styles.titleActivities}>Activities</Text>
                    <View>
                      <Activities activities={activities} />
                    </View>
                  </View>
                ) : null}
                <TouchableOpacity style={styles.viewButton}
                  onPress={props.getActivities}
                  onPress={toggle}
                >
                  <Text style={styles.textButton}>{!visible ? "VIEW MORE" : "VIEW LESS"}</Text>
                </TouchableOpacity>
              </ScrollView>
          }
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    backgroundColor: "#FCFCFC",
    marginHorizontal: 15,
    marginBottom: 20,
  },
  itImg: {
    width: 320,
    height: 250,
  },
  title: {
    backgroundColor: "#0b3f78",
    fontSize: 16,
    width: "100%",
    paddingVertical: 12,
    textAlign: "center",
    color: "white",
  },
  likes: {
    flexDirection: "row",
    alignSelf: "flex-end",
    padding: 8,
    alignItems: "center",
  },
  description: {
    textAlign: "center",
    marginHorizontal: 25,
    marginVertical: 10,
  },
  authorImg: {
    width: 80,
    height: 80,
    margin: 8,
    marginHorizontal: 10,
  },
  authorBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  authorName: {
    fontSize: 16,
  },
  cost: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 5,
  },
  centerView: {
    alignItems: 'center'
  },
  viewButton: {
    backgroundColor: '#1aa5bc',
    padding: 5,
    paddingHorizontal: 15,
    borderRadius: 50,
    alignSelf: 'center',
    marginVertical: 15 
  },
  textButton: {
    color: 'white'
  }, 
  titleActivities: {
    alignSelf: 'center',
    fontSize: 16,
    color: '#0b3f78'
  }

});

const mapStateToProps = (state) => {
  return {
    token: state.usersReducer.token,
  };
};

const mapDispatchToProps = {
  likes: itinerariesActions.likes,
  getActivities: activitiesActions.getActivities,
};

export default connect(mapStateToProps, mapDispatchToProps)(Itinerary);
