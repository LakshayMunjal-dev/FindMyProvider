import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Alert } from 'react-native';

export default function ProfileScreen({ onSignOut }) {
  const [name, setName] = useState('Lakshay Munjal');
  const [email, setEmail] = useState('lm485@njit.edu');
  const [dob, setDob] = useState('2000-01-01');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignOut = () => {
    Alert.alert('Signed out', 'You have been signed out.');
    onSignOut();
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Profile</Text>

      <Text style={styles.label}>Full Name</Text>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setName}
      />

      <Text style={styles.label}>Email Address</Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Update Profile</Text>
      </TouchableOpacity>

      <Text style={styles.header}>Change Password</Text>

      <Text style={styles.label}>New Password</Text>
      <TextInput
        style={styles.input}
        value={password}
        onChangeText={setPassword}
        placeholder="Enter new password"
        placeholderTextColor="#888"
        secureTextEntry
      />

      <Text style={styles.label}>Confirm New Password</Text>
      <TextInput
        style={styles.input}
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        placeholder="Confirm new password"
        placeholderTextColor="#888"
        secureTextEntry
      />

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Update Password</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.signOutButton} onPress={handleSignOut}>
        <Text style={styles.signOutText}>Sign Out</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    backgroundColor: '#fff',
    flexGrow: 1,
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 20,
  },
  title: {
    fontSize: 35,
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop: 30,
    textAlign: 'center',
  },
  label: {
    fontSize: 15,
    marginBottom: 6,
    fontWeight: '500',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 12,
    borderRadius: 8,
    marginBottom: 15,
  },
  button: {
    backgroundColor: '#1E90FF',
    padding: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 25,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
  signOutButton: {
    padding: 12,
    borderRadius: 8,
    backgroundColor: '#f44336',
    alignItems: 'center',
    marginTop: 10,
  },
  signOutText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
});