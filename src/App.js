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
import Animations from './pages/fundations/Animations'
import IconSystem from './pages/fundations/IconSystem'
import Grid from './pages/components/Grid'
import HeaderDetails from './pages/components/HeaderDetails'
import FooterDetails from './pages/components/FooterDetails'
import AsteroidCardDetails from './pages/components/AsteroidCardDetails'
import FormBirthdayDetails from './pages/components/FormBirthdayDetails'
import HazardousCardDetails from './pages/components/HazardousCardDetails'
import PlayerDataDetails from './pages/components/PlayerDataDetails'
import RowGraphDataDetails from './pages/components/RowGraphDataDetails'
import OrderDropdownDetails from './pages/components/OrderDropdownDetails'
import ComparativeContainerDetails from './pages/components/ComparativeContainerDetails'

const App = () =>  (
  <BrowserRouter
    basename="/design-system"
  >
  <Layout>
    <Switch>
      <Route exact path="/" component={ Home } />
      <Route exact path="/principios" component={ Principles } />
      <Route exact path="/colores" component={ Colors } />
      <Route exact path="/tipografia" component={ Typo } />
      <Route exact path="/espaciado" component={ Spacing } />
      <Route exact path="/animaciones" component={ Animations } />
      <Route exact path="/iconografia" component={ IconSystem } />
      <Route exact path="/grid" component={ Grid } />
      <Route exact path="/header" component={ HeaderDetails } />
      <Route exact path="/footer" component={ FooterDetails } />
      <Route exact path="/botones" component={ ButtonsDetails } />
      <Route exact path="/formularios" component={ Formularios } />
      <Route exact path="/asteroidCard" component={ AsteroidCardDetails } />
      <Route exact path="/formBirthday" component={ FormBirthdayDetails } />
      <Route exact path="/hazardousCard" component={ HazardousCardDetails } />
      <Route exact path="/playerData" component={ PlayerDataDetails } />
      <Route exact path="/rowGraphData" component={ RowGraphDataDetails } />
      <Route exact path="/orderDropdown" component={ OrderDropdownDetails } />
      <Route exact path="/comparativeContainer" component={ ComparativeContainerDetails } />
    </Switch>
  </Layout>
  </BrowserRouter>
)

export default App;
