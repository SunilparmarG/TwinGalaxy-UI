import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Buttons/Button';
import Text from '../text/Text';
import Image from '../image/Image';
import Modal from 'react-bootstrap/Modal';
import Settings from '../../assets/images/svg/claim-icon.svg';

import './Modal.scss';

function MyModal(props) {
  return (
    <div>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className='tgModal'
      >

        <Modal.Body className='text-center mxWdth2 mx-auto'>
          <Image src={Settings} className="img-fluid mb-3" />
          <Text text='Redirecting...' className="fs-30 fw600 text-col1 mb-3" />
          <Text text='You have already claimed a database name entry' className="fs-22 fw500 text-col5 mb-3" />
          <div className='bg-col35 mb-5 click-text d-inline-block'> 
            <Text text='You have already claimed a database name entry' className="fs-18 fw600 text-col13 pointer" />  
          </div>
          <Button text='Ok' variant='primary' className='minWdth' onClick={props.onHide} />
        </Modal.Body>

      </Modal>
    </div>

  );
}
// MyModal.propTypes = {
//     image: PropTypes.string,
//     heading: PropTypes.string,
//     subHeading: PropTypes.string,
//     className: PropTypes.string,
//   };
const ModalOne = ({ className, ...rest }) => {
  const [modalShow, setModalShow] = React.useState(false);
  return (

    <>
      <Button variant="primary" onClick={() => setModalShow(true)} text="Claime Modal" />
      <MyModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}



export default ModalOne;

{/* <Modal.Body className='text-center mxWdth2 mx-auto'>
<Image src={props.image} className="img-fluid mb-3"/>
<Text text={props.heading} className="fs-30 fw600 text-col1 mb-3"/>
<Text text={props.subHeading} className="fs-30 fw500 text-col5 mb-5"/>
<Button text='Ok' variant='primary' className='minWdth' onClick={props.onHide}/>
</Modal.Body> */}