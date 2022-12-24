import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'

const AnalysisScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>AnalysisScreen</Text>

      {/*<Button title='Home' onPress={() => navigation.navigate('Home')} />*/}
    </View>
  )
}

export default AnalysisScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
},
})