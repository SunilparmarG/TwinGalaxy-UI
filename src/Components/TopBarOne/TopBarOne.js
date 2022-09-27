
// import Image from '../image/Image';
import Text from '../text/Text';
import Button from '../buttons/Button';
import Image from '../image/Image';
import './TopBarOne.scss';
import Customize from '../../assets/images/svg/customize.svg';
import Verified from '../../assets/images/svg/verify.svg';
import Badges from '../Badges/Badges';

const TopBarOne = ({ profile, content, name, post,backgroundColor }) => {
  const classes =
  "toast2 position-absolute " + (backgroundColor || "")  ;
  
    return (
      <div className='toast1 '>
        {
          
            <div
              className={classes}
            >
              <div className='container'>
              <div className='d-flex align-items-center flex-wrap flex-md-nopwrap justify-content-start position-relative pe-4'>
                
                <div className='profileWrap1 me-3'><Image src={profile} className="img-fluid" /></div>
                <div >
                <Text className='text-col6 fw700 fs-16'  text={name}/>
                <Text className='text-col6 fw400 fs-12'  text={post}/>
                </div>
              <Badges className="badges ms-3 border" iconSrc={Verified} badgeText="Verified" />
                <hr className='verticalSeperator'/>
                <div className='d-flex '>
                  <Text text='Credibility: ' className='fs-16 fw400 text-col6'/>
                  <Text text='1000' className='fs-16 fw700 text-col6 ms-2'/>
                </div>
                <hr className='verticalSeperator'/>
                <Button variant='borderWhite' className="ms-3 "  text='Customize' iconSrc={Customize}/>
                
              </div>
              </div>
            </div>
          
        }
      </div>
    )
  
    }
  export default TopBarOne