import React, {Component, PropTypes} from 'react'

export default class AllProjects extends Component {
  render() {
    const {projects} = this.props

    return (
      <div>
        {Object.keys(projects).map((key, index) => {
          return <p key={index}>{projects[key].name}</p>
        })}
      </div>
    )
  }
}

AllProjects.displayName = 'AllProjects'

AllProjects.propTypes = {
  projects: PropTypes.objectOf(PropTypes.shape({
    name: PropTypes.string.isRequired
  }).isRequired).isRequired
}
