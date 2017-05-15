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
            today:this.props.today
        };
    }

    buildCellView(offset){
        let startArrayObj = {
            0:7,
            1:14,
            2:21,
            3:28,
            4:31
        };
        let style = {
            backgroundColor:'#000',
            color:'#fff'
        };
        let dayNum = offset === 0 ? 7 : 7-this.props.starts;
        let rowViewArray = [];
        let offsetStart = startArrayObj[this.state.initial];
        let offsetEnd = offsetStart <= 28 ? offsetStart-7 : offsetStart-3;
        for(let r = offsetEnd;r<offsetStart;r++){
            rowViewArray.push(<td key={r} style={r === this.state.today ? style : null}>{r !== 0 ? r : ''}</td>);
        }
        return rowViewArray
    }
    render(){
        return(
            <tr>
                {this.props.starts !== 0 ? this.buildCellView(this.props.starts) : this.buildCellView(0)}
            </tr>
        )
    }
}

export default CalendarRow;