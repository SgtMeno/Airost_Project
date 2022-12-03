
import * as React from 'react';
import MapView, { Callout, Marker } from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions, Alert } from 'react-native';
//import { GooglePlacesAutocompleteRef } from 'react-native-google-places-autocomplete';
//import {GOOGLE_MAPS_APIKEY} from '@env';


export const HomeScreen =({navigation}) => {
  return (
    
    <View style={styles.container}>
      <MapView style={styles.map}
        initialRegion={{
            latitude:1.5593872708842145,
            longitude: 103.63751926907231 ,
            latitudeDelta:0.05,
            longitudeDelta:0.05
        }}>
          
          <Marker
           coordinate={{latitude:1.5593872708842145,
          longitude: 103.63751926907231}}>
            <Callout>
              <Text>
                This is main point
              </Text>
            </Callout>
          </Marker>

        </MapView>
    </View>

    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});