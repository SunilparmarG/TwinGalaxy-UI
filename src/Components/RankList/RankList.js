import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'

// components
import Heading from '../../Components/heading/Heading';
import Text from '../../Components/text/Text';
import Button from '../../Components/Buttons/Button';
import Image from '../../Components/image/Image';
import BadgeStatus from '../../Components/Badges/BadgeStatus'
// css
import RankList from './RankList.scss'

// images
import Rank1 from './../../assets/images/svg/rank1.svg'

const RankLists = (props) => {
    const rank1 = props.rank == 1;
    const rank2 = props.rank == 2;
    const rank3 = props.rank == 3;
    const name = `${rank1 ? "rank1" : ""} ${rank2 ? "rank2" : ""} ${rank3 ? "rank3" : ""} ${"rl mx-0"}`; 
  return (
    <Row className={name}>
    <Col lg={9}>
    <div className='d-flex gap-3'>
            <div className='rl-profile'>
        <div className='avatar'>
            <Image 
                src="https://icaii22.rvscollege.ac.in/wp-content/uploads/2015/04/speaker-3-v2.jpg"
            />
            <div class="hex">
                <div class="hex-background">
                    <span className='rank'>
                        <Text
                            text={props.rank}
                            className='fs'
                        />
                    </span>
                </div>
            </div>
        </div>
       
        </div>
        <div className='rl-desc'>
            <Heading
                typeofHeading='h2'
                fontWeight='FW-600'
                text='Max Haraske'
                className='fs-18 mb-1'
            />
            <ul className='list-unstyled listSecond d-flex mb-0'>
                <li>
                    <span className='title'>Submitted Date:</span>
                    <span className='value'>2019-02-24</span>
                </li>
                <li>
                    <span className='title'>Percent: </span>
                    <span className='value'>100%</span>
                </li>
                <li>
                    <span className='title'>Verification Method: </span>
                    <span className='value'>TGSAP</span>
                </li>
                <li>
                    <span className='title'>Version: </span>
                    <span className='value'>1.00</span>
                </li>
            </ul>
            <Heading
                typeofHeading='h3'
                text='Points:'
                fontWeight='fw-600'
                className='d-inline-flex fs-16 mb-0 text-col1'
            />
            <Heading
                typeofHeading='h3'
                text='91,370'
                fontWeight='fw-600'
                className='d-inline-flex fs-16 mb-0 text-col13'
            />
        </div>
    </div>
    </Col>
    <Col lg={3} className='rl-status text-end'>
        <div className='d-flex flex-column gap-3 justify-content-between align-items-end'>
            <BadgeStatus
                text = 'Undisputed'
                variant = 'primary'
            />
            {props.rank == 1 ? <Image
            className='img-fluid'
                src={Rank1}/> : ''}
        </div>
    </Col>
</Row>
  )
}

export default RankLists