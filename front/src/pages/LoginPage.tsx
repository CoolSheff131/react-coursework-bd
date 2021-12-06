import { Formik } from "formik";
import { useState } from "react";
import { Button, Container, Form, Row, Col } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signIn } from "../api";
import { UserData } from "../Entities/UserData";
import { setUser } from "../store/action-creators/user";



const LoginPage = () => {
    const a: UserData = { login: '', password: '', role: '' }
    const navigate = useNavigate();
    const [isInvalid, setIsInvalid] = useState<boolean>(false);
    const dispatch = useDispatch()

    const handleConfirm = (userData: UserData) => {
        signIn(userData.login, userData.password).then((data) => {
            if (data.role !== 'ERR') {
                dispatch(setUser(data))
                navigate('/document')
            } else {
                setIsInvalid(true)
            }
        }).catch(err => {
            console.log(err);

        })

    }
    return (
        <Container>
            <Row className="justify-content-md-center">
                <Col xs lg="5">
                    <Formik
                        onSubmit={handleConfirm}
                        initialValues={a}
                    >
                        {({
                            handleSubmit,
                            handleChange,
                            values
                        }) => (
                            <Form onSubmit={handleSubmit}>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Логин</Form.Label>
                                    <Form.Control isInvalid={isInvalid} placeholder="" onChange={handleChange} name="login" value={values.login} />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Пароль</Form.Label>
                                    <Form.Control isInvalid={isInvalid} type="password" placeholder="" onChange={handleChange} name="password" value={values.password} />
                                    {isInvalid && <Form.Control.Feedback type="invalid">
                                        Пользователь с такими данными не найден
                                    </Form.Control.Feedback>}
                                </Form.Group>
                                <Button variant="dark" type="submit">
                                    Войти
                                </Button>
                            </Form>
                        )}
                    </Formik>
                </Col>
            </Row>
        </Container >
    )
}
export default LoginPage;