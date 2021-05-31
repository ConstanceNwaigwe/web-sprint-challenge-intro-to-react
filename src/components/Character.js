// Write your Character component here

import React from 'react';
//import axios from 'axios';


//const url = 'https://swapi.dev/api/people';


const Characters = (props) => {
    const {chars} = props;

    return (
        <div>
            {chars.map((char) => {
                return (
                    <ul>
                        <h3>{char.name}</h3>
                        <li>Height: {char.height} </li>
                        <li>Mass: {char.mass}</li>
                        <li>Hair color: {char.hair_color}</li>
                        <li>Skin color: {char.skin_color}</li>
                        <li>Eye color: {char.eye_color}</li>
                        <li>Birth year: {char.birth_year}</li>
                        <li>Gender: {char.gender}</li>
                    </ul>
                );
            })}
        </div>
    );
};

//export default Characters;

function WithListLoading(Component) {
    return function WihLoadingComponent({ isLoading, ...props }) {
      if (!isLoading) return <Component {...props} />;
      return (
        <p style={{ textAlign: 'center', fontSize: '30px' }}>
          Hold on, fetching data may take some time :)
        </p>
      );
    };
  }
  export {Characters, WithListLoading};

/*function myfunction(){
    axios.get(url)
        .then(res => {
            res.data.forEach( charitem => 
                {<div>
                    <button onclick="myFunction()" className="dropbtn">Dropdown</button>
                    <div id="myDropdown" className="dropdown-content">
                        <p>Name: {charitem.name}</p>
                        <p>Gender: {charitem.gender}</p>
                        <p>Height: {charitem.height}</p>
                    </div>
                </div>}
            )
        })
        .catch(err => {debugger})
}

export default myfunction;*/
