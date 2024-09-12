import React, {useState, useEffect} from 'react';
import './App.css';
//import axios from 'axios';

//import Characters from './components/Character';
//import WithListLoading from './components/Character';
import {Characters, WithListLoading} from './components/Character';

//const url = 'https://swapi.dev/api/people';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const [appstate, setAppstate] = useState({loading: false, chars : null});

  useEffect(() => {
    setAppstate({ loading: true });
    const ListLoading = WithListLoading(Characters);
    const charurl = `https://swapi.dev/api/people`;
    fetch(charurl)
      .then((res) => res.json())
      .then((chars) => {
        setAppstate({loading: false, chars : chars});
      });
  }, [setAppstate]);

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      <div>

        <ListLoading isLoading={appstate.loading} repos={appstate.repos} />
        
      </div>
    </div>
  );
}

export default App;
//<Characters chars={appstate.chars}/>