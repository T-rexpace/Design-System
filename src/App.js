import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Layout from './components/organisms/Layout'
import Home from './pages/Home'
import Principles from './pages/principles/Principles'
import ButtonsDetails from './pages/components/ButtonsDetails'
import Formularios from './pages/components/FormsDetails'
import Colors from './pages/fundations/Colors'
import Typo from './pages/fundations/Typo'
import Spacing from './pages/fundations/Spacing'
import IconSystem from './pages/fundations/IconSystem'
import FooterDetails from './pages/components/FooterDetails'
import HeaderDetails from './pages/components/HeaderDetails'
import AsteroidCardDetails from './pages/components/AsteroidCardDetails'
import FormBirthdayDetails from './pages/components/FormBirthdayDetails'
import HazardousCardDetails from './pages/components/HazardousCardDetails'

const App = () =>  (
  <BrowserRouter
    basename="/design-system"
  >
  <Layout>
    <Switch>
      <Route exact path="/" component={ Home } />
      <Route exact path="/principios" component={ Principles } />
      <Route exact path="/colors" component={ Colors } />
      <Route exact path="/typo" component={ Typo } />
      <Route exact path="/spacing" component={ Spacing } />
      <Route exact path="/iconSystem" component={ IconSystem } />
      <Route exact path="/footer" component={ FooterDetails } />
      <Route exact path="/header" component={ HeaderDetails } />
      <Route exact path="/buttons" component={ ButtonsDetails } />
      <Route exact path="/formularios" component={ Formularios } />
      <Route exact path="/asteroidCard" component={ AsteroidCardDetails } />
      <Route exact path="/formBirthday" component={ FormBirthdayDetails } />
      <Route exact path="/hazardousCard" component={ HazardousCardDetails } />
    </Switch>
  </Layout>
  </BrowserRouter>
)

export default App;
