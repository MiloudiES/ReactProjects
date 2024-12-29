import  { useState } from 'react';
import AddTask from './components/AddTask';
import ToDoList from './components/ToDoList';
import EditTask from './components/EditTask';
import { Container } from 'react-bootstrap';

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  const handleAdd = (task) => setTasks([...tasks, task]);
  const handleDelete = (index) => setTasks(tasks.filter((_, i) => i !== index));
  const handleEdit = (index) => {
    setEditIndex(index);
    setIsEditing(true);
  };
  const handleSave = (updatedTask) => {
    const updatedTasks = [...tasks];
    updatedTasks[editIndex] = updatedTask;
    setTasks(updatedTasks);
    setIsEditing(false);
  };

  return (
    <Container className="mt-5">
      <h1 className="text-center">To-Do App</h1>
      <AddTask onAdd={handleAdd} />
      <ToDoList tasks={tasks} onDelete={handleDelete} onEdit={handleEdit} />
      {isEditing && (
        <EditTask
          show={isEditing}
          onClose={() => setIsEditing(false)}
          taskToEdit={tasks[editIndex]}
          onSave={handleSave}
        />
      )}
    </Container>
  );
}
