import { StyleSheet, Text, View, Button, Image } from 'react-native'
import React from 'react'

const Test2 = () => {
  return (
    <View>
      <Image 
      style={styles.cart}
      source={require("../../assets/cart.jpg")} 
      
      ></Image>
    </View>
  )
}

export default Test2

const styles = StyleSheet.create({
    cart: {
        width: 100,
        height: 100,
        margin: 10,        
    }

})

