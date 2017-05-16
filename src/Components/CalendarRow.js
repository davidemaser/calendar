/**
 * Created by David Maser on 15/05/2017.
 */
import React,{Component} from 'react';

class CalendarRow extends Component{
    constructor(props){
        super(props);
        this.state={
            rows:this.props.rows,
            starts:this.props.starts,
            initial:this.props.initial,
            today:this.props.today,
            data:this.props.data,
            lang:this.props.lang,
            month:this.props.month
        };
    }

    buildCellView(){
        let startArrayObj = {
            1:7,
            2:14,
            3:21,
            4:28,
            5:31
        };
        let style = {
            backgroundColor:'#000',
            color:'#fff'
        };
        let rowViewArray = [];
        let offsetStart = startArrayObj[this.state.initial];
        let offsetEnd = offsetStart <= 28 ? offsetStart-7 : offsetStart-3;
        let eventObj = this.state.data.months[this.state.lang][this.state.month].events;
        offsetStart += this.state.initial === 5 ? 1 : 0;
        for(let r = offsetEnd;r<offsetStart;r++){
            rowViewArray.push(<td key={r} data-event-flag={eventObj[r] !== undefined ? true : null} data-event-title={eventObj[r] !== undefined ? eventObj[r][this.state.lang] : null} style={r === this.state.today ? style : null}>{r !== 0 ? r : ''}</td>);
        }
        return rowViewArray
    }
    render(){
        return(
            <tr>
                {this.props.starts !== 0 ? this.buildCellView() : this.buildCellView(0)}
            </tr>
        )
    }
}

export default CalendarRow;