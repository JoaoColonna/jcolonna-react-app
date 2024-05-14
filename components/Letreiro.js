import React, { Component } from "react";

class Letreiro extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fraseAtual: "",
      typingForward: true,
      i: 0
    };
    this.phrase = "Venha estudar na Fatec";
    this.intervalId = null;
  }

  componentDidMount() {
    this.intervalId = setInterval(this.loopLetreiro.bind(this), 100);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  loopLetreiro() {
    const { fraseAtual, typingForward, i } = this.state;
    const qtde = this.phrase.length;
    let novaFrase = fraseAtual;

    if (typingForward) {
      if (i < qtde) {
        novaFrase += this.phrase[i];
        this.setState({ fraseAtual: novaFrase, i: i + 1 });
      } else {
        this.setState({ typingForward: false, i: qtde - 1 });
      }
    } else {
      if (i >= 0) {
        novaFrase = novaFrase.slice(0, -1);
        this.setState({ fraseAtual: novaFrase, i: i - 1 });
      } else {
        this.setState({ typingForward: true, i: 0 });
      }
    }
  }

  render() {
    return (
      <div>
        <h2>{this.state.fraseAtual}</h2>
      </div>
    );
  }
}

export default Letreiro;
