import React, { useState } from 'react';
import './regions.css';

function Regions() {
  const [field1, setField1] = useState('');
  const [field2, setField2] = useState('');
  const [field3, setField3] = useState('');
  const [field4, setField4] = useState('');
  const [field5, setField5] = useState('');
  const [field6, setField6] = useState('');
  const [field7, setField7] = useState('');
  const [field8, setField8] = useState('');
  const [field9, setField9] = useState('');

  const handleSave = () => {
    const data = `
      Field 1: ${field1}
      Field 2: ${field2}
      -------------
    `;
    try {
      // Simulate saving to a file
      console.log('Saving data:', data);
      alert('Information saved successfully!');
    } catch (ex) {
      alert('Error saving information: ' + ex.message);
    }
  };

  return (
    <div className="container">
      <div className="header">Regions</div>

      <label className="label">Search</label>
      <input
        type="text"
        className="inputField"
        value={field1}
        onChange={(e) => setField1(e.target.value)}
      />

      <label className="label">Code</label>
      <input
        type="text"
        className="inputField"
        value={field2}
        onChange={(e) => setField2(e.target.value)}
      />

      <label className="label">Continent</label>
      <input
        type="text"
        className="inputField"
        value={field3}
        onChange={(e) => setField3(e.target.value)}
      />

      <label className="label">Region</label>
      <input
        type="text"
        className="inputField"
        value={field4}
        onChange={(e) => setField4(e.target.value)}
      />

      <label className="label">Country</label>
      <input
        type="text"
        className="inputField"
        value={field5}
        onChange={(e) => setField5(e.target.value)}
      />

      <label className="label">Territory</label>
      <input
        type="text"
        className="inputField"
        value={field6}
        onChange={(e) => setField6(e.target.value)}
      />

      <label className="label">County</label>
      <input
        type="text"
        className="inputField"
        value={field7}
        onChange={(e) => setField7(e.target.value)}
      />

      <label className="label">Locality</label>
      <input
        type="text"
        className="inputField"
        value={field8}
        onChange={(e) => setField8(e.target.value)}
      />

      <label className="label">Location</label>
      <input
        type="text"
        className="inputField"
        value={field9}
        onChange={(e) => setField9(e.target.value)}
      />

      <div className="button-group">
        <button className="button button-save" onClick={handleSave}>
          Save
        </button>
        <button className="button button-back" onClick={handleSave}>
          Back
        </button>
        <button className="button button-search">Search</button>
      </div>
    </div>
  );
}

export default Regions;
