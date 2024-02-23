import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './css/table.css'

const Users = () => {

  const  [users, setUsers] = useState([])

  //pitch /get the recored from databse to shown in the table

  useEffect(() => {
    axios.get('http://localhost:4000')
    .then(result => setUsers(result.data))
    .catch(err => console.log(err))

  }, [])

  const handleButton = (e) => {
    
    const confirmation = window.confirm('Warning: Are you sure you want to DELETE the record?');
    if (confirmation) {
      handleDelete(user=>user._id);
    } else {
      // Prevent the default action of the click event
      e.preventDefault();
    }
  };
  

  const handleDelete = (id) => {
    axios.delete('http://localhost:4000/deleteUser/'+id)
    .then(res =>{ 
      console.log(res);
      // Update the state to remove the deleted user
      setUsers(prevUsers => prevUsers.filter(user => user._id !== id));
    })
    .catch(err => console.log(err))
  }


  return (
    <div className="contianer">
      <div className="items">
        <h1 className='header'>Membership Registration</h1>
        <Link to="/create" className=' bh  btn btn-success'><i className="fa-solid fa-angles-left"></i>  Add User</Link>
        <table className='table'>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Date Of Birth</th>
              <th>Street</th>
              <th>House Number</th>
              <th>Zip-Code</th>
              <th>City</th>
              <th>User Email</th>
              <th>Gender</th>
              <th>Status</th>
              <th>Types Of Membership</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              users.map((user) =>( 
                 <tr key={user._id}>
                  <td>{user.firstName}</td>
                  <td>{user.lastName}</td>
                  <td>{user.dateOfBirth}</td>
                  <td>{user.street}</td>
                  <td>{user.houseNumber}</td>
                  <td>{user.zipCode}</td>
                  <td>{user.city}</td>
                  <td>{user.userEmail}</td>
                  <td>{user.gender}</td>
                  <td>{user.status}</td>
                  <td>{user.typesOfMembership}</td>
                  <td>
                  <Link to={`/update/${user._id}`} className='btn btn-success'>Update</Link>
                    <button className='btn btn-danger' onClick={(e) =>{ handleButton(); handleDelete(user._id); }}>Delete</button>
                    </td>
                </tr>
              ))
            }

          </tbody>
        </table>
    </div> 
    </div>
  )
}

export default Users
