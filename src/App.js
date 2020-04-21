import React, {Component} from 'react';
import './App.css';
import afterBakery from './bakery.png';
import beforeBakery from './oldbakery.png';
import UserOutput from './UserOutput/UserOutput';
import UserInput from './UserInput/UserInput';

class App extends Component {
  state = {
    name: 'Vicky',
    link: beforeBakery
  }

  changeNameHandler = (event) => {
    this.setState({ name: event.target.value })
  }

  clickHandler = () => {
    this.setState({ link: afterBakery })
    console.log("link has changed")
    console.log(this.state.link)
  }

  render() {
    return (
      <div className="App">
        <UserInput 
          changed={this.changeNameHandler}
          currentName={this.state.name}/>
        <UserOutput 
          clicked={this.clickHandler}
          name={this.state.name}
          link={this.state.link}/>
        <UserOutput 
          clicked={this.clickHandler}
          name={this.state.name}
          link={this.state.link}/>
        <UserOutput 
          clicked={this.clickHandler}
          name={this.state.name}
          link={this.state.link}/>
      </div>
    );
  }

}

export default App;
