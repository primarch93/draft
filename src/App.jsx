import React from "react";


class App extends React.Component {
  state = {
  posts: [
    {id: 'a1', name: 'JS Bassic'},
    {id: 'a2', name: 'JS Advanced'},
    {id: 'a3', name: 'React JS'},
  ],
  };
  



  render () {
    return (
    <div className="App">
  {this.state.posts.map((post) => (
    <h2 key={post.id}>{post.name}</h2>
  ))}
    </div>
    );
    }
  }

export default App;
