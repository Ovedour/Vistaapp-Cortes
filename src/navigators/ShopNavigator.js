import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import CategoriesScreen from '../screens/CategoriesScreen'
import CategoryBreadScreen from '../screens/CategoryBreadScreen'
import BreadDetailScreen from '../screens/BreadDetailScreen'
import Test1 from '../screens/Test1'
import Test2 from '../screens/Test2'


const Stack = createNativeStackNavigator();

const ShopNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Home'>
                <Stack.Screen name='Home' component={CategoriesScreen}/>
                <Stack.Screen name='Products' component={CategoryBreadScreen}/>
                <Stack.Screen name='Detail' component={BreadDetailScreen}/>
                <Stack.Screen name='Test1' component={Test1}/>
                <Stack.Screen name='Test2' component={Test2}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default ShopNavigator

