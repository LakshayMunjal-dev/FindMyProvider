import React, { useState, useEffect } from 'react';
import {
  View, Text, TextInput, Button, StyleSheet, Switch, ScrollView, TouchableOpacity, Image
} from 'react-native';
import logo from '../assets/Logo.png';
import { Picker } from '@react-native-picker/picker';
import { Alert } from 'react-native';



export default function SearchScreen({ navigation }) {
  const [nameOrSpecialty, setNameOrSpecialty] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [radius, setRadius] = useState('');
  const [gender, setGender] = useState('');
  const [language, setLanguage] = useState('');
  const [acceptingNewPatients, setAcceptingNewPatients] = useState(false);

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

      <TouchableOpacity style={styles.searchButton} onPress={() => {
        if (!nameOrSpecialty && !zipCode) {
          Alert.alert("Missing Info", "Please enter both Name/Specialty and ZIP Code.");
          return;
        }

        if (!nameOrSpecialty) {
          Alert.alert("Missing Info", "Please enter a Name or Specialty.");
          return;
        }

        if (!zipCode) {
          Alert.alert("Missing Info", "Please enter a ZIP Code.");
          return;
        }

        if (!/^[0-9]{5}$/.test(zipCode)) {
          Alert.alert("Invalid ZIP", "Please enter a valid 5-digit ZIP Code.");
          return;
        }

        navigation.navigate('Results');
      }}>
        <Text style={styles.searchButtonText}>Search</Text>
      </TouchableOpacity>
     
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