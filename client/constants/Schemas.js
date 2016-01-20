import {arrayOf, normalize, Schema} from 'normalizr'

let project = new Schema('projects', { idAttribute: 'name' })
let version = new Schema('versions', { idAttribute: 'name' })

version.define({
  version: version
})

project.define({
  project: project,
  versions: arrayOf(version)
})

export const PROJECT = project
export const PROJECT_ARRAY = arrayOf(project)
