

type  props = {
    texto?:string;
    click?: () => number;
    
};

function Button ({texto, click}:props){
    return(
        <button onClick={click}>{texto}</button>
    )
}

export default Button;