import { FormikProps, withFormik } from "formik";
import { Button, Form, Modal } from "react-bootstrap";
import Document from "../Entities/Document";
import * as Yup from 'yup';


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

const SignupSchema = Yup.object().shape({
    number: Yup.number().typeError('Вы должны ввести число')
        .required('Необходимо заполнить поле').positive('Число должны быть больше нуля').integer().typeError('Число должно быть целым'),
    firstNameAuthor: Yup.string()
        .required('Необходимо заполнить поле'),
    name: Yup.string().required('Необходимо заполнить поле'),
    organizationName: Yup.string()
        .required('Необходимо заполнить поле'),
    pageCount: Yup.number().typeError('Вы должны ввести число')
        .required('Необходимо заполнить поле').positive('Число должны быть больше нуля').integer().typeError('Число должно быть целым'),
    secondNameAuthor: Yup.string()
        .required('Необходимо заполнить поле'),
    type: Yup.string()
        .required('Необходимо заполнить поле'),
    year: Yup.number().typeError('Вы должны ввести число')
        .required('Необходимо заполнить поле').positive('Число должны быть больше нуля').integer().typeError('Число должно быть целым'),
});

interface MyFormProps {
    document?: Document
    handleConfirm(document: Document): void;
}

const DialogDocumentForm = (props: FormikProps<FormValues>) => {
    const {
        values,
        handleChange,
        errors,
        handleSubmit,
    } = props;
    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Номер</Form.Label>
                <Form.Control placeholder="1234" onChange={handleChange} name="number" value={values.number} isInvalid={!!errors.number} />
                <Form.Control.Feedback type="invalid">
                    {errors.number}
                </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Название</Form.Label>
                <Form.Control isInvalid={!!errors.name} placeholder="QR-код для входа" onChange={handleChange} name="name" value={values.name} />
                <Form.Control.Feedback type="invalid">
                    {errors.name}
                </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Название организации</Form.Label>
                <Form.Control isInvalid={!!errors.organizationName} placeholder="Doofenshmirtz Evil Incorporated" onChange={handleChange} name="organizationName" value={values.organizationName} />
                <Form.Control.Feedback type="invalid">
                    {errors.organizationName}
                </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Количество страниц</Form.Label>
                <Form.Control isInvalid={!!errors.pageCount} placeholder="1" onChange={handleChange} name="pageCount" value={values.pageCount} />
                <Form.Control.Feedback type="invalid">
                    {errors.pageCount}
                </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Тип</Form.Label>
                <Form.Control isInvalid={!!errors.type} placeholder="письмо, счет..." onChange={handleChange} name="type" value={values.type} />
                <Form.Control.Feedback type="invalid">
                    {errors.type}
                </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Год</Form.Label>
                <Form.Control isInvalid={!!errors.year} placeholder="2024" onChange={handleChange} name="year" value={values.year} />
                <Form.Control.Feedback type="invalid">
                    {errors.year}
                </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Имя автора</Form.Label>
                <Form.Control isInvalid={!!errors.firstNameAuthor} placeholder="Павел" onChange={handleChange} name="firstNameAuthor" value={values.firstNameAuthor} />
                <Form.Control.Feedback type="invalid">
                    {errors.firstNameAuthor}
                </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Фамилия автора</Form.Label>
                <Form.Control isInvalid={!!errors.secondNameAuthor} placeholder="Петров" onChange={handleChange} name="secondNameAuthor" value={values.secondNameAuthor} />
                <Form.Control.Feedback type="invalid">
                    {errors.secondNameAuthor}
                </Form.Control.Feedback>
            </Form.Group>

            <Button variant="primary" type="submit">
                Подтвердить
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
    validationSchema: SignupSchema,
    handleSubmit(
        { number, firstNameAuthor, name, organizationName, pageCount, secondNameAuthor, type, year }: FormValues,
        { props, setSubmitting, setErrors }
    ) {
        console.log("OK");
        const doc: Document = {
            id: 0,
            number,
            firstNameAuthor,
            name,
            organizationName,
            pageCount,
            secondNameAuthor,
            type,
            year
        }
        props.handleConfirm(doc)
    }
})(DialogDocumentForm);

interface DialogDocumentProps {
    title: string;
    show: boolean;
    handleClose(): void;
    handleConfirm(document: Document): void;
    document?: Document;
}

const DialogDocument = (props: DialogDocumentProps) => {
    const { show, document, handleConfirm, handleClose, title } = props;
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>{title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Forms document={document} handleConfirm={handleConfirm} />
            </Modal.Body>
        </Modal>
    )
}

export default DialogDocument;