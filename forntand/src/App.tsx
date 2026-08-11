import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Cadastro from "./pages/public/login/Cadastro";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/public/login/Login";
import Principal from "./pages/private/principal/Principal";
import Seguranca from "./components/menu/Seguranca";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />

        <Route
          path="/principal"
          element={
            <Seguranca>
              <Principal />
            </Seguranca>
          }
        />

        <Route
          path="/cadastro"
          element={
            <Seguranca>
              <Cadastro />
            </Seguranca>
          }
        />

       
              <Route
          path="/login"
          element={
            <Seguranca>
              <Login />
            </Seguranca>
          }
        />



      </Routes>

      <ToastContainer
        autoClose={3000}
        theme="dark"
        pauseOnHover={false}
        pauseOnFocusLoss={false}
        closeOnClick
      />
    </>
  );
}

export default App;
