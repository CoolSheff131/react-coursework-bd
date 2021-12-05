import { FormikProps, withFormik } from "formik";
import { Button, Form, Modal } from "react-bootstrap";
import Otdel from "../Entities/Otdel";


interface FormValues {
    firstNameBoss: string;
    name: string;
    organizationId: number;
    organizationName: string;
    phone: string;
    secondNameBoss: string;
}
interface MyFormProps {
    otdel?: Otdel
    handleConfirm(organization: Otdel): void;
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
                <Form.Label>Название</Form.Label>
                <Form.Control placeholder="Иркутск" onChange={handleChange} name="name" value={values.name} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Имя босса</Form.Label>
                <Form.Control placeholder="Doofenshmirtz Evil Incorporated" onChange={handleChange} name="firstNameBoss" value={values.firstNameBoss} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Фамилия босса</Form.Label>
                <Form.Control placeholder="6777071" onChange={handleChange} name="secondNameBoss" value={values.secondNameBoss} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Почта</Form.Label>
                <Form.Select aria-label="Floating label select example" onChange={handleChange} name="organizationName" value={values.organizationName} >
                    <option>Open this select menu</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </Form.Select>
                {/* <Form.Control placeholder="tukana@mail.com" onChange={handleChange} name="email" value={values.organizationName} /> */}
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Телефон</Form.Label>
                <Form.Control placeholder="88005553535" onChange={handleChange} name="phone" value={values.phone} />
            </Form.Group>

            <Button variant="primary" type="submit">
                Подтвердить
            </Button>
        </Form>
    )
}

const Forms = withFormik<MyFormProps, FormValues>({
    mapPropsToValues: props => {
        const { otdel } = props
        return {
            firstNameBoss: otdel?.firstNameBoss || "1",
            name: otdel?.name || "1",
            organizationId: otdel?.organizationId || 1,
            organizationName: otdel?.organizationName || "1",
            phone: otdel?.phone || "1",
            secondNameBoss: otdel?.secondNameBoss || "1"
        }
    },

    handleSubmit(
        { firstNameBoss, name, organizationId, organizationName, phone, secondNameBoss }: FormValues,
        { props, setSubmitting, setErrors }
    ) {
        const doc: Otdel = {
            id: 0,
            firstNameBoss,
            name,
            organizationId,
            organizationName,
            phone,
            secondNameBoss
        }
        props.handleConfirm(doc)
    }
})(DialogOrganizationForm);

interface DialogOrganizationProps {
    title: string;
    show: boolean;
    handleClose(): void;
    handleConfirm(otdel: Otdel): void;
    otdel?: Otdel;
}

const DialogOrganization = (props: DialogOrganizationProps) => {
    const { show, otdel, handleConfirm, handleClose, title } = props;
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>{title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Forms otdel={otdel} handleConfirm={handleConfirm} />
            </Modal.Body>
        </Modal>
    )
}

export default DialogOrganization;