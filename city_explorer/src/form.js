import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

function Form() {
    return (
        <div>
            <Form>
                <Form.Label>Choose your Destination</Form.Label>
                <Form.Control type="text" placeholder="enter a city" />
                <Button variant="primary" type="submit">Explore!</Button>
            </Form>
        </div>
    )
}