import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Post from './Post';

class App extends Component {
  render() {
    const allPosts = this.props.posts.map((p, i) => {
      return <Post post={p} key={i} />
    });

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <div>
          {allPosts}
        </div>
      </div>
    );
  }
}

export default App;
