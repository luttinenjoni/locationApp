import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';
import { Locations } from './components/Locations'
import { AddLocation } from './components/AddLocation'
import { MapViews } from './components/MapView';
import { Searcher } from './components/CountrySearcher'
import Login from './components/Login';

const Stack = createNativeStackNavigator()

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator  screenOptions={{
          headerStyle: {
            backgroundColor: '#F8F991'
          }}}>
        <Stack.Screen  name='Login/Register' component={Login}/>
        <Stack.Screen name='My Added Locations' component={Locations}/>
        <Stack.Screen name='Add New Location' component={AddLocation}/>
        <Stack.Screen name='Map View' component={MapViews}/>
        <Stack.Screen name='Searcher' component={Searcher}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}