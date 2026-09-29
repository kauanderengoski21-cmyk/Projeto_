import { useState } from "react";
import style from "./Login.module.css";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";
import { Service } from "../../../components/services/Service";
import type { loginInterface } from "../../../interfaces/Login";

function Usuario() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function fazerLogin() {
    if (validarDados({ email, password })) {
      toast.success("Login realizado com sucesso!");
      console.log("Email:", email);

      try {
        const respostaDoServidor: loginInterface = await Service.POST(
          "autenticacao/login",
          {
            email: email,
            senha: password,
          },
        );
        navigate("/principal");
        localStorage.setItem("token", respostaDoServidor.token);

        console.log(respostaDoServidor);
      } catch (erro) {
        console.log(erro);
      }
    }
  }

  return <></>;
}

export default Usuario;
