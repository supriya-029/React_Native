import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { collection, addDoc } from 'firebase/firestore';
import { db } from './src/firebase';



const Page1 = ({ history }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState(new Date());
  const [occupation, setOccupation] = useState('');
  const [company, setCompany] = useState('');

  const handleSubmit = async () => {
    try {
      // Push the captured details to Firebase Firestore
      const docRef = await addDoc(collection(db, 'users'), {
        firstName,
        lastName,
        dateOfBirth,
        occupation,
        company,
      });
      console.log('Document written with ID: ', docRef.id);

      
      history.push('/Page2');
    } catch (error) {
      console.error('Error adding document: ', error);
    }
  };

  return (
    <div class="form">
      <h1>Enter Your Details</h1>
      <input
        type="text"
        placeholder="First Name"
        value={firstName}
        onChange={e => setFirstName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Last Name"
        value={lastName}
        onChange={e => setLastName(e.target.value)}
      />
      <DatePicker
        selected={dateOfBirth}
        onChange={date => setDateOfBirth(date)}
      />
      <input
        type="text"
        placeholder="Occupation"
        value={occupation}
        onChange={e => setOccupation(e.target.value)}
      />
      <input
        type="text"
        placeholder="Company"
        value={company}
        onChange={e => setCompany(e.target.value)}
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default Page1;
