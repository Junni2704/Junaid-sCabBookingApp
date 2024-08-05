import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const BookingItem = ({ booking, onCancel }) => {
  return (
    <View style={styles.itemContainer}>
      <Text style={styles.companyName}>{booking.cabDetails.companyName}</Text>
      <Text style={styles.carModel}>{booking.cabDetails.carModel}</Text>
      <Button title="CANCEL BOOKING" onPress={onCancel} color="#1E90FF" />
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    margin: 16,
    padding: 16,
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 2,
  },
  companyName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  carModel: {
    fontSize: 16,
    marginBottom: 8,
  },
});

export default BookingItem;