import logo from './logo.svg';
import './App.css';
<<<<<<< Updated upstream
=======
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

import Main from './components/Main';
import Login from './components/Login';
import PrimarySearchAppBar from './components/Header';

firebase.initializeApp({
  apiKey: "AIzaSyC5k38-_RGYp5Yo2kDebBxidGOTp2MooAQ",
  authDomain: "lahacks-9327b.firebaseapp.com",
  projectId: "lahacks-9327b",
  storageBucket: "lahacks-9327b.appspot.com",
  messagingSenderId: "236428776177",
  appId: "1:236428776177:web:eb3b23886b37a38ab0cf50",
  measurementId: "G-B3KLL04XKX"
})
>>>>>>> Stashed changes

function App() {
  return (
<<<<<<< Updated upstream
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit testing <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
=======
   
    
    <div className="App">  
        <PrimarySearchAppBar />

      {!user ? <Main /> : <Login />}
>>>>>>> Stashed changes
    </div>
  );
}

export default App;
