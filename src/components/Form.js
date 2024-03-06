import { useState } from "react";
import { AiOutlineDown, AiOutlineUp } from 'react-icons/ai'
import { useSelector } from 'react-redux'
const Form = ({
  selectedOption,
  setSelectedOption ,
  search,
  setSearch
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const  darkMode = useSelector((state) => state.darkModeReducer.darkMode);


  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };
  return (
    <div className='w-full h-32 md:h-20'>
        <div className='w-full flex flex-col gap-3 md:gap-0 md:flex-row justify-around items-center'>
            <input
             type="text"  
             className={`md:w-72 lg:w-96 border outline-none rounded py-2 px-3 ${darkMode ? 'bg-dark_blue border-none text-white' : 'bg-very_light_gray'}`} 
             placeholder='Search for a country...' 
             value={search}
             onChange={e => setSearch(e.target.value)}
            />
            <div className="relative">
              <button
                className={`${darkMode ? 'bg-dark_blue border-none text-white' : 'bg-very_light_gray '} w-48 py-2 px-4 rounded focus:outline-none flex justify-between items-center`}
                onClick={toggleDropdown}
              >
                {selectedOption}
                {isOpen? <AiOutlineUp className="text-sm" />: <AiOutlineDown  className="text-sm" />}
              </button>
              {isOpen && (
                <div className={`absolute mt-2 w-48 ${darkMode ? 'bg-dark_blue border-none text-white' : 'bg-very_light_gray '} shadow-lg rounded`}>
                  <button
                    className={`w-full text-start py-2 px-4 ${darkMode ? 'hover:bg-slate-500' : 'hover:bg-gray-200'} focus:outline-none`}
                    onClick={() => handleOptionSelect('Filter by Region')}
                  >
                    Filter by Region
                  </button>
                  <button
                    className={`w-full text-start py-2 px-4 ${darkMode ? 'hover:bg-slate-500' : 'hover:bg-gray-200'} focus:outline-none`}
                    onClick={() => handleOptionSelect('America')}
                  >
                    America
                  </button>
                  <button
                    className={`w-full text-start py-2 px-4 ${darkMode ? 'hover:bg-slate-500' : 'hover:bg-gray-200'} focus:outline-none`}
                    onClick={() => handleOptionSelect('Asia')}
                  >
                    Asia
                  </button>
                  <button
                    className={`w-full text-start py-2 px-4 ${darkMode ? 'hover:bg-slate-500' : 'hover:bg-gray-200'} focus:outline-none`}
                    onClick={() => handleOptionSelect('Europe')}
                  >
                    Europe
                  </button>
                  <button
                    className={`w-full text-start py-2 px-4 ${darkMode ? 'hover:bg-slate-500' : 'hover:bg-gray-200'} focus:outline-none`}
                    onClick={() => handleOptionSelect('Oceania')}
                  >
                    Oceania
                  </button>
                </div>
              )}
          </div>
      </div>
    </div>
  );
};

export default Form;