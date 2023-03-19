import React, { useState, useEffect } from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

function App() {
  // Define state variables for the component
  const [contacts, setContacts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  // Fetch data from the test API when the component mounts using the useEffect hook
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setContacts(data));
  }, []);

  // Handle changes to the search input field
  const handleSearch = event => {
    setSearchTerm(event.target.value);
  };

  // Filter the list of contacts based on the search term
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Render component
  return (
    <div className="container">
      <h1 className="heading">Contacts Application</h1>
      <h2 className="heading">Resonate Solutions Technical Challenge</h2>

      <div className="search">
        <input
          type="text"
          placeholder="Search by name"
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>

      <ul className="list-group">
        {filteredContacts.map(contact => (
          <li key={contact.id} className="list-group-item">
            <FontAwesomeIcon icon={faUser} className="person-icon" />
            <div className="contact-info">
              <h2>{contact.name}</h2>
              <p><span className="label">Email:</span> {contact.email}</p>
              <p><span className="label">Phone:</span> {contact.phone}</p>
              <p><span className="label">Website:</span> {contact.website}</p>
              <p><span className="label">Address:</span>{contact.address.street} , {contact.address.suite}, {contact.address.city}, {contact.address.zipcode}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;