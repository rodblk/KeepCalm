import React, { Component } from 'react'
import { Dimensions, StyleSheet } from 'react-native'
import MapView from 'react-native-maps'
import MapViewDirections from 'react-native-maps-directions'

const origin = {latitude: 37.798790, longitude: -122.442753}
const destination = {latitude: 37.790651, longitude: -122.422497}

const GOOGLE_MAPS_APIKEY = 'AIzaSyDiwU5YrlZVwuiAearxSTJ2dk7grotuo-o'

const { width, height } = Dimensions.get('window');
const ASPECT_RATIO = width / height;
const LATITUDE = 37.771707;
const LONGITUDE = -122.4053769;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

class RNMapsDirections extends Component {
    render(){
        return (
            <MapView initialRegion={{
                latitude: LATITUDE,
                longitude: LONGITUDE,
                latitudeDelta: LATITUDE_DELTA,
                longitudeDelta: LONGITUDE_DELTA,
            }}>
                <MapViewDirections 
                origin={origin} 
                destination={destination} 
                apikey={GOOGLE_MAPS_APIKEY}/>
            </MapView>
        )
    }
}

export default RNMapsDirections;