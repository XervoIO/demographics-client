import React, {Component} from 'react'

import LoadingImage from '../../assets/loading.svg'

export default class Loading extends Component {
  render() {
    return (
      <div className="loading">
        <img src={LoadingImage} />
      </div>
    )
  }
}

Loading.displayName = 'Loading'
