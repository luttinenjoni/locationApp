import { useState, useEffect } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import { Button, Text } from 'react-native-paper';

export function Locations({navigation, route}){

    const nameC = route?.params?.nameC
    const desc = route?.params?.desc

    const [cData, setcData] = useState([])

    useEffect(() => {
        if (nameC && desc) {
            setcData(c => [...c, nameC + ' ' + desc]);}
        
    }, [nameC, desc]);

    const RenderItem = (value) => {
        return(
            <Text style={styles.countrycell}>{value.item}</Text>
        )
    }

    return(

        <View>
            <Text>Locations are shown here</Text>
            <Button mode='contained' onPress={() => navigation.navigate('Add New Location')}>Add a new location</Button>
            <FlatList 
                 data={cData}
                 renderItem={({item}) => <RenderItem item={item}/>}
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