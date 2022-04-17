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
import Calendar from './components/Calendar'
import Group from './components/Group'
import Match from './components/Match'
import Message from './components/Message'
import Profile from './components/Profile'
import ProfileEdit from './components/ProfileEdit'
import Settings from './components/Settings'

function App() {
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/questionnaire" element={< Questionnaire/>} />
        <Route path="/reset" element={< Reset/>} />
        <Route path="/Calendar" element={< Calendar/>} />
        <Route path="/Group" element={< Group/>} />
        <Route path="/Match" element={< Match/>} />
        <Route path="/Message" element={< Message/>} />
        <Route path="/Profile" element={< Profile/>} />
        <Route path="/ProfileEdit" element={< ProfileEdit/>} />
        <Route path="/Settings" element={< Settings/>} />


      </Routes>
    </Router>
  );
}

export default App;
