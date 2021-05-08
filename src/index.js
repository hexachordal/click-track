import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import reportWebVitals from './reportWebVitals';

// !! IMPORTANT README:

// You may add additional external JS and CSS as needed to complete the project, however the current external resource MUST remain in place for the tests to work. BABEL must also be left in place.

/***********
INSTRUCTIONS:
  - Select the project you would 
    like to complete from the dropdown 
    menu.
  - Click the "RUN TESTS" button to
    run the tests against the blank 
    pen.
  - Click the "TESTS" button to see 
    the individual test cases. 
    (should all be failing at first)
  - Start coding! As you fulfill each
    test case, you will see them go   
    from red to green.
  - As you start to build out your 
    project, when tests are failing, 
    you should get helpful errors 
    along the way!
    ************/

// PLEASE NOTE: Adding global style rules using the * selector, or by adding rules to body {..} or html {..}, or to all elements within body or html, i.e. h1 {..}, has the potential to pollute the test suite's CSS. Try adding: * { color: red }, for a quick example!

// Once you have read the above messages, you can delete all comments.

class Quotes extends React.Component {
  constructor(props) {
    super(props);
    const quote = [
      "Music is life itself.",
      "Music is the moonlight in the gloomy night of life.",
      "If Music is a Place — then Jazz is the City, Folk is the Wilderness, Rock is the Road, Classical is a Temple.",
      "Music is your own experience, your thoughts, your wisdom. If you don’t live it, it won’t come out of your horn.",
      "One good thing about music, when it hits you, you feel no pain."
    ];
    const author = [
      " Louis Armstrong",
      "John Paul Friedrich Richter",
      "Vera Nazarin",
      "Charlie Parker",
      "Bob Marley"
    ];
    const ranOne = function() {
  let min = Math.ceil(0);
  let max = Math.floor(230);
  return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}   
    
    const ranTwo = function() {
  let min = Math.ceil(0);
  let max = Math.floor(230);
  return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}
    
    const ranThree = function() {
  let min = Math.ceil(0);
  let max = Math.floor(230);
  return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}
   
    
    const ranNum = Math.floor(Math.random() * Math.floor(quote.length - 1));
    this.state = {
      quote: quote[ranNum],
      author: author[ranNum],
      numRay: [],
      color: `rgb(${ranOne()},${ranTwo()},${ranThree()})`
  }
  }

  handleClick() {
    const quote = [
      "Music is life itself.",
      "Music is the moonlight in the gloomy night of life.",
      "If Music is a Place — then Jazz is the City, Folk is the Wilderness, Rock is the Road, Classical is a Temple.",
      "Music is your own experience, your thoughts, your wisdom. If you don’t live it, it won’t come out of your horn.",
      "One good thing about music, when it hits you, you feel no pain.","Music is the art which is most nigh to tears and memory.","Music is nothing else but wild sounds civilized into time and tune.","Music produces a kind of pleasure which human nature cannot do without.","Where words fail, music speaks.","How is it that music can, without words, evoke our laughter, our fears, our highest aspirations?"
    ];
    const author = [
      " Louis Armstrong",
      "John Paul Friedrich Richter",
      "Vera Nazarin",
      "Charlie Parker",
      "Bob Marley",
      "Oscar Wilde",
      "Thomas Fuller",
      "Confucius",
      "Hans Christian Anderson",
      "Jane Swan"
    ];
    
    const ranOne = function() {
  let min = Math.ceil(0);
  let max = Math.floor(230);
  return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}   
    
    const ranTwo = function() {
  let min = Math.ceil(0);
  let max = Math.floor(230);
  return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}
    
    const ranThree = function() {
  let min = Math.ceil(0);
  let max = Math.floor(230);
  return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}
    let ranNum = Math.floor(Math.random() * Math.floor(quote.length - 1));
    if (
      this.state.numRay.includes(ranNum) === false &&
      this.state.numRay.length < quote.length
    ) {
      this.state.numRay.push(ranNum);
      
      this.setState({
        quote: quote[ranNum],
        author: author[ranNum],
        color: `rgb(${ranOne()},${ranTwo()},${ranThree()})`
      });
      //console.log(this.state.numRay)
    } else if (
      this.state.numRay.includes(ranNum) === true &&
      this.state.numRay.length < quote.length
    ) {
      while (this.state.numRay.includes(ranNum) === true) {
        ranNum = Math.floor(Math.random() * Math.floor(quote.length));
      }
      this.state.numRay.push(ranNum);
   
      this.setState({
        quote: quote[ranNum],
        author: author[ranNum],
        color: `rgb(${ranOne()},${ranTwo()},${ranThree()})`
      });
      
      //console.log(this.state.numRay)

      if (this.state.numRay.length === quote.length) {
        this.state.numRay = [];
      }
    }
  }
  render() {
    const link = 'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' +
      encodeURIComponent('"' + this.state.quote + '" ' + this.state.author)
    
    return (
      <>
      <div id="main" style={{backgroundColor: this.state.color}}>
        <div id="box">
        <h3 id="text" style={{color: this.state.color}}>
          <i class="fas fa-quote-left"></i> {this.state.quote}
        </h3>
        <p id="author" style={{color: this.state.color}}>-{this.state.author}</p>
        <h4  onClick={this.handleClick.bind(this)} id="new-quote" style={{cursor: "pointer", backgroundColor: this.state.color, padding: "10px", color:"white", fontSize:"15px"}}>
          New Quote
        </h4>
        <a id="tweet-quote" target="_blank" href={link}>
          <img id="image" src="https://cliply.co/wp-content/uploads/2019/07/371907030_TWITTER_ICON_400px.gif" />
        </a>
        </div>
      </div>
        </>
    );
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <Quotes />;
  }
}

ReactDOM.render(<App />, document.getElementById("quote-box"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
