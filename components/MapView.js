import { Dimensions, StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper'
import * as Location from 'expo-location'
import { useEffect, useState } from 'react';
import MapView from 'react-native-maps';
import Constants from 'expo-constants'


export function MapViews(){
    const [latitude, setLatitude] = useState(0)
    const [longitude, setLongitude] = useState(0)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() =>{
        (async () => {
            let {status} = await Location.requestForegroundPermissionsAsync()
            if (status !== 'granted') {
                setIsLoading(false)
                console.log('Geolocation failed')
                return;
            }
            const location = await Location.getCurrentPositionAsync({accuracy: Location.Accuracy.Lowest})
            setLatitude(location.coords.latitude)
            setLongitude(location.coords.longitude)
            setIsLoading(false) 
        })();
    },[])

    if(isLoading){
        return(
            <View style={styles.container}><Text>Retrieving location...</Text></View>
        )
    }

    return(
        <View style={styles.container}>
            <Text>Map view for specific area is shown here</Text>
            <Text>{latitude}</Text>
            <Text>{longitude}</Text>
            <MapView 
                style={styles.map}
                initialRegion={{
                    latitude: 65.0800,
                    longitude: 25.4800,
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
})