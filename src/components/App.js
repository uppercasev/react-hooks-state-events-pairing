import { useState } from "react";
import video from "../data/video.js";

console.log("Here's your data:", video);

function App() {
  const [upVotes, setUpVotes] = useState(video.upvotes);
  const [downVotes, setDownVotes] = useState(video.downvotes);
  const [hideComments, setHideComments] = useState(false);

  const votesClick = (votes) => {
    if (votes === upVotes) {
      setUpVotes(upVotes + 1);
    } else {
      setDownVotes(downVotes + 1);
    }
  };

  const commentsClick = () => {
    setHideComments(!hideComments);
  };

  return (
    <div className="App">
      <iframe
        width="919"
        height="525"
        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
        frameborder="0"
        allowfullscreen
        title="Thinking in React"
      />
      <h1>{video.title}</h1>
      <p>
        {video.views} Views | Uploaded {video.createdAt}
      </p>
      <button onClick={() => votesClick(upVotes)}>{upVotes} 👍 </button>
      <button onClick={() => votesClick(downVotes)}>{downVotes} 👎 </button>
      <br></br>
      <br></br>
      <button onClick={commentsClick}>
        {hideComments ? "Show Comments" : "Hide Comments"}
      </button>
      <hr></hr>
      
      {hideComments ? (
        ""
      ) : (
        <div>
          <h2>{video.comments.length} Comments</h2>
          <strong>{video.comments[0].user}</strong>
          <p>{video.comments[0].comment}</p>
          <strong>{video.comments[1].user}</strong>
          <p>{video.comments[1].comment}</p>
        </div>
      )}
    </div>
  );
}

export default App;
