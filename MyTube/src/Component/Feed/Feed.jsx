import "./Feed.css";
import { useEffect, useState } from "react";
import moment from "moment";
import { Link } from "react-router-dom";
import { useCategory } from "../Category/CategoryContext";
import { useVideo } from "../Category/SearchVideo";
import { useNavigate } from "react-router-dom";
export const Feed = () => {
  const navigate = useNavigate();
  const [video, setvideo] = useState([]);
  const { sVideo } = useVideo();
  const { category } = useCategory();
  // const handleWatchNow = (movie) => {
  //   navigate(`/Re`, { state: { movie } });
  // };
  function convertValue(value) {
    if (value >= 1000000) {
      return Math.floor(value / 1000000) + "M";
    } else if (value >= 1000) {
      return Math.floor(value / 1000) + "K";
    } else {
      return value;
    }
  }
  function filterVideo(data) {
    return data.filter((item) => {
      return (
        item.snippet.title.toLowerCase().includes(sVideo.toLowerCase()) ||
        item.snippet.channelTitle.toLowerCase().includes(sVideo.toLowerCase())
      );
    });
  }

  useEffect(() => {
    const fetchData = async () => {
      const myApikey = `AIzaSyB5OfFhAwsPUR2pIIsrZypqQfokEZ8B2vA`;
      const url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&maxWidth=50&regionCode=US&videoCategoryId=${category}&key=${myApikey}`;
      const res = await fetch(url);
      const data = await res.json();
      setvideo(filterVideo(data.items));
      console.log(data);
    };
    fetchData();
  }, [category, sVideo]);
  return (
    <>
      <div className="card_container">
        {video.map((items) => (
          <Link
            // onClick={() => {
            //   handleWatchNow(items);
            //   console.log("items", items);
            // }}
            to={`video/${items.snippet.categoryId}/${items.id}`}
            className="card"
            key={items.id}
          >
            <img src={items.snippet.thumbnails.medium.url} />
            <div className="txt">
              <h3>{items.snippet.title}</h3>
              <h4>{items.snippet.channelTitle}</h4>
              <p>
                {convertValue(items.statistics.viewCount)} views &bull;
                {moment(items.snippet.publishedAt).fromNow()}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};
