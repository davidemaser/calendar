/**
 * Created by David Maser on 15/05/2017.
 */
import React,{Component} from 'react';
import '../Config/Calendar';
import CalendarTable from "./CalendarTable";

class Calendar extends Component{
    constructor(props){
        super(props);
        const date=new Date();
        this.state={
            month:date.getMonth()+1,
            dayOfWeek:date.getDay(),
            date:date.getDate(),
            year:date.getFullYear()
        }
    }

    defineStart(){
        let year = this.state.year;
        let month = this.state.month;
        return new Date(year + "-" + month + "-1").getDay();
    }

    weeksInMonth(m, y) {
        y = y || this.state.year;
        let d = new Date(y, m, 0);
        return Math.floor((d.getDate() - 1) / 7) + 1;
    }

    render(){
        return(
            <table>
            <CalendarTable today={this.state.date} rows={this.weeksInMonth(this.state.month,this.state.year)} starts={this.defineStart()}/>
            </table>
        )
    }
}

export default Calendar;