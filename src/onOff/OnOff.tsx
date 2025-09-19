// import {useState} from "react";

type PropsType = {
    state: boolean
    onChange: (state:boolean)=>void
    // on: boolean
}


const OnOff = (props: PropsType) => {


    const onStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        padding: '2px',
        backgroundColor: props.state ? 'green' : 'white',
    }
    const offStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '2px',
        padding: '2px',
        backgroundColor: props.state ? 'white' : 'red',
    }
    const indicatorStyle = {
        width: '30px',
        height: '30px',
        borderRadius: '15px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '5px',
        backgroundColor: props.state ? 'green' : 'red',
    }

    return (
        <div>
            <div style={onStyle} onClick={()=>{props.onChange(true)}}>on</div>
            <div style={offStyle} onClick={()=> {props.onChange(false)}}>off</div>
            <div style={indicatorStyle}></div>
        </div>
    );
};

export default OnOff;