import { GlobalStyle } from "./GlobalStyle";
import { Component } from "react";
import { Box } from "./Box";

import { Searchbar } from "./Searchbar/Searchbar";


export class App extends Component {
  state = {
    page: 1,
    query: '',
    items: [],
  };

  render() {
    return (
      <Box
        display="grid"
        gridGap={4}
        gridTemplateColumns="1fr"
        pb={4}
      >
        <Searchbar />
        <GlobalStyle />
      </Box>
    );
  }
}
