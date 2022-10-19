import React from 'react'
import {Container, Row, Col} from 'react-bootstrap';

// page css
import './Card.scss'

// components
import Image from '../../Components/image/Image';
import Text from '../../Components/text/Text';
import Buttons from '../../Components/buttons/Button';
import Heading from '../../Components/heading/Heading';

// images
import FbLogo from './../../assets/images/facebook/facebook-icon.svg';
import FbLogoSmall from './../../assets/images/facebook/facebook-icon-small.svg';
import BlueTick from './../../assets/images/facebook/blue-tick.svg';
import Comment from './../../assets/images/facebook/comment.svg';
import Like from './../../assets/images/facebook/like.svg';
import Share from './../../assets/images/facebook/share.svg';
import Post from './../../assets/images/facebook/post.png';

const PostCard = () => {
  return (
    <div className='postCard mb-3'>
        <div className='fb-header'>
            <div className='fb-top d-flex w-100 mb-2'>
                <div className='logo'>
                    <Image src={FbLogo}/>
                </div>
                <div className='title ms-2'>
                    <div className='d-flex align-items-center'>
                        <Heading
                            typeofHeading='h2'
                            text='Facebook'
                            className='mb-0 fw600 fs-15'
                        />
                        <Image className='ms-1' src={BlueTick}/>
                    </div>
                    <Text
                        text='About a month ago'
                        className='fs-13 text-col5'
                    />
                </div>
                <Image className='ms-1' src={FbLogoSmall}/>
            </div>
            <div className='fb-content fs-15'>
                <Text 
                    text='Safar ki shuruat bhale hi akele ho, khatam toh bohot saari yaadon ke saath hogi. The Himalayan Club ke saath aap ke pehle safar ke liye milegi bohot si prerna kyun ki Shauk jo bhi ho,'
                    className='text-black inline'
                />
                <Text
                    text='#FBPeMilega'
                    className='inline text-col29'
                />
                <hr/>
                <div className='fb-action d-flex align-items-center'>
                    <div className='d-flex align-items-center me-3'>
                        <Image
                            src={Like}
                        />
                        <Text
                            text='36K'
                            className='ms-1 fw500 fs-15 cursor-pointer'
                        />
                    </div>
                    <div className='d-flex align-items-center me-3'>
                        <Image
                            src={Comment}
                        />
                        <Text
                            text='419'
                            className='ms-1 fw500 fs-15 cursor-pointer'
                        />
                    </div>
                    <div className='d-flex align-items-center'>
                        <Image
                            src={Share}
                        />
                        <Text
                            text='125'
                            className='ms-1 fw500 fs-15 cursor-pointer'
                        />
                    </div>
                </div>
                
            </div>
        </div>
        <div className='fb-media'>
            <Image
                src={Post}
                className='img-fluid w-100'
            />
        </div>
    </div>
  )
}

export default PostCard