import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import './Main.css';

const Main = () => {
    const location = useLocation();
    const { usuario } = location.state || {}; // Obtendo os dados do usuário

    if (!usuario) {
        return <div>Usuário não encontrado.</div>; // Mensagem de erro caso não encontre o usuário
    }

    return (
        <div className="main-container">
            <h2>Bem-vindo, {usuario.nome}!</h2>
            <p><strong>CPF:</strong> {usuario.cpf}</p>
            <p><strong>Data de Nascimento:</strong> {usuario.dataNascimento}</p>
            <p><strong>Agência:</strong> 1234</p>
            <p><strong>Número da Conta:</strong> 56789</p>
            <p><strong>Saldo:</strong> R$ 1000,00</p>

            <div className="buttons-container">
                <Link to="/transferir" className="action-button">Transferir Dinheiro (Pix)</Link>
                <Link to="/cadastrar-chaves" className="action-button">Cadastrar Chaves Pix</Link>
                <Link to="/visualizar-chaves" className="action-button">Visualizar Chaves Pix</Link>
                <Link to="/extrato" className="action-button">Extrato da Conta</Link>
                <Link to="/" className="logout-button">Logoff</Link>
            </div>
        </div>
    );
};

export default Main;
