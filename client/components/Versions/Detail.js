import React, {Component, PropTypes} from 'react'

import DateFormatter from '../../helpers/date-formatter'

export default class VersionDetail extends Component {
  render() {
    const {coverage, dependencies, devDependencies,
           loc, name, updateAt, version} = this.props.version

    return (
      <div className="col-xs-12 col-sm-6 col-md-3 version-details">
        <div className="detail">
          <h4>v{version}</h4>
          <p><em>Lines of Code: {loc} | Test Coverage: {coverage}%</em></p>
          <h5>Dependencies</h5>
          <ul>
            <li>Major: {dependencies.major}</li>
            <li>Minor: {dependencies.Minor}</li>
            <li>Up to Date: {dependencies.upToDate}</li>
          </ul>
          <h5>Dev Dependencies</h5>
          <ul>
            <li>Major: {devDependencies.major}</li>
            <li>Minor: {devDependencies.Minor}</li>
            <li>Up to Date: {devDependencies.upToDate}</li>
          </ul>
        </div>
      </div>
    )
  }
}

VersionDetail.displayName = 'VersionDetail'

VersionDetail.propTypes = {
  version: PropTypes.object.isRequired
}
