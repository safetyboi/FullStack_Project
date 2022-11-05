import { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { fetchAllDonuts } from '../../../store/donutReducer'; 
import { NavLink } from 'react-router-dom';
import { DonutShow } from '../show/DonutShow';


export const DonutIndex = (props) => {
    
    const donuts = useSelector(state => Object.values(state.donuts));
    const dispatch = useDispatch();
  
    useEffect(() => {
      dispatch(fetchAllDonuts())
    }, [dispatch]);
    return(
      <>
        <div className='donut-index-container'>
          <h2 className="index-header">Our Donuts</h2>
          <ul className='donuts-ul'>
          {donuts.map(donut => (
            <>
            <li className="index-item">
            <NavLink to={`/donuts/${donut.id}`} >{donut.name}</NavLink>
            </li>
            </>
          ))}
          </ul>
        </div>
        
      </>
    )
}

export default DonutIndex;