import { LoadMoreBtn } from "./Button.styled";
import { Box } from "components/Box";

export const Button = ({ onLoadMore, isLoading }) => {
    return (
        <Box
            display="flex"
            justifyContent="center"
            mt="50px"
            mb="50px"
        >
            <LoadMoreBtn type="button" onClick={onLoadMore} disabled={isLoading}>
                Load more
            </LoadMoreBtn>
        </Box>
    )
};