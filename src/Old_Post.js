import React, { Component } from 'react';
import Author from './Author';
import Comment from './Comment';

class Post extends Component {
  constructor(props){
    super(props);
    this.state = {
      body: this.props.post.content
    }
  }

  changeBody = () => {
    let newBody = prompt('What should the new content be?');
    this.setState({ body: newBody });
  }

  render(){
    const allComments = this.props.post.comments.map(c => <Comment body={c} />);
    const allAuthors = this.props.post.authors.map(a => <Author name={a} />);
    return (
        <div>
          <h2>{this.props.post.title}</h2>
          <p>{this.state.body}</p>
          <button onClick={this.changeBody}>Edit Content</button>
          {allAuthors}
          {allComments}
          <hr />
        </div>
      )
  }
}

export default Post;
