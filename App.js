import React from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './Navigation/stackNavigator';
import TabNavigator from './Navigation/tabNavigator';

const App = () => {

//   const linking = {
//   prefixes: ['myapp://'],
//   config: {
//     screens: {
//       HomeTab: {
//         screens: {
//           Home: '',
//           Details: 'details',
//         },
//       },
//       Profile: 'profile',
//     },
//   },
// };
  return (  
            <NavigationContainer  >
              <TabNavigator/> 
           </NavigationContainer>

 );
}

const styles = StyleSheet.create({})

export default App;
