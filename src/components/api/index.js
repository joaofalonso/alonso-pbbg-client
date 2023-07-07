
import "./Api.css"
import React, { useState, useEffect } from 'react';
import axios from 'axios';

export function Api() {
    const [data, setData] = useState([]);

    useEffect(() => {
    axios.get('http://127.0.0.1:5000/realms')        
    .then(response => {
        setData(response.data);
        console.log(response.data)
    })
    .catch(error => {
        console.error(error);
    });
    }, []);

    return (
        <ul className="list">
    {
        /*typeof data.realms == "undefined" ? (<p>Loading...</p>): ()*/
        data.map(realm => (
            <><li>{realm.realm}</li>
            <li>{realm.level}</li>
            <li>{realm.type}</li>
            <li>{realm.building}</li>
            <li>{realm.experience}</li>
            <li>{realm.food}</li>
            <li>{realm.gold}</li>
            <li>{realm.unit}</li></>
    ))                  
    }    
    </ul>
    )
    }

export default Api;