import { MdOutlineShoppingCart } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { styled } from "styled-components";

const HeaderContainer = styled.header`

    & .barrinha{
        width: 100%;
        height: 4px;
        background-color: #F4796B;
    }

    & .tudo{
    background-color: #6B0504;
    display: flex;
    justify-content: space-between;
    padding: 7px 60px;
    align-items: center;
    font-weight: 400;

    & nav{
        display: flex;
        gap: 26px;
        & h1{
            color: white;
            font-size: 30px;          
        }
        & ul{
            display: flex;
            gap: 16px;
            & a{
                color: white;
                display: inline-block;
                line-height: 46px;
                padding: 0 16px;
                font-weight: 400;
                position: relative;
                &:hover, &.active{
                    color: #F4796B;
                }
                &::after{
                    content: "";
                    width: 0;
                    height: 4px;
                    background-color: #F4796B;
                    border-radius: 2px;
                    position: absolute;
                    bottom: 0;
                    left: 50%;
                    transition-duration: 200ms ;
                }
                &.active::after{
                    width: 100%;
                    left: 0;
                }
            }
        }
    }
    & .acoes{
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 128px;
        & a{
            font-weight: 400;
            color: white;
        }
        & div{
            background-color: #F4796B;
            border-radius: 50%;
            width: 46px;
            height: 46px;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            & button{
                background-color: #F4796B;
                cursor: pointer;
                & svg{
                    background-color: #F4796B;
                    color: white;
                    width: 24px;
                    height: 24px;
                }
            }
        }
    }
}
`;

const Header = () => {
    return (
        <HeaderContainer>
            <div className="tudo">
                <nav>
                <h1>LOGO</h1>
                    <ul>
                        <li>
                            <NavLink to={'/'}>Inicio</NavLink>
                        </li>
                        <li>
                            <NavLink to={'/cardapio'}>Cardapio</NavLink>
                        </li>
                        <li>
                            <NavLink to={'/promocoes'}>Promoções</NavLink>
                        </li>
                    </ul>
                </nav>
                <div className="acoes">
                    <NavLink to={'entrar'}>Entrar</NavLink>
                    <div><button><MdOutlineShoppingCart /></button></div>
                </div>
            </div>
            <div className="barrinha"></div>
        </HeaderContainer>
    );
}
 
export default Header;