import { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Operaciones = () =>{
    const [numero1, setNumero1] = useState(''); 
    const [numero2, setNumero2] = useState('');
    const [resultado, setResultado] = useState('');

    const numero1Handler = (event) => {
        setNumero1(event.target.value);
    }

    const numero2Handler = (event) => {
        setNumero2(event.target.value);
    }

    const numeroResultado = (event) => {
        setResultado(event.target.value);
    }

    const submitHandler = (event) => {
        event.preventDefault();
    }


    const clickHandler1 = () => {
        setResultado(numero1*numero2);
        console.log(resultado);
    }

    const clickHandler2 = () => {
        setResultado((numero1)+(numero2));
        console.log(resultado);
    }

    const clickHandler3 = () => {
        setResultado(numero1/numero2);
        console.log(resultado);
    }

    const clickHandler4 = () => {
        setResultado(numero1-numero2);
        console.log(resultado);
    }

    return (
        <Form onSubmit={submitHandler}>
            <Container>
                <Row>
                    <Col><Form.Label>Primer número: </Form.Label>
                        <Form.Control onChange={numero1Handler} type='number' value={numero1} /></Col>
                    <Col><Form.Label>Segundo número </Form.Label>
                        <Form.Control onChange={numero2Handler} type='number' value={numero2} /></Col>

                </Row>
                <Row>
                    <Col><Button onClick={clickHandler1} variant="success">x</Button></Col>
                    <Col><Button onClick={clickHandler2} variant="success">+</Button></Col>
                    <Col><Button onClick={clickHandler3} variant="success">/</Button></Col>
                    <Col><Button onClick={clickHandler4} variant="success">-</Button></Col>
                </Row>
            </Container>
        </Form>
    )
}

export default Operaciones;