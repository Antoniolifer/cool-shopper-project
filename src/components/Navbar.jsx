import Cart from './Cart';
import { useState } from 'react';
import { createPortal } from 'react-dom';
import AboutModal from './AboutModal';

function Navbar() {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <div className="bg-transparent pointer-events-none flex justify-between w-full z-10 py-3 px-2 fixed">

        <button onClick={() => setModalOpen(true)} className='px-2 sm:px-4 py-2 text-lg md:text-xl underline tracking-wide my-3 lg:ml-10 text-center pointer-events-auto cursor-pointer border-2 border-gray-700 h-12 bg-gray-600 hover:bg-gray-100 hover:text-gray-700 text-white font-bold rounded-lg'>About</button>
        {createPortal(
        <AboutModal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />,
        document.getElementById('root')
        )}
        <Cart /> 
    </div>
  )
}

export default Navbar