import { Link} from 'react-router-dom'

function Navbar() {

    return (
        <>
            <div className='w-full bg-black text-white flex justify-center py-4'>
                <div className=" container flex justify-between text-lg">
                    <Link to='/home' className='text-2xl font-bold'>Farmacia</Link>

                    <div className='flex gap-4'>
                        <Link to='/categorias' className='hover:underline'>Categorias</Link>

                    </div>

                </div>
            </div>
        </>
    )
}

export default Navbar