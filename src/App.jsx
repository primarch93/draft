import React from "react";


class App extends React.Component {
  state = {
   count: 0,
   iscounting: false
  };
  

  
componentDidMount() {
  const usercount = localStorage.getItem("timez");
  if (usercount) {
    this.setState({count: +usercount});
  }
}
 


componentDidUpdate() {
    localStorage.setItem("timez", this.state.count)
  }


  componentWillUnmount(){
    clearInterval(this.counterId)
}


HandleStart = () => {
  this.setState({iscounting: true})

  this.counterId = setInterval(() => {
    this.setState({count: this.state.count + 1})
  }, 1000);
};

handleReset = () => {
  this.setState({iscounting: false, count: 0});
  clearInterval(this.counterId)
};

handleStop = () => {
  this.setState({iscounting: false});
  clearInterval(this.counterId)
};
  render () {
    return (
    <div className="App">
     <h1>Timer-React</h1>
     <h3>{this.state.count}</h3>
     {!this.state.iscounting ? (
      <button onClick={this.HandleStart}>Start</button>
     ) : (
      <button onClick={this.handleStop}>Stop</button>
     )}
     <button onClick={this.handleReset}>Reset</button>
    </div>
    );
}
}


export default App;
