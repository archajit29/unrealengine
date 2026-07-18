import BackgroundVideo from "./components/BackgroundVideo";

export default function App() {
  return (
    <div>
      <BackgroundVideo />

      <div className="content">
        <div className="auth-box">
          <h1>Welcome</h1>
          <p>Login / Sign Up</p>

          <input type="text" placeholder="Email" />
          <input type="password" placeholder="Password" />

          <button>Login</button>
          <button className="secondary">Sign Up</button>
        </div>
      </div>
    </div>
  );
}