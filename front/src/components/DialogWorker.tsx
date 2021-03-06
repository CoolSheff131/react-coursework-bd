import { Formik } from "formik";
import { Button, Form, Modal } from "react-bootstrap";
import Otdel from "../Entities/Otdel";
import Worker from "../Entities/Worker";
import * as Yup from 'yup';

interface DialogWorkerProps {
    title: string;
    show: boolean;
    handleClose(): void;
    handleConfirm(worker: Worker): void;
    worker?: Worker;
    otdels: Otdel[];
}

const SignupSchema = Yup.object().shape({
    firstName: Yup.string()
        .required('Необходимо заполнить поле'),
    otdelName: Yup.string()
        .required('Необходимо заполнить поле'),
    secondName: Yup.string()
        .required('Необходимо заполнить поле')

});

const DialogWorker = (props: DialogWorkerProps) => {
    const { show, worker, handleConfirm, handleClose, title, otdels } = props;
    const a: Worker = {
        firstName: "",
        id: 0,
        otdelId: otdels[0]?.id || 1,
        otdelName: "",
        secondName: ""
    }
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>{title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Formik
                    onSubmit={handleConfirm}
                    initialValues={worker || a}
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
                                <Form.Label>Имя работника</Form.Label>
                                <Form.Control isInvalid={!!errors.firstName} placeholder="Иркутск" onChange={handleChange} name="firstName" value={values.firstName} />
                                <Form.Control.Feedback type="invalid">
                                    {errors.firstName}
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Фамилия работника</Form.Label>
                                <Form.Control isInvalid={!!errors.secondName} placeholder="Doofenshmirtz Evil Incorporated" onChange={handleChange} name="secondName" value={values.secondName} />
                                <Form.Control.Feedback type="invalid">
                                    {errors.secondName}
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Название отдела</Form.Label>
                                <Form.Select aria-label="Floating label select example" onChange={handleChange} name="otdelId" value={values.otdelId} >
                                    {otdels.map((otdel) => <option value={otdel.id}>{otdel.name}</option>)}
                                </Form.Select>
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

export default DialogWorker;