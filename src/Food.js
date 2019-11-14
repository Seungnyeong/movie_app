import React from 'react';
import PropTypes from 'prop-types';

function Food({name, picture, rating}){
  
  return( 
  <div>
    <h2>I LIKE {name}</h2>
      <img src={picture} alt={name}/>
      <h4>{rating}/5.0</h4>
  </div>
  )
}

Food.propType ={
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
}

const favFood = [
  {
    id : 1,
    name : "ironman1",
    image : "http://file3.instiz.net/data/file3/2018/05/19/6/f/5/6f54ace6e4a4dac07057f71a72ae8d75.gif",
    rating : "5"
  },
  {
    id : 2,
    name : "ironman2",
    image : "http://file3.instiz.net/data/file3/2018/05/19/e/f/0/ef08db72ff784adb11ed6d5fa88bf405.gif",
    rating : 4.3
  },
  {
    id : 3,
    name : "ironman3",
    image : "http://file3.instiz.net/data/file3/2018/05/19/f/f/e/ffedf6e527d28f97fa9be463f947a4f7.gif",
    rating : 4.8
  } 
]



function App() {
  return (
    <div>
      {favFood.map(man => (
        <Food key={man.id} name={man.name} picture={man.image} rating={man.rating}/> 
      ))}   
    </div>
    
  );
}

export default App;
