import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import Icon from 'react-native-vector-icons/Ionicons';
import { launchImageLibrary } from 'react-native-image-picker';

const countriesWithIDs = [
  { label: 'India (Aadhaar)', system: 'https://uidai.gov.in', example: '1234 5678 9012' },
  { label: 'USA (SSN)', system: 'https://www.ssa.gov', example: '123-45-6789' },
  { label: 'UK (NIN)', system: 'https://www.ni.direct.gov.uk', example: 'QQ123456C' },
  { label: 'Canada (SIN)', system: 'https://www.canada.ca/sin', example: '123-456-789' },
  { label: 'Brazil (CPF)', system: 'https://www.gov.br/cpf', example: '123.456.789-00' },
  { label: 'China (Resident ID)', system: 'https://www.chinaid.cn', example: '11010519900101003X' },
  { label: 'Japan (My Number)', system: 'https://mynumber.japan.go.jp', example: '123456789012' },
];

const bloodGroups = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];

const nationalities = [
  'Indian',
  'American',
  'British',
  'Canadian',
  'Brazilian',
  'Chinese',
  'Japanese',
  'Other',
];

const maritalStatuses = [
  'Single',
  'Married',
  'Divorced',
  'Widowed',
  'Separated',
  'Other',
];

const AddPatientScreen = ({ navigation }) => {
  const [fullName, setFullName] = useState('');
  const [gender, setGender] = useState('male');
  const [dateOfBirth, setDateOfBirth] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [mrn, setMrn] = useState('');
  const [country, setCountry] = useState(countriesWithIDs[0].system);
  const [patientId, setPatientId] = useState('');

  // New fields
  const [address, setAddress] = useState('');
  const [emergencyContactName, setEmergencyContactName] = useState('');
  const [emergencyContactPhone, setEmergencyContactPhone] = useState('');
  const [bloodGroup, setBloodGroup] = useState(bloodGroups[0]);
  const [maritalStatus, setMaritalStatus] = useState(maritalStatuses[0]);
  const [nationality, setNationality] = useState(nationalities[0]);

  // Profile Pic
  const [profilePicUri, setProfilePicUri] = useState(null);

  const selectProfilePic = () => {
    launchImageLibrary(
      {
        mediaType: 'photo',
        maxWidth: 300,
        maxHeight: 300,
        quality: 0.7,
      },
      (response) => {
        if (response.didCancel) {
          console.log('User cancelled image picker');
        } else if (response.errorCode) {
          console.log('ImagePicker Error: ', response.errorMessage);
        } else {
          const uri = response.assets && response.assets[0]?.uri;
          if (uri) {
            setProfilePicUri(uri);
          }
        }
      }
    );
  };

  const handleSubmit = () => {
    const selectedCountry = countriesWithIDs.find(c => c.system === country);
    const patientData = {
      profilePicUri,
      fullName,
      gender,
      dateOfBirth,
      phone,
      email,
      mrn,
      identifier: {
        system: selectedCountry.system,
        value: patientId,
      },
      address,
      emergencyContact: {
        name: emergencyContactName,
        phone: emergencyContactPhone,
      },
      bloodGroup,
      nationality,
      maritalStatus,
    };
    console.log('Submitted Patient:', patientData);
    // Add your backend POST call here
  };

  const selectedCountryDetails = countriesWithIDs.find(c => c.system === country);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.label}>Profile Picture</Text>
      <TouchableOpacity style={styles.profilePicWrapper} onPress={selectProfilePic}>
        {profilePicUri ? (
          <Image source={{ uri: profilePicUri }} style={styles.profilePic} />
        ) : (
          <View style={styles.placeholder}>
            <Icon name="camera-outline" size={40} color="#aaa" />
            <Text style={{ color: '#aaa' }}>Tap to upload</Text>
          </View>
        )}
      </TouchableOpacity>

      <Text style={styles.label}>Full Name</Text>
      <TextInput
        style={styles.input}
        value={fullName}
        onChangeText={setFullName}
        placeholder="Enter full name"
      />

      <Text style={styles.label}>Gender</Text>
      <Picker
        selectedValue={gender}
        onValueChange={setGender}
        style={styles.input}
      >
        <Picker.Item label="Male" value="male" />
        <Picker.Item label="Female" value="female" />
        <Picker.Item label="Other" value="other" />
      </Picker>

      <Text style={styles.label}>Date of Birth</Text>
      <TouchableOpacity onPress={() => setShowDatePicker(true)}>
        <Text style={[styles.input, { paddingVertical: 10 }]}>
          {dateOfBirth.toDateString()}
        </Text>
      </TouchableOpacity>
      {showDatePicker && (
        <DateTimePicker
          value={dateOfBirth}
          mode="date"
          display="default"
          onChange={(event, selectedDate) => {
            setShowDatePicker(false);
            if (selectedDate) setDateOfBirth(selectedDate);
          }}
        />
      )}

      <Text style={styles.label}>Phone</Text>
      <TextInput
        style={styles.input}
        value={phone}
        onChangeText={setPhone}
        placeholder="Enter phone number"
        keyboardType="phone-pad"
      />

      <Text style={styles.label}>Email</Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        placeholder="Enter email"
        keyboardType="email-address"
      />

      <Text style={styles.label}>MRN (Medical Record Number)</Text>
      <TextInput
        style={styles.input}
        value={mrn}
        onChangeText={setMrn}
        placeholder="Enter MRN"
      />

      <Text style={styles.label}>Country</Text>
      <View style={styles.pickerWrapper}>
        <Picker
          selectedValue={country}
          onValueChange={(value) => setCountry(value)}>
          {countriesWithIDs.map((c, index) => (
            <Picker.Item label={c.label} value={c.system} key={index} />
          ))}
        </Picker>
      </View>

      <Text style={styles.label}>National ID ({selectedCountryDetails.label})</Text>
      <TextInput
        style={styles.input}
        placeholder={`e.g. ${selectedCountryDetails.example}`}
        value={patientId}
        onChangeText={setPatientId}
      />

      <Text style={styles.label}>Address</Text>
      <TextInput
        style={[styles.input, { height: 80 }]}
        value={address}
        onChangeText={setAddress}
        placeholder="Enter address"
        multiline
      />

      <Text style={styles.label}>Emergency Contact Name</Text>
      <TextInput
        style={styles.input}
        value={emergencyContactName}
        onChangeText={setEmergencyContactName}
        placeholder="Enter emergency contact name"
      />

      <Text style={styles.label}>Emergency Contact Phone</Text>
      <TextInput
        style={styles.input}
        value={emergencyContactPhone}
        onChangeText={setEmergencyContactPhone}
        placeholder="Enter emergency contact phone"
        keyboardType="phone-pad"
      />

      <Text style={styles.label}>Blood Group</Text>
      <View style={styles.pickerWrapper}>
        <Picker
          selectedValue={bloodGroup}
          onValueChange={setBloodGroup}
        >
          {bloodGroups.map((bg, index) => (
            <Picker.Item label={bg} value={bg} key={index} />
          ))}
        </Picker>
      </View>

      <Text style={styles.label}>Nationality</Text>
      <View style={styles.pickerWrapper}>
        <Picker
          selectedValue={nationality}
          onValueChange={setNationality}
        >
          {nationalities.map((nat, index) => (
            <Picker.Item label={nat} value={nat} key={index} />
          ))}
        </Picker>
      </View>

      <Text style={styles.label}>Marital Status</Text>
      <View style={styles.pickerWrapper}>
        <Picker
          selectedValue={maritalStatus}
          onValueChange={setMaritalStatus}
        >
          {maritalStatuses.map((status, index) => (
            <Picker.Item label={status} value={status} key={index} />
          ))}
        </Picker>
      </View>

      <TouchableOpacity style={styles.submitBtn} onPress={handleSubmit}>
        <Icon name="person-add-outline" size={24} color="#fff" />
        <Text style={styles.submitText}>Add Patient</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default AddPatientScreen;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#fff',
  },
  label: {
    marginTop: 10,
    fontWeight: '600',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 6,
    padding: 10,
    marginTop: 5,
  },
  pickerWrapper: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    overflow: 'hidden',
    marginTop: 5,
  },
  submitBtn: {
    flexDirection: 'row',
    marginTop: 25,
    backgroundColor: '#007bff',
    borderRadius: 8,
    padding: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  submitText: {
    color: '#fff',
    marginLeft: 8,
    fontWeight: 'bold',
  },
  profilePicWrapper: {
    alignSelf: 'center',
    marginVertical: 15,
    borderRadius: 75,
    width: 150,
    height: 150,
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  profilePic: {
    width: 150,
    height: 150,
    borderRadius: 75,
  },
  placeholder: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
