import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'

// components
import Heading from '../../Components/heading/Heading';
import Text from '../../Components/text/Text';
import Button from '../../Components/Buttons/Button';
import Image from '../../Components/image/Image';
import BadgeStatus from '../../Components/Badges/BadgeStatus'
// css
import './LeaderBoardList.scss'

const LeaderBoardList = () => {
  return (
    <div className='d-flex gap-3'>
          <Image 
                src="https://icaii22.rvscollege.ac.in/wp-content/uploads/2015/04/speaker-3-v2.jpg"
                className='lb-pic'
            />

            <div>
                <Heading
                    typeofHeading='h3'
                    text='Angry Birds Sessions'
                    fontWeight='fw600'
                    className='fs-18 mb-0 text-col3'
                />
                <ul className='list-unstyled listThird d-flex flex-wrap flex-lg-row align-items-center mb-0 justify-content-center justify-content-lg-start mt-3'>
                    <li>
                        <Text
                            text='Platform:'
                            className='d-inline-block fs-16 fw600 me-1'
                        />
                        <Text
                            text='Android, Playstation 5'
                            className='d-inline-block text-col4 fs-16 fw600'
                        />
                    </li>
                    <li>
                        <Text
                            text='Records: '
                            className='d-inline-block fs-16 fw600 me-1'
                        />
                        <Text
                            text='27,606'
                            className='d-inline-block text-col4 fs-16 fw600'
                        />
                    </li>
                </ul>
                <Button
                    className='borderDanger mt-3'
                    text='Details'
                />
            </div>
    </div>
  )
}

export default LeaderBoardList