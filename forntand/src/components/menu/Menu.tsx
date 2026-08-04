import { NavLink } from "react-router-dom";


interface  MenuInstrucao {
 label: string,
 path: string
}


const menuInstrucao:MenuInstrucao[] = [
    {label: "inicio", path:"/principal"},
    {label: "Cadastro", path:"/cadastro"},
    {label: "login", path:"/login"},
];

const Menu: React.FC = ()=>{

    return(
        <>
        <nav>
            <ul>
        {
        menuInstrucao.map (x =>(
         <li>
             <NavLink to={x.path}>
                {x.label}
             </NavLink>
         </li>   
        )
        )
        }
            </ul>
        </nav>
        </>
    );
}


export default Menu;