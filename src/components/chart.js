import React from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';

const Chart = (props) => {
    return (
        <div style={{position:"relative", top:"60px"}}>
            <Sparklines data={props.data} style={{height:'120px', width:'100%'}}>
                <SparklinesLine color={props.color}/>
                <SparklinesReferenceLine type="avg"/>
            </Sparklines>
            <div>평균 {props.average} {props.units}</div>
        </div>
    );
};

export default Chart;