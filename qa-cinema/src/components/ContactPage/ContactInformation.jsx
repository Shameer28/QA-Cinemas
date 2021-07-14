
import Container from 'react-bootstrap/Container';

const ContactInformation = () => {
    return (
        <Container>

            <div class="column col-lg-4 col-md-12 col-sm-12">
                <div class="text"><h2>Feel free to get in contact with us.</h2> </div>
                <ul class="contact-info">
                    <li>
                        <strong>Location: </strong>
                        8, St James's Bldg, 61-95 Oxford St, Manchester, M1 6FQ
                    </li>
                    <li>

                        <strong>Call Center: </strong>
                        <a href="tel:+44 (0)345 074 7995">+44 (0)345 074 7995</a>
                    </li>
                    <li>
                        <strong>Email Us: </strong>
                        <a href="#">SDar@qa.com</a>
                    </li>

                </ul>
            </div>
        </Container>
    );
}

export default ContactInformation;