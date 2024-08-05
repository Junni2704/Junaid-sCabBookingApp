import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import CabDetailScreen from '../screens/CabDetailScreen';
import MyCabScreen from '../screens/MyCabScreen';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const HomeStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="Cabs List" component={HomeScreen} />
    <Stack.Screen
      name="Cab Detail"
      component={CabDetailScreen}
      options={({ route }) => ({ title: route.params.cab.companyName })}
    />
  </Stack.Navigator>
);

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={HomeStack}
          options={{ headerTitle: "Junaid's Cab Booking App" }}
        />
        <Tab.Screen name="My Cab" component={MyCabScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;