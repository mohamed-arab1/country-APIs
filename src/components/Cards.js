import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux'


const Cards = ({selectedOption, search}) => {

    const [ data, setData ] = useState([]);
    const [ url, setUrl ] = useState('https://restcountries.com/v3.1/all');
    const  darkMode = useSelector((state) => state.darkModeReducer.darkMode);

   
    useEffect(() => {
      if(selectedOption !== 'Filter by Region' && search  === ''){
        setUrl(`https://restcountries.com/v3.1/region/${selectedOption}`)
      } else if(search) {
        setUrl(`https://restcountries.com/v3.1/name/${search}`)
      }else if(selectedOption === 'Filter by Region') {
        setUrl(`https://restcountries.com/v3.1/all`)
      }
        axios
            .get(url)
            .then(res =>{
                const filterData = res.data.filter(data => data.name.common !== "Israel")
                setData(filterData)
              })
            .catch(err => console.log(err))
    }, [url, selectedOption, search])

  return (
    <>
        <div className='w-full container mx-auto grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
          {
            data.map((country) => (
              <div className={`h-80 ${darkMode ? 'bg-dark_blue' : 'bg-white'} mx-8 mb-8 rounded`} key={country.name.common}>
                <div className='w-full h-1/2'>
                  <Link to={`/details/${country.name.common}`}>
                    <img className='w-full h-full rounded-t' src={country.flags.png} alt="" />
                  </Link>
                </div>
                <div className='pl-7 pt-3 '>
                  <h3 className={`text-xl ${darkMode ? 'text-white' : 'text-black'} font-bold`}>{country.name.common}</h3>
                  <div className='pt-4'>
                    <p className={`font-bold text-sm ${darkMode ? 'text-very_light_gray' : 'text-gray-700'} ${darkMode ? 'text-very_light_gray' : 'text-gray-700'}`}>Population: <span className={` font-normal ${darkMode ? 'text-gray-300' : 'text-gray-500'} `}>{country.population}</span></p>
                    <p className={`font-bold text-sm ${darkMode ? 'text-very_light_gray' : 'text-gray-700'} pt-1`}>Region: <span className={` font-normal ${darkMode ? 'text-gray-300' : 'text-gray-500'} `}>{country.region}</span></p>
                    <p className={`font-bold text-sm ${darkMode ? 'text-very_light_gray' : 'text-gray-700'} pt-1`}>Capital: <span className={` font-normal ${darkMode ? 'text-gray-300' : 'text-gray-500'} `}>{country.capital}</span></p>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
    </>
  )
}

export default Cards