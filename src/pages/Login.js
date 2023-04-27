import axios from 'axios';
import { useState } from 'react';
import { useNavigate, Link} from 'react-router-dom';
import Cookies from 'js-cookie';
import hostURL from '../Constants';

const URL = hostURL + "/api/login.php";

export default function Login() {
    

    const navigate = useNavigate();
    
    

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        const loginData = {
            username: username,
            password: password
        };

        axios.post(URL, loginData)
            .then(response => {
                console.log(response.data)
                if (response.data.success) {
                    const token = response.data.token;
                    const role = response.data.role
                    Cookies.set('token', token)
                    Cookies.set('role', role)

                    setUsername('');
                    setPassword('');
                    navigate("/")
                } else {
                    // Display an error message
                    alert(response.data.message);
                }
            })
            .catch(error => {
                console.error(error);
            });
    };


    return (
        <div>
            <main className="mx-20 mb-auto mt-40 bg-white grid content-center justify-center w-600">
                <form className="flex flex-col space-y-2 max-w-sm mx-auto mt-8 p-4 rounded-md shadow-md bg-secondary w-96" onSubmit={handleSubmit}>
                    <label className="font-semibold text-gray-800">
                        Käyttäjänimi:
                        <input className="mt-1 block w-full border rounded-md py-2 px-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent" type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
                    </label>
                    <label className="font-semibold text-gray-800">
                        Salasana:
                        <input className="mt-1 block w-full border rounded-md py-2 px-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                    </label>
                    <button className="bg-secondary hover:bg-third text-white font-bold py-2 px-4 border rounded" type="submit">Kirjaudu sisään</button>
                    <label>Ei tunnuksia?</label>
                    <Link to='/SignUp'>
                        <button className="bg-secondary hover:bg-third text-white font-bold py-2 px-4 border rounded">Luo tunnus tästä</button>
                    </Link>
                </form>
            </main>
        </div>
    );
}


