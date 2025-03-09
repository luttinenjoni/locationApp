import { useEffect } from 'react';
import { StyleSheet, View, FlatList, Pressable } from 'react-native';
import { Text, Button } from 'react-native-paper';
import { addAreaInfo, showNickname } from '../firebase/firestoreController';
import { useFireAuth } from '../firebase/FireStoreAuthContr';
import Icon from 'react-native-vector-icons/FontAwesome';
import { StarRatingDisplay } from 'react-native-star-rating-widget';

export function Locations({navigation, route}){


    const [user, areas] = useFireAuth()
    const nameC = route?.params?.nameC
    const desc = route?.params?.desc
    const rating = route?.params?.rating

    useEffect(() => {
        if (nameC && desc && rating) {
            addAreaInfo(nameC, desc, rating)}
    }, [nameC, desc, rating]);

    const handleAreaNameChange = (item) => {
        navigation.navigate('Map View', { place: item?.areaName });
    };   
    
    return(
        <View style={styles.background}>
            <Text style={styles.logged}>Logged in as: {user?.email}</Text>
            <FlatList style={styles.list}
                 data={areas}
                 renderItem={({item}) => 
                    <View style={styles.countrycell}> 
                        <Text variant='headlineLarge'>{item?.areaName}</Text>
                        <Text variant='bodyMedium'>{item?.areaDesc}</Text>
                        <StarRatingDisplay
                            rating={item?.rating}/>
                        <Pressable onPress={() => { handleAreaNameChange(item)}}>
                            <Icon style={styles.icon} name="map-marker" size={50}/>
                        </Pressable>
                    </View> }
            />  
            <Button 
                style={styles.button} 
                mode='contained' 
                onPress={() => navigation.navigate('Add New Location')}>Add a new location
            </Button>
        </View>
    )
}

const styles = StyleSheet.create({
    background: {
        backgroundColor: '#D7FFF1',
        height: '810'
    },
    countrycell: {
      borderWidth: 1,
      borderRadius: 10,
      alignContent: 'center',
      textAlign: 'center',
      padding: 20,
      margin: 10,
      backgroundColor:'#D7FFF1'
    },
    icon:{
        alignSelf: 'flex-end',
        color: '#285943'
    },
    button: {
        margin: 15,
        marginBottom: 45,
        padding: 5,
        backgroundColor: '#285943'
    },
    list: {
        borderWidth: 3,
        borderRadius:15,
        borderColor: '#8CD790',
        padding: 15,
        margin: 10,
        height: 600,
        backgroundColor:'#8CD790'
    },
    logged: {
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#AAFCB8',
        alignContent: 'center',
        padding: 8,
        margin: 10,
        backgroundColor: '#AAFCB8'
      },
  });