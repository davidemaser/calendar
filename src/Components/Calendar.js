/**
 * Created by David Maser on 15/05/2017.
 */
import React,{Component} from 'react';
import CalObj from '../Config/Calendar.json';
import CalendarTable from "./CalendarTable";
import CalendarHeader from "./CalendarHeader";
import CalendarMonthView from "./CalendarMonthView";

class Calendar extends Component{
    constructor(props){
        super(props);
        const date=new Date();
        this.state={
            month:date.getMonth()+1,
            dayOfWeek:date.getDay(),
            date:date.getDate(),
            year:date.getFullYear(),
            lang:this.props.lang
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

    getDayLabels(){
        return CalObj.days[this.state.lang];
    }

    getMonthLabels(){
        return CalObj.months[this.state.lang];
    }

    render(){
        return(
            <div className="calendar-view">
                <CalendarMonthView months={this.getMonthLabels()} currentMonth={this.state.month}/>
            <table>
            <CalendarHeader days={this.getDayLabels()}  />
            <CalendarTable today={this.state.date} rows={this.weeksInMonth(this.state.month,this.state.year)} starts={this.defineStart()} data={CalObj} lang={this.state.lang} month={this.state.month}/>
            </table>
            </div>
        )
    }
}

export default Calendar;