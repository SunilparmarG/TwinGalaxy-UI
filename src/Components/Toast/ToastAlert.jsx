
// import Image from '../image/Image';
import Text from '../text/Text';
import Button from '../buttons/Button';
import {useNavigate} from 'react-router-dom'
import './Toast.scss';

<<<<<<< HEAD
const Toast = ({ content, backgroundColor }) => {
  const classes =
    "toast2 " + (backgroundColor || "");

  return (
    <div className='toast1 basic-toast'>
      {

        <div
          className={classes}
        >

          <div className='d-flex align-items-center flex-wrap flex-md-nopwrap justify-content-start justify-content-md-center position-relative pe-4'>
            {/* <Image src={iconSrc} className="img-fluid me-3" /> */}
            <Text className='text-col6 fw500 fs-20' text={content} />
            <Button variant='info' className="ms-3 text-uppercase" text='Register / Login' />

          </div>
        </div>

      }
    </div>
  )

}
export default Toast
=======
const Toast = ({  content,backgroundColor }) => {
  const classes = "toast2 " + (backgroundColor || "")  ;
  const navigate = useNavigate();
  
    return (
      <div className='toast1 basic-toast'>
        {
          
            <div
              className={classes}
            >
              
              <div className='d-flex align-items-center flex-wrap flex-md-nopwrap justify-content-start justify-content-md-center position-relative pe-4'>
                {/* <Image src={iconSrc} className="img-fluid me-3" /> */}
                <Text className='text-col6 fw500 fs-20'  text={content}/>
                <Button 
                variant='info' 
                className="ms-3 text-uppercase"  
                text='Register / Login'
                onClick={() =>                  
                  navigate('/login', {replace: true})
                }
                />
                
              </div>
            </div>
          
        }
      </div>
    )
  
    }
  export default Toast
>>>>>>> a23ca52287b33da588a80165c442492d443bb505
