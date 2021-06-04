import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  const [user, setUser]=useState("Alan")
  const [fruit, setFruit]= useState({name:"orange", price:5})
  const pressHandler = ()=>{
    setUser("Peter")
    setFruit({name:"Apple",price: 8})
  }
  return (
    <View style={styles.container}>
      <Text style={styles.mytext}>{user} is eating {fruit.name}, which cost ${fruit.price}.</Text>
      <View style ={styles.buttonstyle}>
        <Button title = "Change"
        onPress={pressHandler}
        /></View> 
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonstyle:{
    marginTop: 30
  },
  mytext:{
    fontSize:40
  }
});
