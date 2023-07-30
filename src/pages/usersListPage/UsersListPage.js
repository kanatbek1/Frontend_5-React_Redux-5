import React, { useEffect, useState } from 'react';
import { Table, Container } from 'react-bootstrap';

function UsersListPage() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);
  return (
    <Container>
      <h1>Список пользователей</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Имя</th>
            <th>Имя пользователя</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={user.id}>
              <td>{index + 1}</td>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}
export default UsersListPage;

