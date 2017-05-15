/**
 * Created by David Maser on 15/05/2017.
 */
import React,{Component} from 'react';

class CalendarMonthView extends Component{
    constructor(props){
        super(props);
        this.state={
            monthList:this.props.months,
            month:this.props.currentMonth
        }
    }

    buildMonthView(){
        let obj = this.state.monthList;
        let o;
        let objArray = [];
        for(o in obj){
            console.log(parseInt(o),obj[o],parseInt(this.state.month));
            objArray.push(
                <div key={o} className={parseInt(o) === parseInt(this.state.month) ? 'active':''}>{obj[o].label}</div>
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