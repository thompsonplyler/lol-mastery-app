import React from 'react';
import '../ChampionInfo.css';
import { Component } from 'react';

import TopChamps from '../containers/TopChamps'
import BottomChamps from '../containers/components/BottomChamps'


class ChampInfo extends Component {

    champInfo = (mastery_champs) => {

        let topChampArray = []
        let bottomChampArray = []

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
    
    render(){
        let {mastery_champs} = this.props
        return <div>{this.champInfo(mastery_champs)}</div>
    }

}

export default ChampInfo
