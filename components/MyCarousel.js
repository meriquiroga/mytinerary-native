import React, { useState } from 'react';
import {Text, View, ImageBackground, ScrollView, SafeAreaView, StyleSheet} from 'react-native'
import Carousel from 'react-native-snap-carousel';

export default class MyCarousel extends React.Component {
 
    constructor(props){
        super(props);
        this.state = {
          activeIndex:0,
          carouselItems: [
            {src: 'https://cdn.pixabay.com/photo/2019/05/26/18/27/bridge-4230946_960_720.jpg', altText: 'Argentina', caption: 'Buenos Aires'},
            {src: 'https://cdn.pixabay.com/photo/2016/11/14/03/29/grand-palace-1822487_960_720.jpg', altText: 'United Arab Emirates', caption: 'Dubai'},
            ]
      }
    }

    _renderItem({item,index}){
        return (
          <ImageBackground source={{uri: item.src}} style={styles.citiesImg}>
          <Text style={styles.citiesH}>{item.altText}</Text>
          <Text style={styles.citiesP}>{item.caption}</Text>
      </ImageBackground>
    )
    }

    render() {
        return (
          <SafeAreaView style={{flex: 1, backgroundColor:'white', paddingTop: 50, }}>
            <View style={{ flex: 1, flexDirection:'row', justifyContent: 'center', }}>
                <Carousel
                  layout={"default"}
                  ref={ref => this.carousel = ref}
                  data={this.state.carouselItems}
                  sliderWidth={400}
                  itemWidth={400}
                  renderItem={this._renderItem}
                  onSnapToItem = { index => this.setState({activeIndex:index}) } />
            </View>
          </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
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
  }
});