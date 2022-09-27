// import logo from './logo.svg';
// import './App.css';

import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Performance from './Pages/Performance/Performance';
import Header from './Layout/Header/Header';
import Footer from './Layout/Footer/Footer';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';

import "../src/assets/scss/style.scss";





function App() {
  return (
    <div className="App">
      <Header />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='performance' element={<Performance />}/>
      <Route path='login' element={<Login />}/>
      <Route path='register' element={<Register />}/>
    </Routes>
         <Footer/>






      {/* <Home/> */}
      {/* <Home /> */}
      
      {/* <Performance/> */}
      {/* <Register/> */}
      {/* <NavScrollExample />

      <Login />
      <Text
        text="Text Component"
        fontWeight="fw500"
        color="text-col4"
        className="fs-14 py-3"
      />
      <div className='cardImage'>
        <Image
          src={ImageTop}
          className="img-fluid"
          name="images"
        />
      </div>
      <div className='row'>
        <div className='col-md-4'>
          <Cardbox></Cardbox>
        </div>
      </div>
      <Switch></Switch>
      <Checkbox></Checkbox>
      <Heading
        color='text-col1'
        fontWeight='fw500'
        className='fs-15 pb-3'
        typeofHeading='h1'
        text='this is hedings'
      />
      <Buttons
        text="Button"
        variant="primary"
        className="primary"
      />


      <Buttons
        text="Button"
        variant="borderBtn"
        className="borderBtn"
      /> */}

    </div>

  );
}

export default App;
