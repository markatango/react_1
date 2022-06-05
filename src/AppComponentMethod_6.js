// import React, { Component } from 'react';
import React from 'react';
import {useState, useEffect } from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';



const App = () => {
  const [ monsters, setMonsters ] = useState([]);
  const [ searchField, setSearchField ] = useState('');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => setMonsters(users));
  },[])

  const handleChange =  e => {setSearchField(e.target.value)}

    // const { monsters, searchField } = this.state; Using useState hook
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()));

    return (
      
      <div className='App'>  
        <h1>Monsters Rolodex</h1>
        <SearchBox 
          handleChange={handleChange}
          placeHolder="Search Monsters"
        />
        <CardList monsters={filteredMonsters}></CardList>
      </div>
    );
}
  
export default App;
