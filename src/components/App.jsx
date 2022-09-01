import { GlobalStyle } from "./GlobalStyle";
import { Box } from "./Box";


export const App = () => {
  return (
    <>
      <Box
        display="grid"
        gridGap={4}
        gridTemplateColumns="1fr"
        pb={4}
      >
        <GlobalStyle/>
      </Box>
    </>
  );
};
