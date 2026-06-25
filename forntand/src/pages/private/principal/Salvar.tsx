import { Service } from "../../../components/services/Service";

function Salvar() {
  const [veiculos, setVeiculos] = useState<Caminhoes[]>([]);
  const [pesquisa, setPesquisa] = useState("");


  async function buscarCaminhoes() {
    try {
      //TENTA FAZER ALGUMA COISA
      const respostaBackend: Caminhoes[] = await Service.GET(
        "ordem-servico/buscarCaminhoes",
        { pesquisa },
      );
      setVeiculos(respostaBackend);
    } catch (error) {
      // DEU ERRO MOSTRA MENSAGEM
      console.log(error);
    }
  }

  return(
  
  <>
  </>
  
)
}
export default Salvar