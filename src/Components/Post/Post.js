import { Avatar } from "@material-ui/core";
import axios from "axios";
import React, { useState, useEffect } from "react";
import "./Post.css";
import GifIcon from "@material-ui/icons/Gif";

function Post() {
  const [sticker, setStcker] = useState([]);

  useEffect(() => {
    async function getGif() {
      const res = await axios.get(`https://api.giphy.com/v1/gifs`);
      console.log(`gif `, res.data);
      setStcker(res.data);
    }
    getGif();
  }, []);

  return (
    <div className="Card_combine">
      <div className="post">
        <div className="post__top">
          <Avatar className="post__avatar" />
          <div className="post__topInfo">
            <h3>Ravinder</h3>
          </div>
        </div>
        <div className="post__bottom">
          <p>Do what ever you want</p>
        </div>
        <div className="post__image">
          <img alt="Here is a image" />
        </div>
        <div className="post__options">
          <input type="text" name="search" placeholder="Search.." />
          <div className="post__option">
            <GifIcon style={{ fontSize: 50 }} />
          </div>
        </div>
      </div>
      <div className="gif">

        <p>gif sticker {sticker}</p>
      </div>
    </div>
  );
}

export default Post;
