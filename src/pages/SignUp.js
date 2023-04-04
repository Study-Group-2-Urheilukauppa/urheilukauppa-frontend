import React, { useState } from 'react';
import axios from 'axios';

const URL = "http://localhost:3000/signup.php";

export default function SignUp() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    
    axios.post(URL, {
      username: username,
      password: password
    })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });

  }

  return (
    <main className="mx-20 mb-auto mt-40 bg-secondary grid content-center justify-center w-600">
      <form className='flex flex-col' onSubmit={handleSubmit}>
        <label>Käyttäjätunnus</label>
        <input type="text" name="username" value={username} onChange={(e) => setUsername(e.target.value)} required />
        <label>Salasana</label>
        <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <button type="submit">Rekisteröidy</button>
      </form>
    </main>
  );
}



