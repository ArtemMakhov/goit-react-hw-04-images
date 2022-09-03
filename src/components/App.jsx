import { GlobalStyle } from "./GlobalStyle";
import { Component } from "react";
import { ToastContainer, toast } from 'react-toastify';
import { Box } from "./Box";
import { getImages } from "../services/api";
import { Modal } from "./Modal/Modal";
import { Button } from "./Button/Button";
import { Searchbar } from "./Searchbar/Searchbar";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { Loader } from "./Loader/Loader";

export class App extends Component {
  state = {
    page: 1,
    query: '',
    items: [],
    isLoading: false,
    currentLargeImageURL: '',
    error: null,
  };

  onOpenModalWithLargeImage = url => {
    this.setState({
      currentLargeImageURL: url,
    });
  }

  onModalClose = () => {
    this.setState({
      currentLargeImageURL: '',
    });
  }

  hendleFormSubmit = query => {
    this.setState({ query, page:1, items:[], });
  }
  
  onLoadMoreButton = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  }

  addImages = async (query, page) => {
    try {
      this.setState({
        isLoading: true,
      });
      const images = await getImages(query, page);

      this.setState(prevState => ({
        items: [...prevState.items, ...images],
        isLoading: false,
      }));
      if (images.length === 0) {
        toast.error("Sorry, we can't find anyting for your request. Please, enter another request");
      }
    } catch (error) {
      this.setState({ error: error.message });
    } finally {
      this.setState({ isLoading: false });
    }
  }
  
  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.page !== this.state.page || prevState.query !== this.state.query
    ) {
      this.addImages(this.state.query, this.state.page);
    }
  }
  
  render() {
    const { items, currentLargeImageURL, isLoading, error } = this.state;
    return (
      <Box
        display="grid"
        gridGap={4}
        gridTemplateColumns="1fr"
        pb={4}
      >
        <Searchbar onSubmit={this.hendleFormSubmit} isLoading={isLoading} />
        
        {error && <p>{error}</p>}
        
        {items.length > 0 && (
          <ImageGallery
            items={items}
            onClick={this.onOpenModalWithLargeImage}
          />
        )}
        
        {isLoading && <Loader />}
        
        {items.length > 0 && (
          <Button onLoadMore={this.onLoadMoreButton} isLoading={isLoading} />
        )}
        
        {currentLargeImageURL && (
          <Modal onClose={this.onModalClose} url={currentLargeImageURL} /> 
        )}
        
        <ToastContainer autoClose={3000} theme="colored" /> 
        <GlobalStyle />
      </Box>
    );
  }
}
