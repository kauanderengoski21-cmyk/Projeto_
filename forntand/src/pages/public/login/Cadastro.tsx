import { useState } from "react";
import style from "./Cadastro.module.css";

function Cadastro() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [cnpj, setCnpj] = useState("");

  function exibirDados() {
    console.log("Email:", email);
    console.log("Senha:", senha);
    console.log("CNPJ:", cnpj);
    
    if (validarDados({ email, senha, cnpj })) {
      alert("Cadastro realizado com sucesso!");
    }
  }

  function validarDados({ email, senha, cnpj }: { email: string; senha: string; cnpj: string }) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;  
    if (!emailRegex.test(email)) {
      alert("Email inválido.");
      return false;
    }
    if (senha.length < 8) {
      alert("A senha deve conter pelo menos 8 caracteres.");
      return false;
    }

    const cnpjLimpo = cnpj.replace(/[^\d]/g, ""); 
    if (cnpjLimpo.length !== 14) {
      alert("CNPJ deve conter 14 dígitos.");
      return false;
    }

    return true;
  }

  return (
    <div className={style.container}>
      <div className={style.quadrado}>
        <h1>Cadastro</h1>
        <p>Faça seu cadastro para acessar o sistema</p>
        
        <label>Seu Email</label>
        <input
          type="email"
          placeholder="Digite seu email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        
        <label>Senha</label>
        <input
          type="password"
          placeholder="Digite sua senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          required
        />
        
        <label>CNPJ</label>
        <input
          type="text"
          placeholder="Digite o cnpj"
          value={cnpj}
          onChange={(e) => setCnpj(e.target.value)}
          required
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