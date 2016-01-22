import {arrayOf, normalize, Schema} from 'normalizr'

let projects = new Schema('projects', { idAttribute: 'name' })
let versions = new Schema('versions', { idAttribute: 'name' })

versions.define({
  version: versions
})

projects.define({
  project: projects,
  versions: arrayOf(versions)
})

let project = new Schema('projects', { idAttribute: 'name' })
let projectVersions = new Schema('versions', { idAttribute: 'version' })

project.define({
  projects: project,
  versions: arrayOf(projectVersions)
})

export const PROJECT = project
export const PROJECT_ARRAY = arrayOf(projects)
