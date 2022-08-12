// import logo from './logo.svg';
// import './App.css';
import NavScrollExample from './Layout/Header/Header';
//import Login from './Pages/Login/Login';
import "../src/assets/scss/style.scss";
import Text from './Components/text/Text';
import Heading from './Components/heading/Heading';
// import ButtonComponent from './Components/buttons/Button';
import Buttons from './Components/buttons/Button';
import Image from './Components/image/Image';
import ImageTop from './assets/images/photo.jpg';
import Cardbox from './Components/card/Card';
import Switch from './Components/switch/Switch';
import Checkbox from './Components/checkbox/Checkbox';

import Slider from './Components/slider/slider'
import Login from './Pages/Login/Login';

function App() {
  return (
    <div className="App p-3 container">
      <NavScrollExample />

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
      />

    </div>

  );
}

export default App;
