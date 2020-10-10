import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyAoVwDPtj-tJa1y27OThJEQPqcQeGAtAtQ',
  authDomain: 'budget-everyday.firebaseapp.com',
  databaseURL: 'https://budget-everyday.firebaseio.com',
  projectId: 'budget-everyday',
  storageBucket: 'budget-everyday.appspot.com',
  messagingSenderId: '238836494904',
  appId: '1:238836494904:web:f02e91684a9308d529accd'
}

export const db = firebase.initializeApp(firebaseConfig).firestore()
