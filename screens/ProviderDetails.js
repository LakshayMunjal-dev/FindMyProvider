import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ProviderDetails({ route }) {
  const { provider } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{provider.name}</Text>
      <Text style={styles.info}>Specialty: {provider.specialty}</Text>
      <Text style={styles.info}>Phone: {provider.phone}</Text>
      <Text style={styles.info}>Address: {provider.address}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 25,
    flex: 1,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  info: {
    fontSize: 16,
    marginBottom: 10,
  },
});