import React, { useState } from 'react';
import {View, Image, ScrollView} from 'react-native'

const items = [
    {src: '../assets/buenos_aires.jpg', altText: 'Argentina', caption: 'Buenos Aires'},
    {src: '../assets/dubai.jpg', altText: 'United Arab Emirates', caption: 'Dubai'},
    {src: '../assets/amsterdam.jpg', altText: 'Netherlands', caption: 'Amsterdam'},
    {src: '../assets/estambul.jpg', altText: 'Turkey', caption: 'Istanbul'},
    {src: '../assets/london.jpg', altText: 'United Kingdom', caption: 'London'},
    {src: '../assets/new_york.jpg', altText: 'U.S.A.', caption: 'New York'},
    {src: '../assets/rome.jpg', altText: 'Italy', caption: 'Rome'},
    {src: '../assets/sidney.jpg', altText: 'Australia', caption: 'Sydney'},
    {src: '../assets/tokio.jpg', altText: 'Japan', caption: 'Tokio'},
    {src: '../assets/madrid.jpg', altText: 'Spain', caption: 'Madrid'},
    {src: '../assets/new_delhi.jpg', altText: 'India', caption: 'New Delhi'},
    {src: '../assets/paris.jpg', altText: 'France', caption: 'Paris'},
];

const MyCarousel = () => {

  return (
    <View>
      <ScrollView horizontal>
      <Image source={require("../assets/logo.png")} />
      {/* { items.map((item, index) => {
              <Image key={index} source={require(item.src)}/>


      })} */}

{/* {item.map((city) => (
          <div key={city.caption} className="city_img" style = {{backgroundImage:`url('${city.src}')`}}>
            <div>
              <h4>{city.caption}</h4>
              <p>{city.altText}</p>           
            </div>
          </div>
        )
        )} */}

      </ScrollView>
    </View>




    );
}

export default MyCarousel;