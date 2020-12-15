import spotify from "../spotify-brands.svg";
const Song = (props) => {
  console.log(props);
  return (
    <div className="songCard">
      <div className="details">
        <h3 className="name">{props.data.name}</h3>
        <h4 className="album">{props.data.album}</h4>
        <h5 className="year">{props.data.year}</h5>
        <div className="wrapper">
          <span className="rating">{props.data.rating}/5</span>
          <a className="spotify-link" href={props.data.link}>
            <span className="spotify">
              <img id="logo" src={spotify} height="16px" width="16px" alt="" />
              Spotify
            </span>
          </a>
        </div>
      </div>
      <div className="img">
        <img src={props.data.cover} width="100px" height="100px" alt="" />
      </div>
    </div>
  );
};

export default Song;
