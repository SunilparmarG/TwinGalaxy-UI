import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'

// components
import Heading from '../../Components/heading/Heading';
import Text from '../../Components/text/Text';
import Button from '../../Components/Buttons/Button';
import Image from '../../Components/image/Image';
import BadgeStatus from '../../Components/Badges/BadgeStatus'
// css
import './RankList.scss'

// images
import Rank1 from './../../assets/images/svg/rank1.svg'
import LeaderBoardList from '../LeaderBoardList/LeaderBoardList';




const RankLists = (props) => {
    const rank1 = props.rank == 1;
    const rank2 = props.rank == 2;
    const rank3 = props.rank == 3;
    const name = `${rank1 ? "rank1" : ""} ${rank2 ? "rank2" : ""} ${rank3 ? "rank3" : ""} ${"rl mx-0"}`; 
  return (
   <>
    <Row className={name}>
    <Col lg={9}>
    <div className='d-flex flex-column flex-lg-row gap-3 align-items-center'>
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
        <div className='rl-desc w-100'>
            <Heading
                typeofHeading='h2'
                fontWeight='FW-600'
                text='Max Haraske'
                className='fs-18 mb-1 text-center text-lg-start'
            />
            <ul className='list-unstyled listSecond d-flex flex-wrap flex-lg-row align-items-center mb-0 justify-content-center justify-content-lg-start mt-3 mt-lg-1'>
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
            <div className='d-flex justify-content-center justify-content-lg-start mt-3 mt-lg-1'>
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
    </div>
    </Col>
    <Col lg={3} className='rl-status text-end'>
        <div className='d-flex flex-column gap-2 justify-content-between align-items-lg-end align-items-center mt-3 mt-lg-0'>
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

    <LeaderBoardList/>
   </>
  )
}

export default RankLists