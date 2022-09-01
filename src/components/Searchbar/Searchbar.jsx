import { Formik } from "formik";
import { Header,SearchForm,Button,Label,SearchFormInput } from "./Searchbar.styled";

export const Searchbar = ({onSubmit}) => {
    return (
    <Header>
            <Formik
                initialValues={{ search: '' }}
                onSubmit={async values => await onSubmit(values.search)}
            >
                {({submiting})=> (
                <SearchForm>
                    <Button type="submit" disabled={submiting}>
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
                    )}
        </Formik>
    </Header>
    );
};