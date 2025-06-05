import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const PatientDetailScreen = ({ route }) => {
  const { patient } = route.params;

  return (
    <View style={styles.container}>
      <Image source={{ uri: patient.photo }} style={styles.image} />
      <Text style={styles.name}>{patient.fullName}</Text>
      <Text style={styles.info}>MRN: {patient.mrn}</Text>
      <Text style={styles.info}>Last Update: {patient.lastUpdate}</Text>
      <Text style={styles.info}>Status: {patient.status}</Text>
    </View>
  );
};

export default PatientDetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 20,
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  info: {
    fontSize: 16,
    marginTop: 8,
  },
});
