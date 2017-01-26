import React, { PropTypes } from 'react'
import { View, StyleSheet, Text, DrawerLayoutAndroid } from 'react-native'
import { HomeContainer, Tab2Container } from '~/containers'
import Drawer from './Drawer'

FooterTabs.propTypes = {
  activeFooterTab: PropTypes.string.isRequired,
  onTabSelect: PropTypes.func.isRequired,
  navigator: PropTypes.object.isRequired,
}

export default function FooterTabs(props) {
  const closeDrawer = () => this.drawer.closeDrawer()
  const openDrawer = () => this.drawer.openDrawer()
  return (
    <DrawerLayoutAndroid
      ref={(drawer) => this.drawer = drawer}
      drawerWidth={290}
      renderNavigationView={() => (
        <Drawer
          close={closeDrawer}
          activeFooterTab={props.activeFooterTab}
          onTabSelect={props.onTabSelect}
        />
      )}
    >
      {
        props.activeFooterTab === 'home'
        ? <HomeContainer
            navigator={props.navigator}
            openDrawer={openDrawer}
          />
        : <Tab2Container
            navigator={props.navigator}
            openDrawer={openDrawer}
          />
      }

    </DrawerLayoutAndroid>
  )
}

const styles = StyleSheet.create({

})
