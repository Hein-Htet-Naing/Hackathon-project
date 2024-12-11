import video from "../../assets/video.mp4";
import like from "../../assets/like.png";
import dislike from "../../assets/dislike.png";
import share from "../../assets/share.png";
import save from "../../assets/save.png";
import jack from "../../assets/simon.png";
import tom from "../../assets/tom.png";
import download from "../../assets/download.png";
import "./Videos.css";
import { Recommended } from "../../Component/Rcommended/Recommended";
import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Videos = () => {
  // const location = useLocation();
  // const movie = location.state?.movie;
  const { videoId, ctgId } = useParams();
  const placeholderVideoId = "nKS3mF_D7dM";
  const iframeSrc = videoId
    ? `https://www.youtube.com/embed/${videoId}`
    : `https://www.youtube.com/embed/${placeholderVideoId}?autpplay=1`;
  console.log("vid:", videoId);
  return (
    <>
      <section className="video-container">
        <div className="video">
          <div className="v-iframe">
            <iframe
              src={iframeSrc}
              referrerPolicy="no-referrer"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              sandbox="allow-scripts allow-same-origin allow-presentation"
            ></iframe>
            <h3>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas,
              magnam.
            </h3>
          </div>

          <div className="v-info">
            <div className="publisher">
              <div className="publisher-info">
                <img src={jack} />
                <div className="v-txt">
                  <p>Aniplex</p>
                  <span>1M subscribers</span>
                </div>
              </div>
              <div className="btn-sub">
                <button>Subscribe</button>
              </div>
            </div>
            {/* --------------- */}
            <div className="video-info">
              <div>
                <img src={like} />
                <span>1000k</span>
              </div>
              <div>
                <img src={dislike} alt="" />
                <span>0</span>
              </div>
              <div>
                <img src={share} alt="" />
                <span>Share</span>
              </div>
              <div>
                <img src={save} alt="" />
                <span>Save</span>
              </div>
              <div>
                <img src={download} alt="" />
                <span>Download</span>
              </div>
            </div>
          </div>
          {/* ------ */}

          <div className="description">
            <p>12k views &bull; 3days ago </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
              vero minima accusantium dolore officia sint?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos aut
              eum laudantium impedit eligendi est!
            </p>
          </div>
          {/* ----------------- */}
          <div className="comment">
            <div className="comment-section">
              <h4>10 comment</h4>
              <div className="c-flex">
                <img src="https://yt3.ggpht.com/ytc/AIdro_mhYMd8eRIZw_raiPQ_0axWm9uyydiERTzQTiAUmcLwaXTp-LIqnfZZsPeFGM2BjEvxXw=s88-c-k-c0x00ffffff-no-rj" />
                <div className="c-flex-txt">
                  <h5>PokSamrat</h5>
                  <p>
                    Can't Wait For Actual Movie Teaser On December 21. This was
                    just a course of the series and not a trailer for movie
                  </p>
                  <div className="comment-action">
                    <img src={like} />
                    <img src={dislike} />
                    <span>Reply</span>
                  </div>
                </div>
              </div>
            </div>
            {/* ----------- */}
            <div className="comment-section">
              <div className="c-flex">
                <img src="https://yt3.ggpht.com/ytc/AIdro_kPcoeDgwJJ1Qypvf5qW4kt4VWvbTChEH91sq_tYJ4rT7s=s88-c-k-c0x00ffffff-no-rj" />
                <div className="c-flex-txt">
                  <h5>PokSamrat</h5>
                  <p>
                    I just finished the manga I CANNOT WAIT TO SEE IT ANIMATED
                    OMG 😭😭😭
                  </p>
                  <div className="comment-action">
                    <img src={like} />
                    <img src={dislike} />
                    <span>Reply</span>
                  </div>
                </div>
              </div>
            </div>
            {/* ----------- */}
            <div className="comment-section">
              <div className="c-flex">
                <img src="https://yt3.ggpht.com/eg0RsRoiqUgR2C0YugaOgYKPXcPaKwO5A5Nu3g4F8ppardUmyC7uUAtt3E4U8siJvKAspzcP=s88-c-k-c0x00ffffff-no-rj" />
                <div className="c-flex-txt">
                  <h5>PokSamrat</h5>
                  <p>
                    I like how Zenitsu's theme is now the main demon slayer's
                    theme
                  </p>
                  <div className="comment-action">
                    <img src={like} />
                    <img src={dislike} />
                    <span>Reply</span>
                  </div>
                </div>
              </div>

              {/* -------------- */}

              <div className="c-flex">
                <img src="https://yt3.ggpht.com/sReqfBzRhlnH1RceHtmEcNoykitYjFAW1X9FsZBF7ays7g15rLBlZtoQ63FwmdpVsiDPnGHBug=s88-c-k-c0x00ffffff-no-rj" />
                <div className="c-flex-txt">
                  <h5>PokSamrat</h5>
                  <p>
                    Just leaving this for anyone who likes to listen to Nakime's
                    blood demon art
                  </p>
                  <div className="comment-action">
                    <img src={like} />
                    <img src={dislike} />
                    <span>Reply</span>
                  </div>
                </div>
              </div>
            </div>
            {/* -------------- */}
          </div>
        </div>
        <Recommended />
      </section>
    </>
  );
};
export default Videos;
