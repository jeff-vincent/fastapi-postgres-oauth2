import React, { useEffect, useState } from 'react';
import './components.css';


const Profile = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch('http://localhost:8000/users/me/', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('jwt')}`, // Pass the access token from the browser's local storage
          },
          credentials: 'include', // Include cookies in the request
        });

        if (response.ok) {
          const userData = await response.json();
          setUser(userData);
          console.log(userData);
        } else {
          console.error('Error:', response.status);
        }
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return <div>User not found</div>;
  }

  return (
    <div className="dashboard">
      <h2 className="dashboard-title">Welcome, {user.email}!</h2>
      <div className="dashboard-info">
        <p className="dashboard-info-item">
          <span className="info-label">Email:</span> {user.email}
        </p>
      </div>
      <div className="dashboard-pets">
        <p className="pets-title">Pets:</p>
        <ul className="pets-list">
          {user.pets.map((pet) => (
            <li key={pet.id} className="pet-item">
              {pet.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Profile;
