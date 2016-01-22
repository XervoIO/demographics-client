import React, {Component, PropTypes} from 'react'

import VersionDetails from './Detail.js'

export default class AllVersions extends Component {
  render() {
    const {versions} = this.props

    return (
      <div className="col-xs-12 versions">
        {Object.keys(versions).map((key, index) => {
          return <VersionDetails key={index} version={versions[key]} />
        })}
      </div>
    )
  }
}

AllVersions.displayName = 'AllVersions'

AllVersions.propTypes = {
  versions: PropTypes.object.isRequired
}
