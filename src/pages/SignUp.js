import React, { useState } from 'react';
import axios from 'axios';

export default function SignUpForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      username: username,
      password: password,
    };
    axios.post('/api/signup.php', data)
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <main className="mx-20 my-auto mt-40 bg-white grid place-items-center w-600">
  <form className="flex flex-col gap-4 p-6 rounded-lg shadow-lg bg-secondary" onSubmit={handleSubmit}>
    <label className="text-lg font-semibold">Käyttäjänimi</label>
    <input type="text" value={username} onChange={e => setUsername(e.target.value)} className="border-2 border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required />
    <label className="text-lg font-semibold">Salasana</label>
    <input type="password" value={password} onChange={e => setPassword(e.target.value)} className="border-2 border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required/>
    <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg">Rekisteröidy</button>
  </form>
</main>
  );
}

