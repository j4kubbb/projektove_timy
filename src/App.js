import './App.css';
import Home from './pages/index';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SigninPage from './pages/signin';
import SignupPage from './pages/signup';
import SuccessfulPage from './pages/successful';
import UnsuccessfulPage from './pages/unsuccessful';


function App() {
  return (
    <Router>
      <Routes>
        <Route path = "/" element = {<Home/>} exact />
        <Route path = "/signin" element = {<SigninPage/>} exact />
        <Route path = "/signup" element = {<SignupPage/>} exact />
        <Route path = "/successful" element = {<SuccessfulPage/>} exact />
        <Route path = "/unsuccessful" element = {<UnsuccessfulPage/>} exact />
      </Routes>
    </Router>
  );
}

export default App;
