import React, { Fragment } from 'react';

import Footer from './pages/components/Footer'
import Buttons from './pages/components/Buttons';
import Icons from './pages/fundations/IconSystem'
import Colors from './pages/fundations/Colors'
import Typo from './pages/fundations/Typo'
import Spacing from './pages/fundations/Spacing'

import './Globales.css'

const App = () =>  (
    <div className="container">
        <Icons />
        <hr className="hr"/>
        <Colors />
        <hr className="hr"/>
        <Typo />
        <hr className="hr"/>
        <Spacing />
        <hr className="hr"/>
        <Footer />
    </div>
)
    
export default App;