import { Link } from "react-router-dom";

export default function Countrycard({name, imageURL,population,region,capital}) {
  return (
    <Link className="country-card" to={`${name}`}>
          <div className="countryflag">
            <img src={imageURL} alt={`${name} flag`}  />
          </div>
          <div className="card-text">
              <h3 className="card-title">{name}</h3>
              <p><b>Population: </b>{population}</p>
              <p><b>Region: </b>{region}</p>
              <p><b>Capital: </b>{capital}</p>
          </div>
    </Link>
  )
}
