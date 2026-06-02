import styles from "./Principal.module.css";


function Inicio() {
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

        <p> Produtos em Transporte: 15</p>
        <p> Veículos Ativos: 8</p>
        <p> Alertas Ativos: 2</p>
        <p> Entregas Concluídas: 120</p>
      </section>

      <hr />

      <section>
        <h2>Monitoramento em Tempo Real</h2>

        <ul>
          <li>Veículo V-001 em rota para São Paulo</li>
          <li>Veículo V-005 próximo ao destino</li>
          <li>Alerta de velocidade detectado no veículo V-003</li>
        </ul>
      </section>

      <hr />

      <section>
        <h2>Ações Rápidas</h2>

        <button>Novo Produto</button>
        <button>Cadastrar Veículo</button>
        <button>Criar Rota</button>
        <button>Gerar Relatório</button>
      </section>

      <hr />

      <footer>
        <p>© 2026 Sistema de Monitoramento de Escolta</p>
        <p>Versão 1.0.0</p>
      </footer>
    </div>
  );
}

export default Inicio;
