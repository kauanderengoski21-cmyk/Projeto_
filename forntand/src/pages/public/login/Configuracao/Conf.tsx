import { useState } from "react";
import 
interface Configuracao {
    tema: 'escuro' | 'claro';
    atalhos: boolean;
}

const Configuracoes: React.FC = () => {
    const [config, setConfig] = useState<Configuracao>({
        tema: 'escuro',
        atalhos: true,
    });

    const salvar = () => {
        localStorage.setItem('cfg', JSON.stringify(config));
        alert('salvo!');
    };

    return (
        <div className={style.pagina}>
            <h1>revisoes</h1>
            
            <div className="linha">
                <span>Tema</span>
                <select 
                    value={config.tema} 
                    onChange={e => setConfig({ ...config, tema: e.target.value as 'escuro' | 'claro' })}
                >
                    <option value="escuro">Escuro</option>
                    <option value="claro">Claro</option>
                </select>
            </div>

            <div className="linha">
                <span>Mostrar atalho</span>
                <input 
                    type="checkbox"
                    checked={config.atalhos}
                    onChange={e => setConfig({ ...config, atalhos: e.target.checked })}
                />
            </div>

            <button onClick={salvar}>salvar</button>
        </div>
    );
};

export default Configuracoes;