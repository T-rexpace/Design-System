import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Layout from './components/organisms/Layout'
import Footer from './components/organisms/Footer'
import Header from './components/organisms/Header'
import Buttons from './components/atoms/Buttons'
import Formularios from './components/atoms/Input'

const App = () =>  (
  <BrowserRouter>
  <Layout>
    <Switch>
      <Route exact path="/footer" component={ Footer } />
      <Route  exact path="/buttons" component={ Buttons } />
      <Route  exact path="/header" component={ Header } />
      <Route  exact path="/formularios" component={ Formularios } />
    </Switch>
  </Layout>
  </BrowserRouter>
)

export default App;
