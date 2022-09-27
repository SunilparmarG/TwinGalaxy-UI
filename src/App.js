import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Performance from './Pages/Performance/Performance';
import Header from './Layout/Header/Header';
import Footer from './Layout/Footer/Footer';


import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import ThewallHome from './Pages/Home/ThewallHome'; 
import VotingpollHome from './Pages/Home/VotingpollHome'



import "../src/assets/scss/style.scss";





function App() {
  return (
    <div className="App">  
      <Header />
    <Routes>
      <Route path='/' element={<VotingpollHome />} />
      <Route path='performance' element={<Performance />}/>
      <Route path='thewallhome' element={<ThewallHome />}/>
      <Route path='login' element={<Login />}/>
      <Route path='register' element={<Register />}/>
    </Routes>
    <Footer/>
    

    </div>

  );
}

export default App;
