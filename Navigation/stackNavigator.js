import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import HomeScreen from '../screens/HomeScreen';
import DetailScreen from '../screens/DetailScreen';

const StackNavigator = () => {

    const stack = createNativeStackNavigator();
    return (
        <NavigationContainer >
            <stack.Navigator>
                <stack.Screen name='Home' component={HomeScreen} />
                <stack.Screen name='Details' component={DetailScreen} /> 
            </stack.Navigator>
            
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({})

export default StackNavigator;
