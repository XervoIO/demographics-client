import {createHistory} from 'history'
import React from 'react'
import {render} from 'react-dom'
import {Router, Route} from 'react-router'

import App from './containers/App'

const ROUTES = (
  <Router history={createHistory()}>
    <Route path="/" component={App}>
      // more routes...
    </Route>
  </Router>
)

render(ROUTES, document.getElementById('root'))
