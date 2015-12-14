import { combineReducers } from 'redux';
import _ from 'lodash';


const TEST_DATA = {
  tops: [],
  bottoms: [],
  accessories: [],
  shoes: []
}

//
// const callingArticle = (state = TEST_DATA, action) => {
//   switch(action.type){
//     case 'CALL_ARTICLE':
//     console.log(state)
//     return state
//   }
//   return state
// }
//
// const logger = (state = null, action) => {
//   console.log('ACTION ->', action);
//   return state;
// }

function articlesByCategory(state = {}, action){
  switch (action.type) {
    case 'RECEIVE_ARTICLES':

      state[action.payload.category] = action.payload.articles;
      return state;
      
    default:
      return state;
  }
}

const reducers = combineReducers({articlesByCategory})

export default reducers
