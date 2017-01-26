import React, { PropTypes, Component } from 'react'
import { View, Text } from 'react-native'
import { Settings } from '~/components'

export default class SettingsContainer extends Component {
  static propTypes = {
    navigator: PropTypes.object.isRequired,
  }

  // functions like a swift back button, except you have to explicitly call it from navigator
  render () {
    return (
      <Settings onBack={this.props.navigator.pop} />
    )
  }
}