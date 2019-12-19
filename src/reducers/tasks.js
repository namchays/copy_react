import * as types from './../constants/ActionTypes';
var innitialState = [];

var myReducer = (state = innitialState, action) =>{
    switch (action.type) {
        case types.LIST_ALL:  return state;
        default:   return state;
    }
  
}




export default myReducer;