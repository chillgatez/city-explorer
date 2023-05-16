import 'bootstrap/dist/css/bootstrap.min.css'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';



function SearchForm(props) {

    const handleSubmit = (event) => {
        event.preventDefault();
        props.retrieveLocData();

    }

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group>
                <Form.Label>Choose your Destination</Form.Label>
                <Form.Control type="text" placeholder="Enter a city" onChange={props.updateCity} />
            </Form.Group>
            {props.hasError &&
                <div>
                    <Alert variant="danger">
                        <strong className="mr-auto">Error {' '}</strong>
                        {props.errorMessage}, please try another search.
                    </Alert>
                </div>
            }
            <Button variant="primary" type="submit">Explore!</Button>
        </Form>

    );
}

export default SearchForm;