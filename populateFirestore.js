const { initializeApp } = require('firebase/app');
const { getFirestore, collection, addDoc } = require('firebase/firestore');

const firebaseConfig = {
  apiKey: "AIzaSyDFbv2SqHCR92dgTRveKEoFv0hUkBfvESE",
  authDomain: "cabbooking-75cf4.firebaseapp.com",
  projectId: "cabbooking-75cf4",
  storageBucket: "cabbooking-75cf4.appspot.com",
  messagingSenderId: "1020940441621",
  appId: "1:1020940441621:web:ce255ae83fa335af09d61c"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

const populateData = async () => {
  const cabs = [
    { companyName: 'CabCo', carModel: 'Corolla', passengers: 4, rating: 4, costPerHour: 15 },
    { companyName: 'RideShare', carModel: 'Civic', passengers: 4, rating: 4.5, costPerHour: 18 },
    { companyName: 'QuickCab', carModel: 'Camry', passengers: 4, rating: 4.2, costPerHour: 16 },
    { companyName: 'FastTrack', carModel: 'Accord', passengers: 4, rating: 4.3, costPerHour: 17 },
    { companyName: 'EcoRide', carModel: 'Fusion', passengers: 4, rating: 4.1, costPerHour: 14 },
    { companyName: 'BudgetCab', carModel: 'Altima', passengers: 4, rating: 3.9, costPerHour: 13 },
    { companyName: 'EliteRides', carModel: 'Sonata', passengers: 4, rating: 4.6, costPerHour: 19 },
    { companyName: 'PremiumCabs', carModel: 'Jetta', passengers: 4, rating: 4.4, costPerHour: 20 },
    { companyName: 'MetroCabs', carModel: 'Impreza', passengers: 4, rating: 4.1, costPerHour: 16 },
    { companyName: 'CityRides', carModel: 'Mazda3', passengers: 4, rating: 4.3, costPerHour: 15 },
  ];

  for (const cab of cabs) {
    await addDoc(collection(firestore, 'cabs'), cab);
  }

  console.log('Data has been added to Firestore');
};

populateData();