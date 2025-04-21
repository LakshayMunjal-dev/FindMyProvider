import React from 'react';
import { View, Text, ScrollView, StyleSheet, Image } from 'react-native';
import { FontAwesome, MaterialIcons, Entypo, FontAwesome5 } from '@expo/vector-icons';

export default function ProviderDetails({ route }) {
  const provider = route.params?.provider || {
    name: "Dr. Annette Williamson, MD",
    specialty: "Cardiology",
    gender: "Female",
    languages: "English, Spanish",
    practiceType: "Individual",
    address: "123 Main St, Newark, NJ 07102",
    phone: "(123) 456-7693",
    email: "anne@horizonmed.com",
    hospitalAffiliations: "Saint Michael’s Hospital, City MD",
    boardAffiliations: "American Board of Internal Medicine",
    networkParticipations: "Horizon Managed Care: Yes\nHorizon PPO: Yes"
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Provider Details</Text>

      {/* Top Card */}
      <View style={styles.card}>
        <View style={styles.cardText}>
          <Text style={styles.name}>{provider.name}</Text>
          <Text>Speciality: {provider.specialty}</Text>
          <Text>Gender: {provider.gender}</Text>
          <Text>Languages: {provider.languages}</Text>
        </View>
      </View>

      {/* Details */}
      <View style={styles.section}>
        <View style={styles.row}>
          <FontAwesome name="building-o" size={20} style={styles.icon} />
          <View>
            <Text style={styles.label}>Horizon Medical Group</Text>
            <Text>Practice Type: {provider.practiceType}</Text>
          </View>
        </View>

        <View style={styles.row}>
          <Entypo name="address" size={20} style={styles.icon} />
          <View>
            <Text style={styles.label}>Address</Text>
            <Text>{provider.address}</Text>
          </View>
        </View>

        <View style={styles.row}>
          <MaterialIcons name="contact-phone" size={20} style={styles.icon} />
          <View>
            <Text style={styles.label}>Contact</Text>
            <Text>Phone: {provider.phone}</Text>
            <Text>Email: {provider.email}</Text>
          </View>
        </View>

        <View style={styles.row}>
          <FontAwesome5 name="hospital" size={20} style={styles.icon} />
          <View>
            <Text style={styles.label}>Hospital Affiliations</Text>
            <Text>{provider.hospitalAffiliations}</Text>
          </View>
        </View>

        <View style={styles.row}>
          <FontAwesome name="graduation-cap" size={20} style={styles.icon} />
          <View>
            <Text style={styles.label}>Board Affiliations</Text>
            <Text>{provider.boardAffiliations}</Text>
          </View>
        </View>

        <View style={styles.row}>
          <FontAwesome name="folder" size={20} style={styles.icon} />
          <View>
            <Text style={styles.label}>Network Participations</Text>
            <Text>{provider.networkParticipations}</Text>
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