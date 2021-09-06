import video from "../data/video.js";
import Button from "./Button"
import Comments from "./Comments"

function App() {
  console.log(video);

  return (
    <div className="App">
      <iframe
        width="919"
        height="525"
        src={video.embedUrl}
        frameBorder="0"
        allowFullScreen
        title="Thinking in React"
      />
      <h1>{video.title}</h1>
      <p>{video.views} Views | Uploaded {video.createdAt}</p>
      <Button upVote={video.upvotes} downVote={video.downvotes} />
      <br></br>
      <br></br>
      <Comments comments={video.comments}/>

    </div>
  );
}

export default App;
