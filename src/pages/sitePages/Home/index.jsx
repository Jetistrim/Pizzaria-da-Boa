import { useEffect, useState } from "react";

const Home = () => {
    
    const [pizzas,setPizzas] = useState([])

    async function buscarSabores(){
        const request = await fetch('http://localhost:3000/sabores');
        const response  = await request.json();
        setPizzas(response)
    }
    
    useEffect(() => {
        buscarSabores()
    }, [])
    
    
    return(
        <>
            <h1>Pizzas em destaque</h1>
            {
                pizzas && pizzas.map(p => (
                    <div>
                        {p.nome}
                    </div>
                ))
            }
        </>
    )
}

export default Home;