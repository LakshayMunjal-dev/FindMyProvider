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
        FindMyProvider is a mobile app that helps users search for healthcare providers using real-time CMS NPI Registry data.
        Users can filter by specialty, ZIP code, gender, entity type, and more to find providers that match their needs.
      </Text>

      <Text style={styles.sectionTitle}>Data Source</Text>
      <Text style={styles.text}>
        All data displayed is sourced from the publicly available CMS National Plan and Provider Enumeration System (NPPES) registry.
      </Text>

      <Text style={styles.sectionTitle}>Developer</Text>
      <Text style={styles.text}>
        Lakshay Munjal
        Capstone Project – Spring 2025
        New Jersey Institute of Technology
        Email: lm485@njit.edu
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
