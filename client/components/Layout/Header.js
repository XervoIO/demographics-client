import React, {Component, PropTypes} from 'react'
import {Link} from 'react-router'

export default class Header extends Component {
  render() {
    return (
      <header>
        <h1><Link to="/">Demographics</Link></h1>
      </header>
    )
  }
}

Header.displayName = 'Header'

