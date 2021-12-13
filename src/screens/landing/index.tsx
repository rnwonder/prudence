import React from 'react'
import Banner from '../../components/Banner'
import BottomBanner from '../../components/BottomBanner'
import Description from '../../components/Description'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import "./styles.scss"



export interface ILanding {
    
}

const Landing: React.FunctionComponent<ILanding> = ({}) => {
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
