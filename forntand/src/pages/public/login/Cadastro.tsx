import style from "./Cadastro.module.css";

function Cadastro() {
  return (
    <div className={style.container}>
      <div className={style.quadrado}>
        <h1>Cadastro </h1>
        <p>Faça seu cadastro para acessar o sistema </p>
        <label>Seu email</label>
        <input type="email" placeholder="Digite seu email" />
        <label>Senha</label>
        <input type="password" placeholder="Digite sua senha" />
        <label>CNPJ</label>
        <input type="text" placeholder="Digite o cnpj" />
        <button>Cadastrar</button>
        <a href="# ">esqueci minha senha</a>
        <a href="#">mais informações</a>
        <a href="#">pagina de login</a>
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
