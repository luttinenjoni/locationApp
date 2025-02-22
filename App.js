import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';
import { Locations } from './components/Locations'
import { AddLocation } from './components/AddLocation'
import { MapView } from './components/MapView';
import { UseFireAreas } from './firebase/firestoreController';

const Stack = createNativeStackNavigator()

export default function App() {

  const areas = UseFireAreas()

  console.log(areas)

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Locations' component={Locations}/>
        <Stack.Screen name='Add New Location' component={AddLocation}/>
        <Stack.Screen name='Map View' component={MapView}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
