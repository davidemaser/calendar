/**
 * Created by David Maser on 15/05/2017.
 */
import React,{Component} from 'react';
import CalendarRow from "./CalendarRow";

class CalendarTable extends Component{
    constructor(props){
        super(props);
        this.state={
            rows:this.props.rows,
            starts:this.props.starts,
            today:this.props.today,
            data:this.props.data,
            lang:this.props.lang,
            month:this.props.month
        };
    }

    buildRowView(){
        let rowViewArray = [];
        for(let r = 1;r<this.state.rows+1;r++){
            rowViewArray.push(
                <CalendarRow key={r} today={this.state.today} initial={r} starts={r !== 0 ? this.props.starts : 0} data={this.state.data} lang={this.state.lang} month={this.state.month}/>
            );
        }

        return rowViewArray
    }
    render(){
        return(
            <tbody>
                {this.buildRowView()}
            </tbody>
        )
    }
}

export default CalendarTable;