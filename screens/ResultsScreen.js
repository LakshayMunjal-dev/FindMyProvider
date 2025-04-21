import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, ActivityIndicator, StyleSheet } from 'react-native';

const mockProviders = [
  {
    id: '1',
    name: 'Dr. Aditi Sharma, MD',
    specialty: 'Cardiology',
    gender: 'Female',
    languages: 'English, Hindi',
    practiceType: 'Individual',
    address: '101 Health Ave, Newark, NJ 07102',
    phone: '(123) 456-7890',
    email: 'aditi@horizonmed.com',
    hospitalAffiliations: 'Saint Michael’s Hospital',
    boardAffiliations: 'American Board of Cardiology',
    networkParticipations: 'Horizon Managed Care: Yes\nHorizon PPO: Yes',
  },
  {
    id: '2',
    name: 'Dr. Ravi Patel, MD',
    specialty: 'Dermatology',
    gender: 'Male',
    languages: 'English',
    practiceType: 'Group',
    address: '202 Skin Blvd, Jersey City, NJ 07302',
    phone: '(987) 654-3210',
    email: 'ravi@horizonmed.com',
    hospitalAffiliations: 'City MD',
    boardAffiliations: 'American Board of Dermatology',
    networkParticipations: 'Horizon Managed Care: Yes\nHorizon PPO: No',
  },
];

export default function ResultsScreen({ navigation }) {
  const [loading, setLoading] = useState(true);
  const [results, setResults] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setResults(mockProviders);
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) {
    return <ActivityIndicator size="large" style={{ flex: 1, justifyContent: 'center' }} />;
  }

  if (results.length === 0) {
    return (
      <View style={styles.center}>
        <Text style={styles.noResults}>No results found</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={results}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() => navigation.navigate('Details', { provider: item })}
          >
            <Text style={styles.name}>{item.name}</Text>
            <Text>{item.specialty}</Text>
            <Text>{item.phone}</Text>
            <Text>{item.address}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
    flex: 1,
    backgroundColor: '#fff',
  },
  card: {
    backgroundColor: '#f1f1f1',
    padding: 15,
    marginBottom: 15,
    borderRadius: 10,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 17,
    marginBottom: 4,
  },
  noResults: {
    fontSize: 18,
    color: '#888',
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});