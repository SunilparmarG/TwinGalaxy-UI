import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Performance from './Pages/Performance/Performance';
import Header from './Layout/Header/Header';
import Footer from './Layout/Footer/Footer';
import ContactUs from './Pages/ContactUs';
import MyProfile from './Pages/MyProfile/MyProfile'; 
import MySettings from './Pages/MySettings/MySettings'; 
import MyMessges from './Pages/MyMessages/MyMessge';

import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import ThewallHome from './Pages/Home/ThewallHome';
import VotingpollHome from './Pages/Home/VotingpollHome';
import VottingPerformance from './Pages/VottingPerformance/VottingPerformance'; 
import ViewleaderBoard from './Pages/LeaderBoard/ViewLeaderboard'; 

import RankLists from './Components/RankList/RankList';

import "../src/assets/scss/style.scss";  

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<VotingpollHome />} />
        <Route path='performance' element={<Performance />} />
        <Route path='thewallhome' element={<ThewallHome />} />
        <Route path='login' element={<Login />} />
        <Route path='register' element={<Register />} />
        <Route path="vottingperformance" element={<VottingPerformance />} />  
        <Route path="contactus" element={<ContactUs />} />
        <Route path="myprofile" element={<MyProfile />} />
        <Route path="mysettings" element={<MySettings />} />
        <Route path="inbox" element={<MyMessges />} />
        <Route path="ranklist" element={<RankLists rank="5" />} />
        <Route path="viewleaderboard" element={<ViewleaderBoard />} />
      </Routes>
      <Footer />  
    </div>

  );
}

export default App;
