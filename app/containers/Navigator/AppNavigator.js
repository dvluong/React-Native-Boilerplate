import React, { PropTypes, Component } from 'react'
import { Navigator, Platform } from 'react-native'
import { SplashContainer, FooterTabsContainer, SettingsContainer } from '~/containers'

Navigator.propTypes = {

}

export default class AppNavigator extends Component {

  renderScene = (route, navigator) => {
    // will transition if settings button was clicked
    if (route.settings === true) {
      return <SettingsContainer navigator={navigator} />
    }
    return <FooterTabsContainer navigator={navigator} />
  }

  configureScene = (route) => {
    //animations
    if (Platform.OS === 'android') {
      return Navigator.SceneConfigs.FloatFromBottomAndroid
    }

    if (route.settings === true) {
      return Navigator.SceneConfigs.FloatFromBottom
    }

    return Navigator.SceneConfigs.FloatFromRight
  }

  render() {
    return (
      <Navigator
        initialRoute={{}}
        renderScene={this.renderScene}
        configureScene={this.configureScene}
      />
    )
  }
}
