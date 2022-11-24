import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Header from '../../Layout/Header/Header';
import Footer from '../../Layout/Footer/Footer';
import Carousel from '../../Components/Carousel/Carousel';
import CardOne from '../../Components/card/CardOne';
import CardThree from '../../Components/card/CardThree';
import Toast from '../../Components/Toast/ToastAlert';
import ListOne from '../../Components/ListOne/ListOne';
import Image from '../../Components/image/Image';
import Text from '../../Components/text/Text';
import Slider from '../../Components/slider/slider';
import Switch from '../../Components/switch/Switch';
import Buttons from '../../Components/Buttons/Button'; 

// Badge component
import Badges from '../../Components/Badges/Badges';
import './Home.scss';
import InfoBlock from '../../Components/InfoBlock/InfoBlock';

// images and icons 
import Image1 from '../../assets/images/photo.jpg';
import ProfileImage from '../../assets/images/avatar_sml.png';
import Profile1 from '../../assets/images/profile1.jpg';
import Send from '../../assets/images/send.png';
import Clock from '../../assets/images/svg/clock.svg';
import Comment from '../../assets/images/svg/chat.svg';
import Like from '../../assets/images/svg/like.svg';
import Like1 from '../../assets/images/svg/like1.svg';
import Dislike from '../../assets/images/svg/dislike.svg';
import Spam from '../../assets/images/svg/spam-2.svg';
import Envelop from '../../assets/images/svg/envelope.svg';
import Back from '../../assets/images/svg/arrowUpLeft.svg';
import Doubleuotes1 from '../../assets/images/svg/double-quotes-1.svg';
import Doubleuotes2 from '../../assets/images/svg/double-quotes-2.svg';
import VideoImg from '../../assets/images/video.png';
import Verify1 from '../../assets/images/svg/verify1.svg';
import FbPost from '../../assets/images/fbPosts.png';

const Home = () => {
  return (
    <div>
      
      <Toast content="Join community, share achievements, meet new friends and more" backgroundColor="default" />
      <div className='position-relative'>
        <div className="switchWrap">
          <Switch id="btn1" />
        </div>
        <Carousel />
        

      </div>
      <Container  >
        <div>
          <div className='submitWrap d-flex align-items-center  flex-wrap flex-md-nopwrap justify-content-start justify-content-md-between my-4'>
            <Text text='Submit your own Performance for the community to evaluate' className="fs-25 fw600 text-col6" />
            <Buttons
              text="Submit a Performance"
              variant="primary"
              className="primary pad1 fs-14 fw600 ms-0 ms-lg-3"
            />
          </div>
        </div>
        <Text text='Performances' className="fs-30 fw600 mb-3" />
        <div className='position-relative'>
          <Slider />
        </div>

        <Row className='mt-4 mb-3'>
          <Col lg={8}>

            {/* <Tab/> */}
            <div className='contentWrap'>
              <Text text='Recent Activity' className="fs-25 fw600 text-col1 mb-4" />

              <div className='mb-3'>
                <CardOne heading="Crazymoose3k's"
                 headingTwo="has been submitted a performance"
                 bottomText=" Game: Hill Climb.." 
                 imgFirst={Image1}
                  imgSecond={ProfileImage} 
                  />
              </div>   
              <div className='mb-3'>
                <CardThree 
                heading="RaGeNyc" 
                headingTwo="has just posted"
                imgSecond={ProfileImage} 
                subHeadingFirst="Teens are rewriting what is possible in the world of competitive Tetris" />
              </div>
              <div className='mb-3'>
                <CardOne heading="Crazymoose3k’s"
                headingTwo="has been submitted a performance"
                 bottomText="Game: Hill Climb.." imgFirst={Image1} imgSecond={ProfileImage} />
              </div>
              <div className='mb-3'>
                <CardThree heading="RaGeNyc"
                 headingTwo="has just posted"
                 imgSecond={ProfileImage} subHeadingFirst="Teens are rewriting what is possible in the world of competitive Tetris" />
              </div>
              <div className='mb-3'>
                <CardOne heading="Crazymoose3k’s"
                headingTwo="has been submitted a performance"
                bottomText="Game: Hill Climb.." imgFirst={Image1} imgSecond={ProfileImage} />
              </div>
              <div className='mb-3'>
                <CardThree 
                 heading="RaGeNyc"
                 headingTwo="has just posted"
                 imgSecond={ProfileImage} subHeadingFirst="Teens are rewriting what is possible in the world of competitive Tetris" />
              </div>
              <div className='d-flex justify-content-center'>
                <Buttons text="View all" className="fs-20 fw600 pdCustom" variant="borderDanger" />
              </div>
            </div>
          </Col>
          <Col lg={4}>
              <div className='contentWrap moboBottomSpace'>
                <div className='d-flex justify-content-center overflow-hiddenH'>
                  <Image src={FbPost} className="img-fluid" />
                </div>
              
              </div>
            </Col>
        </Row>

      </Container>
      
    </div>
  )
}

export default Home;