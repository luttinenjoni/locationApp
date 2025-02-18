import { useState } from 'react';
import { Pressable, StyleSheet, Text, View, TextInput } from 'react-native';

export function AddLocation({navigation}){
    return(
        <View>
            <Pressable onPress={() => navigation.navigate('Locations')}>
                <Text>Form for adding new location are shown here</Text>
            </Pressable>
            <Form></Form>
        </View>
    )
}



function Form(){
    
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