import React from 'react';
import { View,StyleSheet,Text } from 'react-native';

const Header = () => {
    return (
        <View style={styles.header}>
            <Text style={styles.title}>CKmobile Task</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    header: {
        padding:30,
        backgroundColor:'blue',
        height:80
    },
    title:{
        textAlign:'center',
        color:'white',
        fontSize:20,
        fontWeight:'bold',
        fontStyle:'italic'
    }
  });
export default Header;