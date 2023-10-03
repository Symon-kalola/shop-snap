import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import AddEditProduct from "../AddEditProduct";

function EditProduct(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered>
      <Modal.Body>
        <Button
          onClick={props.onHide}
          className="btn-close btn-danger "></Button>
        <AddEditProduct />
      </Modal.Body>
      
    </Modal>
  );
}
export default EditProduct;
