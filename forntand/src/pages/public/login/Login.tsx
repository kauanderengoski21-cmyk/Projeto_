import { useState } from "react";
import style from "./Login.module.css";

function Login() {
  const [email, setEmail] = useState<string>("teste");
  const [password, setPassword] = useState<string>("");
  
  const [erro, setErro] = useState<string>("");

  function exibirEmail() {
    
    if (!email.includes("@") || password.length < 6) {
      setErro("Email ou senha incorretos.");
      return;
    }

    setErro(""); 
    console.log(email);
  }

  return (
    <div className={style.conteiner}>
      <div className={style.acesso}>
        <h1>Bem-vindo!!</h1>
        <p>faça seu login</p>
    
        <input  
          className={style.input} 
          type="email" 
          placeholder="email"  
          value={email}
          onChange={(html) => setEmail(html.target.value)}
        />
    
        <input
          className={style.input}
          type="password"
          placeholder="senha"
          value={password}
          onChange={(html) => setPassword(html.target.value)}
        />

        
        {erro  && <span className={style.erroMensagem}>{erro}</span>}
        <a className={style.linkacc} href="https://earth3dmap.com/">
          esqueceu sua senha? clique aqui:
        </a>
    
        <button className={style.button} onClick={exibirEmail}>
          acessar
        </button>
      </div>
    </div>
  );
}

export default Login;
