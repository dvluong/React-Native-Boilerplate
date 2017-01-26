import React, { PropTypes, Component } from 'react'
import { View, Text } from 'react-native'
import { Home } from '~/components'

export default class HomeContainer extends Component {
  static propTypes = {
    openDrawer: PropTypes.func,
    navigator: PropTypes.object.isRequired,
  }
  state = {}

  // passes in a new route to the navigator, will switch to settings view
  handleToSettings = () => {
    this.props.navigator.push({
      settings: true
    })
  }
  render () {
    return (
      <Home
        handleToSettings={this.handleToSettings}
        openDrawer={this.props.openDrawer}
      />
    )
  }
}