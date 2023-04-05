import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate} from 'react-router-dom';

const URL = "http://localhost:3000/signup.php";

export default function SignUp() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    axios.post(URL, {
      username: username,
      password: password
    })
      .then((response) => {
        console.log(response);
        navigate("/Login")
      })
      .catch((error) => {
        console.log(error);
      });

  }

  return (
    <div>
            <main className="mx-20 mb-auto mt-40 bg-white grid content-center justify-center w-600">
                <form className="flex flex-col space-y-2 max-w-sm mx-auto mt-8 p-4 rounded-md shadow-md bg-secondary w-96" onSubmit={handleSubmit}>
                    <label className="font-semibold text-gray-800"> 
                        Username:
                        <input className="mt-1 block w-full border rounded-md py-2 px-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent" type="text" value={username} onChange={(e) => setUsername(e.target.value)} required/>
                    </label>
                    <label className="font-semibold text-gray-800">
                        Password:
                        <input className="mt-1 block w-full border rounded-md py-2 px-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
                    </label>
                    <button className="bg-secondary hover:bg-third text-white font-bold py-2 px-4 border rounded" type="submit">Rekisteröidy</button>
                </form>
            </main>
        </div>
  );
}



