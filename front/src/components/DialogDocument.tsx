import { Formik, FormikProps, withFormik } from "formik";
import { Button, Form, Modal } from "react-bootstrap";
import Document from "../Entities/Document";



interface FormValues {
    number: number;
    firstNameAuthor: string;
    name: string;
    organizationName: string;
    pageCount: number;
    secondNameAuthor: string;
    type: string;
    year: number;
}
interface MyFormProps {
    document?: Document
}

interface OtherProps {
    title?: string;
    show?: boolean
    handleClose(): void;
}

const DialogDocumentForm = (props: FormikProps<FormValues>) => {
    const {
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,

    } = props;
    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Номер</Form.Label>
                <Form.Control placeholder="1234" onChange={handleChange} name="number" value={values.number} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Название</Form.Label>
                <Form.Control placeholder="QR-код для входа" onChange={handleChange} name="name" value={values.name} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Название организации</Form.Label>
                <Form.Control placeholder="Doofenshmirtz Evil Incorporated" onChange={handleChange} name="organizationName" value={values.organizationName} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Количество страниц</Form.Label>
                <Form.Control placeholder="1" onChange={handleChange} name="pageCount" value={values.pageCount} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Тип</Form.Label>
                <Form.Control placeholder="письмо, счет..." onChange={handleChange} name="type" value={values.type} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Год</Form.Label>
                <Form.Control placeholder="2024" onChange={handleChange} name="year" value={values.year} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Имя автора</Form.Label>
                <Form.Control placeholder="Павел" onChange={handleChange} name="firstNameAuthor" value={values.firstNameAuthor} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Фамилия автора</Form.Label>
                <Form.Control placeholder="Петров" onChange={handleChange} name="secondNameAuthor" value={values.secondNameAuthor} />
            </Form.Group>

            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    )
}

const Forms = withFormik<MyFormProps, FormValues>({
    mapPropsToValues: props => {
        const { document } = props
        return {
            number: document?.number || 1,
            firstNameAuthor: document?.firstNameAuthor || "",
            name: document?.name || "",
            organizationName: document?.organizationName || "",
            pageCount: document?.pageCount || 1,
            secondNameAuthor: document?.secondNameAuthor || "",
            type: document?.type || "",
            year: document?.year || 1,
        }
    },

    handleSubmit(
        { number, firstNameAuthor, name, organizationName, pageCount, secondNameAuthor, type, year }: FormValues,
        { props, setSubmitting, setErrors }
    ) {
        console.log("OK");
    }
})(DialogDocumentForm);

interface DialogDocumentProps {
    show: boolean;
    handleClose(): void;
    handleConfirm(event: any): void;
    document?: Document;
}

const DialogDocument = (props: DialogDocumentProps) => {
    const { show, document } = props;
    return (
        <Modal show={show}>
            <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Forms document={document} />
            </Modal.Body>
        </Modal>
    )
}

export default DialogDocument;