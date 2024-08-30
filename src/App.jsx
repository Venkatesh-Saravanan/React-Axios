import React, { useState, useEffect } from 'react';
import api from './api';
import UserForm from './UserForm';
import UserList from './UserList';
import './App.css';

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await api.get('/');
      setUsers(response.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const addUser = async (user) => {
    try {
      const response = await api.post('/', user);
      setUsers([...users, response.data]);
    } catch (error) {
      console.error("Error adding user:", error);
    }
  };

  const editUser = async (id, updatedUser) => {
    try {
      await api.put(`/${id}`, updatedUser);
      setUsers(users.map(user => (user.id === id ? updatedUser : user)));
    } catch (error) {
      console.error("Error editing user:", error);
    }
  };

  const deleteUser = async (id) => {
    try {
      await api.delete(`/${id}`);
      setUsers(users.filter(user => user.id !== id));
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  return (
    <div className="app">
      <h1>React Axios Task</h1>
      <UserForm onAdd={addUser} />
      <UserList users={users} onEdit={editUser} onDelete={deleteUser} />
    </div>
  );
}

export default App;