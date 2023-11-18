// import { useEffect, useState } from 'react';
import useLocalStorege from './useLocalStorege';

export default function Reset() {
  // const [email, setEmail] = useState('');
  // useEffect(() => {
  //   let email = localStorage.getItem('email');
  //   if (email) {
  //     setEmail(email);
  //   }
  // }, []);
  // useEffect(() => {
  //   localStorage.setItem('email', email);
  // }, [email]);
  const { email, setEmail } = useLocalStorege();
  return (
    <>
      <h3>Reset Password for</h3>
      <input
        placeholder="Enter Email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <br />
      <button
        onClick={() => {
          // Logic to send a new password follows
        }}
      >
        Submit
      </button>
      <br />
    </>
  );
}
