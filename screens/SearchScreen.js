import React, { useState } from 'react';
import {
  View, Text, TextInput, StyleSheet, Switch, ScrollView, TouchableOpacity, Image, ActivityIndicator
} from 'react-native';
import logo from '../assets/Logo.png';
import { Picker } from '@react-native-picker/picker';
import { Alert } from 'react-native';
import { fetchProviders } from '../utils/fetchProviders';

export default function SearchScreen({ navigation }) {
  const [nameOrSpecialty, setNameOrSpecialty] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [resultLimit, setResultLimit] = useState('50');
  const [gender, setGender] = useState('');
  const [entityType, setEntityType] = useState('');
  const [acceptingNewPatients, setAcceptingNewPatients] = useState(false);
  const [loading, setLoading] = useState(false);
  const [taxonomy, setTaxonomy] = useState('');

  const handleSearch = async () => {
    if (!zipCode) {
      Alert.alert("Missing Info", "Please enter at ZIP Code.");
      return;
    }

    if (zipCode && !/^[0-9]{5}$/.test(zipCode)) {
      Alert.alert("Invalid ZIP", "Please enter a valid 5-digit ZIP Code.");
      return;
    }

    const nameParts = nameOrSpecialty.trim().split(' ');
    const firstName = nameParts.length > 0 ? nameParts[0] : '';
    const lastName = nameParts.length > 1 ? nameParts.slice(1).join(' ') : '';

    setLoading(true);

    try {
      const providers = await fetchProviders(firstName, lastName, zipCode, gender, taxonomy, entityType, resultLimit);

      setLoading(false);

      if (providers.length > 0) {
        navigation.navigate('Results', { providers });
      } else {
        navigation.navigate('Results', { providers: [] });
      }
    } catch (error) {
      console.error("Error during search:", error);
      setLoading(false);
      Alert.alert("Error", "Failed to fetch providers. Please try again later.");
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image source={logo} style={styles.logo} />
        <Text style={styles.title}>Search for Providers</Text>
      </View>

      <View style={styles.field}>
        <Text style={styles.label}>Name or Specialty</Text>
        <TextInput
          style={styles.input}
          placeholder="e.g., Cardiology or Dr. Smith"
          placeholderTextColor="#888"
          value={nameOrSpecialty}
          onChangeText={setNameOrSpecialty}
        />
      </View>

      <View style={styles.field}>
        <Text style={styles.label}>ZIP Code</Text>
        <TextInput
          style={styles.input}
          placeholder="e.g., 07001"
          placeholderTextColor="#888"
          value={zipCode}
          keyboardType="numeric"
          onChangeText={setZipCode}
        />
      </View>

      <View style={styles.field}>
        <Text style={styles.label}>Number of Results</Text>
        <TextInput
          style={styles.input}
          placeholder="e.g., 25"
          placeholderTextColor="#888"
          value={resultLimit}
          keyboardType="numeric"
          onChangeText={setResultLimit}
        />
      </View>

      <View style={styles.field}>
        <Text style={styles.label}>Specialty</Text>
        <View style={styles.pickerWrapper}>
          <Picker
            selectedValue={taxonomy}
            onValueChange={(itemValue) => setTaxonomy(itemValue)}
            style={styles.picker}
          >
            <Picker.Item label="Select Specialty" value="" color="#888"/>
            <Picker.Item label="Internal Medicine" value="Internal Medicine" color="#888"/>
            <Picker.Item label="Cardiology" value="Cardiology" color="#888"/>
            <Picker.Item label="Family Practice" value="Family Practice" color="#888"/>
            <Picker.Item label="Pediatrics" value="Pediatrics" color="#888"/>
            <Picker.Item label="Dermatology" value="Dermatology" color="#888"/>
            <Picker.Item label="Psychiatry" value="Psychiatry" color="#888"/>
            <Picker.Item label="Orthopedic Surgery" value="Orthopedic Surgery" color="#888"/>
            <Picker.Item label="Radiology" value="Radiology" color="#888"/>
            <Picker.Item label="Anesthesiology" value="Anesthesiology" color="#888"/>
            <Picker.Item label="General Surgery" value="Surgery" color="#888"/>
          </Picker>
        </View>
      </View>

      <View style={styles.field}>
        <Text style={styles.label}>Gender</Text>
        <View style={styles.pickerWrapper}>
          <Picker
            selectedValue={gender}
            onValueChange={(itemValue) => setGender(itemValue)}
            style={styles.picker}
          >
            <Picker.Item label="Select Gender" value="" color="#888"/>
            <Picker.Item label="Male" value="M" color="#888"/>
            <Picker.Item label="Female" value="F" color="#888"/>
            <Picker.Item label="Other" value="X" color="#888"/>
          </Picker>
        </View>
      </View>

      <View style={styles.field}>
        <Text style={styles.label}>Entity Type</Text>
        <View style={styles.pickerWrapper}>
          <Picker
            selectedValue={entityType}
            onValueChange={setEntityType}
            style={styles.picker}
          >
            <Picker.Item label="Select Entity Type" value="" color="#888" />
            <Picker.Item label="Individual (NPI-1)" value="NPI-1" color="#888" />
            <Picker.Item label="Organization (NPI-2)" value="NPI-2" color="#888" />
          </Picker>
        </View>
      </View>


      <View style={styles.switchContainer}>
        <Text style={styles.label}>Accepting New Patients</Text>
        <Switch
          value={acceptingNewPatients}
          onValueChange={setAcceptingNewPatients}
        />
      </View>

      {loading ? (
        <ActivityIndicator size="large" color="#1E90FF" style={{ marginVertical: 20 }} />
      ) : (
        <TouchableOpacity
          style={styles.searchButton}
          onPress={handleSearch}
          disabled={loading}
        >
          <Text style={styles.searchButtonText}>Search</Text>
        </TouchableOpacity>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    alignItems: 'center',
    marginBottom: 25,
  },
  logo: {
    width: 260,
    height: 90,
    resizeMode: 'contain',
    marginTop: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginTop: 5
  },
  subtitle: {
    fontSize: 20,
    fontWeight: '600',
  },
  field: {
    marginBottom: 12,
  },
  label: {
    marginBottom: 6,
    fontWeight: '500',
    fontSize: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 12,
    borderRadius: 10,
    fontSize: 16,
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 16,
  },
  searchButton: {
    backgroundColor: '#1E90FF',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  searchButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  pickerWrapper: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    marginBottom: 0,
    overflow: 'hidden',
    backgroundColor: '#fff',
  },
  picker: {
    height: 150,
    marginTop: -65,
    paddingLeft: 10,
  },
});