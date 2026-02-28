import React from 'react';

const Dashboard = () => {
  const user = JSON.parse(localStorage.getItem('user'));

  return (
    <div>
      <h2>Bem-vindo ao HelpCup</h2>
      <p>Este é o seu painel de controle.</p>
      <div style={{ marginTop: '2rem', padding: '1rem', border: '1px solid #ddd', borderRadius: '8px' }}>
        <h3>Informações do Usuário</h3>
        <p><strong>Nome:</strong> {user?.nome}</p>
        <p><strong>E-mail:</strong> {user?.email}</p>
        <p><strong>Perfil:</strong> {user?.perfil}</p>
      </div>
    </div>
  );
};

export default Dashboard;
