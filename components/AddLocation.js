import { useState } from 'react';
import { Pressable, StyleSheet, Text, View, TextInput } from 'react-native';
import { Button } from 'react-native-paper';

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
            <Button mode='contained' onPress={() => navigation.navigate('Locations', {nameC, desc})}>Add</Button>
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