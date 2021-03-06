import { Link } from "react-router-dom";
import "./login.css";

export default function Login() {
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Bank Name</h3>
          <span className="loginDesc">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <h4 className="loginBoxTextHed"> Selamat Datang di Co-Create</h4>
            <h5 className="loginBoxTextSub"> Silahkan login, untuk memulai</h5>
            <input placeholder="Username" className="loginInput" />
            <input placeholder="Password" className="loginInput" />
            <Link to="member/beranda-project">
              <button className="loginButton">Masuk</button>
            </Link>
            <span className="loginForgot">Belum punya akun?</span>
            <Link to="register" style={{ marginLeft: "150px" }}>
              <button type="" className="loginRegisterButton">
                Register
              </button>
            </Link>
            <span className="loginForgot">Anda adalah admin?</span>
            <Link to="login-admin" style={{ marginLeft: "150px" }}>
              <button type="" className="loginRegisterButton">
                Login Admin
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
