import React from 'react'
import '../../Home.css'

function Home() {
  return (
    <>
            <div className="CorpoPrincipal">
                <div>
                    <div className="CorpoTitulos">
                        <h2>Seja Bem Vinde a pagina Inicial!</h2>
                        <p>Pagina com um monte de coisas mesmo sendo vazia</p>
                    </div>

                    <div className="CorpoImagem" >
                        <img 
                            src="https://i.imgur.com/VpwApCU.png" 
                            alt="Imagem da Página Home" 
                            width="400px"
                        />
                    </div>
                </div>
            </div>
        </>
  )
}

export default Home