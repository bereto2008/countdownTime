import React from 'react';

const Countdown=(props)=>{
    return (
      <div className="container" style={{backgroundColor:"lightgreen", color:"white", fontWeight:"bold", fontSize:"xx-large"}}>
          <h3>COUNTDOWN TIME</h3>
          <hr></hr>
    <p id="timer1">
        <span id="timer-hours">{props.countdown.hours}:</span>
        <span id="timer-mins">{props.countdown.mins}:</span>
        <span id="timer-secs">{props.countdown.secs}</span>
    </p>
    <p>OR</p>
    <p id="timer2">
        <span id="timer-hours">{props.countdown.hours} hours | </span>
        <span id="timer-mins">{props.countdown.mins} mins | </span>
        <span id="timer-secs">{props.countdown.secs} secs </span>
    </p>
    <p>&nbsp;</p>
    </div>
    );
  }

export default Countdown;
