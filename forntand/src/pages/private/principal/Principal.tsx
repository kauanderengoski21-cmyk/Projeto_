import { useState } from "react";
import styles from "./Principal.module.css";

type StatusSistema = {
  produtosEmTransporte: number;
  veiculosAtivos: number;
  alertasAtivos: number;
  entregasConcluidas: number;
};

function Principal() {
  const [status, setStatus] = useState<StatusSistema>({
    produtosEmTransporte: 15,
    veiculosAtivos: 8,
    alertasAtivos: 2,
    entregasConcluidas: 120
  });

  const finalizarEntrega = (): void => {
    setStatus((estadoAnterior) => ({
      ...estadoAnterior,
      produtosEmTransporte: estadoAnterior.produtosEmTransporte - 1,
      entregasConcluidas: estadoAnterior.entregasConcluidas + 1
    }));
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>Sistema de Monitoramento de Escolta</h1>
        <p>
          Plataforma responsável pelo acompanhamento e segurança de produtos
          durante o transporte.
        </p>
      </header>

      <hr />

      <section>
        <h2>Menu Principal</h2>

        <div className={styles.menu}>
          <button>Dashboard</button>
          <button>Produtos</button>
          <button>Veículos</button>
          <button>Rotas</button>
          <button>Alertas</button>
          <button>Relatórios</button>
        </div>
      </section>

      <hr />

      <section>
        <h2>Status do Sistema</h2>
        
        <p> Produtos em Transporte: {status.produtosEmTransporte}</p>
        <p> Veículos Ativos: {status.veiculosAtivos}</p>
        <p> Alertas Ativos: {status.alertasAtivos}</p>
        <p> Entregas Concluídas: {status.entregasConcluidas}</p>
      </section>

      <hr />

      <section>
        <h2>Monitoramento em Tempo Real</h2>

        
        <div className={styles.listaAlertas}>
          <div className={`${styles.alertaCard} ${styles.info}`}>
            <span className={styles.statusBadge}>Em Rota</span>
            <p>Veículo V-001 em rota para o destino.</p>
          </div>

          <div className={`{styles.alertaCard} {styles.sucesso}`}>
            <span className={styles.statusBadge}>Quase Lá</span>
            <p>Veículo V-005 próximo ao destino.</p>
          </div>
        
          <div className={`${styles.alertaCard} ${styles.perigo}`}>
            <span className={styles.statusBadge}>Aviso</span>
            <p>Alerta de velocidade detectado no veículo V-003.</p>
          </div>
        </div>
      </section>

      

     <section>
        <h2>Ações Rápidas</h2>
        <button>Novo Produto</button>
        <button>Cadastrar Veículo</button>
        <button>Criar Rota</button>
       
        <button onClick={finalizarEntrega}>Simular Conclusão de Entrega</button>
      </section>

    </div>
  );
}

export default Principal;