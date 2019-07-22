import React from 'react';
import '../../ChampionInfo.css';
import { Component } from 'react';
import C from '../../data/champion_constants'

class BottomChamps extends Component {

    champInfo = (bottom_champs) => {
        bottom_champs = bottom_champs.map(champion=>{

            let {championId, championLevel, championPoints, tokensEarned} = champion
            let champName = C[championId]

            return <li className="CIB-Bottom Champion-Info-Box">
                <div className="image-holder">
                    <img className='champ-icon-mastery-bot' src={`https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/champion-icons/${championId}.png`} />
                </div>
                <h5 className="name-holder">{champName}</h5>
                <h5 className="champ-level">Mastery Level: {championLevel}</h5>
                <h5 className="champ-points">Mastery Points: {championPoints}</h5>
                {championLevel == (5 || 6) ? <h5 className="champ-tokens">{`Tokens: ${tokensEarned}`}</h5> : null}
            </li>

    })
    return <ul className="Champion-Info-Container-Bottom">{bottom_champs}</ul>
}

    
    render(){
        let {bottom_champs} = this.props
        return this.champInfo(bottom_champs)
    }

}

export default BottomChamps
