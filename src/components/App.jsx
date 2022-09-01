import { GlobalStyle } from "./GlobalStyle";
import { Component } from "react";
import { Box } from "./Box";

import { Searchbar } from "./Searchbar/Searchbar";
// import { Loader } from "./Loader/Loader";

export class App extends Component {
  state = {
    page: 1,
    query: '',
    items: [],
    isLoading: false,
  };

//   hendleFormSubmit = initialValue => {
//     console.log(initialValue);
// }

  onSubmit = query => {
    console.log(query);
    // this.setState({ query, isLoading: true });
  }
  



  render() {
    return (
      <Box
        display="grid"
        gridGap={4}
        gridTemplateColumns="1fr"
        pb={4}
      >
        <Searchbar onSubmit={this.onSubmit} />
         
        <GlobalStyle />
      </Box>
    );
  }
}
