import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";

export const MapDonuts = ({donuts, filteredDonuts}) => {
    
    // useEffect(()=> {

    // }, [donuts])

    const renderedDonuts = filteredDonuts?.length ? filteredDonuts : donuts;

    return (
        <>
        {renderedDonuts.map( donut => (
            <>
            <div className='index-item-container'>
            <div className="index-item">
            <NavLink key={donut.id} to={`/donuts/${donut.id}`}>
            <img className="index-item-image" src={donut.imageURL[0]}></img>
            </NavLink>
            </div>
            </div>
            </>
          ))}
        </>
      ) 
}