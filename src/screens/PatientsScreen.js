import React, { useState } from 'react';
import { Text, View, StyleSheet, SafeAreaView, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import PatientsGrid from './PatientsGrid';
import Icon from 'react-native-vector-icons/Ionicons';

export default function PatientsScreen() {
  const [searchQuery, setSearchQuery] = useState('');
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
     {
      patientId: 3,
      fullName: 'John Doe',
      mrn: 'MRN123',
      lastUpdate: '2025-06-03',
      status: 'Active',
      photo: 'https://example.com/avatar1.png',
    },
    {
      patientId: 4,
      fullName: 'Jane Smith',
      mrn: 'MRN456',
      lastUpdate: '2025-05-30',
      status: 'Inactive',
      photo: 'https://example.com/avatar2.png',
    }, {
      patientId: 5,
      fullName: 'John Doe',
      mrn: 'MRN123',
      lastUpdate: '2025-06-03',
      status: 'Active',
      photo: 'https://example.com/avatar1.png',
    },
    {
      patientId: 6,
      fullName: 'Jane Smith',
      mrn: 'MRN456',
      lastUpdate: '2025-05-30',
      status: 'Inactive',
      photo: 'https://example.com/avatar2.png',
    }, {
      patientId: 7,
      fullName: 'John Doe',
      mrn: 'MRN123',
      lastUpdate: '2025-06-03',
      status: 'Active',
      photo: 'https://example.com/avatar1.png',
    },
    {
      patientId: 8,
      fullName: 'Jane Smith',
      mrn: 'MRN456',
      lastUpdate: '2025-05-30',
      status: 'Inactive',
      photo: 'https://example.com/avatar2.png',
    }, {
      patientId: 9,
      fullName: 'John Doe',
      mrn: 'MRN123',
      lastUpdate: '2025-06-03',
      status: 'Active',
      photo: 'https://example.com/avatar1.png',
    },
    {
      patientId: 10,
      fullName: 'Jane Smith',
      mrn: 'MRN456',
      lastUpdate: '2025-05-30',
      status: 'Inactive',
      photo: 'https://example.com/avatar2.png',
    }, {
      patientId: 11,
      fullName: 'John Doe',
      mrn: 'MRN123',
      lastUpdate: '2025-06-03',
      status: 'Active',
      photo: 'https://example.com/avatar1.png',
    },
    {
      patientId: 12,
      fullName: 'Jane Smith',
      mrn: 'MRN456',
      lastUpdate: '2025-05-30',
      status: 'Inactive',
      photo: 'https://example.com/avatar2.png',
    }, {
      patientId: 13,
      fullName: 'John Doe',
      mrn: 'MRN123',
      lastUpdate: '2025-06-03',
      status: 'Active',
      photo: 'https://example.com/avatar1.png',
    },
    {
      patientId: 14,
      fullName: 'Jane Smith',
      mrn: 'MRN456',
      lastUpdate: '2025-05-30',
      status: 'Inactive',
      photo: 'https://example.com/avatar2.png',
    }, {
      patientId: 15,
      fullName: 'John Doe',
      mrn: 'MRN123',
      lastUpdate: '2025-06-03',
      status: 'Active',
      photo: 'https://example.com/avatar1.png',
    },
    {
      patientId: 16,
      fullName: 'Jane Smith',
      mrn: 'MRN456',
      lastUpdate: '2025-05-30',
      status: 'Inactive',
      photo: 'https://example.com/avatar2.png',
    }, {
      patientId: 17,
      fullName: 'John Doe',
      mrn: 'MRN123',
      lastUpdate: '2025-06-03',
      status: 'Active',
      photo: 'https://example.com/avatar1.png',
    },
    {
      patientId: 18,
      fullName: 'Jane Smith',
      mrn: 'MRN456',
      lastUpdate: '2025-05-30',
      status: 'Inactive',
      photo: 'https://example.com/avatar2.png',
    }, {
      patientId: 19,
      fullName: 'John Doe',
      mrn: 'MRN123',
      lastUpdate: '2025-06-03',
      status: 'Active',
      photo: 'https://example.com/avatar1.png',
    },
    {
      patientId: 20,
      fullName: 'Jane Smith',
      mrn: 'MRN456',
      lastUpdate: '2025-05-30',
      status: 'Inactive',
      photo: 'https://example.com/avatar2.png',
    }, {
      patientId: 21,
      fullName: 'John Doe',
      mrn: 'MRN123',
      lastUpdate: '2025-06-03',
      status: 'Active',
      photo: 'https://example.com/avatar1.png',
    },
    {
      patientId: 22,
      fullName: 'Jane Smith',
      mrn: 'MRN456',
      lastUpdate: '2025-05-30',
      status: 'Inactive',
      photo: 'https://example.com/avatar2.png',
    },
  ];

  const viewPatientDetails = (patientId) => {
    const selectedPatient = samplePatients.find(p => p.patientId === patientId);
    navigation.navigate('PatientDetails', { patient: selectedPatient });
  };

  const filteredPatients = samplePatients.filter((patient) =>
    patient.fullName.toLowerCase().includes(searchQuery.toLowerCase()) ||
    patient.mrn.toLowerCase().includes(searchQuery.toLowerCase()) ||
    patient.status.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleAddPatient = () => {
    console.log('Add Patient clicked');
    navigation.navigate('AddPatient');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search by name, MRN, or status..."
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
        <PatientsGrid
          patients={filteredPatients}
          viewPatientDetails={viewPatientDetails}
        />
      </View>

      {/* Fixed Bottom Button */}
      <TouchableOpacity style={styles.bottomButtonFixed} onPress={handleAddPatient}>
        <Icon name="person-add-outline" size={20} color="#fff" />
        {/* <Text style={styles.bottomButtonText}>Add Patient</Text> */}
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  content: {
    flex: 1,
    paddingHorizontal: 10,
    paddingTop: 10,
  },
  searchInput: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
    marginBottom: 5,
    backgroundColor: '#fff',
  },
  bottomButtonFixed: {
    position: 'absolute',
    bottom: 5,
    right: 15,
    backgroundColor: '#007bff',
    width:50,
    paddingVertical: 14,
    borderRadius: 30,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 6,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 3,
    shadowOffset: { width: 0, height: 2 },
  },
  bottomButtonText: {
    color: '#fff',
    fontSize: 16,
    marginLeft: 8,
    fontWeight: '600',
  },
});
