import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

export default function LandingScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={{fontSize: 30, fontWeight: 'bold', color: '#7F00FF'}}>Abzgang</Text>
      <Text style={{fontSize: 18,}}> </Text>
      

      <TouchableOpacity onPress={() => navigation.navigate('Login')} style={{justifyContent: 'center', alignItems: 'center'}}>
            <Text style={styles.sign}>Log In</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Register')} style={{justifyContent: 'center', alignItems: 'center'}}>
            <Text style={styles.sign1}>Sign Up</Text>
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
    },
    logo: {
        width: 300,
        height: 300,
    },
    sign: {
        padding: 15,
        backgroundColor: '#7F00FF',
        justifyContent: 'center',
        textAlign: 'center',
        color: 'white',
        marginTop: 15,
        marginBottom: 2,
        width: 200,
        borderRadius: 10,
        fontSize: 20
    },
    sign1: {
        padding: 15,
        justifyContent: 'center',
        textAlign: 'center',
        borderWidth: 2,
        borderColor: 'black',
        marginBottom: 2,
        width: 200,
        borderRadius: 10,
        color: 'black',
        marginTop: 15,
        fontSize: 20
    },

})