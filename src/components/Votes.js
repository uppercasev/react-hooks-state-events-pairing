function Votes({ votesClick, upVotes, downVotes }) {
  return (
    <>
      <button onClick={() => votesClick(upVotes)}>{upVotes} 👍 </button>
      <button onClick={() => votesClick(downVotes)}>{downVotes} 👎 </button>
    </>
  );
}

export default Votes;
