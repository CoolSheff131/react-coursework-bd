import { FormikProps, withFormik } from "formik";
import { Button, Form, Modal } from "react-bootstrap";
import Organization from "../Entities/Organization";
import * as Yup from 'yup';

interface FormValues {
    name: string;
    addressIndex: string;
    city: string;
    phone: string;
    faks: string;
    email: string;
}

const SignupSchema = Yup.object().shape({

    name: Yup.string()
        .required('Необходимо заполнить поле'),
    addressIndex: Yup.string()
        .required('Необходимо заполнить поле'),
    city: Yup.string()
        .required('Необходимо заполнить поле'),
    phone: Yup.string()
        .required('Необходимо заполнить поле'),
    faks: Yup.string()
        .required('Необходимо заполнить поле'),
    email: Yup.string()
        .required('Необходимо заполнить поле')
});

interface MyFormProps {
    organization?: Organization
    handleConfirm(organization: Organization): void;
}

const DialogOrganizationForm = (props: FormikProps<FormValues>) => {
    const {
        values,
        handleChange,
        handleSubmit,
        errors,
    } = props;
    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Город</Form.Label>
                <Form.Control isInvalid={!!errors.city} placeholder="Иркутск" onChange={handleChange} name="city" value={values.city} />
                <Form.Control.Feedback type="invalid">
                    {errors.city}
                </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Название</Form.Label>
                <Form.Control isInvalid={!!errors.name} placeholder="Doofenshmirtz Evil Incorporated" onChange={handleChange} name="name" value={values.name} />
                <Form.Control.Feedback type="invalid">
                    {errors.name}
                </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Индекс</Form.Label>
                <Form.Control isInvalid={!!errors.addressIndex} placeholder="6777071" onChange={handleChange} name="addressIndex" value={values.addressIndex} />
                <Form.Control.Feedback type="invalid">
                    {errors.addressIndex}
                </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Почта</Form.Label>
                <Form.Control isInvalid={!!errors.email} placeholder="tukana@mail.com" onChange={handleChange} name="email" value={values.email} />
                <Form.Control.Feedback type="invalid">
                    {errors.email}
                </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Телефон</Form.Label>
                <Form.Control isInvalid={!!errors.phone} placeholder="88005553535" onChange={handleChange} name="phone" value={values.phone} />
                <Form.Control.Feedback type="invalid">
                    {errors.phone}
                </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Факс</Form.Label>
                <Form.Control isInvalid={!!errors.faks} placeholder="2024" onChange={handleChange} name="faks" value={values.faks} />
                <Form.Control.Feedback type="invalid">
                    {errors.faks}
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
        const { organization } = props
        return {
            name: organization?.name || "1",
            addressIndex: organization?.addressIndex || "1",
            city: organization?.city || "1",
            phone: organization?.phone || "1",
            faks: organization?.faks || "1",
            email: organization?.email || "1",
        }
    },
    validationSchema: SignupSchema,
    handleSubmit(
        { name, addressIndex, city, phone, faks, email }: FormValues,
        { props, setSubmitting, setErrors }
    ) {
        console.log("OK");
        const doc: Organization = {
            id: 0,
            name,
            addressIndex,
            city,
            phone,
            faks,
            email
        }
        props.handleConfirm(doc)
    }
})(DialogOrganizationForm);

interface DialogOrganizationProps {
    title: string;
    show: boolean;
    handleClose(): void;
    handleConfirm(document: Organization): void;
    organization?: Organization;
}

const DialogOrganization = (props: DialogOrganizationProps) => {
    const { show, organization, handleConfirm, handleClose, title } = props;
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>{title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Forms organization={organization} handleConfirm={handleConfirm} />
            </Modal.Body>
        </Modal>
    )
}

export default DialogOrganization;