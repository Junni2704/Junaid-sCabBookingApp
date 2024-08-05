// import React, { useState, useEffect } from 'react';
// import { View, FlatList, Text, Button, StyleSheet } from 'react-native';
// import { firestore } from '../services/firebaseConfig';
// import { collection, getDocs, query, where, deleteDoc, doc } from 'firebase/firestore';

// const MyCabScreen = ({ navigation }) => {
//   const [bookedCabs, setBookedCabs] = useState([]);

//   useEffect(() => {
//     fetchBookedCabs();
//   }, []);

//   const fetchBookedCabs = async () => {
//     const q = query(collection(firestore, 'bookings'), where('userId', '==', 'user-id')); // replace 'user-id' with actual user ID
//     const querySnapshot = await getDocs(q);
//     const bookings = [];
//     querySnapshot.forEach((doc) => {
//       bookings.push({ ...doc.data(), id: doc.id });
//     });
//     setBookedCabs(bookings);
//   };

//   const handleCancelBooking = async (bookingId) => {
//     await deleteDoc(doc(firestore, 'bookings', bookingId));
//     fetchBookedCabs();
//   };

//   return (
//     <View style={styles.container}>
//       <FlatList
//         data={bookedCabs}
//         keyExtractor={(item) => item.id}
//         renderItem={({ item }) => (
//           <View style={styles.itemContainer}>
//             <Text style={styles.companyName}>{item.cabDetails.companyName}</Text>
//             <Text style={styles.carModel}>{item.cabDetails.carModel}</Text>
//             <Button title="CANCEL BOOKING" onPress={() => handleCancelBooking(item.id)} color="#1E90FF" />
//           </View>
//         )}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 16,
//     backgroundColor: '#fff',
//   },
//   itemContainer: {
//     marginBottom: 16,
//     padding: 16,
//     backgroundColor: '#f9f9f9',
//     borderRadius: 8,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 8,
//     elevation: 2,
//   },
//   companyName: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginBottom: 4,
//   },
//   carModel: {
//     fontSize: 16,
//     marginBottom: 8,
//   },
// });

// export default MyCabScreen;

import React, { useState, useCallback } from 'react';
import { View, FlatList, Text, Button, StyleSheet } from 'react-native';
import { firestore } from '../services/firebaseConfig';
import { collection, getDocs, query, where, deleteDoc, doc } from 'firebase/firestore';
import { useFocusEffect } from '@react-navigation/native';

const MyCabScreen = ({ navigation }) => {
  const [bookedCabs, setBookedCabs] = useState([]);

  const fetchBookedCabs = async () => {
    const q = query(collection(firestore, 'bookings'), where('userId', '==', 'user-id')); // replace 'user-id' with actual user ID
    const querySnapshot = await getDocs(q);
    const bookings = [];
    querySnapshot.forEach((doc) => {
      bookings.push({ ...doc.data(), id: doc.id });
    });
    setBookedCabs(bookings);
  };

  useFocusEffect(
    useCallback(() => {
      fetchBookedCabs();
    }, [])
  );

  const handleCancelBooking = async (bookingId) => {
    await deleteDoc(doc(firestore, 'bookings', bookingId));
    fetchBookedCabs();
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={bookedCabs}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Text style={styles.companyName}>{item.cabDetails.companyName}</Text>
            <Text style={styles.carModel}>{item.cabDetails.carModel}</Text>
            <Button title="CANCEL BOOKING" onPress={() => handleCancelBooking(item.id)} color="#1E90FF" />
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
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

export default MyCabScreen;