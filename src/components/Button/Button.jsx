import PropTypes from 'prop-types';
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

Button.propTypes = {
    onLoadMore: PropTypes.func.isRequired,
    isLoading: PropTypes.bool.isRequired,
};