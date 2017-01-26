import React, { PropTypes, Component } from 'react'
import { View, Text } from 'react-native'
import { AppNavigator } from '~/containers'

export default class AppContainer extends Component {
  static propTypes = {}
  state = {}
  render () {
    return (
      <View style={{flex: 1}}>
        <AppNavigator />
      </View>
    )
  }
}