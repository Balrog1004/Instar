import React from "react";
import Logo from "../public/Logo.png";
import "../Style/Login.css";

const Login = () => {
  return (
    <div className="Login">
      <img className="Logo" src={Logo} />
      <div className="input1">
        <input type="text" placeholder="아이디" style={{marginBottom:"5px"}}/>
        <input type="Password" placeholder="비밀번호"  />
        </div>
        <div className="Button">
        <button className="LoginButton">로그인</button>
        <button className="UserButton">가입하기</button>
        
      </div>
    </div>
  );
};

export default Login;
