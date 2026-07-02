import { useState } from "react";
import styles from "./Principal.module.css";
import type { Caminhoes } from "../../../interfaces/Caminhoes";
import { Service } from "../../../components/services/Service";

function Principal() {
  const [veiculos, setVeiculos] = useState<Caminhoes[]>([]);
  const [pesquisa, setPesquisa] = useState("");
  const [mostrarAviso, setMostrarAviso] = useState (false);

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

  const [produtos, setProdutos] = useState(15);
  const [entregas, setEntregas] = useState(120);
  const [abaAtiva, setAbaAtiva] = useState("inicio");

  const abas = ["inicio", "entregas"];

  const finalizarEntrega = () => {
    if (produtos > 0) {
      setProdutos((p) => p - 1);
      setEntregas((e) => e + 1);
    }
  };

  return (
    <div className={styles.container}>
      <nav className={styles.barraNavegacao}>
        <div className={styles.logo}>SISTEMA ESCOLTA</div>

        <div className={styles.menuAbas}>
          {abas.map((aba) => (
            <button
              key={aba}
              className={abaAtiva === aba ? styles.abaAtiva : styles.botaoAba}
              onClick={() => setAbaAtiva(aba)}
            >
              {aba.charAt(0).toUpperCase() + aba.slice(1)}
            </button>
          ))}
        </div>
      </nav>

      <main className={styles.conteudoPrincipal}>
        <div className={styles.cartaoPainel}>
          {abaAtiva === "inicio" && (
            <section>
              <h1 className={styles.tituloSecao}>SOBRE O PROJETO</h1>

              <p className={styles.subtituloSecao}>
                Plataforma de segurança e rastreamento de cargas.
              </p>

              <hr className={styles.divisor} />

              {[
                {
                  titulo: "Como Funciona",
                  texto:
                    "O sistema gerencia o transporte de mercadorias valiosas em tempo real.",
                },
                {
                  titulo: "Estabilidade e Segurança",
                  texto:
                    "Criptografia avançada e monitoramento contínuo das cargas.",
                },
              ].map((item) => (
                <div key={item.titulo} className={styles.blocoTexto}>
                  <h3>{item.titulo}</h3>
                  <p>{item.texto}</p>
                </div>
              ))}
            </section>
          )}

          {abaAtiva === "entregas" && (
            <section>
              <h1 className={styles.tituloSecao}>PAINEL DE ENTREGAS</h1>

              <input 
                type="text"
                placeholder="Buscar caminhões..."
                className={styles.inputPesquisa}
                onChange={(e) => setPesquisa(e.target.value)}
              />
              <button className={styles.botaoAcao} onClick={buscarCaminhoes}>
                Buscar
              </button>

              <div className={styles.gridStatus}>
                <div className={styles.cardStatus}>
                  <p>No Transporte</p>
                  <h2>{produtos}</h2>
                </div>

                <div className={styles.cardStatus}>
                  <p>Concluídas</p>
                  <h2>{entregas}</h2>
                </div>
              </div>

              <div className={styles.listaItens}>
                {veiculos?.map((caminhao) => (
                  <div key={caminhao.placa} className={styles.itemLista}>
                    <div className={styles.infoLista}>
                      <span className={styles.nomeItem}>{caminhao.nome}</span>

                      <span className={styles.detalheItem}>
                        {caminhao.placa}
                      </span>
                    </div>

                    <span className={styles.badgeStatus}>Em Rota</span>
                  </div>
                ))}
              </div>

              <button className={styles.botaoAcao} onClick={()=> setMostrarAviso (true)}
              >
                confirmar conclusao da entrega 
                 
              </button>

              {mostrarAviso && (
                <div className={styles.aviso}>
                  <p>Tem certeza que deseja continuar a confirmar a entrega ?</p>
                  <button className={styles.botaoSim} onClick={finalizarEntrega}>Sim</button>

                  <button className={styles.botaoNao} onClick={()=>
                    setMostrarAviso (false)
                  }>Não</button>

                </div>
              )}

              <hr className={styles.divisor} />

              <h1 className={styles.tituloSecao}>ALERTAS DE SEGURANÇA</h1>

              <hr className={styles.divisor} />

              <h1 className={styles.tituloSecao}>RELATÓRIOS GERAIS</h1>

              <div className={styles.gridStatus}>
                {[
                  ["Eficiência Geral", "98.4%"],
                  ["Alertas Resolvidos", "14/14"],
                ].map(([titulo, valor]) => (
                  <div key={titulo} className={styles.cardStatus}>
                    <p>{titulo}</p>
                    <h2>{valor}</h2>
                  </div>
                ))}
              </div>

              <div className={styles.blocoTexto}>
                <h3>Resumo de Performance</h3>
                <p>Tempo médio de resposta para alertas de risco: 3 minutes.</p>
              </div>
            </section>
          )}
        </div>
      </main>
    </div>
  );
}

export default Principal;
