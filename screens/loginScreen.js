import React from 'react';
import { View, Text, SafeAreaView, StyleSheet, TextInput, TouchableOpacity, Image, ToastAndroid } from 'react-native';
import { AntDesign, MaterialIcons } from '@expo/vector-icons';
import fetchServices from '../component/services/fetchServices';

export default function LoginScreen({ navigation}) {

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [errors, setErrors] = React.useState({});
  const [loading, setLoading] = React.useState(false);

  const showToast = (message = "Something went wrong") => {
    ToastAndroid.show(message, 3000);
  }
  const handleLogin = async () => {
    try {
      setLoading(true);
  
      if (email === '') {
        setErrors((prevErrors) => ({ ...prevErrors, email: true }));
        return false;
      }
  
      if (password === '') {
        setErrors((prevErrors) => ({ ...prevErrors, password: true }));
        return false;
      }
  
      const url = 'http://192.168.1.4/api/v1/login';
      const data = {
        email,
        password,
      };
  
      const result = await fetchServices.postData(url, data);
  
      if (result?.message != null) {
        showToast(result?.message);
      } else {
        console.log("Before navigation");
        setTimeout(() => {navigation.navigate('Home');}, 1000);
        console.log("After navigation");
      }
    } catch (e) {
      console.log(e.toString());
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={styles.main}>
      <View style={styles.container}>
        <Text style={{ fontSize: 50, justifyContent: 'center', alignItems: 'center', textAlign: 'center', marginBottom: 20,color: 'black' }}>
          Log In
        </Text>

        <View style={styles.TextInput}>
          <MaterialIcons name="alternate-email" size={24} color="black" />
          <TextInput
            mode="outlined"
            style={styles.input}
            placeholder="Email"
            label="Email"
            value={email}
            onChangeText={setEmail}
            error={errors?.name}
          />
        </View>

        <View style={styles.TextInput}>
          <AntDesign name="lock" size={24} color="black" />
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry={true}
            value={password}
            onChangeText={setPassword}
            error={errors?.password}
          />
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('Recovery')} style={{ justifyContent: 'center', alignItems: 'center' }}>
          <Text style={styles.forgot}>Forgot Password?</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleLogin} style={{ justifyContent: 'center', alignItems: 'center' }}>
          <Text style={styles.sign}>Log In</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Register')} style={{ justifyContent: 'center', alignItems: 'center' }}>
          <Text style={styles.sign1}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  },
  container: {
    alignContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 300,
    height: 300,
  },
  TextInput: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    width: 280,
    maxWidth: '80%',
    padding: 15,
    paddingBottom: 8,
    marginBottom: 20,
    backgroundColor: 'white',
    borderRadius: 30
  },
  input: {
    flex: 1,
    marginLeft: 10,
    paddingVertical: 0,
  },
  forgot: {
    color: '#7F00FF',
    textDecorationLine: 'underline',
  },
  sign: {
    padding: 15,
    backgroundColor: '#7F00FF',
    justifyContent: 'center',
    textAlign: 'center',
    marginTop: 15,
    marginBottom: 15,
    width: 200,
    borderRadius: 10,
    fontSize: 20,
    color: '#FFFF',
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
    fontSize: 20,
  },
});
