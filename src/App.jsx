import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

function App() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8080/users")
      .then((data) => setUsers(data.data))
      .catch((err) => {
        console.log(err);
      });
  }, []);
  // console.log(users);
  const handleDelete = (id) => {
    // console.log('delete');
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`http://localhost:8080/users/${id}`).then((res) => {
          if (res.data?.deletedCount) {
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
            const newUsers = users.filter((user) => user._id != id);
            setUsers(newUsers);
          }
        });
      }
    });
  };
  return (
    <>
      <h1 className="text-xl text-center text-gray-800 p-3 bg-green-600 w-full">
        User Management System
      </h1>

      <div className="flex flex-col items-start justify-center w-full h-[85vh]">
        <Link to="/users" className="btn btn-primary mb-5">
          New User
        </Link>
        <div className="overflow-x-auto w-full">
          <table className="table text-gray-300">
            {/* head */}
            <thead>
              <tr className="text-white bg-gray-800">
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Gender</th>
                <th>Status</th>
                <th colSpan={2} className="text-center">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {users.map((user) => (
                <tr key={user._id}>
                  <th></th>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.gender}</td>
                  <td>{user.status}</td>
                  <td>
                    <button className="p-2 text-xs  bg-green-500 text-white">
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(user._id)}
                      className="p-2 px-4 mt-1  text-xs  bg-red-400 text-white"
                    >
                      X
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default App;
