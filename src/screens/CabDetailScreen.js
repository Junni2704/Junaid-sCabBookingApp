import React, { useEffect } from 'react';
import { View, Text, Button, Alert, Image, StyleSheet } from 'react-native';
import { firestore } from '../services/firebaseConfig';
import { collection, getDocs, addDoc, query, where } from 'firebase/firestore';

const CabDetailScreen = ({ route, navigation }) => {
  const { cab } = route.params;

  useEffect(() => {
    navigation.setOptions({
      title: cab.companyName,
    });
  }, [navigation, cab.companyName]);

  const fetchBookedCabsCount = async () => {
    const q = query(collection(firestore, 'bookings'), where('userId', '==', 'user-id')); // replace 'user-id' with actual user ID
    const querySnapshot = await getDocs(q);
    return querySnapshot.size; // Return the count of booked cabs
  };

  const handleBooking = async () => {
    const currentBookedCabsCount = await fetchBookedCabsCount(); // Fetch the count again before booking
    if (currentBookedCabsCount >= 2) {
      Alert.alert('Error', 'You cannot book more than 2 cabs at a time.');
    } else {
      try {
        await addDoc(collection(firestore, 'bookings'), {
          userId: 'user-id', // replace with actual user ID
          cabId: cab.id,
          cabDetails: cab,
        });
        Alert.alert('Success', 'Cab booked successfully!');
        navigation.navigate('My Cab'); // Navigate to My Cab screen after booking
      } catch (error) {
        Alert.alert('Error', 'There was an error booking the cab.');
      }
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{cab.companyName}</Text>
      <Text style={styles.subtitle}>{cab.carModel}</Text>
      <Text style={styles.text}>{cab.passengers} passengers allowed</Text>
      <Text style={styles.text}>Rating: {cab.rating}</Text>
      <Text style={styles.text}>Cost: ${cab.costPerHour} per hour</Text>
      <Button title="BOOK CAB" onPress={handleBooking} color="#1E90FF" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 20,
  },
  text: {
    fontSize: 16,
    marginBottom: 10,
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    marginBottom: 20,
  },
});

export default CabDetailScreen;