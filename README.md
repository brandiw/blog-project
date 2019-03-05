const allComments = p.comments.map(c => <Comment body={c} />);
      const allAuthors = p.authors.map(a => <Author name={a} />);
      return (
          <div>
            <h2>{p.title}</h2>
            {allAuthors}
            {allComments}
            <hr />
          </div>
        )
