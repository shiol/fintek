import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import usuariosData from './usuarios.json'; // Importando os dados de usuários
import './CadastroUsuarios.css';

const CadastroUsuarios = () => {
    const [nome, setNome] = useState('');
    const [cpf, setCpf] = useState('');
    const [dataNascimento, setDataNascimento] = useState('');
    const [senha, setSenha] = useState('');
    const navigate = useNavigate();

    // Função para salvar os dados do novo usuário
    const handleCadastro = (e) => {
        e.preventDefault();

        // Verificando se o CPF já existe
        const usuarioExistente = usuariosData.find(user => user.cpf === cpf);
        if (usuarioExistente) {
            alert('Este CPF já está cadastrado!');
            return;
        }

        // Criando o novo usuário
        const novoUsuario = {
            nome,
            cpf,
            dataNascimento,
            senha
        };

        // Simulando a gravação no arquivo JSON com localStorage
        let usuarios = JSON.parse(localStorage.getItem('usuarios')) || usuariosData;
        usuarios.push(novoUsuario);
        localStorage.setItem('usuarios', JSON.stringify(usuarios));

        // Redirecionando de volta para a página de login
        navigate('/');
    };

    const handleCancelar = () => {
        navigate('/'); // Retorna à tela de login
    };

    return (
        <div className="cadastro-container">
            <h2>Cadastrar Novo Usuário</h2>
            <form onSubmit={handleCadastro}>
                <input
                    type="text"
                    placeholder="Nome"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    required
                />
                <input
                    type="text"
                    placeholder="CPF (somente números)"
                    value={cpf}
                    onChange={(e) => setCpf(e.target.value)}
                    required
                />
                <input
                    type="date"
                    placeholder="Data de Nascimento"
                    value={dataNascimento}
                    onChange={(e) => setDataNascimento(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Senha"
                    value={senha}
                    onChange={(e) => setSenha(e.target.value)}
                    required
                />
                <button type="submit">Cadastrar</button>
                <button type="button" onClick={handleCancelar} className="cancel-button">Cancelar</button>
            </form>
        </div>
    );
};

export default CadastroUsuarios;
