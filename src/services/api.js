import axios from "axios";

axios.defaults.baseURL = 'https://pixabay.com/api/';

const API_KEY = '28371494-c5e29ef795b67968f0a2006d4';

export const getImages = async (query, page) => {
    const responce = await axios({
        params: {
            key: API_KEY,
            image_type: 'photo',
            orientation: 'horizontal',
            page: page,
            per_page: 12,
            q: query,
        }
    });
    const images = responce.data.hits.map(
        ({ id, largeImageURL, webfomatURL }) => ({
            id,
            largeImageURL,
            webfomatURL,
        }));
    return images;

};