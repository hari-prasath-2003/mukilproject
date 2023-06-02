import "./formInput.css";
const Login = () => {
  return (
    <>
      <form>
        <h1>Login</h1>
        <div className="formInput">
          <input type="email" placeholder="email" />
        </div>
        <div className="formInput">
          <input type="password" placeholder="password" />
        </div>
        <button style={{ marginBottom: "8px" }}>Login</button>
        <p>or</p>
        <button>Register</button>
      </form>
    </>
  );
};

export default Login;
