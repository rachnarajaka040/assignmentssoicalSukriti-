import React, { useState, useEffect } from "react";
import axios from "axios";
import "./UserData.css"; // Import CSS file for styling

function UserData() {
  const [userData, setUserData] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [editedUser, setEditedUser] = useState({
    username: "",
    email: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/api/rachna/character"
        );
        setUserData(response.data);
      } catch (error) {
        console.log(error, "error");
      }
    };

    fetchData();
  }, []);

  const handleDelete = async (_id) => {
    try {
      await axios.delete(`http://localhost:3000/api/rachna/character/${_id}`);
      setUserData(userData.filter((user) => user._id !== _id));
    } catch (error) {
      console.log(error);
    }
  };

  const handleEdit = (user) => {
    setEditedUser(user);
    setEditMode(true);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setEditedUser({ ...editedUser, [name]: value });
  };

  const handleUpdate = async () => {
    try {
      await axios.put(
        `http://localhost:3000/api/rachna/character/${editedUser._id}`,
        editedUser
      );
      // Update the userData state with the edited user data
      setUserData(
        userData.map((user) =>
          user._id === editedUser._id ? editedUser : user
        )
      );
      setEditMode(false);
    } catch (error) {
      console.log(error);
    }
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
            {/* Add more headers if needed */}
          </tr>
        </thead>
        <tbody>
          {userData.map((user) => (
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
              {/* Add more cells for additional data */}
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
