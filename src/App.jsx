import React from "react";
import { Posts } from "./components/Posts";

class App extends React.Component {
  state = {
  posts: [
    {id: 'a1', name: 'JS Bassic'},
    {id: 'a2', name: 'JS Advanced'},
    {id: 'a3', name: 'React JS'},
  ],
  };
  
  handleSomething = () => {
    console.log('App.jsx setState update')
  }



  render () {
const{posts} = this.state;

    return (
    <div className="App">
  <Posts posts={posts} cb= {this.handleSomething}/>
    </div>
    );
    }
  }

export default App;
