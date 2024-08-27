import React, { useState } from 'react';
import "./newoutlets.css"


const NewOutlets = () => {
  const [formValues, setFormValues] = useState({
    name: '',
    location: '',
    channel: '',
    type: '',
    subType: '',
    phone: '',
    email: '',
    contact: '',
    contactPhone: '',
    street: '',
    distributor: '',
    status: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formValues);
    // Save form data to a file or handle it as needed
  };

  const handleClose = () => {
    console.log('Form closed');
    // Handle form closing
  };

  return (
    <div className="new-outlets">
      <h1>New Outlet</h1>
      <form>
        <div>
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={formValues.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Location</label>
          <input
            type="text"
            name="location"
            value={formValues.location}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Channel</label>
          <select
            name="distributor"
            value={formValues.distributor}
            onChange={handleChange}
          >
            <option value="Select">Select</option>
            <option value="Item 2">Item 2</option>
            <option value="Item 3">Item 3</option>
            <option value="Item 4">Item 4</option>
          </select>
        </div>
        <div>
          <label>Type</label>
          <select
            name="distributor"
            value={formValues.distributor}
            onChange={handleChange}
          >
            <option value="Select">Select</option>
            <option value="Item 2">Item 2</option>
            <option value="Item 3">Item 3</option>
            <option value="Item 4">Item 4</option>
          </select>
        </div>
        <div>
          <label>Sub-type</label>
          <select
            name="distributor"
            value={formValues.distributor}
            onChange={handleChange}
          >
            <option value="Select">Select</option>
            <option value="Item 2">Item 2</option>
            <option value="Item 3">Item 3</option>
            <option value="Item 4">Item 4</option>
          </select>
        </div>
        <div>
          <label>Phone</label>
          <input
            type="text"
            name="phone"
            value={formValues.phone}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formValues.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Contact Name</label>
          <input
            type="text"
            name="contact"
            value={formValues.contact}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Contact Phone</label>
          <input
            type="text"
            name="contactPhone"
            value={formValues.contactPhone}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Street</label>
          <input
            type="text"
            name="street"
            value={formValues.street}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Distributor</label>
          <select
            name="distributor"
            value={formValues.distributor}
            onChange={handleChange}
          >
            <option value="Select">Select</option>
            <option value="Item 2">Item 2</option>
            <option value="Item 3">Item 3</option>
            <option value="Item 4">Item 4</option>
          </select>
        </div>
        <div>
          <label>Status</label>
          <select
            name="status"
            value={formValues.status}
            onChange={handleChange}
          >
            <option value="Select">Select</option>
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
          </select>
        </div>
        <div>
          <button type="button" onClick={handleSubmit}>Save</button>
          <button type="button" onClick={handleClose}>Close</button>
        </div>
      </form>
    </div>
  );
};

export default NewOutlets;
