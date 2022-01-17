function Comments({ hideComments, commentsClick, comments }) {
  return (
    <div>
      <button onClick={commentsClick}>
        {hideComments ? "Show Comments" : "Hide Comments"}
      </button>
      <hr></hr>
      {hideComments ? (
        ""
      ) : (
        <div>
          <h2>{comments.length} Comments</h2>
          {comments.map((comment) => {
            return (
              <>
                <strong>{comment.user}</strong>
                <p>{comment.comment}</p>
              </>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Comments;
