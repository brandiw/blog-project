import React, { Component } from 'react';
import Author from './Author';
import Comment from './Comment';

class Post extends Component {
  constructor(props){
    super(props);
    this.state = {
      content: props.post.content
    }
  }

  changeBody = () => {
    let newContent = prompt('What should the new content be?');
    this.setState({ content: newContent });
  }

  render(){
    const allComments = this.props.post.comments.map((c, i) => {
      return <Comment body={c} key={i} />
    });
    const allAuthors = this.props.post.authors.map((a, i) => {
      return <Author name={a} key={i} />
    });
    return (
        <div>
          <h2>{this.props.post.title}</h2>
          <p>{this.state.content}</p>
          <button onClick={this.changeBody}>Edit the Content</button>
          {allAuthors}
          {allComments}
          <hr />
        </div>
      )
  }
}

export default Post;
