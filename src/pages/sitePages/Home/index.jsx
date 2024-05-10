import { useEffect, useState } from "react";
import { styled } from "styled-components";

const HomeContainer = styled.section`
    padding: 60px;

    & h1 {
        font-size: 28px;
        margin-bottom: 36px;
        color: #6B0504;
    }

    & input{
        width: 400px;
        height: 60px;
        padding-left: 26px;
        border-radius: 40px;
        border: 2px solid #6B0504;
        font-size: 16px;
    }

    & .cards {
        display: flex;
        gap: 20px;

        & li {
            padding: 10px;
            width: calc(20% - 16px);
            box-shadow: 5px 5px 10px #00000075;
            border-radius: 10px;
            height: 406px;

            & div.imagem{
                display: flex;
                justify-content: center;
                align-items: center;
                margin-bottom: 16px;

                & img{
                    width: 230px;
                    height: 230px;
                }
            }

            & h5{
                font-size: 16px;
                font-weight: bold;
                color: #6B0504;
                margin-bottom: 3px
            }

            & .marcaH5{
               height: 4px ;
               width: 50px;
               border-radius: 50px;
               background-color: #F4796B;
               margin-left: 1px;
               margin-bottom: 16px;
            }

            & p{
                height: 54px;
                width: 100%;
                color: #666666;
                font-size: 16px;
                margin-bottom: 4px;
            }

            & .preco{
                width: 100%;
                display: flex;
                justify-content: space-between;
                align-items: center;

                & h6{
                    font-size: 16px;
                    color: #F44E3F;                
                }
                
                & button{
                    font-weight: bold;
                    font-size: 14px;
                    color: #FFFFFF;
                    background-color: #001514;
                    padding: 12px 16px 11px 16px;
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
    
    // {const card = () => {
    //     return (
    //         <li key={index}>
    //                     <div className="imagem">
    //                         <img src={p.image} alt={p.nome} />
    //                     </div>
    //                     <h5>{p.nome}</h5>
    //                     <div className="marcaH5"></div>
    //                     <p>{p.descricao}</p>
    //                     <div className="preco">
    //                         <div>
    //                             <h6>R$ {p.preco.toFixed(2)}</h6>
    //                         </div>
    //                         <button>Adicionar</button>
    //                     </div>
    //                 </li>
    //     )
    // }}

    return(
        <HomeContainer>
            <div>
                <input 
                type="text"
                placeholder="Procure um sabor..."
                onChange={(e) => setPesquisa(e.target.value)}
                />
            </div>
            <h1>Pizzas em Destaque</h1>
            <ul className="cards">
            {
                pizzas && pizzasFiltradas.filter(p => p.promocao).map((p, index) => (
                    <li key={index}>
                        <div className="imagem">
                            <img src={p.image} alt={p.nome} />
                        </div>
                        <h5>{p.nome}</h5>
                        <div className="marcaH5"></div>
                        <p>{p.descricao}</p>
                        <div className="preco">
                            <div>
                                <h6>R$ {p.preco.toFixed(2)}</h6>
                            </div>
                            <button>Adicionar</button>
                        </div>
                    </li>
                ))
            }
            </ul>
            

            <h1>Todas as Pizzas</h1>
            <ul className="cards">
            {
                pizzas && pizzas.map((p, index) => (
                    <li key={index}>
                        <div className="imagem">
                            <img src={p.image} alt={p.nome} />
                        </div>
                        <h5>{p.nome}</h5>
                        <div className="marcaH5"></div>
                        <p>{p.descricao}</p>
                        <div className="preco">
                            <div>
                                <h6>R$ {p.preco.toFixed(2)}</h6>
                            </div>
                            <button>Adicionar</button>
                        </div>
                    </li>
                ))
            }
            </ul>
        </HomeContainer>
    )
}

export default Home;