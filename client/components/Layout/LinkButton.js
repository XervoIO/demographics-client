import React, {Component, PropTypes} from 'react'
import {Link} from 'react-router'

export default class LinkButton extends Component {
  render() {
    return (
      <span className="link-button">
        <Link to={this.props.to}>{this.props.text} &raquo;</Link>
      </span>
    )
  }
}

LinkButton.displayName = 'LinkButton'

LinkButton.propTypes = {
  to: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
}
