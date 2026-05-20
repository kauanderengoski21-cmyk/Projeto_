import { useState } from 'react'

import './App.css'

function App() { //java script e type
  const [cont  , setContador ] = useState <number>(0);

 

  return (
    // html e css
    <>
    <div>
      Kauan C - 

      { cont }
    </div>

    <button onClick={()=>  setContador(cont +1000) } >ALTERAR IDADE</button>
    <button onClick={()=>  setContador(cont -1000) } >ALTERAR IDADE</button>
    <div>
      HELLO_WORLD_I_LIKE
    </div>
   </>   
  ) ///trablhar css Fim
}

export default App
