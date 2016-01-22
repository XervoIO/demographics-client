import React, {Component, PropTypes} from 'react'

import ProjectTile from './Tile'

export default class AllProjects extends Component {
  render() {
    const {projects} = this.props

    return (
      <div className="container-fluid">
        {Object.keys(projects).map((key, index) => {
          return <ProjectTile key={index} project={projects[key]} />
        })}
      </div>
    )
  }
}

AllProjects.displayName = 'AllProjects'

AllProjects.propTypes = {
  projects: PropTypes.object.isRequired
}
