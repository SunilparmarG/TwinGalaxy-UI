
// import Image from '../image/Image';
import Text from '../text/Text';
import Button from '../Buttons/Button';
import Image from '../image/Image';
import './TopBarOne.scss';
import Customize from '../../assets/images/svg/customize.svg';
import Verified from '../../assets/images/svg/verify.svg';
import Notification from '../../assets/images/svg/Bell.svg';
import EmailIcon from '../../assets/images/svg/EnvelopeSimple.svg';
import Badges from '../Badges/Badges';
import { Container, Row, Col } from 'react-bootstrap';
const TopBarOne = ({ profile, content, name, post, backgroundColor }) => {
  const classes =
    "toast2 " + (backgroundColor || "");
  return (
    <div className='toastBar'>
      {
        <div
          className={classes}
        >
          <Container>
            <Row>
              <Col xl={10}>
                <div className='d-flex secondTopbar flex-wrap w-100 align-items-center flex-wrap flex-lg-nopwrap justify-content-start position-relative pe-lg-4'>
                  <div className='d-flex align-items-center justify-content-center justify-content-lg-start mb-3 mb-xl-0 flex-1 mobileViewHeader'>
                    <div className='profileWrap1 me-lg-3'><Image src={profile} className="img-fluid" /></div>
                    <div className='mb-2 mb-lg-0'>
                      <Text className='text-col6 fw700 fs-16' text={name} />
                      <Text className='text-col6 fw400 fs-12' text={post} />
                    </div>
                    <Badges className="badges ms-lg-4 border" iconSrc={Verified} badgeText="Verified" />
                    <hr className='verticalSeperator' />
                  </div>
                  <div className='d-flex align-items-center justify-content-center justify-content-lg-start mb-3 mb-xl-0 flex-1'>
                    <Text text='Credibility: ' className='fs-16 fw400 text-col6' />
                    <Text text='1000' className='fs-16 fw700 text-col6 ms-2' />
                    <hr className='verticalSeperator' />
                  </div>
                  <div className='d-flex align-items-center justify-content-center justify-content-lg-start mb-3 mb-xl-0 flex-1'>
                    <Text text='Submission Points: ' className='fs-16 fw400 text-col6' />
                    <Text text='FREE' className='fs-16 fw700 text-col6 ms-2' />
                    <hr className='verticalSeperator' />
                  </div>
                  <div className="d-flex justify-content-center justify-content-lg-start mb-3 mb-xl-0 flex-1">  
                    <Button variant='borderWhite' text='Customize' iconSrc={Customize} />   
                  </div>
                </div>
              </Col>
              <Col xl={2} className="d-flex align-items-center justify-content-center justify-content-lg-start align-items-center">
                <div className='iconRight'>
                  <Image src={Notification} name="Notification Icon" className="img-fluid" />
                  <Image src={EmailIcon} name="Email Icon" className="img-fluid ms-4" />
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      }
    </div >
  )
}
export default TopBarOne; 