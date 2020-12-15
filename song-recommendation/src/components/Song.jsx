const Song = (props) => {
  console.log(props);
  return (
    <div>
      <h3>{props.data.name}</h3>
    </div>
  );
};

export default Song;
