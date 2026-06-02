import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Cadastro from "./pages/public/cadastro/Cadastro";


function App() {

  return (
    <>

      <ToastContainer
        autoClose={3000}
        theme="dark"
        pauseOnHover={false}
        pauseOnFocusLoss={false}
        closeOnClick
      />
      <Cadastro></Cadastro>
    </>
  );
}
export default App;
