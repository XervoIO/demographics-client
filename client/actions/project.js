import {normalize} from 'normalizr'
import {CALL_API} from 'redux-api-middleware'

import Config from '../config'
import * as ActionTypes from '../constants/ActionTypes'
import {PROJECT, PROJECT_ARRAY} from '../constants/Schemas'

export function fetchProject(name) {
  return {
    [CALL_API]: {
      endpoint: `${Config.api.url}/projects/${name}`,
      headers: { 'Content-Type': 'application/json' },
      method: 'GET',
      types: [
        ActionTypes.PROJECTS_REQUEST,
        {
          type: ActionTypes.PROJECTS_SUCCESS,
          payload: (action, state, res) => {
            let project = res.json().then((json) => normalize({ project: json }, { project: PROJECT }))
            return project
          }
        },
        ActionTypes.PROJECTS_FAILURE
      ]
    }
  }
}

export function fetchProjects() {
  return {
    [CALL_API]: {
      endpoint: `${Config.api.url}/projects`,
      headers: { 'Content-Type': 'application/json' },
      method: 'GET',
      types: [
        ActionTypes.PROJECTS_REQUEST,
        {
          type: ActionTypes.PROJECTS_SUCCESS,
          payload: (action, state, res) => {
            let projects = res.json().then((json) => normalize({ projects: json }, { projects: PROJECT_ARRAY }))
            return projects
          }
        },
        ActionTypes.PROJECTS_FAILURE
      ]
    }
  }
}
