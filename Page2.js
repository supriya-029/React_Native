import React, { useEffect, useState } from 'react';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from './src/firebase';


const Page2 = () => {
  const [userDetails, setUserDetails] = useState([]);

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const q = query(
          collection(db, 'users'),
          where('firstName', '!=', null)
        );
        const querySnapshot = await getDocs(q);
        const userDetails = querySnapshot.docs.map(doc => doc.data());
        setUserDetails(userDetails);
      } catch (error) {
        console.error('Error fetching user details: ', error);
      }
    };

    fetchUserDetails();
  }, []);

  return (
    <div>
      {userDetails.map(user => (
        <p key={user.firstName}>
          {`${user.firstName} ${user.lastName} is ${calculateAge(
            user.dateOfBirth.toDate()
          )} years old and working as a ${user.occupation} in ${user.company}.`}
        </p>
      ))}
    </div>
  );
};



export default Page2;
