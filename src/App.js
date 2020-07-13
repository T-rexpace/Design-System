import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Layout from './components/organisms/Layout'
import Principles from './pages/principles/Principles'
import Footer from './components/organisms/Footer'
import Header from './components/organisms/Header'
import Buttons from './components/atoms/Buttons'
import Formularios from './components/atoms/Input'
import Colors from './pages/fundations/Colors'
import Typo from './pages/fundations/Typo'
import Spacing from './pages/fundations/Spacing'

const App = () =>  (
  <BrowserRouter
    basename="/design-system"
  >
  <Layout>
    <Switch>
      <Route exact path="/principios" component={ Principles } />
      <Route exact path="/colors" component={ Colors } />
      <Route exact path="/typo" component={ Typo } />
      <Route exact path="/spacing" component={ Spacing } />
      <Route exact path="/footer" component={ Footer } />
      <Route  exact path="/buttons" component={ Buttons } />
      <Route  exact path="/header" component={ Header } />
      <Route  exact path="/formularios" component={ Formularios } />
    </Switch>
  </Layout>
  </BrowserRouter>
)

export default App;
