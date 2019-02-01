import firebase from 'firebase'

var config = {
  apiKey: 'AIzaSyCYPb7BSfimpUYHjIM7etCm-n382eosVj8',
  authDomain: 'cropchat-43ae1.firebaseapp.com',
  databaseURL: 'https://cropchat-43ae1.firebaseio.com',
  projectId: 'cropchat-43ae1',
  storageBucket: 'cropchat-43ae1.appspot.com',
  messagingSenderId: '73458338531'
}
firebase.initializeApp(config)

const database = firebase.database()
const storage = firebase.storage()

export {
  database,
  storage
}
