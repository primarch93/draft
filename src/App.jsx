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
  
 removePost = (id) => {
this.setState({ posts: this.state.posts.filter(post => post.id !== id)})
}



  render () {
const{posts} = this.state;

    return (
    <div className="App">
  <Posts posts={posts} removePost={this.removePost}/>
    </div>
    );
    }
  }

export default App;
