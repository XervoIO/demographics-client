import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router'

import DateFormatter from '../../helpers/date-formatter'
import LinkButton from '../Layout/LinkButton'

export default class ProjectTile extends Component {
  render() {
    const {name, description, updatedAt} = this.props.project

    return (
      <div className="col-xs-12 col-sm-6 col-md-3 project-tile">
        <div className="tile">
          <h3>{name}</h3>
          <p className="description">{description || 'No description entered!'}</p>
          <p className="date"><em>Last updated on {DateFormatter(updatedAt)}</em></p>
          <LinkButton to={`/project/${name}`} text="View full details" />
        </div>
      </div>
    )
  }
}

ProjectTile.displayName = 'ProjectTile'

ProjectTile.propTypes = {
  project: PropTypes.object.isRequired
}
