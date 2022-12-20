import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Buttons/Button';
import Text from '../text/Text';
import Image from '../image/Image';
import Modal from 'react-bootstrap/Modal';
import Settings from '../../assets/images/svg/settings.svg';
import CrossIcon from '../../assets/images/svg/cross-icon.svg';
import Buttons from '../Buttons/Button';

import './Modal.scss';

function MyModal(props) {
    return (
        <div>
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                className='tgModal claim-modal'
            >
                <Modal.Header>
                    <Image src={CrossIcon} name="CrossIcon" className="img-fluid mb-3 pointer" onClick={props.onHide} />
                </Modal.Header>
                <Modal.Body className='text-center mxWdth2 mx-auto'>
                    <Image src={Settings} name="Settings" className="img-fluid mb-3" />
                    <Text text='Confirmation' className="fs-30 fw600 text-col1 mb-3" />
                    <div className='bg-col35 mb-3 click-text d-inline-block'>
                        <Text text='You have already claimed a database name entry' className="fs-18 fw600 text-col13 pointer" />
                    </div>
                    <Text text='Press the reset button to Modify your Phone Number or Full Name.
To verify yourself press start , enter pin and then press next
 ' className="fs-22 fw500 text-col5 mb-5" />
                    <div className='d-flex justify-content-center'> 
                        <Button text='Start' variant='primary' className='minWdth me-3' onClick={props.onHide} />
                        <Button text='Reset' variant='secondary' className='minWdth ms-4' onClick={props.onHide} />
                    </div>
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
const ConfirmModal = ({ className, ...rest }) => {
    const [modalShow, setModalShow] = React.useState(false);
    return (

        <>
            {/* <Button variant="primary" onClick={() => setModalShow(true)} text="Claime Modal" /> */}
            <Buttons
                onClick={() => setModalShow(true)} text="Next"
                variant="primary"
                className="primary pad1 fs-14 mb-3 mb-sm-0 fw600" 
            />
            <MyModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </>
    );
}



export default ConfirmModal;

{/* <Modal.Body className='text-center mxWdth2 mx-auto'>
<Image src={props.image} className="img-fluid mb-3"/>
<Text text={props.heading} className="fs-30 fw600 text-col1 mb-3"/>
<Text text={props.subHeading} className="fs-30 fw500 text-col5 mb-5"/>
<Button text='Ok' variant='primary' className='minWdth' onClick={props.onHide}/>
</Modal.Body> */}