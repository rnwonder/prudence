import React from 'react'
import AuthHeader from '../../components/AuthHeader'
import MonoConnect from "@mono.co/connect.js";
import "./styles.scss"


const Connect= ({}) => {
    return (
        <section className="monoConnect">
            <AuthHeader />

            <div className='container cont d-flex flex-column'>
                <h1>
                    Connect your bank account to prudent
                </h1>

                <p>
                Prudent allows you to seamlessly integrate your banks and savings platform, thereby enabling you to have a better understanding of your finances
                </p>

                <button className='bg-primary text-light'>Click to Connect</button>
            </div>
      </section>
    )
}

export default Connect