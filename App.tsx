// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import WelcomeScreen from './src/screens/WelcomeScreen';
import LoginScreen from './src/screens/LoginScreen';
import PatientsScreen from './src/screens/PatientsScreen';
import PractitionerScreen from './src/screens/PractitionerScreen';
import PatientDetailScreen from './src/screens/PatientDetailScreen';
import BottomTabs from './src/navigation/BottomTabs';
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="HomeTabs" component={BottomTabs} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Patients" component={PatientsScreen} />
        <Stack.Screen name="Practitioner" component={PractitionerScreen} />
        <Stack.Screen name="PatientDetails" component={PatientDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
