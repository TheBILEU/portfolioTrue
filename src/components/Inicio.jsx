import Foto from '../assets/foto.jpg'
import Git from '../assets/github.png'
import Linkedin from '../assets/linkedin.png'
import Html from '../assets/html_icon.png'
import Css from '../assets/css_icon.png'
import Js from '../assets/js_icon.png'
import React from '../assets/react_icon.png'
import { useTypewriter, Cursor} from 'react-simple-typewriter'
import '../assets/Inicio.scss'

function Inicio(){

    const [text] = useTypewriter({
       words: ['Seja Bem-Vindo', 'Espero que aqui, você encontre a pessoa certa', 
       'Desenvolvedor Full Stack',
       'Freelancer', 
       'Estou nesse ramo desde 2023',
        'Experiente em tecnologias como HTML, CSS, JS e React',
        'Também tenho conhecimento com Python, Java e C++',
        'Fácil adaptabilidade em qualquer linguagem',
        'Sempre apto em aprender coisas novas'],
       loop: {},
       typeSpeed: 120,
       delaySpeed: 80, 
    });

    return(
        <div className='main'>
            <div className='container-inicio'>
                <div className='info'>
                    <img className='profile' src={Foto} alt="foto_profile" />
                        
                        <div className='nome-profile'>
                            <h1>OLÁ!</h1>
                            <h1>ME CHAMO </h1> 
                            <h1>GABRIEL</h1>

                                <div className='rede'>
                                    <img src={Git} alt="github" />
                                    <img src={Linkedin} alt="linkedin" />
                                </div>

                        </div>
                </div>

                <div className='tec-about'>
                    <div className='about-profile'>
                        <h2>SOBRE MIM</h2>

                        <p style={{color: 'white', textAlign: 'center', fontSize: '30px'}}>
                            {text}
                            <Cursor cursorStyle='<' cursorColor='green'/>
                        </p>
                    </div>

                    <div className='tec-profile'>
                        <h2>TECNOLOGIAS</h2>
                            <figure className='techs'>
                                <img src={Html} alt="html5" />
                                <img src={Css} alt="css" />
                                <img src={Js} alt="javascript" />
                                <img src={React} alt="reactjs" />
                            </figure>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Inicio