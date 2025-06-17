// screens/HomeScreen.js
import React, { useLayoutEffect } from 'react';
import { View, Text, TouchableOpacity,StyleSheet } from 'react-native';
import { useNavigation, useFocusEffect, useRoute } from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const user = { name: 'Alice Smith', age: 30 ,designation : 'Software Engineer'};

  // 1️⃣ Dynamically set the header title
  useLayoutEffect(() => {
    navigation.setOptions({
      title: user.name ? `Welcome, ${user.name}` : 'Home',
      headerStyle: { backgroundColor: '#0d47a1' },
      headerTintColor: '#fff',
      headerTitleStyle: { fontWeight: 'bold' },
    });
  }, [navigation, user.name]);

  // 2️⃣ Detect if returned from DetailsScreen
  useFocusEffect(
    React.useCallback(() => {
      if (route.params?.fromDetails) {
        alert('Returned from Details Screen!');
      }
    }, [route.params])
  );

  // 3️⃣ UI and navigation button
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home Screen</Text>
       <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Details', { user })}>
                  <Text style={styles.text}>Go to Details</Text>
              </TouchableOpacity>
      
     
    </View>
  );
};
const styles =StyleSheet.create({
    container: { flex: 1, justifyContent :'center',padding:10,margin :5   },
    text : {textAlign:'center',fontSize:15,fontWeight:'bold',padding:10},
    button :{backgroundColor:'#6200ee',padding : 5,margin:20, fontSize:15,fontWeight:'bold',borderColor:'gray',borderRadius:5,borderWidth:1}
});
export default HomeScreen;
