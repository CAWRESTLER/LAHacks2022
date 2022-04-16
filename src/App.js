import logo from './logo.svg';
import './App.css';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';



import Login from './components/Login';
import Landing from './components/Landing';
import Signup from './components/Signup';
import Questionnaire from './components/Questionnaire'
import Reset from './components/Reset'



function App() {
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/questionnaire" element={< Questionnaire/>} />
        <Route path="/reset" element={< Reset/>} />
      </Routes>
    </Router>
  );
}

export default App;
