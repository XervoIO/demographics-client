import React from 'react'
import {render} from 'react-dom'
import {IndexRoute, Route} from 'react-router'
import {Provider} from 'react-redux'
import {ReduxRouter} from 'redux-router'

import App from './containers/App'
import configureStore from './store/configureStore'
import DevTools from './containers/DevTools'
import Home from './containers/HomePage'

const store = configureStore()

let routes = (
  <Provider store={store}>
    <div>
      <ReduxRouter>
        <Route path="/" component={App}>
          <IndexRoute component={Home} />
        </Route>
      </ReduxRouter>
      { __DEVELOPMENT__ ? <DevTools /> : null }
    </div>
  </Provider>
)

render(routes, document.getElementById('root'))
