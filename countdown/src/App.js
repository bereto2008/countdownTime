import React, {Component} from 'react';
import Countdown from './components/Countdown';
import walmlogo from './wmt_h_r_c.jpg'

class App extends Component{
  state = {
    //startting time
    countdown:{hours: "11", mins: "36", secs: "20"}
  }
  render(){
    return (
      <div className="App">
        <img src={walmlogo} alt="walmart logo" />
      <Countdown countdown={this.state.countdown}/>
      </div>
    );
  }
}

export default App;
