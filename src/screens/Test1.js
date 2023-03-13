import { StyleSheet, Text, View, Button, Image } from 'react-native'
import React from 'react'

const Test1 = ({navigation}) => {
  return (
    <View style={styles.screen}>
      <Text>Test1</Text>
      <Button 
      title="Ir a Test2"
      onPress={() => {navigation.navigate('Test2')}}>
      </Button>
    </View>
  )
}

export default Test1

const styles = StyleSheet.create({
    screen:{
        flex:1,
        justifyContent: "center",
        alignItems:"center",
    },


})