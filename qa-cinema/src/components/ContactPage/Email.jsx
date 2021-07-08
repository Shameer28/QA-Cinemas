import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from 'react-bootstrap/Card'
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";

const Email = () => {
    const [Email, setEmail] = useState('');
    const [FirstName, setFirstName] = useState('');
    const [LastName, setLastName] = useState('');
    const [TextArea, setTextArea] = useState('');




    const handleSubmit = (e) => {
        //Preventing the page from refreshing
        e.preventDefault();

        const dataToSend = JSON.stringify({ Email, FirstName, LastName, TextArea });
        console.log("data has been sent");
        console.log(dataToSend);



        //Setting the states back to ''
        setEmail('');
        setFirstName('');
        setLastName('');
        setTextArea('');


        // const handleSubmits = (e) => {
        //     e.preventDefault();
        //     axios({
        //         method: "POST",
        //         url: "http://localhost:3000/send",
        //         data: this.data
        //     }).then((response) => {
        //         if (response.data.status === 'success') {
        //             alert("Message Sent.");
        //             this.resetForm()
        //         } else if (response.data.status === 'fail') {
        //             alert("Message failed to send.")
        //         }
        //     });
        // };

    }
    return (
        <div >
            <Container>
                <Card className="text-center">
                    <Card.Header>Contact US</Card.Header>
                    <Card.Body>
                        <Card.Title>Please fill out the form to submit a request</Card.Title>
                        <Card.Text>
                            <Form onSubmit={handleSubmit} >
                                <Form.Group>
                                    <Form.Label><u>Email address</u></Form.Label>
                                    <Form.Control id="Email" type="email" className="form-control" placeholder="name@example.com" value={Email} pattern="/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/"
                                        required onChange={(e) => { setEmail(e.target.value) }} />
                                </Form.Group>
                                <Form.Group >
                                    <Form.Label>First Name</Form.Label>
                                    <Form.Control id="FirstName" type="text" className="form-control" required minLength={3} placeholder="First Name" value={FirstName} onChange={(e) => { setFirstName(e.target.value) }} />

                                    <Form.Label>Last Name</Form.Label>
                                    <Form.Control id="LastName" type="text" className="form-control" required minLength={3} placeholder="Last Name" value={LastName} onChange={(e) => { setLastName(e.target.value) }} />
                                </Form.Group>
                                <Form.Group >
                                    <Form.Label>Message</Form.Label>
                                    <Form.Control id="TextArea" as="textarea" className="form-control" required minLength={3} rows={3} value={TextArea} onChange={(e) => { setTextArea(e.target.value) }} />
                                </Form.Group>
                                <br />
                                <button type="submit"> submit</button>
                            </Form>
                        </Card.Text>

                    </Card.Body>
                    <Card.Footer className="text-muted"></Card.Footer>
                </Card>
            </Container>
        </div>
    );
}
export default Email;