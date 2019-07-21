import React from 'react';
// import logo from './logo.svg';
import '../ChampionInfo.css';
import { Component } from 'react';
import C from '../data/champion_constants'
import * as bigData from '../data/champion.json'
// import {
//   BrowserRouter as Router,
//   Route
// } from 'react-router-dom';
// import {withRouter} from 'react-router'
// import {Redirect} from 'react-router'
// import champions from './data/champion.json'

class ChampInfo extends Component {

    champInfo = (data) => {
        return data.map(champion=>{
            
            let {championId, championLevel, championPoints} = champion
            let champName = C[championId]

            console.log(champName)
            console.log(`https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/champion-icons/${championId}.png`)
            return <div className="Champion-Info-Box">
            {champName}<br />
            <img src={`https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/champion-icons/${championId}.png`} /><br/>
            Mastery Level: {championLevel}<br/>
            Mastery Points: {championPoints}

            </div>
        })
    }

    
    render(){
        let {mastery_champs} = this.props
        return <div className="Champion-Info-Container">{this.champInfo(mastery_champs)}</div>
    }

}

export default ChampInfo
