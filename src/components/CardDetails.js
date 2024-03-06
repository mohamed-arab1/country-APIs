import { Link, useParams } from "react-router-dom";
import { BiArrowBack } from 'react-icons/bi'
import { useEffect, useState } from "react";
import { useSelector } from 'react-redux'

import data from '../data/data.json'

const filterCountries = (countries, name) => {
    return countries.filter(country => country.name === name)[0]
}

const CardDetails = () => {
    const  darkMode = useSelector((state) => state.darkModeReducer.darkMode);
    let {name} = useParams()
    const [country, setCountry] = useState()
    const [countries] = useState(data);

    useEffect(() => {
        setCountry(filterCountries(countries,name))
    }, [name, countries])


  return (
    <div className={`w-full pt-10 min-h-[690px] ${darkMode ? 'bg-very_dark_blue' : 'bg-slate-100'} `}>
        <div className='ml-5 w-32'>
            <button className={`sm:ml-24 text-xl border py-1 px-5 ${darkMode ? 'text-white' : 'text-black'} `}>
                <Link to='/' className="flex gap-3 items-center" >
                    <BiArrowBack/> Back
                </Link>
            </button>
        </div>
        {
            country ? 
                <div className="w-full min-h-[600px] flex flex-col lg:flex-row justify-around items-center mt-5 lg:mt-0">
                    <div className="lg:w-1/2 h-full flex justify-center items-center">
                        <img src={`${country.flag}`} className="w-2/3 lg:w-3/4" alt={country.name} />
                    </div>
                    <div className="md:w-2/3 lg:w-1/2 pl-4 sm:pt-0 flex flex-col gap-6 mx-auto lg:mx-0 lg:mt-0 mt-5">
                        <div className="w-full">
                            <h2 className={`text-3xl font-bold ${darkMode ? 'text-white' : 'text-black'}`}>{country.name}</h2>
                        </div>
                        <div className="flex flex-col sm:gap-0 gap-5 sm:flex-row w-full justify-between">
                            <div className="sm:w-1/2 flex flex-col  gap-2">
                                <p className={`font-bold text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'} `}>Native Name: <span className={`font-normal ${darkMode ? 'text-gray-100' : 'text-gray-500'} `}>{country.nativeName}</span></p>
                                <p className={`font-bold text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'} `}>Population: <span className={`font-normal ${darkMode ? 'text-gray-100' : 'text-gray-500'} `}>{country.population}</span></p>
                                <p className={`font-bold text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'} `}>Region: <span className={`font-normal ${darkMode ? 'text-gray-100' : 'text-gray-500'} `}>{country.region}</span></p>
                                <p className={`font-bold text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'} `}>Sub Region: <span className={`font-normal ${darkMode ? 'text-gray-100' : 'text-gray-500'} `}>{country.subregion}</span></p>
                                <p className={`font-bold text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'} `}>Sub Region: <span className={`font-normal ${darkMode ? 'text-gray-100' : 'text-gray-500'} `}>{country.capital}</span></p>
                            </div>
                            <div className="sm:w-1/2 flex flex-col  gap-2">
                                <p className={`font-bold text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'} `}>Top Level Domain: <span className={`font-normal ${darkMode ? 'text-gray-100' : 'text-gray-500'} `}>{country.topLevelDomain}</span></p>
                                <p className={`font-bold text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'} `}>currencies: <span className={`font-normal ${darkMode ? 'text-gray-100' : 'text-gray-500'} `}>{country.currencies ? country.currencies[0].name : "The currencies6 not exist"}</span></p>
                                <p className={`font-bold text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'} `}>Languages: <span className={`font-normal ${darkMode ? 'text-gray-100' : 'text-gray-500'} `}>{country.languages[0].name }</span></p>
                            </div>
                        </div>
                        <div className="w-full">
                            <p className={`font-bold text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                                Borders: 
                                {
                                 country.borders ?   
                                    country.borders.map(border => (
                                        <span className={`ml-3 px-4 py-1 border rounded font-normal ${darkMode ? 'text-gray-100 border-none bg-dark_blue' : 'text-gray-500'} `} key={border}>
                                        {border}
                                    </span>
                                    ))
                                    : <span> No borders</span>
                                }
                            </p>
                        </div>
                    </div>
                </div>
            : <div></div>
        }
    </div>
  )
}

export default CardDetails;