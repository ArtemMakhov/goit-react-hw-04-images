import { Formik } from "formik";
import { Header,SearchForm,Button,Label,SearchFormInput } from "./Searchbar.styled";

export const Searchbar = () => {
    return (
    <Header>
         <Formik>
            <SearchForm>
                <Button type="submit">
                    <Label>Search</Label>
                </Button>
                <SearchFormInput
                        type="text"
                        name="search"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                />
            </SearchForm>
        </Formik>
    </Header>
    );
};