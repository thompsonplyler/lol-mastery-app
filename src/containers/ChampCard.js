import React from 'react';
// import logo from './logo.svg';
import '../ChampionInfo.css';
import { Component } from 'react';
import C from '../data/champion_constants'
import TopChamps from '../containers/TopChamps'
import * as bigData from '../data/champion.json'
import m1 from '../assets/images/1.png'
import m2 from '../assets/images/2.png'
import m3 from '../assets/images/3.png'
import m4 from '../assets/images/4.png'
import m5 from '../assets/images/5.png'
import m6 from '../assets/images/6.png'
import m7 from '../assets/images/7.png'

class ChampCard extends Component {

    champInfo = (data) => {
        console.log(data.length)
        return data.map((champion, index)=>{
            console.log(champion)
            
            let {championId, championLevel, championPoints, tokensEarned} = champion
            let champName = C[championId]

            if (index < 3) {return <div className="Champion-Info-Box-Top">
                <div className='image-holder'>
            <img className='champ-icon-mastery' src={`https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/champion-icons/${championId}.png`} /><br/>
            <img className='champ-icon-mastery-top' src={`/images/${championLevel}.png`} />
            </div>
            <h4 className="name-holder">{champName}</h4>
            <div className='info-holder'>Mastery Level: {championLevel}<br/>
            Mastery Points: {championPoints}<br/>
            {championLevel < 7 ? `Tokens: ${tokensEarned}` : null}
            </div>
            
        </div>}
        else {
            return <div className="Champion-Info-Box">
            <div className="image-holder"><img className='champ-icon-mastery' src={`https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/champion-icons/${championId}.png`} /></div>
            <h4 className="name-holder">{champName}</h4>
             <div className="champ-level">Mastery Level: {championLevel}</div>
             <div className="champ-points">Mastery Points: {championPoints}</div>
            {championLevel < 7 ? <div className="champ-tokens">{`Tokens: ${tokensEarned}`}</div> : null}
             </div>
             }

        })
    }

    
    render(){
        let {mastery_champs} = this.props
        return <div className="Champion-Info-Container">{this.champInfo(mastery_champs)}</div>
    }

}

export default ChampCard
