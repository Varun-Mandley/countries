// import countrydata from "../countrydata"
import { useEffect, useState } from "react";
import Countrycard from "./Countrycard";
import CountrycardShimmer from "./CountrycardShimmer";


export default function CountriesList({query}) {
  let [countrydata, setCountrydata] = useState([])

  useEffect(()=>{
      fetch("https://restcountries.com/v3.1/independent")
      .then(res=>res.json())
      .then(data => {
        setCountrydata(data);
      })
  },[])

  return (
    <>
      <div className='countries-container'>
        { !countrydata.length ? <CountrycardShimmer /> : 
          countrydata
          .filter((item)=>item.name.common.toLowerCase().includes(query) || item.region.toLowerCase().includes(query)).map((country)=>{
            return <Countrycard key={country.name.common} name={country.name.common} imageURL={country.flags.svg} population={country.population.toLocaleString('en-IN')}  region={country.region} capital={country.capital?.[0]} />
          })
        }
      </div>
    </>
  )
}
