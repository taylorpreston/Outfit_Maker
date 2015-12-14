import $ from 'jquery';


function requestArticles(category) {
  return {
    type: 'REQUEST_ARTICLES',
    payload: {
      category
    }
  }
}

function receiveArticles(category, articles) {
  return {
    type: 'RECEIVE_ARTICLES',
    payload: {
      category,
      articles
    }
  }
}



export function getAllArticles(category) {
  return dispatch => {
      dispatch(requestArticles(category));

      setTimeout(() => {
        dispatch(receiveArticles(category, [
          { id:1, discription: 'Blah',
            type: 'Top',
            brand: 'FredR',
            weather: 'Cold',
            style:'casual',
            img: 'http://lorempixel.com/240/240/fashion/'
          },
          { id:2, discription: 'Boo',
            type: 'Bottom',
            brand: 'KB',
            weather: 'Warm',
            style:'fancy',
            img: 'http://lorempixel.com/240/240/fashion/'
          },
          { id:3, discription: 'Hoot',
            type: 'Shoes',
            brand: 'TayStyle',
            weather: 'big',
            style:'balling',
            img: 'http://lorempixel.com/240/240/fashion/'
          }
        ]));
      }, 1000);
  }
}
