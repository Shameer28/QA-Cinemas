import Form from 'react-bootstrap/Form'
//import axios from 'axios';
import { useState } from 'react';
import Container from 'react-bootstrap/Container';
<link href="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css"></link>

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
        <Container>
            <h3> Please fill out the form to submit a request</h3>
            <br></br>
            <Form onSubmit={handleSubmit} >
                <Form.Group>
                    <Form.Label><u>Email address</u></Form.Label>
                    <Form.Control id="Email" type="email" className="form-control" placeholder="name@example.com" value={Email} onChange={(e) => { setEmail(e.target.value) }} />
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
                <button type="submit"> submit</button>
            </Form>
        </Container>
    );
}
export default Email;