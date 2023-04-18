import React from "react";


class App extends React.Component {
  state = {
    posts:[],
    loading:true,
    comments:[],
  };
  
componentDidMount() {
  console.log("componentDidMount");
  fetch('https://jsonplaceholder.typicode.com/posts')
.then(response => response.json())
.then(data => this.setState({posts:data, loading: false}))

this.timeId = setInterval(() => {
  // this.setState({loading: true})
  fetch('https://jsonplaceholder.typicode.com/comments')
  .then(response => response.json())
  .then(data => this.setState({comments:data}))
}, 3000)
}
  componentDidUpdate() {
    console.log("componentDidUpdate");
  }
componentWillUnmount(){
  clearInterval(this.timeId);
}
// handleClick() {
//   this.setState({count: this.state.count + 1});
//   // this.setState((prevState) => ({count:prevState.count + 1}), () => {
//   //   console.log('setState complate')
//   // });
//   // this.setState((prevState) => ({count:prevState.count + 1}));
//   // this.setState((prevState) => ({count:prevState.count + 1}));
// console.log('from handleClick');
// }
  render () {
    return (
    <div className="App">
     {this.state.loading ? <h3>Loading...</h3> : <h3>
      {this.state.posts.length} was loading
      </h3>}
    </div>
    );
}
}


export default App;
