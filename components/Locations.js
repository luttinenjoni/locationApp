import { useState, useEffect } from 'react';
import { StyleSheet, View, FlatList, Pressable } from 'react-native';
import { Text, Button } from 'react-native-paper';
import { addAreaInfo, UseFireAreas } from '../firebase/firestoreController';
import Icon from 'react-native-vector-icons/FontAwesome';


export function Locations({navigation, route}){

    const areas = UseFireAreas()
    const nameC = route?.params?.nameC
    const desc = route?.params?.desc

    useEffect(() => {
        if (nameC && desc) {
            addAreaInfo(nameC, desc)}
        
    }, [nameC, desc]);

    return(

        <View>
            <Button style={styles.button} mode='contained' onPress={() => navigation.navigate('Add New Location')}>Add a new location</Button>
            <FlatList 
                 data={areas}
                 renderItem={({item}) => <View style={styles.countrycell}> 
                                            <Text variant='headlineLarge'>{item.areaName}</Text>
                                            <Text variant='bodyMedium'>{item.areaDesc}</Text>
                                            <Pressable onPress={() => navigation.navigate('Map View')}>
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
        margin: 15
    }
  });