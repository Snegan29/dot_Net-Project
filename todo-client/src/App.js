import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    try {
      setLoading(true);
      // Try HTTP instead of HTTPS - many local dev environments use HTTP
      const response = await fetch('http://localhost:5000/api/todo');
      if (response.ok) {
        const data = await response.json();
        setTodos(data);
      } else {
        console.error('Failed to fetch todos');
      }
    } catch (error) {
      console.error('Error fetching todos:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleAddTodo = async (e) => {
    e.preventDefault();
    if (!newTodo.trim()) return;

    try {
      const response = await fetch('http://localhost:5000/api/todo', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ title: newTodo, isCompleted: false })
      });

      if (response.ok) {
        setNewTodo('');
        fetchTodos();
      }
    } catch (error) {
      console.error('Error adding todo:', error);
    }
  };

  const handleDeleteTodo = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/api/todo/${id}`, {
        method: 'DELETE'
      });

      if (response.ok) {
        fetchTodos();
      }
    } catch (error) {
      console.error('Error deleting todo:', error);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Todo List</h1>
        <form onSubmit={handleAddTodo} className="todo-form">
          <input
            type="text"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            placeholder="Add a new task..."
            className="todo-input"
          />
          <button type="submit" className="add-button">Add</button>
        </form>

        {loading ? (
          <p>Loading todos...</p>
        ) : (
          <ul className="todo-list">
            {todos.length === 0 ? (
              <p>No tasks yet. Add a task above!</p>
            ) : (
              todos.map((todo) => (
                <li key={todo.id} className="todo-item">
                  <span className="todo-title">{todo.title}</span>
                  <button 
                    onClick={() => handleDeleteTodo(todo.id)}
                    className="delete-button"
                  >
                    Delete
                  </button>
                </li>
              ))
            )}
          </ul>
        )}
      </header>
    </div>
  );
}

export default App;