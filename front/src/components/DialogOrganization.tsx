import { FormikProps, withFormik } from "formik";
import { Button, Form, Modal } from "react-bootstrap";
import Organization from "../Entities/Organization";


interface FormValues {
    name: string;
    addressIndex: string;
    city: string;
    phone: string;
    faks: string;
    email: string;
}
interface MyFormProps {
    organization?: Organization
    handleConfirm(organization: Organization): void;
}

const DialogOrganizationForm = (props: FormikProps<FormValues>) => {
    const {
        values,
        handleChange,
        handleSubmit,
    } = props;
    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Город</Form.Label>
                <Form.Control placeholder="Иркутск" onChange={handleChange} name="city" value={values.city} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Название</Form.Label>
                <Form.Control placeholder="Doofenshmirtz Evil Incorporated" onChange={handleChange} name="name" value={values.name} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Индекс</Form.Label>
                <Form.Control placeholder="6777071" onChange={handleChange} name="addressIndex" value={values.addressIndex} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Почта</Form.Label>
                <Form.Control placeholder="tukana@mail.com" onChange={handleChange} name="email" value={values.email} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Телефон</Form.Label>
                <Form.Control placeholder="88005553535" onChange={handleChange} name="phone" value={values.phone} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Факс</Form.Label>
                <Form.Control placeholder="2024" onChange={handleChange} name="faks" value={values.faks} />
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