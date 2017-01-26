import React, { PropTypes } from 'react'
import { View, StyleSheet, Text, Platform } from 'react-native'
import {AppNavbar, Close } from '~/components'
import {colors} from '~/styles'

Settings.propTypes = {
  onBack: PropTypes.func.isRequired,
}

export default function Settings(props) {
  return (
    <View style={styles.container}>
      <AppNavbar
          title='Home'
          leftButton={<Close onPress={props.onBack}/>}
        />
      <Text>
        Settings
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white
  }
})
