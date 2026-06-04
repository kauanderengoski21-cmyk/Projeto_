import { useState } from "react";
import style from "./Cadastro.module.css";
import { toast } from "react-toastify";


function Cadastro() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [cnpj, setCnpj] = useState("");


  function exibirDados() {
    if (validarDados({ email, senha, cnpj })) {
      toast.success("Cadastro realizado com sucesso!");
      console.log("Email:", email);
      console.log("Senha:", senha);
      console.log("CNPJ:", cnpj);
      setEmail("");
      setSenha("");
      setCnpj("");
    }
  }

  function validarDados({
    email,
    senha,
    cnpj,
  }: {
    email: string;
    senha: string;
    cnpj: string;
  }) {
    if (!email.trim() || !senha.trim() || !cnpj.trim()) {
      toast.error("Por favor, preencha todos os campos!");
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error("Email inválido.");
      return false;
    }
    if (senha.length < 8) {
      toast.error("A senha deve conter pelo menos 8 caracteres.");
      return false;
    }

    const cnpjLimpo = cnpj.replace(/[^\d]/g, "");
    if (cnpjLimpo.length !== 14) {
      toast.error("CNPJ deve conter 14 dígitos.");
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
