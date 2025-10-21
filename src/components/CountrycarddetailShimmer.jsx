import React from 'react'

const CountrycarddetailShimmer = () => {
  return (
    <div className='country-details-container '>
        <span className="back-button shimmer_list_cl"></span>
        <div className="country-details">
            <img  className='shimmer_list_cl' style={{height:"290px"}} alt="" />
            <div className="details-text-container">
                <h1 className='shimmer_list_head'></h1>
                <div className="details-text">
                    <p className='shimmer_list_cl'></p>
                    <p className='shimmer_list_cl'></p>
                    <p className='shimmer_list_cl'></p>
                    <p className='shimmer_list_cl'></p>
                    <p className='shimmer_list_cl'></p>
                    <p className='shimmer_list_cl'></p>
                    <p className='shimmer_list_cl'></p>
                    <p className='shimmer_list_cl'></p>
                </div>
                <div className="border-countries">
                    <span className='shimmer_list_cl'></span>
                    <a className="shimmer_list_cl"></a>
                    <a className="shimmer_list_cl"></a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CountrycarddetailShimmer