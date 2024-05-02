import { useEffect, useState } from "react";
import { styled } from "styled-components";

const HomeContainer = styled.section`
    padding: 60px;
    & h1 {
        font-size: 36px;
        margin-bottom: 16px;
    }
    & input{
        width: 400px;
        height: 60px;
        padding-left: 26px;
        border-radius: 40px;
        border: 2px solid #6B0504;
    }
    & .cards {
        display: flex;
        gap: 20px;
        & li {
            padding: 10px;
            width: calc(20% - 16px);
            box-shadow: 0 5px 10px #00000025;
            border-radius: 10px;
            & h5{
                font-size: 16px;
                font-weight: bold;
                color: #6B0504;
            }
            & .preco{
                width: 100%;
                display: flex;

                justify-content: space-between;

                & h6{
                    font-size: 16px;
                    color: #F44E3F;
                    justify-content: space-between;

                }
                & button{
                    font-size: 14px;
                    color: #FFFFFF;
                    background-color: #001514;
                    padding: 10px;
                    border-radius: 5px;

                }
            }
        }
    }
`;

const Home = () => {
    
    const [pizzas,setPizzas] = useState([]);
    const [pizzasFiltradas, setPizzasFiltradas] = useState([]);
    const [pesquisa, setPesquisa] = useState("");

    async function buscarSabores(){
        const request = await fetch('http://localhost:3000/sabores');
        const response  = await request.json();
        setPizzas(response)
    }
    
    useEffect(() => {
        buscarSabores()
    }, [])

    useEffect(() => {
        if (pesquisa){
            setPizzasFiltradas([...pizzas.filter(pizza => pizza.nome.toLowerCase().includes(pesquisa.toLowerCase()))])
            return;
        }
        setPizzasFiltradas(pizzas)
    }, [pesquisa, pizzas])
    
    return(
        <HomeContainer>
            <div>
                <input 
                type="text"
                placeholder="Procure um sabor..."
                onChange={(e) => setPesquisa(e.target.value)}
                />
            </div>
            <h1>Pizzas em destaque</h1>
            <ul className="cards">
            {
                pizzas && pizzasFiltradas.filter(p => p.promocao).map((p, index) => (
                    <li>
                        <img src="" alt="" />
                        <h5>{p.nome}</h5>
                        <p>{p.descricao}</p>
                        <div className="preco">
                            <h6>{p.preco}</h6>
                            <button>adicionar</button>
                        </div>
                    </li>
                ))
            }
            </ul>
            

            <h1>Todas as Pizzas</h1>
            <ul className="cards">
            {
                pizzas && pizzas.map((p, index) => (
                    <li>
                        <img src="" alt="" />
                        <h5>{p.nome}</h5>
                        <p>{p.descricao}</p>
                        <div className="preco">
                            <h6>{p.preco} </h6>
                            <button>adicionar</button>
                        </div>
                    </li>
                ))
            }
            </ul>
        </HomeContainer>
    )
}

export default Home;