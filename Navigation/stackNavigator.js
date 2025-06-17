import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import HomeScreen from '../screens/HomeScreen';
import DetailScreen from '../screens/DetailScreen';

const StackNavigator = () => {

    const stack = createNativeStackNavigator();
    const linking = {
        prefixes :[ 'myapp://',],
        config : {
            screens :{
                Home :'',
                Details:'details',
            },
        },
    };
    //myapp://details  = will open the DetailsScreen.
//myapp://  = will open the HomeScreen.

// Register the Scheme in Android/iOS
// For Android (inside android/app/src/main/AndroidManifest.xml):
// xml
// Copy
// Edit
// <intent-filter>
//   <action android:name="android.intent.action.VIEW" />
//   <category android:name="android.intent.category.DEFAULT" />
//   <category android:name="android.intent.category.BROWSABLE" />
//   <data android:scheme="myapp" />
// </intent-filter>



// For iOS, update ios/[project]/Info.plist:
// xml
// Copy
// Edit
// <key>CFBundleURLTypes</key>
// <array>
//   <dict>
//     <key>CFBundleURLSchemes</key>
//     <array>
//       <string>myapp</string>
//     </array>
//   </dict>
// </array>

//deep link check cmd : adb shell am start -W -a android.intent.action.VIEW -d "myapp://details?name=Alice" com.navigationexample

    return (
            <stack.Navigator initialRouteName='Home'>
                <stack.Screen name='Home' component={HomeScreen} />
                <stack.Screen name='Details' component={DetailScreen} /> 
            </stack.Navigator>
            
    );
}

const styles = StyleSheet.create({})

export default StackNavigator;
