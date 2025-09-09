import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <div className="container">
      <header>
        <h1>🦉 Owl AI - User Directory</h1>
      </header>
      <main>
        {loading ? (
          <p>Loading users...</p>
        ) : (
          <div className="user-list">
            {users.map((user) => (
              <div className="user-card" key={user.id}>
                <h2>{user.name}</h2>
                <p>
                  <strong>Email:</strong> {user.email}
                </p>
                <p>
                  <strong>City:</strong> {user.address.city}
                </p>
                <p>
                  <strong>Company:</strong> {user.company.name}
                </p>
              </div>
            ))}
          </div>
        )}
      </main>
      <footer>
        <p>© 2025 Owl AI</p>
      </footer>
    </div>
  );
}

export default App;
