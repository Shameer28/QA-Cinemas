import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import image1 from './../img/u.png'
import image2 from './../img/pg.png'
import image3 from './../img/12.png'
import image4 from './../img/12A.png'
import image5 from './../img/15.png'
import image6 from './../img/18.png'
import image7 from './../img/18restrict.png'
import './Classification.css'



const Accordions = () => {
    return (
        <div>

            <Accordion defaultActiveKey="0">
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="0">
                        <b><u>U Universal - Suitable for all</u></b><img className="accorimg" src={image1} alt="U logo" width="5%" />
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body>A U film should be suitable for audiences aged four years and over,
                            although it is impossible to predict what might upset any particular child.</Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="1">
                        <b><u>PG Parental Guidance</u></b><img className="accorimg" src={image2} alt="PG logo" width="5%" />
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="1">
                        <Card.Body>General viewing, but some scenes may be unsuitable for young children.
                            A PG film should not unsettle a child aged around eight or older. Unaccompanied children of any age may watch,
                            but parents are advised to consider whether the content may upset younger, or more sensitive,
                            children.</Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="2">
                        <b><u>12A – Suitable for 12 years & over</u></b><img className="accorimg" src={image4} alt="PG logo" width="5%" />
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="2">
                        <Card.Body>Films classified 12A and video works classified 12 contain material that is not generally suitable for children aged under 12.
                            No one younger than 12 may see a 12A film in a cinema unless accompanied by an adult.
                            Adults planning to take a child under 12 to view a 12A film should consider whether the film is suitable for that child.
                            To help them decide, we recommend that they check the Ratings Info for that film in advance.
                            No one younger than 12 may rent or buy a 12 rated video work.
                            Dangerous behaviour</Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="3">
                        <b><u>12 – Suitable for 12 years & over</u></b><img className="accorimg" src={image3} alt="PG logo" width="5%" />
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="3">
                        <Card.Body>Films classified 12A and video works classified 12 contain material that is not generally suitable for children aged under 12.
                            No one younger than 12 may see a 12A film in a cinema unless accompanied by an adult.
                            Adults planning to take a child under 12 to view a 12A film should consider whether the film is suitable for that child.
                            To help them decide, we recommend that they check the Ratings Info for that film in advance.
                            No one younger than 12 may rent or buy a 12 rated video work.</Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="4">
                        <b><u>15 – Suitable only for 15 years & over</u></b><img className="accorimg" src={image5} alt="PG logo" width="5%" />
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="4">
                        <Card.Body>No one younger than 15 may see a 15 film in a cinema. No one younger than 15 may rent or buy a 15 rated video work.</Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="5">
                        <b><u>18 – Suitable only for adults</u></b><img className="accorimg" src={image6} alt="PG logo" width="5%" />
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="5">
                        <Card.Body>No one younger than 18 may see an 18 film in a cinema. No one younger than 18 may rent or buy an 18 rated video work.
                            Adults should be free to choose their own entertainment.</Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="6">
                        <b><u>R18 - To be shown only in specially licensed cinemas, and to adults only</u></b><img className="accorimg" src={image7} alt="PG logo" width="5%" />
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="6">
                        <Card.Body>The R18 category is a special and legally-restricted classification primarily for explicit works of consenting sex or strong fetish material involving adults.
                            Films may only be shown to adults in specially licensed cinemas, and video works may be supplied to adults only.
                            R18 video works may not be supplied by mail order.</Card.Body>
                    </Accordion.Collapse>
                </Card>

            </Accordion>

        </div>
    );
}

export default Accordions;