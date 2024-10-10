import {Container, Row, Col} from 'react-bootstrap';
import '../App.css';

function Footer(){
    return (
        <footer class="footer">
            <Container fluid style={{height: "50px", backgroundColor: "#F5F5F5"}}>
                <Row>
                    <Col lg={8} style={{backgroundColor: "#F5F5F5"}}>
                    <img class="euroflag" src="/../eu-flag.png"></img>
                    GDI project receives funding from the European Union’s Digital Europe Programme under grant agreement number 101081813.
                    </Col>
                    <Col style={{backgroundColor: "#F5F5F5"}}>

                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer;