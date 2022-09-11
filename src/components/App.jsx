import { GlobalStyle } from "./GlobalStyle";
import { useState,useEffect} from "react";
import { ToastContainer, toast } from 'react-toastify';
import { Box } from "./Box";
import { getImages } from "../services/api";
import { Modal } from "./Modal/Modal";
import { Button } from "./Button/Button";
import { Searchbar } from "./Searchbar/Searchbar";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { Loader } from "./Loader/Loader";

export const  App = () =>  {
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState('');
  const [items, setItems] = useState([]);
  const [currentLargeImageURL, setCurrentLargeImageURL] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);


  useEffect(() => {
    if (query !== '') {
      addImages(query, page);
    }
  }, [page, query]);

  const onOpenModalWithLargeImage = url => {
    setCurrentLargeImageURL(url);
  }

  const onModalClose = () => {
    setCurrentLargeImageURL('');
  }

  const hendleFormSubmit = query => {
    setQuery(query);
    setPage(1);
    setItems([]);
  }
  
  const onLoadMoreButton = () => {setPage(prevPage => prevPage + 1)}

 
  const addImages = async (query, page) => {
    try {
      setIsLoading(true);
      const images = await getImages(query, page);

      setItems(prevItems => [...prevItems, ...images]);
      setIsLoading(false);

      if (images.length === 0) {
        toast.error("Sorry, we can't find anyting for your request. Please, enter another request");
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

    return (
      <Box
        display="grid"
        gridGap={4}
        gridTemplateColumns="1fr"
        pb={4}
      >
        <Searchbar onSubmit={hendleFormSubmit} />
        
        {error && <p>{error}</p>}
        
        {items.length > 0 && (
          <ImageGallery
            items={items}
            onClick={onOpenModalWithLargeImage}
          />
        )}
        
        {isLoading && <Loader />}
        
        {items.length > 0 && (
          <Button onLoadMore={onLoadMoreButton} isLoading={isLoading} />
        )}
        
        {currentLargeImageURL && (
          <Modal onClose={onModalClose} url={currentLargeImageURL} /> 
        )}
        
        <ToastContainer autoClose={3000} theme="colored" /> 
        <GlobalStyle />
      </Box>
    );
}
