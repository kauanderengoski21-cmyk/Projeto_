

type  props = {
    texto?:string;
    click?: () => void;
    
};

function Button ({texto, click}:props){
    return(
        <button onClick={click}>{texto}</button>
    )
}

export default Button;
