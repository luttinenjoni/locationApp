import { useEffect, useState } from 'react';
import { StyleSheet, View, TextInput, FlatList, Text, Image } from 'react-native';


export function Searcher() {

    const [searchText, setSearchText] = useState('')
    const [searchData, setSearchData] = useState('')

    useEffect(() => {
        fetch(`https://restcountries.com/v3.1/name/${searchText}`)
            .then(resp => resp.json())
            .then(data => {
                setSearchData(data.map(country => ({
                    name: country.name.common,
                    flag: country.flags.png
                })));
            })
    }, [searchText]);

    return (
        <View style={styles.background}>
            <TextInput style={styles.input}
                onChangeText={setSearchText}
                value={searchText}
                placeholder='Search...'
            />
        <FlatList
            data={searchData}
            renderItem={({ item }) => (
                <View style={styles.countryItem}>
                    <Image style={styles.flag} source={{ uri: item.flag }}/>
                    <Text style={styles.text}>{item.name}</Text>
                </View>
            )}
        />
        </View>
    )
}

const styles = StyleSheet.create({
    background: {
        backgroundColor: '#444B6E',
        flex: 1,
        flexDirection: 'column' 
    },
    input: {
        margin: 10,
        borderRadius: 10,
        padding: 15,
        backgroundColor: '#F8F991'
      },
      flag: {
        width: 100,
        height: 60,
      },
      text:{
        fontSize: 20
      },
      countryItem:{
        borderRadius: 10,
        flex: 1,
        flexDirection: 'row',
        margin: 10,
        backgroundColor: '#F8F991'
      }
})