import { useState } from "react";
import style from "./Cadastro.module.css";
import { toast } from "react-toastify";
import { useNavigate, Link } from "react-router-dom";

function Cadastro() {
  const navigate = useNavigate();
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
      setTimeout(() => navigate("/login"), 2000);
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

        <label htmlFor="email">Seu Email</label>
        <input
          id="email"
          type="email"
          placeholder="Digite seu email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label htmlFor="senha">Senha</label>
        <input
          id="senha"
          type="password"
          placeholder="Digite sua senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          required
        />

        <label htmlFor="cnpj">CNPJ</label>
        <input
          id="cnpj"
          type="text"
          placeholder="Digite o cnpj"
          value={cnpj}
          onChange={(e) => setCnpj(e.target.value)}
          required
        />

        <button onClick={exibirDados}>Cadastrar</button>

        <div className={style.linksRodape}>
          <a href="#">mais informações</a>
          <Link to="/login">voltar para o login</Link>
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
