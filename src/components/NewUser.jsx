import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const NewUser = () => {
    const handleAddUser = (e)=>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const gender = form.gender.value;
        const status = form.status.value;
        const info = {name, email, gender, status}
        // console.log(name, email, gender, status);
        axios.post('http://localhost:8080/users', info)
        .then(data=> {
            // console.log(data.data);
            if(data.data?.insertedId){
              alert('user created')
            }
        })
        .catch(err=>console.log(err))
    }
  return (
    <div>
      <Link to='/' className="btn btn-primary"> go to user</Link>
      <div className="flex flex-col items-center justify-center">
        <h2 className="text-xl text-white">New User</h2>
        <p>Use the below form to create a new account</p>
        <form onSubmit={handleAddUser} className="w-full">
          <input className="mb-3 p-2 w-full bg-white rounded-lg" type="text" name="name" />
          <br />
          <input className="mb-3 p-2 w-full bg-white rounded-lg" type="email" name="email" id="" />
          <br />
          <label htmlFor="gender">Gender: </label>
          <input type="radio" defaultChecked value="Male" name="gender" id="" /> Male
          <input type="radio" value="Female" name="gender" id="" /> Female
          <br />
          <label htmlFor="status">Status: </label>
          <input type="radio" defaultChecked name="status" value="Active" id="" /> Active
          <input type="radio" name="status" value="Inactive" id="" /> Inactive

          <input type="submit" value="Add User" className="btn btn-primary block w-full mt-2" />
        </form>
      </div>
    </div>
  );
};

export default NewUser;
