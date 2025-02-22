import { useState, useEffect } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import { Button, Text } from 'react-native-paper';
import { addAreaInfo, UseFireAreas } from '../firebase/firestoreController';

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
            <Text>Locations are shown here</Text>
            <Button onPress={()=> addAreaInfo(areaName='Paris', areaDesc='Ylimielisiä ja eivätkä osaa enkkuu')}>Add test area</Button>
            <Button mode='contained' onPress={() => navigation.navigate('Add New Location')}>Add a new location</Button>
            <FlatList 
                 data={areas}
                 renderItem={({item}) => <View> 
                                            <Text>{item.areaName}</Text>
                                            <Text>{item.areaDesc}</Text>
                                        </View>
                 
                 }
            />
        </View>
    )
}

const styles = StyleSheet.create({
    countrycell: {
      borderWidth: 2,
      alignContent: 'center',
      textAlign: 'center',
      padding: 20,
      margin: 5
    },
  });