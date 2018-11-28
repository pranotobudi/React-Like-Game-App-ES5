var React = require('react');

class CatComponent extends React.Component {
  handleLikeBtnClick() {
    console.log('Like Cat');
  }
  handleDisikeBtnClick() {
    console.log('DisLike Cat');
  }

  render() {
    return (
      <div style={compStyle}>
        <h3>Cat Component</h3>
        <img
          style={{ height: 400, width: 400 }}
          src="  https://images.pexels.com/photos/36753/flower-purple-lical-blosso.jpg?cs=srgb&dl=bloom-blooming-blossom-36753.jpg&fm=jpg"
          alt="Cute Cat"
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

// module.exports = CatComponent;
export default CatComponent;
