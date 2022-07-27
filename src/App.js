// import logo from './logo.svg';
// import './App.css';
import NavScrollExample from './Layout/Header/Header';
import Login from './Pages/Login/Login';
import "../src/assets/scss/style.scss";
import Text from './Components/text/Text';
import Heading from './Components/heading/Heading';
// import ButtonComponent from './Components/buttons/Button';
import Buttons from './Components/buttons/Button';
import Image from './Components/image/Image';
import ImageTop from './assets/images/photo.jpg';

function App() {
  return (
    <div className="App p-3">
      <NavScrollExample />
      <Text 
        text="Text Component"
        fontWeight="fw500"
        color="text-col4"
        className="fs-14 py-3"
      />
      <Image 
        src={ImageTop}
        className="img-fluid pb-3"
        name="images"
      />
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
    
    </div>
  );
}

export default App;
