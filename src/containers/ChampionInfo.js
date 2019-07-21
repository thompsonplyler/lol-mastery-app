import React from 'react';
// import logo from './logo.svg';
import '../ChampionInfo.css';
import { Component } from 'react';
import C from '../data/champion_constants'
import * as bigData from '../data/champion.json'
import m1 from '../assets/images/1.png'
import m2 from '../assets/images/2.png'
import m3 from '../assets/images/3.png'
import m4 from '../assets/images/4.png'
import m5 from '../assets/images/5.png'
import m6 from '../assets/images/6.png'
import m7 from '../assets/images/7.png'



// import {
//   BrowserRouter as Router,
//   Route
// } from 'react-router-dom';
// import {withRouter} from 'react-router'
// import {Redirect} from 'react-router'
// import champions from './data/champion.json'

class ChampInfo extends Component {

    champInfo = (data) => {
        console.log(data.length)
        return data.map((champion, index)=>{
            
            let {championId, championLevel, championPoints} = champion
            let champName = C[championId]
            if (index < 3) {return <div className="Champion-Info-Box-Top">
            <h4>{champName}</h4>
            <img className='champ-icon-mastery' src={`https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/champion-icons/${championId}.png`} /><br/>
            {/* <img className='champ-icon-mastery-top' src="/images/1.png" /> */}
            Mastery Level: {championLevel}<br/>
            Mastery Points: {championPoints}
        </div>}
        else {
            return <div className="Champion-Info-Box">
             <h4>{champName}</h4>
             <img className='champ-icon-mastery' src={`https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/champion-icons/${championId}.png`} /><br/>
             Mastery Level: {championLevel}<br/>
             Mastery Points: {championPoints}
             </div>
             }

        })
    }

    
    render(){
        let {mastery_champs} = this.props
        return <div className="Champion-Info-Container">{this.champInfo(mastery_champs)}</div>
    }

}

export default ChampInfo
