/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/

/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/

import axios from 'axios';

export const FETCH_SMURFS_REQUEST = 'FETCH_SMURFS_REQUEST';
export const FETCH_SMURFS_SUCCESS = 'FETCH_SMURFS_SUCCESS';
export const FETCH_SMURFS_FAILURE = 'FETCH_SMURFS_FAILURE';

export const ADD_SMURFS_REQUEST = 'ADD_SMURFS_REQUEST';
export const ADD_SMURFS_SUCCESS = 'ADD_SMURFS_SUCCESS';
export const ADD_SMURFS_FAILURE = 'ADD_SMURFS_FAILURE';

export const DELETE_SMURFS_REQUEST = 'DELETE_SMURFS_REQUEST';
export const DELETE_SMURFS_SUCCESS = 'DELETE_SMURFS_SUCCESS';
export const DELETE_SMURFS_FAILURE = 'DELETE_SMURFS_FAILURE';

export const UPDATE_SMURFS_REQUEST = 'UPDATE_SMURFS_REQUEST';
export const UPDATE_FORM = 'UPDATE_FORM';

export const getSmurfs = () => dispatch => {
    dispatch({ type: FETCH_SMURFS_REQUEST });
    axios
      .get('http://localhost:3333/smurfs/')
      .then(response => {
        console.log('smurf fetch finished');
        dispatch({ type: FETCH_SMURFS_SUCCESS, payload: response.data });
      })
      .catch(err => dispatch({ type: FETCH_SMURFS_FAILURE, payload: err }));
  };

  export const addSmurf = smurf => dispatch => {
    dispatch({ type: ADD_SMURFS_REQUEST });
    axios
      .post('http://localhost:3333/smurfs/', smurf)
      .then(response => {
        console.log('fetch finished');
        dispatch({ type: ADD_SMURFS_SUCCESS, payload: response.data });
      })
      .catch(err => dispatch({ type: ADD_SMURFS_FAILURE, payload: err }));
  };

  export const deleteSmurf = (id) => dispatch => {
    dispatch({ type: FETCH_SMURFS_REQUEST });
    axios
      .delete(`http://localhost:3333/smurfs/${id}`)
      .then(response => {
        console.log('smurf fetch finished');
        dispatch({ type: DELETE_SMURFS_SUCCESS, payload: response.data });
      })
      .catch(err => dispatch({ type: DELETE_SMURFS_FAILURE, payload: err }));
  };

  export const updateSmurf = (smurf) => dispatch => {
    dispatch({ type: UPDATE_SMURFS_REQUEST });
    axios
      .put(`http://localhost:3333/smurfs/${smurf.id}`, smurf)
      //LOL THIS WORKS CUZ YOU HAVE THE WHOLE OBJECT! YOU ARE UNSTOPABLE!
      .then(response => {
        console.log('smurf fetch finished');
        dispatch({ type: ADD_SMURFS_SUCCESS, payload: response.data });
      })
      .catch(err => dispatch({ type: ADD_SMURFS_FAILURE, payload: err }));
  };

  export const updateForm = (currentSmurf) => {
    

   return ({ type: UPDATE_FORM, payload: currentSmurf });

  }