import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import logo from '../assets/Logo.png';

export default function AboutScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={logo} style={styles.logo} />

      <Text style={styles.title}>About FindMyProvider</Text>

      <Text style={styles.sectionTitle}>Purpose</Text>
      <Text style={styles.text}>
        This app allows users to search for healthcare providers based on filters such as specialty, location, gender, and language.
      </Text>

      <Text style={styles.sectionTitle}>Data Source</Text>
      <Text style={styles.text}>
        The app integrates with Horizon Blue Cross Blue Shield's Provider Directory Sandbox API. Due to the lack of live sandbox data, mock responses are used for UI demonstration.
      </Text>

      <Text style={styles.sectionTitle}>Developer</Text>
      <Text style={styles.text}>
        Lakshay Munjal
      </Text>

      <Text style={styles.footer}>
        This is a Capstone individual project.
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
    flexGrow: 1,
    justifyContent: 'flex-start'
  },
  logo: {
    width: 300,
    height: 90,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginBottom: 80,
    marginTop: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginTop: 15,
    marginBottom: 5,
  },
  text: {
    fontSize: 15,
    lineHeight: 22,
  },
  footer: {
    fontSize: 13,
    color: '#666',
    marginTop: 30,
    textAlign: 'center',
  },
});
