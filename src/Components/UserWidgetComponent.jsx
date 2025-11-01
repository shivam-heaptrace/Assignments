import UserListComponent from './UserListComponent';
import userList from '../assets/data.js';
import '../assets/UserWidgetComponent.css';
import { useState } from 'react';

const UserWidgetComponent = ({ onSwitchToAdd, onswitchToEdit }) => {
  const [users, setUsers] = useState(userList);
  const [searchTerm, setSearchTerm] = useState('');

  function navigator() {
    const navBar = document.getElementById('navbar');

    if (navBar) navBar.classList.toggle('hidden');
    else alert("Error: Element with ID 'navbar' not found.");
  }

  const onEditUser = (userId) => {
    console.log(`Edit User component was clicked! ${userId}`);
    onswitchToEdit(userId);
  };

  const onDeleteUser = (userId) => {
    setUsers(users.filter((user) => user.id !== userId));
    alert(`User with ID:${userId} deleted successfully`);
  };

  const filteredUsers = users.filter(
    (user) =>
      user.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'row', width: '100%', height: '100%' }}>
        <div style={{ display: 'flex', flexDirection: 'column' }} id='navbar'>
          <h1 style={{ marginTop: '0%' }}>
            <span style={{ color: 'pink' }}>M</span>ultiKart
          </h1>
          <h3 style={{ width: '100%' }}>Main Menu</h3>
          <nav>
            <ul>
              <li style={{ padding: '10px 0' }}>
                <i className='fa-solid fa-gauge-high'></i> DashBoard
              </li>
              <li style={{ padding: '10px 0' }}>
                <i className='fa-solid fa-user-plus'></i> Users
              </li>
            </ul>
          </nav>
        </div>
        <div style={{ width: '-webkit-fill-available' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span onClick={navigator}>
              <i className='fa-solid fa-bars'></i>
            </span>
            <div style={{ height: '5em', width: '15em', backgroundColor: '#d3cdcd' }}>
              <div style={{ marginTop: '8px', display: 'flex' }}>
                <div style={{ width: '50%' }}>
                  <img
                    src='https://images.unsplash.com/photo-1583692331507-fc0bd348695d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWFuJTIwZmFjZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500'
                    alt='Man-face'
                    style={{ borderRadius: '50%', height: '50%', width: '50%' }}
                  ></img>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <label>Franklin Jr.</label>
                  <sub>Super Admin</sub>
                </div>
                <i className='fa-solid fa-caret-down'></i>
              </div>
            </div>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '1em', marginBottom: '1em' }}>
            <div>
              <b>Users</b>
            </div>
            <div id='buttons'>
              <span>
                <button type='button' style={{ backgroundColor: 'white', color: 'blueviolet', borderRadius: '11%' }}>
                  <i className='fa-solid fa-list'></i>
                </button>
                <button type='button' style={{ backgroundColor: 'blueviolet', color: 'white', borderRadius: '11%' }}>
                  <i className='fa-solid fa-grip'></i>
                </button>
              </span>
              <button
                onClick={onSwitchToAdd}
                type='button'
                style={{ backgroundColor: 'blueviolet', color: 'white', borderRadius: '11%' }}
              >
                + Add User
              </button>
            </div>
          </div>
          <div style={{ border: '1px', borderColor: 'black', borderStyle: 'solid', height: '80vh', width: '95%' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <div>
                <span style={{ backgroundColor: 'rgb(239, 239, 239)' }}>
                  <button type='button'>
                    <i className='fa-solid fa-arrow-down-short-wide'></i> Sort By
                  </button>
                </span>
                <span>
                  <button type='button'>
                    <i className='fa-solid fa-filter'></i> Filter By
                  </button>
                </span>
              </div>
              <span>
                <input
                  type='text'
                  placeholder='🔍Search here'
                  value={searchTerm}
                  onChange={(event) => setSearchTerm(event.target.value)}
                ></input>
              </span>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'flex-start' }}>
              <UserListComponent users={filteredUsers} onEditUser={onEditUser} onDeleteUser={onDeleteUser} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserWidgetComponent;
