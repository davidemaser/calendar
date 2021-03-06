/**
 * Created by David Maser on 15/05/2017.
 */
import React,{Component} from 'react';

class CalendarHeader extends Component{
    constructor(props){
        super(props);
        this.state={
            calObj: this.props.days,
            monthList:this.props.months,
            month:this.props.currentMonth
        }
    }

    buildDayView(){
        let obj = this.state.calObj;
        let o;
        let objArray = [];
        for(o in obj){
            objArray.push(<td key={o}>{obj[o].label}</td>);
        }
        return objArray;
    }

    render(){
        return(
            <thead>
            <tr>
                {this.buildDayView()}
            </tr>
            </thead>
        )
    }
}

export default CalendarHeader;