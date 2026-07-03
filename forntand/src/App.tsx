import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Cadastro from "./pages/public/login/Cadastro";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/public/login/Login";
import Principal from "./pages/private/principal/Principal";


function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/principal" element={<Principal />} />
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
