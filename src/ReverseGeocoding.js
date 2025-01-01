// src/ReverseGeocoding.js

import React, { useState } from 'react';
import axios from 'axios';

function ReverseGeocoding() {
    const [lat, setLat] = useState('');
    const [lon, setLon] = useState('');
    const [location, setLocation] = useState(null);
    const [error, setError] = useState('');

    const getReverseGeoLocation = async () => {
        try {
            setError(''); // Reset error
            const response = await axios.get(`https://api.api-ninjas.com/v1/reversegeocoding?lat=${lat}&lon=${lon}`, {
                headers: { 'X-Api-Key': 'V6acywBV8zWqimywYB1NSO6cP1LpF0soxnP5xVps' },
            });

            if (response.data && response.data.length > 0) {
                setLocation(response.data[0]); // Set the first result
            } else {
                setError('No data found for the coordinates');
            }
        } catch (err) {
            setError('Error fetching data: ' + err.message);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        getReverseGeoLocation();
    };

    return (
        <div>
            <h1>Reverse Geocoding</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="number"
                    value={lat}
                    onChange={(e) => setLat(e.target.value)}
                    placeholder="Enter latitude"
                    required
                />
                <input
                    type="number"
                    value={lon}
                    onChange={(e) => setLon(e.target.value)}
                    placeholder="Enter longitude"
                    required
                />
                <button type="submit">Get Location</button>

                {error && <p style={{ color: 'red' }}>{error}</p>}
            {location && (
                <div>
                    <h2>Location for Coordinates:</h2>
                    <p>City: {location.name}</p>
                    <p>State: {location.state}</p>
                    <p>Country: {location.country}</p>
                </div>
            )}
            </form>
            
        </div>
    );
}

export default ReverseGeocoding;