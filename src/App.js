import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
// import C from './data/champion_constants'
import ChampInfo from "./containers/ChampionInfo"
// import {
//   BrowserRouter as Router,
//   Route
// } from 'react-router-dom';
// import {withRouter} from 'react-router'
// import {Redirect} from 'react-router'
// import champions from './data/champion.json'

class App extends Component {

  state = {
    value: ``,
    submitted: false,
    mastery_champs: []
  }

handleChange =(event) => {
  this.setState(
    {
      value: event.target.value
    }
    )
}

handleSubmit=(event)=> {
  event.preventDefault()
  this.setState({
    submitted: true
  })
  // event.preventDefault();
  fetch(`http://localhost:3002/api/v1/requests/?summoner_name=${this.state.value}`,{
  method: "POST",
  mode: "cors",
  // headers: "Access-Control-Allow-Origin "
})
  .then(r=>r.json())
  .then(stats=> { 
      this.setState({mastery_champs:stats})
  }
  )
}
// //     stats.forEach(champion => {
// //       // let {championId} = champion
// //       // console.log(championId)
// //       // console.log(C[`${championId}`])
// //       this.setState({
// //         mastery_champs: stats
// //       })
      
// //     });
    
// // })
// //   .catch(error=> {
// //     console.log("Fetch not successful. Here's your error:", error, `\n ${error}`)})
//     event.preventDefault();

// )}

  render(){

    return (
      
    
    <div className="App">
      <header className={this.state.submitted ? "App-submitted" : "App-header"} >
        <form onSubmit={this.handleSubmit}>
          <label>Summoner Name:
            <br /> 
            <input type="text" name="summoner" value={this.state.value} onChange={this.handleChange}/>
          </label>
          <br />
          <input type="submit" value="Submit" />
        </form>
      </header>
      <article>
        { (this.state.submitted) ? <ChampInfo mastery_champs={this.state.mastery_champs}/>: null}
      </article>
    </div>
  
  );

}}

export default App
