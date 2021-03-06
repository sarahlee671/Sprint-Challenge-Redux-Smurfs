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

export const FETCH_SMURFS_START = 'FETCH_SMURFS_START';
export const FETCH_SMURFS_SUCCESS = 'FETCH_SMURFS_SUCCESS';
export const FETCH_SMURFS_ERROR = 'FETCH_SMURFS_ERROR';

export const getSmurfs = () => dispatch => {
  dispatch ({ type: FETCH_SMURFS_START });
  axios
    .get('http://localhost:3333/smurfs')
    .then(res => {
      console.log(res.data.results)
      console.log(getSmurfs)
      dispatch({ type: FETCH_SMURFS_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log(err.response);
      dispatch({
        type:FETCH_SMURFS_ERROR,
        payload: 'null'
      })
    })
}
export const ADD_SMURF_START = 'ADD_SMURFS_START';
export const ADD_SMURF_SUCCESS = 'ADD_SMURFS_SUCCESS';
export const ADD_SMURF_ERROR = 'ADD_SMURFS_ERROR';

export const addSmurf = newSmurf => dispatch => {
  dispatch({ type: ADD_SMURF_START });
  console.log(newSmurf)
  return axios
    .post('http://localhost:3333/smurfs', newSmurf)
    .then(res => {
    console.log(res)
      dispatch({ type: ADD_SMURF_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({
        type: ADD_SMURF_ERROR, payload: err.response })
    })

}