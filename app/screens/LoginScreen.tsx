import { useRouter } from 'expo-router';
import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import { auth } from '../../firebase';

export default function LoginScreen() {
  const [email, setEmail] = useState(''); //email = the current value, setEmail = the function to update it, '' = starts empty (When user types → setEmail updates → screen re-renders with new valu)
  const [password, setPassword] = useState('');
  const router = useRouter();
  const handleLogin = async () => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    router.replace('/screens/DashboardScreen');
    } catch (error: any) {
        alert(error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Spendly 💰</Text>

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

      <Button mode="contained" style={styles.button} onPress={handleLogin}>
        Login
      </Button>

      <TouchableOpacity onPress={() => router.push('/screens/RegisterScreen')}>
        <Text style={styles.link}>Don't have an account? Register</Text>
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