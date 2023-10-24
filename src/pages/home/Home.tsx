import React from 'react'
import './Home.css'

function Home() {
    return (
        <>
            <header>
                <h1 className='NavTitulo'>BlogPessoal</h1>
                <div className='NavBar'>
                    <label className='NavItens'>Home</label>
                    <label className='NavItens'>Postagens</label>
                </div>
            </header>
            <main>
                <div className="CorpoTexto">
                    <h2>Seja Bem Vinde a pagina Inicial!</h2>
                    <p>Enquanto aprendia Java, meu lema era "o esforço de hoje é fracasso do amanhã". <br/>Agora meu lema é "A tentativa leva ao erro...<br/>E o erro leva a correção, e da correção nasce a conclusão"<br />Este é apenas um blog para falar sobre mim sinta-se livre para me conhecer 😊</p>
                    <button className='ButtonHome'>Seja Bem-Vinde!</button>
                </div>

                <div className="CorpoImagem" >
                    <img
                        src="https://i.imgur.com/VpwApCU.png"
                        alt="Imagem da Página Home"
                        className='imgHome'
                    />
                </div>
            </main>
        </>
    )
}

export default Home