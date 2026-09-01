import { NavLink } from "react-router-dom";
import style  from  "./Menu.module.css";
interface MenuInstrucao {
  label: string;
  path: string;
}

const menuInstrucao: MenuInstrucao[] = [
  { label: "Inicio", path: "/principal" },
  { label: "Cadastro", path: "/cadastro" },
  { label: "Login", path: "/login" },
];

const Menu: React.FC = () => {
  return (
    <nav className={style.menu}>
      <ul className={style.menulist}>
        {menuInstrucao.map((item) => (
          <li className={style.menuprodut} key={item.path}>
            <NavLink className={style.menulink} to={item.path}>
              {item.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Menu;