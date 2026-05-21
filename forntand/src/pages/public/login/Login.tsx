import style from './Login.module.css'
function Login(){ //TYPESCRIPT

   return ( // HTML
<>
<h1>acessar sua conta</h1>
<input className={style.input} type="email" placeholder="email"></input>

<input className={style.input} type="password" placeholder="senha"></input>
<button className={style.button}>acessar</button>

 
</>



  );
}

 export default Login;