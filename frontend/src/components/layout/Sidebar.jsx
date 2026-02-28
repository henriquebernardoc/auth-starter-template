import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Sidebar = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user'));

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/login');
  };

  return (
    <aside style={{ width: '200px', background: '#f4f4f4', padding: '1rem', minHeight: 'calc(100vh - 160px)' }}>
      <nav>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li style={{ marginBottom: '1rem' }}><Link to="/dashboard">Dashboard</Link></li>
          {user && (
            <li style={{ marginBottom: '1rem' }}>
              <strong>Olá, {user.nome}</strong><br />
              <small>{user.perfil}</small>
            </li>
          )}
          <li><button onClick={handleLogout} style={{ cursor: 'pointer', background: 'none', border: '1px solid #ccc', padding: '5px 10px' }}>Sair</button></li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
