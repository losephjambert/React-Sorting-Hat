import React, { Component } from "react";

/**
    Gryffindor
    Hufflepuff
    Ravenclaw
    Slytherin
 */

const questions = [
  {
    questionText: `If there is an important reason to face something that scares me, I will face it.`,
    agree: "H",
    disagree: "S",
    neutral: "G"
  },
  {
    questionText: `I will do things even though they seem to be dangerous.`,
    agree: "G",
    disagree: "H",
    neutral: "S"
  },
  {
    questionText: `I wouldn't want people to treat me as though I were superior to them.`,
    agree: "H",
    disagree: "S",
    neutral: "R"
  },
  {
    questionText: `I think that I am entitled to more respect than the average person is.`,
    agree: "S",
    disagree: "H",
    neutral: "R"
  },
  {
    questionText: `I see myself as critical, quarrelsome.`,
    agree: "S",
    disagree: "H",
    neutral: "R"
  },
  {
    questionText: `I see myself as disorganized, careless.`,
    agree: "S",
    disagree: "G",
    neutral: "H"
  },
  {
    questionText: `I see myself as dependable, self-disciplined.`,
    agree: "H",
    disagree: "G",
    neutral: "R"
  }
];

class App extends Component {
  constructor() {
    super();
    this.state = {
      questions,
      currentQuestionIndex: 0,
      houseFrequencies: {
        H: 0,
        G: 0,
        R: 0,
        S: 0
      }
    };
  }
  render() {
    return (
      <>
        <header>header</header>
        <main>main</main>
        <footer>footer</footer>
      </>
    );
  }
}

export default App;
