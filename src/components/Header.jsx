import { Link } from "react-router-dom"
import "../assets/Header.scss"

function Header(){
    return(
        <header>
            <nav>
                <ul>
                    <li>
                    <Link to='/'><button>Início</button></Link>
                    </li>
                    
                    <li>
                    <Link to='/projetos'><button>Projetos</button></Link>
                    </li>

                    <li>
                    <a href="" download='Currículo: Gabriel Menezes' aria-label="Baixar currículo"><button>CV</button></a>
                    </li>


                </ul>
            </nav>
        </header>
    )
}

export default Header