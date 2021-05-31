// Write your Character component here

import react, {useState, useEffect} from 'react';
import axios from 'axios';


const url = 'https://swapi.dev/api/people';

function myfunction(){
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

export default myfunction;
