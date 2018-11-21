import React from "react";

import { TextField, Grid, Typography } from "@material-ui/core";

import { redText } from "./index.styles";

class Homepage extends React.Component {
  constructor() {
    super();
    this.state = {
      number: undefined,
      numberFact: undefined
    };
  }

  getNumberFact = async num => {
    console.log("starting");
    const url = `http://numbersapi.com/${num}/trivia`;
    try {
      const response = await fetch(url);
      return response.text();
    } catch (error) {
      console.log("API Call to Number Fact Error:", error);
      return `Well... that didnt work, here's the error: ${error.toString()}`;
    }
  };

  handleSubmit = async e => {
    e.preventDefault();
    const fact = await this.getNumberFact(this.state.number);
    this.setState({ numberFact: fact });
  };

  render() {
    return (
      <Grid container justify="center" alignItems="center" direction="column">
        <Typography align="center" component="h2" variant="h2">
          Choose a Number
        </Typography>
        <form onSubmit={this.handleSubmit}>
          <TextField
            onChange={e => {
              this.setState({ number: e.currentTarget.value });
            }}
            type="tel"
            margin="normal"
            required
          />
        </form>
        {this.state.numberFact && (
          <Typography align="center" component="h4" variant="h4">
            "{this.state.numberFact}"
          </Typography>
        )}
        <Typography>
          Having fun with{" "}
          <a href="http://numbersapi.com/#33/trivia">numbersapi.com</a>
        </Typography>
      </Grid>
    );
  }
}

export default Homepage;
