import React, { useContext } from 'react'
import Searchbar from "./Searchbar"
import Filtercountry from "./Filtercountry"
import CountriesList from "./CountriesList"
import { useState } from "react";
import { ThemeContext } from '../contexts/ThemeContext';

const Home = () => {
    const [query , setQuery ]= useState("");
    const [isDark ] = useContext(ThemeContext)
  return (
    <main className={` ${isDark ? "dark" : ""}`}>
        <div className="search-filter-container">
            <Searchbar setQuery={setQuery}/>
            <Filtercountry setQuery={setQuery}/>
        </div>
        <CountriesList query={query}/>
    </main>
  )
}

export default Home