import React from 'react'
import "./styles.scss"

export interface IDescription {
    
}

const Description: React.FunctionComponent<IDescription> = ({}) => {
    return (
        <section className="description">
           <div className="container">
               <h2 className='text-center'>
                   Good To Know
               </h2>

               <div className="mid d-flex">

                   <div className="cont">
                       <p>
                       Never lose track of your money again, with <span>smart budget</span>.
                       </p>
                   </div>

                   <div className="cont">
                       <p>
                       Verify transactions immediately they happen with <span>fInancial Record</span>.
                       </p>
                   </div>

                   <div className="cont">
                       <p>
                       Invest your money securely with <span>Invest book</span>.
                       </p>
                   </div>
               </div>
           </div>
      </section>
    )
}

export default Description