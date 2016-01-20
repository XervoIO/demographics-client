import React, {Component, PropTypes} from 'react'

export default class DefaultLayout extends Component {
  render() {
    return (
      <div>
        Layout
        {this.props.children}
      </div>
    )
  }
}

DefaultLayout.displayName = 'DefaultLayout'
