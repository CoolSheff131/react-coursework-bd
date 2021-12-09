import { Formik } from "formik";
import { Button, Form, Modal } from "react-bootstrap";
import Document from "../Entities/Document";
import Journal from "../Entities/Journal";
import Worker from "../Entities/Worker";
import * as Yup from 'yup';

interface DialogJournalProps {
    title: string;
    show: boolean;
    handleClose(): void;
    handleConfirm(journal: Journal): void;
    journal?: Journal;
    workers: Worker[];
    documents: Document[];
}

const SignupSchema = Yup.object().shape({
    actionType: Yup.string()
        .required('Необходимо заполнить поле')
});

const DialogJournal = (props: DialogJournalProps) => {
    const { show, journal, documents, workers, handleConfirm, handleClose, title } = props;
    const a: Journal = {
        actionType: "",
        documentNumber: 0,
        documentId: documents[0]?.id || 1,
        workerId: workers[0]?.id || 1,
        id: 0,
        workerFirstName: "",
        workersSecondName: ""
    }
    console.log(workers);

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>{title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Formik
                    onSubmit={handleConfirm}
                    initialValues={journal || a}
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
                                <Form.Label>Тип действия</Form.Label>
                                <Form.Control isInvalid={!!errors.actionType} placeholder="Иркутск" onChange={handleChange} name="actionType" value={values.actionType} />
                                <Form.Control.Feedback type="invalid">
                                    {errors.actionType}
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>ФИО работника</Form.Label>
                                <Form.Select aria-label="Floating label select example" onChange={handleChange} name="workerId" value={values.workerId} >
                                    {workers.map((worker) => <option value={worker.id}>{worker.firstName} {worker.secondName}</option>)}
                                </Form.Select>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Номер документа</Form.Label>
                                <Form.Select aria-label="Floating label select example" onChange={handleChange} name="documentId" value={values.documentId} >
                                    {documents.map((document) => <option value={document.id}>{document.number}</option>)}
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

export default DialogJournal;