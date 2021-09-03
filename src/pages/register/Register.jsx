import "./register.css";

export default function Register() {
  return (
    <div className="register">
      <div className="registerWrapper">
        <div className="registerLeft">
          <h3 className="registerLogo">Bank Name</h3>
          <span className="registerDesc">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </span>
        </div>
        <div className="registerRight">
          <div className="registerBox">
            <h4 className="registerBoxTextHed"> Selamat Datang di Co-Create</h4>
            <h5 className="registerBoxTextSub"> Silahkan register, untuk memulai</h5>
            <input placeholder="Name" className="registerInput" />
            <input placeholder="Username" className="registerInput" />
            <input placeholder="Password" className="registerInput" />
            <input placeholder="Konfirmasi Password" className="registerInput" />
            <input placeholder="Topik Pilihan" className="registerInput" />
            <button className="registerButton">Register</button>
          </div>
        </div>
      </div>
    </div>
  );
}
