// screens/DetailsScreen.js
import React, { useLayoutEffect } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

const DetailsScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { user } = route.params;

  // Set the header dynamically
  useLayoutEffect(() => {
    navigation.setOptions({
      title: user.name,
      headerStyle: { backgroundColor: '#6200ee' },
      headerTintColor: '#fff',
      headerTitleStyle: { fontWeight: 'bold' },
    });
  }, [navigation, user.name]);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Details Screen</Text>
      <Text style={styles.text}>Name: {user.name}</Text>
      <Text style={styles.text}>Age: {user.age}</Text>
        <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
            <Text style={styles.text}>Go Back</Text>
        </TouchableOpacity>

 <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home', { fromDetails: true })}>
            <Text style={styles.text}>Go Back with Flag</Text>
        </TouchableOpacity>
      
      
    </View>
  );
};

const styles =StyleSheet.create({
    container: {flex:1 ,justifyContent:'center'},
    text : {textAlign:'center',fontWeight:'bold',padding:10},
    button :{backgroundColor:'#6200ee',padding : 5,margin:20, fontSize:15,fontWeight:'bold',borderColor:'gray',borderRadius:5,borderWidth:1}
});

export default DetailsScreen;
