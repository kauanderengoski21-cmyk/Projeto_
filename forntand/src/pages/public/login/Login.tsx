import { useState } from "react";
import style from "./Login.module.css";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";
import { Service } from "../../../components/services/Service";


function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function fazerLogin() {
    if (validarDados({ email, password })) {
      toast.success("Login realizado com sucesso!");
      console.log("Email:", email);
      navigate("/home");
      
      try{  
    const  respostaDoServidor = await Service.GET("efetuarLogin", {
        email: email,
        senha: password,
      });

      console.log (respostaDoServidor);
    
    } catch (erro) {
      console.log (erro);
    }
    }
  }
  function validarDados({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) {
    if (!email.trim() || !password.trim()) {
      toast.error("Por favor, preencha todos os campos!");
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error("Email inválido.");
      return false;
    }

    if (password.length < 6) {
      toast.error("A senha deve conter pelo menos 6 caracteres.");
      return false;
    }

    return true;
  }

  return (

    
    <div className={style.conteiner}>
      <div className={style.acesso}>
        <h1>Login</h1>
        <p>Faça seu login para acessar o sistema</p>

        <label htmlFor="email">Seu Email</label>
        <input
          id="email"
          className={style.input}
          type="email"
          placeholder="Digite seu email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label htmlFor="password">Senha</label>
        <input
          id="password"
          className={style.input}
          type="password"
          placeholder="Digite sua senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button className={style.button} onClick={fazerLogin}>
          Acessar
        </button>

        <div className={style.linksRodape}>
          <a className={style.linkacc} href="https://earth3dmap.com/">
            Esqueceu sua senha?
          </a>
          <Link to="/cadastro">Cadastre-se</Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
