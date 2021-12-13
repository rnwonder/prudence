import React, { lazy, Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ScrollToTop from '../components/ScrollToTop';
import SuspenseLoader from '../components/SuspenseLoader/index';
import { AuthRoute, LandingRoute, MonoConnectRoute } from '../navigation/routes';
import "./styles.scss";


interface Props {
    
}

const Main = (props: Props) => {

    const LandingScreen = lazy(() => import("../screens/landing"));
    const AuthScreen = lazy(() => import("../screens/auth"));
    const MonoConnectScreen = lazy(() => import("../screens/monoConnect/index.js"));


    return (
        <main className='main'>
     
            <Suspense fallback={<SuspenseLoader />}>
                <BrowserRouter>
                `<ScrollToTop />
                    <Routes>
                        <Route path={LandingRoute} element={<LandingScreen />} />
                        <Route path={AuthRoute} element={<AuthScreen />} />
                        <Route path={MonoConnectRoute} element={<MonoConnectScreen />} />
                    </Routes>
                </BrowserRouter>
            </Suspense>
        </main>
    )
}

export default Main
