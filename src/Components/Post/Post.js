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
        `https://api.giphy.com/v1/gifs/trending?api_key=i8CU4nWi2I4s7YCtkSPyImXzxdyhIQDM&limit=25&rating=g`
      );
      console.log(`gif `, res.data);
      setSticker(res.data);
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
           
          </div>
        </div>
      </div>
      <div className="gifdisplay">
        <img url={sticker} alt="gif"/>
      <img src={gifaa} />
      <img src={gifaa} />
      <img src={gifaa} />
      <img src={gifaa} />
      </div>
      
    </div>
  );
}

export default Post;
