

import React from "react";
import './App.css';

function Details({ users }) {
    return (
        <div className="container">
            <h1>All Users</h1>
            <ul>
                {users && users.length > 0 ? (
                    users.map((user, index) => (
                        <li key={index}>
                            {user.firstname} {user.lastname} (CIN: {user.cin})
                            
                        </li>
                        
                    ))
                ) : (
                    <li>No users </li>
                )}
            </ul>
        </div>
    );
}

export default Details;
