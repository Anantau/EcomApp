// src/screens/LoginScreen.tsx
import React from 'react';
import { View, Text, Button, Image } from 'react-native';
import { useAppDispatch } from '../redux/hooks';
import { login } from '../redux/slices/authSlice';

const LoginScreen = () => {
  const dispatch = useAppDispatch();

  const handleMockLogin = () => {
    dispatch(
      login({
        id: '1',
        name: 'Utkarsha Ananta',
        email: 'ua@example.com',
        photo: 'https://placehold.co/100x100',
      })
    );
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Image
        source={{ uri: 'https://placehold.co/100x100' }}
        style={{ width: 100, height: 100, borderRadius: 50, marginBottom: 20 }}
      />
      <Text style={{ fontSize: 24, marginBottom: 20 }}>Welcome to the Shop App</Text>
      <Button title="Sign in with Google (Mock)" onPress={handleMockLogin} />
    </View>
  );
};

export default LoginScreen;
