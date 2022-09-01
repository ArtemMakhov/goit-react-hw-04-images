import { Formik, Field, Form } from "formik";


export const Searchbar = () => {
    return (
        <Formik>
            <Form>
                <Field
                    type="text"
                    autocomplete="off"
                    autofocus
                    placeholder="Search images and photos"
                />
                <button type="submit">Search</button>
            </Form>
        </Formik>
    );
};