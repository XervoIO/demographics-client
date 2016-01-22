import React, {createClass, PropTypes} from 'react'
import {connect} from 'react-redux'

import DefaultLayout from '../../layouts/Default'
import {fetchProject} from '../../actions/project'
import Details from '../../components/Projects/Detail'
import Loading from '../../components/Layout/Loading'
import Versions from '../../components/Versions/All'

const ProjectDetails = createClass({
  getInitialData() {
    return {
      projects: {},
      versions: {}
    }
  },

  componentWillMount() {
    this.props.fetchProject(this.props.params.name)
  },

  render() {
    const {projects, versions} = this.props
    const {name} = this.props.params

    if (!projects) {
      return <DefaultLayout><Loading /></DefaultLayout>
    }

    return (
      <DefaultLayout>
        <Details project={projects[name]} />
        <Versions versions={versions} />
      </DefaultLayout>
    )
  }
})

ProjectDetails.displayName = 'ProjectDetails'

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
  fetchProject
})(ProjectDetails)

