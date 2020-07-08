import React from 'react';

import Footer from './components/organisms/Footer'
import Buttons from './components/atoms/Buttons';
import Icons from './pages/fundations/IconSystem'
import Colors from './pages/fundations/Colors'
import Typo from './pages/fundations/Typo'
import Spacing from './pages/fundations/Spacing'


const App = () =>  (
    <div className="container">
        <Footer />
        <Icons />
        <Colors />
        <Typo />
        <Spacing />
    </div>
)
    
export default App;

