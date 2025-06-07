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
import AddPatientScreen from './src/screens/AddPatientScreen';
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Welcome"  options={{ headerShown: false }} component={WelcomeScreen} />
        <Stack.Screen name="HomeTabs"  options={{ headerShown: false }}  component={BottomTabs} />
        <Stack.Screen name="Login"  options={{ headerShown: false }} component={LoginScreen} />
        <Stack.Screen name="Patients"  options={{ headerShown: false }} component={PatientsScreen} />
        <Stack.Screen name="AddPatient"  component={AddPatientScreen} />
        <Stack.Screen name="Practitioner"  options={{ headerShown: false }} component={PractitionerScreen} />
        <Stack.Screen name="PatientDetails" component={PatientDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
