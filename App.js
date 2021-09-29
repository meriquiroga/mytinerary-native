import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
/* import Navigator from './navigation/MainNavStack' */
import Navigator from './navigation/MainNavDrawer'

const App = () => {
  return (
    <NavigationContainer>
    <Navigator />
    </NavigationContainer>
  );
}

export default App

/* #0b3f78
#1aa5bc */