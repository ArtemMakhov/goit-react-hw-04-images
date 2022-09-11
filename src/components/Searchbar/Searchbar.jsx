import PropTypes from 'prop-types';
import { useState } from "react";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Header,SearchForm,Button,Label,SearchFormInput } from "./Searchbar.styled";


export const Searchbar = ({ onSubmit}) => {
    const [imputValue, setImputValue] = useState('');


    const handleImputChange = e => {setImputValue(e.currentTarget.value);}

    const handleSubmit = e => {
        e.preventDefault();

        if (imputValue.trim() === '') {
           return toast.error("🦄 You didn't enter anything ;-)");
            }
           
        onSubmit(imputValue);
        setImputValue('');
    }

        return (
            <Header>
                <SearchForm onSubmit={handleSubmit}>
                    <Button type="submit" >
                        <Label>Search</Label>
                    </Button>
                    <SearchFormInput
                        type="text"
                        name="imputValue"
                        value={imputValue}
                        onChange={handleImputChange}
                        autoComplete="off"
                        autoFocus
                        placeholder="Search images and photos"
                    />
                </SearchForm>  
            </Header>
        );   
}

Searchbar.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};




