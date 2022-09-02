import PropTypes from 'prop-types';
import { GalleryItem, Image } from "./ImageGalleryItem.styled"

export const ImageGalleryItem = ({ item, onClick }) => {
    const { webformatURL, largeImageURL, tag } = item;
    return (
        <GalleryItem>
            <Image
                src={webformatURL}
                alt={tag}
                onClick={() => onClick(largeImageURL)}
            />
        </GalleryItem>
    );
};

ImageGalleryItem.propTypes = {
    items: PropTypes.exact({
        id: PropTypes.string,
        webformatURL: PropTypes.string,
        tag: PropTypes.string,
        largeImageURL: PropTypes.string,
    }),
    onClick: PropTypes.func.isRequired,
};