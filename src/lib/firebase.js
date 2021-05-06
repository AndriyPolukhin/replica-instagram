import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// * here is where I want to call the seed file (only ONCE!)

// import { seedDatabase } from '../seed';
// seedDatabase(firebase);

const firebaseConfig = {
	apiKey: 'AIzaSyDxHPPuRtH0b2GnEgt-cASDyZkGu5PneWY',
	authDomain: 'instagram-replica-eb42f.firebaseapp.com',
	projectId: 'instagram-replica-eb42f',
	storageBucket: 'instagram-replica-eb42f.appspot.com',
	messagingSenderId: '818941224449',
	appId: '1:818941224449:web:5408069ed7feeb3bf5c200'
};

const firebase = Firebase.initializeApp(firebaseConfig);
const { FieldValue } = Firebase.firestore;

export { firebase, FieldValue };
