import React from 'react'
const CountrycardShimmer = () => {
   
  return (
    <div className="countries-container">
       {
        Array.from({length:16}).map((el, i)=>{
            return <div key={i}  className="country-card shimmer_card">
              <div style={{paddingTop: "154px"}}> 
              <p style={{height: "26px",margin: "12px 9px 38px",backgroundColor:"#b0adad"}}></p>
              <p style={{height: "26px",margin: "12px 9px",backgroundColor:"#b0adad"}}></p>
              <p style={{height: "26px",margin: "12px 9px",backgroundColor:"#b0adad"}}></p>
              <p style={{height: "26px",margin: "12px 9px",backgroundColor:"#b0adad"}}></p>
              </div>
            </div>
        })
       }  
    </div>
  )
}

export default CountrycardShimmer