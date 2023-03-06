import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Btn from '../../components/button/Btn-outline';
import CardItem from '../../components/card/Card';
import { Slide } from "react-awesome-reveal";


function Help() {
    return (
        <Container fluid className="help-full-content" id='help'>
            <Row>
                <Col className='help-col'>
                    <div>
                        <h4 className='help-h4'>Como posso ajudar?</h4>
                        <div className="help-content">
                            <h4>Serviços oferecidos</h4>

                            <div className="help-card-itens">

                                <Slide direction={'left'}>
                                    <div className="card-item">
                                        <CardItem title='1' text='Consultas médicas em diversas especialidades' className='card-itself' />
                                    </div>
                                </Slide>

                                <Slide direction={'right'}>
                                    <div className="card-item">
                                        <CardItem title='2' text='Exames laboratoriais e de imagem' className='card-itself'/>
                                    </div>
                                </Slide>
                            
                                <Slide direction={'left'}>
                                    <div className="card-item">
                                        <CardItem title='3' text='Tratamentos fisioterápicos'  className='card-itself'/>
                                    </div>
                                </Slide>

                                <Slide direction={'right'}>
                                    <div className="card-item">
                                        <CardItem title='4' text='Acompanhamento nutricional' className='card-itself'/>
                                    </div>
                                </Slide>

                            </div>

                            <div className="help-btn">
                                <Btn frase="Agende seu atendimento" href="/#contato"/>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default Help;