// import logo from './logo.svg';
// import './App.css';
import NavScrollExample from './Layout/Header/Header';
import Login from './Pages/Login/Login';
import "../src/assets/scss/style.scss";
import Home from './Pages/Home/Home';

function App() {
  return (
    <div className="App">
      {/* <Home/> */}
      <Login />

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
        title="Button"
        variant="primary"
        className="primary"
      />


      <Buttons
        title="Button"
        variant="borderBtn"
        className="borderBtn"
      /> */}

    </div>

  );
}

export default App;
