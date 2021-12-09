import { Formik } from "formik";
import { Button, Form, Modal } from "react-bootstrap";
import Organization from "../Entities/Organization";
import Otdel from "../Entities/Otdel";
import * as Yup from 'yup';

interface DialogOtdelProps {
    title: string;
    show: boolean;
    handleClose(): void;
    handleConfirm(otdel: Otdel): void;
    otdel?: Otdel;
    organizations: Organization[];
}

const SignupSchema = Yup.object().shape({

    firstNameBoss: Yup.string()
        .required('Необходимо заполнить поле'),

    name: Yup.string()
        .required('Необходимо заполнить поле'),

    organizationName: Yup.string()
        .required('Необходимо заполнить поле'),
    phone: Yup.string()
        .required('Необходимо заполнить поле'),
    secondNameBoss: Yup.string()
        .required('Необходимо заполнить поле')
});

const DialogOtdel = (props: DialogOtdelProps) => {
    const { show, otdel, handleConfirm, handleClose, title, organizations } = props;
    const a: Otdel = {
        firstNameBoss: "",
        id: 0,
        name: "",
        organizationId: organizations[0]?.id || 1,
        organizationName: "",
        phone: "",
        secondNameBoss: ""
    }
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>{title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Formik
                    onSubmit={handleConfirm}
                    initialValues={otdel || a}
                    validationSchema={SignupSchema}
                >
                    {({
                        handleSubmit,
                        handleChange,
                        values,
                        errors
                    }) => (
                        <Form onSubmit={handleSubmit}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Название</Form.Label>
                                <Form.Control isInvalid={!!errors.name} placeholder="Иркутск" onChange={handleChange} name="name" value={values.name} />
                                <Form.Control.Feedback type="invalid">
                                    {errors.name}
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Имя босса</Form.Label>
                                <Form.Control isInvalid={!!errors.firstNameBoss} placeholder="Doofenshmirtz Evil Incorporated" onChange={handleChange} name="firstNameBoss" value={values.firstNameBoss} />
                                <Form.Control.Feedback type="invalid">
                                    {errors.firstNameBoss}
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Фамилия босса</Form.Label>
                                <Form.Control isInvalid={!!errors.secondNameBoss} placeholder="6777071" onChange={handleChange} name="secondNameBoss" value={values.secondNameBoss} />
                                <Form.Control.Feedback type="invalid">
                                    {errors.secondNameBoss}
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Название организации</Form.Label>
                                <Form.Select aria-label="Floating label select example" onChange={handleChange} name="organizationId" value={values.organizationId} >
                                    {organizations.map((organization) => <option value={organization.id}>{organization.name}</option>)}
                                </Form.Select>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Телефон</Form.Label>
                                <Form.Control isInvalid={!!errors.phone} placeholder="88005553535" onChange={handleChange} name="phone" value={values.phone} />
                                <Form.Control.Feedback type="invalid">
                                    {errors.phone}
                                </Form.Control.Feedback>
                            </Form.Group>

                            <Button variant="primary" type="submit">
                                Подтвердить
                            </Button>
                        </Form>
                    )}
                </Formik>
            </Modal.Body>
        </Modal>
    )
}

export default DialogOtdel;