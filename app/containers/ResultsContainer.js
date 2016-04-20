import React, { Component } from 'react'
import Results from '../components/Results'
import { battle } from '../utils/githubHelpers'

class ResultsContainer extends Component {
  constructor () {
    super()
    this.state = {
      isLoading: true,
      scores: []
    }
  }
  async componentDidMount () {
    try {
      const scores = await battle(this.props.location.state.playersInfo)
      this.setState({
        isLoading: false,
        scores
      })
    } catch (e) {
      console.warn('Error in ResultsContainer: ', e);
    }
  }
  render () {
    return (
      <Results
        isLoading={this.state.isLoading}
        playersInfo={this.props.location.state.playersInfo}
        scores={this.state.scores} />
    )
  }  
}

export default ResultsContainer;