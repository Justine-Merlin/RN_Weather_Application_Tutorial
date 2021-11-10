import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';

import Weather from './Weather';

const Forecasts = ( { data } ) => {
  const [forecasts, setForecasts] = useState([]);
  useEffect(() => {
    const forecastsData = data.list.map(f => {
      const dt = new Date(f.dt * 1000);
      return ({
        date : f.dt,
        hour: dt.getHours(),
        temp: Math.round(f.main.temp),
        icon: f.weather[0].icon,
        name: format(dt, "EEEE", { locale: fr })
      })
    })

    // Logique pour grouper les éléments par journée - name

    setForecasts(forecastsData)
  }, [data])
  console.log(forecasts);
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.scroll}
    >
    {forecasts.map(f => (
      <View key={f.date} >
        <Text>{f.name}</Text>
        <Weather data={f} />
      </View>
    ))

    }
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  scroll: {
    width: "100%",
    height: "35%"
  }
});

export default Forecasts;