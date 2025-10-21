import { useContext, useEffect, useState } from "react";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import CountrycarddetailShimmer from "./CountrycarddetailShimmer";
import { ThemeContext } from "../contexts/ThemeContext";

export default function Countrycarddetail() {
  let { name } = useParams();
  let navigate = useNavigate();

  let [countrydata, setCountrydata] = useState(null);
  let [notFound, setNotFound] = useState(false);
    const [isDark ] = useContext(ThemeContext)
  // let locationState =  useLocation();
  // console.log(locationState.state);

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/name/${name}?fullText=true`)
      .then((res) => res.json())
      .then(([data]) => {
        setCountrydata({
          ImageURL: data.flags.svg,
          ImageURLAlt: data.flags.alt,
          name: data.name.common || data.name,
          nativeName: Object.values(data.name.nativeName || {} )[0]?.common,
          population: data.population.toLocaleString(),
          region: data.region,
          subregion: data.subregion,
          capital: data.capital.join(", "),
          tld: data.tld?.[0],
          currencies: Object.values(data?.currencies || {})
            .map((curr) => curr.name)
            .join(", "),
          languages: Object.values(data.languages || {}).join(", "),
          borders: [],
        });

        if (!data.borders) {
          data.borders = [];
        }
        Promise.all(
          data.borders.map((br) => {
           return fetch(`https://restcountries.com/v3.1/alpha/${br}`)
              .then((res) => res.json())
              .then(([borders]) => borders.name.common);
          })
        ).then((allbordername)=>{
          setCountrydata((prevState) => ({
                  ...prevState,
                  borders: allbordername,
                }));
        })

      })
      .catch((err) => {
        console.log(err);
        setNotFound(true);
      });
  }, [name]);

  if (notFound) {
    return (
      <h2 style={{ textAlign: "center", fontSize: "40px" }}>
        {" "}
        <span style={{ fontSize: "160px" }}>404</span> <br /> Error Found
      </h2>
    );
  }

  return countrydata == null ? (
    // <h1 style={{ textAlign: "center" }}>Loading.....</h1>
    <CountrycarddetailShimmer />
  ) : (

    <div className={ `innrpg ${isDark ? "dark" : ""} `}>
    <div className="country-details-container ">
      <span className="back-button" onClick={() => navigate(-1)}>
        <i className="fa-solid fa-arrow-left"></i>&nbsp; Back
      </span>
      <div className="country-details">
        <img src={countrydata.ImageURL} alt={countrydata.ImageURLAlt} />
        <div className="details-text-container">
          <h1>{countrydata.name}</h1>
          <div className="details-text  ">
            <p>
              <b>Native Name: </b>
              <span className="native-name">{countrydata.nativeName || countrydata.name}</span>
            </p>
            <p>
              <b>Population: </b>
              <span className="population">{countrydata.population}</span>
            </p>
            <p>
              <b>Region: </b>
              <span className="region">{countrydata.region}</span>
            </p>
            <p>
              <b>Sub Region: </b>
              <span className="sub-region">{countrydata.subregion}</span>
            </p>
            <p>
              <b>Capital: </b>
              <span className="capital">{countrydata.capital}</span>
            </p>
            <p>
              <b>Top Level Domain: </b>
              <span className="top-level-domain">{countrydata.tld}</span>
            </p>
            <p>
              <b>Currencies: </b>
              <span className="currencies">{countrydata.currencies}</span>
            </p>
            <p>
              <b>Languages: </b>
              <span className="languages">{countrydata.languages}</span>
            </p>
          </div>
          {countrydata.borders.lenght !== 0 && (
            <div className="border-countries">
              <b>Border Countries: </b>&nbsp;
              {countrydata.borders.map((item) => (
                <Link key={item} to={`/${item}`}>
                  {item}
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
    </div>
  );
}
