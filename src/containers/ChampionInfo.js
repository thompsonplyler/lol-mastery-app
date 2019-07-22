import React from 'react';
import '../ChampionInfo.css';
import { Component } from 'react';

import TopChamps from '../containers/TopChamps'
import BottomChamps from '../containers/components/BottomChamps'


class ChampInfo extends Component {

    champInfo = (mastery_champs) => {

        let topChampArray = []
        let bottomChampArray = []

        if (mastery_champs.length > 0) {

         mastery_champs.map((champion, index)=>{

            if (index < 3) {
                topChampArray.push(champion)
            }
            else {
                bottomChampArray.push(champion)
            }
        }
        )
    
    return <div>
        <TopChamps top_champs={topChampArray}/>
        <BottomChamps bottom_champs={bottomChampArray}/>
    </div>
    }
    else {
        return <div>Sorry, but there doesn't appear to be a summoner by that name.</div>
    }
    
    }
    
    render(){
        let {mastery_champs} = this.props
        return <div>{this.champInfo(mastery_champs)}</div>
    }

}

export default ChampInfo
