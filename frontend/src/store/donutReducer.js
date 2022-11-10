import { csrfFetch } from "./csrf";


const RECEIVE_DONUT = 'RECEIVE_DONUT';
const RECEIVE_DONUTS = 'RECEIVE_DONUTS';
const REMOVE_DONUT = 'REMOVE_DONUT';

//POJOs:

export const receiveDonut = donut => {
  debugger
    return {
      type: RECEIVE_DONUT,
      donut
    }
  };
  
  export const receiveDonuts = donuts => {
    
    return {
      type: RECEIVE_DONUTS,
      donuts
    }
  };
  
  export const removeDonut = donutId => ({
    type: REMOVE_DONUT,
    donutId
  });

  //thunks:

  export const fetchAllDonuts = () => async dispatch => { 

    let res = await csrfFetch('/api/donuts')
    // let data;
    if (res.ok) {
        let data = await res.json();
        dispatch(receiveDonuts(data))
        return data; //why are we returning this?
    }
  }

  export const fetchDonut = (donutId) => async dispatch => {

    let res = await csrfFetch(`/api/donuts/${donutId}`);
    if (res.ok) {
      let data = await res.json();
      debugger
        dispatch(receiveDonut(data.donut));
        return data; //why though
    }
  }


//reducer:

const DonutReducer = (state = {}, action) => {
    Object.freeze(state); //why do we 'freeze' again?
    const nextState = { ...state };
  
    switch (action.type) {
      case RECEIVE_DONUT:
        debugger
        nextState[action.donut.id] = action.donut;
        return nextState;
      case RECEIVE_DONUTS:
        return { ...nextState, ...action.donuts };
      case REMOVE_DONUT:
        delete nextState[action.donutId];
        return nextState;
      default:
        return nextState;
    };
  };
  
  export default DonutReducer;