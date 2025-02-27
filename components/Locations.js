import { useState, useEffect } from 'react';
import { StyleSheet, View, FlatList, Pressable } from 'react-native';
import { Text, Button } from 'react-native-paper';
import { addAreaInfo, UseFireAreas } from '../firebase/firestoreController';
import Icon from 'react-native-vector-icons/FontAwesome';
import { StarRatingDisplay } from 'react-native-star-rating-widget';


export function Locations({navigation, route,}){

    const areas = UseFireAreas()
    const nameC = route?.params?.nameC
    const desc = route?.params?.desc
    const rating = route?.params?.rating

    useEffect(() => {
        if (nameC && desc && rating) {
            addAreaInfo(nameC, desc, rating)}
    }, [nameC, desc, rating]);

    const handleAreaNameChange = (item) => {
        navigation.navigate('Map View', { place: item.areaName });
    };
    

    return(

        <View>
            <Button style={styles.button} mode='contained' onPress={() => navigation.navigate('Add New Location')}>Add a new location</Button>
            <FlatList style={styles.list}
                 data={areas}
                 renderItem={({item}) => <View style={styles.countrycell}> 
                                            <Text variant='headlineLarge'>{item.areaName}</Text>
                                            <Text variant='bodyMedium'>{item.areaDesc}</Text>
                                            <StarRatingDisplay
                                                rating={item.rating}/>
                                            <Pressable onPress={() => { handleAreaNameChange(item)}}>
                                                <Icon style={styles.icon} name="map-marker" size={50}/>
                                            </Pressable>
                                        </View>
                 }
            />
        </View>
    )
}

const styles = StyleSheet.create({
    countrycell: {
      borderWidth: 2,
      borderRadius: 10,
      alignContent: 'center',
      textAlign: 'center',
      padding: 20,
      margin: 10,
    },
    icon:{
        flex: 1,
        alignSelf: 'flex-end',
    },
    button: {
        margin: 15,
    },
    list: {
        borderWidth: 3,
        borderRadius:15,
        padding: 8,
        margin: 8,
        marginBottom: 115
    }
  });