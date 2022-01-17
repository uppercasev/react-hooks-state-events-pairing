function Video({ video }) {
  return (
    <>
      <iframe
        width="919"
        height="525"
        src={video.embedUrl}
        frameborder="0"
        allowfullscreen
        title={video.title}
      />
      <h1>{video.title}</h1>
      <p>
        {video.views} Views | Uploaded {video.createdAt}
      </p>
    </>
  );
}

export default Video;
