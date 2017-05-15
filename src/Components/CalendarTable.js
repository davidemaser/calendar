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
            today:this.props.today
        };
    }

    buildRowView(){
        let rowViewArray = [];
        for(let r = 0;r<this.state.rows;r++){
            rowViewArray.push(
                <CalendarRow key={r} today={this.state.today} initial={r} starts={r === 0 ? this.props.starts : 0}/>
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