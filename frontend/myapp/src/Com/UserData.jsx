
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
//import { fetchUsers, deleteUser, updateUser } from './redux/actions/userActions'; // Adjust the path as necessary
import "./UserData.css"; // Import CSS file for styling
import {fetchUserData ,deleteUser,updateUser} from "../redux/actions/userDataActions"; //
function UserData() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.userData.users);
  
  const [editMode, setEditMode] = useState(false);
  const [editedUser, setEditedUser] = useState({
    username: "",
    email: "",
  });

  useEffect(() => {
    dispatch(fetchUserData());
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(deleteUser(id));
  };

  const handleEdit = (user) => {
    setEditedUser(user);
    setEditMode(true);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setEditedUser({ ...editedUser, [name]: value });
  };

  const handleUpdate = () => {
    dispatch(updateUser(editedUser));
    setEditMode(false);
  };

  return (
    <div>
      <h1>UserData</h1>
      <table className="user-table">
        <thead>
          <tr>
            <th>Username</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>Company Name</th>
            <th>Delete</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id}>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.phoneNumber}</td>
              <td>{user.companyName}</td>
              <td>
                <button onClick={() => handleDelete(user._id)}>Delete</button>
              </td>
              <td>
                <button onClick={() => handleEdit(user)}>Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {editMode && (
        <div>
          <h2>Edit User</h2>
          <input
            type="text"
            name="username"
            value={editedUser.username}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            value={editedUser.email}
            onChange={handleChange}
          />
          <button onClick={handleUpdate}>Update</button>
        </div>
      )}
    </div>
  );
}

export default UserData;
