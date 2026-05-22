
import style from "./Login.module.css";
function Login() {
  //TYPESCRIPT


  return (
    // HTML
    <div className={style.conteiner}>
      <div className={style.acesso}>
        <h1>Bem-vindo!!</h1>
        <p>faça seu login</p>
    
      <input className={style.input} type="email" placeholder="email"></input>

      <input
        className={style.input}
        type="password"
        placeholder="senha"
      ></input>

      <a className={style.linkacc} href="https://earth3dmap.com/">
        esqueceu sua senha? clique aqui:
      </a>
    
      <button  className={style.button}>acessar</button>
    </div>
</div>
  );
}

export default Login;
