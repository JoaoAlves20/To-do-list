import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();
    
    const handleSubmit = (event: React.SyntheticEvent) => {
        event.preventDefault();

        if (email && password) {
            navigate('/to-do-list', { state: { email, password } });
        } else {
            alert('Email and password is requireds');
        }
    }
    
    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    name="Email"
                    placeholder="Digite um e-mail..."
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    name="Password"
                    placeholder="Digite uma senha..."
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <button type="submit">Login</button>
            </form>
        </>
    )
}