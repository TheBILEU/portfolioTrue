import '../assets/Projeto.scss'
import Previsao from '../assets/previsao.jpg'
import Pizza from '../assets/pizza.png'
import Landing from '../assets/landingPage.png'

function Projeto(){
    return(
        <div className='container-projects'>
            <div className='container'>
                <div className='project'>
                    <a target='__blank' href="https://weather-forecast-mu-two.vercel.app"><img src={Previsao} alt="projeto1" /></a>
                    <div>
                        <h1>Projeto de Previsão do Tempo</h1>
                        <p>Projeto feito em HTML, CSS e JavaScript (Clique na imagem para acessar o site)</p>
                        <p>O projeto tem finalidade em pegar dados climáticos de determinada cidade de qualquer país/estado utilizando uma API</p>
                        <p>Observação: Sem RESPONSIVIDADE</p>
                    </div>
                </div>

                <div className='project'>
                    <a href="https://landing-page-offer-sale.vercel.app" target="_blank" rel="noopener noreferrer"><img src={Landing} alt="projeto1" /></a>
                    <div>
                        <h1>Projeto de Landing Page</h1>
                        <p>Projeto feito em HTML e CSS (Clique na imagem para acessar o site)</p>
                        <p>O projeto tem finalidade em recriar uma página inicial de produtos</p>
                        <p>Observação: Com RESPONSIVIDADE</p>
                    </div>
                </div>

                <div className='project'>
                    <a href="https://pizza-react-sooty.vercel.app" target="_blank" rel="noopener noreferrer"><img src={Pizza} alt="projeto1" /></a>
                    <div>
                        <h1>Projeto de Home Page</h1>
                        <p>Projeto feito em React (Clique na imagem para acessar o site)</p>
                        <p>O projeto tem finalidade em recriar uma página inicial de uma pizzaria com funções de escolher pizzas em quatro diferentes sabores</p>
                        <p>Observação: Sem RESPONSIVIDADE</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projeto