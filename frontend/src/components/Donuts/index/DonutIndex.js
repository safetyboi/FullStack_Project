import { useEffect, useRef, useState, forceUpdate } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { fetchAllDonuts, loadDonuts } from '../../../store/donutReducer'; 
import { NavLink } from 'react-router-dom';
import { DonutShow } from '../show/DonutShow';
import './DonutIndex.css'
import placeholderImage from '../show/orxata-glaze-removebg-preview.png'
import { MapDonuts } from './MapDonuts';



export const DonutIndex = (props) => {

    let donuts = useSelector(state => Object.values(state.donuts));
    const allTypes = donuts; //this is so that when the value of 'donuts' changes, there will always be a copy that includes all donuts
    const brioche = useSelector(loadDonuts("brioche"));
    const oldFashioned = useSelector(loadDonuts("old-fashioned"));
    const vegan = useSelector(loadDonuts("vegan"));     
    const dispatch = useDispatch();
    const donutsRef = useRef(donuts);
    const [filteredDonuts, setFilteredDonuts] = useState(donuts);


    console.log('filteredDonuts', filteredDonuts)
    console.log('donuts', donuts)
    console.log('donutsRef', donutsRef)


    const _setDonuts = (value) => {
      donutsRef.current = value;
      // setDonuts(value);
    }
  
    useEffect(() => {
      dispatch(fetchAllDonuts())
    }, []);

    useEffect(() => {
      console.log(filteredDonuts)
    }, [filteredDonuts])


    const filterBrioche = (e) => {
      e.preventDefault();
      setFilteredDonuts(brioche)
    }
    const filterOldFashioned = (e) => {
      e.preventDefault();
      setFilteredDonuts(oldFashioned)
    }
    const filterVegan = (e) => {
      e.preventDefault();
      setFilteredDonuts(vegan)
    }
    const filterAll = (e) => {
      e.preventDefault();
      setFilteredDonuts(allTypes);
    }    
    return filteredDonuts ? (
      <>
        <div className="search-by-type">
          <button className="sort-button" onClick={filterAll}>All</button>
          <button className="sort-button" onClick={filterBrioche}>Brioche</button>
          <button className="sort-button" onClick={filterOldFashioned}>Old-Fashioned</button>
          <button className="sort-button" onClick={filterVegan}>Vegan</button>
        </div>
        <div className='donut-index-container'>
          <MapDonuts key={donuts} donuts={donuts} filteredDonuts={filteredDonuts}/>
          </div>
        
        
      </>
    ) : (
      <>
      <div className="search-by-type">
          <button className="sort-button" onClick={filterAll}>All</button>
          <button className="sort-button" onClick={filterBrioche}>Brioche</button>
          <button className="sort-button" onClick={filterOldFashioned}>Old-Fashioned</button>
          <button className="sort-button" onClick={filterVegan}>Vegan</button>
        </div>
        <div className='donut-index-container'>
          <MapDonuts key={donuts} donuts={donuts}/>
          </div>
        </>
    );
  }
  
  export default DonutIndex;
  
  
  // export const loadEvent = eventId => state => {
    //   return state.events ? Object.values(state.events).filter(event => event._id === eventId)[0] : null
    // }

    //formerly inside of 'donut-index-container'
    // {donuts.map(donut => (
    //   <>
    //   <div className='index-item-container'>
    //   <div className="index-item">
    //   <NavLink to={`/donuts/${donut.id}`}>
    //   {/* <img className="index-item-image" src={placeholderImage}></img> */}
    //   <img className="index-item-image" src={donut.imageURL[0]}></img>
    //   {/* <div className="index-item-name">{donut.name}</div> */}
    //   </NavLink>
    //   </div>
    //   </div>
    //   </>
    // ))}