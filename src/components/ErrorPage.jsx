import React from 'react'
import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const error = useRouteError();
    console.log(error);
  return (
    <>
        <div style={{textAlign:"center",marginTop:"100px"}}>
            <h2 style={{fontSize:"160px",marginBottom:"0"}}>{error.status}</h2>
            <h2 style={{fontSize:"40px"}}>{error.statusText}</h2>
        </div>
    </>
  )
}

export default ErrorPage