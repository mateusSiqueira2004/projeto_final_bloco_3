import ListaCategorias from "../../components/categoria/listaCategoria/ListaCategoria"
import ModalCategoria from "../../components/categoria/modalCategoria/ModalCategoria"

function Home() {
    return (
        <>
            <div className="bg-black flex justify-center">
                <div className='container grid grid-cols-2 text-white'>
                    <div className="flex flex-col gap-4 items-center justify-center py-4">
                        <h2 className='text-5xl font-bold'>
                            Seja Bem Vinde!
                        </h2>
                        <p className='text-xl'>
                            Salvando Vidas
                        </p>

                        <div className="flex justify-around gap-4">
                            <div className="flex justify-around gap-4">
                            <ModalCategoria />
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center ">
                        <img
                            src="https://i.imgur.com/fyfri1v.png"
                            alt="Imagem Página Home"
                            className='w-2/3'
                        />
                    </div>
                </div>
            </div>

            <ListaCategorias />
        </>
    )
}

export default Home