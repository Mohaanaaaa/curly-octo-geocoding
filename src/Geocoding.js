// src/Geocoding.js

import React, { useState } from 'react';
import axios from 'axios';

function Geocoding() {
    const [city, setCity] = useState('');
    const [location, setLocation] = useState(null);
    const [error, setError] = useState('');

    const getGeoLocation = async () => {
        try {
            setError(''); // Reset error
            const response = await axios.get(`https://api.api-ninjas.com/v1/geocoding?city=${city}`, {
                headers: { 'X-Api-Key': 'V6acywBV8zWqimywYB1NSO6cP1LpF0soxnP5xVps' },
            });

            if (response.data && response.data.length > 0) {
                setLocation(response.data[0]); // Set the first result
            } else {
                setError('No data found for the city');
            }
        } catch (err) {
            setError('Error fetching data: ' + err.message);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        getGeoLocation();
    };

    return (
        <div className='container-Geo'>
            <h1>Geocoding</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="Enter city name"
                    required
                />
                <button type="submit">Get Coordinates</button>

                {error && <p style={{ color: 'red' }}>{error}</p>}
                {location && (
                <div>
                    <h2>Location for {location.name}:</h2>
                    <p>Latitude: {location.latitude}</p>
                    <p>Longitude: {location.longitude}</p>
                </div>
            )}
            </form>
            
        </div>
    );
}

export default Geocoding;