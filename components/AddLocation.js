import { useState } from 'react';
import { Pressable, StyleSheet, Text, View, TextInput } from 'react-native';
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
    const [rating, setRating] = useState(0);
  



    return(
        <View>
            <TextInput
                style={styles.input}
                onChangeText={setNameC}
                value={nameC}
                placeholder="Country name"
            />
             <TextInput
                style={styles.input}
                onChangeText={setDesc}
                value={desc}
                placeholder="Country description"
            />    
            <StarRating
                rating={rating}
                onChange={setRating}
            />
            <Button mode='contained' onPress={() => navigation.navigate('Locations', {nameC, desc, rating})}>Add</Button>
        </View>
        
    )
}

const styles = StyleSheet.create({
    input: {
      height: 40,
      margin: 5,
      borderWidth: 1,
      padding: 10,
    },
  });