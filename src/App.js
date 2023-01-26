
import { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [users, setUsers] = useState([]);


  useEffect(() => {
    fetch('http://localhost:5000/users')
      .then(res => res.json())
      .then(data => setUsers(data));
  }, [])


  return (
    <div className="App">
      <h2>Users: {users.length}</h2>

      {/* map  */}
      <div>
        {
          users.map(user => <p key={user._id}> {user.name} {user.email} </p>)
          
        }
      </div>
    </div>
  );
}

export default App;

//server a cors middle ware na thakle onno port a data show korbe na, 
