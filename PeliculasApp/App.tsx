import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
//import FadeInScreen from './src/screens/FadeInScreen';
import { Navigation } from './src/navigation/Navigation';
import { GradientProvider } from './src/context/GradientContext';

const AppState = ({ children }: any) => {
  return (
    <GradientProvider>
      {children}
    </GradientProvider>
  )
}

const App = () => {
  return (
    <NavigationContainer>
      <AppState>
        <Navigation />
      </AppState>
      {/* <FadeInScreen/> */}
    </NavigationContainer>
  )
}

export default App