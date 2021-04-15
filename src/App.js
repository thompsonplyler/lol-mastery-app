import React from 'react';
import './App.css';
import { Component } from 'react';
import ChampInfo from "./containers/ChampionInfo"

class App extends Component {

  state = {
    value: ``,
    submitted: false,
    mastery_champs: [],
    region: `na`
  }

handleChange =(event) => {
  this.setState({value: event.target.value})
}

handleSelect = (event) => {
  this.setState({region:event.target.value})
}

handleSubmit=(event)=> {
  event.preventDefault()
  this.setState({submitted: true})
  
  // fetch(`https://nameless-depths-56520.herokuapp.com/api/v1/requests/?summoner_name=${this.state.value}&region=${this.state.region}`,{
    fetch(`https://fresh-under-one-sky-email-api.herokuapp.com/api/v1/requests/?summoner_name=${this.state.value}&region=${this.state.region}`,{
  method: "POST",
  mode: "cors",

})
  .then(r=>r.json())
  .then(stats=> { 
      console.log(this.state.region)
      this.setState({mastery_champs:stats})
  }
  //work?
  )
  .catch(error=>console.log(error))
}


  render(){

    return (
      
    
    <div className="App">
      <header className={this.state.submitted ? "App-submitted" : "App-header"} >
        <form onSubmit={this.handleSubmit}>
          <label>Summoner Name:
            <input type="text" name="summoner" value={this.state.value} onChange={this.handleChange}/>
          </label>
          <label> Region:
            <select value = {this.state.region} onChange={this.handleSelect}>
            <option value='na'>NA</option>
            <option value='br'>BR</option>
            <option value='euw'>EUW</option>
            <option value='eune'>EUNE</option>
            <option value='kr'>KR</option>
            <option value='lan'>LAN</option>
            <option value='las'>LAS</option>
            <option value='oce'>OCE</option>
            <option value='jp'>JP</option>
            <option value='ru'>RU</option>
            <option value='tr'>TR</option>
            </select>
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
