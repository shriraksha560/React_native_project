import React from 'react';
import {Text,View,StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './Screens/Login';
import Register from './Screens/Register';
import Splash from './Screens/Splash';
import Dashboard from './Screens/Dashboard';
import BusBooking from './Screens/BusBooking';
import CabsBooking from './Screens/CabsBooking';

const Stack = createStackNavigator();

export default class App extends React.Component{
  render()
{
  return(
<NavigationContainer>

<Stack.Navigator
  initialRouteName="Dashboard"
  screenOptions={({ route, navigation }) => ({
    gestureEnabled: true,
    cardOverlayEnabled: true,
    
  })}
  mode="modal"
  headerMode="none"
>
<Stack.Screen name="Splash" component={Splash} 
/>
<Stack.Screen name="Login" component={Login} />
  <Stack.Screen name="Register" component={Register} />
  <Stack.Screen name="Bus booking" component={BusBooking} />
  <Stack.Screen name="Cabs Booking" component={CabsBooking}/>

  <Stack.Screen name="Dashboard" component={Dashboard} options={{ title: 'Dashboard'}}/>


</Stack.Navigator>
</NavigationContainer>
  );
}}