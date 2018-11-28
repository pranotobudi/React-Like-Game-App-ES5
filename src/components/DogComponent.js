var React = require('react');

class DogComponent extends React.Component {
  handleLikeBtnClick() {
    console.log('Like Dog');
  }
  handleDisikeBtnClick() {
    console.log('DisLike Dog');
  }

  render() {
    return (
      <div style={compStyle}>
        <h3>Dog Component</h3>
        <img
          style={{ height: 400, width: 400 }}
          src="https://images.pexels.com/photos/658687/pexels-photo-658687.jpeg?cs=srgb&dl=beautiful-bloom-blooming-658687.jpg&fm=jpg"
          alt="Cute Dog"
        />
        <br />
        <button style={btnStyle} onClick={this.handleLikeBtnClick}>
          Like
        </button>
        <button style={btnStyle} onClick={this.handleDisikeBtnClick}>
          Dislike
        </button>
      </div>
    );
  }
}

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

export default DogComponent;
