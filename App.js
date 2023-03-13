import React from 'react';
import * as Splashscreen from 'expo-splash-screen';
import {useFonts, OpenSans_400Regular, OpenSans_700Bold} from '@expo-google-fonts/open-sans';

import ShopNavigator from './src/navigators/ShopNavigator';

Splashscreen.preventAutoHideAsync();

export default function App() {

  const [fontsLoaded] = useFonts ({
    OpenSans_400Regular,
    OpenSans_700Bold,
  });

React.useEffect(() => {
  if(fontsLoaded){
    Splashscreen.hideAsync();
  }},[fontsLoaded])

  if(!fontsLoaded){
    return null;
  }

  return (
    <ShopNavigator></ShopNavigator>
  );
}

