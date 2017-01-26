import React, { PropTypes, Component } from 'react'
import { View, Text } from 'react-native'
import { Tab2 } from '~/components'

export default class Tab2Container extends Component {
  static propTypes = {
    openDrawer: PropTypes.func,
    navigator: PropTypes.object.isRequired,
  }
  state = {}
  render () {
    return (
      <Tab2 openDrawer={this.props.openDrawer}/>
    )
  }
}