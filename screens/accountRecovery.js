import { View, Text, StyleSheet, SafeAreaView, StatusBar, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons'; 
import { MaterialIcons } from '@expo/vector-icons';

export default function AccountRecovery({navigation}) {
  return (

    <SafeAreaView style={styles.main}>
        <View style={styles.container}>
        <StatusBar />
    <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <AntDesign name="arrowleft" size={35} color="black" style={{ alignContent: 'flex-start', marginTop: 50, right: 30}} />
    </TouchableOpacity>    
      <Text style={{fontSize: 40, fontWeight: 'bold', color: 'black', marginTop: 90}}>Forgot Password?</Text>
      
      <View style={styles.TextInput}>
      <MaterialIcons name="alternate-email" size={24} color="black" />
      <TextInput style={styles.input} placeholder='Email Address'  keyboardType="email-address"/>
      
      </View>

      <TouchableOpacity onPress={() => navigation.navigate('Login')} style={styles.recov}>
      <AntDesign name="arrowleft" size={24} color='black'/>
            <Text style={{color: 'black', fontSize: 18, marginLeft: 5, fontWeight: 'bold'}}>Send code</Text>
        </TouchableOpacity>
    </View>
    </SafeAreaView> 
  )
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: 'white'
      },
    //   container: {
    //     alignContent: 'center',
    //     alignItems: 'center',
    //   },
    input: {
        marginLeft: 10,
    },
    TextInput: {
        justifyContent: 'flex-start',
        flexDirection: 'row',
        width: 300,
        maxWidth: '80%',
        padding: 15,
        backgroundColor: '#FFFF',
        borderRadius: 15,
        marginTop: 100,
    },
    recov: {
        justifyContent: 'flex-start',
        flexDirection: 'row',
        alignItems: 'center',
        width: 300,
        maxWidth: '80%',
        padding: 15,
        borderWidth: 2,
        borderColor: 'black',
        borderRadius: 15,
        marginTop: 10,
    },
})