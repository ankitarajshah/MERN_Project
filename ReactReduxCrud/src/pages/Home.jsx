import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Home = () => {
  const users = useSelector((state) => state.users);
  console.log(users);
  return (
    <div>
      <h2>Crud App JSON Server</h2>
      <Link to="/create" className="p-2   border-2 rounded-lg border-blue-600">
        Create User
      </Link>
      <table className="p-2  border-2 table-auto">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                <button className="p-2  border-2">Edit</button>
                <button className="p-2  border-2">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
