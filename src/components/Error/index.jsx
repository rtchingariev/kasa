function Error() {
  return (
    <div
      style={{
        display: 'block',
        width: '500px',
        margin: '0 auto',
        textAlign: 'center',
        color: '#FF6060',
      }}
      className="error-404"
    >
      <h1>404</h1>
      <p>Oups! La page que vous demandez n'existe pas.</p>
      <p>Retourner sur la page d’accueil</p>
    </div>
  );
}

export default Error;
