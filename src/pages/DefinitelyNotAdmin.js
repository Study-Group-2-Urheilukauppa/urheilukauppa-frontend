import axios from 'axios';
import { useState } from 'react';

function LoginForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const loginData = {
            username: username,
            password: password
        };

        axios.post('/login.php', loginData)
            .then(response => {
                if (response.data.success) {
                    // Redirect the user to a different page
                    window.location.href = '/dashboard';
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
                <form className='flex flex-col' onSubmit={handleSubmit}>
                    <label>
                        Username:
                        <input type="text" value={username} onChange={handleUsernameChange} />
                    </label>
                    <label>
                        Password:
                        <input type="password" value={password} onChange={handlePasswordChange} />
                    </label>
                    <button type="submit">Log in</button>
                </form>
            </main>
        </div>
    );
}

export default LoginForm;
