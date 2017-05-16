/**
 * Created by David Maser on 15/05/2017.
 */
import React,{Component} from 'react';

class CalendarMonthView extends Component{
    constructor(props){
        super(props);
        this.state={
            monthList:this.props.months,
            month:this.props.currentMonth,
            year:new Date().getFullYear()
        }
    }

    buildMonthView(){
        let obj = this.state.monthList;
        let o;
        let objArray = [];
        for(o in obj){
            objArray.push(
                <div key={o} className={parseInt(o,10) === parseInt(this.state.month,10) ? 'active':''}>{obj[o].label} {this.state.year}</div>
            );
        }
        return objArray;
    }

    render(){
        return(
        <div className="monthLayout">
            {this.buildMonthView()}
        </div>
        )
    }
}

export default CalendarMonthView;