import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const getIcon = (icon) => `http://openweathermap.org/img/wn/${icon}@2x.png`;

const Weather = ( {data} ) => {

  return (
    <View style={styles.container}>
      <Text>{data.hour} h</Text>
      <Image 
        source={{ uri: getIcon(data?.icon)}}
        style={styles.image}
      />
      <Text style={styles.temp}>{data.temp} °C</Text>
    </View>

  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    height: 140,
    width: 75,
    paddingVertical: 6,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
    borderRadius: 50
  },
  image: {
    width: 50,
    height: 50
  },
  temp: {
    fontSize: 18,
    fontWeight: "bold"
  }
});

export default Weather;