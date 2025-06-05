import React from 'react';
import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import PatientsGrid from './PatientsGrid';

export default function PatientsScreen() {
   const navigation = useNavigation();
 const samplePatients = [
  {
    patientId: 1,
    fullName: 'John Doe',
    mrn: 'MRN123',
    lastUpdate: '2025-06-03',
    status: 'Active',
    photo: 'https://example.com/avatar1.png',
  },
  {
    patientId: 2,
    fullName: 'Jane Smith',
    mrn: 'MRN456',
    lastUpdate: '2025-05-30',
    status: 'Inactive',
    photo: 'https://example.com/avatar2.png',
  },
  // Add more...
];
const viewPatientDetails = (patientId) => {
    console.log('View details for patient:', patientId);
    navigation.navigate('PatientDetail', { id: patientId });
  };
  return (
    <SafeAreaView>
      <PatientsGrid patients={samplePatients} viewPatientDetails={viewPatientDetails} />
    </SafeAreaView>
  );
}
