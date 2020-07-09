import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Layout from './components/organisms/Layout'
import Footer from './components/organisms/Footer'

const App = () =>  (
  <BrowserRouter>
  <Layout>
    <Switch>
      <Route exact path="/footer" component={Footer} />
    </Switch>
  </Layout>
  </BrowserRouter>
)

export default App;
