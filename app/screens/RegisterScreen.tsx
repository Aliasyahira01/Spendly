import { useRouter } from 'expo-router';
import { createUserWithEmailAndPassword } from 'firebase/auth'; //Firebase function that creates a new user
import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import { auth } from '../../firebase'; //our Firebase auth instance from firebase.js

export default function RegisterScreen() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  //database logic to create a new user with email and password
  const handleRegister = async () => {
    try {
        await createUserWithEmailAndPassword(auth, email, password);
        router.replace('/screens/DashboardScreen');
    } catch (error: any) {
        alert(error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create Account 🎉</Text>

      <TextInput
        label="Full Name"
        value={name}
        onChangeText={setName}
        mode="outlined"
        style={styles.input}
      />

      <TextInput
        label="Email"
        value={email}
        onChangeText={setEmail}
        mode="outlined"
        style={styles.input}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <TextInput
        label="Password"
        value={password}
        onChangeText={setPassword}
        mode="outlined"
        style={styles.input}
        secureTextEntry
      />

      <Button mode="contained" style={styles.button} onPress={handleRegister}> {/* call function firebase save */}
        Register
      </Button>

      <TouchableOpacity onPress={() => router.back()}> {/* route back to previous screen */}
        <Text style={styles.link}>Already have an account? Login</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 24,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 32,
    textAlign: 'center',
  },
  input: {
    marginBottom: 16,
  },
  button: {
    marginTop: 8,
    paddingVertical: 6,
  },
  link: {
    marginTop: 16,
    textAlign: 'center',
    color: '#6200ee',
  },
});