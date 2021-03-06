import React, { useState } from 'react';
import {Text, View, ImageBackground, ScrollView, SafeAreaView, StyleSheet} from 'react-native'
import Carousel from 'react-native-snap-carousel';

export default class MyCarousel extends React.Component {
 
    constructor(props){
        super(props);
        this.state = {
          activeIndex:0,
          carouselItems: [
            {"name":"Amsterdam","country":"Netherlands","src":"https://cdn.pixabay.com/photo/2019/05/26/18/27/bridge-4230946_960_720.jpg"},
            {"name":"Bangkok","country":"Thailand","src":"https://cdn.pixabay.com/photo/2016/11/14/03/29/grand-palace-1822487_960_720.jpg"},
            {"name":"Buenos Aires","country":"Argentina","src":"https://beprint.com.ar/wp-content/uploads/2021/08/buenos_aires.jpg"},
            {"name":"Cancun","country":"Mexico","src":"https://beprint.com.ar/wp-content/uploads/2021/08/cancun.jpg"},
            {"name":"Dubai","country":"United Arab Emirates","src":"https://beprint.com.ar/wp-content/uploads/2021/08/dubai.jpg"},
            {"name":"Istanbul","country":"Turkey","src":"https://beprint.com.ar/wp-content/uploads/2021/08/estambul.jpg",},
            {"name":"London","country":"United Kingdom","src":"https://beprint.com.ar/wp-content/uploads/2021/08/london.jpg",},
            {"name":"Madrid","country":"Spain","src":"https://beprint.com.ar/wp-content/uploads/2021/08/madrid.jpg"},
            {"name":"New Delhi","country":"India","src":"https://beprint.com.ar/wp-content/uploads/2021/08/new_delhi.jpg"},
            {"name":"New York","country":"U.S.A.","src":"https://beprint.com.ar/wp-content/uploads/2021/08/new_york.jpg"},
            {"name":"Paris","country":"France","src":"https://beprint.com.ar/wp-content/uploads/2021/08/paris.jpg"},
            {"name":"Rio de Janeiro","country":"Brazil","src":"https://beprint.com.ar/wp-content/uploads/2021/08/rio.jpg"},
            {"name":"Rome","country":"Italy","src":"https://beprint.com.ar/wp-content/uploads/2021/08/rome.jpg"},
            {"name":"Tokio","country":"Japan","src":"https://beprint.com.ar/wp-content/uploads/2021/08/tokio.jpg"},
            {"name":"Las Vegas","country":"U.S.A.","src":"https://beprint.com.ar/wp-content/uploads/2021/08/vegas.jpg"},
            {"name":"Sydney","country":"Australia","src":"https://beprint.com.ar/wp-content/uploads/2021/08/sidney.jpg"}
            ]
      }
    }

    _renderItem({item,index}){
        return (
          <ImageBackground source={{uri: item.src}} style={styles.citiesImg}>
          <Text style={styles.citiesH}>{item.name}</Text>
          <Text style={styles.citiesP}>{item.country}</Text>
      </ImageBackground>
    )
    }

    render() {
        return (
            <View style={{flexDirection:'row', }}>
                <Carousel
                  layout={"default"}
                  ref={ref => this.carousel = ref}
                  data={this.state.carouselItems}
                  sliderWidth={400}
                  itemWidth={300}
                  renderItem={this._renderItem}
                  onSnapToItem = { index => this.setState({activeIndex:index}) } />
            </View>
        );
    }
}

const styles = StyleSheet.create({
  citiesImg: {
/*     justifyContent: "center",
 */    width: 300,
    height: 280,
    /* alignItems: "center",
    alignSelf: 'center', */
    justifyContent: 'flex-end',
    marginVertical: 16,
    marginLeft: 10
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
  }
});