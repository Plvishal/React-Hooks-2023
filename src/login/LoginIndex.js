import React from 'react';
import Login from './Login';
import Reset from './Reset';
import { useState } from 'react';

function LoginIndex() {
  const [form, setForm] = useState('login');

  return (
    <div className="App">
      <h1>Welcome!</h1>
      {form === 'login' ? <Login /> : <Reset />}
      <button
        onClick={() => {
          setForm(form === 'login' ? 'reset' : 'login');
        }}
      >
        {form === 'login' ? 'Forgot Password' : 'Back to Login'}
      </button>
    </div>
  );
}

export default LoginIndex;
