import React from 'react'
import "./styles.scss"
import image from "../../assets/graphics/pexels-ekaterina-bolovtsova-6975932.png"
import { useNavigate } from 'react-router-dom'

export interface IBanner {
    
}

const Banner: React.FunctionComponent<IBanner> = ({}) => {
    const navigate = useNavigate()


    return (
        <section className="banner">
            <img className='banner-bg' src={image} alt="" />
            <div className="b-bg"></div>
            <div className="container text-light">
                <h1>
                Be the Boss of your money!
                </h1>

                <p>
                personal finance made easy!
                </p>

                <button className='bg-light' onClick={() => navigate("/auth")}>Get Started</button>
            </div>
      </section>
    )
}

export default Banner