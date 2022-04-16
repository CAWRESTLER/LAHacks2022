import logo from './logo.svg';
import './App.css';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

import Main from './components/Main';
import Login from './components/Login';
import Headerj from './components/Header ';

firebase.initializeApp({
  apiKey: "AIzaSyC5k38-_RGYp5Yo2kDebBxidGOTp2MooAQ",
  authDomain: "lahacks-9327b.firebaseapp.com",
  projectId: "lahacks-9327b",
  storageBucket: "lahacks-9327b.appspot.com",
  messagingSenderId: "236428776177",
  appId: "1:236428776177:web:eb3b23886b37a38ab0cf50",
  measurementId: "G-B3KLL04XKX"
})

function App() {
  const auth = firebase.auth();
  const firestore = firebase.firestore();
  const [user] = useAuthState(auth);
  console.log(user);
  return (
    <div className="App">
      <Headerj />
      {user ? <Main /> : <Login />}
    </div>
  );
}

export default App;
