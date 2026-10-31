import { useState } from "react";
import styles from "./Principal.module.css";
import type { Caminhoes } from "../../../interfaces/Caminhoes";
import { Service } from "../../../components/services/Service";

function Principal() {
  const [veiculos, setVeiculos] = useState<Caminhoes[]>([]);
  const [pesquisa, setPesquisa] = useState("");
  const [mostrarAviso, setMostrarAviso] = useState(false);

  async function buscarCaminhoes() {
    try {
      const respostaBackend: Caminhoes[] = await Service.GET(
        "ordem-servico/buscarCaminhoes",
        { pesquisa }
      );
      setVeiculos(respostaBackend);
    } catch (error) {
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
      setMostrarAviso(false);
    }
  };

  return (
    <div className={styles.container}>
      <nav className={styles.barraNavegacao}>
        <div className={styles.logo}>SISTEMA DE ESCOLTA</div>

        <div className={styles.menuAbas}>
          {abas.map((aba) => (
            <button
              type="button"
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
              <h1 className={styles.tituloSecao}>Sobre o Sistema</h1>

              <p className={styles.subtituloSecao}>
                Plataforma de monitoramento, segurança e rastreio de cargas.
              </p>

              <hr className={styles.divisor} />

              {[
                {
                  titulo: "Funcionamento",
                  texto:
                    "O sistema gerencia o transporte de mercadorias de alto valor em tempo real, com controle operacional e acompanhamento contínuo.",
                },
                {
                  titulo: "Segurança e Confiabilidade",
                  texto:
                    "A estrutura foi desenvolvida para garantir monitoramento, proteção das cargas e resposta rápida a eventos críticos.",
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
              <h1 className={styles.tituloSecao}>Painel de Entregas</h1>

              <input
                type="text"
                placeholder="Buscar caminhões..."
                className={styles.inputPesquisa}
                onChange={(e) => setPesquisa(e.target.value)}
              />
              <button type="button" className={styles.botaoAcao} onClick={buscarCaminhoes}>
                Buscar
              </button>

              <div className={styles.gridStatus}>
                <div className={styles.cardStatus}>
                  <p>Em Transporte</p>
                  <h2>{produtos}</h2>
                </div>

                <div className={styles.cardStatus}>
                  <p>Concluídas</p>
                  <h2>{entregas}</h2>
                </div>
              </div>

              <div className={styles.listaItens}>
                {veiculos?.map((caminhao) => (
                  <div key={caminhao.tx_placa} className={styles.itemLista}>
                    <div className={styles.infoLista}>
                      <span className={styles.nomeItem}>{caminhao.tx_descricao}</span>

                      <span className={styles.detalheItem}>
                        {caminhao.tx_placa}
                      </span>
                    </div>

                    <span className={styles.badgeStatus}>Em rota</span>
                  </div>
                ))}
              </div>

              <button
                type="button"
                className={styles.botaoAcao}
                onClick={() => setMostrarAviso(true)}
              >
                Confirmar conclusão da entrega
              </button>

              {mostrarAviso && (
                <div className={styles.aviso}>
                  <p>Confirma a conclusão desta entrega?</p>

                  <button type="button" className={styles.botaoSim} onClick={finalizarEntrega}>
                    Sim
                  </button>

                  <button
                    type="button"
                    className={styles.botaoNao}
                    onClick={() => setMostrarAviso(false)}
                  >
                    Não
                  </button>
                </div>
              )}

              <hr className={styles.divisor} />

              <h1 className={styles.tituloSecao}>Alertas de Segurança</h1>

              <hr className={styles.divisor} />

              <h1 className={styles.tituloSecao}>Relatórios Gerais</h1>

              <div className={styles.gridStatus}>
                {[
                  ["Eficiência Operacional", "98,4%"],
                  ["Alertas Resolvidos", "14/14"],
                ].map(([titulo, valor]) => (
                  <div key={titulo} className={styles.cardStatus}>
                    <p>{titulo}</p>
                    <h2>{valor}</h2>
                  </div>
                ))}
              </div>

              <div className={styles.blocoTexto}>
                <h3>Resumo de Desempenho</h3>
                <p>Tempo médio de resposta para alertas de risco: 3 minutos.</p>
              </div>
            </section>
          )}
        </div>
      </main>
    </div>
  );
}

export default Principal;