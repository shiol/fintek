import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import usuariosData from './usuarios.json'; // Importando os usuários do JSON
import './Login.css';

const Login = () => {
    const [cpf, setCpf] = useState('');
    const [senha, setSenha] = useState('');
    const navigate = useNavigate();

    // Função para carregar os usuários do localStorage ou do JSON
    const getUsuarios = () => {
        return JSON.parse(localStorage.getItem('usuarios')) || usuariosData;
    };

    const handleLogin = (e) => {
        e.preventDefault();
        const usuarios = getUsuarios();

        // Lógica de autenticação
        const usuario = usuarios.find(user => user.cpf === cpf && user.senha === senha);
        if (usuario) {
            navigate('/main', { state: { usuario } }); // Redireciona para a página principal
        } else {
            alert('CPF ou senha inválidos!'); // Mensagem de erro
        }
    };

    const handleRegister = () => {
        navigate('/cadastrar-usuarios'); // Redireciona para a página de cadastro
    };

    return (
        <div className="login-container">
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <input
                    type="text"
                    placeholder="CPF (somente números)"
                    value={cpf}
                    onChange={(e) => setCpf(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Senha"
                    value={senha}
                    onChange={(e) => setSenha(e.target.value)}
                    required
                />
                <button type="submit">Entrar</button>
            </form>
            <button onClick={handleRegister} className="register-button">Cadastrar Novo Usuário</button>
        </div>
    );
};

export default Login;
