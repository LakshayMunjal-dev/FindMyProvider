import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import logo from '../assets/Logo.png';

export default function SignInScreen({ navigation, onSignIn}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo} />
      <Text style={styles.title}>Sign in to your Account</Text>
      <Text style={styles.caption}>Enter your email and password to log in</Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#888"
        value={email}
        onChangeText={setEmail}
      />
      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.passwordInput}
          placeholder="Password"
          placeholderTextColor="#888"
          secureTextEntry={!showPassword}
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
          <Ionicons name={showPassword ? 'eye-off' : 'eye'} size={22} color="#555" />
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.forgotPassword}>
        <Text style={{ color: '#007AFF' }}>Forgot Password ?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={onSignIn}>
        <Text style={styles.buttonText}>Log In</Text>
      </TouchableOpacity>


      <Text style={styles.orText}>Or</Text>

      <TouchableOpacity style={styles.googleButton}>
        <Text style={styles.googleText}>Continue with Google</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
        <Text style={styles.switchText}>
          Don’t have an account? <Text style={{ color: '#007AFF' }}>Sign Up</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, flex: 1, justifyContent: 'center', backgroundColor: '#fff' },
  logo: { width: 260, height: 80, resizeMode: 'contain', alignSelf: 'center', marginTop: -150, marginBottom: 80 },
  title: { fontSize: 24, fontWeight: '600' },
  caption: { color: '#666', marginBottom: 20 },
  input: { borderWidth: 1, borderColor: '#ccc', padding: 12, borderRadius: 8, marginBottom: 12 },
  passwordContainer: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#ccc',
    paddingHorizontal: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 12,
  },
  passwordInput: { flex: 1, paddingVertical: 12 },
  forgotPassword: { alignItems: 'flex-end', marginBottom: 20 },
  button: {
    backgroundColor: '#1E90FF',
    padding: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 15,
  },
  buttonText: { color: '#fff', fontWeight: '600', fontSize: 16 },
  orText: { textAlign: 'center', marginVertical: 10 },
  googleButton: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 25,
  },
  googleText: { fontWeight: '600' },
  switchText: { textAlign: 'center', color: '#333' },
});