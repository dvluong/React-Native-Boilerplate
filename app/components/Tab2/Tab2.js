import React, { PropTypes } from 'react'
import { View, StyleSheet, Text, Platform } from 'react-native'
import {AppNavbar, Gear, Hamburger} from '~/components'

Tab2.propTypes = {
  openDrawer: PropTypes.func,
}

export default function Tab2 (props) {
  return (
    <View>
      <AppNavbar
        title='Tab2'
        leftButton={Platform.OS === 'android' ? <Hamburger onPress={props.openDrawer} /> : null}
        rightButton={<Gear onPress={() => console.log('hello')} />}
      />
      <Text>
        Tab2
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({

})
