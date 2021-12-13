import { Avatar } from "@material-ui/core";
import axios from "axios";
import React, { useState, useEffect } from "react";
import "./Post.css";
import GifIcon from "@material-ui/icons/Gif";
import gifaa from "../../images/aa.gif";// testing gif

function Post() {
  const [stickers, setSticker] = useState([]);
  const [search,setSearch]=useState("")

  useEffect(() => {

    try {
      async function getGif() {
        const res = await axios.get(
          `http://api.giphy.com/v1/gifs/search?q=$(search)&api_key=i8CU4nWi2I4s7YCtkSPyImXzxdyhIQDM&limit=25&rating=g`
        );
        console.log(`gif `, res.data.data);
        setSticker(res.data.data);
      }
      getGif();
    } catch (error) {
      console.log("error while fetching data", error)
    }
   
  }, []);
  const handleSearch =(e)=>{
    e.preventDefault();
    setSearch(e.target.value)
    console.log("value",search)

  }

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
            onChange={handleSearch}
            value={search}
              className="inputbtn"
              type="text"
              name="search"
              placeholder="Search.."
            />
          </div>
        </div>
      </div>
      <div className="gifdisplay">
        {stickers.map((sticker) => (
          <img alt="gif " key={sticker.id} src={sticker.images.fixed_height_small.url} />
        ))}
      </div>
    </div>
  );
}

export default Post;
