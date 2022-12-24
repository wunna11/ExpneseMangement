import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { FloatingBtn } from '../../../components/Button/FloatingBtn'
import { BG } from '../../../utils/styles/color'

const HomeScreen = ({ navigation }) => {

  return (
    <View style={styles.container}>
     
      <View style={styles.btn}>
        <FloatingBtn title='Create' onPress={() => navigation.navigate('Create')} />
      </View>
      
      
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BG,
  },

  btn: {
    position: 'absolute',
    bottom: 40,
    right: 30
  }
})