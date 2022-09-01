import { Oval } from "react-loader-spinner";
import { Box } from "components/Box";

export const Loader = () => {
    return (
    
      <Box
    display="flex"
    justifyContent="center"
    alignItems="center"
    position="fixed"
    top="0"
    left="0"
    width="100vw"
    height="100vh"
    bg="#0000005e"
  >

    <Oval
        height={80}
        width={80}
        color="#4fa94d"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel='oval-loading'
        secondaryColor="#4fa94d"
        strokeWidth={2}
        strokeWidthSecondary={2}

          />
          </Box>
)
};