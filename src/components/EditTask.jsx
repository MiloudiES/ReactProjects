import { useState } from 'react';
import PropTypes from 'prop-types';
import { Form, Button, Modal } from 'react-bootstrap';

export default function EditTask({ show, onClose, taskToEdit, onSave }) {
  const [updatedTask, setUpdatedTask] = useState(taskToEdit);

  const handleSave = () => {
    onSave(updatedTask);
    onClose();
  };

  return (
    <Modal show={show} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Edit Task</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group>
            <Form.Control
              type="text"
              value={updatedTask}
              onChange={(e) => setUpdatedTask(e.target.value)}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>Close</Button>
        <Button variant="primary" onClick={handleSave}>Save Changes</Button>
      </Modal.Footer>
    </Modal>
  );
}

EditTask.propTypes = {
  show: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  taskToEdit: PropTypes.string.isRequired,
  onSave: PropTypes.func.isRequired,
};
