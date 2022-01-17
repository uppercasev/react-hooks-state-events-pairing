import { useState } from "react";
import video from "../data/video.js";
import Comments from "./Comments.js";
import Video from "./Video.js";
import Votes from "./Votes.js";

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
      <Video video={video} />
      <Votes votesClick={votesClick} upVotes={upVotes} downVotes={downVotes} />
      <br></br>
      <br></br>
      <Comments
        hideComments={hideComments}
        commentsClick={commentsClick}
        comments={video.comments}
      />
    </div>
  );
}

export default App;
