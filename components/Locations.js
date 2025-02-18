import { StyleSheet, Text, View, Pressable } from 'react-native';
import { Button } from 'react-native-paper';

export function Locations({navigation, route}){

    const nameC = route?.params?.nameC
    const desc = route?.params?.desc

    return(
        <View>
            <Text>Locations are shown here</Text>
            <Button mode='contained' onPress={() => navigation.navigate('Add New Location')}>Add a new location</Button>
            <Text>{nameC} - {desc}</Text>
        </View>
    )
}