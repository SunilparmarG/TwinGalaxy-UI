// import logo from './logo.svg';
// import './App.css';
import NavScrollExample from './Layout/Header/Header';
import Login from './Pages/Login/Login';
import "../src/assets/scss/style.scss";
import Text from './Components/text/Text';
import Heading from './Components/heading/Heading';
import Slider from './Components/slider/slider'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <NavScrollExample />
      <Text 
        text="Text Component"
        fontWeight="fw500"
        color="text-col4"
        className="fs-14"
      />
      <Heading 
        color='text-col1'
        fontWeight='fw500'
        // className='fw-700 text-col2 mb-0 lh-1'
        typeofHeading='h1'
        text='this is hedings'
        size='fs-15'
      />
      <Slider />
    </div>
  );
}

export default App;
