import React from 'react'
import "./styles.scss"
import logo from "../../assets/graphics/PRUDENT.png"
import { useNavigate } from 'react-router-dom'

export interface IHeader {
    
}

const Header: React.FunctionComponent<IHeader> = ({}) => {
    const navigate = useNavigate()
    return (
        <section className="header ">
            <div className="container d-flex">
                <div className="left d-flex">
                    <img src={logo} alt="" />

                    <ul className='d-flex'>
                        <li>
                            <a href="https://docs.google.com/document/d/1EVroGYR2_R0Tt45oBgiPWF7q1xQaEy8cZNB-DNojHu8/edit?usp=sharing">
                                How it works
                            </a>
                        </li>

                        
                    </ul>
                </div>

                <div className="right">
                    <button className='bg-primary text-light' onClick={() => navigate("/auth")}>Login/Register</button>
                </div>
            </div>
            
      </section>
    )
}

export default Header