import { StyleSheet, Text, View, Button, Image } from 'react-native'
import React from 'react'

const CategoryBreadScreen = ({navigation}) => {
  return (
    <View style={styles.screen}>
      <Text>CategoryBreadScreen</Text>
      <Button 
      title="Ir a Detalles"
      onPress={() => {navigation.navigate('Detail')}}>
      </Button>
      
      <Button 
      title="Ir a Test1"
      onPress={() => {navigation.navigate('Test1')}}>
      </Button>

      
    </View>
  )
}

export default CategoryBreadScreen

const styles = StyleSheet.create({
    screen:{
        flex:1,
        justifyContent: "center",
        alignItems:"center",
    },


})