import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import FadeInScreen from './src/screens/FadeInScreen';
//import { Navigation } from './src/navigation/Navigation';

const App = () => {
  return (
    <NavigationContainer>
      {/* <Navigation /> */}
      <FadeInScreen/>
    </NavigationContainer>
  )
}

export default App