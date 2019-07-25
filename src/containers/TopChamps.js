import React from 'react';
import '../ChampionInfo.css';
import { Component } from 'react';
import C from '../data/champion_constants'

class TopChamps extends Component {

    champInfo = (top_champs) => {
        top_champs = top_champs.map(champion=>{

            let {championId, championLevel, championPoints, tokensEarned} = champion
            let champName = C[championId]

            return <li className="CIB-Top Champion-Info-Box">
                    <div className='image-holder'>
                        <img className='champ-icon-mastery' src={`https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/champion-icons/${championId}.png`} />
                        <br/>
                        <img className='champ-icon-mastery-top' src={`/images/${championLevel}.png`} />
                    </div>
                    <h4 className="name-holder">{champName}</h4>
                    <div className='info-holder'>
                        Mastery Level: {championLevel}
                        <br/>
                        Mastery Points: {championPoints}<br/>
                        {(championLevel === 5 || championLevel === 6) ? `Tokens: ${tokensEarned}` : null}
                    </div>
                
                </li>
        })

        return <ul className="Champion-Info-Container-Top">{top_champs}</ul>
    }

    
    render(){
        let {top_champs} = this.props
        return this.champInfo(top_champs)
    }

}

export default TopChamps
