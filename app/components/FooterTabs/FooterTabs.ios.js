import React, { PropTypes } from 'react'
import { TabBarIOS, Text } from 'react-native'
import { colors } from '~/styles'
import Icon from 'react-native-vector-icons/Ionicons'
import { HomeContainer, Tab2Container } from '~/containers'

FooterTabs.propTypes = {
  activeFooterTab: PropTypes.string.isRequired,
  onTabSelect: PropTypes.func.isRequired,
  navigator: PropTypes.object.isRequired,
}

export default function FooterTabs(props) {
  return (
    <TabBarIOS tintColor={colors.active}>
      <Icon.TabBarItem
        iconSize={35}
        iconName='ios-home-outline'
        title='Home'
        selected={props.activeFooterTab === 'home'}
        onPress={() => props.onTabSelect('home')}
      >
        <HomeContainer navigator={props.navigator} />
      </Icon.TabBarItem>
      <Icon.TabBarItem
        iconSize={35}
        iconName='ios-trophy-outline'
        title='Tab2'
        selected={props.activeFooterTab === 'leaderboard'}
        onPress={() => props.onTabSelect('leaderboard')}
      >
        <Tab2Container navigator={props.navigator} />
      </Icon.TabBarItem>
    </TabBarIOS>
  )
}
