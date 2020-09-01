import React, { useEffect, useState } from 'react';
import api from './services/api';

function App() {
  const[message,setMessage] = useState('');

  useEffect(()=>{
    async function test(){
      const {data:{message}} = await api.get('/');

      setMessage(message);
    }

    test();
  },[])
  return <h1>{message}</h1>;
}

export default App;
