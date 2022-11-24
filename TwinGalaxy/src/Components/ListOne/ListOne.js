import React from "react";
import Text from '../text/Text';
import './ListOne.scss';


const ListOne = () =>  {
    return (


<div className="d-flex align-items-center mb-3">
                  <ul className="cardList ps-0 mb-0">
                    <li>
                    <Text
                      text="Submission Points:"
                      color="text-col6"
                      className=" fs-18 fw-500  d-inline-block"
                    />
                    <Text
                      text="60"
                      color="text-col6"
                      className=" fs-18 fw-600 d-inline-block"
                    />
                    </li>
                    <li>
                    <Text
                      text="Credibility :"
                      color="text-col6"
                      className=" fs-18 fw-500  d-inline-block"
                    />
                    <Text
                      text="160,000"
                      color="text-col6"
                      className=" fs-18 fw-600 d-inline-block"
                    />
                    </li>
                    <li>
                    <Text
                      text="Following:"
                      color="text-col6"
                      className=" fs-18 fw-500  d-inline-block"
                    />
                    <Text
                      text="160"
                      color="text-col6"
                      className=" fs-18 fw-600 d-inline-block"
                    />
                    </li>
                    <li>
                    <Text
                      text="Follower:"
                      color="text-col6"
                      className=" fs-18 fw-500 d-inline-block "
                    />
                    <Text
                      text="160"
                      color="text-col6"
                      className=" fs-18 fw-600 d-inline-block"
                    />
                    </li>
                    
                  </ul>
                </div>
    );
}

export default ListOne;