import { useState } from 'react'
import { useSelector } from 'react-redux'
import Form from './Form'
import Cards from './Cards'

const Main = () => {
  const [selectedOption, setSelectedOption] = useState('Filter by Region');
  const [ search, setSearch ] = useState('');
  const  darkMode = useSelector((state) => state.darkModeReducer.darkMode);

  return (
    <div className={`pt-10 ${darkMode ? 'bg-very_dark_blue' : 'bg-slate-100'} min-h-screen`}>
        <Form
         search={search} 
         setSearch={setSearch} 
         selectedOption={selectedOption} 
         setSelectedOption={setSelectedOption} 
        />
        <Cards search={search} selectedOption={selectedOption} />
    </div>
  )
}

export default Main