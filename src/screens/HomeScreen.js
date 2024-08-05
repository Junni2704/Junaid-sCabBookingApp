// import React, { useEffect, useState } from 'react';
// import { View, FlatList, TouchableOpacity, Text, StyleSheet } from 'react-native';
// import { firestore } from '../services/firebaseConfig';
// import { collection, getDocs } from 'firebase/firestore';
// import CabItem from '../components/CabItem';


// const HomeScreen = ({ navigation }) => {
//   const [cabs, setCabs] = useState([]);
  


//   useEffect(() => {
//     const fetchCabs = async () => {
//       try {
//         const cabList = [];
//         const querySnapshot = await getDocs(collection(firestore, 'cabs'));
//         querySnapshot.forEach((doc) => {
//           cabList.push({ ...doc.data(), id: doc.id });
//         });
//         setCabs(cabList);
//       } catch (error) {
//         console.error("Error fetching cabs: ", error); // Log any errors
//       }
//     };

//     fetchCabs();
//   }, []);

//   return (
//     <View style={styles.container}>
//       <FlatList
//         data={cabs}
//         keyExtractor={(item) => item.id}
//         renderItem={({ item }) => (
//           <TouchableOpacity
//             style={styles.itemContainer}
//             onPress={() => navigation.navigate('Cab Detail', { cab: item })}
//           >
//             <CabItem cab={item} />
//           </TouchableOpacity>
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
// });

// export default HomeScreen;

import React, { useEffect, useState } from 'react';
import { View, FlatList, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { firestore } from '../services/firebaseConfig';
import { collection, getDocs } from 'firebase/firestore';
import CabItem from '../components/CabItem';

const HomeScreen = ({ navigation }) => {
  const [cabs, setCabs] = useState([]);

  useEffect(() => {
    const fetchCabs = async () => {
      try {
        const cabList = [];
        const querySnapshot = await getDocs(collection(firestore, 'cabs'));
        querySnapshot.forEach((doc) => {
          console.log(doc.id, " => ", doc.data()); // Log the document data
          cabList.push({ ...doc.data(), id: doc.id });
        });
        setCabs(cabList);
      } catch (error) {
        console.error("Error fetching cabs: ", error); // Log any errors
      }
    };

    fetchCabs();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={cabs}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.itemContainer}
            onPress={() => navigation.navigate('Cab Detail', { cab: item })}
          >
            <CabItem cab={item} />
          </TouchableOpacity>
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
    marginBottom: 16,
    padding: 16,
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 2,
  },
});

export default HomeScreen;