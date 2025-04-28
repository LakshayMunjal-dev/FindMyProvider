import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { FontAwesome, MaterialIcons, Entypo, FontAwesome5 } from '@expo/vector-icons';

export default function ProviderDetails({ route }) {
  const { provider } = route.params || {};

  const formatPhoneNumber = (phone) => {
    if (!phone) return 'N/A';
    const cleaned = ('' + phone).replace(/\D/g, '');
    const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
    if (match) {
      return `(${match[1]}) ${match[2]}-${match[3]}`;
    }
    return phone;
  };

  const formatAddress = (address) => {
    if (!address) return 'N/A';
    return `${address.address_1 || ''}, ${address.city || ''}, ${address.state || ''} ${address.postal_code || ''}`.replace(/, ,/g, ',').trim();
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Provider Details</Text>

      {/* Top Card */}
      <View style={styles.card}>
        <View style={styles.cardText}>
          <Text style={styles.name}>
            {provider.basic?.first_name || ''} {provider.basic?.last_name || provider.basic?.organization_name || ''}
          </Text>
          <Text>Credential: {provider.basic?.credential || 'N/A'}</Text>
          <Text>Specialty: {provider.taxonomies?.[0]?.desc || 'N/A'}</Text>
          <Text>NPI Number: {provider.number || 'N/A'}</Text>
        </View>
      </View>

      {/* Details */}
      <View style={styles.section}>
        <View style={styles.row}>
          <FontAwesome name="building-o" size={20} style={styles.icon} />
          <View>
            <Text style={styles.label}>Entity Type</Text>
            <Text>{provider.enumeration_type === 'NPI-1' ? 'Individual' : 'Organization'}</Text>
          </View>
        </View>

        <View style={styles.row}>
          <Entypo name="address" size={20} style={styles.icon} />
          <View>
            <Text style={styles.label}>Address</Text>
            <Text>{formatAddress(provider.addresses?.[0])}</Text>
          </View>
        </View>

        <View style={styles.row}>
          <MaterialIcons name="contact-phone" size={20} style={styles.icon} />
          <View>
            <Text style={styles.label}>Contact</Text>
            <Text>Phone: {formatPhoneNumber(provider.addresses?.[0]?.telephone_number)}</Text>
          </View>
        </View>

        <View style={styles.row}>
          <FontAwesome5 name="hospital" size={20} style={styles.icon} />
          <View>
            <Text style={styles.label}>Hospital Affiliations</Text>
            <Text>Not Available</Text>
          </View>
        </View>

        <View style={styles.row}>
          <FontAwesome name="graduation-cap" size={20} style={styles.icon} />
          <View>
            <Text style={styles.label}>Status</Text>
            <Text>{provider.basic?.status === 'A' ? 'Active' : 'Inactive'}</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#f4f4f4',
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
    alignItems: 'center',
  },
  cardText: {
    flex: 1,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 6,
  },
  section: {
    marginTop: 10,
  },
  row: {
    flexDirection: 'row',
    marginBottom: 18,
  },
  icon: {
    width: 30,
    marginRight: 10,
    marginTop: 4,
    color: '#333',
  },
  label: {
    fontWeight: '600',
    fontSize: 15,
  },
});