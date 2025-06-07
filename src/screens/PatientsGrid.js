import React from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Platform,
} from 'react-native';

const screenWidth = Dimensions.get('window').width;

// Dynamic column count: 1 for phones, 2 for tablets
const numColumns = screenWidth >= 768 ? 2 : 1;

const PatientsGrid = ({ patients, viewPatientDetails }) => {
  const renderItem = ({ item }) => {
    const isActive = item.status === 'Active';

    return (
      <TouchableOpacity
        style={[
          styles.card,
          isActive ? styles.activeBorder : styles.inactiveBorder,
          numColumns === 2 ? styles.cardTwoColumn : styles.cardSingleColumn,
        ]}
        onPress={() => viewPatientDetails(item.patientId)}
      >
        <View style={styles.rowContent}>
          <Image
            source={{ uri: item.photo || 'https://via.placeholder.com/100' }}
            style={styles.avatarImage}
          />
          <View style={styles.infoContainer}>
            <Text style={styles.name}>{item.fullName}</Text>
            <Text style={styles.info}>
              <Text style={styles.label}>MRN:</Text> {item.mrn}
            </Text>
            <Text style={styles.info}>
              <Text style={styles.label}>Last Update:</Text> {item.lastUpdate}
            </Text>
            <Text style={styles.info}>
              <Text style={styles.label}>Status:</Text>{' '}
              <Text style={isActive ? styles.activeStatus : styles.inactiveStatus}>
                {item.status}
              </Text>
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <FlatList
      data={patients}
      renderItem={renderItem}
      keyExtractor={(item) => item.patientId.toString()}
      numColumns={numColumns}
      contentContainerStyle={styles.container}
      columnWrapperStyle={numColumns > 1 ? styles.columnWrapper : null}
    />
  );
};

export default PatientsGrid;

const styles = StyleSheet.create({
  container: {
    padding: 0,
    paddingTop:10,
  },
  columnWrapper: {
    justifyContent: 'space-between',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    marginBottom: 7,
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  cardSingleColumn: {
    width: '100%',
  },
  cardTwoColumn: {
    width: (screenWidth / 2) - 20,
  },
  activeBorder: {
    borderWidth: 2,
    borderColor: 'green',
  },
  inactiveBorder: {
    borderWidth: 2,
    borderColor: 'gray',
  },
  rowContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatarImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 15,
    backgroundColor: '#eee',
  },
  infoContainer: {
    flex: 1,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 4,
  },
  info: {
    fontSize: 13,
    marginBottom: 2,
  },
  label: {
    fontWeight: 'bold',
  },
  activeStatus: {
    color: 'green',
    fontWeight: 'bold',
  },
  inactiveStatus: {
    color: 'gray',
    fontWeight: 'bold',
  },
});
