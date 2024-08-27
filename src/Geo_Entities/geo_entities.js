import React, { useState } from 'react';
import './geo_entities.css';

function GeoEntities() {
    const [selectedTab, setSelectedTab] = useState(null);

    const handleButtonClick = (type) => {
        setSelectedTab(type);
        // Simulate opening a new window (in real applications, navigate to a different route)
        alert(`Opening ${type} window`);
    };

    const handleClose = () => {
        alert('Closing application');
        // Simulate closing the application (in web app, could navigate away or close a modal)
    };

    const handleBack = () => {
        alert('Going back to the previous screen');
        // Simulate going back (in web app, use history.goBack())
    };

    const handleRefresh = () => {
        alert('Refreshing data');
        // Simulate refreshing data (fetch new data from API)
    };

    return (
        <div className="geo-entities">
            <h1 className="header">Geological Entities</h1>

            <div className="buttons">
                <button className="btn territory" onClick={() => handleButtonClick('Territory')}>Territory</button>
                <button className="btn country" onClick={() => handleButtonClick('Country')}>Country</button>
                <button className="btn province" onClick={() => handleButtonClick('Province')}>Province</button>
                <button className="btn locality" onClick={() => handleButtonClick('Locality')}>Locality</button>
                <button className="btn refresh" onClick={handleRefresh}>Refresh</button>
            </div>

            <div className="table-container">
                <table className="geo-table">
                    <thead>
                        <tr>
                            <th>Title 1</th>
                            <th>Title 2</th>
                            <th>Title 3</th>
                            <th>Title 4</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Data 1</td>
                            <td>Data 2</td>
                            <td>Data 3</td>
                            <td>Data 4</td>
                        </tr>
                        <tr>
                            <td>Data 5</td>
                            <td>Data 6</td>
                            <td>Data 7</td>
                            <td>Data 8</td>
                        </tr>
                        {/* Add more rows as needed */}
                    </tbody>
                </table>
            </div>

            <div className="footer-buttons">
                <button className="btn back" onClick={handleBack}>Back</button>
            </div>
        </div>
    );
}

export default GeoEntities;
