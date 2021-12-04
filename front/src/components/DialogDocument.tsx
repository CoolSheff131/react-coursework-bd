import { Button, Form, Modal } from "react-bootstrap";
import Document from "../Entities/Document";

interface DialogDocumentProps {
    show: boolean;
    handleClose(): void;
    handleConfirm(event: any): void;
    document?: Document;
}
const DialogDocument = (props: DialogDocumentProps) => {
    const { show, handleClose, handleConfirm, document } = props;
    return (
        <Modal show={show} onHide={() => handleClose()}>
            <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Номер</Form.Label>
                        <Form.Control placeholder="1234" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Название</Form.Label>
                        <Form.Control placeholder="QR-код для входа" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Название организации</Form.Label>
                        <Form.Control placeholder="Doofenshmirtz Evil Incorporated" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Количество страниц</Form.Label>
                        <Form.Control placeholder="1" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Тип</Form.Label>
                        <Form.Control placeholder="письмо, счет..." />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Год</Form.Label>
                        <Form.Control placeholder="2024" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Имя автора</Form.Label>
                        <Form.Control placeholder="Павел" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Фамилия автора</Form.Label>
                        <Form.Control placeholder="Петров" />
                    </Form.Group>

                    <Button variant="primary" type="submit" onClick={handleConfirm}>
                        Submit
                    </Button>
                </Form>
            </Modal.Body>
        </Modal>
    )
}

export default DialogDocument;