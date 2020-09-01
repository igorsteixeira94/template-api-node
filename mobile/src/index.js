import './config/ReactotronConfig';
import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import api from './services/api';
// import { Container } from './styles';

export default function src() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    async function test() {
      const {
        data: { message },
      } = await api.get('/');

      console.log(message);
      setMessage(message);
    }

    test();
  }, []);
  return (
    <View>
      <Text>{message}</Text>
    </View>
  );
}
