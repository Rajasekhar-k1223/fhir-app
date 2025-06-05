import React,{useState} from 'react';
import { Text,View, StyleSheet,SafeAreaView, TextInput,TouchableOpacity } from 'react-native';
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
  // Add more...
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
    // Navigate to "Add Patient" screen or show form
    console.log('Add Patient clicked');
    // navigation.navigate('AddPatient');
  };
  return (
    <SafeAreaView>
       <TextInput
        style={styles.searchInput}
        placeholder="Search by name, MRN, or status..."
        value={searchQuery}
        onChangeText={setSearchQuery}
      />
      <PatientsGrid patients={filteredPatients} viewPatientDetails={viewPatientDetails} />
          {/* Floating Add Patient Button */}
         <View style={styles.bottomBar}>
        <TouchableOpacity style={styles.bottomButton} onPress={handleAddPatient}>
          <Icon name="person-add-outline" size={26} color="#fff" />
          <Text style={styles.bottomButtonText}>Add Patient</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    paddingTop: 10,
    backgroundColor: '#f5f5f5',
  },
  searchInput: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
    marginBottom: 10,
    backgroundColor: '#fff',
  },
    fab: {
    position: 'absolute',
    right: 20,
    bottom: 20,
    backgroundColor: '#007bff',
    width: 56,
    height: 56,
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 6,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 3,
    shadowOffset: { width: 0, height: 2 },
  },
  bottomBar: {
    height: 60,
    backgroundColor: '#007bff',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  bottomButtonText: {
    color: '#fff',
    fontSize: 16,
    marginLeft: 8,
    fontWeight: '600',
  },
});