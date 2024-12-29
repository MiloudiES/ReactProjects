import PropTypes from 'prop-types';
import { Button, ListGroup } from 'react-bootstrap';

export default function ToDoList({ tasks, onDelete, onEdit }) {
  return (
    <ListGroup className="mt-3">
      {tasks.map((task, index) => (
        <ListGroup.Item key={index} className="d-flex justify-content-between align-items-center">
          {task}
          <div>
            <Button variant="warning" size="sm" onClick={() => onEdit(index)} className="me-2">Edit</Button>
            <Button variant="danger" size="sm" onClick={() => onDelete(index)}>Delete</Button>
          </div>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
}

ToDoList.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.string).isRequired,
  onDelete: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
};
