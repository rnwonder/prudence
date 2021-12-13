import React from 'react'
import "./styles.scss"
import logo from "../../assets/graphics/PRUDENT.png"

export interface IHeader {
    
}

const Header: React.FunctionComponent<IHeader> = ({}) => {
    return (
        <section className="header ">
            <div className="container d-flex">
                <div className="left d-flex">
                    <img src={logo} alt="" />

                    <ul className='d-flex'>
                        <li>
                            <a href="">
                                How it works
                            </a>
                        </li>

                        <li>
                            <a href="">
                                FAQS
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="right">
                    <button className='bg-primary text-light'>Login/Register</button>
                </div>
            </div>
            
      </section>
    )
}

export default Header