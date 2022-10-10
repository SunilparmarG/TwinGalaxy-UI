import './VottingPerformance.scss'

import { Row, Col} from 'react-bootstrap';

import Image from '../../Components/image/Image';
import Text from '../../Components/text/Text';
import Buttons from '../../Components/buttons/Button';


// Image & icon
import Messi from '../../assets/images/messi.jpg'
import Verify from '../../assets/images/verify.png'
import Tag from '../../assets/images/tag.png'
import Email from '../../assets/images/email.png'
import Thumbs from '../../assets/images/thumbs-up.png'
import ThumbsDown from '../../assets/images/thumbs-down.png'
import ArrowLeft from '../../assets/images/arrow-up-left.png'
import Envelope from '../../assets/images/envelope.png'
import Warning from '../../assets/images/warning.png'
import AddBookmark from '../../assets/images/add-bookmark.png'
import Bookmark from '../../assets/images/bookmark.png'
import Search from '../../assets/images/search.png'
import Alarm from '../../assets/images/alarm.png'
import Share from '../../assets/images/share.png'


// Slider images
import Slide1 from '../../assets/images/slider/slide1.webp'
import Slide2 from '../../assets/images/slider/slide2.webp'
import Slide3 from '../../assets/images/slider/slide3.webp'



const VottingPerformance = () =>{
    return(
        <div>
       <div className="container">
        <Row className='mb-4'>        
            <Col lg={4}>
                <div className="card user-card mt-75  ">
                    <div className="card-header">
                        <div className="user-pic text-center">
                            <div className="user-avatar d-inline-flex justify-content-center position-relative">
                                <div className="pic">
                                    <Image src={Messi} alt="image name" className="img-fluid"/>
                                </div>
                                <Image className="verified-icon position-absolute" src="{verify}"  alt="verify" />
                            </div>
                        </div>
                        <button className="follow">Follow</button>
                        <div className="personal-details text-center mb-3 mt-2">
                            <h5 className="name mb-0">George Bosh</h5>
                            <p className="city mb-0">New York</p>
                            <span className="rating">★ 4.2</span>
                        </div>
                        <ul className="numbers list-unstyled d-flex justify-content-center mb-0">
                            <li>
                                <span>Posts</span>
                                <h6>18</h6>
                            </li>
                            <li>
                                <span>Follows</span>
                                <h6>143</h6>
                            </li>
                            <li>
                                <span>Following</span>
                                <h6>141</h6>
                            </li>
                        </ul>
                    </div>
                    <div className="card-body">
                        <ul className="list-unstyled details-list">
                            <li className="d-flex justify-content-between">
                                <label>Join Date</label>
                                <span>May 2020</span>
                            </li>
                            <li className="d-flex justify-content-between">
                                <label>Location</label>
                                <span>Rome</span>
                            </li>
                            <li className="d-flex justify-content-between">
                                <label>Credibility</label>
                                <span>13,061</span>
                            </li>
                            <li className="d-flex justify-content-between">
                                <label>Posts</label>
                                <span>1,897</span>
                            </li>
                            <li className="d-flex justify-content-between">
                                <label>Likes (Received)</label>
                                <span>2778</span>
                            </li>
                            <li className="d-flex justify-content-between">
                                <label>Blog Entries</label>
                                <span>120</span>
                            </li>
                        </ul>
                        <div className="text-center">
                            <button className="btn-light-rounded">View Complete Profile</button>  
                        </div>
                    </div>
                </div>
            </Col>
            <Col lg={8}>
            
                <div className="card user-card mt-4 mt-lg-75">
                    <div className="card-body">
                        <div className="game-details d-lg-flex">
                            <div className="position-relative video-box mb-4 mb-lg-0 me-lg-3">
                                    <div className="mySlides">
                                      <Image className="rounded img-fluid" src={Slide1}  alt="Slider Image" />
                                    </div>
                                  
                                    <div className="mySlides">
                                      <Image className="rounded img-fluid" src={Slide2}  alt="Slider Image"/>
                                    </div>
                                  
                                    <div className="mySlides">
                                      <Image className="rounded img-fluid" src={Slide3}  alt="Slider Image"/>
                                    </div>
                                      
                                      
                                    <div className="d-flex mt-3">
                                      <div className="column me-2">
                                       <Image className="rounded img-fluid" src={Slide1}  alt="Slider Image"/>
                                      </div>
                                      <div className="column me-2">
                                        <Image className="rounded img-fluid" src={Slide2}  alt="Slider Image"/>
                                      </div>
                                      <div className="column">
                                        <Image className="rounded img-fluid" src={Slide3} alt="Slider Image"/>
                                      </div>
                                    </div>
                                  
                            </div>
                            <div className="game-info">
                                <h5>Nintendo Switch gaming</h5>
                                <span className="time">Yesterday, 01:09 PM</span>
                                <ul className="list-unstyled d-lg-flex listStyle2 mb-3 ">
                                    <li>
                                        <label>Rank:</label>
                                        <span className="points">1</span>
                                    </li>
                                    <li>
                                        <label>Points:</label>
                                        <span className="points">57,606</span>
                                    </li>
                                    <li>
                                        <label>Views:</label>
                                        <span className="points">12</span>
                                    </li>
                                    <li>
                                        <label>Replies:</label>
                                        <span className="points">04</span>
                                    </li>
                                </ul>
                                <ul className="list-unstyled d-lg-flex listStyle3 mb-3">
                                    <li>
                                        <label>Game:</label>
                                        <a href="javascript:void">Hill Climb Racing</a>
                                    </li>
                                    <li>
                                        <label>Track:</label>
                                        <a href="javascript:void">Spirit Battles</a>
                                    </li>
                                    <li>
                                        <label>Platform:</label>
                                        <a href="javascript:void">Android</a>
                                    </li>
                                    <li>
                                        <label>Potential Rank:</label>
                                        <a href="javascript:void">30</a>
                                    </li>
                                </ul>
                                <ul className="list-unstyled d-lg-flex listStyle3">
                                    <li>
                                        <label>Track URL:</label>
                                        <a href="javascript:void">https://www.twingalaxies.com/scores.php?scores=245787</a>
                                    </li>
                                </ul>
                                <button className="btnType5 tab-user-btn mt-3 mb-4 mt-lg-0 mb-lg-0">
                                    <div className="d-flex align-items-center justify-content-center">
                                        <Image src={Tag} className="img-fluid" alt="tag"/>
                                        <span>tag user</span>
                                    </div>
                                </button>
                            </div>
                        </div>
                        <div className="rules">
                            <h5 className="section-heading mb-4">Rules</h5>
                            <ul className="list-unstyled listStyle1">
                                <li>Score taken from the "Total Event Kudos" displayed after the difficulty bonus is applied for the indicated event.</li>
                                <li>Difficulty (and therefore bonus) is the player's choice. Event must be successfully completed to earn the bonus.</li>
                                <li>The "Previous Best" is not permitted as a measurement.</li>
                            </ul>
                        </div>
                        <div className="alert alert-danger">
                            <div className="d-flex align-items-center">
                                <Image src={Email} className="img-fluid me-3" alt="Email"/>                                
                                <div className="alert-content">
                                    <h5>Submission Message</h5>
                                    <p className="mb-0">Achieved on 20110801. Attempt begins around 13:01. Only Chapter 11 in this footage. Chapter 11 can be confirmed around 2:11, 22:46, 27:16 and 1:02:23.
                                        -- AP</p>
                                </div>
                            </div>
                        </div>
                        <hr />
                        <div className="action-center d-lg-flex justify-content-lg-between  align-items-center">
                            <ul className="activity-list list-unstyled mb-0 d-flex justify-content-center mb-3 mb-lg-0">
                                <li className="text-center">
                                    <a href="javascript:void(0)">
                                        <Image src={Thumbs} className="img-fluid" alt="Like"/>
                                        
                                    </a>
                                    <span>You, Diana Prince and 10 others</span>
                                </li>
                            </ul>
                            <ul className="action-list list-unstyled mb-0 d-flex justify-content-center">
                                <li>
                                    <a href="javascript:void(0)">
                                        <Image src={ArrowLeft} className="img-fluid" alt="arrow"/>
                                        
                                    </a>
                                </li>
                                <li>
                                    <a href="javascript:void(0)">
                                        <Image src={Bookmark} className="img-fluid" alt="bookmark"/>
                                        
                                    </a>
                                </li>
                                <li>
                                    <a href="javascript:void(0)">
                                        <Image src={AddBookmark} className="img-fluid" alt="AddBookmark"/>
                                        
                                    </a>
                                </li>
                                <li>
                                    <a href="javascript:void(0)">
                                        <Image src={Warning} className="img-fluid" alt="Warning"/>
                                    </a>
                                </li>
                                <li>
                                    <a href="javascript:void(0)">
                                        <Image src={Envelope} className="img-fluid" alt="envelope"/>
                                        
                                    </a>
                                </li>
                                
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="voting-card mt-4">
                    <div className="row align-items-center">
                        <div className="col-lg-8">
                            <h2>Verify your account to vote on performances</h2>
                        </div>
                        <div className="col-lg-4 ">
                            <div className="w-100 d-flex justify-content-lg-end">
                                <button className="btnType1 ms-auto">Verify Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </Col>
        
        </Row>
       
        <h2 className="section-heading mb-5">User Comments <span className="count">(2)</span></h2>
        <div className="edit-comment mb-4">
            <Row className='top-filters mb-4'>
                <Col lg={4} className="mb-3 mb-lg-0">
               <div className="input-group">
                        <input type="search" className="form-control" placeholder="Search Thread" aria-label="Search Thread" aria-describedby="basic-addon2" />
                        <div className="input-group-append">
                            <span className="input-group-text" id="basic-addon2">
                                <Image src={Search} alt="search" />
                            </span>
                        </div>
                    </div>
                </Col>
                <Col lg={4} className="ms-lg-auto ">
                  <div className="d-flex w-100 justify-content-center justify-content-lg-end">
                        <div className="dropdown me-3">
                            <a className="btn btn-outline-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Thread Tools
                            </a>                          
                            <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuLink">
                              <a className="dropdown-item" href="#">Action</a>
                              <a className="dropdown-item" href="#">Another action</a>
                              <a className="dropdown-item" href="#">Something else here</a>
                            </div>
                        </div>
                        <div className="dropdown">
                            <a className="btn btn-outline-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Display
                            </a>
                          
                            <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuLink">
                              <a className="dropdown-item" href="#">Action</a>
                              <a className="dropdown-item" href="#">Another action</a>
                              <a className="dropdown-item" href="#">Something else here</a>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>

            <form action="">
                <div className="comment-box d-flex align-items-center mb-1">
                    <div className="comment-pic">
                        <Image src={Messi} alt="palyer" />
                    </div>
                    <div className="form-group ms-3 w-100 mb-0">
                        <textarea className="form-control" name="">Etiam faucibus scelerisque sed sagittis enim sit elit. Turpis in odio eu egestas odio at. Amet suspendisse viverra tincidunt sagittis massa elit aliquam diam. Nascetur praesent.</textarea>
                    </div>
                </div>
                <div className="button-group d-flex justify-content-end">
                    <button className="btnType3 me-3">Cancel</button>
                    <button className="btnType1">Submit</button>
                </div>
            </form>
        </div>
       
        <div className="comment-list mt-3">
            <div className="comment d-lg-flex mb-3">
                <div className="user-details mb-3 mb-lg-0">
                    <div className="user-details-box d-flex mb-2">
                        <div className="user-pic">
                            <div className="user-avatar d-inline-flex justify-content-center position-relative">
                                <div className="pic">
                                    <Image src={Messi} alt="palyer" />
                                </div>
                                <Image src={Verify} alt="verify"  className="verified-icon position-absolute"/>
                                
                            </div>
                        </div>
                        <div className="personal-details ms-3">
                            <h5 className="name mb-1">George Bosh</h5>
                            <p className="city mb-0">New York</p>
                            <span className="rating">★ 4.2</span>
                        </div>
                    </div>
                    <button className="follow">Follow</button>
                </div>
                <div className="user-content pl-lg-3">
                    <p>Etiam faucibus scelerisque sed sagittis enim sit elit. Turpis in odio eu egestas odio at. Amet suspendisse viverra tincidunt sagittis massa elit aliquam diam. Nascetur Etiam faucibus scelerisque sed sagittis enim sit elit. Turpis in odio eu egestas odio at. </p>
                    <div className="d-flex justify-content-between align-items-center">
                        <ul className="activity-list list-unstyled mb-0 d-flex">
                            <li>
                                <a href="javascript:void(0)">
                                    <Image src={Alarm} alt="alarm" />

                                </a>
                                <span>5 mins ago</span>
                            </li>

                            <li>
                                <a href="javascript:void(0)">
                                    
                                    <Image src={Thumbs} alt="" />
                                </a>
                                <span>5</span>
                            </li>

                            <li>
                                <a href="javascript:void(0)">
                                    <Image src={ThumbsDown} alt="" />
                                </a>
                                <span>5</span>
                            </li>
                        </ul>
                        <ul className="action-list list-unstyled mb-0 d-flex">
                            <li>
                                <a href="javascript:void(0)">
                                    <Image src={Warning} alt="warning" />
                                </a>
                            </li>
                            <li>
                                <a href="javascript:void(0)">

                                    <Image src={ArrowLeft} alt="arrow left" />
                                </a>
                            </li>
                            <li>
                                <a href="javascript:void(0)">
                                    <Image src={Share} alt="share" />
                                    
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>               
            </div>
        </div>
        
       </div>
        </div>
    )
}

export default VottingPerformance