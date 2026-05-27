import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Cadastro from "./pages/public/login/Cadastro";
import { Route, Routes, Navigate } from "react-router-dom";
import Login from "./pages/public/login/Login";


function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
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
