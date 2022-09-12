
// import Image from '../image/Image';
import Text from '../text/Text';
import Button from '../buttons/Button';
import Image from '../image/Image';
import './TopBarOne.scss';
import Customize from '../../assets/images/svg/customize.svg';

const TopBarOne = ({ profile, content, name, post,backgroundColor }) => {
  const classes =
  "toast2 position-absolute " + (backgroundColor || "")  ;
  
    return (
      <div className='toast1 basic-toast'>
        {
          
            <div
              className={classes}
            >
              
              <div className='d-flex align-items-center flex-wrap flex-md-nopwrap justify-content-start justify-content-md-center position-relative pe-4'>
                
                <div className='profileWrap me-3'><Image src={profile} className="img-fluid me-3" /></div>
                <div >
                <Text className='text-col6 fw700 fs-16'  text={name}/>
                <Text className='text-col6 fw400 fs-12'  text={post}/>
                </div>
                
                <Button variant='borderWhite' className="ms-3 "  title='Customize' iconSrc={Customize}/>
                
              </div>
            </div>
          
        }
      </div>
    )
  
    }
  export default TopBarOne