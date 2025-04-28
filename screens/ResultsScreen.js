import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

export default function ResultsScreen({ route, navigation }) {

  const { providers = [] } = route.params || {};

  if (providers.length === 0) {
    return (
      <View style={styles.center}>
        <Text style={styles.noResults}>No results found</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={providers}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() => navigation.navigate('Details', { provider: item })}
          >
            <Text style={styles.name}>
            {item.basic?.first_name || ''} {item.basic?.last_name || item.basic?.organization_name || ''}
            </Text>
            <Text>Credential: {item.basic?.credential || 'N/A'}</Text>
            <Text>Specialty: {item.taxonomies?.[0]?.desc || 'N/A'}</Text>
            <Text>City: {item.addresses?.[0]?.city || 'N/A'}, {item.addresses?.[0]?.state || ''}</Text>
            <Text>NPI Number: {item.number || 'N/A'}</Text>
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