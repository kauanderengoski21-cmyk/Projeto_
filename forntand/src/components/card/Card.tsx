import type React from "react";
import style from "./Card.module.css";
interface CardProps{
    nomeImg: string;
    titulo:string;
    valor:number;

}
const Card:React.FC<CardProps> = ({nomeImg,valor,titulo}) =>{
    return(
        <>
        <div className={style.card}>
            <img src={nomeImg}/>
            <div className = {style.titulo}>
                {titulo}
            </div>
            <div className = {style.valor}>
                {valor}
            </div>
        </div>
    
        </>
    );
}
export default Card