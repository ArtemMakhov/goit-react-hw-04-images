import { Component } from "react";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Header,SearchForm,Button,Label,SearchFormInput } from "./Searchbar.styled";


export class Searchbar extends Component {
    state = {
        imputValue: '',
    };


    handleImputChange = e => {
        this.setState({ imputValue: e.currentTarget.value.toLowerCase() });
    }

    handleSubmit = e => {
        e.preventDefault();

        if (this.state.imputValue.trim() === '') {
           return toast.error("🦄 You didn't enter anything ;-)");
            }
           
        this.props.onSubmit(this.state.imputValue);
        this.setState({ imputValue: '' });
    }


    render() {
        return (
            <Header>
                <SearchForm onSubmit={this.handleSubmit}>
                    <Button type="submit" >
                        <Label>Search</Label>
                    </Button>
                    <SearchFormInput
                        type="text"
                        name="imputValue"
                        value={this.state.imputValue}
                        onChange={this.handleImputChange}
                        autoComplete="off"
                        autoFocus
                        placeholder="Search images and photos"
                    />
                </SearchForm>
                    
            
            </Header>
        );
    }
}




