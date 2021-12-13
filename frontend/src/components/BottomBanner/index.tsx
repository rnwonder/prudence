import React from 'react'
import "./styles.scss"
import image from "../../assets/graphics/Group 62.png"
import { useNavigate } from 'react-router-dom'

export interface IBottomBanner {
    
}

const BottomBanner: React.FunctionComponent<IBottomBanner> = ({}) => {
    const navigate = useNavigate()

    return (
        <section className="bottom-banner">
            <img className='banner-bg' src={image} alt="" />
            <div className="b-bg"></div>
            <div className="container text-light">
                <h2>
                Control your money with prudent
                </h2>

                <p>
                sign up to start
                </p>

                <button className='bg-light' onClick={() => navigate("/auth")}>Get Started</button>
            </div>
      </section>
    )
}

export default BottomBanner