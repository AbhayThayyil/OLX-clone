import firebase  from 'firebase'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use

const firebaseConfig = {
  apiKey: "AIzaSyCrtvemlOmPcn9fTHFSOiQro0Idz5OHJPc",
  authDomain: "olx-project-e37e3.firebaseapp.com",
  projectId: "olx-project-e37e3",
  storageBucket: "olx-project-e37e3.appspot.com",
  messagingSenderId: "826966329417",
  appId: "1:826966329417:web:f7f2671f18a37e51741798",
  measurementId: "G-V0L5VK7Q76"
};

// Initialize Firebase
export default firebase.initializeApp(firebaseConfig);
