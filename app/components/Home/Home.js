import React, { PropTypes } from 'react'
import { View, StyleSheet, Text, Platform } from 'react-native'
import {AppNavbar, Gear, Hamburger } from '~/components'

Home.propTypes = {
  openDrawer: PropTypes.func,
  handleToSettings: PropTypes.func.isRequired,
}

export default function Home (props) {
  return (
    <View>
      <AppNavbar
        title='Home'
        leftButton={Platform.OS === 'android' ? <Hamburger onPress={props.openDrawer} /> : null}
        rightButton={<Gear onPress={props.handleToSettings}/>}
      />
      <Text>
        Home
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({

})
