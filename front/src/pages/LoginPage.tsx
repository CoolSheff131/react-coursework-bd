import { Formik } from "formik";
import { Button, Container, Form, Row, Col } from "react-bootstrap";

const LoginPage = () => {
    const handleConfirm = () => {

    }
    return (
        <Container>
            <Row className="justify-content-md-center">
                <Col xs lg="5">
                    <Formik
                        onSubmit={handleConfirm}
                        initialValues={{ login: '', password: '' }}
                    >
                        {({
                            handleSubmit,
                            handleChange,
                            values
                        }) => (
                            <Form onSubmit={handleSubmit}>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Логин</Form.Label>
                                    <Form.Control placeholder="" onChange={handleChange} name="login" value={values.login} />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Пароль</Form.Label>
                                    <Form.Control type="password" placeholder="" onChange={handleChange} name="password" value={values.password} />
                                </Form.Group>
                                <Button variant="dark" type="submit">
                                    Войти
                                </Button>
                            </Form>
                        )}
                    </Formik>
                </Col>
            </Row>
        </Container>
    )
}
export default LoginPage;