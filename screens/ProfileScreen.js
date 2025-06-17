import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { useLayoutEffect } from 'react';
import { StyleSheet, View,Text } from 'react-native';

const ProfileScreen = () => {

     const navigation = useNavigation();

     // Set the header dynamically
      useLayoutEffect(() => {
        navigation.setOptions({
            headerShown : true,
          title: "Profiles",
          headerStyle: { backgroundColor: '#6200ee' },
          headerTintColor: '#fff',
          headerTitleStyle: { fontWeight: 'bold' },
        });
      }, [navigation]);

    return (
        <View>
            <Text>Profile Screen</Text>
        </View>
    );
}

const styles = StyleSheet.create({})

export default ProfileScreen;
