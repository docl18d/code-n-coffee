handleAuth = () => {
  const { isLoggedIn } = this.state;

  if(isLoggedIn) {
    // Do logout
  } else {
    // Do login
  }
}

render() {
  const { isLoggedIn } = this.state;

  return (
    <button onClick={handleAuth}>
      {isLoggedIn ? 'Logout' : 'Login'}
    </button>
  );
}