/*
  Be sure to import in all of the action types from `../actions`
*/

/*
 Your initial/default state for this project could *Although does not have to* look a lot like this
 {
   smurfs: [],
   fetchingSmurfs: false
   addingSmurf: false
   updatingSmurf: false
   deletingSmurf: false
   error: null
 }
*/

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/

import {
  FETCH_SMURFS_START,
  FETCH_SMURFS_SUCCESS,
  FETCH_SMURFS_ERROR,
  ADD_SMURF_START,
  ADD_SMURF_SUCCESS,
  ADD_SMURF_ERROR,
} from '../actions'

const initialState = {
  smurfs: [],
  counter: 1,
  fetchingSmurfs: false,
  error: null,
  addingSmurf: false
}

function reducer(state = initialState, action) {
  switch(action.type) {
    case FETCH_SMURFS_START:
      return {
        ...state,
        fetchingSmurfs: true
    };
    case FETCH_SMURFS_SUCCESS:
      return {
        ...state,
        fetchingSmurfs: false,
        error: '',
        smurfs: action.payload
    };
    case FETCH_SMURFS_ERROR:
      return {
        ...state,
        error: action.payload.data.error,
        fetchingSmurfs: false
      };
    case ADD_SMURF_START:
      return {
        ...state,
        addingSmurf: true
      };
    case ADD_SMURF_SUCCESS:
      return {
        ...state,
        addingSmurf: false,
        error: '',
        smurfs: action.payload
      };
    case ADD_SMURF_ERROR:
      return {
        ...state,
        error: action.payload
      }
    default:
      return state;

  }
}

export default reducer;