const Color = (props) => {
  return (
    <ul className="colors ps-0">
      <li style={{'backgroundColor':props.color1}}></li>
      <li style={{'backgroundColor':props.color2}}></li>
      <li style={{'backgroundColor':props.color3}}></li>
    </ul>
  );
};

export default Color;
