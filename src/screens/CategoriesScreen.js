import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'

const CategoriesScreen = ({navigation}) => {
  return (
    <View style={styles.screen}>
      <Text>CategoriesScreen</Text>
      <Button
      title="Ir a products"
      onPress={() => { navigation.navigate('Products')}}
      />
    </View>
  )
}

export default CategoriesScreen

const styles = StyleSheet.create({
    screen:{
        flex:1,
        justifyContent: "center",
        alignItems:"center",
    }


})