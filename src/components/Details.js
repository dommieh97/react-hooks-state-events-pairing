import React from "react";
import Button from "./Button"
import Comments from "./Comments"
import video from "../data/video.js";

function Details() {
  
    return (
      <div>
        <h1>{video.title}</h1>
        <p>{video.views} Views |Uploaded {video.createdAt}</p>
       <Button up={video.upvotes} down={video.downvotes}/>
       <Comments comm={video.comments} />
      </div>
    );
  }
  
  export default Details;