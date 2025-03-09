import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';
import { Locations } from './components/Locations'
import { AddLocation } from './components/AddLocation'
import { MapViews } from './components/MapView';
import Login from './components/Login';
import { StyleSheet } from 'react-native';

const Stack = createNativeStackNavigator()

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator  screenOptions={{
          headerStyle: {
            backgroundColor: '#77AF9C'
          }
        }}>
        <Stack.Screen  name='Login/Register' component={Login}/>
        <Stack.Screen name='My Added Locations' component={Locations}/>
        <Stack.Screen name='Add New Location' component={AddLocation}/>
        <Stack.Screen name='Map View' component={MapViews}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const Styles = StyleSheet.create({
  container:{
    backgroundColor: '#D7FFF1'
  }
})