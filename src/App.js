import React, { Component } from 'react';
import './App.css';
import {CardList} from './CardList';
import './App.css'
import {SearchField} from './SearchField.js'



class App extends Component {
  constructor(){
    super();
    this.state={
      monster:[],
      SearchField:''
    }
  }
  
  componentDidMount()
  {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(Response=> Response.json())
    .then(users=> this.setState({monster:users}))
  }
  
  handler=(event)=>{
    this.setState({SearchField: event.target.value})
  }
  render() {
    const filteredMonster= this.state.monster.filter(monsters=>
    (
      monsters.name.toLowerCase().includes(this.state.SearchField.toLowerCase())
    )
      
    );
    
    return (
        <div className="App">
        <h1>Monster Rolodex</h1>
        <SearchField 
        handler={ this.handler} 
        placeholder="search monsters"/>
        <CardList monster={filteredMonster}/>
        </div>
       
                
    );
  }
}

export default App;
