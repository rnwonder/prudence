import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Banner from '../../components/Banner'
import BottomBanner from '../../components/BottomBanner'
import Description from '../../components/Description'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import "./styles.scss"



export interface ILanding {
    
}

const Landing: React.FunctionComponent<ILanding> = ({}) => {
  const navigate = useNavigate();
  const id = localStorage.getItem("accountId");

  useEffect(() => {
    if (id) {
      navigate("/connect");
    }
  }, [id, navigate]);

    return (
        <div className="e-commerce">
          <Header />
          <Banner />
          <Description />
          <BottomBanner />
          <Footer />
      </div>
    )
}

export default Landing
