import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CabItem = ({ cab }) => {
  return (
    <View>
      <Text style={styles.companyName}>{cab.companyName}</Text>
      <Text style={styles.carModel}>{cab.carModel}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  companyName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  carModel: {
    fontSize: 14,
    color: '#555',
  },
});

export default CabItem;