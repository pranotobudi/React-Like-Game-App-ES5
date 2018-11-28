var React = require('react');

var PetComponent = function(props) {
  var disabled = false;
  if (props.result !== '') {
    var resultStyle = null;
    if (props.result === 'WINNER') {
      resultStyle = { color: 'green' };
    } else {
      resultStyle = { color: 'red' };
    }
    disabled = true;
  }

  return (
    <div style={compStyle}>
      <h2 style={resultStyle}>{props.result}</h2>
      <h3>
        {props.petName} Likes: {props.likesCount}
      </h3>
      <img
        style={{ height: 400, width: 400 }}
        src={props.imgUrl}
        alt={'Cute ' + props.petType}
      />
      <br />
      <button
        style={btnStyle}
        value={props.petName}
        onClick={props.onLikeBtnClick}
        disabled={disabled}
      >
        Like
      </button>
      <button
        style={btnStyle}
        value={props.petName}
        onClick={props.onDislikeBtnClick}
        disabled={disabled}
      >
        Dislike
      </button>
    </div>
  );
};

var compStyle = {
  display: 'inline-block',
  marginLeft: 'auto',
  marginRight: 'auto'
};

var btnStyle = {
  height: '25px',
  width: '70px',
  marginTop: '10px',
  marginLeft: '5px',
  marginRight: '5px'
};

// module.exports = CatComponent;
export default PetComponent;
