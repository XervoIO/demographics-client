import React, {Component, PropTypes} from 'react'

import Header from '../components/Layout/Header'

export default class DefaultLayout extends Component {
  render() {
    return (
      <div>
        <Header />
        {this.props.children}
      </div>
    )
  }
}

DefaultLayout.displayName = 'DefaultLayout'
