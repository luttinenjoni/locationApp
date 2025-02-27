import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';
import { Locations } from './components/Locations'
import { AddLocation } from './components/AddLocation'
import { MapViews } from './components/MapView';

const Stack = createNativeStackNavigator()

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Locations' component={Locations}/>
        <Stack.Screen name='Add New Location' component={AddLocation}/>
        <Stack.Screen name='Map View' component={MapViews}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
