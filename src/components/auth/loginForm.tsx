import React, { useState } from 'react';
import { useAuth } from './auth-context-provider';
import { useNavigate } from 'react-router-dom';
import "../../css/login.css";

const Login: React.FC = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleLogin = async (event: React.FormEvent) => {
        event.preventDefault();
        try {
            await login(username, password);
            setMessage('Login bem-sucedido!');
            navigate("/home");
        } catch (error) {
            setMessage('Usuário ou senha inválidos. Tente novamente.');
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100">
            <div className="w-full max-w-md p-8 bg-white rounded-xl shadow-lg">
                <h2 className="text-4xl font-bold text-center mb-6 text-gray-800">Login</h2>
                <form onSubmit={handleLogin} className="space-y-6">
                    <input
                        type="text"
                        placeholder="Usuário"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300"
                    />
                    <input
                        type="password"
                        placeholder="Senha"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300"
                    />
                    <button
                        type="submit"
                        className="w-full px-4 py-3 bg-blue-500 text-white font-semibold rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-transform duration-300 transform hover:scale-105"
                    >
                        Entrar
                    </button>
                    <p className="text-center text-gray-600">
                        Não possui conta?
                        <a href="/register" className="text-blue-500 underline hover:text-blue-700 ml-1 transition-colors duration-200">
                            Registre-se
                        </a>
                    </p>
                </form>
                {message && <p className="mt-4 text-center text-red-500 font-medium">{message}</p>}
            </div>
        </div>
    );
};

export default Login;