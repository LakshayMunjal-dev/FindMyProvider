import React, { useState } from 'react';
import {
  View, Text, TextInput, Button, StyleSheet, Switch, ScrollView, TouchableOpacity, Image, ActivityIndicator
} from 'react-native';
import logo from '../assets/Logo.png';
import { Picker } from '@react-native-picker/picker';
import { Alert } from 'react-native';
import { fetchProviders } from '../utils/fetchProviders';

export default function SearchScreen({ navigation }) {
  const [nameOrSpecialty, setNameOrSpecialty] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [radius, setRadius] = useState('');
  const [gender, setGender] = useState('');
  const [language, setLanguage] = useState('');
  const [acceptingNewPatients, setAcceptingNewPatients] = useState(false);
  const [loading, setLoading] = useState(false);

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
      const providers = await fetchProviders(firstName, lastName, zipCode);

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
        <Text style={styles.label}>Radius (miles)</Text>
        <TextInput
          style={styles.input}
          placeholder="e.g., 10"
          placeholderTextColor="#888"
          value={radius}
          keyboardType="numeric"
          onChangeText={setRadius}
        />
      </View>

      <View style={styles.field}>
        <Text style={styles.label}>Gender</Text>
        <View style={styles.pickerWrapper}>
          <Picker
            selectedValue={gender}
            onValueChange={(itemValue) => setGender(itemValue)}
            style={styles.picker}
          >
            <Picker.Item label="Select Gender" value="" color="#888" />
            <Picker.Item label="Male" value="male" color="#888"/>
            <Picker.Item label="Female" value="female" color="#888"/>
          </Picker>
        </View>
      </View>

      <View style={styles.field}>
        <Text style={styles.label}>Language</Text>
        <View style={styles.pickerWrapper}>
          <Picker
            selectedValue={language}
            onValueChange={(itemValue) => setLanguage(itemValue)}
            style={styles.picker}
          >
            <Picker.Item label="Select Language" value="" color="#888" />
            <Picker.Item label="English" value="english" color="#888"/>
            <Picker.Item label="Spanish" value="spanish" color="#888"/>
            <Picker.Item label="Hindi" value="hindi" color="#888"/>
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