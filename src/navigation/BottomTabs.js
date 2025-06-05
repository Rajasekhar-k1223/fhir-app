import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import PatientsScreen from '../screens/PatientsScreen';
import PractitionerScreen from '../screens/PractitionerScreen';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'Patients') {
            iconName = 'people-outline';
          } else if (route.name === 'Practitioners') {
            iconName = 'medkit-outline';
          }

          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#007bff',
        tabBarInactiveTintColor: 'gray',
        headerShown: true,
      })}
    >
      <Tab.Screen name="Patients" component={PatientsScreen} />
      <Tab.Screen name="Practitioners" component={PractitionerScreen} />
    </Tab.Navigator>
  );
};

export default BottomTabs;
