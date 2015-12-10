import { combineReducers } from 'redux';
import _ from 'lodash';

const TEST_DATA =
[
  {id:1, discription: 'Blah',
          type: 'Top',
          brand: 'FredR',
          weather: 'Cold',
          style:'casual',
          img: 'http://lorempixel.com/240/240/fashion/'},
  {id:2, discription: 'Boo',
          type: 'Bottom',
          brand: 'KB',
          weather: 'Warm',
          style:'fancy',
          img: 'http://lorempixel.com/240/240/fashion/'},
  {id:3, discription: 'Hoot',
          type: 'Shoes',
          brand: 'TayStyle',
          weather: 'big',
          style:'balling',
          img: 'http://lorempixel.com/240/240/fashion/'},

]


const articles = (state = TEST_DATA, action) => {
  switch(action.type){
    case 'CALL_ARTICLE':
    console.log(state)
    return state
  }
  return state
}

const logger = (state = null, action) => {
  console.log('ACTION ->', action);
  return state;
}

export default combineReducers({articles, logger})
