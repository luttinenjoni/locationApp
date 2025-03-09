import { useState } from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import { Button } from 'react-native-paper';
import StarRating from 'react-native-star-rating-widget';

export function AddLocation({navigation}){
    return(
        <View>
            <Form navigation={navigation}></Form>
        </View>
    )
}

function Form({navigation}){
    
    const [nameC, setNameC] = useState('')
    const [desc, setDesc] = useState('')
    const [rating, setRating] = useState(0)

    return(
        <View style={styles.list}>
            <TextInput
                style={styles.input}
                onChangeText={setNameC}
                value={nameC}
                placeholder="Area name"
            />
             <TextInput
                style={styles.input}
                onChangeText={setDesc}
                value={desc}
                placeholder="Area description"
            />    
            <StarRating style={styles.rating}
                rating={rating}
                onChange={setRating}
            />
            <Button 
                style={styles.button}
                mode='contained'
                onPress={() => navigation.navigate('My Added Locations', {nameC, desc, rating})}
            >Add</Button>
        </View>
    )
}

const styles = StyleSheet.create({
    list: {
        padding: 20,
        gap: 5,
        height: 810,
        backgroundColor: '#444B6E'
    },
    input: {
      height: 40,
      margin: 5,
      borderRadius: 5,
      padding: 10,
      backgroundColor: '#F8F991'
    },
    rating: {
        padding:6,
        borderWidth:2,
        borderColor: '#F8F991',
        borderRadius: 5,
        width: 230,
        margin: 5,
        alignSelf: 'center'
    },
    button: {
        backgroundColor: '#3D315B'
    }
  });