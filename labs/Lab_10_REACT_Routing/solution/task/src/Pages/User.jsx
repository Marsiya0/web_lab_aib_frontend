import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const User = () => {
  const { id } = useParams();
  const [user, setUsers] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("https://swapi.dev/api/people/");
        const data = await response.json();
        setUsers(data.results);
      } catch (error) {
        console.error("Error fetching user list:", error);
      }
    };

    fetchUsers();
  }, [id]);

  return (
    <div>
      <h2>О пользователе:</h2>
      {user && (
        <div>
          <p>ID Пользователя: {id}</p>
          <p>Имя: {user.name}</p>
          <p>Рост:{user.height}</p>
          <p>Вес:{user.mass}</p>
          <p>Пол:{user.gender}</p>
        </div>
      )}
    </div>
  );
};

export default User;