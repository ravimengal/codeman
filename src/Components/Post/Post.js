import { Avatar } from "@material-ui/core";
import axios from "axios";
import React, { useState, useEffect } from "react";
import "./Post.css";
import GifIcon from "@material-ui/icons/Gif";
import gifaa from "../../images/aa.gif";

function Post() {
  const [sticker, setSticker] = useState([]);

  useEffect(() => {
    async function getGif() {
      const res = await axios.get(
        `https://api.giphy.com/v1/gifs/search?api_key=i8CU4nWi2I4s7YCtkSPyImXzxdyhIQDM`
      );
      console.log(`gif `, res.data.data);
      setSticker(res.data.data);
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
          <textarea placeholder="Whats in your mind" />
        </div>

        <div className="post__options">
          <div className="post__option">
            <GifIcon style={{ fontSize: 50 }} />
            <input
              className="inputbtn"
              type="text"
              name="search"
              placeholder="Search.."
            />
            <img src={gifaa} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
