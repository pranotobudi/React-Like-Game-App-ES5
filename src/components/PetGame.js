import React from 'react';
import PetComponent from './PetComponent';

class PetGame extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cat: { likesCount: 0, result: '' },
      dog: { likesCount: 0, result: '' }
    };
    // this.likesCount = 0;
    this.handleLikeBtnClick = this.handleLikeBtnClick.bind(this);
    this.handleDislikeBtnClick = this.handleDislikeBtnClick.bind(this);
    this.handleShowWinnerBtnClick = this.handleShowWinnerBtnClick.bind(this);
    this.handleStartOverBtnClick = this.handleStartOverBtnClick.bind(this);
  }

  handleLikeDislikeBtnClick(petName, operation) {
    console.log('Like ' + petName);
    // this.likesCount += 1;
    // this.setState({});
    if (petName === 'Cat') {
      this.setState(function(prevState) {
        return {
          cat: {
            likesCount: prevState.cat.likesCount + operation,
            result: prevState.cat.result
          }
        };
      });
    } else {
      this.setState(function(prevState) {
        return {
          dog: {
            likesCount: prevState.dog.likesCount + operation,
            result: prevState.dog.result
          }
        };
      });
    }
  }
  handleLikeBtnClick(event) {
    var petName = event.target.value;
    this.handleLikeDislikeBtnClick(petName, 1);
    console.log('Like ' + petName);
  }
  handleDislikeBtnClick(event) {
    var petName = event.target.value;
    console.log('DisLike ' + petName);
    this.handleLikeDislikeBtnClick(petName, -1);
  }

  handleShowWinnerBtnClick() {
    var dogResult = 'TIE';
    var catResult = 'TIE';
    if (this.state.cat.likesCount > this.state.dog.likesCount) {
      console.log('Cat is the winner');
      catResult = 'WINNER';
      dogResult = 'LOSER';
    } else if (this.state.dog.likesCount > this.state.cat.likesCount) {
      console.log('Dog is the winner');
      catResult = 'LOSER';
      dogResult = 'WINNER';
    }

    this.setState(function(prevState) {
      return {
        cat: { likesCount: prevState.cat.likesCount, result: catResult },
        dog: { likesCount: prevState.dog.likesCount, result: dogResult }
      };
    });
  }
  handleStartOverBtnClick() {
    this.setState({
      cat: { likesCount: 0, result: '' },
      dog: { likesCount: 0, result: '' }
    });
  }
  render() {
    var btnStyle = {
      marginTop: '10px',
      marginLeft: '5px',
      marginRight: '5px',
      height: '30px'
    };
    return (
      <div>
        <div style={{ marginTop: 60, textAlign: 'center' }}>
          <PetComponent
            petName="Cat"
            likesCount={this.state.cat.likesCount}
            result={this.state.cat.result}
            onLikeBtnClick={this.handleLikeBtnClick}
            onDislikeBtnClick={this.handleDislikeBtnClick}
            imgUrl="https://images.pexels.com/photos/36753/flower-purple-lical-blosso.jpg?cs=srgb&dl=bloom-blooming-blossom-36753.jpg&fm=jpg"
          />
          <PetComponent
            petName="Dog"
            likesCount={this.state.dog.likesCount}
            result={this.state.dog.result}
            onLikeBtnClick={this.handleLikeBtnClick}
            onDislikeBtnClick={this.handleDislikeBtnClick}
            imgUrl="https://images.pexels.com/photos/658687/pexels-photo-658687.jpeg?cs=srgb&dl=beautiful-bloom-blooming-658687.jpg&fm=jpg"
          />
        </div>
        <div style={{ textAlign: 'center' }}>
          <button style={btnStyle} onClick={this.handleShowWinnerBtnClick}>
            Show Winner
          </button>

          <button style={btnStyle} onClick={this.handleStartOverBtnClick}>
            Start Over
          </button>
        </div>
      </div>
    );
  }
}

export default PetGame;
