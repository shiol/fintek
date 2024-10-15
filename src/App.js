import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Login';
import Main from './Main';
import CadastroUsuarios from './CadastroUsuarios'; // Se você tiver esse componente
import './App.css';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/main" element={<Main />} />
                <Route path="/cadastrar-usuarios" element={<CadastroUsuarios />} />
            </Routes>
        </Router>
    );
};

export default App;
