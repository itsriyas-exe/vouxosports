import React, { useState } from "react";
import styled from "styled-components";
import { RiVipCrownLine } from "react-icons/ri";
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
const UserManagement = () => {
  // Sample user data
  const [users, setUsers] = useState([
    { id: 1, name: "John Doe", email: "john.doe@example.com" },
    { id: 2, name: "Jane Smith", email: "jane.smith@example.com" },
    { id: 3, name: "Alice Johnson", email: "alice.johnson@example.com" },
  ]);

  const [searchTerm, setSearchTerm] = useState("");

  // Filtered users based on the search term
  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Delete user function
  const handleDelete = (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this user?");
    if (confirmDelete) {
      setUsers(users.filter((user) => user.id !== id));
    }
  };

  // Edit user function (for demonstration)
  const handleEdit = (id) => {
    const userName = prompt("Enter new name for the user:");
    const userEmail = prompt("Enter new email for the user:");
    if (userName && userEmail) {
      setUsers(
        users.map((user) =>
          user.id === id ? { ...user, name: userName, email: userEmail } : user
        )
      );
    }
  };

  return (
    <StyledWrapper>
      <div className="header">
        <h4 className="text-secondary">User Management</h4>
        <input
          type="text"
          placeholder="Search users..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <table>
        <thead className="text-info">
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody style={{color:'black'}}>
          {filteredUsers.map((user, index) => (
            <tr key={user.id}>
              <td>{index + 1}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                <button onClick={() => handleEdit(user.id)}><CiEdit className='me-2' />Edit</button>
                <button onClick={() => handleDelete(user.id)}><MdDelete className="me-2" />Delete</button>
                <button className="btn btn-warning"><RiVipCrownLine className="me-2"/> Membership</button>
              </td>
            </tr>
          ))}
          {filteredUsers.length === 0 && (
            <tr>
              <td colSpan="4" className="no-users">
                No users found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  padding: 1rem;

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
    background-color:transparent;
  }

  .header input {
    padding: 0.5rem;
    font-size: 1rem;
    border: 1px solid #ccc;
    border-radius: 5px;
    width: 300px;
  }

  table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 1rem;
  }

  th, td {
    text-align: left;
    padding: 0.75rem;
    border: 1px solid #ccc;
  }

  th {
    background-color: #f4f4f4;
  }

  td button {
    padding: 0.5rem 1rem;
    margin-right: 0.5rem;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }

  td button:nth-child(1) {
    background-color: #007bff;
    color: #fff;
  }

  td button:nth-child(2) {
    background-color: #dc3545;
    color: #fff;
  }

  .no-users {
    text-align: center;
    color: #888;
  }
`;

export default UserManagement;
