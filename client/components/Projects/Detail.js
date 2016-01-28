import React, {Component, PropTypes} from 'react'

import DateFormatter from '../../helpers/date-formatter'

export default class ProjectDetail extends Component {
  render() {
    const {project} = this.props
    const {name, description, hasLinter,
           hasReadme, maintainers, updatedAt} = project

    return (
      <div className="col-xs-12 project-details">
        <div className="col-xs-12 col-sm-6">
          <div className="detail">
            <div className="header">
              <h3>{name}</h3>
              <span className="date"><em>Updated: {DateFormatter(updatedAt)}</em></span>
            </div>
            <p className="description">{description || 'No description entered!'}</p>
            <p>Maintained by {maintainers.toString().replace(/,/g, ', ')}</p>
            <h5>Has these items:</h5>
            <ul>
              <li>Linter: {hasLinter ? 'Yep' : 'Nope'}</li>
              <li>Readme: {hasReadme ? 'Yep' : 'Nope'}</li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

ProjectDetail.displayName = 'ProjectDetail'

ProjectDetail.propTypes = {
  project: PropTypes.object.isRequired
}