import { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { fetchAllDonuts } from '../../../store/donutReducer'; 
import { NavLink } from 'react-router-dom';
import { DonutShow } from '../show/DonutShow';
import './DonutIndex.css'
import placeholderImage from '../show/orxata-glaze-removebg-preview.png'


export const DonutIndex = (props) => {
    
    const donuts = useSelector(state => Object.values(state.donuts));
    const dispatch = useDispatch();
  
    useEffect(() => {
      dispatch(fetchAllDonuts())
    }, [dispatch]);
    return(
      <>
        <div className="search-by-type"></div>
        <div className='donut-index-container'>
        
          {donuts.map(donut => (
            <>
            <div className='index-item-container'>
            <div className="index-item">
            <NavLink to={`/donuts/${donut.id}`}>
            {/* <img className="index-item-image" src={placeholderImage}></img> */}
            <img className="index-item-image" src={donut.imageURL[0]}></img>
            {/* <div className="index-item-name">{donut.name}</div> */}
            </NavLink>
            </div>
            </div>
            </>
          ))}
          </div>
        
        
      </>
    )
}

export default DonutIndex;