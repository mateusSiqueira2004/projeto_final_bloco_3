import Popup from 'reactjs-popup';
import FormularioCategoria from '../formularioCategoria/FormularioCategoria';

import 'reactjs-popup/dist/index.css';
import './ModalCategoria.css'

function ModalCategoria() {
    return (
        <>
            <Popup
                trigger={
                    <button 
                        className='border rounded px-4 py-2 hover:bg-white hover:text-indigo-800'>
                        Nova Categoria
                    </button>
                }
                modal
            >
                <FormularioCategoria />
            </Popup>
        </>
    );
}

export default ModalCategoria;