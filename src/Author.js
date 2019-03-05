import React, { Component } from 'react';

class Author extends Component {
  render(){
    return (
      <div>
        Written by: <em>{this.props.name}</em>
      </div>
      )
  }
}

export default Author;
