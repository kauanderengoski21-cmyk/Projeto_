import { useState } from "react";
import styles from "./Principal.module.css";

function Principal() {
  const [produtos, setProdutos] = useState(15);
  const [entregas, setEntregas] = useState(120);
  const [abaAtiva, setAbaAtiva] = useState("inicio");

  function finalizarEntrega() {
    if (produtos > 0) {
      setProdutos(produtos - 1);
      setEntregas(entregas + 1);
    }
  }

  return (
    <div className={styles.container}>
      
      <nav className={styles.barraNavegacao}>
        <div className={styles.logo}>SISTEMA ESCOLTA</div>
        <div className={styles.menuAbas}>
          <button 
            className={abaAtiva === "inicio" ? styles.abaAtiva : styles.botaoAba}
            onClick={() => setAbaAtiva("inicio")}
          >
            Início
          </button>
          <button 
            className={abaAtiva === "entregas" ? styles.abaAtiva : styles.botaoAba}
            onClick={() => setAbaAtiva("entregas")}
          >
            Entregas
          </button>
          <button 
            className={abaAtiva === "alertas" ? styles.abaAtiva : styles.botaoAba}
            onClick={() => setAbaAtiva("alertas")}
          >
            Alertas
          </button>
          <button 
            className={abaAtiva === "relatorios" ? styles.abaAtiva : styles.botaoAba}
            onClick={() => setAbaAtiva("relatorios")}
          >
            Relatórios
          </button>
        </div>
      </nav>

      <main className={styles.conteudoPrincipal}>
        <div className={styles.cartaoPainel}>
          
          {abaAtiva === "inicio" && (
            <section>
              <h1 className={styles.tituloSecao}>SOBRE O PROJETO</h1>
              <p className={styles.subtituloSecao}>Plataforma de segurança e rastreamento de cargas.</p>
              
              <hr className={styles.divisor} />
              
              <div className={styles.blocoTexto}>
                <h3>Como Funciona</h3>
                <p>
                  O sistema gerencia o transporte de mercadorias valiosas em tempo real. 
                  Através do monitoramento constante, a equipe consegue acompanhar o status 
                  e liberar atualizações de rotas instantaneamente.
                </p>
              </div>

              <div className={styles.blocoTexto}>
                <h3>Estabilidade e Segurança</h3>
                <p>
                  Desenvolvido com criptografia de ponta para garantir que os dados de 
                  rastreamento fiquem protegidos contra interceptações. O painel opera com 
                  alta estabilidade, atualizando as informações de forma segura e imediata.
                </p>
              </div>

            </section>
          )}

          {abaAtiva === "entregas" && (
            <section>
              <h1 className={styles.tituloSecao}>PAINEL DE ENTREGAS</h1>
              <p className={styles.subtituloSecao}>Gerenciamento de frotas e conclusão de rotas.</p>
              
              <hr className={styles.divisor} />
              
              <div className={styles.gridStatus}>
                <div className={styles.cardStatus}>
                  <p className={styles.textoStatus}>No Transporte</p>
                  <h2 className={styles.numeroStatus}>{produtos}</h2>
                </div>
                <div className={styles.cardStatus}>
                  <p className={styles.textoStatus}>Concluídas</p>
                  <h2 className={styles.numeroStatus}>{entregas}</h2>
                </div>
              </div>

              <div className={styles.listaItens}>
                <div className={styles.itemLista}>
                  <div className={styles.infoLista}>
                    <span className={styles.nomeItem}>Caminhão Scania N-01</span>
                    <span className={styles.detalheItem}>ABC-1234</span>
                  </div>
                  <span className={styles.badgeStatus}>Em Rota</span>
                </div>

                <div className={styles.itemLista}>
                  <div className={styles.infoLista}>
                    <span className={styles.nomeItem}>Volvo FH Semipesado</span>
                    <span className={styles.detalheItem}>XYZ-5678</span>
                  </div>
                  <span className={styles.badgeStatus}>Em Rota</span>
                </div>
              </div>

              <hr className={styles.divisor} />

              <button className={styles.botaoAcao} onClick={finalizarEntrega}>
                Confirmar Conclusão de Entrega
              </button>
            </section>
          )}

          {abaAtiva === "alertas" && (
            <section>
              <h1 className={styles.tituloSecao}>ALERTAS DE SEGURANÇA</h1>
              <p className={styles.subtituloSecao}>Ocorrências perigosas e avisos detectados.</p>
              
              <hr className={styles.divisor} />

              <div className={styles.listaItens}>
                <div className={styles.itemLista}>
                  <div className={styles.infoLista}>
                    <span className={styles.nomeItem}>Velocidade Excedida</span>
                    <span className={styles.detalheItem}>Veículo Scania N-01 ultrapassou o limite na BR-116.</span>
                  </div>
                  <span className={styles.badgePerigo}>Aviso</span>
                </div>

                <div className={styles.itemLista}>
                  <div className={styles.infoLista}>
                    <span className={styles.nomeItem}>Desvio de Rota Padrão</span>
                    <span className={styles.detalheItem}>Veículo Volvo FH entrou em via não autorizada.</span>
                  </div>
                  <span className={styles.badgePerigo}>Crítico</span>
                </div>
              </div>
            </section>
          )}

          {abaAtiva === "relatorios" && (
            <section>
              <h1 className={styles.tituloSecao}>RELATÓRIOS GERAIS</h1>
              <p className={styles.subtituloSecao}>Estatísticas mensais e desempenho da escolta.</p>
              
              <hr className={styles.divisor} />

              <div className={styles.gridStatus}>
                <div className={styles.cardStatus}>
                  <p className={styles.textoStatus}>Eficiência Geral</p>
                  <h2 className={styles.numeroStatus}>98.4%</h2>
                </div>
                <div className={styles.cardStatus}>
                  <p className={styles.textoStatus}>Alertas Resolvidos</p>
                  <h2 className={styles.numeroStatus}>14/14</h2>
                </div>
              </div>

              <div className={styles.blocoTexto}>
                <h3>Resumo de Performance</h3>
                <p>
                  Durante este mês, a estabilidade das comunicações via satélite com os veículos 
                  manteve-se estável. O tempo médio de resposta para a contenção de alertas de risco 
                  foi de apenas 3 minutos.
                </p>
              </div>
            </section>
          )}

        </div>
      </main>

    </div>
  );
}

export default Principal;