import { useEffect, useState } from 'react';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // Always order of the useEffect is matter in react order is :1 getItems 2.setItems
  useEffect(() => {
    let email = localStorage.getItem('email');
    if (email) {
      setEmail(email);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('email', email);
  }, [email]);

  return (
    <>
      <h1>Login to the Portal!</h1>
      <h3>Login</h3>
      <input
        placeholder="Enter Email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <br />
      <input
        placeholder="Enter Password"
        type="password"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <br />
      <button
        onClick={() => {
          console.log('Form submitted');
        }}
      >
        Submit
      </button>
      <br />
    </>
  );
}
