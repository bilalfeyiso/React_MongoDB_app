import React, { useState } from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import './css/style.css'


const CreateUser = () => {

  const [firstName, setFirstName] = useState ()
  const [lastName, setLastName] = useState ()
  const [dateOfBirth, setDateOfBirth] = useState ()
  const [street, setStreet] = useState ()
  const [houseNumber, setHouseNumber] = useState ()
  const [zipCode, setZipCode] = useState ()
  const [city, setCity] = useState ()
  const [userEmail, setUserEmail] = useState ()
  const [gender, setGender] = useState ()
  const [status, setStatus] = useState ()
  const [typesOfMembership, setTypesOfMembership] = useState ('inputItems1')
  const navigate = useNavigate()

  const Submit = (e) => {
    e.preventDefault()
    axios.post("http://localhost:4000/createUser", {
        firstName,
        lastName,
        dateOfBirth,
        street,
        houseNumber,
        zipCode,
        city,
        userEmail,
        gender,
        status,
        typesOfMembership 
    })
    .then(result => {
      console.log(result)
      navigate('/')
    })
    .catch(err => console.log(err))
  }

  return (
    <div className="b-containers">
      <div className="b-items">
        <form onSubmit={Submit}>
            <h2 className='header'>Add User</h2>
            <div className='item'>
                <label htmlFor=''>First Name</label>
                <input type='text' placeholder='Enter Name' className='inputItems' 
                onChange={(e) => setFirstName(e.target.value)}/>
            </div>
            <div className='item'>
                <label htmlFor=''>Last Name</label>
                <input type='text' placeholder='Enter Name' className='inputItems' 
                onChange={(e) => setLastName(e.target.value)}/>
            </div>
            <div className='mb-2'>
                <label htmlFor=''>Date Of Birth</label>
                <input type='date'  className='inputItems' 
                onChange={(e) => setDateOfBirth(e.target.value)}/>
            </div>
            <div className='item'>
                <label htmlFor=''>Street</label>
                <input type='text' placeholder='east-straat' className='inputItems' 
                onChange={(e) => setStreet(e.target.value)}/>
            </div>
            <div className='item'>
                <label htmlFor=''>House Number</label>
                <input type='text' placeholder='Enter h.number' className='inputItems' 
                onChange={(e) =>  setHouseNumber(e.target.value)}/>
            </div>
            <div className='item'>
                <label htmlFor=''>Zip-Code</label>
                <input type='text' placeholder='Enter z-code' className='inputItems' 
                onChange={(e) => setZipCode(e.target.value)}/>
            </div>
            <div className='item'>
                <label htmlFor=''>City</label>
                <input type='text' placeholder='Enter city' className='inputItems' 
                onChange={(e) => setCity(e.target.value)}/>
            </div>
            <div className='item'>
                <label htmlFor=''>User Email</label>
                <input type='text' placeholder='exmaple@gmail.com' className='inputItems' 
                onChange={(e) => setUserEmail(e.target.value)}/>
            </div>


            <div className='item'>
    <label htmlFor='gender'>Gender</label>
    <div className='radio inline'>
        <input type='radio' className='radio-label' id='radio-male' name="gender" value="Male" onChange={(e) => setGender(e.target.value)}/>
        <label htmlFor='radio-male'>Male</label>
    </div>
    <div className='radio inline'>
        <input type='radio' className='radio-label' id='radio-female' name="gender" value="Female" onChange={(e) => setGender(e.target.value)}/>
        <label htmlFor='radio-female'>Female</label>
    </div>
    <div className='radio inline'>
        <input type='radio' className='radio-label' id='radio-other' name="gender" value="Other" onChange={(e) => setGender(e.target.value)}/>
        <label htmlFor='radio-other'>Other</label>
    </div>
</div>

<div className='item'>
    <label htmlFor='status' className='radio-label'>Status</label>
    <div className='radio inline'>
        <input type='radio' className='inputItems' id='radio-not-paid' name="status" value="Not Paid" onChange={(e) => setStatus(e.target.value)}/>
        <label htmlFor='radio-not-paid' className='radio-label'>Not Paid</label>
    </div>
    <div className='radio inline'>
        <input type='radio' className='inputItems' id='radio-paid' name="status" value="Paid" onChange={(e) => setStatus(e.target.value)}/>
        <label htmlFor='radio-paid' className='radio-label'>Paid</label>
    </div>
</div>


            <div className='item'>
            <label htmlFor='typesOfMembership'>Types Of Membership</label>
                <select name='typesOfMembership' className='dropdown' value={typesOfMembership}  onChange={(e) => setTypesOfMembership(e.target.value)}>
                <option value="">Select Membership Type</option>
                <option value='New' className='inputItems1'>New</option>
                <option value='Junior' className='inputItems2'>Junior</option>
                <option value='Senior' className='inputItems3'>Senior</option>
               <option value='TableTennis' className='inputItems4'>Table tennis during the day</option>
               <option value='Advertiser' className='inputItems5'>Advertiser</option>
               <option value='ClubOf50' className='inputItems6'>Club of 50</option>
               <option value='OldMember' className='inputItems7'>Old Member</option>
                </select>
            </div>
            <button className='upb btn btn-success'>Submit</button>
        </form>
    </div>
    </div>
  )
}

export default CreateUser
