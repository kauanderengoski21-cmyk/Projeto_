import { useState } from "react";
import style from "./Login.module.css";
import { toast } from "react-toastify";
import type { LoginInterface } from "../../../interfaces/Login";
import type { RespostaServidor } from "../../../interfaces/RespostaServidor";

function Login() {
  const [email, setEmail] = useState<string>("teste");
  const [password, setPassword] = useState<string>("");

  const [erro, setErro] = useState<string>("");

  async function exibirEmail() {
    if (validarDados({ email, password })) {
      toast.success("Login realizado com sucesso!");
      console.log("Email:", email);

      try {
        //contrato que o backend espera do front end
        const parametro: LoginInterface = {
          email: email,
          senha: password,
        };

        //contrato que o front end espera do backend
        const respostaDoServidor: RespostaServidor = await Service.POST(
          "efetuarLogin",
          parametro,
        );

        console.log(respostaDoServidor);
      } catch (erro) {
        console.log(erro);
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

        {erro && <span className={style.erroMensagem}>{erro}</span>}
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
