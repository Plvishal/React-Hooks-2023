// import React from 'react';
import { useEffect, useState } from 'react';

export default function useLocalStorege() {
    const [email, setEmail] = useState('');
  useEffect(() => {
    let email = localStorage.getItem('email');
    if (email) {
      setEmail(email);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('email', email);
  }, [email]);
  return { email, setEmail };
}
