import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'

import DefaultLayout from '../layouts/Default'
import {fetchProjects} from '../actions/project'
import Projects from '../components/Projects/All'

class HomePage extends Component {
  componentWillMount() {
    this.props.fetchProjects()
  }

  render() {
    const {projects} = this.props

    if (!projects) {
      return <div>Loading projects...</div>
    }

    return (
      <DefaultLayout>
        Home
        <Projects projects={projects} />
      </DefaultLayout>
    )
  }
}

HomePage.displayName = 'HomePage'

HomePage.propTypes = {
  fetchProjects: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  const {
    entities: {projects, versions}
  } = state

  return {
    projects,
    versions
  }
}

export default connect(mapStateToProps, {
  fetchProjects
})(HomePage)

