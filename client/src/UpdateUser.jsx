import React, {useState, useEffect} from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'
import './css/style.css'

const UpdateUser = () => {

    const {id} = useParams()
 
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [street, setStreet] = useState('');
    const [houseNumber, setHouseNumber] = useState('');
    const [zipCode, setZipCode] = useState('');
    const [city, setCity] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [gender, setGender] = useState('');
    const [status, setStatus] = useState('');
    const [typesOfMembership, setTypesOfMembership] = useState('inputItems1');
    const navigate = useNavigate()

    //to get the recordes from bds
    //to get the records from the database
    useEffect(() => {
      axios.get('http://localhost:4000/getUser/' + id)
          .then(result => {
              console.log(result);
              setFirstName(result.data.firstName || '');  // Ensure a default value is set
              setLastName(result.data.lastName || '');    // Ensure a default value is set
              setDateOfBirth(result.data.dateOfBirth || '');  // Ensure a default value is set
              setStreet(result.data.street || '');  // Ensure a default value is set
              setHouseNumber(result.data.houseNumber || '');  // Ensure a default value is set
              setZipCode(result.data.zipCode || '');  // Ensure a default value is set
              setCity(result.data.city || '');  // Ensure a default value is set
              setUserEmail(result.data.userEmail || '');  // Ensure a default value is set
              setGender(result.data.gender || '');  // Ensure a default value is set
              setStatus(result.data.status || '');  // Ensure a default value is set
              setTypesOfMembership(result.data.typesOfMembership || '');  // Ensure a default value is set
          })
          .catch(err => console.log(err));
  }, [id]);


      /// check above


      const Update = (e) => {
        e.preventDefault();
        axios.put("http://localhost:4000/updateUser/" + id, {
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
                console.log(result);
                navigate('/');
            })
            .catch(err => console.log(err));
    };



  return (
    <div className="b-containers">
    <div className="b-items">
      <form onSubmit={Update}>
          <h2 className='header'>Update User</h2>
          <div className='mb-2'>
                <label htmlFor=''>First Name</label>
                <input type='text' placeholder='Enter Name' className='inputItems' 
               value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
            </div>
            <div className='mb-2'>
                <label htmlFor=''>Last Name</label>
                <input type='text' placeholder='Enter Name' className='inputItems' 
              value={lastName}  onChange={(e) => setLastName(e.target.value)}/>
            </div>
            <div className='mb-2'>
                <label htmlFor=''>Date Of Birth</label>
                <input type='text' placeholder='Enter Name' className='inputItems' 
               value={dateOfBirth} onChange={(e) => setDateOfBirth(e.target.value)}/>
            </div>
            <div className='mb-2'>
                <label htmlFor=''>Street</label>
                <input type='text' placeholder='Enter Name' className='inputItems' 
              value={street}  onChange={(e) => setStreet(e.target.value)}/>
            </div>
            <div className='mb-2'>
                <label htmlFor=''>House Number</label>
                <input type='text' placeholder='Enter Name' className='inputItems' 
              value={houseNumber}  onChange={(e) =>  setHouseNumber(e.target.value)}/>
            </div>
            <div className='mb-2'>
                <label htmlFor=''>Zip-Code</label>
                <input type='text' placeholder='Enter Name' className='inputItems' 
               value={zipCode} onChange={(e) => setZipCode(e.target.value)}/>
            </div>
            <div className='mb-2'>
                <label htmlFor=''>City</label>
                <input type='text' placeholder='Enter Name' className='inputItems' 
              value={city}  onChange={(e) => setCity(e.target.value)}/>
            </div>



            <div className='mb-2'>
                <label htmlFor=''>User Email</label>
                <input type='text' placeholder='Enter Name' className='inputItems' 
              value={userEmail}  onChange={(e) => setUserEmail(e.target.value)}/>
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



            <div className='mb-2'>
                <label htmlFor='typesOfMembership'>Types Of Membership</label>
                <select name='typesOfMembership' className='dropdown' value={typesOfMembership}  onChange={(e) => setTypesOfMembership(e.target.value)}>
                <option value="">Select Membership Type</option>
                <option value='New' className='inputItems1'>New</option>
                <option value='Junior' className='inputItems2'>Junior</option>
                <option value='Senior' className='inputItems3'>Senior</option>
               <option value='Table tennis during the day' className='inputItems4'>Table tennis during the day</option>
               <option value='Advertiser' className='inputItems5'>Advertiser</option>
               <option value='Club Of 50' className='inputItems6'>Club of 50</option>
               <option value='Old Member' className='inputItems7'>Old Member</option>
                </select>
            </div>
          <button className='upb btn btn-success'>Update</button>
      </form>
  </div>
  </div>
  )
}

export default UpdateUser
