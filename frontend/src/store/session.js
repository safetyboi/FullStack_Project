import { csrfFetch } from "./csrf";

const RECEIVE_USER = 'RECEIVE_USER';
const REMOVE_USER = 'REMOVE_USER';

export const receiveUser = (user) => ({
  type: RECEIVE_USER,
  user
});

export const removeUser = (userId) => ({
  type: REMOVE_USER,
  userId
});

export const loginUser = user => async dispatch => {
  
  const {username, email, password} = user;
  let res = await csrfFetch('/api/session', {
    method: 'POST',
    body: JSON.stringify({
      username,
      email,
      password
    })
  });
  
  let data = await res.json();
  
  if (data.errors === undefined) {
      storeCurrentUser(data.user);
      dispatch(receiveUser(data.user));
  }
  return data;
}

export const logoutUser = userId => async dispatch => {
  let res = await csrfFetch('/api/session', { //we're not using 'res' anywhere. Why?
    method: 'DELETE',
  });

  sessionStorage.setItem('currentUser', null);
  dispatch(removeUser(userId));
} 

export const signupUser = user => async dispatch => { //does it take in a user? I don't know
    const {username, email, password} = user; 
    
  let res = await csrfFetch('/api/users', {
      method: 'POST',
      body: JSON.stringify({
      username,
      password,
      email
      }) //they want email, password, username, etc.
    });

    let data = await res.json();
    if (data.errors === undefined) {
      storeCurrentUser(data.user);
      dispatch(receiveUser(data.user))
    }
  return data; //why are we returning this?

}

const SessionReducer = (state = initialState, action) => {
  switch(action.type) {
    case RECEIVE_USER:
      
      return {...state, user: action.user}
    case REMOVE_USER:
      
      return {...state, user: null}
    default:
      return state;
  }
}

export const restoreSession = () => async dispatch => {
  
  
  const response = await csrfFetch("/api/session");
  storeCSRFToken(response);
  const data = await response.json();
  
  
  storeCurrentUser(data.user);
  dispatch(receiveUser(data.user));
  return response;
};

const storeCSRFToken = response => {
  const csrfToken = response.headers.get("X-CSRF-Token");
  if (csrfToken) sessionStorage.setItem("X-CSRF-Token", csrfToken);
}

const storeCurrentUser = user => {
  if (user) sessionStorage.setItem("currentUser", JSON.stringify(user));
  else sessionStorage.removeItem("currentUser");
}


  const initialState = { user: null };


export default SessionReducer;