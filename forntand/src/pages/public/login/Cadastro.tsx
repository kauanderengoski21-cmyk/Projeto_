import { useState } from "react";
import style from "./Cadastro.module.css";

function Cadastro() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [cnpj, setCnpj] = useState("");

  const exibirDados = () => {
    console.log("Email:", email);
    console.log("Senha:", senha);
    console.log("CNPJ:", cnpj);
  };

  return (
    <div className={style.container}>
      <div className={style.quadrado}>
        <h1>Cadastro </h1>
        <p>Faça seu cadastro para acessar o sistema </p>
        <label>Seu Email</label>
        <input
          type="email"
          placeholder="Digite seu email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Senha</label>
        <input
          type="password"
          placeholder="Digite sua senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />
        <label>CNPJ</label>
        <input
          type="text"
          placeholder="Digite o cnpj"
          value={cnpj}
          onChange={(e) => setCnpj(e.target.value)}
        />
        <button onClick={exibirDados}>Cadastrar</button>
        <div className={style.linksRodape}>
          <a href="#">mais informações</a>
          <a href="#">página de login</a>
        </div>
      </div>

      <img
        src="https://www.gstatic.com/recaptcha/api2/logo_48.png"
        alt="Validação"
        className={style.captchaBadge}
      />
    </div>
  );
}

export default Cadastro;
