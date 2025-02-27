import { Dimensions, StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper'
import * as Location from 'expo-location'
import { useEffect, useState } from 'react';
import MapView from 'react-native-maps';
import Constants from 'expo-constants'

export function MapViews({ route }){
    const [latitude, setLatitude] = useState(null)
    const [longitude, setLongitude] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [place, setPlace] = useState('')
    const [locationError, setLocationError] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setIsLoading(false);
                console.log('Geolocation permission not granted');
                return;
            }
            try {
                    const location = await Location.geocodeAsync(place);
                    if (location.length > 0) {
                        setLatitude(location[0].latitude);
                        setLongitude(location[0].longitude);                
                        setIsLoading(false);
                        setLocationError(false);
                    } else {
                        setLocationError(true);
                        setIsLoading(false)
                    }
            } catch (e) {
                console.error('Error geocoding location:', e);
                setLocationError(true);
                setIsLoading(false);
            }
        })();
    }, [place]);

    useEffect(() => {
        if (route.params?.place) {
            setPlace(route.params.place);
        }
    }, [route.params]);

    if(isLoading){
        return(
            <View><Text style={styles.info}>Retrieving location...</Text></View>
        )
    }

    if (locationError) {
        return (
            <View>
                <Text style={styles.info}>No location found! Please try again.</Text>
            </View>
        );
    }
  
    return(
        <View style={styles.container}>
            <MapView 
                style={styles.map}
                initialRegion={{
                    latitude: latitude,
                    longitude: longitude,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        textAlign: 'center',
        margin: 3
    },
    map: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height - Constants.statusBarHeight,
    },
    info: {
        margin: 20,
        fontSize: 25,
        textAlign: 'center'
    }
})