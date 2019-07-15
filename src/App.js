import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
// import {
//   BrowserRouter as Router,
//   Route
// } from 'react-router-dom';
// import {withRouter} from 'react-router'
// import {Redirect} from 'react-router'
import champions from './data/champion.json'

class App extends Component {

  state = {
    value: ``
  }

handleChange =(event) => {
  this.setState(
    {
      value: event.target.value
    }
    )
}

handleSubmit=(event)=> {
  fetch(`http://localhost:3001/api/v1/requests/?summoner_name=${this.state.value}`,
  {method: "POST",
  mode: "cors"
  // headers: "Access-Control-Allow-Origin "
})
  .then(r=>r.json())
  .then(data=> { 
    console.log(data)
    console.log(champions)
  }
  )
  event.preventDefault();
}

  render(){
    return (
    
    <div className="App">
      <header className="App-header">
        <form onSubmit={this.handleSubmit}>
          <label>Summoner Name:
            <br /> 
            <input type="text" name="summoner" value={this.state.value} onChange={this.handleChange}/>
          </label>
          <br />
          <input type="submit" value="Submit" />
        </form>
      </header>
    </div>
  
  );

}}

export default App
