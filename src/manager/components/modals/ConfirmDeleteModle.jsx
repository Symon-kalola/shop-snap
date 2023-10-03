import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function ConfirmDelete(props) {
  return (
    <Modal
      {...props}
      size="sm"
      aria-labelledby="contained-modal-title-vcenter"
      centered>
      <Modal.Body>
        <h6 className="text-danger">Are you sure you want to delete?</h6>
        <div className="d-flex">
          <Button
            onClick={props.onHide}
            variant="outline-danger btn-sm "
            className="my-2 ">
            confirm
          </Button>
          <Button
            onClick={props.onHide}
            variant="outline-primary btn-sm "
            className="my-2 ms-2">
            cancel
          </Button>
        </div>
      </Modal.Body>
    </Modal>
  );
}
export default ConfirmDelete;
