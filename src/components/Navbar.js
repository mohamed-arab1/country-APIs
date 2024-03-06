import { FaMoon } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux'
import { toggleDarkMode } from '../store/countrySlice'
const Navbar = () => {
  const dispatch = useDispatch()
  const  darkMode = useSelector((state) => state.darkModeReducer.darkMode);
  return (
    <nav className={`w-full border-b h-20 flex flex-col md:flex-row md:justify-between px-2 md:px-10 items-center ${darkMode ? 'bg-dark_blue border-b-dark_blue' : 'bg-very_light_gray'}`}>
        <div>
            <h2 className={`text-lg md:text-2xl font-bold ${darkMode ? 'text-white' : 'text-black'}`}>Where in the world?</h2>
        </div>
        <div className='flex gap-2 items-center text-sm'>
          <FaMoon className={`cursor-pointer ${darkMode ? 'text-white' : ''}`} onClick={() => dispatch(toggleDarkMode())} /> 
          <h4 className={`${darkMode ? 'text-white' : ''}`}>Dark Mode</h4>
        </div>
    </nav>
  )
}

export default Navbar