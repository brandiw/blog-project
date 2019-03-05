import React, { Component } from 'react';

class Comment extends Component {
  render(){
    return (
        <div>
          Comment: <em>"{this.props.body}"</em>
        </div>
      )
  }
}

export default Comment;
